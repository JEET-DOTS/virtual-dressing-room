<ul>
    @foreach($getSubCategories as $child)
	<li>
	    {{ $child->title }} @if(count($child->getSubCategories) > 0) ({{count($child->getSubCategories)}}) @endif  
        <span style="margin-left: 15px;">
            <a href="{{route('admin.sub-categories-show',[$child->id])}}">
                <i class="fa fa-eye"></i>
            </a>
        </span>
    	@if(count($child->getSubCategories))
            @include('Admin/businesscategories/manageChild',['getSubCategories' => $child->getSubCategories])
        @endif
        
	</li>
    @endforeach
</ul>