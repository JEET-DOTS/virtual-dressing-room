<x-app-layout>

    <x-slot name="content">

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="febric-section">
                                <div id="fabricList" class="fabric-list d-flex flex-wrap">
                                    @foreach ($sub as $item)
                                        <div class="fabric-items" onClick="getActiveFabric(this,{{ $item->id }})">
                                            <div class="fabric-box">
                                                <div class="ifabric-mg">
                                                    <img class="b-lazy b-loaded" src="{{ asset($item->image) }}"
                                                        alt="Oberon">
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

                        <div class="col-md-6">
                            <div id="available_window_1" class="image_render man_jacket without_model fabric_step dress-sec">
                                <div class="layers active">
                                    {{-- Body Part Start --}}
                                    <div class="bodyPart" style="display: none;">
                                        <img src="{{asset('image/corbata_estrecha.png')}}"  style="z-index: 119;" class="man_jacket">
                                        <img src="{{asset('image/corbata_sombra.png')}}"  style="z-index: 119;" class="man_jacket">
                                        <img src="{{asset('image/shirt_to_jacket.png')}}"  style="z-index: 115;" class="shirt">
                                        {{-- <img src="{{asset('image/neck_single_breasted_buttons_2.png')}}"  style="z-index: 119;" class="man_jacket"> --}}
                                        <img src="{{asset('image/sleeves.png')}}"  style="z-index: 150;" class="man_jacket">
                                        <img src="{{asset('image/carlos.png')}}"  style="z-index: 106;" class="man_body">
                                    </div>
                                    {{-- Body Part End --}}



                                    {{-- Jacket Start  --}}
                                    <span id="JacketPart">
                                        <img src="{{ asset($thumbImage->etiquetas) }}"
                                            style="z-index: 45;position: absolute;" id="etiquetas" />
                                        <img src="{{ asset($thumbImage->top_espalda_arriba) }}"
                                            style="z-index: 104;position: absolute;" id="top_espalda_arriba" />
                                        <img src="{{ asset($thumbImage->espalda_arriba) }}"
                                            style="z-index: 105;position: absolute;" id="espalda_arriba" />
                                        <img src="{{ asset($thumbImage->espalda_abajo) }}"
                                            style="z-index: 46;position: absolute;" id="espalda_abajo" />
                                        <img src="{{ asset($thumbImage->lapel_medium) }}"
                                            style="z-index: 119;position: absolute;" id="lapel_medium" />
                                        <img src="{{ asset($thumbImage->interior) }}"
                                            style="z-index: 120;position: absolute;" id="interior" />
                                        <img src="{{ asset($thumbImage->bottom_double) }}"
                                            style="z-index: 130;position: absolute;" id="bottom_double" />
                                        <img src="{{ asset($thumbImage->breast_pocket) }}"
                                            style="z-index: 150;position: absolute;" id="breast_pocket" />
                                        <img src="{{ asset($thumbImage->hip_pockets) }}"
                                            style="z-index: 150;position: absolute;" id="hip_pockets" />
                                        <img src="" style="z-index: 170;" id="button">
                                        <img src="" style="z-index: 160;" class="man_jacket" id="PocketSquare">
                                    </span>
                                    {{-- Jacket End  --}}
                                </div>
                                <div class="pant-layers" id="FoldedPant">
                                    <img src="{{ asset($thumbImage->length_long) }}" id="length_long"
                                        style="z-index: 31;" class="pants_folded">
                                    <img src="{{ asset($thumbImage->front_pocket) }}" id="front_pocket"
                                        style="z-index: 33;" class="pants_folded">
                                    <img src="{{ asset($thumbImage->back_pocket_with_button) }}"
                                        id="back_pocket_with_button" style="z-index: 38;" class="pants_folded">
                                    <img src="" id="cuffs_length_long" style="z-index: 35;"
                                        class="pants_folded">
                                    <img src="" id="back_pocket_button" style="z-index: 39;"
                                        class="pants_folded">
                                </div>
                                <div class="layers active" style="display:none;" id="LongPant">
                                    <img class="man_pant" id="length_long_cut_slim" src="{{ asset($thumbImage->length_long_cut_slim) }}" style="z-index: 31;">
                                    <img class="man_pant" id="length_long_pleats_single" src="" style="z-index: 32;">
                                    <img class="man_pant" id="length_long_diagonal" src="{{ asset($thumbImage->length_long_diagonal) }}" style="z-index: 33;">
                                    <img class="man_pant" id="length_long_visible_button" src="{{ asset($thumbImage->length_long_visible_button) }} " style="z-index: 35;">
                                    <img class="man_pant" id="length_long_belt_loop" src="{{ asset($thumbImage->length_long_belt_loop) }} " style="z-index: 35;">
                                    <img class="man_pant man_shose" id="length_long_zapatos" src="{{ asset($thumbImage->length_long_zapatos) }} " style="z-index: 26;">
                                    <img class="man_pant" id="length_long_pant_cuffs" src="{{ asset($thumbImage->length_long_pant_cuffs) }} " style="z-index: 30;">
                                    <img class="man_pant" id="length_long_pant_cuff" src="" style="z-index: 35;">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="d-flex align-items-center flex-wrap justify-content-md-end  mb-4">
                                <a href="{{ route('dashboard') }}" class="btn btn-block btn-primary btn-sm">Reset</a>
                                <button class="btn btn-block btn-primary btn-sm ml-15"
                                    onclick="nextStep(this,'fabricList')">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @section('custome_script')
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"
                integrity="sha512-3j3VU6WC5rPQB4Ld1jnLV7Kd5xr+cq9avvhwqzbH/taCRNURoeEpoPBK9pDyeukwSxwRPJ8fDgvYXd6SkaZ2TA=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script>
                localStorage.clear();
                $("#fabricList").find('.fabric-items')[0].click()


                function getActiveFabric(event, id) {
                    $('.loader').show();
                    localStorage.clear();
                    $("#fabricList").find(".active").removeClass('active');
                    $(event).addClass('active');
                    localStorage.setItem("activeFabric", id);

                    var url = "{{ url('get-color') }}";
                    url = url + "/" + id;
                    $.ajax({
                        url: url,
                        success: function(result) {
                            $("#etiquetas").attr('src', result.etiquetas);
                            $("#top_espalda_arriba").attr('src', result.top_espalda_arriba);
                            $("#espalda_arriba").attr('src', result.espalda_arriba);
                            $("#espalda_abajo").attr('src', result.espalda_abajo);
                            $("#lapel_medium").attr('src', result.lapel_medium);
                            $("#interior").attr('src', result.interior);
                            $("#bottom_double").attr('src', result.bottom_double);
                            $("#breast_pocket").attr('src', result.breast_pocket);
                            $("#hip_pockets").attr('src', result.hip_pockets);

                            // Pant
                            $("#length_long").attr('src', result.length_long);
                            $("#front_pocket").attr('src', result.front_pocket);
                            $("#back_pocket_with_button").attr('src', result.back_pocket_with_button);

                            // Long Pant
                            $("#length_long_cut_slim").attr('src',result.length_long_cut_slim);
                            $("#length_long_pleats_single").attr('src',result.length_long_pleats_single);
                            $("#length_long_diagonal").attr('src',result.length_long_diagonal);
                            $("#length_long_visible_button").attr('src',result.length_long_visible_button);
                            $("#length_long_belt_loop").attr('src',result.length_long_belt_loop);
                            $("#length_long_zapatos").attr('src',result.length_long_zapatos);
                            $("#length_long_pant_cuffs").attr('src',result.length_long_pant_cuffs);

                            $('.loader').hide();
                        }
                    });
                }

                function nextStep(event, id) {
                    $('.loader').show();
                    var activeFabric = localStorage.getItem("activeFabric");
                    var url = "{{ url('get-style') }}";
                    url = url + "/" + activeFabric;
                    $("#FoldedPant").hide();
                    $("#LongPant").show();
                    $(".bodyPart").show();
                    $.ajax({
                        url: url,
                        success: function(result) {
                            $("#styleList").html("");
                            var html = '';
                            result.map((value, key) => {
                                html +=
                                    `<div class="fabric-contain-block"><div class="fabric-contain-heading">${value.title}</div><hr/><div class="fabric-list d-flex flex-wrap">`;
                                value.get_sub_categories.map((item, k) => {
                                    var activeClass = '';
                                    if (k == 0) {
                                        localStorage.setItem(value.title, item.title);
                                        activeClass = 'active';
                                    }

                                    html += `
                                            <div class="fabric-items" onClick="activeStyle(this,${item.id},'${item.title}','${value.title}','${item.image}')">
                                                <div class="fabric-box ${activeClass}">
                                                    <div class="fabric-contain-img option_trigger pos_0 ${activeClass}">
                                                        <span class="${item.icon}"></span>
                                                    </div>
                                                    <div class="fabric-info">
                                                        <div class="fabric-contain-title">${item.title}</div>
                                                    </div>
                                                </div>
                                            </div>`;

                                });
                                html += "</div></div>";
                            })
                            $("#styleList").html(html);
                            setTimeout(() => {
                                $('.loader').hide();
                            }, 100);

                        }
                    });
                    $("#" + id).addClass('d-none');
                    $("#styleList").removeClass('d-none');
                    $(event).hide();
                }

                function activeStyle(event, id, selectedStyle, mainCat, image) {
                    $('.loader').show();
                    localStorage.setItem(mainCat, selectedStyle);

                    if (mainCat == "Buttons" && selectedStyle == "By default") {
                        $("#button").attr('src', '')
                    }
                    if (mainCat == "Pocket Square" && selectedStyle == "Without") {
                        $("#PocketSquare").attr('src', '')
                    }

                    if (mainCat == "Style" && image != "null") {
                        $('#lapel_medium').attr('src', image);
                        buttons();
                        // Jacket Lapels
                        var JacketLapels = localStorage.getItem("Jacket Lapels");
                        if (JacketLapels) {
                            getJacketLapels(JacketLapels)
                        }
                    }
                    if (mainCat == "Pant Cuffs" && image != "null") {
                        $("#length_long_pant_cuff").css("display", "block");
                        $("#length_long_pant_cuff").attr("src", image);
                    } else {
                        $("#length_long_pant_cuff").attr('src', '');
                        $("#length_long_pant_cuff").css("display", "none");
                    }
                    if (mainCat == "Pleats" && image != "null") {
                        $("#length_long_pleats_single").css("display", "block");
                        $("#length_long_pleats_single").attr("src", image);
                        $("#JacketPart").hide();
                        $("#LongPant").css("margin-top","-178px");
                        $("#LongPant").css("z-index","999");
                    } else {
                        $("#JacketPart").show();
                        $("#length_long_pleats_single").attr('src', '');
                        $("#length_long_pleats_single").css("display", "none");
                        $("#LongPant").css("margin-top","-146px");
                        $("#LongPant").css("z-index","0");
                    }

                    // Pocket style
                    if (mainCat == "Pocket Style" && image != "null") {
                        $("#hip_pockets").attr('src', image);
                    }

                    // Jacket Lapels
                    if (mainCat == "Jacket Lapels" && image != "null") {
                        localStorage.setItem(mainCat, id);
                        getJacketLapels(id);
                    }

                    $(event).parent().find('.active').removeClass('active');
                    $(event).find('.fabric-box').addClass('active');
                    $(event).find('.fabric-contain-img').addClass('active');

                    var url = "{{ url('get-style') }}";
                    url = url + "/" + id;
                    $.ajax({
                        url: url,
                        success: function(result) {
                            $(event).parent().parent().find('.extraData').remove();
                            console.log(result);
                            if (result.length > 0) {
                                if (result[0].title != "images") {
                                    var html = "<div class='extraData'>";
                                    result.map((value) => {
                                        html +=
                                            `<div onClick="selectItems(this,'${selectedStyle}',${value.id},'${value.title}','${mainCat}')" class='extraDataItem' style="background: url(${value.image})"></div>`;
                                    })
                                    html += "</div>";
                                    console.log(html);
                                    $(event).parent().parent().append(html);

                                    var extraData = $(event).parent().parent()[0];
                                    var scrollHeight = $("#styleList").prop("scrollHeight") - $(extraData).prop(
                                        "scrollHeight");
                                    // $(extraData).animate({scrollTop: $(extraData).prop("scrollHeight")}, 500);
                                    $("#styleList").animate({
                                        scrollTop: scrollHeight
                                    }, 500);
                                }
                            }
                            setTimeout(() => {
                                $('.loader').hide();
                            }, 100);
                        }
                    })
                }

                function selectItems(event, selectedStyle, id, title, mainCat) {
                    console.log(event, selectedStyle, id, title, mainCat);
                    $('.loader').show();
                    if (mainCat == "Buttons") {
                        localStorage.setItem("ButtonStyle", id);
                        buttons();
                    }
                    if (mainCat == "Pocket Square") {
                        localStorage.setItem("PocketSquare", id);
                        localStorage.setItem("PocketSquareColor", title);

                        PocketSquare(id);
                    }
                    setTimeout(() => {
                        $('.loader').hide();
                    }, 100);
                }

                function buttons() {
                    $('.loader').show();
                    var Buttons = localStorage.getItem("Buttons");
                    if (Buttons != undefined && Buttons != "By default") {
                        var Style = localStorage.getItem("Style");
                        var ButtonStyle = localStorage.getItem("ButtonStyle");
                        var url = "{{ url('get-buttons') }}";
                        $.ajax({
                            url: url,
                            data: {
                                button: Style,
                                ButtonStyle: ButtonStyle
                            },
                            success: function(result) {
                                if (result != "null") {
                                    $("#button").attr('src', result.image)
                                } else {
                                    $("#button").attr('src', '')
                                }
                                setTimeout(() => {
                                $('.loader').hide();
                            }, 100);
                            }
                        })
                    } else {
                        $("#button").attr('src', '')
                        setTimeout(() => {
                                $('.loader').hide();
                            }, 100);
                    }
                }

                function getJacketLapels(id) {
                    $('.loader').show();
                    var Style = localStorage.getItem("Style");
                    var url = "{{ url('get-lapel-medium') }}";
                    $.ajax({
                        url: url,
                        data: {
                            lapelMedium: Style,
                            id: id
                        },
                        success: function(result) {
                            if (result) {
                                $("#lapel_medium").attr('src', result.image)
                            }
                            setTimeout(() => {
                                $('.loader').hide();
                            }, 100);
                        }
                    })
                }

                function PocketSquare(id) {
                    $('.loader').show();
                    var PocketSquareColor = localStorage.getItem("PocketSquareColor");
                    var url = "{{ url('get-lapel-medium') }}";
                    $.ajax({
                        url: url,
                        data: {
                            lapelMedium: PocketSquareColor,
                            id: id
                        },
                        success: function(result) {
                            if (result) {
                                $("#PocketSquare").attr('src', result.image)
                            }
                            setTimeout(() => {
                                $('.loader').hide();
                            }, 100);
                        }
                    })
                }
            </script>
        @stop
</x-app-layout>
