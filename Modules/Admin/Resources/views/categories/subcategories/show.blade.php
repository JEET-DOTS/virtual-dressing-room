@extends('admin::layouts.master')
@section('content')
  <!-- Content Header (Business category header) -->
  <x-slot name="breadcrumb">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Admin Business category Manager</h1>
      </div>

    </div>
  </x-slot>

  <x-slot name="content">
    <!-- Main content -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Admin Business category Manager</h3>

            <div class="card-tools">
            <a href="{{ route('sub-categories',[$category->parent_id]) }}" class="btn btn-default pull-right" title="Back"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>

            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
          <table class="table table-hover table-striped">
                <tr>
                    <th scope="row">{{ __('Title') }}</th>
                    <td>{{ $category->title }}</td>
                </tr>
                @if($category->parent_id)
                <tr>
                    <th scope="row">{{ __('Parent Category') }}</th>
                    <td>{{ $category->getParentCategories->title ?? ''}}</td>
                </tr>
               @endif
                <tr>
                    <th scope="row">{{ __('Description') }}</th>
                    <td class="editor-content">{!! $category->description  !!}</td>
                </tr>

                <tr>
                    <th scope="row"><?= __('Created') ?></th>
                    <td>{{ $category->created_at->format("M d Y") }}</td>
                </tr>
            </table>
          </div>

        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.content -->
    @endsection
