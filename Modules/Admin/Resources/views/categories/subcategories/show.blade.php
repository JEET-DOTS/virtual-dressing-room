@extends('admin::layouts.master')
@section('content')
    <x-slot name="content">
        <!-- Main content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-header">
                    <ol class="breadcrumb mb-0 ml-0">
                        <?php
                        $breadcrumb = App\Helpers\Helper::getBreadCrumb($category->parent_id);
                        $count = 1;
                        ?>
                        @foreach ($breadcrumb as $key => $item)
                            @if ($count == 1)
                                <li class="breadcrumb-item"><a href="{{ url('admin/categories') }}">{{ ucfirst($item) }}</a>
                                </li>
                            @else
                                @if (count($breadcrumb) == $count)
                                    <li class="breadcrumb-item active"><a
                                            href="{{ url('admin/sub-categories', [$key]) }}">{{ ucfirst($item) }}</a>
                                    </li>
                                @else
                                    <li class="breadcrumb-item"><a
                                            href="{{ url('admin/sub-categories', [$key]) }}">{{ ucfirst($item) }}</a>
                                    </li>
                                @endif
                            @endif
                            @php $count++; @endphp
                        @endforeach

                    </ol>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table class="table table-hover table-striped">
                        <tr>
                            <th scope="row">{{ __('Title') }}</th>
                            <td>{{ $category->title }}</td>
                        </tr>
                        @if ($category->parent_id)
                            <tr>
                                <th scope="row">{{ __('Parent Category') }}</th>
                                <td>{{ $category->getParentCategories->title ?? '' }}</td>
                            </tr>
                        @endif
                        <tr>
                            <th scope="row">{{ __('Description') }}</th>
                            <td class="editor-content">{!! $category->description !!}</td>
                        </tr>

                        <tr>
                            <th scope="row"><?= __('Created') ?></th>
                            <td>{{ $category->created_at->format('M d Y') }}</td>
                        </tr>
                    </table>
                </div>

            </div>
            <!-- /.card -->
        </div>
    @endsection
