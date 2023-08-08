@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <div class="row mb-2">
            <div class="col-sm-6">
                 <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{url('admin')}}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{url('admin/categories')}}">Categories</a></li>
                    <li class="breadcrumb-item active">Sub Categories</li>
                </ol>
            </div>
        </div>
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Admin Categories</h3>
                        <div class="card-tools">
                                <a href="{{ route('sub-categories-add',[$cat_id]) }}"
                                    class="btn btn-block btn-primary btn-sm"><i class="fa fa-plus"></i> Add Sub Categories</a>
                                @if($parentId)
                                    <a href="{{ route('sub-categories',[$parentId]) }}"
                                    class="btn btn-block btn-primary btn-sm">Back</a>
                                @else
                                    <a href="{{ route('categories') }}"
                                    class="btn btn-block btn-primary btn-sm">Back</a>
                                @endif
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body" id="categoryListInAdmin">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <tr>
                                    <th>S.No.</th>
                                    <th scope="col">Title</th>
                                    <th>Image</th>
                                    <th>Icon</th>
                                    <th scope="col" class="actions">Action</th>
                                </tr>
                                </tr>
                            </thead>
                            @if ($categories->count() > 0)
                                <tbody>
                                    @php
                                        $i = ($categories->currentPage() - 1) * $categories->perPage() + 1;
                                    @endphp
                                    @foreach ($categories as $category)
                                        <tr class="row-{{ $category->id }} ui-sortable-handle" data-id="{{ $category->id }}" data-order="{{ $category->order }}">
                                            <td> {{ $i }}. </td>
                                            <td>{{ $category->title }}</td>
                                            <td>
                                                @if($category->image)
                                                <img src="{{ asset($category->image) }}" width="100" />
                                                @endif
                                            </td>
                                            <td ><span class="{{ $category->icon }}"></span></td>
                                            <td class="actions action-btn-tab">

                                                <a href="{{ route('sub-categories-show', [$category->id]) }}"
                                                    class="btn btn-warning btn-sm" data-toggle="tooltip"
                                                    alt="View setting" title="" data-original-title="View"><i
                                                        class="fa fa-fw fa-eye"></i></a>

                                                <a href="{{ route('sub-categories-edit', [$category->id]) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip" alt="Edit"
                                                    title="" data-original-title="Edit"><i
                                                        class="fa fa-edit"></i></a>

                                                <a href="{{ route('sub-categories-destroy', $category->id) }}"
                                                    class="confirmDeleteBtn btn btn-danger btn-sm" data-toggle="tooltip"
                                                    alt="Delete {{ $category->title }}"
                                                    title="Delete  Category"
                                                    data-url="{{ route('sub-categories-destroy', $category->id) }}"
                                                    data-title="{{ $category->title }}"><i
                                                        class="fa fa-trash"></i></a>

                                                <a href="{{ route('sub-categories', $category->id) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip"
                                                    alt="Sub Categories {{ $category->title }}"
                                                    title="Sub Categories"
                                                    data-title="{{ $category->title }}"><i class="fa fa-list"></i></a>



                                            </td>
                                        </tr>
                                        @php
                                            $i++;
                                        @endphp
                                    @endforeach
                                </tbody>
                            @else
                                <tfoot>
                                    <tr>
                                        <td colspan='7' align='center'> <strong>Record Not Available</strong> </td>
                                    </tr>
                                </tfoot>
                            @endif
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        {{ $categories->appends(Request::query())->links() }}
                    </div>
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
        @push('scripts')
        <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.12/datatables.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css'></link>
        <script>
            $(function () {
                $("table").DataTable({
                    searching:false,
                    paging: false,
                    ordering: false,
                    info: false,
                });
                $("tbody").sortable({
                    cursor: 'row-resize',
                    placeholder: 'ui-state-highlight',
                    opacity: '0.55',
                    items: '.ui-sortable-handle',
                    update: function() {
                        sendOrderToServer();
                    }
                }).disableSelection();
            })

        function sendOrderToServer() {
            var order = [];
            var token = $('meta[name="csrf-token"]').attr('content');
            $('.ui-sortable-handle').each(function(index,element) {
                order.push({
                    id: $(this).attr('data-id'),
                    order : $(this).attr('data-order'),
                });
            });
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "{{ url('admin/business-sub-categories/category-sortable') }}",
                data: {
                    order: order,
                    _token: token,
                    page : {{$categories->currentPage()}},
                    cat_id : {{$cat_id}}
                },
                success: function(response) {
                    if (response.status == 200) {
                        swal({
                            title: "Success",
                            text: "Successfully update",
                            type: "success",
                            showCancelButton: false,
                            confirmButtonText: "Ok",
                        });
                        setTimeout(() => {
                            location.reload();
                        }, 500);

                    } else {
                        console.log(response);
                    }
                }
            });
        }
        </script>
         @endpush
        <!-- /.content -->
        @endsection
