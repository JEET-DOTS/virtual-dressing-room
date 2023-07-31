<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Routing\Controller;

use Illuminate\Http\Request;
use App\Models\{Category};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Gate;

class categoriesController extends Controller
{

    public function index(Request $request)
    {
        $categories = Category::whereNull('parent_id')->orderBy('id','desc')->paginate(10);
        return view('admin::categories.index', compact('categories'));
    }

    public function create()
    {
        $connected_cat = Category::pluck('title', 'id');
        return view('admin::categories.createOrUpdate', compact('connected_cat'));
    }

    public function store(Request $request)
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
            Category::create($requestData);
            return redirect()->route('categories')->with('success', 'Category has been saved successfully');
        } catch (\Illuminate\Database\QueryException $e) {
            return back()->withError($e->getMessage())->withInput();
        }

    }

    public function show($id)
    {
        $businesscategory = Category::findOrFail($id);
        $connected_cat = Category::whereIn('id', explode(',', $businesscategory->connected_cat))->pluck('title')->toArray();
        return view('admin::categories.show', compact('businesscategory', 'connected_cat'));
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return view('admin::categories.createOrUpdate', compact('category'));
    }


    public function update(Request $request)
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
            $requestData['status'] = (isset($requestData['status'])) ? 1 : 0;
            Category::where("id",$request->id)->update($requestData);
            return redirect()->route('categories')->with('success', 'Category has been updated successfully.');
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
    public function destroy($id = null)
    {
            DB::beginTransaction();
            try {
                $businesscategory = Category::findOrFail($id);
                $businesscategory->delete();
                CategoryListing::where('category_id',$id)->delete();
                DB::commit();
                $responce = ['status' => true, 'message' => 'This Category been deleted successfully.', 'data' => $businesscategory];
            } catch (\Exception $e) {
                DB::rollBack();
                $responce = ['status' => false, 'message' => $e->getMessage()];
            }
            return $responce;
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
        if(isset($request->type) && $request->type != ""){
            $mainCategory = Category::whereNull('parent_id')->where('type',$request->type)->sortable([$sort => $direction])->skip($skip)->take(config('get.ADMIN_PAGE_LIMIT'))->get();
        }else{
            $mainCategory = Category::whereNull('parent_id')->sortable([$sort => $direction])->skip($skip)->take(config('get.ADMIN_PAGE_LIMIT'))->get();
        }
        foreach ($mainCategory as $key => $category) {
            Category::where('id',$request->order[$key]['id'])->update(['order' => $category->id]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Successfully update',
        ]);
    }


}
