<x-app-layout>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="febric-section">
                    <div class="febric-header">
                        <div class="febric-title">
                            Select fabric
                            <a href="{{route('dashboard')}}" class="btn btn-success">Reset</a>
                        </div>
                        <div class="febric-filter">
                            <span class="icon"></span>
                            <div class="febric-filter-text d-flex">
                                <span class="text">filters</span><span class="febric-count">(2)</span>
                            </div>
                        </div>
                    </div>

                    <div id="fabricList" class="fabric-list d-flex flex-wrap">
                        @foreach ($sub as $item)
                            <div class="fabric-items" onClick="getActiveFabric(this,{{ $item->id }})">
                                <div class="fabric-box">
                                    <div class="ifabric-mg">
                                        <img class="b-lazy b-loaded" src="{{ asset($item->image) }}" alt="Oberon">
                                    </div>
                                    <div class="fabric-info d-flex">
                                        <div class="fabric-info-title">{{ $item->title }}</div>
                                        <div class="fabric-info-price">$140</div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div id="styleList" class="d-none fabric-contain-section"></div>
                </div>
            </div>

            <div class="col-md-5">
                <div id="available_window_1" class="image_render man_jacket without_model fabric_step">
                    <div class="layers active">
                        <img src="{{ asset($thumbImage->etiquetas) }}"  style="z-index: 45;position: absolute;"  id="etiquetas" />
                        <img src="{{ asset($thumbImage->top_espalda_arriba) }}"  style="z-index: 104;position: absolute;"  id="top_espalda_arriba" />
                        <img src="{{ asset($thumbImage->espalda_arriba) }}"  style="z-index: 105;position: absolute;"  id="espalda_arriba" />
                        <img src="{{ asset($thumbImage->espalda_abajo) }}"  style="z-index: 46;position: absolute;"  id="espalda_abajo" />
                        <img src="{{ asset($thumbImage->lapel_medium) }}"  style="z-index: 119;position: absolute;"  id="lapel_medium" />
                        <img src="{{ asset($thumbImage->interior) }}"  style="z-index: 120;position: absolute;"  id="interior" />
                        <img src="{{ asset($thumbImage->bottom_double) }}"  style="z-index: 130;position: absolute;"  id="bottom_double" />
                        <img src="{{ asset($thumbImage->breast_pocket) }}"  style="z-index: 150;position: absolute;"  id="breast_pocket" />
                        <img src="{{ asset($thumbImage->hip_pockets) }}"  style="z-index: 150;position: absolute;"  id="hip_pockets" />
                        <img src="" style="z-index: 170;" id="button">
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <button class="btn btn-success" onclick="nextStep(this,'fabricList')">Next</button>
            </div>
        </div>
    </div>

    @section('custome_script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script>
            localStorage.clear();
            $("#fabricList").find('.fabric-items')[0].click()


            function getActiveFabric(event, id) {
                localStorage.clear();
                $("#fabricList").find(".active").removeClass('active');
                $(event).addClass('active');
                localStorage.setItem("activeFabric", id);

                var url = "{{ url('get-color') }}";
                url = url + "/" + id;
                $.ajax({
                    url: url,
                    success: function(result) {
                        $("#etiquetas").attr('src',result.etiquetas);
                        $("#top_espalda_arriba").attr('src',result.top_espalda_arriba);
                        $("#espalda_arriba").attr('src',result.espalda_arriba);
                        $("#espalda_abajo").attr('src',result.espalda_abajo);
                        $("#lapel_medium").attr('src',result.lapel_medium);
                        $("#interior").attr('src',result.interior);
                        $("#bottom_double").attr('src',result.bottom_double);
                        $("#breast_pocket").attr('src',result.breast_pocket);
                        $("#hip_pockets").attr('src',result.hip_pockets);
                    }
                });
            }

            function nextStep(event, id) {

                var activeFabric = localStorage.getItem("activeFabric");
                var url = "{{ url('get-style') }}";
                url = url + "/" + activeFabric;
                $.ajax({
                    url: url,
                    success: function(result) {
                        $("#styleList").html("");
                        var html = '';
                        result.map((value) => {
                            html +=
                                `<div class="fabric-contain-block"><div class="fabric-contain-heading">${value.title}</div><div class="fabric-list d-flex flex-wrap">`;
                            value.get_sub_categories.map((item) => {
                                html += `
                                <div class="fabric-items" onClick="activeStyle(this,${item.id},'${item.title}','${value.title}','${item.image}')">
                                    <div class="fabric-box">
                                        <div class="fabric-contain-img option_trigger pos_0">
                                            <span class="${item.icon}"></span>
                                        </div>
                                        <div class="fabric-info">
                                            <div class="fabric-contain-title">${item.title}</div>
                                        </div>
                                    </div>
                                </div>
                                `;
                            });
                            html += "</div></div>";
                        })
                        $("#styleList").html(html);
                        onclick="nextStep(this,'fabricList')"
                    }
                });
                $("#" + id).addClass('d-none');
                $("#styleList").removeClass('d-none');
            }

            function activeStyle(event,id,selectedStyle,mainCat,image) {
                console.log({mainCat,selectedStyle});
                localStorage.setItem(mainCat,selectedStyle);


                if(mainCat == "Buttons" && selectedStyle == "By default"){
                    $("#button").attr('src','')
                }
                if(mainCat == "Style" && image != ""){
                    $('#lapel_medium').attr('src',image);
                    buttons();
                    // Jacket Lapels
                    var JacketLapels = localStorage.getItem("Jacket Lapels");
                    if(JacketLapels){
                        getJacketLapels(JacketLapels)
                    }

                    // Lapel Width
                    var LapelWidth = localStorage.getItem("Lapel Width");
                    if(LapelWidth){
                        getLapelWidth(LapelWidth)
                    }
                }

                // Pocket style
                if(mainCat == "Pocket style" && image != ""){
                    $("#hip_pockets").attr('src',image);
                }

                // Jacket Lapels
                if(mainCat == "Jacket Lapels"  && image != ""){
                    localStorage.setItem(mainCat,id);
                    getJacketLapels(id);
                }

                // Lapel Width
                if(mainCat == "Lapel Width" && image != ""){
                    localStorage.setItem(mainCat,id);
                    getLapelWidth(id);
                }

                $(event).parent().find('.active').removeClass('active');
                $(event).find('.fabric-contain-img').addClass('active');

                var url = "{{ url('get-style') }}";
                url = url + "/" + id;
                $.ajax({
                    url: url,
                    success: function(result) {
                        $(event).parent().parent().find('.extraData').remove();
                        if(result.length > 0){
                            if(result[0].title != "images"){
                                var html = "<div class='extraData'>";
                                result.map((value) => {
                                    html += `<div onClick="selectItems(this,'${selectedStyle}',${value.id},'${value.title}','${mainCat}')" class='extraDataItem' style="background: url(${value.image})"></div>`;
                                })
                                html += "</div>";
                                $(event).parent().parent().append(html);
                            }
                        }
                    }
                })
            }

            function selectItems(event,selectedStyle,id,title,mainCat) {
                console.log({selectedStyle,id,title,mainCat});
                if(mainCat == "Buttons"){
                    localStorage.setItem("ButtonStyle",id);
                    buttons();
                }else{
                    // var url = "{{ url('get-style') }}";
                    // url = url + "/" + id;
                    // $.ajax({
                    //     url: url,
                    //     success: function(result) {
                    //     $("#button").attr('src',result[1].image)
                    //     }
                    // })
                }
            }

            function buttons() {
                var Buttons = localStorage.getItem("Buttons");
                if(Buttons != undefined && Buttons != "By default"){
                    var Style = localStorage.getItem("Style");
                    var ButtonStyle = localStorage.getItem("ButtonStyle");
                    var url = "{{ url('get-buttons') }}";
                    $.ajax({
                        url: url,
                        data : {button : Style, ButtonStyle  : ButtonStyle},
                        success: function(result) {
                            console.log({"JEET":result});
                            if(result != "null"){
                                $("#button").attr('src',result.image)
                            }else{
                                $("#button").attr('src','')
                            }
                        }
                    })
                }else{
                    $("#button").attr('src','')
                }
            }

            function getJacketLapels(id) {
                var Style = localStorage.getItem("Style");
                console.log({Style});
                var url = "{{ url('get-lapel-medium') }}";
                $.ajax({
                    url: url,
                    data : {lapelMedium : Style,id:id},
                    success: function(result) {
                        console.log({result});
                        if(result){
                            $("#lapel_medium").attr('src',result.image)
                        }
                    }
                })
            }

            function getLapelWidth(id) {
                var Style = localStorage.getItem("Style");
                var url = "{{ url('get-lapel-width') }}";
                $.ajax({
                    url: url,
                    data : {lapelMedium : Style,id:id},
                    success: function(result) {
                        console.log({result});
                        if(result){
                            $("#lapel_medium").attr('src',result.image)
                        }
                    }
                })
            }

        </script>
    @stop
</x-app-layout>
