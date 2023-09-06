@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-7">
                            <h4>Categories</h4>
                        </div>
                        <div class="col-md-5">
                            <div class="d-flex align-items-center flex-wrap justify-content-md-end  mb-4">
                                <a href="{{ route('categories.create') }}" class="btn btn-block btn-primary btn-sm"><i class="fa fa-plus"></i>
                                    Add Categories
                                </a>
                            </div>
                        </div>
                    </div>
                    <ol class="breadcrumb mb-0 ml-0">
                        <li class="breadcrumb-item"><a href="{{ url('admin') }}">Home</a></li>
                        <li class="breadcrumb-item active">Categories</li>
                    </ol>
                </div>
                <div class="card-body">
                    <div class="table-responsive text-nowrap">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th scope="col">Title</th>
                                    <th>Image</th>
                                    <th scope="col" class="actions">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($categories->count() > 0)
                                    @php
                                        $i = ($categories->currentPage() - 1) * $categories->perPage() + 1;
                                    @endphp
                                    @foreach ($categories as $category)
                                        <tr class="row-{{ $category->id }} ui-sortable-handle" data-id="{{ $category->id }}"
                                            data-order="{{ $category->order }}">
                                            <td> {{ $i }}. </td>
                                            <td>{{ $category->title }}</td>
                                            <td>
                                                @if ($category->image)
                                                    <img src="{{ asset($category->image) }}" width="100" />
                                                @endif
                                            </td>
                                            <td class="actions action-btn-tab">
                                                <a href="{{ route('categories.show', [$category->id]) }}"
                                                    class="btn btn-warning btn-sm" data-toggle="tooltip" alt="View setting"
                                                    title="" data-original-title="View"><i
                                                        class="fa fa-fw fa-eye"></i></a>

                                                <a href="{{ route('categories.edit', [$category->id]) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip" alt="Edit"
                                                    title="" data-original-title="Edit"><i class="fa fa-edit"></i></a>

                                                <a href="javascript:void(0);" class="confirmDeleteBtn btn btn-danger btn-sm"
                                                    data-toggle="tooltip" alt="Delete {{ $category->title }}"
                                                    title="Delete  Category"
                                                    data-url="{{ route('categories.destroy', $category->id) }}"
                                                    data-title="{{ $category->title }}"><i class="fa fa-trash"></i></a>

                                                <a href="{{ route('sub-categories', $category->id) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip"
                                                    alt="Sub Categories {{ $category->title }}" title="Sub Categories"
                                                    data-title="{{ $category->title }}"><i class="fa fa-list"></i></a>
                                            </td>
                                        </tr>
                                        @php
                                            $i++;
                                        @endphp
                                    @endforeach
                                @endif
                            </tbody>
                        </table>
                        @if (count($categories) >= 10)
                            <div class="pt-4 paginationOuter">
                                {{ $categories->appends(Request::query())->links('pagination::bootstrap-4') }}
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    @endsection
