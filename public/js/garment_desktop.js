function Garment(t, e) {
    (this.step = ""),
        (this.container = $(t)),
        (this._relations_active = {}),
        (this.buttons_holes_opened = !1),
        (this.extra_fabrics_active = !1),
        (this.extra_linings_active = !1),
        (this.current_extra_option = !1),
        (this.render = $("#available_window .layers")),
        (this.render_zoom = $("#available_window_zoom .layers")),
        (this.pocket_square = $(".pocket_square", this.container)),
        (this.render_enabled = !0),
        (this.current_fabric_activator_parent = ""),
        (this.id_box_opt_fabric = ""),
        (this.bLazy_fabric = !1),
        (this.bLazy_extra = !1),
        (this.fabric_new = !1),
        (this.fabric_preview_open = !1),
        (this.image_size = "STD"),
        (this.multi_fabric = !1),
        (this.multi_fabric_active = !1),
        (this.multi_fabric_options = []),
        (this.position_render = ""),
        (this.zoom = ""),
        (this.last_change = ""),
        (this.has_extra_lining = !1),
        (this.has_extra_unlined = !1),
        (this.manualStateChange = !0),
        (this.previous_view = "front"),
        (this.quilted_alert = !1),
        (this.unlined_coat_alert = !1),
        (this.winter_lining_alert = !1),
        (this.out_of_stock_status = !1),
        (this.out_of_stock_control = !1),
        (this.views = []),
        (this.pre_filter_active = !1),
        (this.shirt_style_click = !1),
        (this.actived_coat_seters = !1),
        (this.customer_active = !1),
        (this.lastSharedUrl = null),
        (this._events = {}),
        (this.logos_code = {}),
        (this.minimal_array = !1),
        (this.minimal_enabled = !1),
        (this.garment_inited = !1),
        (this.current_coat_mode = !1),
        (this.productLoadedOk = !1),
        (this.bf_dsc = 0),
        (this.filters_applied = []),
        (this.popupCoatModeOpened = { light: !0, normal: !0, winter: !0, winter_detachable: !0 });
    for (var i in e) this[i] = e[i];
    (this.current.product_type = this.product_type),
        (this.zoom = "normal"),
        (this.current.view = "front"),
        "man_polo" == this.product_type && (this.current.view = "without_model"),
        "man_shirt" == this.product_type && (this.current.view = "folded"),
        "man_jacket" == this.product_type && (this.current.view = "without_model"),
        "man_fieldjacket" == this.product_type && (this.current.view = "without_model"),
        "man_suit2" == this.product_type && (this.current.view = "without_model"),
        "man_smoking" == this.product_type && (this.current.view = "without_model"),
        "man_levita" == this.product_type && (this.current.view = "front"),
        "man_frac" == this.product_type && (this.current.view = "front"),
        "man_chaque" == this.product_type && (this.current.view = "front"),
        "man_coat" == this.product_type && (this.current.view = "without_model"),
        $("#available_window").addClass(this.current.view),
        (this.current.view_detail = "inside"),
        (this.current.neck_open = 0),
        (this.current.inner_sleeve = 0),
        (this.current._show_lining = !1),
        (this.real_product_type = this.product_type),
        ("man_levita" != this.product_type && "man_frac" != this.product_type && "man_chaque" != this.product_type) || (this.real_product_type = "man_ceremonial"),
        this.complex &&
            ((this.multi_fabric_options = this.product_parts),
            "man_suit2" == this.product_type && (this.multi_fabric_options[2] = "man_waistcoat"),
            (this.current.config._active_block = this.multi_fabric_options[0]),
            "man_smoking_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"),
            "man_levita_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"),
            "man_chaque_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"),
            "man_frac_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket")),
        $(".action_column div.price").before('<div class="price original_price"></div>'),
        "defaultFilter=wedding" == window.location.search.substring(1) && "man_waistcoat" == this.product_type && $("#extra li.waistcoat_metal_buttons").hide(),
        window.blackfriday_enabled && ($(".price_bf").addClass("visible_bf"), $(".not_price_bf").hide()),
        this.resize_render_viewport_init();
    var r = {};
    for (var a in this.config) r[a] = this.config[a];
    for (var a in this.extra) r[a] = this.extra[a];
    if (((this.product_config = r), (this.current.fabric.shoes = "1"), (this.current.model = model), (this.current.style = p_style), "man_shirt" == this.product_type)) {
        if (
            (this.current.style || (this.current.style = "business"),
            (this.current.fabric.button_code = e.fabric.man_shirt.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 1),
            (this.current.fabric.hole_code_fabric = e.fabric.man_shirt.hole_code),
            this.current.fabric.hole_code_fabric || (this.current.fabric.hole_code_fabric = 107),
            (this.current.fabric.thread_code_fabric = e.fabric.man_shirt.thread_code),
            this.current.fabric.thread_code_fabric || (this.current.fabric.thread_code_fabric = 107),
            (this.current.fabric.cuff_code = e.fabric.man_shirt.cuff_code),
            this.current.fabric.cuff_code || (this.current.fabric.cuff_code = 1),
            (this.shirt_styles = this.styles),
            "auto" != this.current.style && "business" != this.current.style)
        ) {
            var o = $(".image_render .options_render a.style"),
                n = $("span", o),
                c = this.shirt_styles[this.current.style];
            void 0 !== c &&
                ("auto" != this.current.style && $(".title", o).hide(),
                "auto" != c.view_detail && (this.current.view_detail = c.view_detail),
                "auto" != c.neck_open && (this.current.neck_open = c.neck_open),
                "auto" != c.inner_sleeve && (this.current.inner_sleeve = c.inner_sleeve),
                "auto" != c.icon && n.html(c.icon),
                "auto" != this.current.style && $(".title." + c.title_to_show, o).show());
        }
        (this.current.fabric.pant_code = e.fabric[this.product_type].pant_code), this.current.fabric.pant_code || (this.current.fabric.pant_code = 1);
    } else if ("man_jacket" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_jacket.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_jacket.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_jacket.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_jacket.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.pant_code = e.fabric[this.product_type].pant_code),
            this.current.fabric.pant_code || (this.current.fabric.pant_code = 1),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.pocket_square = "recto"),
            (this.current.quilted_waistcoat = "abierto");
    else if ("man_suit2" == this.product_type || "man_suit3" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_jacket.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_jacket.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_jacket.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_jacket.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"),
            (this.current.fabric.waistcoat_button_code = e.fabric.man_waistcoat.button_code),
            this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 2);
    else if ("man_smoking" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_smoking.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_smoking.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_smoking.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_smoking.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");
    else if ("man_levita" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_ceremonial.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_ceremonial.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_ceremonial.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");
    else if ("man_frac" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_ceremonial.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_ceremonial.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_ceremonial.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");
    else if ("man_chaque" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_ceremonial.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_ceremonial.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_ceremonial.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");
    else if ("man_pants" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_pants.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_pants.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_pants.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_pants.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.pant_code = e.fabric[this.product_type].pant_code),
            this.current.fabric.pant_code || (this.current.fabric.pant_code = 1),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.pocket_square = "recto");
    else if ("man_waistcoat" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_waistcoat.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.waistcoat_button_code = e.fabric.man_waistcoat.button_code),
            this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 2),
            (this.current.fabric.shirt_to_jacket_id = e.fabric.man_waistcoat.shirt_to_jacket_id),
            this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699),
            (this.current.fabric.lining = e.fabric.man_waistcoat.lining_id),
            this.current.fabric.lining || (this.current.fabric.lining = 59),
            (this.current.fabric.label_color = e.fabric.man_waistcoat.label_color),
            this.current.fabric.label_color || (this.current.fabric.label_color = 0),
            (this.current.fabric.pant_code = e.fabric[this.product_type].pant_code),
            this.current.fabric.pant_code || (this.current.fabric.pant_code = 1),
            (this.current.fabric.shoes = e.fabric.shoes),
            this.current.fabric.shoes || (this.current.fabric.shoes = 1),
            (this.current.fabric.shoe_color = e.fabric.shoe_color),
            this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"),
            (this.current.fabric.tie = e.fabric.id_t4l_tie),
            this.current.fabric.tie || (this.current.fabric.tie = 1),
            (this.current.pocket_square = "recto");
    else if ("man_coat" == this.product_type)
        (this.current.fabric.button_code = e.fabric.man_coat.button_code),
            this.current.fabric.button_code || (this.current.fabric.button_code = 2),
            (this.current.fabric.ribbon_color = e.fabric.man_coat.ribbon_color),
            this.current.fabric.ribbon_color || (this.current.fabric.ribbon_color = "mm");
    else if ("man_polo" == this.product_type) {
        var s = this,
            l = [];
        $(".box_opt.logos .box_logos .logo").each(function () {
            var t = $(this).attr("rel"),
                e = $(this).attr("code");
            l[t] = e;
        }),
            (s.logos_code = l);
    }
    if ("man_polo" == this.product_type) {
        var _ = $("#extra .options_list").html(),
            p = $("#extra .box_opts").html();
        $("#config .options_list").append(_), $("#config .box_opts").append(p), $("#extra").remove(), $(".step_separator").last().remove(), $("#header_config .step_inside").addClass("without_extra"), $("#link_extras").remove();
    }
}
function parse_query_string(t, e) {
    if (e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
        return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
    }
    var r,
        a = /\+/g,
        o = /([^&=]+)=?([^&]*)/g,
        n = function (t) {
            return decodeURIComponent(t.replace(a, " "));
        },
        c = t.replace(/^\?/, "");
    for (urlParams = {}; (r = o.exec(c)); ) urlParams[n(r[1])] = n(r[2]);
    return urlParams;
}
function formatMoney(t, e, i, r) {
    (t = t || 0), (e = isNaN((e = Math.abs(e))) ? 2 : e), (i = i || ","), (r = r || ".");
    var a = t < 0 ? "-" : "",
        o = parseInt((t = Math.abs(+t || 0).toFixed(e)), 10) + "",
        n = (n = o.length) > 3 ? n % 3 : 0,
        c = Math.abs(t - o)
            .toFixed(e)
            .slice(2);
    return "00" == c ? a + (n ? o.substr(0, n) + i : "") + o.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + i) : a + (n ? o.substr(0, n) + i : "") + o.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + i) + (e ? r + c : "");
}
function format_price(t, e, i) {
    switch ((i || (i = window.currency), e)) {
        case "small_symbol":
            switch (i.iso) {
                case "GBP":
                    return "<small>" + i.symbol + "</small>" + formatMoney(t);
                case "USD":
                    r = "<small>" + i.symbol + "</small>" + formatMoney(t);
                    return ("/en-ca/" != window.region_url && "/fr-ca/" != window.region_url) || (r += '<small style="font-size: 50%">USD</small>'), r;
                case "AUD":
                    return "<small>AU" + i.symbol + "</small>" + formatMoney(t);
                case "MXN":
                    return "<small>MX" + i.symbol + "</small>" + formatMoney(t);
                case "RUB":
                    return formatMoney(t) + "<small>p</small>";
                case "CHF":
                    return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");
                default:
                    return formatMoney(t, 2, ".", ",") + "<small>" + i.symbol + "</small>";
            }
        case "text":
        default:
            switch (i.iso) {
                case "GBP":
                    return i.symbol + formatMoney(t);
                case "USD":
                    var r = i.symbol + formatMoney(t);
                    return ("/en-ca/" != window.region_url && "/fr-ca/" != window.region_url) || (r += '<small style="font-size: 50%">USD</small>'), r;
                case "AUD":
                    return "AU" + i.symbol + formatMoney(t);
                case "MXN":
                    return "MX" + i.symbol + formatMoney(t);
                case "RUB":
                    return formatMoney(t) + "p";
                case "CHF":
                    return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");
                default:
                    return formatMoney(t) + i.symbol;
            }
    }
}
function str_replace(t, e, i, r) {
    var a = 0,
        o = 0,
        n = "",
        c = "",
        s = 0,
        l = 0,
        _ = [].concat(t),
        p = [].concat(e),
        u = i,
        d = "[object Array]" === Object.prototype.toString.call(p),
        f = "[object Array]" === Object.prototype.toString.call(u);
    for (u = [].concat(u), r && (this.window[r] = 0), a = 0, s = u.length; a < s; a++)
        if ("" !== u[a]) for (o = 0, l = _.length; o < l; o++) (n = u[a] + ""), (c = d ? (void 0 !== p[o] ? p[o] : "") : p[0]), (u[a] = n.split(_[o]).join(c)), r && u[a] !== n && (this.window[r] += (n.length - u[a].length) / _[o].length);
    return f ? u : u[0];
}
function strpos(t, e, i) {
    var r = (t + "").indexOf(e, i || 0);
    return -1 !== r && r;
}
function array_push(t) {
    var e = 0,
        i = "",
        r = arguments,
        a = r.length,
        o = /^\d$/,
        n = 0,
        c = 0,
        s = 0;
    if (t.hasOwnProperty("length")) {
        for (e = 1; e < a; e++) t[t.length] = r[e];
        return t.length;
    }
    for (i in t) t.hasOwnProperty(i) && (++s, -1 !== i.search(o) && (c = (n = parseInt(i, 10)) > c ? n : c));
    for (e = 1; e < a; e++) t[++c] = r[e];
    return s + e - 1;
}
function empty(t) {
    var e,
        i,
        r,
        a = [void 0, null, !1, 0, "", "0"];
    for (i = 0, r = a.length; i < r; i++) if (t === a[i]) return !0;
    if ("object" == typeof t) {
        for (e in t) return !1;
        return !0;
    }
    return !1;
}
function array_merge() {
    var t,
        e = Array.prototype.slice.call(arguments),
        i = e.length,
        r = {},
        a = "",
        o = 0,
        n = 0,
        c = 0,
        s = 0,
        l = Object.prototype.toString,
        _ = !0;
    for (c = 0; c < i; c++)
        if ("[object Array]" !== l.call(e[c])) {
            _ = !1;
            break;
        }
    if (_) {
        for (_ = [], c = 0; c < i; c++) _ = _.concat(e[c]);
        return _;
    }
    for (c = 0, s = 0; c < i; c++)
        if (((t = e[c]), "[object Array]" === l.call(t))) for (n = 0, o = t.length; n < o; n++) r[s++] = t[n];
        else for (a in t) t.hasOwnProperty(a) && (parseInt(a, 10) + "" === a ? (r[s++] = t[a]) : (r[a] = t[a]));
    return r;
}
!(function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? (module.exports = e()) : (t.Blazy = e());
})(this, function () {
    "use strict";
    function t(t) {
        var i = t._util;
        (i.elements = f(t.options)),
            (i.count = i.elements.length),
            i.destroyed &&
                ((i.destroyed = !1),
                t.options.container &&
                    v(t.options.container, function (t) {
                        b(t, "scroll", i.validateT);
                    }),
                b(window, "resize", i.saveViewportOffsetT),
                b(window, "resize", i.validateT),
                b(window, "scroll", i.validateT)),
            e(t);
    }
    function e(t) {
        for (var e = t._util, r = 0; r < e.count; r++) {
            var a = e.elements[r];
            (i(a, t.options) || u(a, t.options.successClass)) && (t.load(a), e.elements.splice(r, 1), e.count--, r--);
        }
        0 === e.count && t.destroy();
    }
    function i(t, e) {
        var i = t.getBoundingClientRect();
        if (e.container && y) {
            var a = t.closest(e.containerClass);
            if (a) {
                var o = a.getBoundingClientRect();
                if (r(o, w)) {
                    var n = o.top - e.offset,
                        c = o.right + e.offset,
                        s = o.bottom + e.offset,
                        l = o.left - e.offset;
                    return r(i, { top: n > w.top ? n : w.top, right: c < w.right ? c : w.right, bottom: s < w.bottom ? s : w.bottom, left: l > w.left ? l : w.left });
                }
                return !1;
            }
        }
        return r(i, w);
    }
    function r(t, e) {
        return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom;
    }
    function a(t, e, i) {
        if (!u(t, i.successClass) && (e || i.loadInvisible || (t.offsetWidth > 0 && t.offsetHeight > 0))) {
            var r = l(t, $) || l(t, i.src);
            if (r) {
                var a = r.split(i.separator),
                    s = a[k && a.length > 1 ? 1 : 0],
                    _ = l(t, i.srcset),
                    f = p(t, "img"),
                    h = t.parentNode,
                    g = h && p(h, "picture");
                if (f || void 0 === t.src) {
                    var w = new Image(),
                        y = function () {
                            i.error && i.error(t, "invalid"), d(t, i.errorClass), m(w, "error", y), m(w, "load", S);
                        },
                        S = function () {
                            f ? g || c(t, s, _) : (t.style.backgroundImage = 'url("' + s + '")'), o(t, i), m(w, "load", S), m(w, "error", y);
                        };
                    g &&
                        ((w = t),
                        v(h.getElementsByTagName("source"), function (t) {
                            n(t, C, i.srcset);
                        })),
                        b(w, "error", y),
                        b(w, "load", S),
                        c(w, s, _);
                } else (t.src = s), o(t, i);
            } else
                p(t, "video")
                    ? (v(t.getElementsByTagName("source"), function (t) {
                          n(t, x, i.src);
                      }),
                      t.load(),
                      o(t, i))
                    : (i.error && i.error(t, "missing"), d(t, i.errorClass));
        }
    }
    function o(t, e) {
        d(t, e.successClass),
            e.success && e.success(t),
            _(t, e.src),
            _(t, e.srcset),
            v(e.breakpoints, function (e) {
                _(t, e.src);
            });
    }
    function n(t, e, i) {
        var r = l(t, i);
        r && (s(t, e, r), _(t, i));
    }
    function c(t, e, i) {
        i && s(t, C, i), (t.src = e);
    }
    function s(t, e, i) {
        t.setAttribute(e, i);
    }
    function l(t, e) {
        return t.getAttribute(e);
    }
    function _(t, e) {
        t.removeAttribute(e);
    }
    function p(t, e) {
        return t.nodeName.toLowerCase() === e;
    }
    function u(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
    }
    function d(t, e) {
        u(t, e) || (t.className += " " + e);
    }
    function f(t) {
        for (var e = [], i = t.root.querySelectorAll(t.selector), r = i.length; r--; e.unshift(i[r]));
        return e;
    }
    function h(t) {
        (w.bottom = (window.innerHeight || document.documentElement.clientHeight) + t), (w.right = (window.innerWidth || document.documentElement.clientWidth) + t);
    }
    function b(t, e, i) {
        t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, i) : t.addEventListener(e, i, { capture: !1, passive: !0 });
    }
    function m(t, e, i) {
        t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, i) : t.removeEventListener(e, i, { capture: !1, passive: !0 });
    }
    function v(t, e) {
        if (t && e) for (var i = t.length, r = 0; r < i && !1 !== e(t[r], r); r++);
    }
    function g(t, e, i) {
        var r = 0;
        return function () {
            var a = +new Date();
            a - r < e || ((r = a), t.apply(i, arguments));
        };
    }
    var $,
        w,
        k,
        y,
        x = "src",
        C = "srcset";
    return function (i) {
        if (!document.querySelectorAll) {
            var r = document.createStyleSheet();
            document.querySelectorAll = function (t, e, i, a, o) {
                for (o = document.all, e = [], i = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; i--; ) {
                    for (r.addRule(t[i], "k:v"), a = o.length; a--; ) o[a].currentStyle.k && e.push(o[a]);
                    r.removeRule(0);
                }
                return e;
            };
        }
        var o = this,
            n = (o._util = {});
        (n.elements = []),
            (n.destroyed = !0),
            (o.options = i || {}),
            (o.options.error = o.options.error || !1),
            (o.options.offset = o.options.offset || 100),
            (o.options.root = o.options.root || document),
            (o.options.success = o.options.success || !1),
            (o.options.selector = o.options.selector || ".b-lazy"),
            (o.options.separator = o.options.separator || "|"),
            (o.options.containerClass = o.options.container),
            (o.options.container = !!o.options.containerClass && document.querySelectorAll(o.options.containerClass)),
            (o.options.errorClass = o.options.errorClass || "b-error"),
            (o.options.breakpoints = o.options.breakpoints || !1),
            (o.options.loadInvisible = o.options.loadInvisible || !1),
            (o.options.successClass = o.options.successClass || "b-loaded"),
            (o.options.validateDelay = o.options.validateDelay || 25),
            (o.options.saveViewportOffsetDelay = o.options.saveViewportOffsetDelay || 50),
            (o.options.srcset = o.options.srcset || "data-srcset"),
            (o.options.src = $ = o.options.src || "data-src"),
            (y = Element.prototype.closest),
            (k = window.devicePixelRatio > 1),
            ((w = {}).top = 0 - o.options.offset),
            (w.left = 0 - o.options.offset),
            (o.revalidate = function () {
                t(o);
            }),
            (o.load = function (t, e) {
                var i = this.options;
                t && void 0 === t.length
                    ? a(t, e, i)
                    : v(t, function (t) {
                          a(t, e, i);
                      });
            }),
            (o.destroy = function () {
                var t = o._util;
                o.options.container &&
                    v(o.options.container, function (e) {
                        m(e, "scroll", t.validateT);
                    }),
                    m(window, "scroll", t.validateT),
                    m(window, "resize", t.validateT),
                    m(window, "resize", t.saveViewportOffsetT),
                    (t.count = 0),
                    (t.elements.length = 0),
                    (t.destroyed = !0);
            }),
            (n.validateT = g(
                function () {
                    e(o);
                },
                o.options.validateDelay,
                o
            )),
            (n.saveViewportOffsetT = g(
                function () {
                    h(o.options.offset);
                },
                o.options.saveViewportOffsetDelay,
                o
            )),
            h(o.options.offset),
            v(o.options.breakpoints, function (t) {
                if (t.width >= window.screen.width) return ($ = t.src), !1;
            }),
            setTimeout(function () {
                t(o);
            });
    };
}),
    (function (t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery);
    })(function (t) {
        function e(e) {
            return (
                !e || void 0 !== e.allowPageScroll || (void 0 === e.swipe && void 0 === e.swipeStatus) || (e.allowPageScroll = l),
                void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
                e || (e = {}),
                (e = t.extend({}, t.fn.swipe.defaults, e)),
                this.each(function () {
                    var r = t(this),
                        a = r.data(j);
                    a || ((a = new i(this, e)), r.data(j, a));
                })
            );
        }
        function i(e, i) {
            function T(e) {
                if (!(lt() || t(e.target).closest(i.excludedElements, Nt).length > 0)) {
                    var r,
                        a = e.originalEvent ? e.originalEvent : e,
                        o = a.touches,
                        n = o ? o[0] : a;
                    return (
                        (Rt = $),
                        o ? (Wt = o.length) : e.preventDefault(),
                        (Et = 0),
                        (Ft = null),
                        (Mt = null),
                        (Ht = 0),
                        (qt = 0),
                        (Ut = 0),
                        (Bt = 1),
                        (Gt = 0),
                        (Vt = ft()),
                        (Dt = mt()),
                        ct(),
                        !o || Wt === i.fingers || i.fingers === v || D() ? (pt(0, n), (Qt = St()), 2 == Wt && (pt(1, o[1]), (qt = Ut = $t(Vt[0].start, Vt[1].start))), (i.swipeStatus || i.pinchStatus) && (r = E(a, Rt))) : (r = !1),
                        !1 === r
                            ? ((Rt = y), E(a, Rt), r)
                            : (i.hold &&
                                  (te = setTimeout(
                                      t.proxy(function () {
                                          Nt.trigger("hold", [a.target]), i.hold && (r = i.hold.call(Nt, a, a.target));
                                      }, this),
                                      i.longTapThreshold
                                  )),
                              _t(!0),
                              null)
                    );
                }
            }
            function z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Rt !== k && Rt !== y && !st()) {
                    var r,
                        a = e.touches,
                        o = ut(a ? a[0] : e);
                    if (
                        ((Jt = St()),
                        a && (Wt = a.length),
                        i.hold && clearTimeout(te),
                        (Rt = w),
                        2 == Wt && (0 == qt ? (pt(1, a[1]), (qt = Ut = $t(Vt[0].start, Vt[1].start))) : (ut(a[1]), (Ut = $t(Vt[0].end, Vt[1].end)), (Mt = kt(Vt[0].end, Vt[1].end))), (Bt = wt(qt, Ut)), (Gt = Math.abs(qt - Ut))),
                        Wt === i.fingers || i.fingers === v || !a || D())
                    ) {
                        if (((Ft = Ct(o.start, o.end)), G(t, Ft), (Et = yt(o.start, o.end)), (Ht = gt()), ht(Ft, Et), (i.swipeStatus || i.pinchStatus) && (r = E(e, Rt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave)) {
                            var n = !0;
                            if (i.triggerOnTouchLeave) {
                                var c = jt(this);
                                n = Tt(o.end, c);
                            }
                            !i.triggerOnTouchEnd && n ? (Rt = L(w)) : i.triggerOnTouchLeave && !n && (Rt = L(k)), (Rt != y && Rt != k) || E(e, Rt);
                        }
                    } else E(e, (Rt = y));
                    !1 === r && E(e, (Rt = y));
                }
            }
            function I(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    r = e.touches;
                return r && r.length
                    ? (nt(), !0)
                    : (st() && (Wt = Yt),
                      (Jt = St()),
                      (Ht = gt()),
                      q() || !H() ? E(e, (Rt = y)) : i.triggerOnTouchEnd || (0 == i.triggerOnTouchEnd && Rt === w) ? (t.preventDefault(), E(e, (Rt = k))) : !i.triggerOnTouchEnd && X() ? F(e, (Rt = k), d) : Rt === w && E(e, (Rt = y)),
                      _t(!1),
                      null);
            }
            function A() {
                (Wt = 0), (Jt = 0), (Qt = 0), (qt = 0), (Ut = 0), (Bt = 1), ct(), _t(!1);
            }
            function O(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && E(e, (Rt = L(k)));
            }
            function P() {
                Nt.unbind(It, T), Nt.unbind(Lt, A), Nt.unbind(At, z), Nt.unbind(Ot, I), Pt && Nt.unbind(Pt, O), _t(!1);
            }
            function L(t) {
                var e = t,
                    r = B(),
                    a = H(),
                    o = q();
                return !r || o ? (e = y) : !a || t != w || (i.triggerOnTouchEnd && !i.triggerOnTouchLeave) ? !a && t == k && i.triggerOnTouchLeave && (e = y) : (e = k), e;
            }
            function E(t, e) {
                var i,
                    r = t.touches;
                return (
                    V() || W() || N() || D()
                        ? ((V() || W()) && (i = F(t, e, p)), (N() || D()) && !1 !== i && (i = F(t, e, u)))
                        : at() && !1 !== i
                        ? (i = F(t, e, f))
                        : ot() && !1 !== i
                        ? (i = F(t, e, h))
                        : rt() && !1 !== i && (i = F(t, e, d)),
                    e === y && A(t),
                    e === k && (r ? r.length || A(t) : A(t)),
                    i
                );
            }
            function F(e, l, _) {
                var b;
                if (_ == p) {
                    if ((Nt.trigger("swipeStatus", [l, Ft || null, Et || 0, Ht || 0, Wt, Vt]), i.swipeStatus && !1 === (b = i.swipeStatus.call(Nt, e, l, Ft || null, Et || 0, Ht || 0, Wt, Vt)))) return !1;
                    if (l == k && R()) {
                        if ((Nt.trigger("swipe", [Ft, Et, Ht, Wt, Vt]), i.swipe && !1 === (b = i.swipe.call(Nt, e, Ft, Et, Ht, Wt, Vt)))) return !1;
                        switch (Ft) {
                            case r:
                                Nt.trigger("swipeLeft", [Ft, Et, Ht, Wt, Vt]), i.swipeLeft && (b = i.swipeLeft.call(Nt, e, Ft, Et, Ht, Wt, Vt));
                                break;
                            case a:
                                Nt.trigger("swipeRight", [Ft, Et, Ht, Wt, Vt]), i.swipeRight && (b = i.swipeRight.call(Nt, e, Ft, Et, Ht, Wt, Vt));
                                break;
                            case o:
                                Nt.trigger("swipeUp", [Ft, Et, Ht, Wt, Vt]), i.swipeUp && (b = i.swipeUp.call(Nt, e, Ft, Et, Ht, Wt, Vt));
                                break;
                            case n:
                                Nt.trigger("swipeDown", [Ft, Et, Ht, Wt, Vt]), i.swipeDown && (b = i.swipeDown.call(Nt, e, Ft, Et, Ht, Wt, Vt));
                        }
                    }
                }
                if (_ == u) {
                    if ((Nt.trigger("pinchStatus", [l, Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt]), i.pinchStatus && !1 === (b = i.pinchStatus.call(Nt, e, l, Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt)))) return !1;
                    if (l == k && M())
                        switch (Mt) {
                            case c:
                                Nt.trigger("pinchIn", [Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt]), i.pinchIn && (b = i.pinchIn.call(Nt, e, Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt));
                                break;
                            case s:
                                Nt.trigger("pinchOut", [Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt]), i.pinchOut && (b = i.pinchOut.call(Nt, e, Mt || null, Gt || 0, Ht || 0, Wt, Bt, Vt));
                        }
                }
                return (
                    _ == d
                        ? (l !== y && l !== k) ||
                          (clearTimeout(Kt),
                          clearTimeout(te),
                          Y() && !tt()
                              ? ((Zt = St()),
                                (Kt = setTimeout(
                                    t.proxy(function () {
                                        (Zt = null), Nt.trigger("tap", [e.target]), i.tap && (b = i.tap.call(Nt, e, e.target));
                                    }, this),
                                    i.doubleTapThreshold
                                )))
                              : ((Zt = null), Nt.trigger("tap", [e.target]), i.tap && (b = i.tap.call(Nt, e, e.target))))
                        : _ == f
                        ? (l !== y && l !== k) || (clearTimeout(Kt), (Zt = null), Nt.trigger("doubletap", [e.target]), i.doubleTap && (b = i.doubleTap.call(Nt, e, e.target)))
                        : _ == h && ((l !== y && l !== k) || (clearTimeout(Kt), (Zt = null), Nt.trigger("longtap", [e.target]), i.longTap && (b = i.longTap.call(Nt, e, e.target)))),
                    b
                );
            }
            function H() {
                var t = !0;
                return null !== i.threshold && (t = Et >= i.threshold), t;
            }
            function q() {
                var t = !1;
                return null !== i.cancelThreshold && null !== Ft && (t = bt(Ft) - Et >= i.cancelThreshold), t;
            }
            function U() {
                return null === i.pinchThreshold || Gt >= i.pinchThreshold;
            }
            function B() {
                return !i.maxTimeThreshold || !(Ht >= i.maxTimeThreshold);
            }
            function G(t, e) {
                if (!1 !== i.preventDefaultEvents)
                    if (i.allowPageScroll === l) t.preventDefault();
                    else {
                        var c = i.allowPageScroll === _;
                        switch (e) {
                            case r:
                                ((i.swipeLeft && c) || (!c && i.allowPageScroll != b)) && t.preventDefault();
                                break;
                            case a:
                                ((i.swipeRight && c) || (!c && i.allowPageScroll != b)) && t.preventDefault();
                                break;
                            case o:
                                ((i.swipeUp && c) || (!c && i.allowPageScroll != m)) && t.preventDefault();
                                break;
                            case n:
                                ((i.swipeDown && c) || (!c && i.allowPageScroll != m)) && t.preventDefault();
                        }
                    }
            }
            function M() {
                var t = Q(),
                    e = J(),
                    i = U();
                return t && e && i;
            }
            function D() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut);
            }
            function N() {
                return !(!M() || !D());
            }
            function R() {
                var t = B(),
                    e = H(),
                    i = Q(),
                    r = J();
                return !q() && r && i && e && t;
            }
            function W() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown);
            }
            function V() {
                return !(!R() || !W());
            }
            function Q() {
                return Wt === i.fingers || i.fingers === v || !x;
            }
            function J() {
                return 0 !== Vt[0].end.x;
            }
            function X() {
                return !!i.tap;
            }
            function Y() {
                return !!i.doubleTap;
            }
            function Z() {
                return !!i.longTap;
            }
            function K() {
                if (null == Zt) return !1;
                var t = St();
                return Y() && t - Zt <= i.doubleTapThreshold;
            }
            function tt() {
                return K();
            }
            function et() {
                return (1 === Wt || !x) && (isNaN(Et) || Et < i.threshold);
            }
            function it() {
                return Ht > i.longTapThreshold && Et < g;
            }
            function rt() {
                return !(!et() || !X());
            }
            function at() {
                return !(!K() || !Y());
            }
            function ot() {
                return !(!it() || !Z());
            }
            function nt() {
                (Xt = St()), (Yt = event.touches.length + 1);
            }
            function ct() {
                (Xt = 0), (Yt = 0);
            }
            function st() {
                var t = !1;
                return Xt && St() - Xt <= i.fingerReleaseThreshold && (t = !0), t;
            }
            function lt() {
                return !(!0 !== Nt.data(j + "_intouch"));
            }
            function _t(t) {
                !0 === t ? (Nt.bind(At, z), Nt.bind(Ot, I), Pt && Nt.bind(Pt, O)) : (Nt.unbind(At, z, !1), Nt.unbind(Ot, I, !1), Pt && Nt.unbind(Pt, O, !1)), Nt.data(j + "_intouch", !0 === t);
            }
            function pt(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return (Vt[t].identifier = i), (Vt[t].start.x = Vt[t].end.x = e.pageX || e.clientX), (Vt[t].start.y = Vt[t].end.y = e.pageY || e.clientY), Vt[t];
            }
            function ut(t) {
                var e = dt(void 0 !== t.identifier ? t.identifier : 0);
                return (e.end.x = t.pageX || t.clientX), (e.end.y = t.pageY || t.clientY), e;
            }
            function dt(t) {
                for (var e = 0; e < Vt.length; e++) if (Vt[e].identifier == t) return Vt[e];
            }
            function ft() {
                for (var t = [], e = 0; e <= 5; e++) t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
                return t;
            }
            function ht(t, e) {
                (e = Math.max(e, bt(t))), (Dt[t].distance = e);
            }
            function bt(t) {
                if (Dt[t]) return Dt[t].distance;
            }
            function mt() {
                var t = {};
                return (t[r] = vt(r)), (t[a] = vt(a)), (t[o] = vt(o)), (t[n] = vt(n)), t;
            }
            function vt(t) {
                return { direction: t, distance: 0 };
            }
            function gt() {
                return Jt - Qt;
            }
            function $t(t, e) {
                var i = Math.abs(t.x - e.x),
                    r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + r * r));
            }
            function wt(t, e) {
                return ((e / t) * 1).toFixed(2);
            }
            function kt() {
                return Bt < 1 ? s : c;
            }
            function yt(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)));
            }
            function xt(t, e) {
                var i = t.x - e.x,
                    r = e.y - t.y,
                    a = Math.atan2(r, i),
                    o = Math.round((180 * a) / Math.PI);
                return o < 0 && (o = 360 - Math.abs(o)), o;
            }
            function Ct(t, e) {
                var i = xt(t, e);
                return i <= 45 && i >= 0 ? r : i <= 360 && i >= 315 ? r : i >= 135 && i <= 225 ? a : i > 45 && i < 135 ? n : o;
            }
            function St() {
                return new Date().getTime();
            }
            function jt(e) {
                var i = (e = t(e)).offset();
                return { left: i.left, right: i.left + e.outerWidth(), top: i.top, bottom: i.top + e.outerHeight() };
            }
            function Tt(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
            }
            var zt = x || S || !i.fallbackToMouseEvents,
                It = zt ? (S ? (C ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
                At = zt ? (S ? (C ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
                Ot = zt ? (S ? (C ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
                Pt = zt ? null : "mouseleave",
                Lt = S ? (C ? "MSPointerCancel" : "pointercancel") : "touchcancel",
                Et = 0,
                Ft = null,
                Ht = 0,
                qt = 0,
                Ut = 0,
                Bt = 1,
                Gt = 0,
                Mt = 0,
                Dt = null,
                Nt = t(e),
                Rt = "start",
                Wt = 0,
                Vt = null,
                Qt = 0,
                Jt = 0,
                Xt = 0,
                Yt = 0,
                Zt = 0,
                Kt = null,
                te = null;
            try {
                Nt.bind(It, T), Nt.bind(Lt, A);
            } catch (e) {
                t.error("events not supported " + It + "," + Lt + " on jQuery.swipe");
            }
            (this.enable = function () {
                return Nt.bind(It, T), Nt.bind(Lt, A), Nt;
            }),
                (this.disable = function () {
                    return P(), Nt;
                }),
                (this.destroy = function () {
                    P(), Nt.data(j, null), (Nt = null);
                }),
                (this.option = function (e, r) {
                    if (void 0 !== i[e]) {
                        if (void 0 === r) return i[e];
                        i[e] = r;
                    } else t.error("Option " + e + " does not exist on jQuery.swipe.options");
                    return null;
                });
        }
        var r = "left",
            a = "right",
            o = "up",
            n = "down",
            c = "in",
            s = "out",
            l = "none",
            _ = "auto",
            p = "swipe",
            u = "pinch",
            d = "tap",
            f = "doubletap",
            h = "longtap",
            b = "horizontal",
            m = "vertical",
            v = "all",
            g = 10,
            $ = "start",
            w = "move",
            k = "end",
            y = "cancel",
            x = "ontouchstart" in window,
            C = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            S = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            j = "TouchSwipe",
            T = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0,
            };
        (t.fn.swipe = function (i) {
            var r = t(this),
                a = r.data(j);
            if (a && "string" == typeof i) {
                if (a[i]) return a[i].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipe");
            } else if (!(a || ("object" != typeof i && i))) return e.apply(this, arguments);
            return r;
        }),
            (t.fn.swipe.version = "1.6.9"),
            (t.fn.swipe.defaults = T),
            (t.fn.swipe.phases = { PHASE_START: $, PHASE_MOVE: w, PHASE_END: k, PHASE_CANCEL: y }),
            (t.fn.swipe.directions = { LEFT: r, RIGHT: a, UP: o, DOWN: n, IN: c, OUT: s }),
            (t.fn.swipe.pageScroll = { NONE: l, HORIZONTAL: b, VERTICAL: m, AUTO: _ }),
            (t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: v });
    }),
    (Garment.prototype.getCurrentLayers = function () {
        return this.current;
    }),
    (Garment.prototype.parseImages = function (t, e, i) {
        (layers = this.getLayers()), (layers = this.parseLayers(layers, e, i)), (final_images = []);
        for (key in t) {
            var r = t[key];
            array_push(final_images, [layers[r.layer].src + r.src, r.zIndex, r.class, r.render]);
        }
        return final_images;
    }),
    (Garment.prototype.renderDraw = function (t, e, i, r) {
        var a = this;
        t || (t = "STD"),
            r || (r = !1),
            (this.current.size = t),
            "man_shirt" == a.product_type &&
                ((this.current.config.shirt_cuffs = this.current.config.shirt_cuffs.toString()),
                (this.current.config.shirt_neck_no_interfacing = this.current.config.shirt_neck_no_interfacing.toString()),
                (this.current.config.shirt_chest_pocket_type = this.current.config.shirt_chest_pocket_type.toString())),
            "man_suit2" == a.product_type && "without_model" == a.current.view && "man_pants" == this.current.config._active_block && (this.current.config._active_block = "man_jacket"),
            "blouse_cuffs" == a.last_change || "blouse_cuff" == a.last_change ? ((this.current.inner_strip_desactive = !0), (a.last_change = "")) : (this.current.inner_strip_desactive = !1);
        var o = this.renderGetImages(),
            n = $(".loading"),
            c = a.render,
            s = null;
        if (("BIG" == t && ((c = a.render_zoom), (n = $(".image_render_full .loading"))), webp_support))
            for (var l in o) {
                var _ = o[l][0].replace("png", "webp");
                o[l][0] = _;
            }
        c.find("img").addClass("delete"), e != i && c.find("img.delete").remove(), "favourite_product" === r && ((c = $("#favourite_product_popup .image").first()), (s = $("#favourite_product_popup .loading").first()));
        var p = [];
        for (var u in o) (h = c.find("img[src$='" + o[u][0] + "']")).length ? (h.attr("class", ""), o[u][2] && h.addClass(o[u][2])) : p.push(u);
        if (p.length) {
            n.addClass("active");
            var d = 0;
            for (var u in p) {
                var f = o[p[u]][3];
                0 != f && (f += "/");
                var h = $('<img crossorigin="anonymous" onerror = "" src="' + o[p[u]][0] + '" alt="" render = ' + f + ">")
                    .on("load", function () {
                        ++d == p.length && (s && s.removeClass("active"), n.removeClass("active"), c.addClass("active"), c.find("img").show(), c.find("img.delete").remove(), $(".loading_personalize").hide());
                    })
                    .hide()
                    .appendTo(c)
                    .css("zIndex", o[p[u]][1])
                    .attr("class", "")
                    .each(function () {})
                    .on("error", function () {
                        var t = $(this).attr("render"),
                            e = $(this);
                        e.hide();
                        var i = a.current.fabric.shirt_to_jacket_id;
                        void 0 === i && (i = 699),
                            t == "/" + region + "/services/render_shirt/render_shirt_to_jacket/" &&
                                $.ajax({
                                    url: t + i + "/STD/" + a.current.view,
                                    async: !1,
                                    type: "get",
                                    success: function (t) {
                                        if ("error" != t) {
                                            var i = t;
                                            e.attr("src", i + "?ok=true"), e.show();
                                        }
                                    },
                                }),
                            ++d == p.length && (s && s.removeClass("active"), c.addClass("active"), n.removeClass("active"), c.find("img").show(), c.find("img.delete").remove(), $(".loading_personalize").hide());
                    });
                o[p[u]][2] && h.addClass(o[p[u]][2]);
            }
        } else s && s.removeClass("active"), c.find("img.delete").remove();
    }),
    (Garment.prototype.parseLayers = function (t, e, i) {
        i || (i = "STD");
        var r = !1,
            a = !1;
        if (void 0 !== e.extras.button_holes_threads && e.extras.button_holes_threads["holes-color"]) {
            r = !0;
            var o = e.extras.button_holes_threads["holes-color"];
        }
        if (void 0 !== e.extras.button_holes_threads && e.extras.button_holes_threads["threads-color"]) {
            a = !0;
            var n = e.extras.button_holes_threads["threads-color"];
        }
        var c = !1,
            s = !1,
            l = !1;
        if (void 0 !== e.extras.logos) {
            c = !0;
            var s = this.logos_code[e.extras.logos.logo],
                l = e.extras.logos.color_custom;
        }
        void 0 !== e.extras.contrasts &&
            "1" == e.extras.contrasts.contrast &&
            (!0,
            void 0 === e.extras.contrasts.contrasts_flap || empty(e.extras.contrasts.contrasts_flap) || (e.fabric.extra_satin_jacket_lapel = e.extras.contrasts.contrasts_flap),
            void 0 === e.extras.contrasts.contrasts_pockets || empty(e.extras.contrasts.contrasts_pockets) || (e.fabric.extra_satin_jacket_pockets = e.extras.contrasts.contrasts_pockets),
            void 0 === e.extras.contrasts.contrasts_buttons ||
                empty(e.extras.contrasts.contrasts_buttons) ||
                ((e.fabric.extra_satin_jacket_buttons = e.extras.contrasts.contrasts_buttons), (e.fabric.extra_satin_pants_buttons = e.extras.contrasts.contrasts_buttons)),
            void 0 === e.extras.contrasts.contrasts_pants || empty(e.extras.contrasts.contrasts_pants) || (e.fabric.extra_satin_pants_ribbon = e.extras.contrasts.contrasts_pants)),
            (view = e.view),
            "without_model" == e.view && (view = "front");
        for (k in t) {
            t[k];
            for (key in e.fabric) {
                var _ = e.fabric[key];
                ("button_code" == key && "man_shirt" == this.product_type) ||
                    (("pants_button_code" != key || ("man_suit2" != this.product_type && "man_suit3" != this.product_type)) &&
                        !1 !== strpos(key, "_") &&
                        "lining_id" != key &&
                        ("botones_jacket_id" == key && (_ > 100 || !_) && (_ = 1), "pants_button_code" == key && (_ > 100 || !_) && (_ = 1), (t[k].src = str_replace("#" + key + "#", _, t[k].src))));
            }
            switch (
                (t[k].src.indexOf("new_man/pants") > 0 && "without_model" == e.view && (view = "folded"),
                t[k].src.indexOf("new_man/jacket") > 0 && "without_model" == e.view && (view = "front"),
                (t[k].src = str_replace("#view#", view, t[k].src)),
                (t[k].src = str_replace("#size#", i, t[k].src)),
                (t[k].src = str_replace("#model#", 1, t[k].src)),
                this.product_type)
            ) {
                case "man_shirt":
                    (t[k].src = str_replace("#neck_fabric_id#", this.current.extras.neck_fabric.fabric_id, t[k].src)),
                        (t[k].src = str_replace("#cuffs_fabric_id#", e.extras.cuffs_fabric.fabric_id, t[k].src)),
                        r && (t[k].src = str_replace("#hole_code_extra#", o, t[k].src)),
                        a && (t[k].src = str_replace("#thread_code_extra#", n, t[k].src)),
                        void 0 !== this.current.extras.winter_lining && "personalizado" == this.current.extras.winter_lining.contrast && (t[k].src = str_replace("#winter_lining_id#", this.current.extras.winter_lining.color, t[k].src)),
                        void 0 !== this.current.extras.buttons_color && "personalizado" == this.current.extras.buttons_color.contrast
                            ? (t[k].src = str_replace("#button_code#", this.current.extras.buttons_color.type, t[k].src))
                            : (t[k].src = str_replace("#button_code#", this.current.fabric.button_code, t[k].src)),
                        (t[k].src = str_replace("#patches_fabric_id#", e.extras.patches.fabric_id, t[k].src));
                    break;
                case "man_polo":
                    r && (t[k].src = str_replace("#hole_code_extra#", o, t[k].src)),
                        a && (t[k].src = str_replace("#thread_code_extra#", n, t[k].src)),
                        c && ((t[k].src = str_replace("#logo_code#", s, t[k].src)), (t[k].src = str_replace("#logo_color#", l, t[k].src)));
                    break;
                case "man_jacket":
                case "man_fieldjacket":
                case "man_suit":
                case "man_suit2":
                case "man_smoking":
                case "man_levita":
                case "man_frac":
                case "man_chaque":
                    if (
                        ((t[k].src = str_replace("#shirt_to_jacket_id#", this.current.fabric.shirt_to_jacket_id, t[k].src)),
                        (t[k].src = str_replace("#man_jacket#", this.current.fabric.man_smoking, t[k].src)),
                        void 0 !== this.current.extras.metal_buttons && "personalizado" == this.current.extras.metal_buttons.contrast
                            ? (t[k].src = str_replace("#botones_jacket_id#", this.current.extras.metal_buttons.type, t[k].src))
                            : void 0 !== this.current.extras.buttons_color && "personalizado" == this.current.extras.buttons_color.contrast
                            ? (t[k].src = str_replace("#botones_jacket_id#", this.current.extras.buttons_color.type, t[k].src))
                            : ((0 == this.current.fabric._button_code || this.current.fabric._button_code > 100 || void 0 === this.current.fabric._button_code) && (this.current.fabric._button_code = 1),
                              (t[k].src = str_replace("#botones_jacket_id#", this.current.fabric._button_code, t[k].src))),
                        void 0 !== this.current.extras.buttons_color && "personalizado" == this.current.extras.buttons_color.contrast && this.current.extras.buttons_color.type < 50
                            ? (t[k].src = str_replace("#pants_button_code#", this.current.extras.buttons_color.type, t[k].src))
                            : void 0 !== this.current.fabric.pants_button_code
                            ? (t[k].src = str_replace("#pants_button_code#", this.current.fabric.pants_button_code, t[k].src))
                            : (t[k].src = str_replace("#pants_button_code#", this.current.fabric._button_code, t[k].src)),
                        void 0 !== this.current.extras.metal_buttons)
                    ) {
                        if (
                            void 0 !== this.current.extras.button_holes_threads &&
                            void 0 !== this.current.extras.button_holes_threads["threads-color"] &&
                            this.current.extras.button_holes_threads["threads-color"] &&
                            "personalizado" != this.current.extras.metal_buttons.contrast
                        ) {
                            h = this.current.extras.button_holes_threads["threads-color"];
                            t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
                        }
                    } else if (void 0 !== this.current.extras.button_holes_threads && void 0 !== this.current.extras.button_holes_threads["threads-color"]) {
                        h = this.current.extras.button_holes_threads["threads-color"];
                        t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
                    }
                    if (void 0 !== this.current.extras.button_holes_threads)
                        if (void 0 !== this.current.extras.button_holes_threads["holes-color"]) {
                            if (this.current.extras.button_holes_threads["holes-color"]) {
                                b = this.current.extras.button_holes_threads["holes-color"];
                                t[k].src = str_replace("#ojales_jacket_id#", b, t[k].src);
                            }
                        } else {
                            var p = "dark",
                                u = ["white", "beige", "green", "pink", "orange", "yellow", "purple", "light"],
                                d = [1083, 1444, 1477, 1479, 1283, 1081, 1082, 1062, 1457],
                                f = $('#fabric a[rel="' + this.current.fabric.man_jacket + '"]').attr("tone");
                            jQuery.inArray(f, u) >= 0 && (p = "light"), jQuery.inArray(this.current.fabric.man_jacket, d) >= 0 && (p = "light"), (t[k].src = str_replace("#ojales_jacket_id#", p, t[k].src));
                        }
                    if (
                        (("personalizado" != this.current.extras.lining.contrast &&
                            "padded" != this.current.extras.lining.contrast &&
                            "unlined" != this.current.extras.lining.contrast &&
                            "detachable_waistcoat" != this.current.extras.lining.contrast) ||
                        !this.current.extras.lining.lining_id
                            ? "unlined" != this.current.extras.lining.contrast || this.current.extras.lining.lining_id
                                ? this.current.fabric.lining_id && (t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src))
                                : (t[k].src = str_replace("#lining_id#", this.current.fabric.unlined_lining, t[k].src))
                            : (t[k].src = str_replace("#lining_id#", this.current.extras.lining.lining_id, t[k].src)),
                        (t[k].src = str_replace("#lining_id#", 152, t[k].src)),
                        this.current.fabric.unlined_lining && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)),
                        this.current.fabric.lining_id && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.lining_id, t[k].src)),
                        (t[k].src = str_replace("#lining_default_id#", 152, t[k].src)),
                        void 0 !== this.current.extras.waistcoat_lining && "personalizado" == this.current.extras.waistcoat_lining.contrast
                            ? (t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src))
                            : (t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src)),
                        void 0 !== this.current.extras.waistcoat_lining_back && "personalizado" == this.current.extras.waistcoat_lining_back.contrast
                            ? (t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src))
                            : (t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src)),
                        void 0 !== this.current.extras.neck_lining && this.current.extras.neck_lining.color && (t[k].src = str_replace("#cuello_id#", this.current.extras.neck_lining.color, t[k].src)),
                        void 0 !== this.current.extras.patches && this.current.extras.patches.patches && (t[k].src = str_replace("#coderas_id#", this.current.extras.patches.patches, t[k].src)),
                        void 0 !== this.current.extras.waistcoat_metal_buttons)
                    ) {
                        if (
                            void 0 !== this.current.extras.waistcoat_button_holes_threads &&
                            void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] &&
                            this.current.extras.waistcoat_button_holes_threads["threads-color"]
                        ) {
                            h = this.current.extras.waistcoat_button_holes_threads["threads-color"];
                            t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
                        }
                    } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
                        h = this.current.extras.waistcoat_button_holes_threads["threads-color"];
                        t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
                    }
                    if (void 0 !== this.current.extras.waistcoat_metal_buttons) {
                        if (
                            void 0 !== this.current.extras.waistcoat_button_holes_threads &&
                            void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] &&
                            this.current.extras.waistcoat_button_holes_threads["holes-color"]
                        ) {
                            b = this.current.extras.waistcoat_button_holes_threads["holes-color"];
                            t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
                        }
                    } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
                        b = this.current.extras.waistcoat_button_holes_threads["holes-color"];
                        t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
                    }
                    void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast
                        ? (t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src))
                        : void 0 !== this.current.extras.buttons_color && "personalizado" == this.current.extras.buttons_color.contrast && this.current.extras.buttons_color.type < 50
                        ? (t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.buttons_color.type, t[k].src))
                        : (t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric.waistcoat_button_code, t[k].src)),
                        void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)),
                        "man_jacket" == this.product_type &&
                            void 0 !== this.current.extras.jacket_lapel_satin &&
                            this.current.extras.jacket_lapel_satin.color &&
                            (t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.jacket_lapel_satin.color, t[k].src)),
                        ("man_smoking" != this.product_type && "man_chaque" != this.product_type && "man_levita" != this.product_type && "man_frac" != this.product_type) ||
                            (void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_buttons
                                ? (t[k].src = str_replace("#satin_jacket_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src))
                                : (t[k].src = str_replace("#satin_jacket_buttons#", this.current.satin_jacket_buttons, t[k].src)),
                            void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_flap
                                ? (t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.contrasts.contrasts_flap, t[k].src))
                                : (t[k].src = str_replace("#satin_jacket_lapel#", this.current.satin_jacket_lapel, t[k].src)),
                            void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_pockets
                                ? (t[k].src = str_replace("#satin_jacket_pockets#", this.current.extras.contrasts.contrasts_pockets, t[k].src))
                                : (t[k].src = str_replace("#satin_jacket_pockets#", this.current.satin_jacket_pockets, t[k].src)),
                            void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_buttons
                                ? (t[k].src = str_replace("#satin_pants_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src))
                                : (t[k].src = str_replace("#satin_pants_buttons#", this.current.satin_pants_buttons, t[k].src)),
                            void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_pants
                                ? (t[k].src = str_replace("#satin_pants_ribbon#", this.current.extras.contrasts.contrasts_pants, t[k].src))
                                : (t[k].src = str_replace("#satin_pants_ribbon#", this.current.satin_pants_ribbon, t[k].src)));
                    break;
                case "man_waistcoat":
                    if (
                        ("personalizado" == this.current.extras.waistcoat_lining.contrast
                            ? (t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src))
                            : (t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src)),
                        "personalizado" == this.current.extras.waistcoat_lining_back.contrast
                            ? (t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src))
                            : (t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src)),
                        void 0 !== this.current.extras.waistcoat_button_holes_threads)
                    ) {
                        if (void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] && this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
                            var h = this.current.extras.waistcoat_button_holes_threads["threads-color"];
                            t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
                        }
                        if (void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] && this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
                            var b = this.current.extras.waistcoat_button_holes_threads["holes-color"];
                            t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
                        }
                    }
                    void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast
                        ? (t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src))
                        : (t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric._button_code, t[k].src));
                    break;
                case "man_coat":
                    void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)),
                        void 0 !== this.current.extras.contrast_collar && this.current.extras.contrast_collar.color && (t[k].src = str_replace("#contrast_collar_id#", this.current.extras.contrast_collar.color, t[k].src)),
                        "custom" == this.current.extras.coat_lining.contrast ||
                        "padded" == this.current.extras.coat_lining.contrast ||
                        "unlined" == this.current.extras.coat_lining.contrast ||
                        "detachable_waistcoat" == this.current.extras.coat_lining.contrast
                            ? ((t[k].src = str_replace("#lining_id#", this.current.extras.coat_lining.lining_id, t[k].src)), (t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)))
                            : this.current.fabric.lining_id
                            ? (t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src))
                            : (t[k].src = str_replace("#lining_id#", 195, t[k].src)),
                        (t[k].src = str_replace("#zipper_color#", this.current.fabric.zipper_color, t[k].src)),
                        (t[k].src = str_replace("#ribbon_color#", this.current.fabric.ribbon_color, t[k].src)),
                        (t[k].src = str_replace("#button_code#", this.current.fabric.button_code, t[k].src)),
                        (t[k].src = str_replace("#id_t4l_suit_rel#", this.current.fabric.id_t4l_suit_rel, t[k].src)),
                        (t[k].src = str_replace("#tie#", this.current.fabric.tie, t[k].src));
            }
            (t[k].src = str_replace("#pant_code#", this.current.fabric.pant_code, t[k].src)),
                (t[k].src = str_replace("#shoes#", this.current.fabric.shoe_color, t[k].src)),
                (t[k].src = str_replace("#tie#", this.current.fabric.tie, t[k].src)),
                (t[k].src = t[k].src.replace(/^\//, window.cdn_host));
        }
        return t;
    }),
    (Garment.prototype.renderInitials = function () {
        var t = this,
            e = t.product_type.replace("woman_", "");
        (e += "_"),
            "woman_suitpants" == t.product_type || "woman_suitskirt" == t.product_type
                ? (e = "jacket_")
                : "man_fieldjacket" == t.product_type ||
                  "man_polo" == t.product_type ||
                  "man_shirt" == t.product_type ||
                  "man_jacket" == t.product_type ||
                  "man_suit" == t.product_type ||
                  "man_suit2" == t.product_type ||
                  "man_smoking" == t.product_type ||
                  "man_chaque" == t.product_type ||
                  "man_frac" == t.product_type ||
                  "man_levita" == t.product_type
                ? (e = "")
                : "man_waistcoat" == t.product_type
                ? (e = "waistcoat_")
                : "man_coat" == t.product_type && (e = "coat_"),
            (e += "initials");
        var i = t.current.extras[e],
            r = i.text,
            a = i.color_custom,
            o = i.pos,
            n = i.type;
        if (!(r && a && n) || ("front" != t.current.view && "without_model" != t.current.view && "folded" != t.current.view) || ("cuff" == o && 1 == t.current.inner_sleeve)) $("#initials_svg").empty(), $(".viewport #initials_svg").empty();
        else {
            var c = { bold_script: "Bold Script", script: "Script", times_roman: "Times Roman", block: "Block", calligraphy: "Calligraphy" };
            if (void 0 === c[n]) return !1;
            (n = c[n]),
                20 == a
                    ? (a = "2361ad")
                    : 21 == a
                    ? (a = "ffcf10")
                    : 22 == a
                    ? (a = "a48239")
                    : 23 == a
                    ? (a = "e63b85")
                    : 26 == a
                    ? (a = "dd2535")
                    : 27 == a
                    ? (a = "ffffff")
                    : 28 == a
                    ? (a = "34a547")
                    : 29 == a
                    ? (a = "000000")
                    : 24 == a
                    ? (a = "b3b3b3")
                    : 35 == a
                    ? (a = "ff7912")
                    : 36 == a
                    ? (a = "731422")
                    : 37 == a
                    ? (a = "5d1970")
                    : 38 == a
                    ? (a = "b8f2f2")
                    : 39 == a
                    ? (a = "3d2a26")
                    : 40 == a && (a = "4477cf"),
                9 == a
                    ? (a = "ffcf10")
                    : 11 == a
                    ? (a = "2361ad")
                    : 12 == a
                    ? (a = "ffffff")
                    : 13 == a
                    ? (a = "a48239")
                    : 14 == a
                    ? (a = "741422")
                    : 15 == a
                    ? (a = "b3b3b3")
                    : 16 == a
                    ? (a = "3d2a26")
                    : 17 == a
                    ? (a = "000000")
                    : 18 == a
                    ? (a = "e63b85")
                    : 19 == a
                    ? (a = "34a547")
                    : 25 == a
                    ? (a = "eb1d1d")
                    : 31 == a
                    ? (a = "ff7912")
                    : 32 == a
                    ? (a = "5f1970")
                    : 33 == a
                    ? (a = "b8f2f2")
                    : 34 == a && (a = "4477cf");
            var s = "<div id='initials_3d'></div>";
            "man_polo" == t.product_type ? (t.initials_image ? $("#initials_svg").append(s) : $(".viewport #initials_svg").append(s)) : $("#initials_svg").append(s);
            function l(t, e) {
                for (var i in e) t.setAttribute(i, e[i]);
            }
            var _ = $("#initials_svg").empty().get(0);
            "man_polo" == t.product_type && (_ = t.initials_image ? $("#initials_svg").empty().get(0) : $(".viewport #initials_svg").empty().get(0)), _.setAttribute("width", $(".image_render .layers").width());
            var p = document.createElementNS("http://www.w3.org/2000/svg", "text");
            p.textContent = r;
            var u = "7";
            ("man_jacket" != t.product_type &&
                "man_suit" != t.product_type &&
                "man_suit2" != t.product_type &&
                "man_smoking" != t.product_type &&
                "man_chaque" != t.product_type &&
                "man_frac" != t.product_type &&
                "man_levita" != t.product_type) ||
                (u = "14");
            var d = 1e3;
            switch ((o || (o = "interior"), "man_polo" == t.product_type && t.initials_image && (o = "interior_" + $("#initials .box_position_initial label.checked input").val()), o)) {
                case "high":
                    switch (t.current.view) {
                        case "front":
                            (d = ie_navigator ? 45 : 165), (x_size = 253), "man_polo" == t.product_type && ((d = 165), (x_size = 250)), l(p, { x: x_size, y: d, transform: "rotate(3,170,155)" }), (u = "7");
                            break;
                        case "without_model":
                            l(p, { x: 253, y: (d = ie_navigator ? 0 : 30), transform: "rotate(3,170,155)" }), (u = "7");
                            break;
                        case "back":
                            break;
                        case "side":
                            l(p, { x: 263, y: 145, transform: "rotate(5,0,0)", "letter-spacing": "-2px" }), (u = "8");
                            break;
                        case "folded":
                            l(p, { x: 310, y: 350, transform: "rotate(1,170,155)" }), (u = "12");
                    }
                    break;
                case "medium":
                    switch (t.current.view) {
                        case "front":
                            (d = ie_navigator ? 153 : 253), l(p, { x: 253, y: 253, transform: "rotate(2,170,155)" });
                            break;
                        case "without_model":
                            l(p, { x: 253, y: 130, transform: "rotate(2,170,155)" });
                            break;
                        case "back":
                            break;
                        case "side":
                            l(p, { x: 273, y: 233, transform: "rotate(5,0,0)", "letter-spacing": "-3px" }), (u = "8");
                    }
                    break;
                case "low":
                    switch (t.current.view) {
                        case "front":
                            (d = ie_navigator ? 235 : 335), (x_size = 256), "man_polo" == t.product_type && ((d = 395), (x_size = 282)), l(p, { x: x_size, y: d, transform: "rotate(2,170,155)" });
                            break;
                        case "without_model":
                            l(p, { x: 400, y: 270, transform: "rotate(2,170,155)" });
                    }
                    break;
                case "cuff":
                    switch (t.current.view) {
                        case "front":
                            "man_shirt" == t.product_type
                                ? ((d = ie_navigator ? 300 : 40), l(p, { x: 370, y: 415, transform: "rotate(8,180,145)" }), (u = "5"))
                                : ((d = ie_navigator ? 300 : 40), l(p, { x: 355, y: 405, transform: "rotate(7,180,145)" }));
                            break;
                        case "without_model":
                            l(p, { x: 340, y: 280, transform: "rotate(7,180,145)" });
                    }
                    break;
                case "interior":
                    switch (t.current.view) {
                        case "front":
                        case "without_model":
                            "man_coat" == t.product_type ? l(p, { x: 195, y: 128, transform: "rotate(355,150,70)" }) : l(p, { x: 145, y: 145, transform: "rotate(345,160,80)" });
                    }
                    break;
                case "interior_high":
                case "interior_low":
                case "interior_cuff":
                    l(p, { x: 180, y: 120 }), (u = "20");
            }
            l(p, { "font-family": n, "font-size": u + "px", fill: "#" + a }), _.appendChild(p);
        }
    }),
    (Garment.prototype.relationsApply = function (t, e) {
        function i(e, i) {
            if (("initials" != e.field_name && "logos" != e.field_name) || "man_polo" != e.block) o = $(e.css_selector, r.container);
            else var o = $(e.css_selector, r.container).parent();
            if (!o.length) return !0;
            switch (e.rel_type) {
                case "disable":
                    if (i) {
                        var n = !1;
                        for (var c in r._relations_active)
                            if (c != t)
                                for (var s in r._relations_active[c])
                                    if ("disable" == r._relations_active[c][s].rel_type) {
                                        var l = r._relations_active[c][s];
                                        if (l.block != e.block) continue;
                                        if (l.field_name != e.field_name) continue;
                                        if (l.field_values && e.field_values);
                                        else if (l.field_values);
                                        else if (!e.field_values) {
                                            n = !0;
                                            break;
                                        }
                                    }
                        if (n) break;
                    }
                    var _ = i ? "show" : "hide";
                    if ("coat_model_combined" == e.field_name && coat_generic_mode) return;
                    if ("fabric" == e.step) !i && $.inArray(e.block, a) < 0 && a.push(e.block);
                    else if ("extra" == e.step)
                        if (e.field_values) for (var p in e.field_values) "show" == _ ? o.removeClass("not_show").trigger("cssClassChanged") : o.addClass("not_show").trigger("cssClassChanged");
                        else
                            o[_](),
                                "show" == _
                                    ? o.removeClass("not_show").trigger("cssClassChanged")
                                    : (o.addClass("not_show").trigger("cssClassChanged"),
                                      void 0 !== r.current.extras[e.field_name] &&
                                          void 0 !== r.current.extras[e.field_name].contrast &&
                                          (("custom" != r.current.extras[e.field_name].contrast && "personalizado" != r.current.extras[e.field_name].contrast) ||
                                              (r.extraSetPrice(e.field_name, 0), $(".box_opt." + e.field_name + " .option_trigger.zero_value").click(), r.renderDraw())));
                    else if (e.field_values) {
                        if (o.hasClass("box_opt") || o.hasClass("subbox_opt")) {
                            var u = !1;
                            for (var p in e.field_values)
                                if ("checkbox" == e.field_values[p])
                                    $(".checkbox_option", o)[_](), "show" == _ ? $(".checkbox_option", o).removeClass("not_show").trigger("cssClassChanged") : $(".checkbox_option", o).addClass("not_show").trigger("cssClassChanged");
                                else {
                                    if ("show" == _ && "ulster" == e.field_values[p] && void 0 !== r.current.config.coat_model && "overcoat" == r.current.config.coat_model) continue;
                                    $('.option_trigger[rel="' + e.field_values[p] + '"]', o)[_](),
                                        "show" == _
                                            ? $('.option_trigger[rel="' + e.field_values[p] + '"]', o)
                                                  .removeClass("not_show")
                                                  .trigger("cssClassChanged")
                                            : $('.option_trigger[rel="' + e.field_values[p] + '"]', o)
                                                  .addClass("not_show")
                                                  .trigger("cssClassChanged"),
                                        "hide" == _
                                            ? $('.option_trigger[rel="' + e.field_values[p] + '"]', o)
                                                  .addClass("no_active")
                                                  .trigger("cssClassChanged")
                                            : $('.option_trigger[rel="' + e.field_values[p] + '"]', o)
                                                  .removeClass("no_active")
                                                  .trigger("cssClassChanged"),
                                        $('.option_trigger[rel="' + e.field_values[p] + '"]', o).hasClass("active") && (u = !0);
                                }
                            u && $(".option_trigger:not(.no_active)", o).first().click();
                        } else
                            for (var p in e.field_values)
                                if (
                                    ((d = o.find('input[value="' + e.field_values[p] + '"]')).closest(".option")[_](),
                                    "show" == _ ? d.closest(".option").removeClass("not_show").trigger("cssClassChanged") : d.closest(".option").addClass("not_show").trigger("cssClassChanged"),
                                    "show" == _ ? (d.closest(".option").addClass("visible"), d.closest(".option").removeClass("oculto")) : (d.closest(".option").addClass("oculto"), d.closest(".option").removeClass("visible")),
                                    d.is(":active"))
                                ) {
                                    f = d.attr("name");
                                    r.mobile_enabled
                                        ? $("#" + f + "_opt label")
                                              .not(".oculto")
                                              .first()
                                              .children("input")
                                              .click()
                                        : $("div." + f + " label:visible:first")
                                              .children("input")
                                              .click();
                                }
                    } else
                        o[_](),
                            "show" == _ ? o.removeClass("not_show").trigger("cssClassChanged") : o.addClass("not_show").trigger("cssClassChanged"),
                            i && (o.find("input:checked").length || o.find("input:eq(0)").prop("selected", 1).click());
                    break;
                case "set":
                    if ((!id_cart_product && !id_shop_order_detail && !id_feed_product) || r.actived_coat_seters) {
                        if (("extra" == e.step && o.click(), !e.field_values)) break;
                        if (o.hasClass("box_opt") || o.hasClass("subbox_opt")) $('.option_trigger[rel="' + e.field_values[0] + '"]', o).click();
                        else {
                            var d = o.find('input[value="' + e.field_values[p] + '"]'),
                                f = d.attr("name");
                            r.mobile_enabled
                                ? $("#" + f + "_opt label")
                                      .not(".oculto")
                                      .first()
                                      .children("input")
                                      .click()
                                : $("div." + f + " label:visible:first")
                                      .children("input")
                                      .click();
                        }
                    }
            }
        }
        var r = this,
            a = [];
        if (void 0 !== this._relations_active[t]) for (var o in this._relations_active[t]) i(this._relations_active[t][o], !0);
        this._relations_active[t] = [];
        for (var o in e) {
            var n = this.relationParse(e[o]);
            i(n), this._relations_active[t].push(n);
        }
    }),
    (Garment.prototype.relationParse = function (t) {
        var e,
            i,
            r = { rel_type: !1, step: !1, block: !1, field_name: !1, field_values: !1, css_selector: !1 };
        return (
            (e = t.split("#")),
            (r.rel_type = e[0]),
            (e = e[1].split(":")),
            (i = "#" + e[0]),
            (r.step = e[0]),
            e.length > 1 && (r.block = e[1]),
            e.length > 2 &&
                ("shirt_neck_options" == e[2]
                    ? (i = "")
                    : "shirt_neck_no_interfacing" == e[2]
                    ? (i = '.box_opt div[name="' + e[2] + '"]')
                    : "ballena_removible" == e[2]
                    ? (i = '.box_opt div[name="' + e[2] + '"]')
                    : "satin_flap[contrasts]" == e[2]
                    ? (i = ".box_opt.contrasts")
                    : "type_flap" == e[2]
                    ? (i = ".box_opt #type_flap")
                    : "buttons_color" == e[2]
                    ? (i = ".box_opt.buttons_color")
                    : "metal_buttons" == e[2]
                    ? (i = ".box_opt.metal_buttons")
                    : "jacket_lapel_type_combinated" == e[2] && this.container.hasClass("minimal")
                    ? (i = "#jacket_lapel_type_combinated")
                    : "extra" == r.step
                    ? (i = ".container_options ul.options_list li." + e[2])
                    : ((i = ".container_options ul.options_list li." + e[2]), $(i, this.container).length || (i = ".box_opt .subbox_opt#" + e[2])),
                (r.field_name = e[2])),
            e.length > 3 &&
                ((i =
                    "buttonthreads_color" == e[3]
                        ? " .box_opt#" + e[2] + " div." + e[3]
                        : "extra" == r.step && "initials" == e[2]
                        ? " .box_opt#" + e[2] + ' .box_position_initial input[value="' + e[3].replace("[", "").replace("]", "") + '"]'
                        : "extra" == r.step && "logos" == e[2]
                        ? " .box_opt#" + e[2] + ' .box_position_logos input[value="' + e[3].replace("[", "").replace("]", "") + '"]'
                        : "extra" == r.step
                        ? " .box_opt#" + e[2] + ' .option_trigger[rel="' + e[3] + '"]'
                        : "#" + e[2]),
                (r.field_values = e[3].replace("[", "").replace("]", "").split(","))),
            (r.css_selector = i),
            r
        );
    });
