@extends('admin::layouts.master')
@section('content')
    <!-- Content Header (Category header) -->
    <x-slot name="breadcrumb">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Post Category Manager</h1>
            </div>
        </div>
    </x-slot>

    <x-slot name="content">
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post Category Manager</h3>

                        <div class="card-tools">
                            <a href="{{ route('categories') }}" class="btn btn-default pull-right"
                                title="Cancel"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        @if (isset($category))
                            {{ Form::model($category, ['route' => ['categories.update'],  'id' => 'submit-businesscategory', 'files' => 'true']) }}
                            <input type="hidden" name="id" value="{{$category->id}}">
                        @else
                            {{ Form::open(['route' => ['categories.store'], 'id' => 'submit-businesscategory', 'files' => 'true']) }}
                        @endif
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group required {{ $errors->has('title') ? 'has-error' : '' }}">
                                        <label for="title">Title</label>
                                        {{ Form::text('title',  old('title'), ['class' => 'form-control', 'placeholder' => 'Title']) }}
                                        @if ($errors->has('title'))
                                            <span class="help-block">{{ $errors->first('title') }}</span>
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
                        </div>
                        <div class="box-footer">
                            <button class="btn btn-primary btn-flat submit-form" title="Submit" type="submit"><i
                                    class="fa fa-fw fa-save"></i> Submit</button>
                            <a href="{{ route('categories') }}" class="btn btn-warning btn-flat"
                                title="Cancel"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                        </div>
                        {{ Form::close() }}
                    </div>
                </div>
            </div>
        </div>
@endsection
