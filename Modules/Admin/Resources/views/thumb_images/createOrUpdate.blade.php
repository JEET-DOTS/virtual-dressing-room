@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Thumb Image</h3>

                        <div class="card-tools">
                            <a href="{{ route('thumb-images') }}" class="btn btn-default pull-right" title="Cancel"><i
                                    class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        @if (isset($data))
                            {{ Form::model($data, ['route' => ['thumb-images.update'], 'id' => 'submit-thumb-form', 'files' => 'true']) }}
                            <input type="hidden" name="id" value="{{ $data->id }}">
                        @else
                            {{ Form::open(['route' => ['thumb-images.store'], 'id' => 'submit-thumb-form', 'files' => 'true']) }}
                        @endif
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group required {{ $errors->has('hip_pockets') ? 'has-error' : '' }}">
                                        <label for="hip_pockets">Hip Pockets</label> <br />
                                        <select name="category_id" class="form-control required">
                                            <option value="">-- Select Category --</option>
                                            @foreach ($connected_cat as $id => $title)
                                                <option value="{{ $id }}">{{ $title }}</option>
                                            @endforeach
                                        </select>
                                        @if ($errors->has('hip_pockets'))
                                            <span class="help-block">{{ $errors->first('hip_pockets') }}</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-8"></div>
                                <div class="col-md-4">
                                    <div class="form-group required {{ $errors->has('hip_pockets') ? 'has-error' : '' }}">
                                        <label for="hip_pockets">Hip Pockets</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="hip_pockets" class="form-control" accept="image/*">
                                        @else
                                            <input type="file" name="hip_pockets" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('hip_pockets'))
                                            <span class="help-block">{{ $errors->first('hip_pockets') }}</span>
                                        @endif
                                        @if (isset($data) && $data->hip_pockets)
                                            <img src="{{ asset($data->hip_pockets) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100" height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="form-group required {{ $errors->has('breast_pocket') ? 'has-error' : '' }}">
                                        <label for="breast_pocket">Breast Pocket</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="breast_pocket" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="breast_pocket" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('breast_pocket'))
                                            <span class="help-block">{{ $errors->first('breast_pocket') }}</span>
                                        @endif
                                        @if (isset($data) && $data->breast_pocket)
                                            <img src="{{ asset($data->breast_pocket) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100" height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="form-group required {{ $errors->has('bottom_double') ? 'has-error' : '' }}">
                                        <label for="bottom_double">Bottom Double</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="bottom_double" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="bottom_double" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('bottom_double'))
                                            <span class="help-block">{{ $errors->first('bottom_double') }}</span>
                                        @endif
                                        @if (isset($data) && $data->bottom_double)
                                            <img src="{{ asset($data->bottom_double) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100" height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group required {{ $errors->has('interior') ? 'has-error' : '' }}">
                                        <label for="interior">Interior</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="interior" class="form-control" accept="image/*">
                                        @else
                                            <input type="file" name="interior" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('interior'))
                                            <span class="help-block">{{ $errors->first('interior') }}</span>
                                        @endif
                                        @if (isset($data) && $data->interior)
                                            <img src="{{ asset($data->interior) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100" height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group required {{ $errors->has('lapel_medium') ? 'has-error' : '' }}">
                                        <label for="lapel_medium">Lapel Medium</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="lapel_medium" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="lapel_medium" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('lapel_medium'))
                                            <span class="help-block">{{ $errors->first('lapel_medium') }}</span>
                                        @endif
                                        @if (isset($data) && $data->lapel_medium)
                                            <img src="{{ asset($data->lapel_medium) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100"
                                                height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="form-group required {{ $errors->has('espalda_abajo') ? 'has-error' : '' }}">
                                        <label for="espalda_abajo">Espalda Abajo</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="espalda_abajo" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="espalda_abajo" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('espalda_abajo'))
                                            <span class="help-block">{{ $errors->first('espalda_abajo') }}</span>
                                        @endif
                                        @if (isset($data) && $data->espalda_abajo)
                                            <img src="{{ asset($data->espalda_abajo) }}" width="100"
                                                height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100"
                                                height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="form-group required {{ $errors->has('espalda_arriba') ? 'has-error' : '' }}">
                                        <label for="espalda_arriba">Espalda Arriba</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="espalda_arriba" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="espalda_arriba" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('espalda_arriba'))
                                            <span class="help-block">{{ $errors->first('espalda_arriba') }}</span>
                                        @endif
                                        @if (isset($data) && $data->espalda_arriba)
                                            <img src="{{ asset($data->espalda_arriba) }}" width="100"
                                                height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100"
                                                height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div
                                        class="form-group required {{ $errors->has('top_espalda_arriba') ? 'has-error' : '' }}">
                                        <label for="top_espalda_arriba">Top Espalda Arriba</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="top_espalda_arriba" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="top_espalda_arriba" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('top_espalda_arriba'))
                                            <span class="help-block">{{ $errors->first('top_espalda_arriba') }}</span>
                                        @endif
                                        @if (isset($data) && $data->top_espalda_arriba)
                                            <img src="{{ asset($data->top_espalda_arriba) }}" width="100"
                                                height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100"
                                                height="100" />
                                        @endif
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group required {{ $errors->has('etiquetas') ? 'has-error' : '' }}">
                                        <label for="etiquetas">Etiquetas</label> <br />
                                        @if (isset($data))
                                            <input type="file" name="etiquetas" class="form-control"
                                                accept="image/*">
                                        @else
                                            <input type="file" name="etiquetas" class="form-control required"
                                                accept="image/*">
                                        @endif

                                        @if ($errors->has('etiquetas'))
                                            <span class="help-block">{{ $errors->first('etiquetas') }}</span>
                                        @endif
                                        @if (isset($data) && $data->etiquetas)
                                            <img src="{{ asset($data->etiquetas) }}" width="100" height="100" />
                                        @else
                                            <img src="{{ asset('image/no-image.png') }}" width="100"
                                                height="100" />
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button class="btn btn-primary btn-flat submit-thumb-form" title="Submit" type="submit"><i
                                    class="fa fa-fw fa-save"></i> Submit</button>
                            <a href="{{ route('thumb-images') }}" class="btn btn-warning btn-flat" title="Cancel"><i
                                    class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                        {{ Form::close() }}
                    </div>
                </div>
            </div>
        </div>
        <script>
            $("input[type=file]").change(function() {
                console.log(URL.createObjectURL(this.files[0]));
                $(this).parent().find('img').attr('src', URL.createObjectURL(this.files[0]));
            });
        </script>
    @endsection
