<?php

namespace App\Http\Controllers;

use App\PageModule;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PageModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(PageModule::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        // validate
        $validator = validator($request->all(), [
            'page_id' => 'required|numeric|exists:pages,id',
            'name' => 'required|min:2|max:255',
            'ui' => 'required|json',
            'payload' => 'required|json'
        ]);

        // is failure exists notify requestor
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        $module = new PageModule();
        $module->page_id = $request->get('page_id');
        $module->name = $request->get('name');
        $module->ui = json_decode($request->get('ui'));
        $module->payload = json_decode($request->get('payload'));
        $module->save();

        return response()->json($module);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        $validator = validator(['id' => $id], [
           'id' => 'required|numeric|exists:page_modules,id',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        return response()->json(PageModule::where('id', '=', $id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $request->merge(['id' => $id]);
        $validator = validator($request->all(), [
            'id' => 'required|numeric|exists:page_modules,id',
            'page_id' => 'required|numeric|exists:pages,id',
            'name' => 'required|min:2|max:255',
            'ui' => 'required|json',
            'payload' => 'required|json'
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        $module = PageModule::where('id', '=', $request->get('id'))->first();
        $module->page_id = $request->get('page_id');
        $module->name = $request->get('name');
        $module->ui = json_decode($request->get('ui'));
        $module->payload = json_decode($request->get('payload'));
        $module->save();

        return response()->json($module);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        $validator = validator(['id' => $id], [
            'id' => 'required|numeric|exists:page_modules,id',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        PageModule::where('id', '=', $id)->first()->delete();

        return response()->json(['completed' => $id]);
    }
}
