@extends('admin::layouts.master')
@section('content')
    <!-- Content Header (Sub Category header) -->
    <x-slot name="breadcrumb">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Post Sub Category Manager</h1>
            </div>
            <div class="col-sm-6">


            </div>
        </div>
    </x-slot>

    <x-slot name="content">
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post Sub Category Manager</h3>
                        <div class="card-tools">
                            <a href="{{ route('sub-categories',[$cat_id]) }}" class="btn btn-default pull-right"
                                title="Cancel"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        @if (isset($category))
                            {{ Form::model($category, ['route' => ['sub-categories-update', $category->id], 'method' => 'patch', 'id' => 'submit-businesscategory', 'files' => 'true']) }}
                        @else
                            {{ Form::open(['route' => ['sub-categories-create',$cat_id], 'id' => 'submit-businesscategory', 'files' => 'true']) }}
                        @endif
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group required {{ $errors->has('title') ? 'has-error' : '' }}">
                                        <label for="title">Title</label>
                                        {{ Form::text('title', old('title'), ['class' => 'form-control', 'placeholder' => 'Title']) }}
                                        @if ($errors->has('title'))
                                            <span class="help-block">{{ $errors->first('title') }}</span>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group required {{ $errors->has('icon') ? 'has-error' : '' }}">
                                        <label for="icon">icon</label>
                                        {{ Form::text('icon', old('icon'), ['class' => 'form-control', 'placeholder' => 'icon']) }}
                                        @if ($errors->has('icon'))
                                            <span class="help-block">{{ $errors->first('icon') }}</span>
                                        @endif
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group required {{ $errors->has('image') ? 'has-error' : '' }}">
                                        <label for="image">Image</label>
                                        {{ Form::file('image', old('image'), ['class' => 'form-control', 'placeholder' => 'image']) }}
                                        @if ($errors->has('image'))
                                            <span class="help-block">{{ $errors->first('image') }}</span>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="margin-top: 15px;">
                                <div class="col-md-12">

                                    <div class="form-group  {{ $errors->has('description') ? 'has-error' : '' }}">
                                        <label for="description">Description</label>
                                        {{ Form::textarea('description', old('description'), ['class' => 'form-control ckeditor', 'placeholder' => 'Description', 'rows' => 8]) }}
                                        @if ($errors->has('description'))
                                            <span class="help-block">{{ $errors->first('description') }}</span>
                                        @endif
                                    </div>


                                </div>
                            </div>
                        </div><!-- /.box-body -->
                        <div class="box-footer">
                            <button class="btn btn-primary btn-flat submit-form" title="Submit" type="submit"><i
                                    class="fa fa-fw fa-save"></i> Submit</button>
                            <a href="{{ route('sub-categories',[$cat_id]) }}" class="btn btn-warning btn-flat"
                                title="Cancel"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                        {{ Form::close() }}
                    </div>
                    <!-- /.card-body -->

                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.content -->

        <!-- /.content -->
        @push('styles')
            <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
            <style>
                .select2-container--default .select2-selection--multiple .select2-selection__choice {
                    color: #000000;
                }

            </style>
        @endpush

        @push('scripts')
            <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
            <script type="text/javascript">
                $(document).ready(function() {
                    $('.select2').select2({
                        'placeholder': 'Please Select'
                    });
                });
            </script>
        @endpush
        @endsection
