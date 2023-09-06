@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <!-- Main content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-7">
                            <h3 class="card-title">Thumb Images</h3>
                        </div>
                        <div class="col-md-5">
                            <div class="d-flex align-items-center flex-wrap justify-content-md-end  mb-4">
                                <a href="{{ route('thumb-images.create') }}" class="btn btn-block btn-primary btn-sm"><i
                                        class="fa fa-plus"></i> Add
                                    Thumb Image</a>
                            </div>
                        </div>
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
                        <tbody>
                            @if ($data->count() > 0)
                                @php
                                    $i = ($data->currentPage() - 1) * $data->perPage() + 1;
                                @endphp
                                @foreach ($data as $image)
                                    <tr class="row-{{ $image->id }} ui-sortable-handle" data-id="{{ $image->id }}">
                                        <td> {{ $i }}. </td>
                                        <td> {{ $image->category->title }} </td>
                                        <td>
                                            <div style="position: relative;height: 80px;">
                                                <img src="{{ asset($image->etiquetas) }}" width="60"
                                                    style="z-index: 45;position: absolute;" />
                                                <img src="{{ asset($image->top_espalda_arriba) }}" width="60"
                                                    style="z-index: 104;position: absolute;" />
                                                <img src="{{ asset($image->espalda_arriba) }}" width="60"
                                                    style="z-index: 105;position: absolute;" />
                                                <img src="{{ asset($image->espalda_abajo) }}" width="60"
                                                    style="z-index: 46;position: absolute;" />
                                                <img src="{{ asset($image->lapel_medium) }}" width="60"
                                                    style="z-index: 119;position: absolute;" />
                                                <img src="{{ asset($image->interior) }}" width="60"
                                                    style="z-index: 120;position: absolute;" />
                                                <img src="{{ asset($image->bottom_double) }}" width="60"
                                                    style="z-index: 130;position: absolute;" />
                                                <img src="{{ asset($image->breast_pocket) }}" width="60"
                                                    style="z-index: 150;position: absolute;" />
                                                <img src="{{ asset($image->hip_pockets) }}" width="60"
                                                    style="z-index: 150;position: absolute;" />
                                            </div>

                                            <div style="position: relative;height: 33px;  ">
                                                <img width="60" src="{{ asset($image->length_long) }}" id="length_long"
                                                    style="position: absolute; z-index: 31;" class="pants_folded">
                                                <img width="60" src="{{ asset($image->front_pocket) }}"
                                                    id="front_pocket" style="position: absolute; z-index: 33;"
                                                    class="pants_folded">
                                                <img width="60" src="{{ asset($image->back_pocket_with_button) }}"
                                                    id="back_pocket_with_button" style="position: absolute; z-index: 38;"
                                                    class="pants_folded">
                                            </div>

                                        </td>
                                        <td class="actions action-btn-tab">
                                            <a href="{{ route('thumb-images.edit', [$image->id]) }}"
                                                class="btn btn-primary btn-sm" data-toggle="tooltip" alt="Edit"
                                                title="" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                                        </td>
                                    </tr>
                                    @php
                                        $i++;
                                    @endphp
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                @if (count($data) >= 10)
                    <div class="card-footer clearfix">
                        {{ $data->appends(Request::query())->links() }}
                    </div>
                @endif
            </div>
            <!-- /.card -->
        </div>

        @push('scripts')
            <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.12/datatables.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script>
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.min.css' />

            <script></script>
        @endpush
        <!-- /.content -->
    @endsection
