<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;

/**
 * Class PageController
 * @package App\Http\Controllers
 */
class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // provide listing of all pages
        return response()->json(Page::all());
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
            'title' => 'required|min:2|max:255',
            'slug' => 'required|min:2|max:255|unique:pages,slug'
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        $page = new Page();
        $page->title = $request->get('title');
        $page->name = $request->get('name');
        $page->slug = $request->get('slug');
        $page->save();

        return response()->json($page);
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
            'id' => 'required|numeric|exists:pages,id'
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        return response()->json(Page::where('id', '=', $id)->first());
    }

    /**
     * Display the specified resource based on the slug
     *
     * @param string $slug
     * @return Response
     */
    public function showSlug($slug)
    {
        // support multiple keys
        $slug = explode(",", $slug);
        // validate the request
        $validator = validator(['slug' => $slug], [
            'slug.*' => 'required|min:2|max:255|exists:pages,slug',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        return response()->json(Page::whereIn('slug', $slug)->get());
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
        $initial_validator = validator(['id' => $id], [
            'id' => 'required|numeric|exists:pages,id',
        ]);

        if ($initial_validator->fails())
        {
            return response()->json($initial_validator->errors()->all());
        }

        $page = Page::where('id', '=', $id)->first();

        $validator = validator($request->all(), [
            'name' => 'required|min:2|max:255',
            'title' => 'required|min:2|max:255',
            'slug' => [
                'required',
                'min:2',
                'min:2',
                'max:255',
                Rule::unique('pages', 'slug')->ignore($page->slug, 'slug')
            ]
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        $page->name = $request->get('name');
        $page->title = $request->get('title');
        $page->slug = $request->get('slug');
        $page->save();

        return response()->json($page);
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
            'id' => 'required|numeric|exists:pages,id',
        ]);

        if ($validator->fails())
        {
            return response()->json($validator->errors()->all());
        }

        Page::where('id', $id)->delete();

        // respond completed + the deleted id
        return response()->json(['complete' => $id]);
    }
}
