<ul>
    @foreach($getSubCategories as $child)
	<li>
	    {{ $child->title }}

    	@if(count($child->getSubCategories))
            @include('admin::categories/manageChild',['getSubCategories' => $child->getSubCategories])
        @endif

	</li>
    @endforeach
</ul>
