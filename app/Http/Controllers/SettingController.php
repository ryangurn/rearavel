<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SettingController extends Controller
{
    /**
     * Display a listing of the settings (with the categories).
     *
     * @return Response
     */
    public function index()
    {
        // return the response
        return response()->json(Setting::with('category')->get());
    }

    /**
     * Store a newly created setting in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        // validate the request
        $validator = validator($request->all(), [
            'category_id' => 'required|exists:setting_categories,id|numeric',
            'key' => 'required|min:2|max:255',
            'payload' => 'required|json',
        ]);

        // present errors if failure
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // store the setting
        $setting = Setting::firstOrNew(['key' => $request->get('key'), 'category_id' => $request->get('category_id')]);
        $setting->payload = json_decode($request->get('payload'));
        $setting->save();

        // respond
        return response()->json($setting);
    }

    /**
     * Display the specified setting.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        // validate the request
        $validator = validator(['id' => $id], [
            'id' => 'required|exists:settings,id|numeric',
        ]);

        // present errors if there is a failure
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // get the setting and respond with it
        $setting = Setting::where('id', '=', $id)->with('category')->first();
        return response()->json($setting);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        // merge the id into the main request
        $request->merge(['id' => $id]);
        // validate the entire request
        $validator = validator($request->all(), [
            'id' => 'required|exists:settings,id|numeric',
            'category_id' => 'required|exists:setting_categories,id|numeric',
            'key' => 'required|min:2|max:255',
            'payload' => 'required|json'
        ]);

        // respond with errors if a failure occurred
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // update the setting and store changes
        $setting = Setting::where('id', '=', $id)->first();
        $setting->category_id = $request->get('category_id');
        $setting->key = $request->get('key');
        $setting->payload = json_decode($request->get('payload'));
        $setting->save();

        // respond with updated model
        return response()->json($setting->where('id', '=', $id)->with('category')->get());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        // validate the request to destroy
        $validator = validator(['id' => $id], [
            'id' => 'required|exists:settings,id|numeric',
        ]);

        // if there is a failure notify the requestor
        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        // delete the object
        Setting::where('id', '=', $id)->first()->delete();

        // respond completed + the deleted id
        return response()->json(['complete' => $id]);
    }
}
