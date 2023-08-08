<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Routing\Controller;

use Illuminate\Http\Request;
use App\Models\{Category,ThumbImage};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Gate;

class ThumbImagesController extends Controller
{

    public function index(Request $request)
    {
        $data = ThumbImage::with("category")->orderBy('id','desc')->paginate(10);
        return view('admin::thumb_images.index', compact('data'));
    }

    public function create()
    {
        $connected_cat = Category::where("parent_id",6)->pluck('title', 'id');
        return view('admin::thumb_images.createOrUpdate', compact('connected_cat'));
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'category_id' => 'required',
                'hip_pockets' => 'required|mimes:jpg,jpeg,png|max:2048',
                'breast_pocket' => 'required|mimes:jpg,jpeg,png|max:2048',
                'bottom_double' => 'required|mimes:jpg,jpeg,png|max:2048',
                'interior' => 'required|mimes:jpg,jpeg,png|max:2048',
                'lapel_medium' => 'required|mimes:jpg,jpeg,png|max:2048',
                'espalda_abajo' => 'required|mimes:jpg,jpeg,png|max:2048',
                'espalda_arriba' => 'required|mimes:jpg,jpeg,png|max:2048',
                'top_espalda_arriba' => 'required|mimes:jpg,jpeg,png|max:2048',
                'etiquetas' => 'required|mimes:jpg,jpeg,png|max:2048',
            ]);
            $requestData = $request->all();

            $fileName = time().'_'.$request->hip_pockets->getClientOriginalName();
            $filePath = $request->file('hip_pockets')->storeAs('thumb', $fileName, 'public');
            $requestData['hip_pockets'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->breast_pocket->getClientOriginalName();
            $filePath = $request->file('breast_pocket')->storeAs('thumb', $fileName, 'public');
            $requestData['breast_pocket'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->bottom_double->getClientOriginalName();
            $filePath = $request->file('bottom_double')->storeAs('thumb', $fileName, 'public');
            $requestData['bottom_double'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->interior->getClientOriginalName();
            $filePath = $request->file('interior')->storeAs('thumb', $fileName, 'public');
            $requestData['interior'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->lapel_medium->getClientOriginalName();
            $filePath = $request->file('lapel_medium')->storeAs('thumb', $fileName, 'public');
            $requestData['lapel_medium'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->espalda_abajo->getClientOriginalName();
            $filePath = $request->file('espalda_abajo')->storeAs('thumb', $fileName, 'public');
            $requestData['espalda_abajo'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->espalda_arriba->getClientOriginalName();
            $filePath = $request->file('espalda_arriba')->storeAs('thumb', $fileName, 'public');
            $requestData['espalda_arriba'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->top_espalda_arriba->getClientOriginalName();
            $filePath = $request->file('top_espalda_arriba')->storeAs('thumb', $fileName, 'public');
            $requestData['top_espalda_arriba'] = '/storage/' . $filePath;

            $fileName = time().'_'.$request->etiquetas->getClientOriginalName();
            $filePath = $request->file('etiquetas')->storeAs('thumb', $fileName, 'public');
            $requestData['etiquetas'] = '/storage/' . $filePath;

            ThumbImage::create($requestData);
            return redirect()->route('thumb-images')->with('success', 'Thumb Images has been saved successfully');
        } catch (\Illuminate\Database\QueryException $e) {
            dd($e);
            return back()->withError($e->getMessage())->withInput();
        }

    }

    public function show($id)
    {
        $businesscategory = ThumbImage::findOrFail($id);
        $connected_cat = ThumbImage::whereIn('id', explode(',', $businesscategory->connected_cat))->pluck('title')->toArray();
        return view('admin::thumb_images.show', compact('businesscategory', 'connected_cat'));
    }

    public function edit($id)
    {
        $connected_cat = Category::where("parent_id",6)->pluck('title', 'id');
        $data = ThumbImage::findOrFail($id);
        return view('admin::thumb_images.createOrUpdate', compact('data','connected_cat'));
    }


    public function update(Request $request)
    {
        try {
            $request->validate([
                // 'category_id' => 'required',
                'hip_pockets' => 'mimes:jpg,jpeg,png|max:2048',
                'breast_pocket' => 'mimes:jpg,jpeg,png|max:2048',
                'bottom_double' => 'mimes:jpg,jpeg,png|max:2048',
                'interior' => 'mimes:jpg,jpeg,png|max:2048',
                'lapel_medium' => 'mimes:jpg,jpeg,png|max:2048',
                'espalda_abajo' => 'mimes:jpg,jpeg,png|max:2048',
                'espalda_arriba' => 'mimes:jpg,jpeg,png|max:2048',
                'top_espalda_arriba' => 'mimes:jpg,jpeg,png|max:2048',
                'etiquetas' => 'mimes:jpg,jpeg,png|max:2048',
            ]);
            $requestData = $request->all();
            if($request->hip_pockets){
                $fileName = time().'_'.$request->hip_pockets->getClientOriginalName();
                $filePath = $request->file('hip_pockets')->storeAs('thumb', $fileName, 'public');
                $requestData['hip_pockets'] = '/storage/' . $filePath;
            }
            if($request->breast_pocket){
                $fileName = time().'_'.$request->breast_pocket->getClientOriginalName();
                $filePath = $request->file('breast_pocket')->storeAs('thumb', $fileName, 'public');
                $requestData['breast_pocket'] = '/storage/' . $filePath;
            }
            if($request->bottom_double){
                $fileName = time().'_'.$request->bottom_double->getClientOriginalName();
                $filePath = $request->file('bottom_double')->storeAs('thumb', $fileName, 'public');
                $requestData['bottom_double'] = '/storage/' . $filePath;
            }
            if($request->interior){
                $fileName = time().'_'.$request->interior->getClientOriginalName();
                $filePath = $request->file('interior')->storeAs('thumb', $fileName, 'public');
                $requestData['interior'] = '/storage/' . $filePath;
            }
            if($request->lapel_medium){
                $fileName = time().'_'.$request->lapel_medium->getClientOriginalName();
                $filePath = $request->file('lapel_medium')->storeAs('thumb', $fileName, 'public');
                $requestData['lapel_medium'] = '/storage/' . $filePath;
            }
            if($request->espalda_abajo){
                $fileName = time().'_'.$request->espalda_abajo->getClientOriginalName();
                $filePath = $request->file('espalda_abajo')->storeAs('thumb', $fileName, 'public');
                $requestData['espalda_abajo'] = '/storage/' . $filePath;
            }
            if($request->espalda_arriba){
                $fileName = time().'_'.$request->espalda_arriba->getClientOriginalName();
                $filePath = $request->file('espalda_arriba')->storeAs('thumb', $fileName, 'public');
                $requestData['espalda_arriba'] = '/storage/' . $filePath;
            }
            if($request->top_espalda_arriba){
                $fileName = time().'_'.$request->top_espalda_arriba->getClientOriginalName();
                $filePath = $request->file('top_espalda_arriba')->storeAs('thumb', $fileName, 'public');
                $requestData['top_espalda_arriba'] = '/storage/' . $filePath;
            }
            if($request->etiquetas){
                $fileName = time().'_'.$request->etiquetas->getClientOriginalName();
                $filePath = $request->file('etiquetas')->storeAs('thumb', $fileName, 'public');
                $requestData['etiquetas'] = '/storage/' . $filePath;
            }
            unset($requestData['_token']);
            ThumbImage::where("id",$request->id)->update($requestData);
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
                $businesscategory = ThumbImage::findOrFail($id);
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
            $mainCategory = ThumbImage::whereNull('parent_id')->where('type',$request->type)->sortable([$sort => $direction])->skip($skip)->take(config('get.ADMIN_PAGE_LIMIT'))->get();
        }else{
            $mainCategory = ThumbImage::whereNull('parent_id')->sortable([$sort => $direction])->skip($skip)->take(config('get.ADMIN_PAGE_LIMIT'))->get();
        }
        foreach ($mainCategory as $key => $category) {
            ThumbImage::where('id',$request->order[$key]['id'])->update(['order' => $category->id]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Successfully update',
        ]);
    }


}
