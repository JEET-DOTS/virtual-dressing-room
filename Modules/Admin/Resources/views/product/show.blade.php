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
            <a href="{{ route('categories') }}" class="btn btn-default pull-right" title="Back"><i class="fa fa-fw fa-chevron-circle-left"></i> Back</a>

            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
          <table class="table table-hover table-striped">
                <tr>
                    <th scope="row">{{ __('Title') }}</th>
                    <td>{{ $businesscategory->title }}</td>
                </tr>
                <tr>
                    <th scope="row">{{ __('Status') }}</th>
                    <td>{{ $businesscategory->status ? __('Active') : __('Inactive')  }}</td>
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
