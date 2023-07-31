<x-layouts.master>



    @section('title', 'Category')
    <!-- Content Header ( Category header) -->
    <x-slot name="breadcrumb">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Post Category Manager</h1>
            </div>
            <div class="col-sm-6">
                 <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{route('admin.dashboard')}}">Home</a></li>
                    <li class="breadcrumb-item"><a href="{{route('admin.business-categories.index')}}">Categories</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Tree View</a></li>
                </ol> 
            </div>
        </div>
    </x-slot>

    <x-slot name="content">
        <!-- Main content -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">All Categories</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <ul id="tree1">
                            @foreach($treeViewData as $category)
                                <li>
                                    {{ $category->title }}   
                                    @if(count($category->getSubCategories) > 0) ({{count($category->getSubCategories)}}) @endif
                                    <span style="margin-left: 15px;">
                                        <a href="{{route('admin.business-categories.show',[$category->id])}}">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </span>
                                    @if(count($category->getSubCategories) > 0)
                                        @include('Admin/businesscategories/manageChild',['getSubCategories' => $category->getSubCategories])
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </x-slot>
</x-layouts.master>
