@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <!-- Main content -->
        <div class="container-xxl flex-grow-1 container-p-y">
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
                                            <option value="{{ $id }}" <?php if (isset($data) && $data->category_id == $id) {
                                                echo 'selected';
                                            } ?>>{{ $title }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('hip_pockets'))
                                        <span class="help-block">{{ $errors->first('hip_pockets') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-8"></div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('hip_pockets') ? 'has-error' : '' }}">
                                                <label for="hip_pockets">Hip Pockets</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="hip_pockets" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="hip_pockets" class="form-control required"
                                                        accept="image/*">
                                                @endif

                                                @if ($errors->has('hip_pockets'))
                                                    <span class="help-block">{{ $errors->first('hip_pockets') }}</span>
                                                @endif
                                                @if (isset($data) && $data->hip_pockets)
                                                    <img src="{{ asset($data->hip_pockets) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
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
                                                    <img src="{{ asset($data->breast_pocket) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
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
                                                    <img src="{{ asset($data->bottom_double) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('interior') ? 'has-error' : '' }}">
                                                <label for="interior">Interior</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="interior" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="interior" class="form-control required"
                                                        accept="image/*">
                                                @endif

                                                @if ($errors->has('interior'))
                                                    <span class="help-block">{{ $errors->first('interior') }}</span>
                                                @endif
                                                @if (isset($data) && $data->interior)
                                                    <img src="{{ asset($data->interior) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('lapel_medium') ? 'has-error' : '' }}">
                                                <label for="lapel_medium">Lapel Medium</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="lapel_medium" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="lapel_medium"
                                                        class="form-control required" accept="image/*">
                                                @endif

                                                @if ($errors->has('lapel_medium'))
                                                    <span class="help-block">{{ $errors->first('lapel_medium') }}</span>
                                                @endif
                                                @if (isset($data) && $data->lapel_medium)
                                                    <img src="{{ asset($data->lapel_medium) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('espalda_abajo') ? 'has-error' : '' }}">
                                                <label for="espalda_abajo">Espalda Abajo</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="espalda_abajo" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="espalda_abajo"
                                                        class="form-control required" accept="image/*">
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
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('espalda_arriba') ? 'has-error' : '' }}">
                                                <label for="espalda_arriba">Espalda Arriba</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="espalda_arriba" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="espalda_arriba"
                                                        class="form-control required" accept="image/*">
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
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('top_espalda_arriba') ? 'has-error' : '' }}">
                                                <label for="top_espalda_arriba">Top Espalda Arriba</label> <br />
                                                @if (isset($data))
                                                    <input type="file" name="top_espalda_arriba" class="form-control"
                                                        accept="image/*">
                                                @else
                                                    <input type="file" name="top_espalda_arriba"
                                                        class="form-control required" accept="image/*">
                                                @endif

                                                @if ($errors->has('top_espalda_arriba'))
                                                    <span
                                                        class="help-block">{{ $errors->first('top_espalda_arriba') }}</span>
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
                                        <div class="col-md-6">
                                            <div
                                                class="form-group required {{ $errors->has('etiquetas') ? 'has-error' : '' }}">
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
                                                    <img src="{{ asset($data->etiquetas) }}" width="100"
                                                        height="100" />
                                                @else
                                                    <img src="{{ asset('image/no-image.png') }}" width="100"
                                                        height="100" />
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div style="position: relative;height: 80px;">
                                        <img id="etiquetas"
                                            src=" @if (isset($data)) {{ asset($data->etiquetas) }} @endif"
                                            width="250" style="z-index: 45;position: absolute;" />
                                        <img id="top_espalda_arriba"
                                            src=" @if (isset($data)) {{ asset($data->top_espalda_arriba) }} @endif"
                                            width="250" style="z-index: 104;position: absolute;" />
                                        <img id="espalda_arriba"
                                            src=" @if (isset($data)) {{ asset($data->espalda_arriba) }} @endif"
                                            width="250" style="z-index: 105;position: absolute;" />
                                        <img id="espalda_abajo"
                                            src=" @if (isset($data)) {{ asset($data->espalda_abajo) }} @endif"
                                            width="250" style="z-index: 46;position: absolute;" />
                                        <img id="lapel_medium"
                                            src=" @if (isset($data)) {{ asset($data->lapel_medium) }} @endif"
                                            width="250" style="z-index: 119;position: absolute;" />
                                        <img id="interior"
                                            src=" @if (isset($data)) {{ asset($data->interior) }} @endif"
                                            width="250" style="z-index: 120;position: absolute;" />
                                        <img id="bottom_double"
                                            src=" @if (isset($data)) {{ asset($data->bottom_double) }} @endif"
                                            width="250" style="z-index: 130;position: absolute;" />
                                        <img id="breast_pocket"
                                            src=" @if (isset($data)) {{ asset($data->breast_pocket) }} @endif"
                                            width="250" style="z-index: 150;position: absolute;" />
                                        <img id="hip_pockets"
                                            src=" @if (isset($data)) {{ asset($data->hip_pockets) }} @endif"
                                            width="250" style="z-index: 150;position: absolute;" />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr />
                        <center>
                            <h6>Folded Pant</h6>
                        </center>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long') ? 'has-error' : '' }}">
                                            <label for="length_long">Length Long</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long'))
                                                <span class="help-block">{{ $errors->first('length_long') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long)
                                                <img src="{{ asset($data->length_long) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('front_pocket') ? 'has-error' : '' }}">
                                            <label for="front_pocket">Front Pocket</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="front_pocket" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="front_pocket" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('front_pocket'))
                                                <span class="help-block">{{ $errors->first('front_pocket') }}</span>
                                            @endif
                                            @if (isset($data) && $data->front_pocket)
                                                <img src="{{ asset($data->front_pocket) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('back_pocket_with_button') ? 'has-error' : '' }}">
                                            <label for="back_pocket_with_button">Back Pocket With Button</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="back_pocket_with_button" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="back_pocket_with_button"
                                                    class="form-control required" accept="image/*">
                                            @endif

                                            @if ($errors->has('back_pocket_with_button'))
                                                <span
                                                    class="help-block">{{ $errors->first('back_pocket_with_button') }}</span>
                                            @endif
                                            @if (isset($data) && $data->back_pocket_with_button)
                                                <img src="{{ asset($data->back_pocket_with_button) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div style="position: relative;height: 33px;  ">
                                    <img id="length_long" width="250"
                                        src="@if (isset($data)) {{ asset($data->length_long) }} @endif"
                                        id="length_long" style="position: absolute; z-index: 31;" class="pants_folded">
                                    <img id="front_pocket" width="250"
                                        src="@if (isset($data)) {{ asset($data->front_pocket) }} @endif"
                                        id="front_pocket" style="position: absolute; z-index: 33;" class="pants_folded">
                                    <img id="back_pocket_with_button" width="250"
                                        src="@if (isset($data)) {{ asset($data->back_pocket_with_button) }} @endif"
                                        id="back_pocket_with_button" style="position: absolute; z-index: 38;"
                                        class="pants_folded">
                                </div>
                            </div>
                        </div>
                        <hr />
                        <center>
                            <h6>Long Pant</h6>
                        </center>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_cut_slim') ? 'has-error' : '' }}">
                                            <label for="length_long_cut_slim">Length Long Cut Slim</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_cut_slim" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_cut_slim" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_cut_slim'))
                                                <span class="help-block">{{ $errors->first('length_long_cut_slim') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_cut_slim)
                                                <img src="{{ asset($data->length_long_cut_slim) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_pleats_single') ? 'has-error' : '' }}">
                                            <label for="length_long_pleats_single">Pleats Single</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_pleats_single" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_pleats_single" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_pleats_single'))
                                                <span class="help-block">{{ $errors->first('length_long_pleats_single') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_pleats_single)
                                                <img src="{{ asset($data->length_long_pleats_single) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_diagonal') ? 'has-error' : '' }}">
                                            <label for="length_long_diagonal">Diagonal</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_diagonal" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_diagonal" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_diagonal'))
                                                <span class="help-block">{{ $errors->first('length_long_diagonal') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_diagonal)
                                                <img src="{{ asset($data->length_long_diagonal) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_visible_button') ? 'has-error' : '' }}">
                                            <label for="length_long_visible_button">Visible Button</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_visible_button" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_visible_button" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_visible_button'))
                                                <span class="help-block">{{ $errors->first('length_long_visible_button') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_visible_button)
                                                <img src="{{ asset($data->length_long_visible_button) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_belt_loop') ? 'has-error' : '' }}">
                                            <label for="length_long_belt_loop">Belt Loop</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_belt_loop" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_belt_loop" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_belt_loop'))
                                                <span class="help-block">{{ $errors->first('length_long_belt_loop') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_belt_loop)
                                                <img src="{{ asset($data->length_long_belt_loop) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_zapatos') ? 'has-error' : '' }}">
                                            <label for="length_long_zapatos">Zapatos</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_zapatos" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_zapatos" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_zapatos'))
                                                <span class="help-block">{{ $errors->first('length_long_zapatos') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_zapatos)
                                                <img src="{{ asset($data->length_long_zapatos) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div
                                            class="form-group required {{ $errors->has('length_long_pant_cuffs') ? 'has-error' : '' }}">
                                            <label for="length_long_pant_cuffs">Pant Cuffs</label> <br />
                                            @if (isset($data))
                                                <input type="file" name="length_long_pant_cuffs" class="form-control"
                                                    accept="image/*">
                                            @else
                                                <input type="file" name="length_long_pant_cuffs" class="form-control required"
                                                    accept="image/*">
                                            @endif

                                            @if ($errors->has('length_long_pant_cuffs'))
                                                <span class="help-block">{{ $errors->first('length_long_pant_cuffs') }}</span>
                                            @endif
                                            @if (isset($data) && $data->length_long_pant_cuffs)
                                                <img src="{{ asset($data->length_long_pant_cuffs) }}" width="100"
                                                    height="100" />
                                            @else
                                                <img src="{{ asset('image/no-image.png') }}" width="100"
                                                    height="100" />
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div style="position: relative;height: 33px;  ">
                                    <img id="length_long_cut_slim" src="@if (isset($data)) {{ asset($data->length_long_cut_slim) }} @endif" width="250" style="position: absolute; z-index: 31;">
                                    <img id="length_long_pleats_single" src="@if (isset($data)) {{ asset($data->length_long_pleats_single) }} @endif" width="250" style="position: absolute; z-index: 32;">
                                    <img id="length_long_diagonal" src="@if (isset($data)) {{ asset($data->length_long_diagonal) }} @endif" width="250" style="position: absolute; z-index: 33;">
                                    <img id="length_long_visible_button" src="@if (isset($data)) {{ asset($data->length_long_visible_button) }} @endif " width="250" style="position: absolute; z-index: 35;">
                                    <img id="length_long_belt_loop" src="@if (isset($data)) {{ asset($data->length_long_belt_loop) }} @endif " width="250" style="position: absolute; z-index: 35;">
                                    <img id="length_long_zapatos" src="@if (isset($data)) {{ asset($data->length_long_zapatos) }} @endif " width="250" style="position: absolute; z-index: 26;top: -253px;">
                                    <img id="length_long_pant_cuffs" src="@if (isset($data)) {{ asset($data->length_long_pant_cuffs) }} @endif " width="250" style="position: absolute; z-index: 30;">
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
        <script>
            $("input[type=file]").change(function() {
                console.log($(this).attr('name'));
                $(this).parent().find('img').attr('src', URL.createObjectURL(this.files[0]));

                if ($(this).attr('name') == "etiquetas") {
                    $("#etiquetas").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "top_espalda_arriba") {
                    $("#top_espalda_arriba").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "espalda_arriba") {
                    $("#espalda_arriba").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "espalda_abajo") {
                    $("#espalda_abajo").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "lapel_medium") {
                    $("#lapel_medium").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "interior") {
                    $("#interior").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "bottom_double") {
                    $("#bottom_double").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "breast_pocket") {
                    $("#breast_pocket").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "hip_pockets") {
                    $("#hip_pockets").attr('src', URL.createObjectURL(this.files[0]));
                }

                // Folded Pant
                if ($(this).attr('name') == "length_long") {
                    $("#length_long").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "front_pocket") {
                    $("#front_pocket").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "back_pocket_with_button") {
                    $("#back_pocket_with_button").attr('src', URL.createObjectURL(this.files[0]));
                }

                // Long Pant
                if ($(this).attr('name') == "length_long_cut_slim") {
                    $("#length_long_cut_slim").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_pleats_single") {
                    $("#length_long_pleats_single").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_diagonal") {
                    $("#length_long_diagonal").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_visible_button") {
                    $("#length_long_visible_button").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_belt_loop") {
                    $("#length_long_belt_loop").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_zapatos") {
                    $("#length_long_zapatos").attr('src', URL.createObjectURL(this.files[0]));
                }
                if ($(this).attr('name') == "length_long_pant_cuffs") {
                    $("#length_long_pant_cuffs").attr('src', URL.createObjectURL(this.files[0]));
                }
            });
        </script>
    @endsection
