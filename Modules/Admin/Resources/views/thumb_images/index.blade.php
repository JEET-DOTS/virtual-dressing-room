@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Thumb Images</h3>
                        <div class="card-tools">
                            <a href="{{ route('thumb-images.create') }}"
                                class="btn btn-block btn-primary btn-sm"><i class="fa fa-plus"></i> Add
                                Thumb Image</a>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th scope="col" class="actions">Action</th>
                                </tr>
                                </tr>
                            </thead>
                            @if ($data->count() > 0)
                                <tbody>
                                    @php
                                        $i = ($data->currentPage() - 1) * $data->perPage() + 1;
                                    @endphp
                                    @foreach ($data as $image)
                                        <tr class="row-{{ $image->id }} ui-sortable-handle" data-id="{{ $image->id }}">
                                            <td> {{ $i }}. </td>
                                            <td> {{ $image->category->title }}. </td>
                                            <td>
                                                <div style="position: relative;height: 140px;">
                                                    <img src="{{ asset($image->etiquetas) }}" width="100" style="z-index: 45;position: absolute;"/>
                                                    <img src="{{ asset($image->top_espalda_arriba) }}" width="100" style="z-index: 104;position: absolute;"/>
                                                    <img src="{{ asset($image->espalda_arriba) }}" width="100" style="z-index: 105;position: absolute;"/>
                                                    <img src="{{ asset($image->espalda_abajo) }}" width="100" style="z-index: 46;position: absolute;"/>
                                                    <img src="{{ asset($image->lapel_medium) }}" width="100" style="z-index: 119;position: absolute;"/>
                                                    <img src="{{ asset($image->interior) }}" width="100" style="z-index: 120;position: absolute;"/>
                                                    <img src="{{ asset($image->bottom_double) }}" width="100" style="z-index: 130;position: absolute;"/>
                                                    <img src="{{ asset($image->breast_pocket) }}" width="100" style="z-index: 150;position: absolute;"/>
                                                    <img src="{{ asset($image->hip_pockets) }}" width="100" style="z-index: 150;position: absolute;"/>
                                                </div>
                                            </td>
                                            <td class="actions action-btn-tab">
                                                <a href="{{ route('thumb-images.show', [$image->id]) }}"
                                                    class="btn btn-warning btn-sm" data-toggle="tooltip"
                                                    alt="View setting" title="" data-original-title="View"><i
                                                        class="fa fa-fw fa-eye"></i></a>

                                                <a href="{{ route('thumb-images.edit', [$image->id]) }}"
                                                    class="btn btn-primary btn-sm" data-toggle="tooltip" alt="Edit"
                                                    title="" data-original-title="Edit"><i
                                                        class="fa fa-edit"></i></a>
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
                        {{ $data->appends(Request::query())->links() }}
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
                url: "{{ url('admin/category-sortable') }}",
                data: {
                    order: order,
                    _token: token,
                    page : {{$data->currentPage()}},
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
