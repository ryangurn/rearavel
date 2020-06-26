<?php

namespace App\Http\Controllers;

use App\SettingCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SettingCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // provide index listing for categories
        return response()->json(SettingCategory::with('settings')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        // validate the request
        $validator = validator($request->all(), [
            'name' => 'required|min:2|max:255',
            'description' => 'required|min:2|max:1024'
        ]);

        // provide validation feedback
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // create new object
        $category = new SettingCategory();
        $category->name = $request->get('name');
        $category->description = $request->get('description');
        $category->save();

        // provide output of the orm
        return response()->json($category);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Response
     */
    public function show($id)
    {
        // validate the id
        $validator = validator(['id' => $id], [
            'id' => 'required|exists:setting_categories,id|numeric'
        ]);

        // provide validation feedback
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // show the category with any settings
        return response()->json(SettingCategory::where('id', '=', $id)->with('settings')->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        // merge in id and validate request
        $request->merge(['id' => $id]);
        $validator = validator($request->all(), [
            'id' => 'required|exists:setting_categories,id|numeric',
            'name' => 'required|min:2|max:255',
            'description' => 'required|min:2|max:1024'
        ]);

        // provide validation feedback
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // update the category orm
        $category = SettingCategory::where('id', '=', $id)->first();
        $category->name = $request->get('name');
        $category->description = $request->get('description');
        $category->save();

        // provide the updated output
        return response()->json($category->where('id', '=', $id)->with('settings')->get());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        // validate the id
        $validator = validator(['id' => $id], [
            'id' => 'required|exists:setting_categories,id|numeric',
        ]);

        // provide validation output
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // delete the setting
        SettingCategory::where('id', '=', $id)->first()->delete();

        // respond completed + the deleted id
        return response()->json(['complete' => $id]);
    }
}
