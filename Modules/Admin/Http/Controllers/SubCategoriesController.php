<?php
namespace Modules\Admin\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\{Category};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Gate;

class SubCategoriesController extends Controller
{


    /**
     * Display a listing of the resource.view('admin::
     *
     * @return \Illuminate\Http\Response
     */
    public function index($cat_id,Request $request)
    {
        try {
            $currentCat = Category::with('getParentCategories')->where('id',$cat_id)->first();
            $parentId = "";
            if($currentCat){
                $parentId = $currentCat->parent_id;
            }
            $categories = Category::where('parent_id',$cat_id)->orderBy('id','asc')->paginate(10);
            return view('admin::categories.subcategories.index', compact('categories','cat_id','parentId','currentCat'));
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($cat_id)
    {
        try {
            return view('admin::categories.subcategories.createOrUpdate', compact('cat_id'));
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }

    }

    public function store($cat_id,Request $request)
    {
        try {
            $request->validate([
                'image' => 'mimes:jpg,jpeg,png|max:2048'
            ]);
            $requestData = $request->all();
            if($request->file()) {
                $fileName = time().'_'.$request->image->getClientOriginalName();
                $filePath = $request->file('image')->storeAs('uploads', $fileName, 'public');
                $requestData['image'] = '/storage/' . $filePath;
            }
            $requestData['status'] = (isset($requestData['status'])) ? 1 : 0;
            $requestData['parent_id'] = $cat_id;
            Category::create($requestData);
            return redirect()->route('sub-categories',[$cat_id])->with('success', 'Sub Category has been saved successfully');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->withError($e->getMessage())->withInput();
        }
    }

    public function view($id)
    {
        $category = Category::findOrFail($id);
        return view('admin::categories.subcategories.show', compact('category'));
    }


    public function edit($cat_id)
    {
        $category = Category::findOrFail($cat_id);
        return view('admin::categories.subcategories.createOrUpdate', compact('category','cat_id'));
    }


    public function update(Request $request, $id)
    {
        try {
            $request->validate([ 'image' => 'mimes:jpg,jpeg,png|max:2048' ]);
            $requestData = $request->all();
            if($request->file()) {
                $fileName = time().'_'.$request->image->getClientOriginalName();
                $filePath = $request->file('image')->storeAs('uploads', $fileName, 'public');
                $requestData['image'] = '/storage/' . $filePath;
            }
            unset($requestData['_token']);
            unset($requestData['_method']);
            $requestData['status'] = (isset($requestData['status'])) ? 1 : 0;
            Category::where("id",$id)->update($requestData);
            $category = Category::find($id);
            return redirect()->route('sub-categories',[$category->parent_id])->with('success', 'Category has been updated successfully.');
        } catch (\Illuminate\Database\QueryException $e) {
            dd($e);
            return back()->withError($e->getMessage())->business-categorieswithInput();
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $businesscategory = Category::findOrFail($id);
            $businesscategory->delete();
            return back();
        } catch (\Exception $e) {
            return back()->withError($e->getMessage());
        }
    }


    public function treeview(Request $request)
    {
        $treeViewData = Category::whereNull('parent_id')->with('getSubCategories')->orderBy('order','asc')->get();
        return view('admin::businesscategories.treeview', compact('treeViewData'));
    }

    public function updateOrderBy(Request $request)
    {
        if($request->page == 1){
            $skip = 0;
        }else{
            $skip = ($request->page*config('get.ADMIN_PAGE_LIMIT'))-config('get.ADMIN_PAGE_LIMIT');
        }

        if(isset($request->sort) && $request->sort != ""){
            $sort = $request->sort;
            $direction = $request->direction;
        }else{
            $sort = "order";
            $direction = "asc";
        }
        $mainCategory = Category::where('parent_id',$request->cat_id)->sortable([$sort => $direction])->skip($skip)->take(config('get.ADMIN_PAGE_LIMIT'))->get();

        foreach ($mainCategory as $key => $category) {
            Category::where('id',$request->order[$key]['id'])->update(['order' => $category->id]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Successfully update',
        ]);
    }

}