var fabricPreview = new (function () {
    (this.preview_fabric = !1),
        (this.hidden = !0),
        (this.samples_window = !1),
        (String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }),
        (this.init = function (t) {
            var e = this;
            this.preview_fabric || (this.preview_fabric = $(".preview_fabric")),
                (this.active_info_bars = t),
                this.active_info_bars
                    ? ($(".info", this.preview_fabric).addClass("openable"),
                      this.preview_fabric.on("click", ".samples", function (t) {
                          var i = $("a", this).attr("href"),
                              r = i;
                          if ((-1 == i.indexOf(window.location.hostname) && (r = "http://" + window.location.hostname + i), !e.samples_window || e.samples_window.closed)) return (e.samples_window = window.open(r, "_blank")), !1;
                          var a = i.match(/\?(.*)$/);
                          if (a) {
                              for (var o = {}, n = a[1].split("&"), c = 0; c < n.length; c++) {
                                  var s = n[c].split("=");
                                  o[decodeURIComponent(s[0])] = decodeURIComponent(s[1] || "");
                              }
                              e.samples_window.postMessage(o, r), e.samples_window.focus();
                          }
                          return !1;
                      }),
                      this.preview_fabric.on("click", ".more_info", function (t) {
                          return (
                              !!$(".info", this.preview_fabric).hasClass("openable") &&
                              ($(".info", e.preview_fabric).hasClass("open") ? ($(".info", e.preview_fabric).removeClass("open"), (e.hidden = !0)) : ($(".info", e.preview_fabric).addClass("open"), (e.hidden = !1)), !1)
                          );
                      }),
                      this.preview_fabric.on("click", ".hide_info", function (t) {
                          return $(".info", e.preview_fabric).removeClass("open"), (e.hidden = !0), !1;
                      }),
                      this.preview_fabric.on("click", ".info", function (t) {
                          return (
                              !!$(".info", this.preview_fabric).hasClass("openable") &&
                              ($(".info", e.preview_fabric).hasClass("open") ? ($(".info", e.preview_fabric).removeClass("open"), (e.hidden = !0)) : ($(".info", e.preview_fabric).addClass("open"), (e.hidden = !1)), !1)
                          );
                      }))
                    : ($(".info", this.preview_fabric).removeClass("openable"), (e.hidden = !0)),
                $(window).width() > 1440 && ($(".info", e.preview_fabric).addClass("open"), (e.hidden = !1));
        }),
        (this.close = function () {
            this.preview_fabric.hide(), (this.hidden = !0);
        }),
        (this.show = function (t, e, i, r, a, o) {
            this.hidden = !0;
            var n = "",
                c = "";
            "lining" == e
                ? ((n = "default"), (c = "big"))
                : (("pants" != (n = (n = (n = i).replace("woman_", "")).replace("man_", "")) &&
                      "skirt" != n &&
                      "jacket" != n &&
                      "suit3" != n &&
                      "suit2" != n &&
                      "waistcoat" != n &&
                      "smoking" != n &&
                      "suitpants" != n &&
                      "suitskirt" != n &&
                      "levita" != n &&
                      "chaque" != n &&
                      "frac" != n) ||
                      (n = "suit"),
                  (c = "huge"));
            var s = t.id_fabric,
                l = window.cdn_host,
                _ = e;
            if (("extra" == _ && (_ = "fabric"), void 0 !== s)) {
                var p = l + "dimg/" + _ + "/" + n + "/" + s + "_" + c + ".jpg";
                $(".image img", this.preview_fabric).attr("src", p), $(".image img", this.preview_fabric).attr("onerror", "this.src='" + p + "';");
            }
            var u = $("a.link_samples").attr("product_type");
            if (void 0 !== u) {
                var d = u;
                "man_suit" == d && (d = "man_suit2"), $("a.link_samples", this.preview_fabric).attr("href", $("a.link_samples").attr("href").split("?")[0] + "?fabric_type=" + d + "&ref=" + s);
            }
            $(".header .new").hide(),
                $(".header .oeko").hide(),
                $(".header .iron").hide(),
                $(".header .iron2").hide(),
                $(".fabric_options_description .category_group").removeClass("active"),
                $(".fabric_options .category_group .more").css("visibility", "visible"),
                $(".category_group", this.preview_fabric).removeClass("grey"),
                $(".season, .thread_style, .brightness,.stretchy_text, .material, .tone,.details .weight, .thread_count, .opacity, .waterproof, .samples, .samples, .fabric_options, .super_shiny, .stretchy", this.preview_fabric).hide(),
                $(".info", this.preview_fabric).removeClass("openable"),
                $(".tencel", this.preview_fabric).removeClass("active");
            var f = t.title;
            if (
                ($(".details .title", this.preview_fabric).html(f),
                $(".info[class*='fabric_type_']", this.preview_fabric).removeClass(function (t, e) {
                    return (e.match(/(^|\s)fabric_type_\S+/g) || []).join(" ");
                }),
                $(".info", this.preview_fabric).addClass("fabric_type_" + n),
                "fabric" == e)
            ) {
                $(".info", this.preview_fabric).addClass("openable"),
                    void 0 !== t.samples && t.samples > 0 && $(".samples", this.preview_fabric).show(),
                    $(".fabric_options", this.preview_fabric).show(),
                    "1" == t.new && $(".header .new").show();
                var h = t.composition;
                "linen" == h && (h = "100linen");
                for (var b, m = /(\d+)([a-z]+)/g, v = [], g = !1; (b = m.exec(h)); ) v.push(b[1] + "% " + (void 0 === r[b[2]] ? b[2] : r[b[2]]));
                v.length ? (g = v.join(" &amp; ")) : void 0 !== r[h] && (g = r[h]),
                    g &&
                        $(".header .composition", this.preview_fabric)
                            .html(" - " + g)
                            .show();
                var w = r[t.season];
                w && $(".details .season", this.preview_fabric).html(w.capitalize()).show();
                var k = t.thread_style;
                k &&
                    $(".details .thread_style", this.preview_fabric)
                        .html(" - " + k.capitalize())
                        .show();
                var y = r[(J = t.brightness)];
                ("midshining" != J && "shining" != J) ||
                    $(".details .brightness", this.preview_fabric)
                        .html(" - " + y.capitalize())
                        .show(),
                    ("midshining" != t.brightness && "shining" != t.brightness) || $(".details .super_shiny", this.preview_fabric).show(),
                    (void 0 !== (Y = r[t.subtone]) && "" != Y && null != Y) || (Y = r[t.tone]),
                    Y &&
                        $(".details .tone", this.preview_fabric)
                            .html(" - " + Y.capitalize())
                            .show();
                var x = t.fabric_weight;
                x > 0 &&
                    (void 0 === o || ("en-uk" != o && "en-us" != o) ? (x += " gr/m2") : ((x = Math.round(0.02949 * x * 100) / 100), (x += " oz/yd<sup>2</sup>")),
                    $(".details .weight", this.preview_fabric)
                        .html(" - " + x)
                        .show());
                var C = t.thread_count;
                C > 0 &&
                    $(".details .thread_count", this.preview_fabric)
                        .html(" - Super " + C.capitalize() + "s")
                        .show();
                var S = r["opacity_" + t.opacity],
                    j = t.opacity;
                S &&
                    "full" != j &&
                    $(".details .opacity", this.preview_fabric)
                        .html(" - " + S.capitalize())
                        .show();
                K = "";
                t.price > 0
                    ? ((K = "(+" + (K = format_price(t.price, "small_symbol", window.currency_json)) + ")"), $(".category_group.category .price", this.preview_fabric).html(K))
                    : $(".category_group.category .price_box", this.preview_fabric).html("");
                Z = t.category_group;
                $(".fabric_options .category_group").removeClass("active"),
                    $(".fabric_options_description .category_group").removeClass("active"),
                    "premium" == Z ? $(".fabric_options .category_group.premium").addClass("active") : "limited" == Z && $(".fabric_options .category_group.limited").addClass("active");
                var T = t.tags;
                T && (T = T.split(","));
                var z = !1,
                    I = !1,
                    A = !1,
                    O = !1;
                for (var P in T) "oeko" == T[P] && (z = !0), "easy" == T[P] && (I = !0), "wrinkle" == T[P] && (A = !0), "waterproof" == T[P] && (O = "waterproof"), "waterresistant" == T[P] && (O = "waterresistant");
                if (
                    (1 == z && ($(".fabric_options .category_group.oeko").addClass("active"), $(".header .oeko").show()),
                    1 == I && ($(".fabric_options .category_group.easy").addClass("active"), $(".header .iron").show()),
                    1 == A && ($(".fabric_options .category_group.wrinkle").addClass("active"), $(".header .iron2").show()),
                    O)
                ) {
                    var L = r[O];
                    $(".details .waterproof", this.preview_fabric)
                        .html(" - " + L.capitalize())
                        .show();
                }
                if (t.stretchy > 0) {
                    var E = r.stretchy;
                    $(".details .stretchy_text", this.preview_fabric)
                        .html(" - " + E.capitalize())
                        .show(),
                        $(".details .stretchy", this.preview_fabric).show();
                }
                if ("man_shoe" == i && t.simple_composition_original) {
                    var F = r[t.simple_composition_original];
                    $(".fabric .info .simple_composition_title", this.preview_fabric).html(F).show();
                    var H = a[t.simple_composition_original + "_detail"];
                    $(".fabric .info .simple_composition_short_description", this.preview_fabric).html(H).show();
                    var q = a[t.simple_composition_original + "_info"];
                    $(".fabric .info .simple_composition_description", this.preview_fabric).html(q).show();
                }
                g = !1;
                "100% merino wool" == (g = r[h]) && $(".fabric_options .category_group.wool").addClass("active");
                "1" == t.shirt_yarn && $(".fabric_options .category_group.2ply").addClass("active");
                "thick" == t.thickness && $(".fabric_options .category_group.thickness").addClass("active");
                var U = t.bars.excelence,
                    B = $(".bar.excelence");
                $(".subar", B).removeClass("active");
                for (Q = 1; Q <= U; Q++) $(".subar.bar_" + Q, B).addClass("active");
                "man_coat" == i || "woman_coat" == i ? B.parent().hide() : B.parent().show();
                var G = t.bars.hot,
                    M = $(".bar.warmth");
                $(".subar", M).removeClass("active");
                for (Q = 1; Q <= G; Q++) $(".subar.bar_" + Q, M).addClass("active");
                var D = t.bars.weight,
                    N = $(".bar.weight");
                $(".subar", N).removeClass("active");
                for (Q = 1; Q <= D; Q++) $(".subar.bar_" + Q, N).addClass("active");
                if (($(".bar.weight .subar").html(" "), t.fabric_weight > 0)) {
                    x = t.fabric_weight;
                    var R = Q - 1;
                    void 0 === o || ("en-uk" != o && "en-us" != o) ? (x += " gr/m2") : ((x = Math.round(0.02949 * x * 100) / 100), (x += " oz/yd2")), $(".bar.weight .bar_" + R).html("<span>" + x + "</span>");
                }
                var W = t.bars.fineza,
                    V = $(".bar.fineza");
                $(".subar", V).removeClass("active");
                for (var Q = 1; Q <= W; Q++) $(".subar.bar_" + Q, V).addClass("active");
                ("tencel" != t.simple_composition && "Tencel" != t.simple_composition) || $(".tencel", this.preview_fabric).addClass("active");
            } else if ("lining" == e || "extra" == e) {
                if (($(".info", this.preview_fabric).removeClass("openable").removeClass("open"), $(".lining_list").hasClass("unlined_mode"))) {
                    t.unlined = "1";
                }
                if ($(".lining_list").hasClass("waistcoat_lining_back")) {
                    t.chaleco = "1";
                }
                var J = t.brightness;
                (y = r[t.brightness]) && $(".details .brightness", this.preview_fabric).html(y.capitalize()).show();
                var X = r[t.material];
                X &&
                    ("woman_trenchcoat" != this.product_type && "man_trenchcoat" != this.product_type && J
                        ? $(".details .material", this.preview_fabric)
                              .html(" - " + X.capitalize() + " - ")
                              .show()
                        : $(".details .material", this.preview_fabric).html(X.capitalize()).show());
                var Y = r[t.tone];
                Y && $(".details .tone", this.preview_fabric).html(Y.capitalize()).show();
                var Z = t.category_group;
                $(".fabric_options .category_group").removeClass("active"),
                    ("special" != Z && "premium" != Z) || ((Z = "limited"), $(".fabric_options").show(), $(".fabric_options .category_group." + Z).addClass("active")),
                    "1" == t.unlined && (t.price = t.price_unlined),
                    "1" == t.chaleco && (t.price = $("#waistcoat_lining_back").attr("data-price"));
                var K = "";
                t.price > 0
                    ? ((K = "(+" + (K = format_price(t.price, "small_symbol", window.currency_json)) + ")"), $(".category_group.category .price", this.preview_fabric).html(K))
                    : $(".category_group.category .price_box", this.preview_fabric).html(""),
                    $(".details .composition").hide();
            }
            this.preview_fabric.show();
        });
})();
(Garment.prototype.fabricSelect = function (t, e, i) {
    $(".favourite").removeClass("hide"), (this.lastSharedUrl = null), void 0 === i && (i = !0);
    var r = this;
    $("#fabric .fabric_list .fabric_box").removeClass("checked"), e.addClass("checked");
    var a = $("span", e).attr("rel"),
        o = $("span", e).attr("category"),
        n = $("span", e).attr("bc"),
        c = $("span", e).attr("zc"),
        s = $("span", e).attr("rc"),
        l = $("span", e).attr("hc"),
        _ = $("span", e).attr("tc"),
        p = $("span", e).attr("cc"),
        u = $("span", e).attr("pc"),
        d = $("span", e).attr("si"),
        f = $("span", e).attr("li"),
        h = $("span", e).attr("uli"),
        b = $("span", e).attr("lco"),
        m = $("span", e).attr("soc"),
        v = $("span", e).attr("thread_style"),
        g = fabric_options_i18n[v],
        w = ($("span", e).attr("br"), fabric_options_i18n[$("span", e).attr("bri")], $("span", e).attr("idt")),
        k = $("span", e).attr("idrs"),
        y = $("span", e).attr("simple_composition"),
        x = fabric_options_i18n[$("span", e).attr("sci")],
        C = $("span", e).attr("sco"),
        S = ($("span", e).attr("texture"), $("span", e).attr("category_group")),
        j = fabric_options_i18n[$("span", e).attr("cgi")],
        T = $("span", e).attr("vdet"),
        z = $("span", e).attr("nop"),
        I = $("span", e).attr("idl_pad"),
        A = $("span", e).attr("idl_det");
    if (r.multi_fabric_active) {
        var O = $(".action_column .fabric_group." + r.multi_fabric_active),
            P = x;
        "jacquard" == v && (P = g), $(".simple_composition .name", O).html(P);
        L = $("span.fabric", e).attr("name");
        $(".ref span", O).html(L);
        "basic" == S ? "?" : "premium" == S ? "&" : "limited" == S && "%", "basic" == S ? $(".category_group .name", O).hide() : $(".category_group .name", O).html(j).show();
    } else {
        var L = $("span.fabric", e).attr("name");
        $(".action_column div.ref span").html(L);
        P = x;
        "jacquard" == v && (P = g), $(".action_column .simple_composition .name").html(P);
        "basic" == S ? "?" : "premium" == S ? "&" : "limited" == S && "%", "basic" == S ? $(".action_column .category_group .name").hide() : $(".action_column .category_group .name").html(j).show();
    }
    var E = $("span", e).attr("ddl");
    if (
        ("1" == E
            ? ($(".extra_linings").addClass("disable_dark_linings"),
              $(".box_opt.lining").addClass("disable_dark_linings"),
              $("li.neck_lining").addClass("dark_fabric_mode"),
              void 0 !== r.current.extras.neck_lining && "undefined" != r.current.extras.neck_lining.color && $(".box_opt.neck_lining .option_trigger.zero_value").click())
            : r.multi_fabric_active && "man_pants" != r.multi_fabric_active
            ? ($(".extra_linings").removeClass("disable_dark_linings"), $(".box_opt.lining").removeClass("disable_dark_linings"), $("li.neck_lining").removeClass("dark_fabric_mode"))
            : r.multi_fabric_active || ($(".extra_linings").removeClass("disable_dark_linings"), $(".box_opt.lining").removeClass("disable_dark_linings"), $("li.neck_lining").removeClass("dark_fabric_mode")),
        "man_jacket" == r.product_type &&
            ("summer" == $("span", e).attr("season") || "linen" == y || "linen-blends" == y
                ? ($("#quilted_waistcoat .option_trigger.zero_value").click(), $("#extra .box_opt.quilted_waistcoat").hide(), $("#extra li.quilted_waistcoat").hide())
                : ($("#extra .box_opt.quilted_waistcoat").show(), $("#extra li.quilted_waistcoat").show())),
        r.has_extra_lining)
    ) {
        var F = $('input[name="' + r.has_extra_lining + '[contrast]"]').val(),
            H = $('input[name="' + r.has_extra_lining + '[lining_id]"]').val();
        if (
            "undefined" != H &&
            "1" == E &&
            $(".extra_linings .lining_" + H)
                .parent()
                .hasClass("dark")
        ) {
            r.id_box_opt_fabric = r.has_extra_lining;
            var e = $('#extras .box_opt[id="' + r.has_extra_lining + '"]');
            $("." + r.has_extra_lining + ' .option_trigger[rel="' + F + '"]').click(), $(".extra_linings .lining_box").not(".dark").first().click();
        }
        "linen" == (x = $("span", e).attr("simple_composition"))
            ? ($('.option_trigger[rel="padded"]').hide(), $("#extra .options_list .patches").hide())
            : ($('.option_trigger[rel="padded"]').show(), $("#extra .options_list .patches").show());
    }
    if (
        "woman_suitpants" == r.product_type ||
        "woman_suitskirt" == r.product_type ||
        "man_suit" == r.product_type ||
        "man_suit2" == r.product_type ||
        "man_suit3" == r.product_type ||
        "man_smoking" == r.product_type ||
        "man_levita" == r.product_type ||
        "man_chaque" == r.product_type ||
        "man_frac" == r.product_type
    )
        if (r.multi_fabric_active) {
            var q = r.multi_fabric_active;
            $('input[name="fabric[' + q + ']"]', t).val(a), (r.current.fabric[q] = a);
        } else
            $('input[name="fabric[' + r.multi_fabric_options[0] + ']"]', t).val(a),
                $('input[name="fabric[' + r.multi_fabric_options[1] + ']"]', t).val(a),
                $('input[name="fabric[' + r.multi_fabric_options[2] + ']"]', t).val(a),
                (r.current.fabric[r.multi_fabric_options[0]] = a),
                (r.current.fabric[r.multi_fabric_options[1]] = a),
                (r.current.fabric[r.multi_fabric_options[2]] = a),
                (r.current.fabric.button_code = n),
                (r.current.fabric._button_code = n),
                (r.current.fabric.waistcoat_button_code = n),
                (r.current.fabric.pants_button_code = n),
                (r.current.fabric.zipper_color = c),
                (r.current.fabric.ribbon_color = s);
    else
        $('input[name="fabric[' + r.product_type + ']"]', t).val(a),
            (r.current.fabric[r.product_type] = a),
            (r.current.fabric.button_code = n),
            (r.current.fabric._button_code = n),
            (r.current.fabric.waistcoat_button_code = n),
            (r.current.fabric.pants_button_code = n),
            (r.current.fabric.zipper_color = c),
            (r.current.fabric.ribbon_color = s),
            (r.current.fabric.id_t4l_lining_padded = I),
            (r.current.fabric.id_t4l_lining_detachable = A);
    for (var U in r.fabric)
        if (!r.multi_fabric_active || U == r.multi_fabric_active) {
            if ("man_suit2" == r.product_type || "man_suit3" == r.product_type || "man_smoking" == r.product_type || "man_levita" == r.product_type || "man_chaque" == r.product_type || "man_frac" == r.product_type)
                r.updateFabricPrices(U, o, !1, e);
            else {
                r.price_detail["fabric_" + U] = 0;
                for (var B in r.fabric[U].price) void 0 !== o && void 0 !== r.fabric[U].price[B][o] && (r.price_detail["fabric_" + U] = r.fabric[U].price[B][o]);
            }
            G = $("span", e).attr("dsc");
            if ("man_suit3" == r.real_product_type) G = $("span", e).attr("dsc_suit3");
            if ("man_ceremonial3" == r.real_product_type) var G = $("span", e).attr("dsc_ceremonial3");
            G && !r.multi_fabric_active ? (r.price_detail.fabric_discount = G) : (r.price_detail.fabric_discount = 0),
                (!r.multi_fabric_active || (r.multi_fabric_active && "man_pants" != r.multi_fabric_active && "man_waistcoat" != r.multi_fabric_active)) && ((r.bf_dsc = $("span", e).attr("bf_dsc")), r.bf_dsc || (r.bf_dsc = 0));
        }
    if (
        ("man_shirt" == r.product_type || "man_polo" == r.product_type
            ? ((r.current.fabric.hole_code_fabric = l),
              r.current.fabric.hole_code_fabric || (r.current.fabric.hole_code_fabric = 107),
              (r.current.fabric.thread_code_fabric = _),
              r.current.fabric.thread_code_fabric || (r.current.fabric.thread_code_fabric = 107),
              (r.current.fabric.cuff_code = p),
              r.current.fabric.cuff_code || (r.current.fabric.cuff_code = 1),
              (r.current.fabric.pant_code = u),
              r.current.fabric.pant_code || (r.current.fabric.pant_code = 1),
              (r.current.fabric.shoe_color = m),
              r.current.fabric.shoe_color || (r.current.fabric.shoe_color = 1),
              r.shirt_style_click || ((r.current.neck_open = z), r.current.neck_open || (r.current.neck_open = 0), (r.current.view_detail = T), r.current.view_detail || (r.current.view_detail = "inside")))
            : "man_fieldjacket" == r.product_type ||
              "man_jacket" == r.product_type ||
              "man_suit" == r.product_type ||
              "man_suit2" == r.product_type ||
              "man_smoking" == r.product_type ||
              "man_levita" == r.product_type ||
              "man_chaque" == r.product_type ||
              "man_frac" == r.product_type
            ? r.multi_fabric_active
                ? ("man_jacket" == r.multi_fabric_active &&
                      ((r.current.fabric.button_code = n),
                      (r.current.fabric._button_code = n),
                      (r.current.fabric.shirt_to_jacket_id = d),
                      r.current.fabric.shirt_to_jacket_id || (r.current.fabric.shirt_to_jacket_id = 699),
                      (r.current.fabric.pant_code = u),
                      r.current.fabric.pant_code || (r.current.fabric.pant_code = 1),
                      (r.current.fabric.lining_id = f),
                      r.current.fabric.lining_id || (r.current.fabric.lining_id = 59),
                      (r.current.fabric.unlined_lining = h),
                      r.current.fabric.unlined_lining || (r.current.fabric.unlined_lining = 59),
                      (r.current.fabric.label_color = b),
                      r.current.fabric.label_color || (r.current.fabric.label_color = 0),
                      (r.current.fabric.shoe_color = m),
                      r.current.fabric.shoe_color || (r.current.fabric.shoe_color = 1),
                      (r.current.fabric.tie = w),
                      r.current.fabric.tie || (r.current.fabric.tie = 1),
                      ("man_smoking" != r.product_type && "man_levita" != r.product_type && "man_chaque" != r.product_type && "man_frac" != r.product_type) ||
                          ((r.current.satin_jacket_buttons = C),
                          (r.current.satin_jacket_buttons && "0" != C) || (r.current.satin_jacket_buttons = 1),
                          (r.current.satin_jacket_lapel = C),
                          (r.current.satin_jacket_lapel && "0" != C) || (r.current.satin_jacket_lapel = 1),
                          (r.current.satin_jacket_pockets = C),
                          (r.current.satin_jacket_pockets && "0" != C) || (r.current.satin_jacket_pockets = 1),
                          (r.current.satin_pants_buttons = C),
                          (r.current.satin_pants_buttons && "0" != C) || (r.current.satin_pants_buttons = 1),
                          (r.current.satin_pants_ribbon = C),
                          (r.current.satin_pants_ribbon && "0" != C) || (r.current.satin_pants_ribbon = 1))),
                  "man_waistcoat" == r.multi_fabric_active && ((r.current.fabric.waistcoat_button_code = n), (r.current.fabric.waistcoat_lining_id = f), r.current.fabric.waistcoat_lining_id || (r.current.fabric.waistcoat_lining_id = 59)),
                  "man_pants" == r.multi_fabric_active && (r.current.fabric.pants_button_code = n))
                : ((r.current.fabric.button_code = n),
                  (r.current.fabric._button_code = n),
                  (r.current.fabric.waistcoat_button_code = n),
                  (r.current.fabric.pants_button_code = n),
                  (r.current.fabric.shirt_to_jacket_id = d),
                  r.current.fabric.shirt_to_jacket_id || (r.current.fabric.shirt_to_jacket_id = 699),
                  (r.current.fabric.pant_code = u),
                  r.current.fabric.pant_code || (r.current.fabric.pant_code = 1),
                  (r.current.fabric.lining_id = f),
                  r.current.fabric.lining_id || (r.current.fabric.lining_id = 59),
                  (r.current.fabric.waistcoat_lining_id = f),
                  r.current.fabric.waistcoat_lining_id || (r.current.fabric.waistcoat_lining_id = 59),
                  (r.current.fabric.unlined_lining = h),
                  r.current.fabric.unlined_lining || (r.current.fabric.unlined_lining = 59),
                  (r.current.fabric.label_color = b),
                  r.current.fabric.label_color || (r.current.fabric.label_color = 0),
                  (r.current.fabric.shoe_color = m),
                  r.current.fabric.shoe_color || (r.current.fabric.shoe_color = 1),
                  (r.current.fabric.tie = w),
                  r.current.fabric.tie || (r.current.fabric.tie = 1),
                  ("man_smoking" != r.product_type && "man_levita" != r.product_type && "man_chaque" != r.product_type && "man_frac" != r.product_type) ||
                      ((r.current.satin_jacket_buttons = C),
                      (r.current.satin_jacket_buttons && "0" != C) || (r.current.satin_jacket_buttons = 1),
                      (r.current.satin_jacket_lapel = C),
                      (r.current.satin_jacket_lapel && "0" != C) || (r.current.satin_jacket_lapel = 1),
                      (r.current.satin_jacket_pockets = C),
                      (r.current.satin_jacket_pockets && "0" != C) || (r.current.satin_jacket_pockets = 1),
                      (r.current.satin_pants_buttons = C),
                      (r.current.satin_pants_buttons && "0" != C) || (r.current.satin_pants_buttons = 1),
                      (r.current.satin_pants_ribbon = C),
                      (r.current.satin_pants_ribbon && "0" != C) || (r.current.satin_pants_ribbon = 1)))
            : "man_pants" == r.product_type
            ? ((r.current.fabric.shirt_to_jacket_id = d),
              r.current.fabric.shirt_to_jacket_id || (r.current.fabric.shirt_to_jacket_id = 699),
              (r.current.fabric.shoe_color = m),
              r.current.fabric.shoe_color || (r.current.fabric.shoe_color = 1),
              (r.current.fabric.pants_button_code = n))
            : "man_waistcoat" == r.product_type
            ? ((r.current.fabric.shirt_to_jacket_id = d),
              r.current.fabric.shirt_to_jacket_id || (r.current.fabric.shirt_to_jacket_id = 699),
              (r.current.fabric.pant_code = u),
              r.current.fabric.pant_code || (r.current.fabric.pant_code = 1),
              (r.current.fabric.waistcoat_lining_id = f),
              r.current.fabric.waistcoat_lining_id || (r.current.fabric.waistcoat_lining_id = 59),
              (r.current.fabric.unlined_lining = h),
              r.current.fabric.unlined_lining || (r.current.fabric.unlined_lining = 59),
              (r.current.fabric.label_color = b),
              r.current.fabric.label_color || (r.current.fabric.label_color = 0),
              (r.current.fabric.shoe_color = m),
              r.current.fabric.shoe_color || (r.current.fabric.shoe_color = 1),
              (r.current.fabric.tie = w),
              r.current.fabric.tie || (r.current.fabric.tie = 1),
              (r.current.fabric._button_code = n),
              r.current.fabric._button_code || (r.current.fabric._button_code = 2))
            : "man_coat" == r.product_type &&
              ((r.current.fabric.lining_id = f),
              r.current.fabric.lining_id || (r.current.fabric.lining_id = 57),
              (r.current.fabric.unlined_lining = f),
              r.current.fabric.unlined_lining || (r.current.fabric.unlined_lining = 57),
              (r.current.fabric.tie = w),
              r.current.fabric.tie || (r.current.fabric.tie = 0),
              (r.current.fabric.id_t4l_suit_rel = k),
              (r.current.fabric.id_t4l_suit_rel && 0 != r.current.fabric.id_t4l_suit_rel) || (r.current.fabric.id_t4l_suit_rel = 141)),
        "default" == r.has_extra_unlined)
    ) {
        var M = r.current.fabric.unlined_lining;
        "man_coat" == r.product_type
            ? ($('input[name="coat_lining[lining_id]"]').val(M).change(), (r.current.extras.coat_lining.lining_id = M))
            : ($('input[name="lining[lining_id]"]').val(M).change(), (r.current.extras.lining.lining_id = M));
    }
    r.updatePrice(), i && r.renderDraw(), r.fabric_preview_open && $("span.thumb_preview", e).click();
}),
    (Garment.prototype.initConfigure = function () {
        var t = this,
            e = t.container.find("#config"),
            i = e.find(".container_options"),
            r = e.find(".box_opt"),
            a = e.find(".checkbox_option"),
            o = e.find(".neck_options.neck"),
            n = e.find(".neck_options.cuff"),
            c = !1;
        i.on("click", "span", function () {
            if ((t.cleanPopups(), $(this).hasClass("submenu"))) {
                var r = $(this).attr("rel");
                return (
                    $(this).hasClass("min")
                        ? ($(this).removeClass("min"),
                          $('li[product="' + r + '"]', e)
                              .slideToggle()
                              .removeClass("invisible"))
                        : ($(this).addClass("min"),
                          $('li[product="' + r + '"]', e)
                              .slideToggle()
                              .addClass("invisible")),
                    setTimeout(function () {
                        $(".container_options", e).perfectScrollbar("update");
                    }, 300),
                    !1
                );
            }
            i.addClass("min"), c && t.hideOptionBox(c, e), (c = this.getAttribute("href").replace(/^[^#]*#/, "")), $("#" + c).addClass("active"), $("span", i).removeClass("active"), $(this).addClass("active"), $(".preview_fabric").hide();
            var a = t.views.config[c];
            if (
                (a && (t.inArray(t.current.view, a) || (t.changeView(a[0]), "folded" == a[0] && "man_shirt" == t.product_type && t.show_force_view_message(!0))),
                "woman_suitpants" == t.product_type ||
                    "woman_suitskirt" == t.product_type ||
                    "man_suit" == t.product_type ||
                    "man_suit2" == t.product_type ||
                    "man_chaque" == t.product_type ||
                    "man_levita" == t.product_type ||
                    "man_frac" == t.product_type)
            ) {
                var o = $(this).attr("product");
                t.changeActiveBlock(o, !0);
            }
            return !1;
        }),
            $(".submenu:first").click(),
            i.on("click", "a.shirt_cut", function () {
                t.change_style_shirt("casual");
            }),
            r.on("click", "a.back", function () {
                return i.removeClass("min"), c && $("#" + c).removeClass("active"), i.find("li a.active").removeClass("active"), !1;
            }),
            r.on("click", ".option_trigger", function () {
                if ("man_polo" == t.product_type && $(this).parents(".box_opt").attr("data-price") > 0) return !1;
                if (((t.last_change = $(this).parent().attr("id")), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(this).parent().hasClass("combined_block"))) {
                    a = $(this).parent().find("input");
                    (input_name = a.attr("name")), (input_value = a.val());
                    var e = this.getAttribute("rel"),
                        r = t.current.config[input_name];
                    if (
                        (a.val(e).change(),
                        (input_value = a.val()),
                        (l = $("#" + input_name).attr("views")) && ((l = l.split(",")), t.inArray(t.current.view, l) || t.changeView(l[0])),
                        void 0 !== t.product_config[input_name] && t.relationsApply(input_name, t.product_config[input_name][input_value]),
                        $(this).parent().attr("icon-change") && t.change_icon_trigger($(this), i),
                        "jacket_style" == input_name && "crossed" == e && $('#jacket_buttons .option_trigger[rel="4"]').click(),
                        "trenchcoat_style" == input_name && "crossed" == e && $('#trenchcoat_fastening .option_trigger[rel="button_standard"]').click(),
                        e != r)
                    ) {
                        c = $(this).attr("price");
                        (price = 0), c && (price = parseFloat(c)), (t.price_detail[input_name] = price), t.updatePrice();
                    }
                } else {
                    var a = $(this).parent().find("input:first");
                    (input_name = a.attr("name")), (input_value = a.val());
                    var e = this.getAttribute("rel"),
                        r = t.current.config[input_name];
                    if ("polo_collar" == input_name || "polo_placket" == input_name || "polo_cuffs" == input_name) {
                        var o = $(this).attr("rel");
                        e != r &&
                            ($(".colors_section input", "#" + input_name)
                                .val("")
                                .change(),
                            $(this).parents(".box_opt").find(".common_color").removeClass("checked")),
                            "default" != o
                                ? ((t.current.config[input_name + "_color"] = 0), $(".colors_section .color_block." + r).removeClass("active"), $(".colors_section .color_block." + o, "#" + input_name).addClass("active"))
                                : ($(".colors_section input", "#" + input_name).val(""), (t.current.config[input_name + "_color"] = 0), $(".colors_section .color_block", "#" + input_name).removeClass("active"));
                    }
                    if ((a.val(e).change(), (input_value = a.val()), "man_suit2" == t.product_type && "waistcoat" == input_name && "1" == input_value)) {
                        if (((price = parseFloat(a.attr("price"))), t.convetToSuit3(price, !0), $("form").hasClass("minimal"))) {
                            var n = $(".box_opts").height();
                            $(".box_opts").animate({ scrollTop: n + 100 }, 500);
                        }
                    } else if ("man_suit2" == t.product_type && "waistcoat" == input_name && "0" == input_value) t.convetToSuit2();
                    else if (("man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type) || "waistcoat" != input_name || "0" != input_value)
                        if (("man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type) || "waistcoat" != input_name || "1" != input_value) {
                            if ("jacket_style_combined" == input_name || "smoking_style_combined" == input_name);
                            else if (e != r) {
                                var c = $(this).attr("price");
                                (price = 0), c && (price = parseFloat(c)), (t.price_detail[input_name] = price), t.updatePrice();
                            }
                        } else (price = parseFloat(a.attr("price"))), t.convetToCeremonial3(price, !0);
                    else t.convetToCeremonial2();
                    void 0 !== t.product_config[input_name] && t.relationsApply(input_name, t.product_config[input_name][input_value]),
                        $(this).parent().attr("icon-fixed") || t.change_icon_trigger($(this), i),
                        "man_coat" == t.product_type &&
                            "mode" == input_name &&
                            (t.changeCoatMode(input_value),
                            t.productLoadedOk && !t.popupCoatModeOpened[input_value] && (t.showCoatModePopup(input_value), (t.popupCoatModeOpened[input_value] = !0)),
                            $(".popup_coat_mode", t.container).is(":visible") && t.showCoatModePopup(input_value));
                }
                if ("pants_crotch" == input_name || "pants_break" == input_name) {
                    var s = $(this).attr("detail_txt");
                    $("#" + input_name + " .pants_desc_detail").html(s);
                }
                t.current_extra_option && (l = t.views.config[t.current_extra_option]) && (t.inArray(t.current.view, l) || (t.changeView(l[0]), "folded" == l[0] && t.show_force_view_message(!0)));
                var l = $(this).attr("views");
                if (
                    (l && ((l = l.split(",")), t.inArray(t.current.view, l) || t.changeView(l[0])),
                    "man_suit" == t.product_type || "man_suit2" == t.product_type || "man_chaque" == t.product_type || "man_levita" == t.product_type || "man_frac" == t.product_type)
                ) {
                    var _ = $(this).attr("product");
                    "waistcoat" == input_name ? (1 == input_value ? t.changeActiveBlock("man_waistcoat", !0) : t.changeActiveBlock("man_jacket", !0)) : t.changeActiveBlock(_, !0);
                }
            }),
            "man_polo" == t.product_type &&
                $(".list_common_color", "#config").on("click", ".common_color", function () {
                    var e = $(this).parents(".box_opt").attr("id");
                    if ("logos" == e || "button_holes_threads" == e || "initials " == e) return !1;
                    $(this).parent().find(".common_color.checked").removeClass("checked");
                    var i = $(this).attr("rel");
                    $(this).parents(".colors_section").find("input").val(i).change(), $(this).addClass("checked");
                    var r = $(this).parents(".box_opt").find(".option_trigger.active").attr("rel"),
                        a = $('.option_trigger[rel="' + r + '"]', "#" + e).attr("price_color");
                    return (price = 0), a && (price = parseFloat(a)), (t.price_detail[e] = price), t.updatePrice(), !1;
                }),
            "man_coat" == t.product_type &&
                $(".box_opt#mode .option_trigger").on("click", ".more_info", function () {
                    var e = $(this).parents(".option_trigger").attr("rel");
                    t.showCoatModePopup(e), (t.popupCoatModeOpened[e] = !0);
                }),
            n.on("click", "label", function () {
                var t = $(this).attr("rel");
                return (
                    $(this).parent().find("label").removeClass("checked"),
                    $(this).addClass("checked"),
                    $('.neck_options.neck div[name="shirt_neck_no_interfacing"] .box_options input[value="' + t + '"]')
                        .parent()
                        .click(),
                    !1
                );
            }),
            a.on("click", "label", function () {
                $(this).attr("rel");
                $(this).parent().find("label").removeClass("checked"), $(this).addClass("checked");
                var t = $(this).attr("rel"),
                    e = $(this).attr("option_filter");
                if (1 == t) {
                    $("#" + e).addClass("slanted");
                    i = $("#" + e + " .option_trigger.active").attr("equival");
                    $("#" + e + ' .option_trigger[rel="' + i + '"]').click();
                } else {
                    $("#" + e).removeClass("slanted");
                    var i = $("#" + e + " .option_trigger.active").attr("equival");
                    $("#" + e + ' .option_trigger[rel="' + i + '"]').click();
                }
                return !1;
            }),
            o.on("click", "label", function () {
                var e = $(this).attr("rel"),
                    i = $(this).parent().parent().attr("name"),
                    r = $("input", this).val();
                if ("shirt_neck_buttons" == i) $(this).parent().find("label").removeClass("checked"), $(this).parent().find("input").prop("checked", !1), $(this).addClass("checked"), $("input", this).prop("checked", !0);
                else if ("ballena_removible" == i) {
                    $(this).parent().find("label").removeClass("checked"), $(this).parent().find("input").prop("checked", !1), $(this).addClass("checked"), $("input", this).prop("checked", !0);
                    var a = $(this).attr("price");
                    (price = 0), a && (price = parseFloat(a)), (t.price_detail[i] = price), t.updatePrice(), void 0 !== t.product_config[i] && t.relationsApply(i, t.product_config[i][r]);
                } else
                    $(this).parent().find("label").removeClass("checked"),
                        $(this).parent().find("input").prop("checked", !1),
                        $('.neck_options.cuff div[name="shirt_neck_no_interfacing"] label').removeClass("checked"),
                        $('.neck_options.cuff label[rel="' + e + '"]').addClass("checked"),
                        $(this).addClass("checked"),
                        $("input", this).prop("checked", !0),
                        void 0 !== t.product_config[i] && t.relationsApply(i, t.product_config[i][r]);
                return (t.current.config[i] = r), "shirt_neck_buttons" == i && t.renderDraw(), !1;
            }),
            o.on("click", "a.tooltip", function () {
                $("div.tooltip", o).toggleClass("active");
            }),
            $("a.tooltip", o).bind("touchstart", function (t) {
                $("div.tooltip", o).addClass("active");
            }),
            $("a.tooltip", o).bind("touchend", function (t) {
                $("div.tooltip", o).removeClass("active");
            }),
            $("input", e).change(function (e) {
                var i = $(this).attr("name"),
                    r = $(this).val();
                if ("jacket_style_combined" == i) {
                    o = 2;
                    (o = "mao" == (a = (n = r.split("_"))[0]) ? 5 : n[1]), (t.current.config.jacket_style = a), (t.current.config.jacket_buttons = o);
                } else if ("smoking_style_combined" == i) {
                    var a = (n = r.split("_"))[0],
                        o = 2;
                    (o = "mao" == a ? 5 : n[1]), (t.current.config.tuxedo_style = a), (t.current.config.smoking_buttons = o);
                } else if ("waistcoat_style_combined" == this.name) {
                    var n = r.split("_"),
                        c = n[0],
                        s = n[1];
                    (t.current.config.waistcoat_style = c), (t.current.config.waistcoat_buttons = s);
                } else t.current.config[i] = r;
                t.renderDraw();
            }),
            $(".popup_coat_mode").click(function () {
                t.hideCoatModePopup();
            });
    }),
    (Garment.prototype.changeCoatMode = function (t) {
        let e = this,
            i = ["light", "normal", "winter", "winter_detachable"];
        if (e.inArray(t, i) && e.current_coat_mode != t) {
            e.current_coat_mode = t;
            var r = i.join(" ");
            if (($("#extra li.coat_lining").removeClass(r).addClass(t), $(".extra_linings").removeClass(r).addClass(t), $(".fabric_list").removeClass(r).addClass(t), "light" == t))
                $('.box_opt#coat_lining .option_trigger[rel="unlined"]').click();
            else if ("winter" == t) {
                $('.box_opt#coat_lining .option_trigger[rel="padded"]').click();
                var a = 104;
                0 != e.current.fabric.id_t4l_lining_padded && (a = e.current.fabric.id_t4l_lining_padded),
                    e.current.extras.coat_lining.lining_id && (a = e.current.extras.coat_lining.lining_id),
                    $(".box_opt.extra_linings .lining_box.active.padded .lining_" + a).length > 0
                        ? $(".box_opt.extra_linings .lining_box.active.padded .lining_" + a)
                              .parent()
                              .click()
                        : $(".box_opt.extra_linings .lining_box.active.padded").first().click();
            } else if ("winter_detachable" == t) {
                $('.box_opt#coat_lining .option_trigger[rel="detachable_waistcoat"]').click();
                var o = e.current.fabric.man_coat;
                $(".fabric_list .fabric_" + o)
                    .parent()
                    .hasClass("winter_detachable") || $(".fabric_list .fabric_box.winter_detachable").first().click();
                var n = 189;
                0 != e.current.fabric.id_t4l_lining_detachable && (n = e.current.fabric.id_t4l_lining_detachable),
                    $(".box_opt.extra_linings .lining_box.active.detachable_waistcoat .lining_" + n)
                        .parent()
                        .click();
            } else void 0 !== e.current.extras.coat_lining.contrast && "custom" != e.current.extras.coat_lining.contrast && $('.box_opt#coat_lining .option_trigger[rel="default"]').click();
        }
    }),
    (Garment.prototype.initFabric = function () {
        function t() {
            var t = $(".fabric_options_fix").height() + $(".multifabric_selectors").height();
            $(".fabric_list").css("margin-bottom", t);
        }
        function e(t, e) {
            $("#fabric .fabric_options_fix .filter_title").html(t), e ? $("#fabric .filter_section").addClass("pointer") : $("#fabric .filter_section ").removeClass("pointer");
        }
        function i() {
            $("#personalize_fabrics_info_popup").addClass("active");
        }
        function r() {
            $("#personalize_fabrics_split")
                .addClass("active")
                .find("img.lazy")
                .each(function () {
                    this.src = this.dataset.src;
                })
                .removeClass("lazy");
        }
        function a(t) {
            d.removeClass(function (t, e) {
                return (e.match(/(^|\s)sub_list_\S+/g) || []).join(" ");
            }),
                d.removeClass(function (t, e) {
                    return (e.match(/(^|\s)man_\S+/g) || []).join(" ");
                });
            var e = t;
            "man_jacket" == e && (e = c.product_type), d.addClass("sub_list_" + e);
            var i = e;
            "man_suit2" == i && (i = "man_jacket"), d.addClass(i);
        }
        function o(t) {
            if (((c.multi_fabric_active = t), 0 == c.multi_fabric_active)) {
                $("#fabric .fabric_list").removeClass("multi_fabric").removeClass("three").removeClass("man_jacket man_pants man_waistcoat").addClass("man_suit"),
                    $(".multifabric_selectors").hide(),
                    $(".cmn-toggle-multi").removeClass("toggle_active"),
                    c.stepSetURL("fabric");
                var e = $('input[name="fabric[' + c.multi_fabric_options[0] + ']"]', c.container).val();
                $('input[name="fabric[' + c.multi_fabric_options[1] + ']"]').val(e),
                    $('input[name="fabric[' + c.multi_fabric_options[2] + ']"]').val(e),
                    (c.current.fabric[c.multi_fabric_options[0]] = e),
                    (c.current.fabric[c.multi_fabric_options[1]] = e),
                    (c.current.fabric[c.multi_fabric_options[2]] = e),
                    $(".fabric_box .price.general").addClass("visible"),
                    $(".fabric_box .price.split").removeClass("visible"),
                    $(".action_column .fabric_group").hide(),
                    $(".action_column .fabric_group.general").show();
                var i = $('.fabric_box div[rel="' + e + '"]', d).parent();
                c.fabricSelect($("#fabric"), i);
            } else {
                $("#fabric .fabric_list").addClass("multi_fabric").removeClass("man_suit man_jacket man_pants man_waistcoat"),
                    "man_suit3" == c.real_product_type && $("#fabric .fabric_list").addClass("three"),
                    "man_ceremonial3" == c.real_product_type && $("#fabric .fabric_list").addClass("three"),
                    $(".cmn-toggle-multi").addClass("toggle_active"),
                    $(".multifabric_selectors").show(),
                    (c.multi_fabric_active = c.multi_fabric_options[0]),
                    a(c.multi_fabric_active);
                var r = c.current.fabric.man_jacket,
                    o = $('#fabric .image[rel="' + r + '"] a').attr("category");
                c.updateFabricPrices("man_jacket", o, !0);
                var r = c.current.fabric.man_pants,
                    o = $('#fabric .image[rel="' + r + '"] a').attr("category");
                if ((c.updateFabricPrices("man_pants", o, !0), "man_suit3" == c.real_product_type)) {
                    var r = c.current.fabric.man_waistcoat,
                        o = $('#fabric .image[rel="' + r + '"] a').attr("category");
                    c.updateFabricPrices("man_waistcoat", o, !0);
                } else if ("man_ceremonial3" == c.real_product_type) {
                    var r = c.current.fabric.man_waistcoat,
                        o = $('#fabric .image[rel="' + r + '"] a').attr("category");
                    c.updateFabricPrices("man_waistcoat", o, !0);
                }
                (c.price_detail.fabric_man_suit2 = 0), (c.price_detail.fabric_man_suit3 = 0), (c.price_detail.fabric_man_ceremonial3 = 0), $(".action_column .fabric_group.general").hide();
                var n = ["man_jacket", "man_pants"];
                "man_suit3" == c.real_product_type && n.push("man_waistcoat"), "man_ceremonial3" == c.real_product_type && n.push("man_waistcoat");
                for (var s = 0; s < n.length; s++) $(".action_column .fabric_group." + n[s]).show();
            }
            b.removeClass("active"), c.fabricPriceActive();
        }
        function n(t, e, i, r) {
            var r = void 0 !== r && r;
            if (($(".row.resume .number").html("..."), "remove" == t))
                if ("new" == i || "best_seller" == i || "promo" == i || "vegan" == i || "brightness_brillante" == i) delete c.filters_applied[i];
                else if ("characteristics" != e && "stretchy" == i) delete c.filters_applied.st;
                else {
                    if (("flannel" == i && delete c.filters_applied.thread_style, "characteristics" == e && (e = "tags"), "2ply" == i && (i = "yarn"), "eco" == i && ((e = "tags"), (i = "oeko")), "easy_wrinkle" == i)) {
                        (e = "tags"), (i = "easy");
                        for (var a in c.filters_applied[e]) c.filters_applied[e][a] == i && c.filters_applied[e].splice(a, 1);
                        i = "wrinkle";
                    }
                    for (var a in c.filters_applied[e]) c.filters_applied[e][a] == i && c.filters_applied[e].splice(a, 1);
                    if ("white" == i) {
                        i = "ligth";
                        for (var a in c.filters_applied[e]) c.filters_applied[e][a] == i && c.filters_applied[e].splice(a, 1);
                    }
                    if ("beige" == i) {
                        i = "camel";
                        for (var a in c.filters_applied[e]) c.filters_applied[e][a] == i && c.filters_applied[e].splice(a, 1);
                    }
                    ("undefined" != c.filters_applied[e] && 0 != c.filters_applied[e].length) || delete c.filters_applied[e];
                }
            else "add" == t && (void 0 === c.filters_applied[e] && (c.filters_applied[e] = []), c.filters_applied[e].push(i), "beige" == i && c.filters_applied[e].push("camel"), "white" == i && c.filters_applied[e].push("ligth"));
            r || c.update_fabric_list(f, m, c.filters_applied, s);
        }
        var c = this,
            s = $("#fabric"),
            l = (s.find(".filter_section"), $(".filters.fabric_step")),
            _ = l.find(".menu_filter"),
            p = (_.find(".filter li"), s.find(".active_filters").find("ul"), s.find(".fabric_options")),
            u = s.find(".fabric_options_fix"),
            d = s.find(".fabric_list"),
            f = d.find(".fabric_box"),
            h = $("#personalize_fabrics_info_popup"),
            b = $("#personalize_fabrics_split"),
            m = [],
            v = !1;
        ("undefined" != typeof winter_blazer_landing && "yes" == winter_blazer_landing) || $('li [rel="winter_tweed"]').hide(),
            ("man_suit2" != c.product_type && "man_suit3" != c.product_type) || $("#fabric .fabric_list").addClass("man_suit"),
            $(".fabric_container_lazy").scroll(function () {
                $(".arrow_scroll").addClass("hide"), $(".ps-scrollbar-y-rail").removeClass("force_visible"), (v = !0);
            }),
            $(".arrow_scroll span").addClass("shake"),
            setTimeout(function () {
                v || $(".ps-scrollbar-y-rail").addClass("force_visible");
            }, 1e4),
            $(".arrow_scroll").click(function () {
                $(".fabric_list").animate({ scrollTop: 300 }, "slow");
            }),
            (jQuery.fn.hasScrollBar = function () {
                return this.get(0).scrollHeight > this.height();
            }),
            setTimeout(function () {
                $(".fabric_container_lazy").hasScrollBar() || $(".arrow_scroll").addClass("hide");
            }, 500),
            f.each(
                function () {},
                function () {
                    $(".info .title", this).css("width", "auto");
                }
            ),
            $("#fabric .fabric_options_fix").on("click", ".pointer", function () {
                l.addClass("active");
            }),
            $("#fabric .header_fabrics").on("click", ".bton.filter", function () {
                l.addClass("active");
            }),
            $(".header_fabrics .trash").click(function () {
                return (
                    $(".applied", l).removeClass("applied"),
                    $(".header_fabrics .row").removeClass("applied"),
                    l.find("li.active").each(function (t) {
                        $(this).removeClass("active"), n("remove", $(this).data("type"), $(this).attr("rel"), !0);
                    }),
                    n(),
                    !1
                );
            }),
            h.on("click", ".link", function () {
                var t = $(this),
                    e = (t.attr("filter_cat"), t.attr("filter"));
                (t.filter = e), c.applyFilterFabric(t, !1, !0), h.removeClass("active");
            }),
            ("man_suit" != c.product_type && "man_suit2" != c.product_type) ||
                $(".fabric_box", s).each(function () {
                    var t = $(this),
                        e = $("a.fabric", t);
                    e.attr("simple_composition"), e.attr("fw");
                }),
            d.on("click", ".fabric_box:not(.out_of_stock)", function () {
                return (
                    void 0 !== c.out_of_stock_control && void 0 !== c.out_of_stock_control.fabric && "ok" !== c.out_of_stock_control.fabric && delete c.out_of_stock_control.fabric,
                    $(".fabric_box.checked", d).removeClass("checked"),
                    c.fabricSelect(s, $(this)),
                    !1
                );
            }),
            _.find(".item_menu_filter").each(function () {
                m.push($(this).attr("rel"));
            });
        var g = $(".left_filters");
        if (
            (g.on("click", "a", function () {
                switch (($("li", g).removeClass("active"), $(this).parent().addClass("active"), l.removeClass("active"), h.removeClass("active"), b.removeClass("active"), $(this).attr("rel"))) {
                    case "all":
                        c.push_dataLayer("config_" + c.product_type, "step2:filter_type_all"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "new":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_new"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "new"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "best_sell":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_best_sell"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "best_seller"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "vegan":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_vegan"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "vegan"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "brightness_brillante":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_brightness_brillante"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "brightness_brillante"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "premium":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_premium"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "premium"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "promo":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_promo"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "promo"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "summer":
                        (c.pre_filter_active = !0),
                            c.push_dataLayer("config_" + c.product_type, "step2:filter_type_summer"),
                            c.removeAllFilters(s, f, p, u, _),
                            d.css("margin-top", ""),
                            ((t = []).filter = "summer"),
                            c.applyFilterFabric(t, !1, !1),
                            tablet_device || $(".fabric_list").perfectScrollbar("update"),
                            e($(this).parent().attr("message"));
                        break;
                    case "winter":
                        (c.pre_filter_active = !0), c.push_dataLayer("config_" + c.product_type, "step2:filter_type_winter"), c.removeAllFilters(s, f, p, u, _), d.css("margin-top", "");
                        var t = [];
                        (t.filter = "winter"), c.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));
                        break;
                    case "filter":
                        c.pre_filter_active && (c.removeAllFilters(s, f, p, u, _), (c.pre_filter_active = !1)), l.addClass("active"), c.closeThumbFabric(), e($(this).parent().attr("message"), "pointer");
                        break;
                    case "multi":
                        l.removeClass("active"), r();
                        break;
                    case "info":
                        l.removeClass("active"), i();
                }
                return !1;
            }),
            $(".header_fabrics .multi_fabric").click(function () {
                r();
            }),
            b.on("click", "a.back", function () {
                b.removeClass("active");
            }),
            b.on("click", "a.back", function () {
                b.removeClass("active");
            }),
            b.on("click", ".option_trigger", function () {
                $(".option_trigger", b).removeClass("active"), $(this).addClass("active");
                var e = $(this).attr("rel");
                o((e = 0 != e && "man_jacket")), t();
            }),
            $(".multifabric_selectors").on("click", "label", function () {
                $(".multifabric_selectors label").removeClass("checked"), $(this).addClass("checked");
                var t = $(this).attr("rel");
                (c.multi_fabric_active = t), a(t), c.bLazy_fabric && c.bLazy_fabric.revalidate(), c.fabricPriceActive(), "man_pants" != t && c.changeActiveBlock(t, !1);
            }),
            l.on("click", "a.back", function () {
                return s.show(), l.removeClass("active"), !1;
            }),
            l.on("click", ".back", function () {
                return s.show(), l.removeClass("active"), !1;
            }),
            l.on("click", ".show_results", function () {
                return s.show(), l.removeClass("active"), !1;
            }),
            h.on("click", "a.back", function () {
                return s.show(), h.removeClass("active"), !1;
            }),
            l.on("click", ".row.dropdown .trash", function () {
                var t = $(this).parents(".row");
                return (
                    t.removeClass("applied"),
                    t
                        .parent()
                        .find("li.active")
                        .each(function (t) {
                            $(this).removeClass("active"), n("remove", $(this).data("type"), $(this).attr("rel"), !0);
                        }),
                    n(),
                    $(".show_results", l).addClass("visible"),
                    0 == l.find(".filter.active").length && ($(".header_fabrics .row.action").removeClass("applied"), $(".header_fabrics .row.resume").removeClass("applied")),
                    !1
                );
            }),
            l
                .on("click", ".item_menu", function () {
                    $(this).parent().toggleClass("active"), $(this).toggleClass("active");
                    $(this).next().slideToggle().toggleClass("active");
                    var t = $(".filters .menu_filter .content").scrollTop() + $(this).offset().top;
                    $(".filters .menu_filter .content").animate({ scrollTop: t }, 1e3), tablet_device || $(".filters .menu_filter .content").perfectScrollbar("update");
                })
                .find("ul.sub_menu_filter")
                .hide(),
            _.on("click", ".filter li", function () {
                var t = $(this).data("type"),
                    e = $(this).attr("rel"),
                    i = "";
                $(this).hasClass("active")
                    ? ($(this).removeClass("active"),
                      (i = "remove"),
                      0 == $(this).parents(".item_menu_filter").find("li.active").length && $(this).parents(".item_menu_filter").find(".row").removeClass("applied"),
                      0 == s.find("li.active").length && ($(".header_fabrics .row.action").removeClass("applied"), $(".header_fabrics .row.resume").removeClass("applied")))
                    : ($(this).addClass("active"),
                      (i = "add"),
                      $(this).parents(".item_menu_filter").find(".row").addClass("applied"),
                      l.find(".row.title").addClass("applied"),
                      $(".header_fabrics .row.action").addClass("applied"),
                      $(".header_fabrics .row.resume").addClass("applied")),
                    n(i, t, e),
                    $(".show_results", l).addClass("visible");
            }),
            filter_fabric)
        ) {
            for (var w in filter_fabric)
                for (var k in filter_fabric[w]) {
                    filter_fabric[w][k];
                    $('.filters.fabric_step li[rel="' + filter_fabric[w][k] + '"][data-type="' + w + '"]').click();
                }
            $(".header_fabrics .row.action.applied").removeClass("applied"), $(".header_fabrics .row.resume.applied").removeClass("applied");
        }
        $(".check_multiple_fabric", c.container).click(function () {
            c.multi_fabric ? activeMultiFabric("desactive") : activeMultiFabric("active");
        }),
            $(".multiple_fabric_options").on("click", ".option", function () {
                $(".multiple_fabric_options .option").removeClass("active");
                var t = $(this).attr("id");
                (c.multi_fabric = t), $(this).addClass("active");
            }),
            $(".fabric_box").each(function () {
                $(".composition span.trad", this).html(fabric_options_i18n[$(".composition span.trad", this).html()]).parent().addClass("visible");
            });
    }),
    (Garment.prototype.keychain_isset = function (t, e) {
        if (void 0 === t) return !1;
        for (var i = t, r = 0; r < e.length; r++) {
            if (void 0 === i[e[r]]) return !1;
            i = i[e[r]];
        }
        return !0;
    }),
    (Garment.prototype.initExtras = function () {
        var t = this,
            e = t.container,
            i = e.find("#extra");
        if ("man_polo" == t.product_type) i = e.find("#config");
        var r = i.find(".container_options"),
            a = i.find(".box_opts"),
            o = a.find(".box_opt"),
            n = (a.find('[data-extra-type*="standart"]'), a.find('[data-extra-type*="fabric"]'), a.find('[data-extra-type*="threads"]'), a.find(".initials"), i.find(".extra_fabrics")),
            c = n.find(".fabric_list"),
            s = i.find(".extra_linings"),
            l = s.find(".lining_list"),
            _ = $("#extra"),
            p = _.find(".filter_section"),
            u = $(".filters.extra_step"),
            d = u.find(".menu_filter"),
            f = (d.find(".filter li"), _.find(".active_filters")),
            h = f.find("ul"),
            b = _.find(".fabric_options"),
            m = _.find(".fabric_options_fix"),
            v = new Blazy({ container: ".box_opt.logos" }),
            g = (c = _.find(".fabric_list")).find(".fabric_box");
        if (
            "man_trenchcoat" == t.product_type ||
            "man_coat" == t.product_type ||
            "man_levita" == t.product_type ||
            "man_frac" == t.product_type ||
            "man_chaque" == t.product_type ||
            "man_suit" == t.product_type ||
            "man_suit2" == t.product_type ||
            "man_jacket" == t.product_type ||
            "man_waistcoat" == t.product_type
        )
            g = (l = _.find(".lining_list")).find(".lining_box");
        var w = [];
        r.on("click", "span", function () {
            if ((t.cleanPopups(), $(this).hasClass("submenu"))) {
                var e = $(this).attr("rel");
                return (
                    $(this).hasClass("min")
                        ? ($(this).removeClass("min"),
                          $('li[product="' + e + '"]', i)
                              .slideToggle()
                              .removeClass("invisible"))
                        : ($(this).addClass("min"),
                          $('li[product="' + e + '"]', i)
                              .slideToggle()
                              .addClass("invisible")),
                    setTimeout(function () {
                        $(".container_options", i).perfectScrollbar("update");
                    }, 300),
                    !1
                );
            }
            t.closeThumbFabric(),
                t.closeSeersuckerWarning(),
                t.closeInitialsImage(),
                r.addClass("min"),
                $(this).addClass("active"),
                t.current_extra_option && t.hideOptionBox(t.current_extra_option, _),
                t.extra_fabrics_active && n.removeClass("active"),
                t.extra_linings_active && s.removeClass("active"),
                u.removeClass("active"),
                t.removeAllFilters(_, g, b, m, d),
                (t.current_extra_option = this.getAttribute("href").replace(/^[^#]*#/, "")),
                "man_coat" != t.product_type || "coat_lining" != t.current_extra_option || ("light" != t.current_coat_mode && "winter" != t.current_coat_mode && "winter_detachable" != t.current_coat_mode)
                    ? $("#" + t.current_extra_option, _).addClass("active")
                    : "light" == t.current_coat_mode
                    ? $('.option_trigger[rel="unlined"]').click()
                    : "winter" == t.current_coat_mode
                    ? $('.option_trigger[rel="padded"]').click()
                    : "winter_detachable" == t.current_coat_mode && $('.option_trigger[rel="detachable_waistcoat"]').click();
            var a = t.views.extra[t.current_extra_option];
            return (
                a && (t.inArray(t.current.view, a) || (t.changeView(a[0]), "folded" == a[0] && t.show_force_view_message(!0))),
                t.complex &&
                    ("waistcoat_button_holes_threads" == t.current_extra_option || "waistcoat_initials" == t.current_extra_option || "waistcoat_metal_buttons" == t.current_extra_option
                        ? t.changeActiveBlock("man_waistcoat", !0)
                        : "lining" != t.current_extra_option || ("man_suit2" != t.product_type && "man_suit3" != t.product_type)
                        ? "sash" == t.current_extra_option && "without_model" != t.current.view
                            ? t.changeActiveBlock("man_pants", !1)
                            : "waistcoat_lining_back" == t.current_extra_option && "without_model" != t.current.view
                            ? t.changeActiveBlock("man_waistcoat", !1)
                            : t.changeActiveBlock(t.multi_fabric_options[0], !0)
                        : t.changeActiveBlock("man_jacket_only", !0)),
                ("initials" != t.current_extra_option && "coat_initials" != t.current_extra_option && "polo_initials" != t.current_extra_option) ||
                    (("man_jacket" != t.product_type && "man_suit" != t.product_type && "man_suit2" != t.product_type && "man_coat" != t.product_type && "man_polo" != t.product_type) || t.showInitialsImage(),
                    "man_polo" == t.product_type && t.renderInitials()),
                "quilted_waistcoat" != t.current_extra_option || t.quilted_alert || t.showQuilterWaistcoatAlert(),
                "winter_lining" != t.current_extra_option || t.winter_lining_alert || t.showWinterLiningAlert(),
                "logos" == t.current_extra_option &&
                    setTimeout(function () {
                        v && v.revalidate();
                    }, 200),
                !1
            );
        }),
            $(".back_lining_waistcoat").hide(),
            $(".waistcoat_lining_back .lining_activator").click(function () {
                var t = $("#waistcoat_lining_back").attr("data-price");
                (content_price = format_price(t, "", window.currency_json)), (content_price = "+" + content_price), $(".price_waistcoat_back").text(content_price), $(".back_lining_waistcoat").show();
            }),
            $(".back").click(function () {
                $(".back_lining_waistcoat").hide();
            }),
            $("#link_fabric").click(function () {
                $(".back_lining_waistcoat").hide();
            }),
            $("#link_configure").click(function () {
                $(".back_lining_waistcoat").hide();
            }),
            $(".option.table").click(function () {
                $(".back_lining_waistcoat").hide();
            }),
            o.on("click", "a.back", function () {
                return (
                    t.closeInitialsImage(),
                    r.removeClass("min"),
                    t.current_extra_option && ($("#" + t.current_extra_option).removeClass("active"), t.hideOptionBox(t.current_extra_option, o)),
                    r.find("li span.active").removeClass("active"),
                    !1
                );
            }),
            "man_polo" == t.product_type &&
                $("#initials .box_position_initial label").click(function () {
                    $("input", this).val();
                    var e = window.cdn_host;
                    $("#available_window .initials .image img").attr("src", e + "dimg/fabric/polo/" + t.current.fabric.man_polo + "_big.jpg");
                }),
            $("div.box_opt", a).each(function () {
                var e = this.getAttribute("data-extra-type"),
                    i = this.getAttribute("id");
                (t.current.extras[i] = []), "function" == typeof t["initExtra_" + e] && t["initExtra_" + e].apply(t, [i, $(this)]);
            }),
            $("input", _).change(function () {
                t.renderDraw();
            }),
            c.on("click", ".fabric_box:not(.out_of_stock)", function () {
                t.keychain_isset(t.out_of_stock_control, ["extras", "fabric", t.current_fabric_activator_parent.attr("id")]) && delete t.out_of_stock_control.extras.fabric[t.current_fabric_activator_parent.attr("id")];
                var e = $(this).find(".image").attr("rel");
                if (((o = $(this).parent()), t.id_box_opt_fabric))
                    return t.set_extra_fabric(t.id_box_opt_fabric, option_fabric_trigger_selected, t.current_fabric_activator_parent, e), t.fabric_preview_open && $("span.thumb_preview", this).click(), !1;
            }),
            l.on("click", ".lining_box:not(.out_of_stock)", function () {
                t.keychain_isset(t.out_of_stock_control, ["extras", "lining", t.current_fabric_activator_parent.attr("id")]) && delete t.out_of_stock_control.extras.lining[t.current_fabric_activator_parent.attr("id")];
                var e = $(this).find(".image").attr("rel");
                if (((o = $(this).parent()), t.id_box_opt_fabric))
                    return (
                        (t.current._show_lining = !0),
                        (t.has_extra_lining = t.id_box_opt_fabric),
                        t.set_extra_lining(t.id_box_opt_fabric, option_fabric_trigger_selected, t.current_fabric_activator_parent, e, $(this)),
                        (t.current._show_lining = !1),
                        t.fabric_preview_open && $("span.thumb_preview", this).click(),
                        !1
                    );
            }),
            n.on("click", ".back", function () {
                return (extra_fabrics_active = !1), n.removeClass("active"), t.current_fabric_activator_parent.addClass("active"), !1;
            }),
            s.on("click", ".back", function () {
                return (
                    (extra_linings_active = !1),
                    s.removeClass("active"),
                    "man_coat" != t.product_type || "coat_lining" != t.current_extra_option || ("light" != t.current_coat_mode && "winter" != t.current_coat_mode && "winter_detachable" != t.current_coat_mode)
                        ? t.current_fabric_activator_parent.addClass("active")
                        : (r.removeClass("min"), t.current_extra_option && ($("#" + t.current_extra_option).removeClass("active"), t.hideOptionBox(t.current_extra_option, o)), r.find("li span.active").removeClass("active")),
                    !1
                );
            }),
            c.on("click", ".fabric_box:not(.out_of_stock)", function () {
                return c.find(".fabric_box.checked").removeClass("checked"), $(this).addClass("checked"), !1;
            }),
            l.on("click", ".lining_box:not(.out_of_stock)", function () {
                return l.find(".lining_box.checked").removeClass("checked"), $(this).addClass("checked"), !1;
            }),
            d.find(".item_menu_filter").each(function () {
                w.push($(this).attr("rel"));
            }),
            p.on("click", "a.filter_button", function () {
                u.addClass("active"),
                    t.isFF()
                        ? setTimeout(function () {
                              $(".background_fixed", u).show();
                          }, 600)
                        : $(".background_fixed", u).show();
            }),
            u.on("click", "a.back", function () {
                return _.show(), u.removeClass("active"), !1;
            }),
            u
                .on("click", ".item_menu", function () {
                    $(this).parent().toggleClass("active"), $(this).toggleClass("active");
                    $(this).next().slideToggle().toggleClass("active");
                })
                .find("ul.sub_menu_filter")
                .hide(),
            d.on("click", ".filter li", function () {
                var e = $(this).parents(".sub_menu_filter");
                $(this).hasClass("all") ? e.find(".filter li").removeClass("active") : e.find(".filter li.all").removeClass("active"), $(this).toggleClass("active"), t.check_auto_all_select(e);
            }),
            f.on("click", "li", function () {
                $(this).remove(), t.resize_height_fabric_options_fix(b, m);
                var e = $(this).attr("rel");
                $(this).attr("rel_type");
                d.find("li[rel=" + e + "]").removeClass("active");
                var i = [];
                return (
                    h.find("li").each(function () {
                        var t = $(this).attr("rel"),
                            e = $(this).attr("rel_type");
                        void 0 === i[e] && (i[e] = []), i[e].push(t);
                    }),
                    u.find("ul.sub_menu_filter").each(function () {
                        t.check_auto_all_select($(this));
                    }),
                    t.update_fabric_list(g, w, i, _),
                    !1
                );
            });
        var k = !1,
            y = [];
        u.find(".apply").on("click", "a", function () {
            return (
                h.html(""),
                d.find(".item_menu_filter").each(function (t) {
                    var e = $(this),
                        i = e.attr("rel");
                    (y[i] = []),
                        e
                            .find(".filter li.active")
                            .not(".all")
                            .each(function () {
                                k = !0;
                                var t = $(this).attr("rel"),
                                    e = $(this).find("a").html();
                                y[i].push(t), h.prepend("<li rel_type=" + i + " rel=" + t + "><a href='javascript;:'><div class='cruz'>k</div><div class='title'>" + e + "</div></a></li>");
                            }),
                        0 == y[i].length && delete y[i];
                }),
                k && (f.show(), t.update_fabric_list(g, w, y, _)),
                _.show(),
                u.removeClass("active"),
                t.resize_height_fabric_options_fix(b, m),
                !1
            );
        }),
            $(".quilted_waistcoat .tooltip_info").click(function () {
                t.showQuilterWaistcoatAlert();
            }),
            $(".quilted_waistcoat_alert").click(function () {
                t.hideQuilterWaistcoatAlert();
            }),
            $(".unlined_coat_alert").click(function () {
                t.hideUnlinedCoatAlert();
            }),
            $(".winter_lining .tooltip_info").click(function () {
                t.showWinterLiningAlert();
            }),
            $(".winter_lining_alert").click(function () {
                t.hideWinterLiningAlert();
            });
    }),
    (Garment.prototype.initExtra_standart = function (t, e) {
        var i = this;
        e.on("click", ".option_trigger", function () {
            var t = $(this).parent().attr("id");
            $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");
            var e = $(this).attr("rel"),
                r = $(this).parent().find("input");
            if ((r.val(e), $(this).hasClass("zero_value"))) i.extraSetPrice(t, 0);
            else {
                var a = parseFloat($(this).parent().attr("data-price"));
                isNaN(a) && (a = 0), i.extraSetPrice(t, a);
            }
            r.val(e).change(), (input_name = r.attr("name")), (input_value = r.val()), void 0 !== i.product_config[input_name].contrast && i.relationsApply(input_name, i.product_config[input_name].contrast[input_value]);
        });
    }),
    (Garment.prototype.initExtra_initials = function (t, e) {
        function i(e) {
            if (c) {
                var i = $('input[name="' + t + '[text]"]', e).val();
                n.current.extras[t].text = i;
                var r = $('input[name="' + t + '[color_custom]"]', e).val();
                n.current.extras[t].color_custom = r;
                var a = $('input[name="' + t + '[type]"]:checked', e).val();
                n.current.extras[t].type = a;
                var o = $('input[name="' + t + '[pos]"]:checked', e).val();
                n.current.extras[t].pos = o;
            } else n.current.extras[t] = [];
            "man_coat" != this.product_type && "man_trenchcoat" != this.product_type && n.renderInitials();
        }
        function r() {
            $(".list_common_color .common_color", e).removeClass("checked");
            var t = $(".list_common_color .common_color", e).first().attr("rel");
            $('input[name="initials[color_custom]"]', e).val(t), $(".list_common_color .common_color", e).first().addClass("checked");
        }
        function a(t) {
            $(".options_list li." + t).show();
        }
        function o(t) {
            $(".options_list li." + t).hide();
        }
        var n = this,
            c = !1;
        $(document).ready(function () {
            $(window).keydown(function (t) {
                if (13 == t.keyCode) return t.preventDefault(), !1;
            });
        }),
            $('input[name="' + t + '[text]"]', e).keyup(function (r) {
                r.keyCode || r.which;
                if (
                    ($("form").hasClass("minimal") &&
                        (("man_jacket" != n.product_type && "man_suit" != n.product_type && "man_suit2" != n.product_type && "man_coat" != n.product_type && "man_polo" != n.product_type) || n.showInitialsImage(),
                        "man_polo" == n.product_type && n.renderInitials()),
                    "" != $(this).val())
                ) {
                    c = !0;
                    var s = parseFloat(e.attr("data-price"));
                    isNaN(s) && (s = 0), n.extraSetPrice(t, s), o("logos");
                } else n.extraSetPrice(t, 0), (c = !1), a("logos");
                i(e),
                    $("form").hasClass("minimal") &&
                        (("man_jacket" != n.product_type && "man_suit" != n.product_type && "man_suit2" != n.product_type && "man_coat" != n.product_type && "man_polo" != n.product_type) || n.showInitialsImage(),
                        "man_polo" == n.product_type && n.renderInitials());
            }),
            e.on("click", ".remove", function () {
                return $(".txt_initial", e).val("").change(), r(), a("logos"), n.extraSetPrice(t, 0), (c = !1), i(e), !1;
            });
        var s = e.find(".box_font_initial");
        s.on("click", "label", function () {
            return (
                s.find("label.checked").removeClass("checked"), $(this).addClass("checked"), $("input", s).prop("checked", !1), $("input", $(this)).prop("checked", !0), "" != $('input[name="' + t + '[text]"]').val() && (c = !0), i(e), !1
            );
        });
        var l = e.find(".box_position_initial");
        l.on("click", "label", function () {
            return (
                l.find("label.checked").removeClass("checked"), $(this).addClass("checked"), $("input", l).prop("checked", !1), $("input", $(this)).prop("checked", !0), "" != $('input[name="' + t + '[text]"]').val() && (c = !0), i(e), !1
            );
        }),
            $(".list_common_color", e).on("click", ".common_color", function () {
                $(this).parent().find(".common_color.checked").removeClass("checked");
                var r = $(this).attr("rel");
                if (($(this).parent().find("input").val(r).change(), $(this).addClass("checked"), "" != $('input[name="' + t + '[text]"]').val() && (c = !0), c)) {
                    var a = parseFloat(e.attr("data-price"));
                    isNaN(a) && (a = 0), n.extraSetPrice(t, a);
                }
                return i(e), !1;
            });
    }),
    (Garment.prototype.initExtra_logos = function (t, e) {
        function i(e) {
            if (l) {
                var i = $('input[name="' + t + '[color_custom]"]', e).val();
                s.current.extras[t].color_custom = i;
                var r = $('input[name="' + t + '[logo]"]', e).val();
                s.current.extras[t].logo = r;
                var a = $('input[name="' + t + '[pos]"]:checked', e).val();
                s.current.extras[t].pos = a;
            } else s.current.extras[t] = [];
        }
        function r() {
            $(".list_common_color .common_color", e).removeClass("checked");
            var t = $(".list_common_color .common_color", e).first().attr("rel");
            $('input[name="initials[color_custom]"]', e).val(t), $(".list_common_color .common_color", e).first().addClass("checked");
        }
        function a() {
            $(".remove_logo").addClass("active"), c("initials");
        }
        function o() {
            $(".remove_logo").removeClass("active"), n("initials");
        }
        function n(t) {
            $(".options_list li." + t).show();
        }
        function c(t) {
            $(".options_list li." + t).hide();
        }
        var s = this,
            l = !1,
            _ = e.find(".box_logos");
        e.on("click", ".remove_logo", function () {
            return (
                $('input[name="' + t + '[logo]"]')
                    .val("")
                    .change(),
                _.find(".logo.checked").removeClass("checked"),
                r(),
                s.extraSetPrice(t, 0),
                (l = !1),
                i(e),
                o(),
                s.renderDraw(),
                !1
            );
        }),
            _.on("click", ".logo", function () {
                _.find(".logo.checked").removeClass("checked"), $(this).addClass("checked");
                var r = $(this).attr("rel");
                $('input[name="' + t + '[logo]"]').val(r), (l = !0), i(e), $('input[name="' + t + '[logo]"]').change(), a();
                var o = parseFloat(e.attr("data-price"));
                return isNaN(o) && (o = 0), s.extraSetPrice(t, o), !1;
            });
        var p = e.find(".box_position_logos");
        p.on("click", "label", function () {
            return (
                p.find("label.checked").removeClass("checked"),
                $(this).addClass("checked"),
                $("input", p).prop("checked", !1),
                $("input", $(this)).prop("checked", !0),
                "" != $('input[name="' + t + '[logo]"]').val() && (l = !0),
                i(e),
                $("input", $(this)).change(),
                !1
            );
        }),
            $(".list_common_color", e).on("click", ".common_color", function () {
                $(this).parent().find(".common_color.checked").removeClass("checked");
                var r = $(this).attr("rel");
                return $(this).parent().find("input").val(r), $(this).addClass("checked"), "" != $('input[name="' + t + '[logo]"]').val() && (l = !0), i(e), $(this).parent().find("input").change(), !1;
            });
    }),
    (Garment.prototype.initExtra_threads = function (t, e) {
        var i = this;
        e.on("click", ".option_trigger", function () {
            i.closeInitialsImage(), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(".button_holes_section").removeClass("active");
            var t = $(this).attr("rel");
            t
                ? ((i.buttons_holes_opened = !0), $(".buttonholes_color").addClass("active"), "lapel" != t && $(".buttonthreads_color").addClass("active"))
                : ($("input", e).val(""), $(".list_common_color .common_color", e).removeClass("checked"));
            var r = this.getAttribute("rel");
            $(this).parent().find("input").val(r).change(), "man_polo" == i.product_type && i.renderDraw();
            var a = $(this).attr("views");
            a && ((a = a.split(",")), i.inArray(i.current.view, a) || i.changeView(a[0]));
        }),
            $("input", e).change(function () {
                i.trigger("changeButtonHoles" + t, [e]);
            }),
            this.bind("changeButtonHoles" + t, function (e) {
                i.saveExtraBoxButtonsHoles(t, e);
            }),
            $(".list_common_color", e).on("click", ".common_color", function () {
                $(this).parent().find(".common_color.checked").removeClass("checked");
                var t = $(this).attr("rel");
                return $(this).parent().find("input").val(t).change(), $(this).addClass("checked"), $(this).parent().find("input").change(), !1;
            });
    }),
    (Garment.prototype.initExtra_colors = function (t, e) {
        function i() {
            var i = !1,
                a = 0;
            "contrasts" == t
                ? ($(".colors_section.active", e).each(function () {
                      $("input", this).each(function () {
                          "" != $(this).val() && ++a;
                      });
                  }),
                  a >= 1 && (i = !0))
                : ($(".colors_section.active", e).each(function () {
                      "" != $("input", this).val() && ++a;
                  }),
                  1 == a && (i = !0)),
                i
                    ? ((price = parseFloat(e.attr("data-price"))),
                      (rel = $(".option_trigger.active", e).attr("rel")),
                      isNaN(price) && (price = 0),
                      r.extraSetPrice(t, price),
                      void 0 !== r.product_config[t].contrast && r.relationsApply(t + "[contrast]", r.product_config[t].contrast[rel]))
                    : ((rel = parseFloat(e.attr("rel"))), r.extraSetPrice(t, 0), void 0 !== r.product_config[t].contrast && r.relationsApply(t + "[contrast]", r.product_config[t].contrast[rel]));
        }
        if ("buttons" == t) return !1;
        var r = this;
        e.on("click", ".option_trigger", function () {
            r.closeInitialsImage(), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(".colors_section", e).removeClass("active");
            var i = $(this).attr("rel");
            i ? $(".colors_section", e).addClass("active") : ($("input", e).val(""), $(".list_common_color .common_color", e).removeClass("checked"));
            var a = this.getAttribute("rel");
            $(this).parent().find("input").val(a).change(), "quilted_waistcoat" == t && i && $('.common_color[rel="100"] .box_color', e).click(), "contrast_collar" == t && i && $(".box_color", e).first().click();
            var o = $(this).attr("views");
            o && ((o = o.split(",")), r.inArray(r.current.view, o) || r.changeView(o[0])), void 0 !== r.product_config[t].contrast && r.relationsApply(t + "[contrast]", r.product_config[t].contrast[i]);
        }),
            $("input", e).change(function () {
                i();
            }),
            $(".list_common_color", e).on("click", ".common_color", function () {
                r.closeInitialsImage(), $(this).parent().find(".common_color.checked").removeClass("checked");
                var t = $(this).attr("rel");
                $(this).parent().find("input").val(t).change(), $(this).addClass("checked");
                var i = $(".option_trigger.active", e).attr("views");
                return i && ((i = i.split(",")), r.inArray(r.current.view, i) || r.changeView(i[0])), !1;
            });
    }),
    (Garment.prototype.set_extra_fabric = function (t, e, i, r) {
        var a = this,
            o = e.attr("rel");
        $('input[name="' + t + '[contrast]"]', i).val(o), r && $('input[name="' + t + '[fabric_id]"]', i).val(r), $(".option_trigger", i).removeClass("active"), e.addClass("active");
        var n = parseFloat($("#" + t).attr("data-price"));
        isNaN(n) && (n = 0),
            a.extraSetPrice(t, n),
            $('input[name="' + t + '[contrast]"]', i)
                .val(o)
                .change(),
            void 0 !== a.product_config[t][o] && a.relationsApply(t + "[contrast]", a.product_config[t][o]);
    }),
    (Garment.prototype.set_extra_lining = function (t, e, i, r, a) {
        var o = this,
            n = e.attr("rel");
        if (($('input[name="' + t + '[contrast]"]', i).val(n), r && $('input[name="' + t + '[lining_id]"]', i).val(r), $(".option_trigger", i).removeClass("active"), e.addClass("active"), "waistcoat_lining_back" == o.id_box_opt_fabric))
            c = parseFloat(e.attr("data-price"));
        else if ("unlined" == n) c = parseFloat($(".lining", a).attr("data-price-piping"));
        else if (a) c = parseFloat($(".lining", a).attr("data-price"));
        else var c = parseFloat($("#" + t).attr("data-price"));
        isNaN(c) && (c = 0);
        var s = "lining";
        "unlined" == n && ((s = "unlined"), (o.has_extra_unlined = "personalized")),
            $(".image", a).hasClass("default_" + s) && (c = null),
            "unlined" == n ? o.extraSetPrice("piping", c) : (o.extraSetPrice("piping", 0), o.extraSetPrice(t, c)),
            $('input[name="' + t + '[contrast]"]', i)
                .val(n)
                .change(),
            void 0 !== o.product_config[t][n] && o.relationsApply(t + "[contrast]", o.product_config[t][n]);
    }),
    (Garment.prototype.initExtra_fabrics = function (t, e) {
        var i = this,
            r = $("#extra", i.container),
            a = (r.find(".fabric_options"), r.find(".fabric_options_fix"), $(".extra_fabrics", i.container));
        a.find(".fabric_list").find(".fabric_box"), $(".filters.extra_step", i.container).find(".menu_filter").find(".filter li"), r.find(".active_filters").find("ul");
        e.on("click", ".option_trigger", function () {
            i.closeThumbFabric(), i.closeInitialsImage(), i.closeSeersuckerWarning(), (i.id_box_opt_fabric = $(this).parent().attr("id"));
            var e = $(this).attr("views");
            if ((e && ((e = e.split(",")), i.inArray(i.current.view, e) || i.changeView(e[0])), (option_fabric_trigger_selected = $(this)), $(this).hasClass("fabric_activator"))) {
                (i.last_change = $(this).parent().attr("id")),
                    (i.extra_fabrics_active = !0),
                    (i.current_fabric_activator_parent = $(this).parent()),
                    i.current_fabric_activator_parent.removeClass("active"),
                    $(".fabric_box.checked", a).removeClass("checked");
                var r = $('input[name="' + i.id_box_opt_fabric + '[fabric_id]"]', i.current_fabric_activator_parent).val();
                $('.fabric_box [rel="' + r + '"]', a)
                    .parent()
                    .addClass("checked"),
                    r && i.set_extra_fabric(i.id_box_opt_fabric, option_fabric_trigger_selected, i.current_fabric_activator_parent, r),
                    a.addClass("active"),
                    setTimeout(function () {
                        i.bLazy_fabric && i.bLazy_fabric.revalidate();
                    }, 200),
                    i.scrolltoFabric(".extra_fabrics");
                var o = $(this).attr("rel");
                return "cuffs_fabric" == t && "inner" == o && (i.changeView("front"), i.change_style_shirt("inner_sleeve")), !1;
            }
            $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");
            option_fabric_trigger_selected.attr("rel");
            $('input[name="' + i.id_box_opt_fabric + '[fabric_id]"]', $(this).parent()).val(""),
                $('input[name="' + i.id_box_opt_fabric + '[contrast]"]', $(this).parent()).val(""),
                i.extraSetPrice(t, 0),
                i.keychain_isset(i.out_of_stock_control, ["extras", "fabric", t]) && delete i.out_of_stock_control.extras.fabric[t],
                $('input[name="' + i.id_box_opt_fabric + '[fabric_id]"]', $(this).parent())
                    .val("")
                    .change();
        });
    }),
    (Garment.prototype.initExtra_lining = function (t, e) {
        var i = this;
        i.has_extra_lining = !1;
        var r = $("#extra", i.container),
            a = (r.find(".fabric_options"), r.find(".fabric_options_fix"), $(".extra_linings", i.container)),
            o = a.find(".lining_list");
        o.find(".lining_box"), $(".filters.extra_step", i.container).find(".menu_filter").find(".filter li"), r.find(".active_filters").find("ul");
        e.on("click", ".option_trigger", function () {
            (i.has_extra_unlined = !1),
                o.removeClass("unlined_mode"),
                o.removeClass("lining_mode"),
                i.closeThumbFabric(),
                i.closeSeersuckerWarning(),
                i.closeInitialsImage(),
                (i.id_box_opt_fabric = $(this).parent().attr("id")),
                (option_fabric_trigger_selected = $(this));
            var e = option_fabric_trigger_selected.attr("rel"),
                r = $(this).attr("views");
            if ((r && ((r = r.split(",")), i.inArray(i.current.view, r) || i.changeView(r[0])), $(this).hasClass("lining_activator"))) {
                o.addClass("lining_mode"),
                    (s = $(this).attr("filter")) && (a.removeClass("personalizado"), a.removeClass("padded"), a.removeClass("detachable_waistcoat"), a.addClass(s)),
                    (i.extra_linings_active = !0),
                    (i.current_fabric_activator_parent = $(this).parent()),
                    i.current_fabric_activator_parent.removeClass("active"),
                    $(".lining_box.checked", a).removeClass("checked");
                n = $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]', i.current_fabric_activator_parent).val();
                return (
                    $('.lining_box [rel="' + n + '"]', a)
                        .parent()
                        .addClass("checked"),
                    "waistcoat_lining_back" == i.id_box_opt_fabric
                        ? ($(".lining_list").addClass("waistcoat_lining_back"), $(".lining_list .price").removeClass("active"), $(".lining_list .diamond").removeClass("active"))
                        : ($(".lining_list").removeClass("waistcoat_lining_back"), $(".lining_list .price").addClass("active"), $(".lining_list .diamond").addClass("active")),
                    a.addClass("active"),
                    tablet_device || a.perfectScrollbar("update"),
                    setTimeout(function () {
                        i.bLazy_fabric && i.bLazy_fabric.revalidate();
                    }, 200),
                    void 0 !== i.product_config[i.id_box_opt_fabric] && void 0 !== i.product_config[i.id_box_opt_fabric].options && i.relationsApply(i.id_box_opt_fabric + "[contrast]", i.product_config[i.id_box_opt_fabric].options[e]),
                    i.id_box_opt_fabric.indexOf("waistcoat") > -1
                        ? ($(".lining_list .image").removeClass("default_unlined"), $(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + i.current.fabric.waistcoat_lining_id).addClass("default_lining"))
                        : ($(".lining_list .image").removeClass("default_lining"),
                          $(".lining_box .lining_" + i.current.fabric.lining_id).addClass("default_lining"),
                          $(".lining_list .image").removeClass("default_unlined"),
                          $(".lining_box .lining_" + i.current.fabric.unlined_lining).addClass("default_unlined")),
                    !1
                );
            }
            if ($(this).hasClass("lining_unlined")) {
                "coat_lining" == i.current_extra_option && !i.unlined_coat_alert && i.step, (i.has_extra_unlined = "default"), (i.extra_linings_active = !0);
                var n = $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]', i.current_fabric_activator_parent).val(),
                    c = $('input[name="' + i.id_box_opt_fabric + '[contrast]"]', i.current_fabric_activator_parent).val();
                $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");
                l = parseFloat($(this).attr("data-price"));
                i.keychain_isset(i.out_of_stock_control, ["extras", "lining", t]) && delete i.out_of_stock_control.extras.lining[t],
                    $('input[name="' + i.id_box_opt_fabric + '[contrast]"]')
                        .val("unlined")
                        .change(),
                    o.addClass("unlined_mode");
                var s = $(this).attr("filter");
                s && (a.removeClass("personalizado"), a.removeClass("padded"), a.removeClass("detachable_waistcoat"), a.addClass(s)),
                    (i.current_fabric_activator_parent = $(this).parent()),
                    i.current_fabric_activator_parent.removeClass("active"),
                    a.addClass("active"),
                    tablet_device || a.perfectScrollbar("update"),
                    $(".lining_box.checked", a).removeClass("checked"),
                    (n && "unlined" == c) || (n = i.current.fabric.unlined_lining),
                    "waistcoat_lining_back" == i.id_box_opt_fabric
                        ? ($(".lining_list .price").removeClass("active"), $(".lining_list .diamond").removeClass("active"))
                        : ($(".lining_list .price").addClass("active"), $(".lining_list .diamond").addClass("active")),
                    $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]').val(n),
                    $('.lining_box [rel="' + n + '"]', a)
                        .parent()
                        .addClass("checked"),
                    i.extraSetPrice(t, l),
                    i.renderDraw(),
                    setTimeout(function () {
                        i.bLazy_fabric && i.bLazy_fabric.revalidate();
                    }, 200),
                    void 0 !== i.product_config[i.id_box_opt_fabric] && void 0 !== i.product_config[i.id_box_opt_fabric].options && i.relationsApply(i.id_box_opt_fabric + "[contrast]", i.product_config[i.id_box_opt_fabric].options[e]),
                    i.id_box_opt_fabric.indexOf("waistcoat") > -1
                        ? ($(".lining_list .image").removeClass("default_unlined"), $(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + i.current.fabric.waistcoat_lining_id).addClass("default_lining"))
                        : ($(".lining_list .image").removeClass("default_lining"),
                          $(".lining_box .lining_" + i.current.fabric.lining_id).addClass("default_lining"),
                          $(".lining_list .image").removeClass("default_unlined"),
                          $(".lining_box .lining_" + i.current.fabric.unlined_lining).addClass("default_unlined"));
            } else if ($(this).hasClass("same_as_front")) {
                o.addClass("lining_mode"), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");
                var l = parseFloat($(this).attr("data-price"));
                $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]').val(i.current.fabric.man_waistcoat),
                    $('input[name="' + i.id_box_opt_fabric + '[contrast]"]')
                        .val("same_as_front")
                        .change(),
                    i.extraSetPrice(t, l),
                    i.keychain_isset(i.out_of_stock_control, ["extras", "lining", t]) && delete i.out_of_stock_control.extras.lining[t],
                    i.renderDraw(),
                    void 0 !== i.product_config[i.id_box_opt_fabric] && void 0 !== i.product_config[i.id_box_opt_fabric].options && i.relationsApply(i.id_box_opt_fabric + "[contrast]", i.product_config[i.id_box_opt_fabric].options[e]);
            } else
                $(this).parent().find(".option_trigger").removeClass("active"),
                    $(this).addClass("active"),
                    $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]', $(this).parent()).val(""),
                    $('input[name="' + i.id_box_opt_fabric + '[contrast]"]', $(this).parent()).val(""),
                    i.extraSetPrice(t, 0),
                    i.extraSetPrice("unlined", 0),
                    i.extraSetPrice("piping", 0),
                    i.keychain_isset(i.out_of_stock_control, ["extras", "lining", t]) && delete i.out_of_stock_control.extras.lining[t],
                    $('input[name="' + i.id_box_opt_fabric + '[lining_id]"]', $(this).parent())
                        .val("")
                        .change(),
                    void 0 !== i.product_config[i.id_box_opt_fabric] && void 0 !== i.product_config[i.id_box_opt_fabric].options && i.relationsApply(i.id_box_opt_fabric + "[contrast]", i.product_config[i.id_box_opt_fabric].options[e]);
        });
    }),
    (Garment.prototype.resize_render_viewport_init = function () {
        var t = this.render_info.viewport;
        (this.current_view = ""), (this.current_product = ""), (this.current_view_ratio = ""), (this.viewport_full = {}), (this.viewport_zoom = {}), (this.viewport = t);
        var e = $(window).width();
        for (var i in t) {
            this.current_view || (this.current_view = i), (this.viewport_full[i] = { w: 0, h: 0, top: this.viewport[i].base.h }), (this.viewport[i].base.ratio = 0);
            for (var r in this.viewport[i])
                "base" != r &&
                    ((this.viewport[i][r].ratio = this.viewport[i][r].h / this.viewport[i][r].w),
                    this.current_product || (this.current_product = r),
                    this.viewport[i].base.ratio < this.viewport[i][r].ratio && (this.viewport[i].base.ratio = this.viewport[i][r].ratio),
                    this.viewport[i][r].w > this.viewport_full[i].w && (this.viewport_full[i].w = this.viewport[i][r].w),
                    this.viewport[i][r].h + this.viewport[i][r].top > this.viewport_full[i].h && (this.viewport_full[i].h = this.viewport[i][r].h + this.viewport[i][r].top),
                    this.viewport[i][r].top < this.viewport_full[i].top && (this.viewport_full[i].top = this.viewport[i][r].top));
            (this.viewport_full[i].h = this.viewport_full[i].h - this.viewport_full[i].top), (this.viewport_full[i].ratio = this.viewport_full[i].h / this.viewport_full[i].w);
            var a = e / this.viewport[i].base.w;
            a > 2 && (a = 2), (this.viewport_zoom[i] = {}), (this.viewport_zoom[i].h = Math.round(this.viewport[i].base.h * a)), (this.viewport_zoom[i].w = Math.round(this.viewport[i].base.w * a));
        }
    }),
    (Garment.prototype.resize_render_viewport = function (t, e, i) {
        function r(t, e, i, r) {
            var a = { width: 0, left: 0, top: 0 };
            return t < e ? ((a.width = r / e), (a.left = (i - a.width) / 2)) : (a.width = i), a;
        }
        var a = this;
        if (void 0 !== this.viewport && void 0 !== this.viewport[this.current.view]) {
            var o = $("#available_window"),
                n = o.find(".viewport"),
                c = o.height(),
                s = o.width(),
                l = c / s;
            if ("full" == a.current_product) {
                var _ = (u = r(l, a.viewport_full[a.current.view].ratio, s, c)).width / a.viewport_full[a.current.view].w,
                    p = a.viewport_full[a.current.view].h * _;
                u.top = -a.viewport_full[a.current.view].top * _;
            } else {
                var u = r(l, a.viewport[a.current.view].base.ratio, s, c),
                    _ = u.width / a.viewport[a.current.view].base.w,
                    p = a.viewport[a.current.view][a.current_product].h * _;
                u.top = -a.viewport[a.current.view][a.current_product].top * _;
            }
            if (
                (p < c && (u.top += (c - p) / 2),
                u.top > 0 && (u.top = 0),
                $("form.garment_form").hasClass("hide_face") &&
                    ("man_smoking" == this.product_type || "man_suit2" == this.product_type || "man_chaque" == this.product_type || "man_frac" == this.product_type || "man_levita" == this.product_type) &&
                    ("man_jacket" == this.current_product || "man_levita" == this.current_product || "man_frac" == this.current_product || "man_chaque" == this.current_product) &&
                    ("front" == a.current.view || "back" == a.current.view))
            ) {
                var d = 0.3 * p;
                "back" != a.current.view ||
                    ("man_smoking" != this.product_type && "man_suit2" != this.product_type && "man_chaque" != this.product_type && "man_frac" != this.product_type && "man_levita" != this.product_type) ||
                    (d = 0.2 * p),
                    (u.top = u.top - d);
            }
            n.css(u);
        }
    }),
    (Garment.prototype.updateConfiguratedProduct = function (t) {
        function e(t, e) {
            for (var i = e.length, r = 0; r < i; r++) if (e[r] == t) return !0;
            return !1;
        }
        function i(t, e, i) {
            var r = {};
            for (var a in t) r[a] = t[a];
            for (var a in e) r[a] = e[a];
            for (var a in i) r[a] = i[a];
            return r;
        }
        var r = this,
            a = $("#config", r.container),
            o = $("#fabric", r.container),
            n = $("#extra", r.container);
        if ("man_polo" == this.product_type) n = $("#config", r.container);
        "default" == t && (product = this.current);
        var c = !1;
        void 0 !== product.config.pants_chinos && (c = product.config.pants_chinos),
            "man_pants" == r.product_type && "1" == c
                ? ($(".fabric_options_fix").hide(), $(".fabric_list").css("margin-top", "0px"), $('.option_trigger[rel="rounded"]').hide())
                : "man_pants" == r.product_type && "1" != c
                ? ($('.filters .filter li[rel="cotton"]').hide(), $('.option_trigger[rel="rounded_chinos"]').hide(), $('#fabric .fabric_box .image a[simple_composition="cotton"]').parent().parent().remove())
                : $('.option_trigger[rel="rounded_chinos"]').hide();
        var s = product.config;
        if (s) {
            void 0 !== r.product_config.coat_model && r.relationsApply("coat_model", r.product_config.coat_model[s.coat_model]), $(".option_trigger", a).removeClass("active");
            for (k in s)
                if ("_active_block" != k) {
                    if (((r.current.config[k] = s[k]), "shirt_neck_no_interfacing" == k || "shirt_neck_buttons" == k || "ballena_removible" == k))
                        $('input[name="' + k + '"]', a).each(function () {
                            var t = $(this).val();
                            t == s[k]
                                ? ($(this).parent().addClass("checked"), $(this).attr("checked", !0), "shirt_neck_no_interfacing" == k && $("label#cuff_interfacing_" + t).addClass("checked"))
                                : ($(this).parent().removeClass("checked"), $(this).attr("checked", !1), "shirt_neck_no_interfacing" == k && $("label#cuff_interfacing_" + t).removeClass("checked"));
                        });
                    else if ("jacket_pockets_type" == k || "smoking_pockets_type" == k)
                        (h = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a)).addClass("active"),
                            h.hasClass("slanted") && $("#jacket_pockets_type").addClass("slanted"),
                            h.hasClass("slanted") && $("#smoking_pockets_type").addClass("slanted"),
                            $('input[name="' + k + '"]', a).val(s[k]);
                    else if ("waistcoat" == k && "1" == s[k])
                        if ("man_levita" == r.product_type || "man_frac" == r.product_type || "man_chaque" == r.product_type) {
                            f = $("#input_waistcoat").attr("price");
                            (f = parseFloat(f)), r.convetToCeremonial3(f, !0);
                        } else {
                            f = $("#input_waistcoat").attr("price");
                            (f = parseFloat(f)), r.convetToSuit3(f, !1);
                        }
                    else if ("jacket_style_combined" == k) {
                        _ = 2;
                        (_ = "mao" == (l = (p = s[k].split("_"))[0]) ? 5 : p[1]),
                            (r.current.config.jacket_style = l),
                            (r.current.config.jacket_buttons = _),
                            (r.current.config.jacket_style_combined = "mao" == l ? l : l + "_" + _),
                            $('input[name="jacket_style_combined"]', a).val(r.current.config.jacket_style_combined);
                    } else if ("smoking_style_combined" == k) {
                        var l = (p = s[k].split("_"))[0],
                            _ = 2;
                        (_ = "mao" == l ? 5 : p[1]),
                            (r.current.config.tuxedo_style = l),
                            (r.current.config.smoking_buttons = _),
                            (r.current.config.smoking_style_combined = l + "_" + _),
                            $('input[name="smoking_style_combined"]', a).val(r.current.config.smoking_style_combined);
                    } else if ("waistcoat_style_combined" == k) {
                        var p = s[k].split("_"),
                            u = p[0],
                            d = p[1];
                        (r.current.config.waistcoat_style = u),
                            (r.current.config.waistcoat_buttons = d),
                            (r.current.config.waistcoat_style_combined = u + "_" + d),
                            $('input[name="waistcoat_style_combined"]', a).val(r.current.config.waistcoat_style_combined);
                    } else $('input[name="' + k + '"]', a).val(s[k]);
                    if (
                        ($('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).addClass("active"),
                        $('.subbox_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).addClass("active"),
                        (f = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price")) || (f = $('.subbox_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price")),
                        "ballena_removible" == k && (f = $('.lining.option[name="ballena_removible"] .check_button[rel="' + s[k] + '"]', a).attr("price")),
                        f > 0 && ((r.price_detail[k] = f), r.updatePrice()),
                        $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).hasClass("special_type"))
                    ) {
                        var f = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price_color");
                        $(".colors_section .color_block." + s[k], '.box_opt[id="' + k + '"]').addClass("active"),
                            $(".colors_section .color_block." + s[k] + ' .common_color[rel="' + s[k + "_color"] + '"]', '.box_opt[id="' + k + '"]').addClass("checked"),
                            f > 0 && ((r.price_detail[k] = f), r.updatePrice());
                    }
                    var h = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a);
                    if (
                        (h.parent().attr("icon-fixed") || r.change_icon_trigger(h, $(".container_options", a)),
                        void 0 !== r.product_config[k] && "coat_model" != k && r.relationsApply(k, r.product_config[k][s[k]]),
                        "pants_crotch" == k || "pants_break" == k)
                    ) {
                        var b = h.attr("detail_txt");
                        $("#" + k + " .pants_desc_detail").html(b);
                    }
                }
        }
        var m = ["shirt_neck", "shirt_cuff", "shirt_patches", "blouse_neck", "blouse_cuff", "neck_fabric", "cuffs_fabric"],
            v = ["shirt_threads", "blouse_threads", "jacket_threads", "button_holes_threads", "waistcoat_button_holes_threads", "coat_threads", "threads"],
            g = ["coat_lining", "lining", "waistcoat_lining", "waistcoat_lining_back"],
            w = ["patches"],
            y = ["tuxedo", "type_flap"];
        if ("man_suit2" == r.product_type && void 0 !== product.extras && void 0 !== product.extras.man_jacket) x = i(product.extras.man_jacket, product.extras.man_pants, product.extras.man_waistcoat);
        else if (("man_levita" != r.product_type && "man_chaque" != r.product_type && "man_frac" != r.product_type) || void 0 === product.extras || void 0 === product.extras.man_jacket) x = product.extras;
        else var x = i(product.extras.man_jacket, product.extras.man_pants, product.extras.man_waistcoat);
        if ((jQuery.isEmptyObject(x) && (x = this.current.extras), x))
            for (k in x)
                if (k.indexOf("initials") > -1 || k.indexOf("logos") > -1) {
                    var C = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraInitials(x[k], C, k);
                } else if (e(k, m)) {
                    S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraFabric(k, x[k], S);
                } else if (e(k, w) && "man_shirt" == r.product_type) {
                    S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraPatches(k, x[k], S);
                } else if (e(k, v)) {
                    S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraThreads(k, x[k], S);
                } else if (e(k, g)) {
                    S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraLining(k, x[k], S);
                } else if (e(k, y)) {
                    S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraStandart(k, x[k], S);
                } else {
                    var S = $('.box_opt[id="' + k + '"]', n);
                    r.updateExtraOther(k, x[k], S);
                }
        var j = product.fabric;
        if ((j || (j = this.current), j)) {
            var T = r.product_type;
            if ("woman_suitpants" == T || "woman_suitskirt" == T || "man_suit" == T || "man_suit2" == T || "man_suit3" == T || "man_levita" == T || "man_frac" == T || "man_chaque" == T) {
                var z = j[r.multi_fabric_options[0]],
                    I = j[r.multi_fabric_options[1]],
                    A = j[r.multi_fabric_options[2]];
                (r.current.fabric[r.multi_fabric_options[0]] = z), (r.current.fabric[r.multi_fabric_options[1]] = I), (r.current.fabric[r.multi_fabric_options[2]] = A);
                var O = !1;
                if ((z != I && (O = !0), A && z != A && (O = !0), O)) {
                    if (($('#personalize_fabrics_split .option_trigger[rel="1"]', r.container).click(), !(S = $('.fabric_list .fabric_box div[rel="' + z + '"]')).length)) {
                        E = $("#fabric .fabric_list .fabric_box.active div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[0]] = E), (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    if (!(P = $('.fabric_list .fabric_box div[rel="' + I + '"]')).length) {
                        E = $("#fabric .fabric_list .fabric_box.active div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[1]] = E), (P = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    if (((r.multi_fabric_active = r.multi_fabric_options[1]), r.fabricSelect(o, P.parent(), !1), A)) {
                        if (!(A = $('.fabric_list .fabric_box div[rel="' + A + '"]')).length) {
                            E = $("#fabric .fabric_list .fabric_box.active div.image").first().attr("rel");
                            (r.current.fabric[r.multi_fabric_options[2]] = E), (A = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                        }
                        (r.multi_fabric_active = r.multi_fabric_options[2]), r.fabricSelect(o, A.parent(), !1);
                    }
                    (r.multi_fabric_active = r.multi_fabric_options[0]), r.fabricSelect(o, S.parent());
                } else {
                    if (!(S = $('.fabric_list .fabric_box div[rel="' + z + '"]')).length) {
                        E = $("#fabric .fabric_list .fabric_box.active div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[0]] = E),
                            (r.current.fabric[r.multi_fabric_options[1]] = E),
                            (r.current.fabric[r.multi_fabric_options[2]] = E),
                            (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    r.fabricSelect(o, S.parent());
                }
            } else if ("man_smoking" == T) {
                var z = j[r.multi_fabric_options[0]],
                    I = j[r.multi_fabric_options[1]];
                if (((r.current.fabric[r.multi_fabric_options[0]] = z), (r.current.fabric[r.multi_fabric_options[1]] = I), z != I)) {
                    if (($('#personalize_fabrics_split .option_trigger[rel="1"]', r.container).click(), !(S = $('.fabric_list .fabric_box div[rel="' + z + '"]')).length)) {
                        E = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[0]] = E), (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    var P = $('.fabric_list .fabric_box div[rel="' + I + '"]');
                    if (!P.length) {
                        E = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[1]] = E), (P = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    (r.multi_fabric_active = r.multi_fabric_options[1]), r.fabricSelect(o, P.parent()), (r.multi_fabric_active = r.multi_fabric_options[0]), r.fabricSelect(o, S.parent());
                } else {
                    if (!(S = $('.fabric_list .fabric_box div[rel="' + z + '"]')).length) {
                        E = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");
                        (r.current.fabric[r.multi_fabric_options[0]] = E), (r.current.fabric[r.multi_fabric_options[1]] = E), (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                    }
                    r.fabricSelect(o, S.parent());
                }
            } else if (("man_fieldjacket" != T && "man_polo" != T && "man_shirt" != T && "man_jacket" != T && "man_pants" != T && "man_waistcoat" != T) || "default" == t) {
                L = j[T];
                if (((r.current.fabric[T] = L), !(S = $('#fabric .fabric_list .fabric_box div[rel="' + L + '"]')).length)) {
                    E = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");
                    (r.current.fabric[T] = E), (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                }
                r.fabricSelect(o, S.parent());
            } else {
                var L = j.id_t4l_fabric;
                if (((r.current.fabric[T] = L), !(S = $('#fabric .fabric_list .fabric_box div[rel="' + L + '"]')).length || S.hasClass("out_of_stock"))) {
                    var E = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");
                    (r.current.fabric[T] = E), (S = $('#fabric .fabric_list .fabric_box div[rel="' + E + '"]'));
                }
                r.fabricSelect(o, S.parent());
            }
        }
        if ("man_coat" == r.product_type) {
            let t = "";
            void 0 !== r.current.extras.coat_lining.contrast && (t = r.current.extras.coat_lining.contrast),
                "unlined" == t
                    ? $('.box_opt[id="mode"] .option_trigger[rel="light"]').click()
                    : "padded" == t
                    ? $('.box_opt[id="mode"] .option_trigger[rel="winter"]').click()
                    : "detachable_waistcoat" == t
                    ? $('.box_opt[id="mode"] .option_trigger[rel="winter_detachable"]').click()
                    : $('.box_opt[id="mode"] .option_trigger[rel="normal"]').click();
        }
        r.productLoadedOk = !0;
    }),
    (Garment.prototype.updateExtraInitials = function (t, e, i) {
        if (0 != t.length) {
            var r = this;
            if ((i.indexOf("initials") > -1 && $('input[name="' + i + '[text]"]', e).val(t.text), i.indexOf("initials") > -1)) {
                $('input[name="' + i + '[type]"]', e).prop("checked", !1),
                    $('input[name="' + i + '[type]"]', e)
                        .parent()
                        .removeClass("checked");
                var a = $('input[name="' + i + '[type]"][value="' + t.type + '"]');
                if (0 == a.length) {
                    var o = (a = $('.box_font_initial input[name="' + i + '[type]"]').first()).val();
                    t.type = o;
                }
                a.prop("checked", !0).parent().addClass("checked"), "man_polo" == r.product_type && $(".options_list li.logos").hide();
            } else $('.box_logos .logo[rel="' + t.logo + '"]', e).addClass("checked"), $(".box_logos input", e).val(t.logo), "man_polo" == r.product_type && ($(".remove_logo").addClass("active"), $(".options_list li.initials").hide());
            $("div.common_color", e).removeClass("checked"),
                $('input[name="' + i + '[color_custom]"]', e).val(t.color_custom),
                $('div.common_color[rel="' + t.color_custom + '"]', e).addClass("checked"),
                $('input[name="' + i + '[pos]"]', e).prop("checked", !1),
                $('input[name="' + i + '[pos]"]', e)
                    .parent()
                    .removeClass("checked"),
                $('input[name="' + i + '[pos]"][value="' + t.pos + '"]')
                    .prop("checked", !0)
                    .parent()
                    .addClass("checked");
            var n = parseFloat(e.attr("data-price"));
            isNaN(n) && (n = 0),
                r.extraSetPrice(i, n),
                i.indexOf("initials") > -1
                    ? ((r.current.extras[i].text = t.text), (r.current.extras[i].color_custom = t.color_custom), (r.current.extras[i].type = t.type), (r.current.extras[i].pos = t.pos))
                    : ((r.current.extras[i].color_custom = t.color_custom), (r.current.extras[i].pos = t.pos), (r.current.extras[i].logo = t.logo)),
                "man_coat" != this.product_type && "man_trenchcoat" != this.product_type && r.renderInitials(),
                "man_polo" == this.product_type && "logos" == i && r.renderDraw();
        }
    }),
    (Garment.prototype.updateExtraFabric = function (t, e, i) {
        if (0 != e.length) {
            var r = this,
                a = "";
            $(".option_trigger", i).removeClass("active"),
                "man_shirt" == r.product_type
                    ? e.id_t4l_fabric.in && e.id_t4l_fabric.out
                        ? ((a = "full"), $('input[name="' + t + '[contrast]"]', i).val(a), $('input[name="' + t + '[fabric_id]"]', i).val(e.id_t4l_fabric.in), $('.option_trigger[rel="full"]', i).addClass("active"))
                        : e.id_t4l_fabric.in
                        ? ((a = "inner"), $('input[name="' + t + '[contrast]"]', i).val(a), $('input[name="' + t + '[fabric_id]"]', i).val(e.id_t4l_fabric.in), $('.option_trigger[rel="inner"]', i).addClass("active"))
                        : e.id_t4l_fabric.out && ((a = "outer"), $('input[name="' + t + '[contrast]"]', i).val(a), $('input[name="' + t + '[fabric_id]"]', i).val(e.id_t4l_fabric.out), $('.option_trigger[rel="outer"]', i).addClass("active"))
                    : ($('input[name="' + t + '[contrast]"]', i).val(e.contrast), $('input[name="' + t + '[fabric_id]"]', i).val(e.fabric_id), $('.option_trigger[rel="' + e.contrast + '"]', i).addClass("active"));
            var o = parseFloat($("#" + t).attr("data-price"));
            r.extraSetPrice(t, o), void 0 !== r.product_config[t] && r.relationsApply(t, r.product_config[t][a]);
        } else $(".option_trigger.zero_value", i).addClass("active");
    }),
    (Garment.prototype.updateExtraPatches = function (t, e, i) {
        if (0 != e.length) {
            var r = this;
            $(".option_trigger", i).removeClass("active"), $('input[name="' + t + '[contrast]"]', i).val("custom"), $('input[name="' + t + '[fabric_id]"]', i).val(e.id_t4l_fabric), $('.option_trigger[rel="custom"]', i).addClass("active");
            var a = parseFloat($("#" + t).attr("data-price"));
            r.extraSetPrice(t, a);
        } else $(".option_trigger.zero_value", i).addClass("active");
    }),
    (Garment.prototype.updateExtraStandart = function (t, e, i) {
        var r = this;
        if (0 == e.length) return $(".option_trigger.zero_value", i).addClass("active"), void ("type_flap" == t && void 0 !== r.product_config[t].contrast.default && r.relationsApply(t, r.product_config[t].contrast.default));
        $('input[name="' + t + '"]', i).val(e), $(".option_trigger.active", i).removeClass("active"), $('.option_trigger[rel="' + e + '"]', i).addClass("active");
        var a = parseFloat($("#" + t).attr("data-price"));
        r.extraSetPrice(t, a), void 0 !== r.product_config[t] && r.relationsApply(t, r.product_config[t][e]);
    }),
    (Garment.prototype.updateExtraOther = function (t, e, i) {
        var r = this;
        if (0 != e.length) {
            $('input[name="' + t + '[contrast]"]', i).val(e.contrast),
                "jacket_metal_button" == t
                    ? $('input[name="' + t + '[type]"]', i).val(e.type)
                    : "metal_buttons" == t
                    ? $('input[name="' + t + '[type]"]', i).val(e.type)
                    : "buttons_color" == t
                    ? $('input[name="' + t + '[type]"]', i).val(e.type)
                    : "waistcoat_metal_buttons" == t
                    ? $('input[name="' + t + '[type]"]', i).val(e.type)
                    : "contrasts" == t
                    ? ($('input[name="contrasts[contrast]"]', i).val(e.contrast),
                      $('input[name="contrasts[contrasts_flap]"]', i).val(e.contrasts_flap),
                      $('input[name="contrasts[contrasts_buttons]"]', i).val(e.contrasts_buttons),
                      $('input[name="contrasts[contrasts_pants]"]', i).val(e.contrasts_pants),
                      $('input[name="contrasts[contrasts_pockets]"]', i).val(e.contrasts_pockets))
                    : $('input[name="' + t + '[color]"]', i).val(e.color),
                $(".option_trigger.active", i).removeClass("active"),
                $('.option_trigger[rel="' + e.contrast + '"]', i).addClass("active"),
                $(".colors_section", i).addClass("active"),
                "jacket_metal_button" == t
                    ? $('.colors_section .common_color[rel="' + e.type + '"]', i).addClass("checked")
                    : "metal_buttons" == t
                    ? $('.colors_section .common_color[rel="' + e.type + '"]', i).addClass("checked")
                    : "buttons_color" == t
                    ? $('.colors_section .common_color[rel="' + e.type + '"]', i).addClass("checked")
                    : "contrasts" == t
                    ? ($('.color_block.contrasts_flap .common_color[rel="' + e.contrasts_flap + '"]', i).addClass("checked"),
                      $('.color_block.contrasts_buttons .common_color[rel="' + e.contrasts_buttons + '"]', i).addClass("checked"),
                      $('.color_block.contrasts_pants .common_color[rel="' + e.contrasts_pants + '"]', i).addClass("checked"),
                      $('.color_block.contrasts_pockets .common_color[rel="' + e.contrasts_pockets + '"]', i).addClass("checked"))
                    : $('.colors_section .common_color[rel="' + e.color + '"]', i).addClass("checked");
            var a = parseFloat($("#" + t).attr("data-price"));
            r.extraSetPrice(t, a), void 0 !== r.product_config[t] && void 0 !== r.product_config[t].contrast && r.relationsApply(t, r.product_config[t].contrast[e.contrast]);
        } else $(".option_trigger.zero_value", i).addClass("active");
    }),
    (Garment.prototype.updateExtraLining = function (t, e, i) {
        if (0 != e.length) {
            var r = this;
            if (
                ($(".option_trigger", i).removeClass("active"),
                $('input[name="' + t + '[contrast]"]', i).val(e.contrast),
                $('input[name="' + t + '[lining_id]"]', i).val(e.lining_id),
                $('.option_trigger[rel="' + e.contrast + '"]', i).addClass("active"),
                "unlined" == e.contrast)
            ) {
                r.changeView("without_model");
                var a = parseFloat($('.option_trigger[rel="' + e.contrast + '"]', i).attr("data-price")),
                    o = $(".extra_linings .lining_list .lining_box div.lining_" + e.lining_id).parent(),
                    n = parseFloat($(".lining", o).attr("data-price-piping"));
                o.find(".image").hasClass("default_unlined") && (n = null), r.extraSetPrice("piping", n);
            } else if ("same_as_front" == e.contrast) {
                r.changeView("without_model");
                a = parseFloat($('.option_trigger[rel="' + e.contrast + '"]', i).attr("data-price"));
            } else {
                a = parseFloat($("#" + t).attr("data-price"));
                if (
                    ((o = $(".extra_linings .lining_list .lining_box div.lining_" + e.lining_id).parent()).hasClass("padded") && ($(".option_trigger", i).removeClass("active"), $('.option_trigger[rel="padded"]', i).addClass("active")),
                    o.hasClass("detachable_waistcoat") && ($(".option_trigger", i).removeClass("active"), $('.option_trigger[rel="detachable_waistcoat"]', i).addClass("active")),
                    "waistcoat_lining_back" == t)
                )
                    a = parseFloat($("#waistcoat_lining_back").attr("data-price"));
                else a = parseFloat($(".lining", o).attr("data-price"));
            }
            (r.has_extra_lining = t), (r.current_fabric_activator_parent = $(".option_trigger", i).parent()), r.extraSetPrice(t, a), void 0 !== r.product_config[t] && r.relationsApply(t, r.product_config[t][""]);
        } else $(".option_trigger.zero_value", i).addClass("active");
    }),
    (Garment.prototype.updateExtraThreads = function (t, e, i) {
        var r = this;
        if (0 != e.length) {
            $(".button_holes_section", i).addClass("active"),
                $(".option_trigger.active", i).removeClass("active"),
                "man_shirt" == r.product_type
                    ? ($('.option_trigger[rel="' + e.position + '"]', i).addClass("active"),
                      $('input[name="' + t + '[contrast]"]', i).val(e.position),
                      e.apply_at && ($('.option_trigger[rel="' + e.apply_at + '"]', i).addClass("active"), $('input[name="' + t + '[contrast]"]', i).val(e.apply_at)),
                      e.buttonthreads_color && ($('.buttonthreads_color .list_common_color .common_color[rel="' + e.buttonthreads_color + '"]').addClass("checked"), $('input[name="' + t + '[threads][color]"]').val(e.buttonthreads_color)),
                      e.buttonholes_color && ($('.buttonholes_color .list_common_color .common_color[rel="' + e.buttonholes_color + '"]').addClass("checked"), $('input[name="' + t + '[holes][color]"]').val(e.buttonholes_color)))
                    : ($('.option_trigger[rel="' + e.contrast + '"]', i).addClass("active"),
                      $('input[name="' + t + '[contrast]"]', i).val(e.contrast),
                      void 0 !== e.threads &&
                          e.threads.color &&
                          ($('.buttonthreads_color .list_common_color .common_color[rel="' + e.threads.color + '"]').addClass("checked"), $('input[name="' + t + '[threads][color]"]').val(e.threads.color)),
                      void 0 !== e.holes && e.holes.color && ($('.buttonholes_color .list_common_color .common_color[rel="' + e.holes.color + '"]').addClass("checked"), $('input[name="' + t + '[holes][color]"]').val(e.holes.color)));
            var a = parseFloat($("#" + t).attr("data-price"));
            r.extraSetPrice(t, a);
        } else $(".option_trigger.zero_value", i).addClass("active");
    }),
    (Garment.prototype.initShareProduct = function () {
        function t() {
            var t = $("#share_popup2");
            $(".share_link", t).removeClass("copied");
            var r = $(".background_blur");
            if (t.hasClass("show")) return t.removeClass("show"), void r.removeClass("show");
            if (null != o.lastSharedUrl) return t.addClass("show"), void r.addClass("show");
            t.addClass("show"),
                r.addClass("show"),
                $(".actions", t).addClass("hide"),
                $(".loading", t).addClass("visible"),
                o.cleanInputAutoDelete(),
                $(o.container).append('<input type="hidden" name="next_share_product" value="1" class="input_auto_delete"/>');
            var a = $("form").serialize(),
                n = window.location.origin + "/" + region + "/services/personalize/" + o.product_type + "?ajax=1";
            e(),
                $.ajax({
                    type: "POST",
                    url: n,
                    data: a,
                    success: function (e) {
                        if (e) {
                            if ("error" == e) return void t.removeClass("show");
                            var r = (e = JSON.parse(e)).url_product;
                            (o.lastSharedUrl = e.url_product), $(".share_link", t).attr("href", r);
                            var a = e.product_title;
                            $(".product_title", t).html(a),
                                $(".native", t).attr("data-link", r),
                                $(".native", t).attr("data-title", a),
                                i(e.id_product),
                                dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "share", eventLabel: "desktop" });
                        }
                    },
                });
        }
        function e() {
            var t = document.getElementById("available_window"),
                e = $(".viewport", t).get(0);
            ("man_chino" != o.product_type && "man_jeans" != o.product_type && "man_shoe" != o.product_type) || (e = $("#canvas_render", t).get(0));
            var i = e.offsetTop,
                n = 0,
                c = 0,
                s = [];
            $("#available_window .viewport img").each(function () {
                var t = { obj: this, zindex: parseInt(this.style.zIndex), top: this.offsetTop + i, height: this.height, width: this.width };
                s.push(t), t.height > n && (n = t.height), t.width > c && (c = t.width);
            }),
                s.sort(function (t, e) {
                    return t.zindex - e.zindex;
                });
            var l = { obj: document.getElementsByClassName("logo_to_canvas")[0].getElementsByTagName("img")[0], zindex: 0, top: 735, left: 600, height: 38, width: 160, logo: !0 };
            "man_shoe" == o.product_type || "man_jeans" == o.product_type || "man_chino" == o.product_type ? r(s, c, n, l) : (s.push(l), a(s, c, n));
        }
        function i(t) {
            var e = window.location.origin + "/" + region + "/services/personalize/save_share_image?id_product=" + t + "ajax=1",
                i = { data: document.getElementById("share_product_canvas").toDataURL("image/jpeg") };
            $.ajax({
                type: "POST",
                url: e,
                data: i,
                success: function (t) {
                    "ko" != t && ($(".native", l).attr("data-file", t), $(".actions", l).removeClass("hide"), $(".loading", l).removeClass("visible"));
                },
            });
        }
        function r(t, e, i, r) {
            var a = document.getElementById("share_product_canvas");
            (a.width = 800), (a.height = 800);
            var n = a.height,
                c = a.height;
            Math.min(n / i, c / e);
            void 0 === o.pinchZoom.share_product_canvas && o.initCanvas("share_product_canvas", !1);
            var s = a.getContext("2d");
            if (((s.fillStyle = "#EFEFEF"), s.fillRect(0, 0, n, c), o.pinchZoom.share_product_canvas.setNotClearCanvas(), o.pinchZoom.share_product_canvas.setImages(o.new_images, o.current.view), r)) {
                var l = new Image();
                (l.src = r.obj.src),
                    (l.crossOrigin = "anonymous"),
                    (l.onload = function () {
                        s.drawImage(l, (r.left * a.width) / 800, (r.top * a.width) / 800, (r.width * a.width) / 800, (r.height * a.width) / 800);
                        var t = $(".designed_by_me").html();
                        (s.fillStyle = "#9a9b9a"),
                            (s.font = "lighter 40px gt-haptik"),
                            s.save(),
                            "man_jeans" == o.product_type || "man_chino" == o.product_type ? ((s.textAlign = "right"), s.rotate((-90 * Math.PI) / 180), s.fillText(t, -30, 50)) : s.fillText(t, 20, 50),
                            s.restore();
                    });
            }
        }
        function a(t, e, i) {
            var r = !1;
            if (
                (("man_smoking" != o.product_type && "man_frac" != o.product_type && "man_levita" != o.product_type && "man_chaque" != o.product_type) || (r = !0),
                "man_shoe" == o.product_type || "man_jeans" == o.product_type || "man_chino" == o.product_type)
            )
                a = o.render_info.viewport[o.current.view].base;
            else if (void 0 === o.viewport[o.current.view][o.product_type] || (r && "without_model" != o.current.view)) a = o.viewport[o.current.view].base;
            else var a = o.viewport[o.current.view][o.product_type];
            void 0 === a.top && (a.top = 0), void 0 === a.ratio && (a.ratio = a.h / a.w);
            var n = 1;
            "without_model" == o.current.view && ("man_suit2" == o.product_type || "man_suit3" == o.product_type || "man_smoking" == o.product_type) && $(window).width() > 900 && (n = 1.12),
                "without_model" == o.current.view && ("man_suit2" == o.product_type || "man_suit3" == o.product_type || "man_smoking" == o.product_type) && $(window).width() <= 900 && (n = 1.08),
                "folded" == o.current.view && "man_shirt" == o.product_type && (n = 1),
                "without_model" == o.current.view && "man_jacket" == o.product_type && (n = 1.08),
                (i = e * a.ratio);
            var c = document.getElementById("share_product_canvas");
            (c.width = 800), (c.height = 800);
            var s = { man_shirt: 0.4, man_pants: 0 },
                l = 0;
            void 0 !== s[o.product_type] && (l = s[o.product_type]);
            var _ = a.top * l,
                p = c.height * n,
                u = c.height,
                d = Math.min(p / i, u / e),
                f = c.getContext("2d");
            (f.fillStyle = "#efefef"), f.fillRect(0, 0, p, u);
            for (var h = (u - t[0].width * d) / 2, b = 0; b < t.length; b++)
                t[b].logo
                    ? f.drawImage(t[b].obj, t[b].left, t[b].top, t[b].width, t[b].height)
                    : ("man_jacket" == o.product_type && "without_model" == o.current.view && (t[b].top = 0),
                      "man_waistcoat" == o.product_type && "without_model" == o.current.view && (t[b].top = 0),
                      "man_waistcoat" == o.product_type && o.current.view,
                      f.drawImage(t[b].obj, h, (t[b].top - _) * d, t[b].width * d, t[b].height * d));
            var m = $(".designed_by_me").html();
            (f.fillStyle = "#9a9b9a"), (f.font = "lighter 42px gt-haptik"), (f.textAlign = "center"), f.save(), f.translate(70, 230), f.rotate((-90 * Math.PI) / 180), f.fillText(m, 0, 0), f.restore();
        }
        var o = this,
            n = $("body"),
            c = document.getElementById("share_product2"),
            s = document.createElement("div");
        (s.innerHTML = c.innerText), c.parentNode.replaceChild(s, c);
        l = $("#share_popup2");
        n.on("click", ".shareButton", function () {
            t();
        }),
            n.on("click", ".background_blur", function () {
                t();
            });
        var l = $("#share_popup2"),
            _ = $(".background_blur");
        l.on("click", ".close", function () {
            l.removeClass("show"), _.removeClass("show");
        });
        var p = !1;
        $("#share_popup2").on("touchstart", function (t) {
            p = t.originalEvent.changedTouches[0].clientY;
        }),
            $("#share_popup2").on("touchend", function (e) {
                (isTouched = !1), Math.round(e.originalEvent.changedTouches[0].clientY - p) >= 0 && ((p = 0), t());
            }),
            $(".shareButton").addClass("active"),
            $(".share_ios").removeClass("active"),
            (["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) &&
                ($(".shareButton:not(.share_ios)").hide(), $(".shareButton").removeClass("active"), $(".share_ios").addClass("active")),
            $(".share_image, #share_product_canvas", l).click(function () {
                var t = new Date(),
                    e = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds(),
                    i = document.title + " " + e + ".png".toLowerCase();
                document.getElementById("share_product_canvas").toBlob(
                    function (t) {
                        const e = document.createElement("a");
                        (e.download = i), (e.href = URL.createObjectURL(t)), e.click(), URL.revokeObjectURL(e.href);
                    },
                    "image/png",
                    1
                );
            }),
            $(".share_link", l).click(function () {
                var t = $("<input>"),
                    e = $(this).attr("href");
                $("body").append(t), $(this).addClass("copied"), t.val(e).select(), document.execCommand("copy"), t.remove();
            }),
            l.on("click", "a.native", function (t) {
                t.preventDefault();
                var e = $(this);
                return (
                    fetch(e.data("file"))
                        .then(function (t) {
                            return t.blob();
                        })
                        .then(function (t) {
                            var i = [new File([t], e.data("title") + ".jpg", { type: "image/jpeg" })];
                            navigator.canShare &&
                                navigator.canShare({ files: i }) &&
                                navigator
                                    .share({ text: e.data("text") + " " + e.data("link"), files: i, title: e.data("title") })
                                    .then(function () {
                                        dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "native", eventLabel: "mobile" });
                                    })
                                    .catch(function (t) {});
                        }),
                    !1
                );
            });
    }),
    (Garment.prototype.cleanPopups = function () {
        this.hideQuilterWaistcoatAlert(), this.hideUnlinedCoatAlert(), this.hideWinterLiningAlert(), this.hideCoatModePopup();
    }),
    (Garment.prototype.stepNext = function () {
        if ("man_polo" == this.product_type)
            switch (this.step) {
                case "fabric":
                    return this.stepSetURL("config");
                case "config":
                    this.container.submit();
            }
        else
            switch (this.step) {
                case "fabric":
                    return this.multi_fabric ? this.stepSetURL(this.multi_fabric_options[1].replace("man_", "fabric_")) : this.stepSetURL("config");
                case "fabric_pants":
                case "fabric_skirt":
                    return this.stepSetURL("config");
                case "config":
                    if (void 0 === this.extra) {
                        this.container.submit();
                        break;
                    }
                    return this.stepSetURL("extra");
                case "extra":
                    this.container.submit();
            }
    }),
    (Garment.prototype.gaEvent = function (t) {
        var e = t;
        "zoom" == t && (e = "zoom_model"), this.push_dataLayer("config_" + this.product_type, "step:" + e);
    }),
    (Garment.prototype.stepPrev = function () {
        switch (this.step) {
            case "config":
                return !1;
            case "fabric":
                return this.stepSetURL("config");
            case "extra":
                return this.stepSetURL("fabric");
        }
    }),
    (Garment.prototype.stepSetURL = function (t) {
        this.cleanPopups(),
            $(".preview_fabric", this.container).hide(),
            "extra" == t ? $(".preview_fabric", this.container).addClass("extra") : $(".preview_fabric", this.container).removeClass("extra"),
            History.pushState({ step: t }, this.window_title, "?step=" + t);
    }),
    (Garment.prototype.stepSwitch = function (t) {
        if ((this.gaEvent(t), "zoom" == t)) {
            $(".image_render_full").addClass(this.current.view), $(".image_render_full .layers").html("");
            var e = { width: this.viewport_zoom[this.current.view].w, height: this.viewport_zoom[this.current.view].h, "margin-left": -this.viewport_zoom[this.current.view].w / 2 };
            return (
                "man_shirt" == this.product_type && "folded" != this.current.view && (e["margin-top"] = -this.viewport_zoom[this.current.view].h / 5),
                "man_pants" == this.product_type && "front" == this.current.view && (e["margin-top"] = -this.viewport_zoom[this.current.view].h / 4),
                $(".image_render_full .viewport").css(e),
                $(".image_render_full").addClass("active"),
                this.renderDraw("BIG"),
                !1
            );
        }
        if (
            (this.closeSeersuckerWarning(),
            this.closeInitialsImage(),
            $(".image_render_full").removeClass(this.current.view),
            $(".image_render_full").removeClass("active"),
            "fabric" != t && $("#personalize_fabrics_info_popup").removeClass("active"),
            "fabric" != t && $("#personalize_fabrics_split").removeClass("active"),
            "man_jacket" != this.current.config._active_block && "man_suit2" == this.product_type && ((this.current.config._active_block = "man_jacket"), this.renderDraw()),
            "secondari" == this.position_render && this.desactivePositionRenderSecondari(),
            "fabric" == t && this.fabric_new && (this.scrolltoFabric(".fabric_list"), (this.fabric_new = !0)),
            t || (t = "config"),
            this.step != t)
        ) {
            if (
                ("fabric" == t || "fabric_pants" == t || "fabric_skirt" == t
                    ? ($(".image_render", this.container).addClass("fabric_step"), $(".preview_fabric").addClass("fabric_step"), $(".personalize_popup").addClass("fabric_step"))
                    : ($(".image_render", this.container).removeClass("fabric_step"), $(".preview_fabric").removeClass("fabric_step"), $(".personalize_popup").removeClass("fabric_step")),
                "fabric_pants" == t || "fabric_skirt" == t)
            ) {
                (this.multi_fabric = t.replace("fabric_", "man_")),
                    $("#fabric .fabric_box .price.split").removeClass("visible"),
                    $("#fabric .fabric_box .price.split." + this.multi_fabric).addClass("visible"),
                    $("#fabric .fabric_list .fabric_box").removeClass("checked");
                i = $('input[name="fabric[' + this.multi_fabric + ']"]').val();
                $('#fabric .fabric_list .fabric_box div[rel="' + i + '"]')
                    .parent()
                    .addClass("checked");
            }
            if ("fabric" == t && this.multi_fabric) {
                (this.multi_fabric = "man_jacket"), $("#fabric .fabric_list .fabric_box").removeClass("checked");
                var i = $('input[name="fabric[' + this.multi_fabric + ']"]').val();
                $('#fabric .fabric_list .fabric_box div[rel="' + i + '"]')
                    .parent()
                    .addClass("checked");
            }
            this.trigger("changeStep", [t]), "fabric" != t || tablet_device || $(".fabric_list").perfectScrollbar("update"), ("extra" != t && "fabric" != t) || this.remarketing(t), this.resize_render_viewport(this.current.view, !1, !1);
        }
    }),
    (Garment.prototype.remarketing = function (t, e) {}),
    (Garment.prototype.bind = function (t, e) {
        void 0 === this._events[t] && (this._events[t] = []), this._events[t].push(e);
    }),
    (Garment.prototype.trigger = function (t, e) {
        if (void 0 !== this._events[t]) for (var i in this._events[t]) this._events[t][i].apply(this, e);
    }),
    (Garment.prototype.unbind = function (t, e) {
        if (void 0 !== this._events[t]) {
            var i = this._events[t].indexOf(e);
            i > -1 && this._events[t].splice(i, 1);
        }
    }),
    (Garment.prototype.parse_query_string = function (t, e) {
        if (e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var i = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
            return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
        }
        var r,
            a = /\+/g,
            o = /([^&=]+)=?([^&]*)/g,
            n = function (t) {
                return decodeURIComponent(t.replace(a, " "));
            },
            c = t.replace(/^\?/, "");
        for (urlParams = {}; (r = o.exec(c)); ) urlParams[n(r[1])] = n(r[2]);
        return urlParams;
    }),
    (Garment.prototype.scrolltoFabric = function (t) {
        setTimeout(function () {
            var e = 0,
                i = $(t + " .fabric_box.checked");
            i.length && (e = i.offset().top - 200), $(t).animate({ scrollTop: e }, 500);
        }, 600);
    }),
    (Garment.prototype.initGarment = function () {
        function t() {
            for (var t, e = [], i = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), r = 0; r < i.length; r++) (t = i[r].split("=")), e.push(t[0]), (e[t[0]] = t[1]);
            return e;
        }
        this.initCommon(), this.formInit(), this.initConfigure(), this.initFabric(), this.initExtras(), this.updatePrice();
        o = this;
        fabricPreview.init(!0),
            "undefined" != typeof Blazy
                ? (this.bLazy_fabric = new Blazy({
                      container: ".fabric_container_lazy",
                      success: function (t) {
                          t.parentNode.className = t.parentNode.className.replace(/\loading\b/, "");
                      },
                      error: function (t, e) {
                          dataLayer.push({ event: "blazy_error" });
                      },
                  }))
                : (this.bLazy_fabric = !1),
            this.bLazy_fabric && this.bLazy_fabric.revalidate(),
            8 ==
                (function () {
                    var t = navigator.userAgent.toLowerCase();
                    return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1]);
                })() &&
                $(window).resize(function () {
                    var t = $(window).height(),
                        e = 0.54 * t,
                        i = e / 2;
                    $(".image_render .layers").css("width", e + "px"),
                        $(".image_render .layers").css("margin-left", "-" + i + "px"),
                        $(".image_render .loading").css("width", e + "px"),
                        $(".image_render .loading").css("margin-left", "-" + i + "px");
                    var r = 0.174 * t;
                    $(".image_render .layers IMG.shirt").css("top", r + "px");
                    var a = 0.55 * t;
                    $(".image_render .layers IMG.pant").css("top", a + "px");
                    var o = $(window).width();
                    if (o > 1080) $(".image_render_full .layers IMG.shirt").css("top", "347px"), $(".image_render_full .layers IMG.pant").css("top", "1100px");
                    else {
                        var n = 0.315 * o;
                        $(".image_render_full .layers IMG.shirt").css("top", n + "px");
                        var c = 1 * o;
                        $(".image_render_full .layers IMG.pant").css("top", c + "px");
                    }
                }),
            tablet_device
                ? ($(".container_options").addClass("overflow_scroll"), $(".box_opt").addClass("overflow_scroll"), $("#fabric .fabric_list").addClass("overflow_scroll"), $(".filters .menu_filter .content").addClass("overflow_scroll"))
                : ($(".container_options").perfectScrollbar({ suppressScrollX: !0 }),
                  $(".box_opt").perfectScrollbar(),
                  $("#fabric .fabric_list").perfectScrollbar({ suppressScrollX: !0 }),
                  $(".filters .menu_filter .content_filters").perfectScrollbar({ suppressScrollX: !0 }),
                  $("#personalize_fabrics_info_popup").perfectScrollbar({ suppressScrollX: !0 }));
        o = this;
        $(window).resize(function () {
            o.resize_render_viewport(o.current.view);
        }),
            $(".option_title").each(function () {
                var t = $(this).attr("data-shorttext");
                t && t.toLowerCase().indexOf("_tip") >= 0 && (t = $(this).html()),
                    $(this)
                        .parents("span")
                        .append('<div class="shorttext">' + t + "</div>");
            });
        var e = !1;
        "ff" == t().action && (e = $("#fabric .fabric_list .fabric_box.active").first().find(".image:eq(0)").attr("rel"));
        var i = t().coat_mode;
        if (
            (i &&
                $('#config .option_trigger[rel="' + i + '"]').length > 0 &&
                setTimeout(function () {
                    $("#config .options_list li.mode span").click(),
                        setTimeout(function () {
                            $('#config .option_trigger[rel="' + i + '"]').click(),
                                setTimeout(function () {
                                    $('#config .option_trigger[rel="' + i + '"] .more_info').click();
                                }, 200);
                        }, 200);
                }, 200),
            default_alterate)
        )
            e &&
                ((product.fabric.id_t4l_fabric = e),
                (product.fabric[this.product_type] = e),
                ("woman_suitpants" != product.product_type &&
                    "woman_suitskirt" != product.product_type &&
                    "man_suit" != product.product_type &&
                    "man_suit2" != product.product_type &&
                    "man_suit3" != product.product_type &&
                    "man_levita" != product.product_type &&
                    "man_frac" != product.product_type &&
                    "man_chaque" != product.product_type) ||
                    ((product.fabric[o.multi_fabric_options[0]] = e), (product.fabric[o.multi_fabric_options[1]] = e), (product.fabric[o.multi_fabric_options[2]] = e))),
                this.updateConfiguratedProduct();
        else {
            if (e)
                if (void 0 !== this.multi_fabric_options && this.multi_fabric_options.length) for (var r in this.multi_fabric_options) this.current.fabric[this.multi_fabric_options[r]] = e;
                else this.current.fabric[this.product_type] = e;
            this.current.fabric, this.updateConfiguratedProduct("default");
        }
        var a = window.location.href,
            o = this,
            n = !1,
            c = a.split("personalize")[1];
        if (c) {
            var s = "/" + region + "/services/personalize/loadProduct" + c;
            $.post(s, { product_type: o.product_type, url_original: a }, function (t) {
                if (t) {
                    (product = jQuery.parseJSON(t)),
                        product.id_shopping_cart_detail && product.id_product
                            ? (id_cart_product = product.id_product)
                            : product.customer_edit && product.id_shop_order_detail
                            ? ((customer_edit = !0),
                              (id_shop_order_detail = product.id_shop_order_detail),
                              $(o.container).append('<input type="hidden" name="customer_edit" value="1">'),
                              $(o.container).append('<input type="hidden" name="id_shop_order_detail" value="' + id_shop_order_detail + '">'),
                              $(".removeMinimal").click(),
                              ("man_suit" != o.product_type && "man_suit2" != o.product_type) ||
                                  (1 == o.current.config.waistcoat
                                      ? $("li.waistcoat").addClass("not_show")
                                      : ($('.submenu[rel="man_waistcoat"]').hide(),
                                        $(".config.title_combined").last().hide(),
                                        $('li[product="man_waistcoat"]').hide(),
                                        $("#waistcoat").hide(),
                                        $("#waistcoat_style_combined").hide(),
                                        $("#waistcoat_lapel_width").hide())))
                            : product.id_shop_order_detail
                            ? ((id_shop_order_detail = product.id_shop_order_detail), $(o.container).append('<input type="hidden" name="id_shop_order_detail" value="' + id_shop_order_detail + '">'))
                            : product.is_fed_product && (is_feed_product = 1),
                        product.model && (o.current.model = product.model),
                        product.p_style && (o.current.p_style = product.p_style);
                    var i = !1;
                    if (
                        ("man_pants" == o.product_type && void 0 !== product.config.pants_chinos && 1 == product.config.pants_chinos && (i = !0),
                        i &&
                            ($("#fabric .fabric_list .fabric_box").each(function (t) {
                                0 == $(".fabric", this).attr("chi") && $(this).remove();
                            }),
                            o.bLazy_fabric && o.bLazy_fabric.revalidate()),
                        (out_of_stock = product.out_of_stock),
                        (o.out_of_stock = out_of_stock),
                        (out_of_stock_fabric = product.out_of_stock_fabric),
                        out_of_stock.fabric)
                    ) {
                        var r = $("#fabric .fabric_list .fabric_box").first().clone(),
                            a = $("#fabric .fabric_list .fabric_box .image").first().attr("rel");
                        if (
                            (r.find(".info").html(function (t, e) {
                                return '<div class="title">' + out_of_stock_fabric.title + "</div>";
                            }),
                            r.addClass("out_of_stock"),
                            !(c = r.find("img").attr("data-src")))
                        )
                            var c = r.find("img").attr("src");
                        (c = c.replace(a, out_of_stock.fabric)),
                            r.find(".image").attr("rel", out_of_stock.fabric),
                            r.find(".image").attr("id", "fabric_" + out_of_stock.fabric),
                            r.find("span").attr("rel", out_of_stock.fabric),
                            r.find("img").attr("src", c).addClass("b-loaded"),
                            $("#fabric .fabric_list").prepend(r);
                    }
                    e &&
                        ((product.fabric.id_t4l_fabric = e),
                        (product.fabric[this.product_type] = e),
                        ("woman_suitpants" != product.product_type &&
                            "woman_suitskirt" != product.product_type &&
                            "man_suit" != product.product_type &&
                            "man_suit2" != product.product_type &&
                            "man_suit3" != product.product_type &&
                            "man_levita" != product.product_type &&
                            "man_frac" != product.product_type &&
                            "man_chaque" != product.product_type) ||
                            ((product.fabric[o.multi_fabric_options[0]] = e), (product.fabric[o.multi_fabric_options[1]] = e), (product.fabric[o.multi_fabric_options[2]] = e))),
                        o.updateConfiguratedProduct(),
                        id_shop_order_detail || (o.initFabricOutOfStock(), (n = !0));
                }
            });
        }
        (o.garment_inited = !0),
            o.minimal_array && o.minimalMode(o.minimal_array),
            id_shop_order_detail || n || o.initFabricOutOfStock(),
            (this.actived_coat_seters = !0),
            coat_generic_mode || $("#coat_model").hide(),
            $(".container_options").perfectScrollbar("update");
        var l = parse_query_string(document.location.search, "view");
        l && this.changeView(l, !1);
        var _ = $("#fabric .fabric_list .fabric_box.active").length;
        $(".header_fabrics .number").html(_),
            $(".show_results .number").html(_),
            $(".item_menu_filter .item_menu").first().click(),
            $(".fabric_container_lazy").get(0).scrollHeight <= $(".fabric_container_lazy").get(0).offsetHeight && $(".arrow_scroll").addClass("hide");
    }),
    (Garment.prototype.initFabricOutOfStock = function () {
        var t = this,
            e = !1;
        if (((out_of_stock = t.out_of_stock), out_of_stock)) {
            var i = !1;
            if (((e = {}), void 0 !== out_of_stock.fabric && ((e.fabric = out_of_stock.fabric), i || (t.showFabricOutOfStock("fabric", out_of_stock.fabric, "fabric"), (i = !0))), void 0 !== out_of_stock.extras)) {
                if (((e.extras = {}), void 0 !== out_of_stock.extras.lining)) {
                    e.extras.lining = {};
                    for (var r in out_of_stock.extras.lining) (e.extras.lining[r] = out_of_stock.extras.lining[r]), i || (t.showFabricOutOfStock("lining", out_of_stock.extras.lining[r], r), (i = !0));
                }
                if (void 0 !== out_of_stock.extras.fabric) {
                    e.extras.fabric = {};
                    for (var a in out_of_stock.extras.fabric) (e.extras.fabric[a] = out_of_stock.extras.fabric[a]), i || (t.showFabricOutOfStock("fabric", out_of_stock.extras.fabric[a], a), (i = !0));
                }
            }
        }
        (t.out_of_stock_control = e),
            $(".popup_warning_fabric_out").click(function () {
                t.hideFabricOutOfStock();
            });
    }),
    (Garment.prototype.showFabricOutOfStock = function (t, e, i) {
        var r = this;
        "fabric" != i && $("#extra li." + i + " a", r.container).click(), $(".step_next").removeClass("disabled");
        var a = window.cdn_host,
            o = "";
        "lining" == t
            ? (o = "default")
            : ("pants" != (o = (o = (o = r.product_type).replace("woman_", "")).replace("man_", "")) &&
                  "skirt" != o &&
                  "jacket" != o &&
                  "suit2" != o &&
                  "waistcoat" != o &&
                  "smoking" != o &&
                  "frac" != o &&
                  "chaque" != o &&
                  "levita" != o &&
                  "suitpants" != o &&
                  "suitskirt" != o) ||
              (o = "suit");
        var n = a + "dimg/" + t + "/" + o + "/" + e + "_big.jpg";
        $(".popup_warning_fabric_out .image img").attr("src", n),
            $(".popup_warning_fabric_out")
                .removeClass("fabric_out")
                .removeClass("lining_out")
                .addClass(t + "_out")
                .show();
    }),
    (Garment.prototype.allFabricsAndLiningsOk = function () {
        var t = this;
        if (void 0 !== t.out_of_stock_control.fabric) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.fabric, "fabric"), !1;
        if (void 0 !== t.out_of_stock_control.extras) {
            if (void 0 !== t.out_of_stock_control.extras.lining)
                for (var e in t.out_of_stock_control.extras.lining) if ("ok" !== t.out_of_stock_control.extras.lining[e]) return t.showFabricOutOfStock("lining", t.out_of_stock_control.extras.lining[e], e), !1;
            if (void 0 !== t.out_of_stock_control.extras.fabric)
                for (var i in t.out_of_stock_control.extras.fabric) if ("ok" !== t.out_of_stock_control.extras.fabric[i]) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.extras.fabric[i], i), !1;
        }
        return !0;
    }),
    (Garment.prototype.applyFilterFabric = function (t, e, i) {
        var r = this;
        void 0 === e && (hide_fabric = !1),
            void 0 === i && (i = !0),
            $(".filters.fabric_step")
                .find('.sub_menu_filter .filter li[rel="' + t.filter + '"]')
                .first()
                .addClass("active")
                .parent()
                .find("li.all")
                .removeClass("active"),
            (applied_filters = []);
        var a = $("#fabric"),
            o = $("#fabric .fabric_list .fabric_box"),
            n = $("#fabric .active_filters"),
            c = (n.find("ul"), $(".filters.fabric_step")),
            s = c.find(".menu_filter"),
            l = a.find(".fabric_options"),
            _ = a.find(".fabric_options_fix"),
            p = a.find(".fabric_list"),
            u = !1;
        $("li", n).remove(),
            $(".filters.fabric_step")
                .find(".item_menu_filter")
                .each(function (t) {
                    var e = $(this),
                        r = e.attr("rel");
                    (applied_filters[r] = []),
                        e
                            .find(".filter li.active")
                            .not(".all")
                            .each(function () {
                                u = !0;
                                var t = $(this).attr("rel"),
                                    e = $(this).find("a").html();
                                if ((applied_filters[r].push(t), i)) {
                                    var a = $(".left_filters");
                                    $("li", a).removeClass("active"),
                                        $('li[rel="filter"]').addClass("active"),
                                        n.append("<li rel_type=" + r + " rel=" + t + "><a href='javascript;:'><div class='cruz'>k</div><div class='title'>" + e + "</div></a></li>");
                                }
                            }),
                        applied_filters[r].length <= 0 && delete applied_filters[r];
                });
        $(".fabric_options_fix").height();
        var d = [];
        s.find(".item_menu_filter").each(function () {
            d.push($(this).attr("rel"));
        }),
            u && (n.show(), r.update_fabric_list(o, d, applied_filters, $("#fabric"))),
            e && ($("#fabric").addClass("active"), c.removeClass("active"), r.resize_height_fabric_options_fix(l, _, p), $("#fabric").removeClass("active")),
            $(".applied", c).addClass("applied"),
            $(".header_fabrics .row").addClass("applied");
    }),
    (Garment.prototype.formInit = function () {
        var t = this;
        $(this.container).submit(function () {
            return t.formSubmit();
        });
    }),
    (Garment.prototype.formSubmit = function () {
        this.allow_redirect = !0;
        var t = this;
        if (!id_shop_order_detail && !t.allFabricsAndLiningsOk()) return !1;
        var e = "1";
        return id_cart_product && (e = id_cart_product), $(this.container).append('<input type="hidden" name="next" value="' + e + '" />'), !0;
    }),
    (Garment.prototype.isSpecialView = function (t) {
        return "sp" == t.split("_")[0];
    }),
    (Garment.prototype.changeView = function (t, e) {
        (this.lastSharedUrl = null), this.show_force_view_message(!1);
        var i = this.current.view;
        (this.current.view = t),
            $(".image_render").removeClass(i),
            $(".image_render").addClass(t),
            $(".image_render .views li.active").removeClass("active"),
            $('.image_render .views li[rel="' + t + '"]').addClass("active"),
            "folded" == t ? $(".image_render .layers").addClass("folded") : $(".image_render .layers").removeClass("folded"),
            e ||
                (("man_suit2" != this.product_type && "man_suit3" != this.product_type) || (this.changeActiveBlock("man_jacket", !0), this.moveRender("down")),
                this.renderDraw("STD", i, t),
                ("man_shirt" != this.product_type && "man_polo" != this.product_type) || this.renderInitials(),
                $(window).resize());
    }),
    (Garment.prototype.change_style_shirt = function (t) {
        var e = this;
        (e.shirt_style_click = !0), t || (t = "business" == e.current.style ? "casual" : (e.current.style, "business"));
        var i = $(".image_render .options_render a.style"),
            r = $("span", i),
            a = e.shirt_styles[t];
        "auto" != t && $(".title", i).hide(),
            "auto" != t && (e.current.style = t),
            "auto" != a.view_detail && (e.current.view_detail = a.view_detail),
            "auto" != a.neck_open && (e.current.neck_open = a.neck_open),
            "auto" != a.inner_sleeve && (e.current.inner_sleeve = a.inner_sleeve),
            "auto" != a.icon && r.html(a.icon),
            "auto" != t && $(".title." + a.title_to_show, i).show(),
            e.renderDraw();
    }),
    (Garment.prototype.change_style_shirt_simple = function (t) {
        var e = this;
        e.shirt_style_click = !0;
        var i = e.shirt_styles[t],
            r = $(".image_render .options_render a.style"),
            a = $("span", r);
        (e.current.style = t),
            "auto" != i.view_detail && (e.current.view_detail = i.view_detail),
            "auto" != i.neck_open && (e.current.neck_open = i.neck_open),
            "auto" != i.inner_sleeve && (e.current.inner_sleeve = i.inner_sleeve),
            "auto" != i.icon && a.html(i.icon),
            "auto" != i.title_to_show && ("auto" != t && $(".title", r).hide(), $(".title." + i.title_to_show, r).show()),
            e.renderDraw();
    }),
    (Garment.prototype.change_style_pocket_square = function () {
        var t = this;
        t.current.extras.handkerchief.contrast && ("recto" == t.current.pocket_square ? (t.current.pocket_square = "normal") : (t.current.pocket_square = "recto"), t.renderDraw());
    }),
    (Garment.prototype.change_style_quilted_waistcoat = function () {
        var t = this;
        "abierto" == t.current.quilted_waistcoat ? (t.current.quilted_waistcoat = "cerrado") : (t.current.quilted_waistcoat = "abierto"), t.renderDraw();
    }),
    (Garment.prototype.initCommon = function () {
        function t() {
            function t(t, r, a, o, n) {
                return "vw" == a ? (e * r) / 100 + "px" : "vh" == a ? (i * r) / 100 + "px" : "vmax" == a ? (Math.max(i, e) * r) / 100 + "px" : "vmin" == a ? (Math.min(i, e) * r) / 100 + "px" : "";
            }
            var e = $(window).width(),
                i = $(window).height();
            $("img.resize_fix").each(function () {
                var e = this.getAttribute("resize_fix");
                if (void 0 === e) return !0;
                this.setAttribute("style", e.replace(/(\d*)(vh|vw|vmax|vmin)/g, t));
            });
        }
        var e = this,
            i = $(".image_render", e.container);
        $(".preview_fabric", e.container);
        this.bind("changeStep", function (t) {
            $(".step a.active").removeClass("active"),
                $(".block.active").removeClass("active"),
                $(".filters.active").removeClass("active"),
                $(".container_options ul li a.active").removeClass("active"),
                $(".container_options.min").removeClass("min"),
                $(".box_opt.active").removeClass("active"),
                (e.step = t),
                $(".step ." + e.step).addClass("active");
            var i = $("#" + e.step + ".block").addClass("active");
            if (
                (i.hasClass("lazy-loaded") ||
                    (i
                        .find("img.lazy")
                        .each(function () {
                            this.src = this.dataset.src;
                        })
                        .removeClass("lazy"),
                    i.addClass("lazy-loaded")),
                "woman_suitpants" == e.product_type || "woman_suitskirt" == e.product_type || "man_suit" == e.product_type || "man_suit2" == e.product_type)
            ) {
                var r = t.replace("fabric_", ""),
                    a = e.multi_fabric_options[1].replace("man_", "");
                e.multi_fabric && r == a && $("#fabric.block").addClass("active");
            }
            var o = ".fabric_container_lazy";
            "extra" == t && (o = ".extra_container_lazy"),
                "undefined" != typeof Blazy
                    ? (this.bLazy_fabric = new Blazy({
                          container: o,
                          success: function (t) {
                              t.parentNode.className = t.parentNode.className.replace(/\loading\b/, "");
                          },
                          error: function (t, e) {
                              dataLayer.push({ event: "blazy_error" });
                          },
                      }))
                    : (this.bLazy_fabric = !1),
                this.bLazy_fabric && this.bLazy_fabric.revalidate();
        }),
            History.Adapter.bind(window, "statechange", function () {
                var t = History.getState(),
                    i = "fabric",
                    r = ["config", "fabric", "fabric_pants", "extra", "zoom"];
                -1 != jQuery.inArray(t.data.step, r) && (i = t.data.step), e.stepSwitch(i);
            }),
            $(".step").on("click", "a", function () {
                var t = $(this).attr("rel");
                return e.stepSetURL(t), !1;
            }),
            $("a.step_next").click(function () {
                return !$(this).hasClass("disabled") && ("extra" == e.step ? $(this).addClass("disabled") : "config" == e.step && "man_pants" == e.product_type && $(this).addClass("disabled"), e.stepNext(), !1);
            }),
            $(window).resize(t),
            t();
        var r = this.parse_query_string(window.location.search);
        delete r.menu, r.step || (r.step = "fabric"), History.replaceState(r, window.title), $(window).trigger("statechange");
        for (var a in extra_prices) $('#extra .box_opts .box_opt[id="' + a + '"]').attr("data-price", extra_prices[a]);
        var o = [];
        $("#config .container_options span", e.container).each(function () {
            var t = this.getAttribute("href");
            if (!t) return !0;
            t = t.replace(/^[^#]*#/, "");
            var e = $(this).attr("rel");
            e && ((e = e.split(",")), (o[t] = e));
        }),
            (e.views.config = o);
        var n = [];
        $("#extra .container_options span", e.container).each(function () {
            var t = this.getAttribute("href");
            if (!t) return !0;
            t = t.replace(/^[^#]*#/, "");
            var e = $(this).attr("rel");
            e && ((e = e.split(",")), (n[t] = e));
        }),
            (e.views.extra = n),
            $(".views").on("click", "li", function () {
                var t = $(this).attr("rel");
                return $(this).parent().find("li").removeClass("active"), $(this).addClass("active"), e.changeView(t), !1;
            }),
            $(".bottom_click").click(function () {
                "shirt_outside" == e.current.style ? e.change_style_shirt_simple("shirt_inside") : e.change_style_shirt_simple("shirt_outside");
            }),
            $(".neck_click").click(function () {
                "neck_open" == e.current.style ? e.change_style_shirt_simple("neck_close") : e.change_style_shirt_simple("neck_open");
            }),
            $(".cuff_click_left").click(function () {
                1 == e.current.inner_sleeve ? e.change_style_shirt_simple("cuff_close") : e.change_style_shirt_simple("cuff_open");
            }),
            $(".cuff_click_right").click(function () {
                1 == e.current.inner_sleeve ? e.change_style_shirt_simple("cuff_close") : e.change_style_shirt_simple("cuff_open");
            }),
            $(".pocket_square").click(function () {
                e.change_style_pocket_square();
            }),
            $(".quilted_waistcoat_click").click(function () {
                e.change_style_quilted_waistcoat();
            }),
            $(".options_render", i).on("click", "a.fabric", function () {
                this.fabric_preview_open = !0;
                var t = e.product_type;
                t.replace("man_", "");
                ("woman_suitpants" != e.product_type && "woman_suitskirt" != e.product_type) || (t = "woman_jacket"),
                    ("man_suit" != e.product_type && "man_suit2" != e.product_type) || (t = "man_jacket"),
                    ("man_smoking" != e.product_type && "man_levita" != e.product_type && "man_frac" != e.product_type && "man_chaque" != e.product_type) || (t = "man_jacket");
                var i = e.current.fabric[t],
                    r = $('#fabric .image[rel="' + i + '"] span.thumb_preview');
                return e.showPreviewFabric(r, "fabric"), !1;
            }),
            $(".options_render", i).on("click", "a.style", function () {
                return e.change_style_shirt(), !1;
            }),
            $(".options_render", i).on("click", "a.plus", function () {
                return "less" == e.zoom ? ((e.current_product = e.multi_fabric_options[0]), e.resize_render_viewport(e.current.view, !1, !1), (e.zoom = "normal"), $("span", "a.less").show()) : e.stepSetURL("zoom"), !1;
            }),
            $(".options_render", i).on("click", "a.without_jacket", function () {
                return e.changeActiveBlock(!1, !1), !1;
            }),
            $(".options_render", i).on("click", "a.movement", function () {
                return e.moveRender(), !1;
            }),
            $(".options_render", i).on("click", "a.less", function () {
                e.current_product;
                return (e.current_product = "full"), e.resize_render_viewport(e.current.view, !1, !0), (e.zoom = "less"), $("span", $(this)).hide(), !1;
            }),
            $(".image_render_full").click(function () {
                History.back();
            }),
            e.initThumbFabric(),
            ("man_suit2" != e.product_type && "man_suit" != e.product_type) || $(".extras.title_combined").hide();
        try {
            e.initShareAndFav();
        } catch (t) {}
        e.initShareProduct();
    }),
    (Garment.prototype.initShareAndFav = function () {
        function t(t) {
            var t = parseInt(t);
            $('.add_to_cart[data-id="' + t + '"]', l).addClass("hide"), $('.go_to_cart_loader[data-id="' + t + '"]', l).addClass("visible");
            i = window.location.origin + "/" + region + "/services/personalize/" + c.product_type + "?ajax=1";
            if (t)
                $.post(i, { id_product: t, save_cart_by_feed: !0 }, function (e) {
                    e && ($('.go_to_cart_loader[data-id="' + t + '"]', l).removeClass("visible"), $('.go_to_cart[data-id="' + t + '"]', l).addClass("visible"));
                });
            else {
                r(), $(c.container).append('<input type="hidden" name="next_save_cart" value="1" class="input_auto_delete"/>');
                var e = $("form").serialize(),
                    i = window.location.origin + "/" + region + "/services/personalize/" + c.product_type + "?ajax=1";
                $.ajax({
                    type: "POST",
                    url: i,
                    data: e,
                    success: function (t) {
                        dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_to_cart", eventLabel: "mobile" });
                    },
                });
            }
        }
        function e(t) {
            var t = parseInt(t);
            if (d) i = d.email;
            else if (customer) i = window.getStoredCustomer().email;
            else {
                var e = window.getStoredCustomerTemp();
                if (e) var i = e.email;
            }
            if (t && i) {
                var r = window.location.origin + "/" + region + "/services/personalize/" + c.product_type + "?ajax=1";
                $.post(r, { id_product: t, email: i, remove_product_wish_list: !0 }, function (t) {
                    if (t) {
                        var e = c.cont_favorites + 1,
                            i = "product_" + e;
                        e > 2 && (i = "product_3_more"),
                            l.removeClass(i),
                            (i = "product_" + c.cont_favorites),
                            c.cont_favorites > 2 && (i = "product_3_more"),
                            l.addClass(i),
                            $("#favourite_product_popup .products").perfectScrollbar("update");
                    }
                });
            }
        }
        function i() {
            p.addClass("visible"), l.addClass("visible"), $(".products", l).show();
        }
        function r() {
            $(".input_auto_delete", this.container).remove();
        }
        function a(t) {
            var e = $("#favourite_product_popup");
            if (c.customer_active) {
                var i = window.getStoredCustomer();
                if (i) o = i.email;
                else {
                    var a = window.getStoredCustomerTemp();
                    if (a) var o = a.email;
                }
            }
            if (!o) {
                if (null == (o = $('.content input[name="email"]', e).val()).match(/[\S]+[\@][\S]+[\.][\S]+/i)) return $(".email_error_format").show(), !1;
                $(".email_error_format").hide();
            }
            l.removeClass("visible"),
                p.removeClass("visible"),
                $(".favourite").addClass("hide"),
                r(),
                $(c.container).append('<input type="hidden" name="add_favourite_product" value="1"  class="input_auto_delete"/>'),
                $("form").append('<input type="hidden" name="email" value="' + o + '"   class="input_auto_delete"/>');
            var n = $("form").serialize();
            setTimeout(function () {
                $("#add_product_popup_message").addClass("visible");
            }, 1e3),
                setTimeout(function () {
                    $("#add_product_popup_message").removeClass("visible");
                }, 4e3),
                void 0 === c.cont_favorites && (c.cont_favorites = 0),
                c.cont_favorites++;
            var s = "product_" + c.cont_favorites;
            c.cont_favorites > 2 && (s = "product_3_more"), l.addClass(s), c.customer_active || ((c.cont_favorites = 1), $("#favorites span").html(c.cont_favorites), $(".fav_box_header").addClass("visible"));
            var _ = window.location.origin + "/" + region + "/services/personalize/" + c.product_type + "?ajax=1";
            return (
                $.ajax({
                    type: "POST",
                    url: _,
                    data: n,
                    success: function (e) {
                        if (e) {
                            var r = (e = JSON.parse(e)).id_product;
                            if (
                                ($(l).addClass("customer_active"),
                                $(".your_wish_list", l).hide(),
                                $(".your_wish_list.has-customer", l).show(),
                                (c.customer_active = !0),
                                (c.product_saved = !0),
                                l.addClass("customer_active"),
                                $(".your_wish_list", l).hide(),
                                $(".your_wish_list.has-customer", l).show(),
                                !i && !a)
                            ) {
                                var n = { email: o };
                                (n = JSON.stringify(n)), window.localStorage.setItem("customer_temp", n);
                            }
                            if (($("#favorites span").html(c.cont_favorites), $("#favorites").addClass("visible"), r)) {
                                $(".product", l).first().addClass("saved"),
                                    $(".product", l).first().find(".add_to_cart").attr("data-id", r),
                                    $(".product", l).first().find(".remove").attr("data-id", r),
                                    $(".product", l).first().find(".share").attr("data-id", r),
                                    $(".product", l).first().find(".go_to_cart").attr("data-id", r),
                                    $(".product", l).first().find(".go_to_cart_loader").attr("data-id", r);
                                var s = $(".product", l).first().find(".wrap_image").attr("href");
                                (s = s.replace("#id_product#", r)), $(".product", l).first().find(".wrap_image").attr("href", s);
                                var _ = e.title;
                                _ && $(".product", l).first().find(".title").html(_);
                            }
                            t && "function" == typeof t && t();
                        }
                    },
                }),
                dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_favorite", eventLabel: "mobile" }),
                !0
            );
        }
        function o() {
            p.addClass("visible"), l.addClass("visible"), l.find(".loading").addClass("active"), c.customer_active || $(".product", l).remove();
            var t = $(".action_column .price").html().match(/\d+/g)[0],
                e = { title: $(".title_compo .title").html(), price: formatPrice(t) },
                i = $(tmpl("favourite_product_tmpl", e));
            $(".products", l).prepend(i), 1 !== $(".products .product", l).length || c.customer_active ? $(".products", l).show() : $(".products", l).hide();
            var r = c.current.view;
            c.current.view = "folded";
            var a = "folded";
            c.views.indexOf("folded") > -1 ? (c.current.view = "folded") : c.views.indexOf("without_model") > -1 ? ((c.current.view = "without_model"), (a = "without_model")) : ((c.current.view = "front"), (a = "front")),
                c.renderDraw(!1, !1, !1, "favourite_product"),
                (c.current.view = r);
            var o = 135 / c.viewport[a].base.ratio;
            c.complex && (o += 10), $(".image", l).css("width", o), $(".image", l).css("max-width", "130px");
        }
        function n() {
            if (((f = !0), d && d.email)) {
                var t = window.location.origin + "/" + region + "/services/personalize/" + c.product_type + "?ajax=1";
                $.post(t, { email: d.email, get_wish_list: !0, product_type: c.product_type, logged: u }, function (t) {
                    if (t) {
                        t = JSON.parse(t);
                        var e = $("#favourite_product_popup"),
                            i = t.length;
                        if (i > 0) {
                            (c.cont_favorites = i), $("#favorites span").html(i), $(".fav_box_header").addClass("visible");
                            var r = "product_" + c.cont_favorites;
                            c.cont_favorites > 2 && (r = "product_3_more"), e.addClass(r);
                            for (var a in t) {
                                var o = { title: t[a].product_title, price: formatPrice(t[a].price) },
                                    n = $(tmpl("favourite_product_tmpl", o));
                                $(".products", e).prepend(n);
                                var s = t[a].img_src,
                                    l = $('<img src="' + s + '">');
                                $("#favourite_product_popup .image").first().html(l);
                                var _ = "folded";
                                _ = c.views.indexOf("without_model") > -1 ? "without_model" : c.views.indexOf("folded") > -1 ? "folded" : "front";
                                var p = 135 / c.viewport[_].base.ratio;
                                c.complex && (p += 10), $(".image", e).css("width", p);
                                var u = t[a].id_product;
                                $(".product", e).first().find(".add_to_cart").attr("data-id", u),
                                    $(".product", e).first().find(".remove").attr("data-id", u),
                                    $(".product", e).first().find(".share").attr("data-id", u),
                                    $(".product", e).first().find(".go_to_cart").attr("data-id", u),
                                    $(".product", e).first().find(".go_to_cart_loader").attr("data-id", u);
                                var d = $(".product", e).first().find(".wrap_image").attr("href");
                                (d = d.replace("#id_product#", u)), $(".product", e).first().find(".wrap_image").attr("href", d);
                            }
                            $(".product", "#favourite_product_popup").addClass("saved");
                        }
                    }
                });
            }
        }
        var c = this,
            s = $("body"),
            l = ($("#save_product_popup"), $("#favourite_product_popup")),
            _ = $("#share_popup2"),
            p = $("#disable_popup");
        if (
            ($("#favourite_product_popup .products").perfectScrollbar(),
            s.on("click", ".social a", _, function (t) {
                return (
                    !(!$(this).hasClass("email") && !$(this).hasClass("copylink")) ||
                    (t.preventDefault(),
                    window.open(
                        $(this).attr("href"),
                        "ShareWindow",
                        "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
                    ),
                    !1)
                );
            }),
            customer || customer_temp)
        ) {
            var u = !1,
                d = !1;
            customer ? ((d = window.getStoredCustomer()), (u = !0)) : customer_temp && (d = window.getStoredCustomerTemp());
        }
        l.on("click", ".add_to_cart", function () {
            var e = $(this).attr("data-id");
            e && t(e);
        }),
            l.on("click", ".remove", function () {
                var t = $(this).attr("data-id"),
                    i = $(this).attr("data-text");
                confirm(i) &&
                    "null" != t &&
                    (e(t), $(this).parents(".product").remove(), c.cont_favorites--, $("#favorites span").html(c.cont_favorites), 0 == $(".product", l).length && (l.removeClass("visible"), p.removeClass("visible")));
            }),
            l.on("click", ".share", function () {
                "null" != $(this).attr("data-id") && $(".shareButton.active").click();
            }),
            (customer || customer_temp) && ($(l).addClass("customer_active"), $(".your_wish_list", l).hide(), $(".your_wish_list.has-customer", l).show(), (c.customer_active = !0));
        var f = !1;
        s.on("click", ".favourite", function () {
            if ($(this).hasClass("hide")) return !1;
            c.customer_active && (f || n(), a()), o();
        }),
            p.click(function () {
                l.removeClass("visible"), p.removeClass("visible"), _.removeClass("show");
            }),
            s.on("click", "#favourite_product_popup .close", function () {
                l.removeClass("visible"), p.removeClass("visible");
            }),
            s.on("click", "#favourite_product_popup .save", function () {
                a(function () {
                    $("#favorites").trigger("click");
                });
            }),
            $("#favourite_product_popup input").keydown(function (t) {
                13 === t.which && $(".save", "#favourite_product_popup").click();
            }),
            $("body").on("click", "#favorites", function (t) {
                t.preventDefault(), t.stopPropagation(), i();
            }),
            s.on("click", ".copylink", function (t) {
                t.preventDefault(),
                    $(".social-link input").get(0).select(),
                    document.execCommand("copy"),
                    $(".copylinkok").fadeIn(),
                    setTimeout(function () {
                        $(".copylinkok").hide();
                    }, 3e3);
            });
    }),
    (Garment.prototype.cleanInputAutoDelete = function () {
        $(".input_auto_delete", this.container).remove();
    }),
    (Garment.prototype.moveRender = function (t) {
        var e = this;
        "up" == t
            ? ($("li.movement a").addClass("moved"), (e.current_product = e.multi_fabric_options[1]), e.resize_render_viewport(e.current.view, !1, !1))
            : "down" == t
            ? ($("li.movement a").removeClass("moved"), (e.current_product = e.multi_fabric_options[0]), e.resize_render_viewport(e.current.view, !1, !1))
            : ($("li.movement a").toggleClass("moved"),
              e.current_product == e.multi_fabric_options[1] ? (e.current_product = e.multi_fabric_options[0]) : (e.current_product = e.multi_fabric_options[1]),
              e.resize_render_viewport(e.current.view, !1, !1));
    }),
    (Garment.prototype.hideOptionBox = function (t, e) {
        var i = this;
        $("#" + t, e).removeClass("active"), $("a." + t, e).removeClass("active"), "shirt_threads" == t && i.trigger("hideOptionBox", []);
    }),
    (Garment.prototype.show_force_view_message = function (t) {
        t ? $("#show_force_view_message").addClass("move") : $("#show_force_view_message").removeClass("move");
    }),
    (Garment.prototype.changeActiveBlock = function (t, e) {
        return (
            void 0 === e && (e = !1),
            "undefined" == typeof change_icon && (change_icon = !0),
            (("man_suit2" == this.product_type || "man_suit3" == this.product_type || "man_levita" == this.product_type || "man_frac" == this.product_type || "man_chaque" == this.product_type) &&
                "man_pants" == t &&
                "without_model" == this.current.view) ||
                (e &&
                    (t == this.multi_fabric_options[0] || "man_waistcoat" == t ? $(".options_render a.movement").removeClass("moved") : $(".options_render a.movement").addClass("moved"),
                    (this.current_product = "man_jacket_only" == t ? "man_jacket" : t),
                    this.resize_render_viewport(this.current.view, !1, !1)),
                t ||
                    (t =
                        "man_jacket" == this.current.config._active_block ||
                        "man_smoking_jacket" == this.current.config._active_block ||
                        "man_smoking" == this.current.config._active_block ||
                        "man_levita_jacket" == this.current.config._active_block ||
                        "man_levita" == this.current.config._active_block ||
                        "man_chaque_jacket" == this.current.config._active_block ||
                        "man_chaque" == this.current.config._active_block ||
                        "man_frac_jacket" == this.current.config._active_block ||
                        "man_frac" == this.current.config._active_block
                            ? "1" == this.current.config.waistcoat
                                ? this.multi_fabric_options[2]
                                : this.multi_fabric_options[1]
                            : this.multi_fabric_options[0]),
                this.current.config._active_block != t &&
                    ("man_jacket" != t ? $(".options_render li.without_jacket", this.container).addClass("active") : $(".options_render li.without_jacket", this.container).removeClass("active"),
                    (this.current.config._active_block = t),
                    void this.renderDraw()))
        );
    }),
    (Garment.prototype.convetToSuit3 = function (t, e) {
        var i = this;
        if (
            ((t = parseFloat(t)),
            $('input[name="waistcoat"]').val(1),
            (i.price_detail.waistcoat = t),
            i.updatePrice(),
            (i.real_product_type = "man_suit3"),
            $("#fabric .fabric_list").addClass("three"),
            $("#fabric .fabric_box .price.split").removeClass("visible"),
            $("#fabric .fabric_box .price.split.man_suit3").addClass("visible"),
            $(".extras.title_combined").show(),
            $('.multifabric_selectors label[rel="man_waistcoat"]').show(),
            $(".options_render li.without_jacket").addClass("suit3"),
            i.fabricPriceActive(),
            e)
        ) {
            var r = i.current.fabric.man_jacket,
                a = $('#fabric .image[rel="' + r + '"] span').attr("category"),
                o = $('#fabric .fabric_box div[rel="' + r + '"]').parent();
            i.updateFabricPrices(!1, a, !0, o);
        }
    }),
    (Garment.prototype.convetToSuit2 = function () {
        var t = this;
        $('input[name="waistcoat"]').val(0),
            (t.price_detail.waistcoat = 0),
            t.updatePrice(),
            (t.real_product_type = "man_suit2"),
            $(".extras.title_combined").hide(),
            $("#fabric .fabric_list").removeClass("three"),
            $("#fabric .fabric_box .price.split").removeClass("visible"),
            $("#fabric .fabric_box .price.split.man_suit2").addClass("visible"),
            $('.multifabric_selectors label[rel="man_waistcoat"]').hide(),
            $(".options_render li.without_jacket").removeClass("suit3");
        var e = t.current.fabric.man_jacket,
            i = $('#fabric .image[rel="' + e + '"] span').attr("category");
        (t.current.extras.waistcoat_button_holes_threads = []),
            (t.current.extras.waistcoat_initials = []),
            (t.current.extras.waistcoat_lining = []),
            t.extraSetPrice("waistcoat_button_holes_threads", 0),
            t.extraSetPrice("waistcoat_initials", 0),
            t.extraSetPrice("waistcoat_lining", 0),
            t.fabricPriceActive();
        var r = $('#fabric .fabric_box div[rel="' + e + '"]').parent();
        t.updateFabricPrices(!1, i, !0, r);
    }),
    (Garment.prototype.convetToCeremonial3 = function (t, e) {
        var i = this;
        if (
            ((t = parseFloat(t)),
            $('input[name="waistcoat"]').val(1),
            (i.price_detail.waistcoat = t),
            i.updatePrice(),
            (i.real_product_type = "man_ceremonial3"),
            $("#fabric .fabric_list").addClass("three"),
            $("#fabric .fabric_box .price.split").removeClass("visible"),
            $("#fabric .fabric_box .price.split.man_suit3").addClass("visible"),
            $('.multifabric_selectors label[rel="man_waistcoat"]').show(),
            $(".extras.title_combined").show(),
            i.fabricPriceActive(),
            e)
        ) {
            var r = i.current.fabric.man_jacket,
                a = $('#fabric .image[rel="' + r + '"] span').attr("category"),
                o = $('#fabric .fabric_box div[rel="' + r + '"]').parent();
            i.updateFabricPrices(!1, a, !0, o);
        }
    }),
    (Garment.prototype.convetToCeremonial2 = function () {
        var t = this;
        $('input[name="waistcoat"]').val(0),
            (t.price_detail.waistcoat = 0),
            t.updatePrice(),
            (t.real_product_type = "man_ceremonial"),
            $(".extras.title_combined").hide(),
            $("#fabric .fabric_list").removeClass("three"),
            $("#fabric .fabric_box .price.split").removeClass("visible"),
            $("#fabric .fabric_box .price.split.man_suit2").addClass("visible"),
            $('.multifabric_selectors label[rel="man_waistcoat"]').hide();
        var e = t.current.fabric.man_jacket,
            i = $('#fabric .image[rel="' + e + '"] span').attr("category");
        (t.current.extras.waistcoat_button_holes_threads = []),
            (t.current.extras.waistcoat_initials = []),
            (t.current.extras.waistcoat_lining = []),
            t.extraSetPrice("waistcoat_button_holes_threads", 0),
            t.extraSetPrice("waistcoat_initials", 0),
            t.extraSetPrice("waistcoat_lining", 0),
            t.fabricPriceActive();
        var r = $('#fabric .fabric_box div[rel="' + e + '"]').parent();
        t.updateFabricPrices(!1, i, !0, r);
    }),
    (Garment.prototype.change_icon_trigger = function (t, e) {
        var i = t.attr("rel-icon"),
            r = t.attr("option_name"),
            a = $("." + r + " .option_icon", e).get(0);
        void 0 !== a && (a.className = a.className.replace(/icon_[^\s]+/, i));
    }),
    (Garment.prototype.check_auto_all_select = function (t) {
        0 == t.find("li.active").not(".all").length && t.find("li.all").addClass("active");
    }),
    (Garment.prototype.update_fabric_list = function (t, e, i, r) {
        var a = !1,
            o = this;
        if (i.simple_composition) {
            for (c = i.simple_composition.length - 1; c >= 0; c--) {
                if ("filcoupe" == i.simple_composition[c]) a = !0;
                "woolmark" == i.simple_composition[c] && ((i.c = ["100woolmerino"]), e.push("c"), i.simple_composition.splice(c, 1)),
                    "stretchy" == i.simple_composition[c] && ((i.st = ["2", "1"]), e.push("st"), i.simple_composition.splice(c, 1)),
                    "man_shirt" == o.product_type && "flannel" == i.simple_composition[c] && ((i.thread_style = ["flannel"]), e.push("thread_style"), i.simple_composition.splice(c, 1));
            }
            i.simple_composition.length < 1 && delete i.simple_composition;
        }
        if (i.characteristics) {
            for (c = i.characteristics.length - 1; c >= 0; c--) {
                if (
                    ("2ply" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("yarn"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "wrinkle" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("wrinkle"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "easy" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("easy"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "oeko" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("oeko"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "stretchy" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("stretchy"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "waterresistant" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("waterresistant"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "waterproof" == i.characteristics[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("waterproof"), e.push("tags"), i.characteristics.splice(c, 1)),
                    "brightness_brillante" == i.characteristics[c])
                ) {
                    n = i.characteristics[c];
                    (i[n] = [1]), e.push(n), i.characteristics.splice(c, 1);
                }
                if ("vegan" == i.characteristics[c]) {
                    var n = i.characteristics[c];
                    (i[n] = [1]), e.push(n), i.characteristics.splice(c, 1);
                }
            }
            i.characteristics.length < 1 && delete i.characteristics;
        }
        if (i.category_group) {
            for (var c = i.category_group.length - 1; c >= 0; c--) {
                "eco" == i.category_group[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("oeko"), e.push("tags"), i.category_group.splice(c, 1)),
                    "easy_wrinkle" == i.category_group[c] && (void 0 === i.tags && (i.tags = []), i.tags.push("easy"), i.tags.push("wrinkle"), e.push("tags"), i.category_group.splice(c, 1));
                var s = i.category_group[c];
                switch (s) {
                    case "new":
                    case "best_seller":
                    case "promo":
                        (i[s] = [1]), e.push(s), i.category_group.splice(c, 1);
                }
            }
            i.category_group.length < 1 && delete i.category_group;
        }
        o = this;
        t.each(function () {
            var t = $(this);
            t.addClass("active");
            var r = $(this).find("span");
            for (var n in e)
                if (void 0 != i[e[n]])
                    if (a && "simple_composition" == e[n]) {
                        p = r.attr("thread_style");
                        -1 == i[e[n]].indexOf(p) && t.removeClass("active");
                    } else if ("tags" == e[n]) {
                        var c = !1,
                            s = i[e[n]];
                        for (var l in s)
                            if ("stretchy" == s[l]) {
                                var _ = r.attr("st");
                                _ > 0 && (c = !0), "man_fieldjacket" == o.product_type && "stretchy" == (_ = r.attr("sci")) && (c = !0);
                            } else "yarn" == s[l] ? "1" == r.attr("y") && (c = !0) : -1 != r.attr("t").indexOf(s[l]) && (c = !0);
                        c || t.removeClass("active");
                    } else if ("simple_composition" == e[n]) {
                        var p = r.attr("simple_composition"),
                            c = !1;
                        for (var u in i[e[n]]) {
                            var d = i[e[n]][u];
                            -1 != p.indexOf(d) && (c = !0);
                        }
                        c || t.removeClass("active");
                    } else if ("season" == e[n] && "winter_tweed" == i[e[n]][0]) {
                        var f = r.attr("season"),
                            h = r.attr("simple_composition");
                        "winter" != f && "tweed" != h && t.removeClass("active");
                    } else {
                        p = r.attr(e[n]);
                        -1 == i[e[n]].indexOf(p) && i[e[n]] != p && t.removeClass("active");
                    }
            if ("man_suit" == o.product_type || "man_suit2" == o.product_type) r.attr("simple_composition"), r.attr("fw");
        });
        var l = $(".fabric_list .fabric_box.active:visible", r).length,
            _ = $(".fabric_list .fabric_box.active", r).length;
        0 == l && 0 == _ ? $(".empty_fabrics", r).addClass("active") : $(".empty_fabrics", r).removeClass("active"),
            $(".header_fabrics .number").html(l),
            $(".show_results .number").html(l).addClass("active"),
            0 == l && 0 == _ ? $(".show_results").addClass("zero") : $(".show_results").removeClass("zero"),
            0 == $(".lining_list .lining_box.active", r).length ? $(".empty_linings", r).addClass("active") : $(".empty_linings", r).removeClass("active"),
            this.bLazy_fabric && this.bLazy_fabric.revalidate(),
            $("#fabric .fabric_list").animate({ scrollTop: 0 }, 500),
            $(".fabric_container_lazy").get(0).scrollHeight <= $(".fabric_container_lazy").get(0).offsetHeight && $(".arrow_scroll").addClass("hide"),
            this.remarketing("fabric_filter", i);
    }),
    (Garment.prototype.resize_height_fabric_options_fix = function (t, e, i) {
        var r = t.height(),
            a = $(".multifabric_selectors").height();
        e.height(r), this.multi_fabric_active && (r += a), i && i.css("margin-top", r);
    }),
    (Garment.prototype.updateFabricPrices = function (t, e, i, r) {
        var a = this;
        if (a.multi_fabric_active && t && ("man_suit2" == a.product_type || "man_suit3" == a.product_type)) {
            (a.price_detail.fabric_man_suit2 = 0), (a.price_detail.fabric_man_suit3 = 0), (a.price_detail["fabric_" + t] = 0);
            for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
        } else if (a.multi_fabric_active && t && "man_smoking" == a.product_type) {
            a.price_detail["fabric_" + t] = 0;
            for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
        } else if (a.multi_fabric_active && t && ("man_levita" == a.product_type || "man_frac" == a.product_type || "man_chaque" == a.product_type)) {
            a.price_detail["fabric_" + t] = 0;
            for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
        } else if (t)
            if (t == a.real_product_type) {
                a.price_detail["fabric_" + t] = 0;
                for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
            } else a.price_detail["fabric_" + t] = 0;
        else
            for (var t in a.fabric)
                if (t == a.real_product_type) {
                    a.price_detail["fabric_" + t] = 0;
                    for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
                } else a.price_detail["fabric_" + t] = 0;
        if (i) {
            n = $("span", r).attr("dsc");
            if ("man_suit3" == a.real_product_type) n = $("span", r).attr("dsc_suit3");
            if ("man_ceremonial3" == a.real_product_type) var n = $("span", r).attr("dsc_ceremonial3");
            n && !a.multi_fabric_active ? (a.price_detail.fabric_discount = n) : (a.price_detail.fabric_discount = 0),
                (!a.multi_fabric_active || (a.multi_fabric_active && "man_pants" != a.multi_fabric_active && "man_waistcoat" != a.multi_fabric_active)) && ((a.bf_dsc = $("span", r).attr("bf_dsc")), a.bf_dsc || (a.bf_dsc = 0)),
                a.updatePrice();
        }
    }),
    (String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }),
    (Garment.prototype.showPreviewFabric = function (t, e) {
        this.push_dataLayer("config_" + this.product_type, "step:zoom_fabric");
        var i = this;
        (i.fabric_preview_open = !0), i.closeSeersuckerWarning();
        var r = t.prev().attr("price");
        if (("man_suit2" == i.product_type && "man_suit3" == i.real_product_type && (r = t.prev().attr("man_suit3")), i.complex && i.multi_fabric_active && (r = t.prev().attr(i.multi_fabric_active)), "lining" == e))
            t = {
                id_fabric: t.prev().attr("rel"),
                title: t.prev().attr("name"),
                brightness: t.prev().attr("br"),
                tone: t.prev().attr("tone"),
                category_group: t.prev().attr("category"),
                material: t.prev().attr("material"),
                price: t.prev().attr("data-price"),
                price_unlined: t.prev().attr("data-price-unlined"),
                unlined: "0",
                chaleco: "0",
            };
        else
            var t = {
                id_fabric: t.prev().attr("rel"),
                title: t.prev().attr("name"),
                new: t.prev().attr("new"),
                composition: t.prev().attr("c"),
                simple_composition: t.prev().attr("sci"),
                season: t.prev().attr("season"),
                thread_style: t.prev().attr("thread_style"),
                brightness: t.prev().attr("br"),
                tone: t.prev().attr("tp"),
                subtone: t.prev().attr("stp"),
                fabric_weight: t.prev().attr("fw"),
                thread_count: t.prev().attr("tco"),
                opacity: t.prev().attr("opacity"),
                rank: t.prev().attr("r"),
                category_group: t.prev().attr("cgi"),
                tags: t.prev().attr("t"),
                shirt_yarn: t.prev().attr("y"),
                material: t.prev().attr("material"),
                stretchy: t.prev().attr("st"),
                samples: t.prev().attr("sam"),
                thickness: t.prev().attr("th"),
                bars: { excelence: t.prev().attr("b_ex"), hot: t.prev().attr("b_cal"), weight: t.prev().attr("b_pes"), fineza: t.prev().attr("b_fin") },
                price: r,
            };
        fabricPreview.show(t, e, i.product_type, fabric_options_i18n, region);
    }),
    (Garment.prototype.initThumbFabric = function () {
        var t = this,
            e = $(".preview_fabric", t.container),
            i = $(".seersucker_warning", t.container);
        $(".fabric_box").on("click", "span.thumb_preview", function () {
            var e = $(this).parents(".sidebar-options").attr("id");
            return t.showPreviewFabric($(this), e), !1;
        }),
            e.click(function () {
                t.closeThumbFabric();
            }),
            $(".action_column", t.container).on("click", ".category_group span", function () {
                t.fabric_preview_open = !0;
                var e = t.product_type;
                e.replace("man_", "");
                ("man_suit" != t.product_type && "man_suit2" != t.product_type) || (e = "man_jacket"),
                    ("man_smoking" != t.product_type && "man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type) || (e = "man_jacket"),
                    t.multi_fabric_active && (e = $(this).parents(".fabric_group").attr("rel"));
                var i = t.current.fabric[e],
                    r = $('#fabric .image[rel="' + i + '"] span.thumb_preview');
                return t.showPreviewFabric(r, "fabric"), !1;
            }),
            $(".action_column", t.container).on("click", ".simple_composition .name", function () {
                t.fabric_preview_open = !0;
                var e = t.product_type;
                e.replace("man_", "");
                ("man_suit" != t.product_type && "man_suit2" != t.product_type) || (e = "man_jacket"),
                    ("man_smoking" != t.product_type && "man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type) || (e = "man_jacket"),
                    t.multi_fabric_active && (e = $(this).parents(".fabric_group").attr("rel"));
                var i = t.current.fabric[e],
                    r = $('#fabric .image[rel="' + i + '"] span.thumb_preview');
                return t.showPreviewFabric(r, "fabric"), !1;
            }),
            $(".lining_box").on("click", "span.thumb_preview", function () {
                return t.showPreviewFabric($(this), "lining"), !1;
            }),
            e.on("click", ".close", function () {
                t.closeThumbFabric();
            }),
            t.container.on("click", ".seersucker_warning", function () {
                t.closeSeersuckerWarning();
            }),
            i.on("click", ".close", function () {
                t.closeSeersuckerWarning();
            });
    }),
    (Garment.prototype.showInitialsImage = function () {
        var t = this;
        t.initials_image = !0;
        var e = window.cdn_host;
        if ((dev_mode && (e = ""), "man_coat" == t.product_type)) $("#available_window .initials .image img").attr("src", e + "images/man/coat/initials/initials.jpg");
        else if ("man_polo" == t.product_type) $("#initials .box_position_initial label.checked input").val(), $("#available_window .initials .image img").attr("src", e + "dimg/fabric/polo/" + t.current.fabric.man_polo + "_big.jpg");
        else if ("man_fieldjacket" == t.product_type) $("#available_window .initials .image img").attr("src", e + "images/man/jacket/initials/initials.jpg");
        else $("#available_window .initials .image img").attr("src", e + "images/man/jacket/initials/initials.jpg");
        $("#available_window .initials", t.container).show();
    }),
    (Garment.prototype.closeInitialsImage = function () {
        var t = this;
        (t.initials_image = !1), $("#available_window .initials", t.container).hide(), "man_polo" == t.product_type && t.current.extras.initials && t.renderInitials();
    }),
    (Garment.prototype.closeSeersuckerWarning = function () {
        var t = this,
            e = $(".seersucker_warning", t.container);
        (t.preview_seersucker_warning = !1), e.hide();
    }),
    (Garment.prototype.showSeersuckerWarning = function (t) {
        var e = this;
        e.seersucker_warning = !0;
        var i = $(".seersucker_warning", e.container);
        i.show();
        var r = window.cdn_host;
        dev_mode && (r = ""), $(".image img", i).attr("src", r + "/dimg/fabric/suit/" + t + "_huge.jpg");
    }),
    (Garment.prototype.closeThumbFabric = function () {
        (this.fabric_preview_open = !1), fabricPreview.close();
    }),
    (Garment.prototype.isFF = function () {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    }),
    (Garment.prototype.fabricPriceActive = function () {
        var t = this;
        0 == t.multi_fabric_active
            ? ($("#fabric .price").removeClass("visible"),
              $("#fabric .price." + t.real_product_type).addClass("visible"),
              $("#fabric .fabric_list .fabric_box.checked").removeClass("checked"),
              $('#fabric .fabric_list .fabric_box div[rel="' + t.current.fabric[t.multi_fabric_options[0]] + '"]')
                  .parent()
                  .addClass("checked"))
            : ($("#fabric .price").removeClass("visible"),
              $("#fabric .price." + t.multi_fabric_active).addClass("visible"),
              $("#fabric .fabric_list .fabric_box.checked").removeClass("checked"),
              $('#fabric .fabric_list .fabric_box div[rel="' + t.current.fabric[t.multi_fabric_active] + '"]')
                  .parent()
                  .addClass("checked"),
              setTimeout(function () {
                  var t = 0,
                      e = $("#fabric .fabric_list .fabric_box.checked");
                  e.length && (t = e.offset().top - 250), $("#fabric .fabric_list").animate({ scrollTop: t }, 500);
              }, 600));
    }),
    (Garment.prototype.push_dataLayer = function (t, e) {
        dataLayer && dataLayer.push({ event: "configurator", eventCategory: t, eventAction: e, eventLabel: "desktop" });
    }),
    (Garment.prototype.showQuilterWaistcoatAlert = function () {
        var t = this;
        (t.quilted_alert = !0), $(".quilted_waistcoat_alert", t.container).show();
        var e = window.cdn_host;
        dev_mode && (e = "");
        var i = "jacket";
        "man_coat" == t.product_type && (i = "coat"), $(".quilted_waistcoat_alert .image img", t.container).attr("src", e + "images/man/" + i + "/quilted_waistcoat_alert.jpg");
    }),
    (Garment.prototype.hideQuilterWaistcoatAlert = function () {
        var t = this;
        $(".quilted_waistcoat_alert", t.container).hide();
    }),
    (Garment.prototype.showUnlinedCoatAlert = function () {
        var t = this;
        (t.unlined_coat_alert = !0), $(".unlined_coat_alert", t.container).show();
        var e = window.cdn_host;
        dev_mode && (e = "");
        var i = "jacket";
        "man_coat" == t.product_type && (i = "coat"), $(".unlined_coat_alert .image img", t.container).attr("src", e + "images/man/" + i + "/unlined_coat_alert.jpg");
    }),
    (Garment.prototype.hideUnlinedCoatAlert = function () {
        var t = this;
        $(".unlined_coat_alert", t.container).hide();
    }),
    (Garment.prototype.showWinterLiningAlert = function () {
        var t = this;
        (t.winter_lining_alert = !0), $(".winter_lining_alert", t.container).show();
        var e = window.cdn_host;
        dev_mode && (e = ""), $(".winter_lining_alert .image img", t.container).attr("src", e + "/images/man/shirt/winter_lining_alert_3.jpg");
    }),
    (Garment.prototype.hideWinterLiningAlert = function () {
        var t = this;
        $(".winter_lining_alert", t.container).hide();
    }),
    (Garment.prototype.hideFabricOutOfStock = function () {
        $(".popup_warning_fabric_out").hide();
    }),
    (Garment.prototype.showCoatModePopup = function (t) {
        var e = this;
        $(".popup_coat_mode", e.container).removeClass("light normal winter winter_detachable").addClass(t).show();
        var i = window.cdn_host;
        dev_mode && (i = ""), $(".popup_coat_mode .image img", e.container).attr("src", i + "images/man/coat/" + t + ".png");
    }),
    (Garment.prototype.hideCoatModePopup = function () {
        var t = this;
        $(".popup_coat_mode", t.container).hide();
    }),
    (Garment.prototype.validateStateButtonHoles = function (t) {
        var e = !1,
            i = 0;
        return (
            $(".color_section.active, .thread_section.active", t).each(function () {
                "" != $("input", this).val() && ++i;
            }),
            i >= 1 && (e = !0),
            e
        );
    }),
    (Garment.prototype.saveExtraBoxButtonsHoles = function (t, e) {
        var i = this;
        if (i.validateStateButtonHoles(e)) {
            e.attr("id");
            [];
            var r = 0;
            "" != $("input#input_button_holes_threads", e).val() && ((r = parseFloat(e.attr("data-price"))), isNaN(r) && (r = 0)),
                i.extraSetPrice(t, r),
                void 0 !== i.product_config[t].contrast && i.relationsApply(t + "[contrast]", i.product_config[t].contrast.all);
        } else i.extraSetPrice(t, 0), void 0 !== i.product_config[t].contrast && i.relationsApply(t + "[contrast]", i.product_config[t].contrast[""]);
    }),
    (Garment.prototype.restoreBoxHoles = function (t, e) {
        var i = this;
        if (i.validateStateButtonHoles(e) ? 0 : 1) {
            $(".color_section input", e).val(""), $(".color_section .common_color.checked").removeClass("checked"), $(".color_section", e).removeClass("active"), $(".option_trigger", e).removeClass("active");
            var r = e.attr("id");
            if (!i.extra_threads_state) return $(".option_trigger.zero_value", e).addClass("active"), !0;
            var a = i.extra_threads_state["input_" + r];
            if ("only_cuffs" == a) {
                $("[rel=" + a + "]", e).addClass("active"), $("input[name=" + r + "]", e).val(a);
                var o = i.extra_threads_state.input_only_cuffs;
                $('.color_section .list_common_color[rel="' + a + '"] .common_color[rel="' + o + '"]').addClass("checked"),
                    $('.color_section .list_common_color[rel="' + a + '"] input').val(o),
                    $(".color_section." + a, e).addClass("active");
            } else "" == a && ($("[rel=" + a + "]", e).addClass("active"), $("input[name=" + r + "]", e).val(a), $(".color_section.only_cuffs", e).addClass("active"), $(".color_section.all", e).addClass("active"));
            i.renderDraw();
        }
    }),
    (Garment.prototype.removeAllFilters = function (t, e, i, r, a) {
        var o = this,
            n = [];
        t.find(".active_filters li").each(function () {
            $(this).remove();
        }),
            o.update_fabric_list(e, n, n, t),
            t.find(".extra_fabrics").scrollTop(0),
            a.find(".item_menu_filter.active .sub_menu_filter").removeClass("active").hide(),
            a.find(".item_menu_filter.active").removeClass("active"),
            a.find(".item_menu.active").removeClass("active"),
            a.find(".filter li.active").removeClass("active"),
            a.find(".filter li.all").addClass("active");
    }),
    (Garment.prototype.extraSetPrice = function (t, e) {
        var i = this,
            r = !1;
        "piping" == t && ((t = "lining"), "man_coat" == i.product_type && (t = "coat_lining"), (r = !0));
        var a = !1;
        if ((null == e && t.indexOf("lining") > -1 && ((a = !0), (e = 0)), -1 == t.indexOf("_initials") && "logos" != t))
            if (e > 0 || a) {
                o = $("#" + t, i.container);
                $("input", o).each(function () {
                    var e = $(this).attr("name_current"),
                        r = $(this).val();
                    "tuxedo" != t && "type_flap" != t ? (i.current.extras[t][e] = r) : (i.current.extras[t] = r);
                });
            } else {
                var o = $("#" + t, i.container);
                (i.current.extras[t] = []),
                    "contrasts" == t &&
                        $("input", o).each(function () {
                            var e = $(this).attr("name_current");
                            i.current.extras[t][e] = "";
                        });
            }
        "handkerchief" == t && e > 0 ? i.pocket_square.show() : i.pocket_square.hide(),
            r ? (this.price_detail.piping = e) : (this.price_detail[t] = e),
            this.updatePrice(),
            e > 0
                ? ("quilted_waistcoat" == t && $(".quilted_waistcoat_click").addClass("active"),
                  "contrasts" == t || "type_flap" == t ? $('#extra .container_options ul span[href="satin_flap"]').addClass("inc_price") : $('#extra .container_options ul span[href="' + t + '"]').addClass("inc_price"))
                : ("quilted_waistcoat" == t && $(".quilted_waistcoat_click").removeClass("active"),
                  "contrasts" == t || "type_flap" == t ? $('#extra .container_options ul span[href="satin_flap"]').removeClass("inc_price") : $('#extra .container_options ul span[href="' + t + '"]').removeClass("inc_price"));
    }),
    (Garment.prototype.inArray = function (t, e) {
        if (!e) return !1;
        for (var i = e.length, r = 0; r < i; r++) if (e[r] == t) return !0;
        return !1;
    }),
    (Garment.prototype.updatePrice = function () {
        var t = this,
            e = 0;
        for (var i in t.price_detail) isNaN(t.price_detail[i]) && delete t.price_detail[i], (e += parseFloat(t.price_detail[i]));
        if (t.bf_dsc > 0 && window.blackfriday_enabled) {
            var r = e;
            e *= 1 - t.bf_dsc / 100;
        }
        var a = format_price((e = Math.round(100 * e) / 100), "small_symbol", window.currency_json);
        if (($(".action_column div.price").html(a), t.price_detail.fabric_discount < 0)) {
            $(".action_column div.price").not(".original_price").addClass("discount");
            n = format_price((o = e - t.price_detail.fabric_discount), "small_symbol", window.currency_json);
            $(".action_column div.original_price").html(n).show();
        } else if (t.bf_dsc > 0 && window.blackfriday_enabled) {
            $(".action_column div.price").not(".original_price").addClass("discount");
            var o = r,
                n = format_price(o, "small_symbol", window.currency_json);
            $(".action_column div.original_price").html(n).show();
        } else $(".action_column div.price").removeClass("discount"), $(".action_column div.original_price").hide();
    }),
    (Garment.prototype.minimalMode = function (t) {
        if (customer_edit && window.dataLayer && window.dataLayer.length > 0 && void 0 !== window.dataLayer[0].t4l_n_orders && 1 * window.dataLayer[0].t4l_n_orders > 0) return !1;
        if (this.minimal_enabled) return !1;
        var e = [],
            i = this;
        if (
            ((this.isHiddenByMinimal = function (t) {
                for (var i in e) if (e[i].is(t)) return !0;
                return !1;
            }),
            this.garment_inited)
        ) {
            this.container.addClass("minimal"),
                $(".options_list > li", this.container)
                    .filter(".not_show")
                    .each(function () {
                        var t = $("> span", this).attr("href");
                        t && e.push($(t).hide());
                    })
                    .bind("cssClassChanged", function () {
                        var e = $("> span", this).attr("href");
                        if (e)
                            if ($(this).hasClass("not_show")) $(e).hide();
                            else {
                                var i = e.substring(1);
                                for (var r in t) for (var a in t[r]) if (a == i && "all" == t[r][a]) return !1;
                                $(e).show();
                            }
                    }),
                $("#config .subbox_opt", this.container).bind("cssClassChanged", function () {
                    var t = $(this);
                    t.is(":visible") && i.isHiddenByMinimal(this) && t.hide();
                });
            for (var r in t)
                for (var a in t[r]) {
                    var o = t[r][a],
                        n = $("#" + a);
                    if (Array.isArray(o))
                        for (var c = n.find(".option_trigger, .common_color, .check_button"), s = 0; s < o.length; s++) 0 == o[s].toString().indexOf(".") ? e.push(n.find(o[s]).hide()) : e.push(c.filter('[rel="' + o[s] + '"]').hide());
                    else "all" == o ? e.push(n.hide()) : 0 == o.indexOf(".") && e.push(n.find(o).hide());
                }
            $(".box_opt.col2", this.container).addClass("col3 before_col2").removeClass("col2");
            var l = this;
            $("#config .box_opts, #extra .box_opts")
                .append($(".change_full_version", l.container))
                .find(".removeMinimal")
                .click(function () {
                    l.container.removeClass("minimal");
                    for (var t in e) e[t].show();
                    $(".box_opt.before_col2", this.container).addClass("col2").removeClass("col3"), $(".box_opts", l.container).perfectScrollbar("destroy"), $(".box_opt:not(.extra_fabrics,.extra_linings)", l.container).perfectScrollbar();
                }),
                $("#config .container_options ul, #extra .container_options ul")
                    .append($("<li />").append($(".change_minimal_version", l.container).contents()).addClass("change_minimal_version"))
                    .find(".backMinimal")
                    .click(function () {
                        l.container.addClass("minimal");
                        for (var t in e) e[t].hide();
                        $(".box_opt.before_col2", this.container).addClass("col3").removeClass("col2"),
                            $(".box_opt:not(.extra_fabrics,.extra_linings)", l.container).perfectScrollbar("destroy"),
                            $(".box_opts", l.container).perfectScrollbar();
                    }),
                $(".box_opt:not(.extra_fabrics,.extra_linings)", this.container).perfectScrollbar("destroy"),
                $(".box_opts", this.container).perfectScrollbar(),
                (this.minimal_enabled = !0);
        } else this.minimal_array = disabled_options;
    }),
    (String.prototype.trim = function (t) {
        var e,
            i = 0,
            r = 0,
            a = this + "";
        for (e = t ? (t += "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\v            ​\u2028\u2029　", i = a.length, r = 0; r < i; r++)
            if (-1 === e.indexOf(a.charAt(r))) {
                a = a.substring(r);
                break;
            }
        for (r = (i = a.length) - 1; r >= 0; r--)
            if (-1 === e.indexOf(a.charAt(r))) {
                a = a.substring(0, r + 1);
                break;
            }
        return -1 === e.indexOf(a.charAt(0)) ? a : "";
    }),
    (String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }),
    (String.prototype.getID = function (t) {
        return t ? this.replace(/^[^#]*#/, "") : this.replace(/^[^#]*/, "");
    }),
    (Object.size = function (t) {
        var e,
            i = 0;
        for (e in t) t.hasOwnProperty(e) && i++;
        return i;
    }),
    "object" != typeof JSON && (JSON = {}),
    (function () {
        "use strict";
        function f(t) {
            return t < 10 ? "0" + t : t;
        }
        function quote(t) {
            return (
                (escapable.lastIndex = 0),
                escapable.test(t)
                    ? '"' +
                      t.replace(escapable, function (t) {
                          var e = meta[t];
                          return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                      }) +
                      '"'
                    : '"' + t + '"'
            );
        }
        function str(t, e) {
            var i,
                r,
                a,
                o,
                n,
                c = gap,
                s = e[t];
            switch ((s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(t)), "function" == typeof rep && (s = rep.call(e, t, s)), typeof s)) {
                case "string":
                    return quote(s);
                case "number":
                    return isFinite(s) ? String(s) : "null";
                case "boolean":
                case "null":
                    return String(s);
                case "object":
                    if (!s) return "null";
                    if (((gap += indent), (n = []), "[object Array]" === Object.prototype.toString.apply(s))) {
                        for (o = s.length, i = 0; i < o; i += 1) n[i] = str(i, s) || "null";
                        return (a = 0 === n.length ? "[]" : gap ? "[\n" + gap + n.join(",\n" + gap) + "\n" + c + "]" : "[" + n.join(",") + "]"), (gap = c), a;
                    }
                    if (rep && "object" == typeof rep) for (o = rep.length, i = 0; i < o; i += 1) "string" == typeof rep[i] && ((r = rep[i]), (a = str(r, s)) && n.push(quote(r) + (gap ? ": " : ":") + a));
                    else for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (a = str(r, s)) && n.push(quote(r) + (gap ? ": " : ":") + a);
                    return (a = 0 === n.length ? "{}" : gap ? "{\n" + gap + n.join(",\n" + gap) + "\n" + c + "}" : "{" + n.join(",") + "}"), (gap = c), a;
            }
        }
        "function" != typeof Date.prototype.toJSON &&
            ((Date.prototype.toJSON = function (t) {
                return isFinite(this.valueOf())
                    ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
                    : null;
            }),
            (String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
                return this.valueOf();
            }));
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
            rep;
        "function" != typeof JSON.stringify &&
            (JSON.stringify = function (t, e, i) {
                var r;
                if (((gap = ""), (indent = ""), "number" == typeof i)) for (r = 0; r < i; r += 1) indent += " ";
                else "string" == typeof i && (indent = i);
                if (((rep = e), !e || "function" == typeof e || ("object" == typeof e && "number" == typeof e.length))) return str("", { "": t });
                throw new Error("JSON.stringify");
            }),
            "function" != typeof JSON.parse &&
                (JSON.parse = function (text, reviver) {
                    function walk(t, e) {
                        var i,
                            r,
                            a = t[e];
                        if (a && "object" == typeof a) for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (r = walk(a, i)) ? (a[i] = r) : delete a[i]);
                        return reviver.call(t, e, a);
                    }
                    var j;
                    if (
                        ((text = String(text)),
                        (cx.lastIndex = 0),
                        cx.test(text) &&
                            (text = text.replace(cx, function (t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
                            })),
                        /^[\],:{}\s]*$/.test(
                            text
                                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
                        ))
                    )
                        return (j = eval("(" + text + ")")), "function" == typeof reviver ? walk({ "": j }, "") : j;
                    throw new SyntaxError("JSON.parse");
                });
    })(),
    (function (t, e) {
        "use strict";
        var i = (t.History = t.History || {}),
            r = t.jQuery;
        if (void 0 !== i.Adapter) throw new Error("History.js Adapter has already been loaded...");
        (i.Adapter = {
            bind: function (t, e, i) {
                r(t).bind(e, i);
            },
            trigger: function (t, e, i) {
                r(t).trigger(e, i);
            },
            extractEventData: function (t, e, i) {
                return (e && e.originalEvent && e.originalEvent[t]) || (i && i[t]) || void 0;
            },
            onDomLoad: function (t) {
                r(t);
            },
        }),
            void 0 !== i.init && i.init();
    })(window),
    (function (t, e) {
        "use strict";
        var i = t.document,
            r = t.setTimeout || r,
            a = t.clearTimeout || a,
            o = t.setInterval || o,
            n = (t.History = t.History || {});
        if (void 0 !== n.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        (n.initHtml4 = function () {
            if (void 0 !== n.initHtml4.initialized) return !1;
            (n.initHtml4.initialized = !0),
                (n.enabled = !0),
                (n.savedHashes = []),
                (n.isLastHash = function (t) {
                    return t === n.getHashByIndex();
                }),
                (n.isHashEqual = function (t, e) {
                    return (t = encodeURIComponent(t).replace(/%25/g, "%")), (e = encodeURIComponent(e).replace(/%25/g, "%")), t === e;
                }),
                (n.saveHash = function (t) {
                    return !n.isLastHash(t) && (n.savedHashes.push(t), !0);
                }),
                (n.getHashByIndex = function (t) {
                    return void 0 === t ? n.savedHashes[n.savedHashes.length - 1] : t < 0 ? n.savedHashes[n.savedHashes.length + t] : n.savedHashes[t];
                }),
                (n.discardedHashes = {}),
                (n.discardedStates = {}),
                (n.discardState = function (t, e, i) {
                    var r,
                        a = n.getHashByState(t);
                    return (r = { discardedState: t, backState: i, forwardState: e }), (n.discardedStates[a] = r), !0;
                }),
                (n.discardHash = function (t, e, i) {
                    var r = { discardedHash: t, backState: i, forwardState: e };
                    return (n.discardedHashes[t] = r), !0;
                }),
                (n.discardedState = function (t) {
                    var e = n.getHashByState(t);
                    return n.discardedStates[e] || !1;
                }),
                (n.discardedHash = function (t) {
                    return n.discardedHashes[t] || !1;
                }),
                (n.recycleState = function (t) {
                    var e = n.getHashByState(t);
                    return n.discardedState(t) && delete n.discardedStates[e], !0;
                }),
                n.emulated.hashChange &&
                    ((n.hashChangeInit = function () {
                        n.checkerFunction = null;
                        var e,
                            r,
                            a,
                            c,
                            s = "",
                            l = Boolean(n.getHash());
                        return (
                            n.isInternetExplorer()
                                ? ((e = "historyjs-iframe"),
                                  (r = i.createElement("iframe")).setAttribute("id", e),
                                  r.setAttribute("src", "#"),
                                  (r.style.display = "none"),
                                  i.body.appendChild(r),
                                  r.contentWindow.document.open(),
                                  r.contentWindow.document.close(),
                                  (a = ""),
                                  (c = !1),
                                  (n.checkerFunction = function () {
                                      if (c) return !1;
                                      c = !0;
                                      var e = n.getHash(),
                                          i = n.getHash(r.contentWindow.document);
                                      return (
                                          e !== s
                                              ? ((s = e),
                                                i !== e && ((a = i = e), r.contentWindow.document.open(), r.contentWindow.document.close(), (r.contentWindow.document.location.hash = n.escapeHash(e))),
                                                n.Adapter.trigger(t, "hashchange"))
                                              : i !== a && ((a = i), l && "" === i ? n.back() : n.setHash(i, !1)),
                                          (c = !1),
                                          !0
                                      );
                                  }))
                                : (n.checkerFunction = function () {
                                      var e = n.getHash() || "";
                                      return e !== s && ((s = e), n.Adapter.trigger(t, "hashchange")), !0;
                                  }),
                            n.intervalList.push(o(n.checkerFunction, n.options.hashChangeInterval)),
                            !0
                        );
                    }),
                    n.Adapter.onDomLoad(n.hashChangeInit)),
                n.emulated.pushState &&
                    ((n.onHashChange = function (e) {
                        var i,
                            r = (e && e.newURL) || n.getLocationHref(),
                            a = n.getHashByUrl(r),
                            o = null;
                        return n.isLastHash(a)
                            ? (n.busy(!1), !1)
                            : (n.doubleCheckComplete(),
                              n.saveHash(a),
                              a && n.isTraditionalAnchor(a)
                                  ? (n.Adapter.trigger(t, "anchorchange"), n.busy(!1), !1)
                                  : ((o = n.extractState(n.getFullUrl(a || n.getLocationHref()), !0)),
                                    n.isLastSavedState(o)
                                        ? (n.busy(!1), !1)
                                        : (n.getHashByState(o),
                                          (i = n.discardedState(o)) ? (n.getHashByIndex(-2) === n.getHashByState(i.forwardState) ? n.back(!1) : n.forward(!1), !1) : (n.pushState(o.data, o.title, encodeURI(o.url), !1), !0))));
                    }),
                    n.Adapter.bind(t, "hashchange", n.onHashChange),
                    (n.pushState = function (e, i, r, a) {
                        if (((r = encodeURI(r).replace(/%25/g, "%")), n.getHashByUrl(r))) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                        if (!1 !== a && n.busy()) return n.pushQueue({ scope: n, callback: n.pushState, args: arguments, queue: a }), !1;
                        n.busy(!0);
                        var o = n.createStateObject(e, i, r),
                            c = n.getHashByState(o),
                            s = n.getState(!1),
                            l = n.getHashByState(s),
                            _ = n.getHash(),
                            p = n.expectedStateId == o.id;
                        return (
                            n.storeState(o),
                            (n.expectedStateId = o.id),
                            n.recycleState(o),
                            n.setTitle(o),
                            c === l ? (n.busy(!1), !1) : (n.saveState(o), p || n.Adapter.trigger(t, "statechange"), !n.isHashEqual(c, _) && !n.isHashEqual(c, n.getShortUrl(n.getLocationHref())) && n.setHash(c, !1), n.busy(!1), !0)
                        );
                    }),
                    (n.replaceState = function (e, i, r, a) {
                        if (((r = encodeURI(r).replace(/%25/g, "%")), n.getHashByUrl(r))) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                        if (!1 !== a && n.busy()) return n.pushQueue({ scope: n, callback: n.replaceState, args: arguments, queue: a }), !1;
                        n.busy(!0);
                        var o = n.createStateObject(e, i, r),
                            c = n.getHashByState(o),
                            s = n.getState(!1),
                            l = n.getHashByState(s),
                            _ = n.getStateByIndex(-2);
                        return (
                            n.discardState(s, o, _),
                            c === l ? (n.storeState(o), (n.expectedStateId = o.id), n.recycleState(o), n.setTitle(o), n.saveState(o), n.Adapter.trigger(t, "statechange"), n.busy(!1)) : n.pushState(o.data, o.title, o.url, !1),
                            !0
                        );
                    })),
                n.emulated.pushState &&
                    n.getHash() &&
                    !n.emulated.hashChange &&
                    n.Adapter.onDomLoad(function () {
                        n.Adapter.trigger(t, "hashchange");
                    });
        }),
            void 0 !== n.init && n.init();
    })(window),
    (function (t, e) {
        "use strict";
        var i = t.console || e,
            r = t.document,
            a = t.navigator,
            o = !1,
            n = t.setTimeout,
            c = t.clearTimeout,
            s = t.setInterval,
            l = t.clearInterval,
            _ = t.JSON,
            p = t.alert,
            u = (t.History = t.History || {}),
            d = t.history;
        try {
            (o = t.sessionStorage).setItem("TEST", "1"), o.removeItem("TEST");
        } catch (t) {
            o = !1;
        }
        if (((_.stringify = _.stringify || _.encode), (_.parse = _.parse || _.decode), void 0 !== u.init)) throw new Error("History.js Core has already been loaded...");
        (u.init = function (t) {
            return void 0 !== u.Adapter && (void 0 !== u.initCore && u.initCore(), void 0 !== u.initHtml4 && u.initHtml4(), !0);
        }),
            (u.initCore = function (f) {
                if (void 0 !== u.initCore.initialized) return !1;
                if (
                    ((u.initCore.initialized = !0),
                    (u.options = u.options || {}),
                    (u.options.hashChangeInterval = u.options.hashChangeInterval || 100),
                    (u.options.safariPollInterval = u.options.safariPollInterval || 500),
                    (u.options.doubleCheckInterval = u.options.doubleCheckInterval || 500),
                    (u.options.disableSuid = u.options.disableSuid || !1),
                    (u.options.storeInterval = u.options.storeInterval || 1e3),
                    (u.options.busyDelay = u.options.busyDelay || 250),
                    (u.options.debug = u.options.debug || !1),
                    (u.options.initialTitle = u.options.initialTitle || r.title),
                    (u.options.html4Mode = u.options.html4Mode || !1),
                    (u.options.delayInit = u.options.delayInit || !1),
                    (u.intervalList = []),
                    (u.clearAllIntervals = function () {
                        var t,
                            e = u.intervalList;
                        if (void 0 !== e && null !== e) {
                            for (t = 0; t < e.length; t++) l(e[t]);
                            u.intervalList = null;
                        }
                    }),
                    (u.debug = function () {
                        (u.options.debug || !1) && u.log.apply(u, arguments);
                    }),
                    (u.log = function () {
                        var t,
                            e,
                            a,
                            o,
                            n,
                            c = void 0 !== i && void 0 !== i.log && void 0 !== i.log.apply,
                            s = r.getElementById("log");
                        for (
                            c ? ((o = Array.prototype.slice.call(arguments)), (t = o.shift()), void 0 !== i.debug ? i.debug.apply(i, [t, o]) : i.log.apply(i, [t, o])) : (t = "\n" + arguments[0] + "\n"), e = 1, a = arguments.length;
                            e < a;
                            ++e
                        ) {
                            if ("object" == typeof (n = arguments[e]) && void 0 !== _)
                                try {
                                    n = _.stringify(n);
                                } catch (t) {}
                            t += "\n" + n + "\n";
                        }
                        return s ? ((s.value += t + "\n-----\n"), (s.scrollTop = s.scrollHeight - s.clientHeight)) : c || p(t), !0;
                    }),
                    (u.getInternetExplorerMajorVersion = function () {
                        return (u.getInternetExplorerMajorVersion.cached =
                            void 0 !== u.getInternetExplorerMajorVersion.cached
                                ? u.getInternetExplorerMajorVersion.cached
                                : (function () {
                                      for (var t = 3, e = r.createElement("div"), i = e.getElementsByTagName("i"); (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && i[0]; );
                                      return t > 4 && t;
                                  })());
                    }),
                    (u.isInternetExplorer = function () {
                        return (u.isInternetExplorer.cached = void 0 !== u.isInternetExplorer.cached ? u.isInternetExplorer.cached : Boolean(u.getInternetExplorerMajorVersion()));
                    }),
                    u.options.html4Mode
                        ? (u.emulated = { pushState: !0, hashChange: !0 })
                        : (u.emulated = {
                              pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(a.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(a.userAgent)),
                              hashChange: Boolean(!("onhashchange" in t || "onhashchange" in r) || (u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8)),
                          }),
                    (u.enabled = !u.emulated.pushState),
                    (u.bugs = {
                        setHash: Boolean(!u.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),
                        safariPoll: Boolean(!u.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)),
                        ieDoubleCheck: Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8),
                        hashEscape: Boolean(u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 7),
                    }),
                    (u.isEmptyObject = function (t) {
                        for (var e in t) if (t.hasOwnProperty(e)) return !1;
                        return !0;
                    }),
                    (u.cloneObject = function (t) {
                        var e, i;
                        return t ? ((e = _.stringify(t)), (i = _.parse(e))) : (i = {}), i;
                    }),
                    (u.getRootUrl = function () {
                        var t = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                        return r.location.port && (t += ":" + r.location.port), (t += "/");
                    }),
                    (u.getBaseHref = function () {
                        var t = r.getElementsByTagName("base"),
                            e = null,
                            i = "";
                        return 1 === t.length && ((e = t[0]), (i = e.href.replace(/[^\/]+$/, ""))), (i = i.replace(/\/+$/, "")) && (i += "/"), i;
                    }),
                    (u.getBaseUrl = function () {
                        return u.getBaseHref() || u.getBasePageUrl() || u.getRootUrl();
                    }),
                    (u.getPageUrl = function () {
                        return ((u.getState(!1, !1) || {}).url || u.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function (t, e, i) {
                            return /\./.test(t) ? t : t + "/";
                        });
                    }),
                    (u.getBasePageUrl = function () {
                        return (
                            u
                                .getLocationHref()
                                .replace(/[#\?].*/, "")
                                .replace(/[^\/]+$/, function (t, e, i) {
                                    return /[^\/]$/.test(t) ? "" : t;
                                })
                                .replace(/\/+$/, "") + "/"
                        );
                    }),
                    (u.getFullUrl = function (t, e) {
                        var i = t,
                            r = t.substring(0, 1);
                        return (
                            (e = void 0 === e || e),
                            /[a-z]+\:\/\//.test(t) ||
                                (i =
                                    "/" === r
                                        ? u.getRootUrl() + t.replace(/^\/+/, "")
                                        : "#" === r
                                        ? u.getPageUrl().replace(/#.*/, "") + t
                                        : "?" === r
                                        ? u.getPageUrl().replace(/[\?#].*/, "") + t
                                        : e
                                        ? u.getBaseUrl() + t.replace(/^(\.\/)+/, "")
                                        : u.getBasePageUrl() + t.replace(/^(\.\/)+/, "")),
                            i.replace(/\#$/, "")
                        );
                    }),
                    (u.getShortUrl = function (t) {
                        var e = t,
                            i = u.getBaseUrl(),
                            r = u.getRootUrl();
                        return u.emulated.pushState && (e = e.replace(i, "")), (e = e.replace(r, "/")), u.isTraditionalAnchor(e) && (e = "./" + e), (e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""));
                    }),
                    (u.getLocationHref = function (t) {
                        return (t = t || r).URL === t.location.href
                            ? t.location.href
                            : t.location.href === decodeURIComponent(t.URL)
                            ? t.URL
                            : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash
                            ? t.location.href
                            : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#")
                            ? t.location.href
                            : t.URL || t.location.href;
                    }),
                    (u.store = {}),
                    (u.idToState = u.idToState || {}),
                    (u.stateToId = u.stateToId || {}),
                    (u.urlToId = u.urlToId || {}),
                    (u.storedStates = u.storedStates || []),
                    (u.savedStates = u.savedStates || []),
                    (u.normalizeStore = function () {
                        (u.store.idToState = u.store.idToState || {}), (u.store.urlToId = u.store.urlToId || {}), (u.store.stateToId = u.store.stateToId || {});
                    }),
                    (u.getState = function (t, e) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0);
                        var i = u.getLastSavedState();
                        return !i && e && (i = u.createStateObject()), t && ((i = u.cloneObject(i)), (i.url = i.cleanUrl || i.url)), i;
                    }),
                    (u.getIdByState = function (t) {
                        var e,
                            i = u.extractId(t.url);
                        if (!i)
                            if (((e = u.getStateString(t)), void 0 !== u.stateToId[e])) i = u.stateToId[e];
                            else if (void 0 !== u.store.stateToId[e]) i = u.store.stateToId[e];
                            else {
                                for (; (i = new Date().getTime() + String(Math.random()).replace(/\D/g, "")), void 0 !== u.idToState[i] || void 0 !== u.store.idToState[i]; );
                                (u.stateToId[e] = i), (u.idToState[i] = t);
                            }
                        return i;
                    }),
                    (u.normalizeState = function (t) {
                        var e, i;
                        return (
                            (t && "object" == typeof t) || (t = {}),
                            void 0 !== t.normalized
                                ? t
                                : ((t.data && "object" == typeof t.data) || (t.data = {}),
                                  (e = {}),
                                  (e.normalized = !0),
                                  (e.title = t.title || ""),
                                  (e.url = u.getFullUrl(t.url ? t.url : u.getLocationHref())),
                                  (e.hash = u.getShortUrl(e.url)),
                                  (e.data = u.cloneObject(t.data)),
                                  (e.id = u.getIdByState(e)),
                                  (e.cleanUrl = e.url.replace(/\??\&_suid.*/, "")),
                                  (e.url = e.cleanUrl),
                                  (i = !u.isEmptyObject(e.data)),
                                  (e.title || i) && !0 !== u.options.disableSuid && ((e.hash = u.getShortUrl(e.url).replace(/\??\&_suid.*/, "")), /\?/.test(e.hash) || (e.hash += "?"), (e.hash += "&_suid=" + e.id)),
                                  (e.hashedUrl = u.getFullUrl(e.hash)),
                                  (u.emulated.pushState || u.bugs.safariPoll) && u.hasUrlDuplicate(e) && (e.url = e.hashedUrl),
                                  e)
                        );
                    }),
                    (u.createStateObject = function (t, e, i) {
                        var r = { data: t, title: e, url: i };
                        return (r = u.normalizeState(r));
                    }),
                    (u.getStateById = function (t) {
                        return (t = String(t)), u.idToState[t] || u.store.idToState[t] || e;
                    }),
                    (u.getStateString = function (t) {
                        var e, i;
                        return (e = u.normalizeState(t)), (i = { data: e.data, title: t.title, url: t.url }), _.stringify(i);
                    }),
                    (u.getStateId = function (t) {
                        var e;
                        return (e = u.normalizeState(t)), e.id;
                    }),
                    (u.getHashByState = function (t) {
                        var e;
                        return (e = u.normalizeState(t)), e.hash;
                    }),
                    (u.extractId = function (t) {
                        var e, i;
                        return (i = -1 != t.indexOf("#") ? t.split("#")[0] : t), (e = /(.*)\&_suid=([0-9]+)$/.exec(i)), e ? e[1] || t : t, (e ? String(e[2] || "") : "") || !1;
                    }),
                    (u.isTraditionalAnchor = function (t) {
                        return !/[\/\?\.]/.test(t);
                    }),
                    (u.extractState = function (t, e) {
                        var i,
                            r,
                            a = null;
                        return (
                            (e = e || !1),
                            (i = u.extractId(t)) && (a = u.getStateById(i)),
                            a || ((r = u.getFullUrl(t)), (i = u.getIdByUrl(r) || !1) && (a = u.getStateById(i)), !a && e && !u.isTraditionalAnchor(t) && (a = u.createStateObject(null, null, r))),
                            a
                        );
                    }),
                    (u.getIdByUrl = function (t) {
                        return u.urlToId[t] || u.store.urlToId[t] || e;
                    }),
                    (u.getLastSavedState = function () {
                        return u.savedStates[u.savedStates.length - 1] || e;
                    }),
                    (u.getLastStoredState = function () {
                        return u.storedStates[u.storedStates.length - 1] || e;
                    }),
                    (u.hasUrlDuplicate = function (t) {
                        var e;
                        return (e = u.extractState(t.url)), e && e.id !== t.id;
                    }),
                    (u.storeState = function (t) {
                        return (u.urlToId[t.url] = t.id), u.storedStates.push(u.cloneObject(t)), t;
                    }),
                    (u.isLastSavedState = function (t) {
                        var e,
                            i,
                            r,
                            a = !1;
                        return u.savedStates.length && ((e = t.id), (i = u.getLastSavedState()), (r = i.id), (a = e === r)), a;
                    }),
                    (u.saveState = function (t) {
                        return !u.isLastSavedState(t) && (u.savedStates.push(u.cloneObject(t)), !0);
                    }),
                    (u.getStateByIndex = function (t) {
                        return void 0 === t ? u.savedStates[u.savedStates.length - 1] : t < 0 ? u.savedStates[u.savedStates.length + t] : u.savedStates[t];
                    }),
                    (u.getCurrentIndex = function () {
                        return u.savedStates.length < 1 ? 0 : u.savedStates.length - 1;
                    }),
                    (u.getHash = function (t) {
                        var e = u.getLocationHref(t);
                        return u.getHashByUrl(e);
                    }),
                    (u.unescapeHash = function (t) {
                        var e = u.normalizeHash(t);
                        return (e = decodeURIComponent(e));
                    }),
                    (u.normalizeHash = function (t) {
                        return t.replace(/[^#]*#/, "").replace(/#.*/, "");
                    }),
                    (u.setHash = function (t, e) {
                        var i, a;
                        return !1 !== e && u.busy()
                            ? (u.pushQueue({ scope: u, callback: u.setHash, args: arguments, queue: e }), !1)
                            : (u.busy(!0),
                              (i = u.extractState(t, !0)) && !u.emulated.pushState
                                  ? u.pushState(i.data, i.title, i.url, !1)
                                  : u.getHash() !== t && (u.bugs.setHash ? ((a = u.getPageUrl()), u.pushState(null, null, a + "#" + t, !1)) : (r.location.hash = t)),
                              u);
                    }),
                    (u.escapeHash = function (e) {
                        var i = u.normalizeHash(e);
                        return (i = t.encodeURIComponent(i)), u.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i;
                    }),
                    (u.getHashByUrl = function (t) {
                        var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                        return (e = u.unescapeHash(e));
                    }),
                    (u.setTitle = function (t) {
                        var e,
                            i = t.title;
                        i || ((e = u.getStateByIndex(0)) && e.url === t.url && (i = e.title || u.options.initialTitle));
                        try {
                            r.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ");
                        } catch (t) {}
                        return (r.title = i), u;
                    }),
                    (u.queues = []),
                    (u.busy = function (t) {
                        if ((void 0 !== t ? (u.busy.flag = t) : void 0 === u.busy.flag && (u.busy.flag = !1), !u.busy.flag)) {
                            c(u.busy.timeout);
                            var e = function () {
                                var t, i, r;
                                if (!u.busy.flag) for (t = u.queues.length - 1; t >= 0; --t) 0 !== (i = u.queues[t]).length && ((r = i.shift()), u.fireQueueItem(r), (u.busy.timeout = n(e, u.options.busyDelay)));
                            };
                            u.busy.timeout = n(e, u.options.busyDelay);
                        }
                        return u.busy.flag;
                    }),
                    (u.busy.flag = !1),
                    (u.fireQueueItem = function (t) {
                        return t.callback.apply(t.scope || u, t.args || []);
                    }),
                    (u.pushQueue = function (t) {
                        return (u.queues[t.queue || 0] = u.queues[t.queue || 0] || []), u.queues[t.queue || 0].push(t), u;
                    }),
                    (u.queue = function (t, e) {
                        return "function" == typeof t && (t = { callback: t }), void 0 !== e && (t.queue = e), u.busy() ? u.pushQueue(t) : u.fireQueueItem(t), u;
                    }),
                    (u.clearQueue = function () {
                        return (u.busy.flag = !1), (u.queues = []), u;
                    }),
                    (u.stateChanged = !1),
                    (u.doubleChecker = !1),
                    (u.doubleCheckComplete = function () {
                        return (u.stateChanged = !0), u.doubleCheckClear(), u;
                    }),
                    (u.doubleCheckClear = function () {
                        return u.doubleChecker && (c(u.doubleChecker), (u.doubleChecker = !1)), u;
                    }),
                    (u.doubleCheck = function (t) {
                        return (
                            (u.stateChanged = !1),
                            u.doubleCheckClear(),
                            u.bugs.ieDoubleCheck &&
                                (u.doubleChecker = n(function () {
                                    return u.doubleCheckClear(), u.stateChanged || t(), !0;
                                }, u.options.doubleCheckInterval)),
                            u
                        );
                    }),
                    (u.safariStatePoll = function () {
                        var e = u.extractState(u.getLocationHref());
                        if (!u.isLastSavedState(e)) return e || u.createStateObject(), u.Adapter.trigger(t, "popstate"), u;
                    }),
                    (u.back = function (t) {
                        return !1 !== t && u.busy()
                            ? (u.pushQueue({ scope: u, callback: u.back, args: arguments, queue: t }), !1)
                            : (u.busy(!0),
                              u.doubleCheck(function () {
                                  u.back(!1);
                              }),
                              d.go(-1),
                              !0);
                    }),
                    (u.forward = function (t) {
                        return !1 !== t && u.busy()
                            ? (u.pushQueue({ scope: u, callback: u.forward, args: arguments, queue: t }), !1)
                            : (u.busy(!0),
                              u.doubleCheck(function () {
                                  u.forward(!1);
                              }),
                              d.go(1),
                              !0);
                    }),
                    (u.go = function (t, e) {
                        var i;
                        if (t > 0) for (i = 1; i <= t; ++i) u.forward(e);
                        else {
                            if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                            for (i = -1; i >= t; --i) u.back(e);
                        }
                        return u;
                    }),
                    u.emulated.pushState)
                ) {
                    var h = function () {};
                    (u.pushState = u.pushState || h), (u.replaceState = u.replaceState || h);
                } else
                    (u.onPopState = function (e, i) {
                        var r,
                            a,
                            o = !1,
                            n = !1;
                        return (
                            u.doubleCheckComplete(),
                            (r = u.getHash())
                                ? ((a = u.extractState(r || u.getLocationHref(), !0)) ? u.replaceState(a.data, a.title, a.url, !1) : (u.Adapter.trigger(t, "anchorchange"), u.busy(!1)), (u.expectedStateId = !1), !1)
                                : ((o = u.Adapter.extractEventData("state", e, i) || !1),
                                  (n = o ? u.getStateById(o) : u.expectedStateId ? u.getStateById(u.expectedStateId) : u.extractState(u.getLocationHref())) || (n = u.createStateObject(null, null, u.getLocationHref())),
                                  (u.expectedStateId = !1),
                                  u.isLastSavedState(n) ? (u.busy(!1), !1) : (u.storeState(n), u.saveState(n), u.setTitle(n), u.Adapter.trigger(t, "statechange"), u.busy(!1), !0))
                        );
                    }),
                        u.Adapter.bind(t, "popstate", u.onPopState),
                        (u.pushState = function (e, i, r, a) {
                            if (u.getHashByUrl(r) && u.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                            if (!1 !== a && u.busy()) return u.pushQueue({ scope: u, callback: u.pushState, args: arguments, queue: a }), !1;
                            u.busy(!0);
                            var o = u.createStateObject(e, i, r);
                            return u.isLastSavedState(o) ? u.busy(!1) : (u.storeState(o), (u.expectedStateId = o.id), d.pushState(o.id, o.title, o.url), u.Adapter.trigger(t, "popstate")), !0;
                        }),
                        (u.replaceState = function (e, i, r, a) {
                            if (u.getHashByUrl(r) && u.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                            if (!1 !== a && u.busy()) return u.pushQueue({ scope: u, callback: u.replaceState, args: arguments, queue: a }), !1;
                            u.busy(!0);
                            var o = u.createStateObject(e, i, r);
                            return u.isLastSavedState(o) ? u.busy(!1) : (u.storeState(o), (u.expectedStateId = o.id), d.replaceState(o.id, o.title, o.url), u.Adapter.trigger(t, "popstate")), !0;
                        });
                if (o) {
                    try {
                        u.store = _.parse(o.getItem("History.store")) || {};
                    } catch (t) {
                        u.store = {};
                    }
                    u.normalizeStore();
                } else (u.store = {}), u.normalizeStore();
                u.Adapter.bind(t, "unload", u.clearAllIntervals),
                    u.saveState(u.storeState(u.extractState(u.getLocationHref(), !0))),
                    o &&
                        ((u.onUnload = function () {
                            var t, e, i;
                            try {
                                t = _.parse(o.getItem("History.store")) || {};
                            } catch (e) {
                                t = {};
                            }
                            (t.idToState = t.idToState || {}), (t.urlToId = t.urlToId || {}), (t.stateToId = t.stateToId || {});
                            for (e in u.idToState) u.idToState.hasOwnProperty(e) && (t.idToState[e] = u.idToState[e]);
                            for (e in u.urlToId) u.urlToId.hasOwnProperty(e) && (t.urlToId[e] = u.urlToId[e]);
                            for (e in u.stateToId) u.stateToId.hasOwnProperty(e) && (t.stateToId[e] = u.stateToId[e]);
                            (u.store = t), u.normalizeStore(), (i = _.stringify(t));
                            try {
                                o.setItem("History.store", i);
                            } catch (t) {
                                if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                                o.length && (o.removeItem("History.store"), o.setItem("History.store", i));
                            }
                        }),
                        u.intervalList.push(s(u.onUnload, u.options.storeInterval)),
                        u.Adapter.bind(t, "beforeunload", u.onUnload),
                        u.Adapter.bind(t, "unload", u.onUnload)),
                    u.emulated.pushState ||
                        (u.bugs.safariPoll && u.intervalList.push(s(u.safariStatePoll, u.options.safariPollInterval)),
                        ("Apple Computer, Inc." !== a.vendor && "Mozilla" !== (a.appCodeName || "")) ||
                            (u.Adapter.bind(t, "hashchange", function () {
                                u.Adapter.trigger(t, "popstate");
                            }),
                            u.getHash() &&
                                u.Adapter.onDomLoad(function () {
                                    u.Adapter.trigger(t, "hashchange");
                                })));
            }),
            (!u.options || !u.options.delayInit) && u.init();
    })(window);
