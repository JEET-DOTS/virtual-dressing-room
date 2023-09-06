@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-header">
                    <ol class="breadcrumb mb-0 ml-0">
                        <?php
                        $breadcrumb = App\Helpers\Helper::getBreadCrumb($cat_id);
                        $count = 1;
                        ?>
                        @foreach ($breadcrumb as $key => $item)
                            @if ($count == 1)
                                <li class="breadcrumb-item"><a href="{{ url('admin/categories') }}">{{ ucfirst($item) }}</a>
                                </li>
                            @else
                                @if (count($breadcrumb) == $count)
                                    <li class="breadcrumb-item active"><a
                                            href="{{ url('admin/sub-categories', [$key]) }}">{{ ucfirst($item) }}</a></li>
                                @else
                                    <li class="breadcrumb-item"><a
                                            href="{{ url('admin/sub-categories', [$key]) }}">{{ ucfirst($item) }}</a></li>
                                @endif
                            @endif
                            @php $count++; @endphp
                        @endforeach

                    </ol>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    @if (isset($category))
                        {{ Form::model($category, ['route' => ['sub-categories-update', $category->id], 'method' => 'patch', 'id' => 'submit-businesscategory', 'files' => 'true']) }}
                    @else
                        {{ Form::open(['route' => ['sub-categories-create', $cat_id], 'id' => 'submit-businesscategory', 'files' => 'true']) }}
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
                        <a href="{{ route('sub-categories', [$cat_id]) }}" class="btn btn-warning btn-flat"
                            title="Cancel"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>
                    </div>
                    {{ Form::close() }}
                </div>
                <!-- /.card-body -->

            </div>
        </div>

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
