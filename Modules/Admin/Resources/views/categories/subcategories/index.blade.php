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
                                <a href="{{ route('sub-categories-add', [$cat_id]) }}"
                                    class="btn btn-block btn-primary btn-sm"><i class="fa fa-plus"></i> Add Sub
                                    Categories</a>
                                @if ($parentId)
                                    <a href="{{ route('sub-categories', [$parentId]) }}"
                                        class="btn btn-block btn-primary btn-sm ml-15">Back</a>
                                @else
                                    <a href="{{ route('categories') }}"
                                        class="btn btn-block btn-primary btn-sm ml-15">Back</a>
                                @endif
                            </div>
                        </div>
                    </div>
                    <ol class="breadcrumb mb-0 ml-0">
                        <?php
                            $breadcrumb = App\Helpers\Helper::getBreadCrumb($cat_id);
                            $count = 1;
                        ?>
                        @foreach ($breadcrumb as $key => $item)
                            @if($count == 1)
                                <li class="breadcrumb-item"><a href="{{ url('admin/categories') }}">{{ucfirst($item)}}</a></li>
                            @else
                                @if(count($breadcrumb) == $count)
                                <li class="breadcrumb-item active"><a href="javascript:void(0)">{{ucfirst($item)}}</a></li>
                                @else
                                <li class="breadcrumb-item"><a href="{{ url('admin/sub-categories',[$key]) }}">{{ucfirst($item)}}</a></li>
                                @endif

                            @endif
                            @php $count++; @endphp
                        @endforeach

                    </ol>
                </div>
                <div class="card-body">
                    <div class="table-responsive text-nowrap">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Icon</th>
                                    <th>Active/UnActive</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if ($categories->count() > 0)
                                    @php
                                        $i = ($categories->currentPage() - 1) * $categories->perPage() + 1;
                                    @endphp
                                    @foreach ($categories as $category)
                                        <tr>
                                            <td> {{ $i }}. </td>
                                            <td>{{ $category->title }}</td>
                                            <td>
                                                @if ($category->image)
                                                    <img src="{{ asset($category->image) }}" width="100" />
                                                @endif
                                            </td>
                                            <td><span class="{{ $category->icon }}"></span></td>
                                            <td>
                                                <label class="switch"
                                                    onClick="changeStatus({{ $category->id }},{{ $category->status }})">
                                                    <input type="checkbox" @if ($category->status == 0) checked @endif>
                                                    <span class="slider"></span>
                                                </label>
                                            </td>
                                            <td class="actions action-btn-tab">

                                                <a href="{{ route('sub-categories-show', [$category->id]) }}"
                                                    class="btn btn-warning btn-sm" data-toggle="tooltip" alt="View setting"
                                                    title="" data-original-title="View"><i
                                                        class="fa fa-fw fa-eye"></i></a>

                                                <a href="{{ route('sub-categories-edit', [$category->id]) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip" alt="Edit"
                                                    title="" data-original-title="Edit"><i class="fa fa-edit"></i></a>

                                                <a onClick="deleteData('{{ route('sub-categories-destroy', $category->id) }}')" href="javascript:void(0)"
                                                    class="confirmDeleteBtn btn btn-danger btn-sm" data-toggle="tooltip"
                                                    alt="Delete {{ $category->title }}" title="Delete  Category"
                                                    data-url="{{ route('sub-categories-destroy', $category->id) }}"
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

                        <div class="pt-4 paginationOuter">
                            {{ $categories->appends(Request::query())->links('pagination::bootstrap-4') }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    @endsection
    @section('script')
        <script src=" https://cdn.jsdelivr.net/npm/sweetalert2@11.7.20/dist/sweetalert2.all.min.js "></script>
        <link href=" https://cdn.jsdelivr.net/npm/sweetalert2@11.7.20/dist/sweetalert2.min.css " rel="stylesheet">
        <script>
            function changeStatus(id, status) {
                // status =! status;
                Swal.fire({
                    title: 'Do you want to the status changes ?',
                    showCancelButton: true,
                    confirmButtonText: 'Change Status'
                }).then((result) => {
                    if (result.isConfirmed) {
                        var url = '{{ url('admin/sub-categories-status') }}';
                        window.location.href = url + "/" + id + "/" + status;
                    }
                })
            }

            function deleteData(url) {
                Swal.fire({
                    title: 'Do you want to the delete ?',
                    showCancelButton: true,
                    confirmButtonText: 'Delete'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = url;
                    }
                })
            }

        </script>
    @endsection
