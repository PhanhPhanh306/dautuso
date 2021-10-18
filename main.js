(String.prototype.replaceAll = function (t, e) {
    return this.valueOf().split(t).join(e);
}),
    (String.prototype.format = function () {
        for (var t = this, e = 0; e < arguments.length; e++) {
            var i = new RegExp("\\{" + e + "\\}", "gi");
            t = t.replace(i, arguments[e]);
        }
        return t.valueOf();
    }),
    "function" != typeof String.prototype.startsWith &&
    (String.prototype.startsWith = function (t) {
        return 0 === this.lastIndexOf(t, 0);
    }),
    "function" != typeof String.prototype.endsWith &&
    (String.prototype.endsWith = function (t) {
        return -1 !== this.indexOf(t, this.length - t.length);
    }),
    (Array.prototype.removeSpace = function () {
        var t = [];
        return (
            this.forEach(function (e) {
                (e = e.trim()).length > 0 && t.push(e);
            }),
            t
        );
    }),
    (Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    }),
    (Array.prototype.unique = function () {
        return this.filter(function (t, e, i) {
            return i.indexOf(t) == e;
        });
    }),
    (Array.prototype.except = function (t) {
        var e = this;
        return (
            Array.isArray(t) &&
            t.forEach(function (t) {
                var i = e.indexOf(t);
                -1 != i && e.splice(i, 1);
            }),
            e
        );
    }),
    (Array.prototype.only = function (t) {
        var e = [];
        return (
            Array.isArray(t) &&
            this.forEach(function (i) {
                -1 != t.indexOf(i) && e.push(i);
            }),
            e
        );
    }),
    (Array.prototype.insert = function (t, e) {
        this.splice(t, 0, e);
    });
var LadiPageScriptV2 = LadiPageScriptV2 || function () { };
(LadiPageScriptV2.prototype.init = function () {
    (this.const = {
        DESKTOP: "desktop",
        MOBILE: "mobile",
        DOMAIN_GOOGLE_DOCS: "docs.google.com",
        POWERED_BY_IMAGE: "https://w.ladicdn.com/source/v3/by/ladipage.svg",
        STATIC_W_DOMAIN: "w.ladicdn.com",
        STATIC_S_DOMAIN: "s.ladicdn.com",
        APP_RUNTIME_PREFIX: "_runtime",
        DATA_ACTION_TYPE: {
            link: "link",
            section: "section",
            email: "email",
            phone: "phone",
            popup: "popup",
            hidden_show: "hidden_show",
            collapse: "collapse",
            set_value: "set_value",
            change_index: "change_index",
            lightbox: "lightbox",
            popup_cart: "popup_cart",
            popup_checkout: "popup_checkout",
        },
        DATA_ACTION_LIGHTBOX_TYPE: {
            image: "image",
            video: "video",
            iframe: "iframe",
        },
        COUNTDOWN_TYPE: {
            countdown: "countdown",
            daily: "daily",
            endtime: "endtime",
        },
        COUNTDOWN_ITEM_TYPE: {
            day: "day",
            hour: "hour",
            minute: "minute",
            seconds: "seconds",
        },
        VIDEO_TYPE: { youtube: "youtube", direct: "direct" },
        BACKGROUND_STYLE: {
            solid: "solid",
            gradient: "gradient",
            image: "image",
            video: "video",
        },
        PUBLISH_PLATFORM: {
            ladipage: "LADIPAGE",
            ladipagedns: "LADIPAGEDNS",
            wordpress: "WORDPRESS",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            itop: "ITOPWEBSITE",
            ftp: "FTP",
            other: "OTHER",
        },
        TRACKING_NAME: "ladicid",
        ACCESS_KEY_NAME: "ladiack",
        REF_NAME: "ref",
        PUBLISH_STYLE: { desktop_min_width: 768, mobile_small_min_width: 320 },
        ANIMATED_LIST: [
            "rotate-1",
            "rotate-2",
            "rotate-3",
            "type",
            "scale",
            "loading-bar",
            "slide",
            "clip",
            "zoom",
            "push",
        ],
        POSITION_TYPE: {
            default: "default",
            top: "top",
            bottom: "bottom",
            top_left: "top_left",
            top_center: "top_center",
            top_right: "top_right",
            center_left: "center_left",
            center_right: "center_right",
            bottom_left: "bottom_left",
            bottom_center: "bottom_center",
            bottom_right: "bottom_right",
        },
        COLLECTION_TYPE: { carousel: "carousel", readmore: "readmore" },
        INPUT_TYPE: {
            tel: "tel",
            password: "password",
            text: "text",
            date: "date",
            select_multiple: "select_multiple",
            number: "number",
            email: "email",
            textarea: "textarea",
            select: "select",
            radio: "radio",
            checkbox: "checkbox",
            file: "file",
            product_variant: "product_variant",
        },
        CONTENT_TYPE: {
            form_data: "FORM_DATA",
            form_urlencoded: "X_WWW_FORM_URLENCODED",
            json: "JSON",
        },
        SORT_BY_TYPE: { asc: "asc", desc: "desc" },
        PRODUCT_VARIANT_TYPE: {
            combined: "combined",
            combobox: "combobox",
            label: "label",
        },
        PRODUCT_VARIANT_OPTION_TYPE: { color: 1, image: 2 },
        PRODUCT_VARIANT_TITLE: { left: "left", top: "top" },
        FORM_THANKYOU_TYPE: { default: "default", url: "url", popup: "popup" },
        GAME_RESULT_TYPE: { default: "default", popup: "popup" },
        PERCENT_TRACKING_SCROLL: [0, 25, 50, 75, 100],
        TIME_ONPAGE_TRACKING: [10, 30, 60, 120, 180, 300, 600],
        FORM_CONFIG_TYPE: {
            email: "EMAIL",
            mail_chimp: "MAIL_CHIMP",
            infusion_soft: "INFUSION_SOFT",
            infusion_soft_ladi: "INFUSION_SOFT_LADI",
            active_campaign: "ACTIVE_CAMPAIGN",
            sendgrid: "SENDGRID",
            hubspot: "HUBSPOT",
            smtp: "SMTP",
            esms: "ESMS",
            get_response: "GET_RESPONSE",
            convertkit: "CONVERTKIT",
            ladiflow: "LADIFLOW",
            telegram: "TELEGRAM",
            slack: "SLACK",
            zalo_zns: "ZALO_ZNS",
            mautic: "MAUTIC",
            google_sheet: "GOOGLE_SHEET",
            google_form: "GOOGLE_FORM",
            custom_api: "CUSTOM_API",
            ladisales: "LADISALES",
            haravan: "HARAVAN",
            sapo: "SAPO",
            shopify: "SHOPIFY",
            nhanh_vn: "NHANH_VN",
            google_recaptcha: "GOOGLE_RECAPTCHA",
            kiotviet: "KIOTVIET",
            wordpress: "WORDPRESS",
            metu: "METU",
            ladichat: "LADICHAT",
            shopping: "SHOPPING",
            blog: "BLOG",
            conversion_api: "CONVERSION_API",
            popupx: "POPUPX",
        },
        FORM_UPLOAD_FILE_LENGTH: 5,
        FORM_UPLOAD_FILE_SIZE: 25,
        CART_LAYOUT: { editable: "editable", viewonly: "viewonly" },
        WIDTH_SECTION_RESIZE: {},
        RESIZE_ADD_PIXEL: 300,
        RESIZE_ADD_PIXEL_THUMB: 50,
        RESIZE_RANGE: 50,
        TOOLTIP_TYPE: {
            default: "default",
            info: "info",
            success: "success",
            error: "error",
            notice: "notice",
        },
        TOOLTIP_POSITION: {
            top_middle: "top_middle",
            top_left: "top_left",
            top_right: "top_right",
            bottom_middle: "bottom_middle",
            bottom_left: "bottom_left",
            bottom_right: "bottom_right",
            left_middle: "left_middle",
            left_top: "left_top",
            left_bottom: "left_bottom",
            right_middle: "right_middle",
            right_top: "right_top",
            right_bottom: "right_bottom",
        },
        TOOLTIP_SIZE: { small: "small", medium: "medium", big: "big" },
        STORY_PAGE: {
            horizontal: "horizontal",
            vertical: "vertical",
            none: "none",
        },
        COMBOBOX_TYPE: { delivery_method: "delivery_method" },
        PRODUCT_TYPE: { event: "Event", service: "Service", physical: "Physical" },
    }),
        (this.runtime = {
            backdrop_popup_id: "backdrop-popup",
            lightbox_screen_id: "lightbox-screen",
            builder_section_popup_id: "SECTION_POPUP",
            builder_section_background_id: "BODY_BACKGROUND",
            ladipage_powered_by_classname: "ladipage_powered_by",
            current_element_mouse_down_carousel: null,
            current_element_mouse_down_carousel_position_x: 0,
            current_element_mouse_down_carousel_diff: 40,
            current_element_mouse_down_gallery_control: null,
            current_element_mouse_down_gallery_control_time: 0,
            current_element_mouse_down_gallery_control_time_click: 300,
            current_element_mouse_down_gallery_control_position_x: 0,
            current_element_mouse_down_gallery_view: null,
            current_element_mouse_down_gallery_view_position_x: 0,
            current_element_mouse_down_gallery_view_diff: 40,
            scroll_show_popup: {},
            scroll_depth: [],
            scroll_to_section: {},
            isMobileOnly: !1,
            interval_countdown: null,
            interval_gallery: null,
            timeout_gallery: {},
            interval_carousel: null,
            timenext_carousel: {},
            isClient: !1,
            isDesktop: !0,
            isIE: !1,
            isYouTubeIframeAPIReady: !1,
            isLoadYouTubeIframeAPI: !1,
            isVideoButtonUnmute: !0,
            device: this.const.DESKTOP,
            ladipage_id: null,
            list_collapse: {},
            list_scroll_func: {},
            list_loaded_func: [],
            list_show_popup_func: {},
            list_youtube_ready_exec: [],
            list_lightbox_id: {},
            list_set_value_name_country: ["ward", "district", "state", "country"],
            tmp: {},
            tabindexForm: 0,
            eventData: {},
            timenow: 0,
            widthScrollBar: 0,
            replaceStr: {},
            replacePrefixStart: "{{",
            replacePrefixEnd: "}}",
            replaceNewPrefixStart: "!::",
            replaceNewPrefixEnd: "::!",
        }),
        (this.const.WIDTH_SECTION_RESIZE[this.const.DESKTOP] = 1440),
        (this.const.WIDTH_SECTION_RESIZE[this.const.MOBILE] = 768);
}),
    (LadiPageScriptV2.prototype.run = function (t) {
        var e = this;
        (this.runtime.isIE = !!document.documentMode),
            (this.runtime.isIE = this.runtime.isIE
                ? this.runtime.isIE
                : !this.runtime.isIE && !!window.StyleMedia),
            (this.runtime.scrollEventPassive = null);
        try {
            var i = Object.defineProperty({}, "passive", {
                get: function () {
                    e.runtime.scrollEventPassive = { passive: !0 };
                },
            });
            window.addEventListener("testPassive", null, i),
                window.removeEventListener("testPassive", null, i);
        } catch (t) { }
        (this.runtime.isClient = t),
            (this.runtime.timenow = window.ladi("_timenow").get_cookie()),
            this.isEmpty(this.runtime.timenow)
                ? ((this.runtime.timenow = Date.now()),
                    window.ladi("_timenow").set_cookie(this.runtime.timenow, 0))
                : (this.runtime.timenow =
                    parseFloatLadiPage(this.runtime.timenow) || 0);
        try {
            this.runtime.widthScrollBar =
                window.innerWidth - document.documentElement.clientWidth;
        } catch (t) { }
        if (t) {
            if (this.isString(this.runtime.eventData))
                try {
                    var a = decodeURIComponentLadiPage(this.runtime.eventData);
                    this.runtime.eventData = JSON.parse(a);
                } catch (t) {
                    String.prototype.decode = function () {
                        return this.valueOf()
                            .replaceAll(/&amp;/g, "&")
                            .replaceAll(/&gt;/g, ">")
                            .replaceAll(/&lt;/g, "<")
                            .replaceAll(/&quot;/g, '"');
                    };
                    var n = this.runtime.eventData.decode();
                    (n = n.replaceAll("\r\n", "").replaceAll("\n", "")),
                        (this.runtime.eventData = JSON.parse(n));
                }
        } else
            (this.runtime.isMobileOnly = LadiPage.data.is_mobile_only),
                (this.runtime.eventData = LadiPage.generateEventDataAll(t)),
                (this.runtime.ladipage_id = LadiPage.publish.id),
                (this.runtime.publish_platform = LadiPage.publish.type),
                (this.runtime.bodyFontSize = 12),
                (this.runtime.store_id = LadiPage.getRootScope().getStoreId()),
                (this.runtime.time_zone = LadiPage.getRootScope().getStoreTimezone(!0)),
                (this.runtime.currency = LadiPage.getRootScope().getStoreCurrency());
        this.runtime.isMobileOnly &&
            Object.keys(e.runtime.eventData).forEach(function (t) {
                Object.keys(e.runtime.eventData[t]).forEach(function (i) {
                    if (i.toLowerCase().startsWith(e.const.MOBILE)) {
                        var a = e.const.DESKTOP + i.substring(e.const.MOBILE.length);
                        e.runtime.eventData[t][a] = e.runtime.eventData[t][i];
                    }
                });
            });
        this.isNull(window.ladi_is_desktop)
            ? (this.runtime.isDesktop = t
                ? !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
                    navigator.userAgent.toLowerCase()
                )
                : LadiPage.isDesktop())
            : (this.runtime.isDesktop = t
                ? window.ladi_is_desktop
                : LadiPage.isDesktop()),
            (this.runtime.device = this.runtime.isDesktop
                ? this.const.DESKTOP
                : this.const.MOBILE),
            (this.runtime.tmp.isFirstScroll = !0),
            (this.runtime.tmp.capture_form_data_last = {}),
            (this.runtime.tmp.runAfterLocation = []),
            (this.runtime.tmp.product_info = {}),
            (this.runtime.tmp.timeout_product_info = {}),
            (this.runtime.tmp.product_tag_info = {}),
            (this.runtime.tmp.timeout_product_tag_info = {}),
            (this.runtime.tmp.dataset_check_load = !1),
            (this.runtime.tmp.dataset_data = {}),
            (this.runtime.tmp.timeout_dataset_data = {}),
            (this.runtime.tmp.cart = []),
            (this.runtime.tmp.add_to_cart_discount = 0),
            (this.runtime.tmp.add_to_cart_fee_shipping = 0),
            (this.runtime.tmp.is_click_add_to_cart = !1),
            (this.runtime.tmp.is_click_check_price_discount = !1),
            (this.runtime.tmp.current_use_coupon = null),
            this.changeTotalPriceCart();
        var r = window.ladi("LADI_DATA").get_cookie();
        try {
            (r = JSON.parse(Base64.decode(r || Base64.encode("{}")))),
                Object.keys(r).forEach(function (t) {
                    e.setDataReplaceStr(t, r[t]);
                });
        } catch (t) { }
        var o = function (t) {
            var i = e.copy(t);
            return (
                e.isObject(i) &&
                e.runtime.list_set_value_name_country.forEach(function (t) {
                    if (!e.isEmpty(i[t])) {
                        var a = i[t].split(":");
                        a.length > 1 && a.shift(), (i[t] = a.join(":"));
                    }
                }),
                i
            );
        },
            s = e.getURLSearchParams(null, null, !0),
            l = e.getURLSearchParams(window.location.search, null, !0),
            d = o(s),
            c = Object.keys(d),
            u = "";
        c.forEach(function (t) {
            if (t != e.const.TRACKING_NAME && t != e.const.ACCESS_KEY_NAME) {
                if (
                    (e.setDataReplaceStr(t, d[t]), "products" == t && e.isString(d[t]))
                ) {
                    var i = d[t].split("|");
                    2 == i.length &&
                        -1 == c.indexOf("product_id") &&
                        e.setDataReplaceStr("product_value", i[0]),
                        2 == i.length &&
                        -1 == c.indexOf("product_name") &&
                        e.setDataReplaceStr("product_name", i[1]);
                }
                (e.isArray(l[t]) ? l[t] : [l[t]]).forEach(function (i) {
                    e.isEmpty(u) ? (u += "?") : (u += "&"),
                        (u += t + "=" + encodeURIComponent(i));
                });
            }
        }),
            window.ladi(this.const.TRACKING_NAME).delete_cookie("/"),
            this.historyReplaceState(
                window.location.pathname + u + window.location.hash
            );
        var p = l[this.const.REF_NAME];
        e.isEmpty(p)
            ? (p = window.ladi("ladi_ref").get_cookie())
            : window.ladi("ladi_ref").set_cookie(p, 90, "/", window.location.host);
        var m = Object.keys(this.runtime.eventData),
            _ = window.ladi("LADI_CLIENT_ID").get_cookie(),
            g = parseFloatLadiPage(window.ladi("LADI_PAGE_VIEW").get_cookie()) || 0,
            y = parseFloatLadiPage(window.ladi("LADI_FORM_SUBMIT").get_cookie()) || 0,
            f = window.ladi("LADI_FUNNEL_NEXT_URL").get_cookie(),
            h = window.ladi("LADI_CAMP_ID").get_cookie(),
            v = window.ladi("LADI_CAMP_NAME").get_cookie(),
            E = window.ladi("LADI_CAMP_TYPE").get_cookie(),
            P = window.ladi("LADI_CAMP_TARGET_URL").get_cookie(),
            L = window.ladi("LADI_CAMP_ORIGIN_URL").get_cookie(),
            A =
                parseFloatLadiPage(window.ladi("LADI_CAMP_PAGE_VIEW").get_cookie()) ||
                0,
            b =
                parseFloatLadiPage(window.ladi("LADI_CAMP_FORM_SUBMIT").get_cookie()) ||
                0,
            w = window.ladi("LADI_CAMP_CONFIG").get_cookie(),
            S = [],
            T = function (t, i, a) {
                if ("FormSubmit" == t && e.isEmpty(_)) e.isFunction(a) && a();
                else if (!e.runtime.is_popupx || e.runtime.has_popupx) {
                    var n = e.runtime.publish_platform,
                        r = e.runtime.store_id,
                        o = e.runtime.time_zone,
                        s = window.location.host,
                        l = window.location.href,
                        d = e.runtime.ladipage_id,
                        c = {
                            event: t,
                            pixel_id: r,
                            time_zone: o,
                            domain: s,
                            url: l,
                            ladipage_id: d,
                            publish_platform: n,
                            data: [],
                        };
                    Object.keys(i).forEach(function (t) {
                        c[t] = i[t];
                    }),
                        e.runtime.is_popupx &&
                            ((c.type = "POPUPX"),
                                (c.origin_store_id = e.runtime.tmp.popupx_origin_store_id),
                                (c.origin_referer = e.runtime.tmp.popupx_origin_referer),
                                (c.origin_domain = e.runtime.tmp.popupx_origin_domain),
                                (c.origin_url = e.runtime.tmp.popupx_origin_url),
                                (c.element_id = e.runtime.tmp.popupx_current_element_id),
                                e.isEmpty(c.element_id))
                            ? e.runTimeout(function () {
                                T(t, i, a);
                            }, 100)
                            : ("FormSubmit" == t &&
                                (e.isEmpty(h) ? y++ : (P == L && y++, b++),
                                    window.ladi("LADI_CAMP_FORM_SUBMIT").set_cookie(b, 3650),
                                    window.ladi("LADI_FORM_SUBMIT").set_cookie(y, 3650),
                                    e.runtime.is_popupx &&
                                    e.runtime.tmp.runActionPopupX({
                                        action: { type: "set_submit_form" },
                                    })),
                                "PageView" == t &&
                                e.runtime.has_popupx &&
                                (g++, window.ladi("LADI_PAGE_VIEW").set_cookie(g, 3650)),
                                e.sendRequest(
                                    "POST",
                                    e.const.API_ANALYTICS_EVENT,
                                    JSON.stringify(c),
                                    !0,
                                    {
                                        "Content-Type": "application/json",
                                        LADI_CLIENT_ID: _,
                                        LADI_PAGE_VIEW: g,
                                        LADI_FORM_SUBMIT: y,
                                        LADI_CAMP_ID: h,
                                        LADI_CAMP_NAME: v,
                                        LADI_CAMP_TYPE: E,
                                        LADI_CAMP_TARGET_URL: P,
                                        LADI_CAMP_ORIGIN_URL: L,
                                        LADI_CAMP_PAGE_VIEW: A,
                                        LADI_CAMP_FORM_SUBMIT: b,
                                    },
                                    function (t, i, n) {
                                        n.readyState == XMLHttpRequest.DONE &&
                                            e.isFunction(a) &&
                                            a(i, t);
                                    }
                                ));
                } else
                    e.runTimeout(function () {
                        T(t, i, a);
                    }, 100);
            },
            O = function (t, i, a, n) {
                var r = null,
                    o = null,
                    s = null,
                    l = 0;
                if (e.isEmpty(i) || "POPUP_PRODUCT" != i.id)
                    if (e.isEmpty(i) || "POPUP_BLOG" != i.id) e.isFunction(n) && n();
                    else {
                        if (
                            ((r = e.generateVariantProduct(
                                a,
                                !1,
                                null,
                                null,
                                null,
                                null,
                                !0,
                                !0,
                                function (e) {
                                    O(t, i, a, n);
                                }
                            )),
                                !e.isObject(r) ||
                                !e.isObject(r.product) ||
                                !e.isObject(r.store_info))
                        )
                            return;
                        var d = function () {
                            var t,
                                a,
                                c = !0;
                            if (
                                (Object.keys(r.product).forEach(function (t) {
                                    if (
                                        c &&
                                        e.isString(r.product[t]) &&
                                        r.product[t].startsWith("ladisources/global/dataset/") &&
                                        r.product[t].endsWith(".html")
                                    ) {
                                        var i = r.product[t].replaceAll(
                                            "ladisources/global/dataset/",
                                            e.const.API_DATASET_BLOG
                                        );
                                        (c = !1),
                                            e.showLoadingBlur(),
                                            e.sendRequest(
                                                "GET",
                                                i,
                                                null,
                                                !0,
                                                null,
                                                function (e, i, a) {
                                                    a.readyState == XMLHttpRequest.DONE &&
                                                        ((r.product[t] = e), d());
                                                }
                                            );
                                    }
                                }),
                                    c)
                            ) {
                                e.hideLoadingBlur(),
                                    i.classList.add("opacity-0"),
                                    (o = document.querySelectorAll(
                                        "#" + i.id + " .ladi-element"
                                    ));
                                var u = null,
                                    p = function (t) {
                                        e.removeTimeout(u);
                                        var a = function (t, i) {
                                            var a = e.findAncestor(t.parentElement, "ladi-element");
                                            e.updateHeightElement(!0, t, a, i, t.clientHeight);
                                        };
                                        u = e.runTimeout(
                                            function () {
                                                e.showParentVisibility(o[0], function () {
                                                    for (l = 0; l < o.length; l++) {
                                                        if (
                                                            o[l].querySelectorAll(
                                                                ".ladi-headline, .ladi-paragraph"
                                                            ).length > 0 &&
                                                            o[l].hasAttribute("data-height")
                                                        ) {
                                                            var t =
                                                                parseFloatLadiPage(
                                                                    o[l].getAttribute("data-height")
                                                                ) || 0;
                                                            t != o[l].clientHeight &&
                                                                (o[l].setAttribute(
                                                                    "data-height",
                                                                    o[l].clientHeight
                                                                ),
                                                                    a(o[l], t));
                                                        }
                                                    }
                                                }),
                                                    e.runShowPopup(!0, i.id, null, null, !0);
                                            },
                                            e.isEmpty(t) ? 0 : 100
                                        );
                                    };
                                e.showParentVisibility(o[0], function () {
                                    for (l = 0; l < o.length; l++) {
                                        o[l].querySelectorAll(".ladi-headline, .ladi-paragraph")
                                            .length > 0 &&
                                            !o[l].hasAttribute("data-height") &&
                                            o[l].setAttribute("data-height", o[l].clientHeight);
                                    }
                                });
                                var m = function (t) {
                                    (!e.runtime.isDesktop ||
                                        (e.isEmpty(t.getAttribute("height")) &&
                                            e.isEmpty(t.style.getPropertyValue("height")))) &&
                                        (t.addEventListener("load", p),
                                            t.addEventListener("error", p));
                                };
                                for (l = 0; l < o.length; l++)
                                    e.runtime.tmp.runLadiSaleProductKey(
                                        o[l].id,
                                        !1,
                                        !1,
                                        s,
                                        r,
                                        !0
                                    ),
                                        (t = o[l]),
                                        void 0,
                                        (a = e.runtime.eventData[t.id]),
                                        e.isFunction(e.runtime.tmp.runOptionAction) &&
                                        e.isObject(a) &&
                                        e.runtime.tmp.runOptionAction(t, t.id, a.type, a, r);
                                for (l = 0; l < o.length; l++)
                                    for (
                                        var _ = o[l].querySelectorAll(
                                            ".ladi-headline img, .ladi-paragraph img"
                                        ),
                                        g = 0;
                                        g < _.length;
                                        g++
                                    )
                                        m(_[g]);
                                e.isFunction(n) && n(),
                                    p(),
                                    e.runTimeout(function () {
                                        i.classList.remove("opacity-0");
                                    }, 150);
                            }
                        };
                        d();
                    }
                else {
                    if (
                        ((r = e.generateVariantProduct(
                            a,
                            !1,
                            null,
                            null,
                            null,
                            null,
                            !0,
                            !0,
                            function (e) {
                                O(t, i, a, n);
                            }
                        )),
                            !e.isObject(r) ||
                            !e.isObject(r.store_info) ||
                            !e.isObject(r.product) ||
                            !e.isArray(r.product.variants) ||
                            r.product.variants.length <= 0)
                    )
                        return;
                    if (e.isEmpty(a["option.product_variant_id"])) {
                        s = r.product.variants[0];
                        var c = e.findAncestor(t, "ladi-collection-item"),
                            u = null;
                        if (e.isEmpty(c)) {
                            for (
                                var p = document.querySelectorAll(
                                    '[data-variant="true"] select[data-store-id="' +
                                    r.store_info.id +
                                    '"][data-product-id="' +
                                    r.product.product_id +
                                    '"]'
                                ),
                                m = 0;
                                m < p.length;
                                m++
                            )
                                if (e.isEmpty(e.findAncestor(p[m], "ladi-collection-item"))) {
                                    u = p[m];
                                    break;
                                }
                        } else u = c.querySelector('[data-variant="true"]');
                        if (!e.isEmpty(u)) {
                            u = e.findAncestor(u, "ladi-element");
                            var _ = e.getProductVariantId(u, r.product);
                            e.isEmpty(_) ||
                                (s = r.product.variants.find(function (t) {
                                    return t.product_variant_id == _;
                                }));
                        }
                    } else
                        s = r.product.variants.find(function (t) {
                            return t.product_variant_id == a["option.product_variant_id"];
                        });
                    if (e.isEmpty(s)) return;
                    var g = function (t) {
                        var i = e.runtime.eventData[t.id];
                        e.isFunction(e.runtime.tmp.runOptionAction) &&
                            e.isObject(i) &&
                            e.runtime.tmp.runOptionAction(t, t.id, i.type, i, r);
                    };
                    for (
                        o = document.querySelectorAll("#" + i.id + " .ladi-element"), l = 0;
                        l < o.length;
                        l++
                    )
                        e.runtime.tmp.runLadiSaleProductKey(o[l].id, !1, !1, s, r), g(o[l]);
                    e.isFunction(n) && n();
                }
            },
            C = function (t, i, a, n, r) {
                if (((t = t || document.getElementById(i)), !e.isEmpty(t))) {
                    var o = n["option.data_action"],
                        s = n["option.is_submit_form"],
                        l = n["option.data_submit_form_id"];
                    if (!n["option.action_funnel"] || e.isEmpty(f))
                        if (!s || e.isEmpty(l))
                            if (e.isEmpty(o))
                                t.addEventListener("click", function (a) {
                                    "false" != t.getAttribute("data-click") &&
                                        e.runEventTracking(i, !1);
                                });
                            else {
                                if (o.type == e.const.DATA_ACTION_TYPE.link) {
                                    var d = null;
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            ("true" == t.getAttribute("data-action") &&
                                                ((d = o.action),
                                                    e.isEmpty(o.action_mapping) || (d = o.action_mapping),
                                                    e.isEmpty(d) ||
                                                    ((d = e.getLinkUTMRedirect(d, null)),
                                                        (d = e.convertDataReplaceStr(d, !0)),
                                                        window.ladi(d).open_url(o.target, o.nofollow))),
                                                e.runEventTracking(i, !1));
                                    });
                                    var c = function () {
                                        e.isNull(r) &&
                                            (r = e.generateVariantProduct(
                                                n,
                                                !1,
                                                null,
                                                null,
                                                null,
                                                null,
                                                !0,
                                                !0,
                                                c
                                            )),
                                            e.isObject(r) &&
                                            e.isObject(r.store_info) &&
                                            e.isObject(r.product) &&
                                            ((d = o.action),
                                                e.isEmpty(o.link_mapping) ||
                                                ((o.action_mapping = r.product[o.link_mapping]),
                                                    e.isEmpty(o.action_mapping) ||
                                                    (d = o.action_mapping)),
                                                e.isEmpty(d)
                                                    ? (t.removeAttribute("data-replace-href"),
                                                        t.removeAttribute("href"))
                                                    : ((d = e.getLinkUTMRedirect(d, null)),
                                                        t.setAttribute("data-replace-href", d),
                                                        (t.href = e.convertDataReplaceStr(d, !0))));
                                    };
                                    c();
                                }
                                o.type == e.const.DATA_ACTION_TYPE.email &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            ("true" != t.getAttribute("data-action") ||
                                                e.isEmpty(o.action) ||
                                                window.ladi("mailto:" + o.action).open_url(),
                                                e.runEventTracking(i, !1));
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.phone &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            ("true" != t.getAttribute("data-action") ||
                                                e.isEmpty(o.action) ||
                                                window.ladi("tel:" + o.action).open_url(),
                                                e.runEventTracking(i, !1));
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.collapse &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            var n = document.getElementById(o.action);
                                            e.isEmpty(n) || window.ladi(o.action).collapse(),
                                                e.runEventTracking(i, !1);
                                        }
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.section &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            var n = document.getElementById(o.action);
                                            if (!e.isEmpty(n)) {
                                                var r = 0,
                                                    s = e.findAncestor(t, "ladi-popup");
                                                if (!e.isEmpty(s)) {
                                                    var l = e.findAncestor(s, "ladi-element");
                                                    l.hasAttribute("data-popup-backdrop") &&
                                                        (window.ladi(l.id).hide(), (r = 100));
                                                }
                                                e.runTimeout(function () {
                                                    window.ladi(o.action).scroll();
                                                }, r),
                                                    e.runEventTracking(i, !1);
                                            }
                                        }
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.popup &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            var r = document.getElementById(o.action);
                                            e.isEmpty(r) ||
                                                O(t, r, n, function () {
                                                    window.ladi(o.action).show();
                                                }),
                                                e.runEventTracking(i, !1);
                                        }
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            (e.isArray(o.hidden_ids) &&
                                                o.hidden_ids.forEach(function (t) {
                                                    window.ladi(t).hide();
                                                }),
                                                e.isArray(o.show_ids) &&
                                                o.show_ids.forEach(function (t) {
                                                    window.ladi(t).show();
                                                }),
                                                e.runEventTracking(i, !1));
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.change_index &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            var n = window.ladi(o.action);
                                            e.isEmpty(o.change_index_number)
                                                ? e.isFunction(n[o.change_index_type]) &&
                                                n[o.change_index_type]()
                                                : n.index(o.change_index_number),
                                                e.runEventTracking(i, !1);
                                        }
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.set_value &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            (window.ladi(o.action).value(o.str),
                                                e.runEventTracking(i, !1));
                                    });
                                var u = null;
                                if (
                                    (o.type == e.const.DATA_ACTION_TYPE.lightbox
                                        ? (u = o.lightbox_type)
                                        : "lightbox_image" == o.type
                                            ? (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.image)
                                            : "lightbox_video" == o.type
                                                ? (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                                : "lightbox_iframe" == o.type &&
                                                (u = e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe),
                                        u == e.const.DATA_ACTION_LIGHTBOX_TYPE.image &&
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") &&
                                                (lightbox_image(o.image_url),
                                                    e.runEventTracking(i, !1));
                                        }),
                                        u == e.const.DATA_ACTION_LIGHTBOX_TYPE.video)
                                ) {
                                    var p =
                                        document.querySelectorAll("#" + i + ".preload").length > 0;
                                    p && lightbox_video(o.video_url, o.video_type, p),
                                        t.addEventListener("click", function (a) {
                                            "false" != t.getAttribute("data-click") &&
                                                (lightbox_video(o.video_url, o.video_type, !1),
                                                    e.runEventTracking(i, !1));
                                        });
                                }
                                u == e.const.DATA_ACTION_LIGHTBOX_TYPE.iframe &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            (lightbox_iframe(o.iframe_url),
                                                e.runEventTracking(i, !1));
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.popup_cart &&
                                    t.addEventListener("click", function (a) {
                                        if ("false" != t.getAttribute("data-click")) {
                                            var n = document.getElementById("POPUP_CART");
                                            e.isEmpty(n) || window.ladi(n.id).show(),
                                                e.runEventTracking(i, !1);
                                        }
                                    }),
                                    o.type == e.const.DATA_ACTION_TYPE.popup_checkout &&
                                    t.addEventListener("click", function (a) {
                                        "false" != t.getAttribute("data-click") &&
                                            (e.runtime.shopping_third_party
                                                ? e.getThirdPartyCheckoutUrl(!0)
                                                : window.ladi("POPUP_CHECKOUT").show(),
                                                e.runEventTracking(i, !1));
                                    });
                            }
                        else
                            t.addEventListener("click", function (e) {
                                "false" != t.getAttribute("data-click") &&
                                    window.ladi(l).submit();
                            });
                    else
                        t.addEventListener("click", function (a) {
                            if ("false" != t.getAttribute("data-click")) {
                                a.preventDefault();
                                var n = f;
                                (n = e.getLinkUTMRedirect(n, null)),
                                    (n = e.convertDataReplaceStr(n, !0)),
                                    window.ladi(n).open_url(),
                                    e.runEventTracking(i, !1);
                            }
                        });
                }
            },
            N = function (t, i, a, n) {
                (t = t || document.getElementById(i)),
                    e.isEmpty(t) ||
                    e.isEmpty(n) ||
                    (n.type == e.const.DATA_ACTION_TYPE.hidden_show &&
                        (t.addEventListener("mouseenter", function (t) {
                            e.isArray(n.hidden_ids) &&
                                n.hidden_ids.forEach(function (t) {
                                    window.ladi(t).hide();
                                }),
                                e.isArray(n.show_ids) &&
                                n.show_ids.forEach(function (t) {
                                    window.ladi(t).show();
                                });
                        }),
                            t.addEventListener("mouseleave", function (t) {
                                e.isArray(n.hidden_ids) &&
                                    n.hidden_ids.forEach(function (t) {
                                        window.ladi(t).show();
                                    }),
                                    e.isArray(n.show_ids) &&
                                    n.show_ids.forEach(function (t) {
                                        window.ladi(t).hide();
                                    });
                            })));
            },
            I = function (t) {
                var i = document.getElementById(t);
                if (
                    !e.isEmpty(i) &&
                    t != e.runtime.builder_section_popup_id &&
                    t != e.runtime.builder_section_background_id
                ) {
                    var a = i.classList.contains("ladi-section") ? "section" : null;
                    if (e.runtime.is_popupx && "section" == a) {
                        var n = document.createElement("div");
                        (n.className = "ladi-section-close"),
                            n.addEventListener("click", function (e) {
                                e.stopPropagation(), window.ladi(t).hide();
                            }),
                            i.appendChild(n);
                    }
                }
            },
            k = function (t, i, a, n, r, o, s, l) {
                "countdown" != a ||
                    e.isEmpty(n) ||
                    ((i = i || document.getElementById(t)),
                        e.isEmpty(i) ||
                        (i.setAttribute("data-type", n),
                            n != e.const.COUNTDOWN_TYPE.countdown ||
                            e.isEmpty(r) ||
                            i.setAttribute("data-minute", r),
                            n != e.const.COUNTDOWN_TYPE.endtime ||
                            e.isEmpty(l) ||
                            i.setAttribute("data-endtime", l),
                            n != e.const.COUNTDOWN_TYPE.daily ||
                            e.isEmpty(o) ||
                            e.isEmpty(s) ||
                            (i.setAttribute("data-daily-start", o),
                                i.setAttribute("data-daily-end", s))));
            },
            x = function (t, i, a, n) {
                "countdown_item" != a ||
                    e.isEmpty(n) ||
                    ((i = i || document.getElementById(t)),
                        e.isEmpty(i) || i.setAttribute("data-item-type", n));
            },
            R = function () {
                if (t) {
                    var i = function () {
                        if (
                            ((e.runtime.ladipage_powered_by_classname = e.randomString(
                                e.randomInt(6, 32)
                            )),
                                e.runtime.isClient)
                        ) {
                            var t = document.createElement("a");
                            t.setAttribute("href", ""),
                                t.setAttribute("target", "_blank"),
                                t.setAttribute("rel", "nofollow"),
                                document.body.insertBefore(
                                    t,
                                    document.body.childNodes[
                                    e.randomInt(0, document.body.childNodes.length)
                                    ]
                                ),
                                (t.className = e.runtime.ladipage_powered_by_classname);
                            var i =
                                "." +
                                e.runtime.ladipage_powered_by_classname +
                                ' {width: 140px; height: 30px; position: fixed; bottom: -40px; left: 10px; z-index: 10000000000; background: url("' +
                                e.const.POWERED_BY_IMAGE +
                                '") no-repeat center #fafafa; background-size: 90% 70%; border-radius: 4px 4px 0 0; display: block; animation: ' +
                                e.runtime.ladipage_powered_by_classname +
                                " 10s;} @keyframes " +
                                e.runtime.ladipage_powered_by_classname +
                                " {0% {bottom: -40px;} 10% {bottom: 0;} 90% {bottom: 0;} 100% {bottom: -40px;}}",
                                a = document.createElement("style");
                            (a.type = "text/css"),
                                document.head.insertBefore(
                                    a,
                                    document.head.childNodes[
                                    e.randomInt(0, document.head.childNodes.length)
                                    ]
                                ),
                                (a.innerHTML = i),
                                e.runTimeout(function () {
                                    e.isEmpty(t) || t.parentElement.removeChild(t),
                                        e.isEmpty(a) || a.parentElement.removeChild(a);
                                }, 1e4);
                        }
                    },
                        a = !1,
                        n = e.isArray(e.runtime.DOMAIN_FREE) ? e.runtime.DOMAIN_FREE : [],
                        r = window.location.href;
                    ["/", ".", "/"].forEach(function (t) {
                        for (; r.endsWith(t);) r = r.substr(0, r.length - t.length);
                    });
                    var o = e.getElementAHref(r).host.toLowerCase();
                    n.forEach(function (t) {
                        a || (a = o.endsWith(t.toLowerCase()));
                    }),
                        a && e.runTimeout(i, 3e3),
                        T("PageView", {}, function (t, n) {
                            if ((-1 != t || a || e.runTimeout(i, 3e3), 200 == t)) {
                                var r = JSON.parse(n),
                                    o = !1,
                                    s = null;
                                e.isObject(r.data)
                                    ? ((o = 1 == r.data.verified_domain),
                                        (s = r.data.google_captcha))
                                    : (o = 1 == r.data),
                                    a || o || e.runTimeout(i, 3e3),
                                    e.isObject(s) &&
                                    ((l = s.site_key),
                                        e.isEmpty(l) ||
                                        ((e.runtime.tmp.google_captcha = { api_key: l }),
                                            e.loadScript(
                                                "//www.google.com/recaptcha/api.js?render=" + l
                                            )));
                            }
                            var l;
                        });
                }
            },
            D = function () {
                for (
                    var t = 2500,
                    i = 3800,
                    a = 800,
                    n = 50,
                    r = 150,
                    o = 500,
                    s = 1300,
                    l = 600,
                    d = 1500,
                    c = t,
                    u = function (i, a, n, r) {
                        e.isEmpty(i) ||
                            (i.classList.remove("in"), i.classList.add("out"));
                        var o = e.isEmpty(i) ? null : i.nextSibling;
                        if (
                            (e.isEmpty(o)
                                ? n &&
                                e.runTimeout(function () {
                                    y(m(a));
                                }, t)
                                : e.runTimeout(function () {
                                    u(o, a, n, r);
                                }, r),
                                e.isEmpty(o) &&
                                document
                                    .querySelectorAll("html")[0]
                                    .classList.contains("no-csstransitions"))
                        ) {
                            var s = m(a);
                            _(a, s);
                        }
                    },
                    p = function (i, a, n, r) {
                        var o = a.parentElement,
                            s = o.parentElement;
                        s.classList.contains("ladipage-animated-headline") ||
                            (s = s.parentElement),
                            e.isEmpty(i) ||
                            (i.classList.add("in"), i.classList.remove("out"));
                        var l = e.isEmpty(i) ? null : i.nextSibling;
                        e.isEmpty(l)
                            ? ((s.classList.contains("rotate-2") ||
                                s.classList.contains("rotate-3") ||
                                s.classList.contains("scale")) &&
                                o.style.setProperty("width", a.clientWidth + "px"),
                                e.isEmpty(e.findAncestor(a, "type")) ||
                                e.runTimeout(function () {
                                    var t = e.findAncestor(
                                        a,
                                        "ladipage-animated-words-wrapper"
                                    );
                                    e.isEmpty(t) || t.classList.add("waiting");
                                }, 200),
                                n ||
                                e.runTimeout(function () {
                                    y(a);
                                }, t))
                            : e.runTimeout(function () {
                                p(l, a, n, r);
                            }, r);
                    },
                    m = function (t) {
                        var i = t.nextSibling;
                        return e.isEmpty(i) || i.classList.contains("after")
                            ? t.parentElement.firstChild
                            : i;
                    },
                    _ = function (t, e) {
                        t.classList.remove("is-visible"),
                            t.classList.add("is-hidden"),
                            e.classList.remove("is-hidden"),
                            e.classList.add("is-visible");
                    },
                    g = function (t, i) {
                        e.isEmpty(e.findAncestor(t, "type"))
                            ? e.isEmpty(e.findAncestor(t, "clip")) ||
                            (e
                                .findAncestor(t, "ladipage-animated-words-wrapper")
                                .style.setProperty("width", t.clientWidth + 5 + "px"),
                                e.runTimeout(function () {
                                    y(t);
                                }, l + d))
                            : (p(t.querySelectorAll("i")[0], t, !1, i),
                                t.classList.add("is-visible"),
                                t.classList.remove("is-hidden"));
                    },
                    y = function (d) {
                        if (!e.isEmpty(d)) {
                            var c = m(d);
                            if (e.isEmpty(e.findAncestor(d, "type")))
                                if (e.isEmpty(e.findAncestor(d, "letters")))
                                    e.isEmpty(e.findAncestor(d, "clip"))
                                        ? e.isEmpty(e.findAncestor(d, "loading-bar"))
                                            ? (_(d, c),
                                                e.runTimeout(function () {
                                                    y(c);
                                                }, t))
                                            : (e
                                                .findAncestor(d, "ladipage-animated-words-wrapper")
                                                .classList.remove("is-loading"),
                                                _(d, c),
                                                e.runTimeout(function () {
                                                    y(c);
                                                }, i),
                                                e.runTimeout(function () {
                                                    e.findAncestor(
                                                        d,
                                                        "ladipage-animated-words-wrapper"
                                                    ).classList.add("is-loading");
                                                }, a))
                                        : (e
                                            .findAncestor(d, "ladipage-animated-words-wrapper")
                                            .style.setProperty("width", "2px"),
                                            e.runTimeout(function () {
                                                _(d, c), g(c);
                                            }, l));
                                else {
                                    var f =
                                        d.querySelectorAll("i").length >=
                                        c.querySelectorAll("i").length;
                                    u(d.querySelectorAll("i")[0], d, f, n),
                                        p(c.querySelectorAll("i")[0], c, f, n);
                                }
                            else {
                                var h = e.findAncestor(d, "ladipage-animated-words-wrapper");
                                h.classList.add("selected"),
                                    h.classList.remove("waiting"),
                                    e.runTimeout(function () {
                                        h.classList.remove("selected"),
                                            d.classList.remove("is-visible"),
                                            d.classList.add("is-hidden");
                                        for (
                                            var t = d.querySelectorAll("i"), e = 0;
                                            e < t.length;
                                            e++
                                        )
                                            t[e].classList.remove("in"), t[e].classList.add("out");
                                    }, o),
                                    e.runTimeout(function () {
                                        g(c, r);
                                    }, s);
                            }
                        }
                    },
                    f = function (t) {
                        var n = !1;
                        if (
                            (e.const.ANIMATED_LIST.forEach(function (e) {
                                t.classList.contains(e) && (n = !0);
                            }),
                                n)
                        ) {
                            var r = t.getElementsByClassName(
                                "ladipage-animated-words-wrapper"
                            )[0];
                            if (!e.isEmpty(r)) {
                                var o = e.isEmpty(r.getAttribute("data-word"))
                                    ? []
                                    : JSON.parse(r.getAttribute("data-word"));
                                if (0 != o.length) {
                                    var s = r.textContent.trim();
                                    if (
                                        ((r.textContent = ""),
                                            (r.innerHTML =
                                                r.innerHTML + '<b class="is-visible">' + s + "</b>"),
                                            o.forEach(function (t) {
                                                e.isEmpty(t)
                                                    ? (r.innerHTML = r.innerHTML + "<b>" + s + "</b>")
                                                    : (r.innerHTML =
                                                        r.innerHTML + "<b>" + t.trim() + "</b>");
                                            }),
                                            !e.isEmpty(e.findAncestor(r, "type")) ||
                                            !e.isEmpty(e.findAncestor(r, "loading-bar")) ||
                                            !e.isEmpty(e.findAncestor(r, "clip")))
                                    ) {
                                        r.innerHTML = r.innerHTML + '<div class="after"></div>';
                                        for (
                                            var l = getComputedStyle(r).color,
                                            d = r.getElementsByClassName("after"),
                                            u = 0;
                                            u < d.length;
                                            u++
                                        )
                                            d[u].style.setProperty("background-color", l);
                                    }
                                    if (
                                        (t.classList.contains("type") &&
                                            r.classList.add("waiting"),
                                            (t.classList.contains("type") ||
                                                t.classList.contains("rotate-2") ||
                                                t.classList.contains("rotate-3") ||
                                                t.classList.contains("scale")) &&
                                            t.classList.add("letters"),
                                            (function (t) {
                                                for (var i = 0; i < t.length; i++) {
                                                    var a = t[i],
                                                        n = a.textContent.trim().split(""),
                                                        r = a.classList.contains("is-visible");
                                                    for (var o in n) {
                                                        " " == n[o] && (n[o] = "&nbsp;");
                                                        var s = e.findAncestor(a, "rotate-2");
                                                        e.isEmpty(s) || (n[o] = "<em>" + n[o] + "</em>"),
                                                            (n[o] = r
                                                                ? '<i class="in">' + n[o] + "</i>"
                                                                : "<i>" + n[o] + "</i>");
                                                    }
                                                    var l = n.join("");
                                                    (a.innerHTML = l), a.style.setProperty("opacity", 1);
                                                }
                                            })(document.querySelectorAll(".letters b")),
                                            t.classList.contains("loading-bar"))
                                    )
                                        (c = i),
                                            e.runTimeout(function () {
                                                r.classList.add("is-loading");
                                            }, a);
                                    else if (t.classList.contains("clip")) {
                                        var p = r.clientWidth + 5;
                                        r.style.setProperty("width", p + "px");
                                    }
                                    e.runTimeout(function () {
                                        y(t.getElementsByClassName("is-visible")[0]);
                                    }, c);
                                }
                            }
                        }
                    },
                    h = document.getElementsByClassName("ladipage-animated-headline"),
                    v = 0;
                    v < h.length;
                    v++
                )
                    f(h[v]);
            },
            F = function (t, i, a, n) {
                if (
                    e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) &&
                    e.isEmpty(e.runtime.current_element_mouse_down_gallery_control)
                ) {
                    var r = t.getAttribute("data-runtime-id");
                    if (
                        e.isEmpty(e.runtime.timeout_gallery[r]) &&
                        (!e.runtime.tmp.gallery_playing_video || !i)
                    ) {
                        var o = t.getElementsByClassName("ladi-gallery-view-item"),
                            s = t.getElementsByClassName("ladi-gallery-control-item");
                        if (0 != o.length && 0 != o.length) {
                            var l = t.getAttribute("data-is-next") || "true";
                            l = "true" == l.toLowerCase();
                            var d = parseFloatLadiPage(t.getAttribute("data-current")) || 0,
                                c = parseFloatLadiPage(t.getAttribute("data-max-item")) || 0;
                            i
                                ? l
                                    ? d >= c - 1
                                        ? ((d = c - 2), (l = !1))
                                        : d++
                                    : d <= 0
                                        ? ((d = 1), (l = !0))
                                        : d--
                                : l
                                    ? d++
                                    : d--,
                                d < 0 && (d = 0),
                                d >= c - 1 && (d = c - 1),
                                e.isEmpty(a) && (a = l ? "next" : "prev"),
                                e.isEmpty(n) && (n = l ? "left" : "right"),
                                e.runtime.tmp.gallery_playing_video &&
                                !o[d].classList.contains("selected") &&
                                e.pauseAllVideo(),
                                o[d].classList.add(a);
                            var u = t.querySelectorAll(".ladi-gallery-view-item.selected")[0];
                            e.isEmpty(u) || u.classList.add(n);
                            var p =
                                1e3 *
                                (parseFloatLadiPage(
                                    getComputedStyle(o[d]).transitionDuration
                                ) || 0);
                            e.runtime.timeout_gallery[r] = e.runTimeout(function () {
                                o[d].classList.add(n),
                                    (e.runtime.timeout_gallery[r] = e.runTimeout(function () {
                                        for (var t = 0; t < o.length; t++)
                                            t == d
                                                ? o[t].classList.add("selected")
                                                : o[t].classList.remove("selected"),
                                                o[t].style.removeProperty("left"),
                                                o[t].classList.remove(a),
                                                o[t].classList.remove(n);
                                        delete e.runtime.timeout_gallery[r];
                                    }, p - 5));
                            }, 5);
                            for (var m = 0; m < s.length; m++)
                                (parseFloatLadiPage(s[m].getAttribute("data-index")) || 0) == d
                                    ? s[m].classList.add("selected")
                                    : s[m].classList.remove("selected");
                            var _ = e.getElementBoundingClientRect(t),
                                g = e.getElementBoundingClientRect(
                                    t.getElementsByClassName("ladi-gallery-control-item")[d]
                                );
                            if (
                                (t
                                    .getElementsByClassName("ladi-gallery-control-arrow-left")[0]
                                    .classList.remove("opacity-0"),
                                    t
                                        .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                                        .classList.remove("opacity-0"),
                                    t
                                        .getElementsByClassName("ladi-gallery")[0]
                                        .classList.contains("ladi-gallery-top") ||
                                    t
                                        .getElementsByClassName("ladi-gallery")[0]
                                        .classList.contains("ladi-gallery-bottom"))
                            ) {
                                var y =
                                    parseFloatLadiPage(
                                        getComputedStyle(
                                            t.getElementsByClassName("ladi-gallery-control")[0]
                                        ).width
                                    ) || 0,
                                    f =
                                        parseFloatLadiPage(
                                            getComputedStyle(
                                                t.getElementsByClassName("ladi-gallery-control-item")[d]
                                            ).width
                                        ) || 0,
                                    h = g.x - _.x - (y - f) / 2;
                                h =
                                    -(h -=
                                        parseFloatLadiPage(
                                            t
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.getPropertyValue("left")
                                        ) || 0) > 0
                                        ? 0
                                        : -h;
                                var v =
                                    parseFloatLadiPage(
                                        getComputedStyle(
                                            t.getElementsByClassName("ladi-gallery-control-box")[0]
                                        ).width
                                    ) || 0;
                                h <
                                    (v =
                                        (v = -(v -=
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    t.getElementsByClassName("ladi-gallery-control")[0]
                                                ).width
                                            ) || 0)) > 0
                                            ? 0
                                            : v) && (h = v),
                                    t
                                        .getElementsByClassName("ladi-gallery-control-box")[0]
                                        .style.setProperty("left", h + "px"),
                                    h >= 0 &&
                                    t
                                        .getElementsByClassName(
                                            "ladi-gallery-control-arrow-left"
                                        )[0]
                                        .classList.add("opacity-0"),
                                    h <= v &&
                                    t
                                        .getElementsByClassName(
                                            "ladi-gallery-control-arrow-right"
                                        )[0]
                                        .classList.add("opacity-0");
                            } else {
                                var E =
                                    parseFloatLadiPage(
                                        getComputedStyle(
                                            t.getElementsByClassName("ladi-gallery-control")[0]
                                        ).height
                                    ) || 0,
                                    P =
                                        parseFloatLadiPage(
                                            getComputedStyle(
                                                t.getElementsByClassName("ladi-gallery-control-item")[d]
                                            ).height
                                        ) || 0,
                                    L = g.y - _.y - (E - P) / 2;
                                L =
                                    -(L -=
                                        parseFloatLadiPage(
                                            t
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.getPropertyValue("top")
                                        ) || 0) > 0
                                        ? 0
                                        : -L;
                                var A =
                                    parseFloatLadiPage(
                                        getComputedStyle(
                                            t.getElementsByClassName("ladi-gallery-control-box")[0]
                                        ).height
                                    ) || 0;
                                L <
                                    (A =
                                        (A = -(A -=
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    t.getElementsByClassName("ladi-gallery-control")[0]
                                                ).height
                                            ) || 0)) > 0
                                            ? 0
                                            : A) && (L = A),
                                    t
                                        .getElementsByClassName("ladi-gallery-control-box")[0]
                                        .style.setProperty("top", L + "px"),
                                    L >= 0 &&
                                    t
                                        .getElementsByClassName(
                                            "ladi-gallery-control-arrow-left"
                                        )[0]
                                        .classList.add("opacity-0"),
                                    L <= A &&
                                    t
                                        .getElementsByClassName(
                                            "ladi-gallery-control-arrow-right"
                                        )[0]
                                        .classList.add("opacity-0");
                            }
                            t.setAttribute("data-is-next", l),
                                t.setAttribute("data-current", d),
                                t
                                    .getElementsByClassName("ladi-gallery-view-arrow-left")[0]
                                    .classList.remove("opacity-0"),
                                t
                                    .getElementsByClassName("ladi-gallery-view-arrow-right")[0]
                                    .classList.remove("opacity-0"),
                                d <= 0 &&
                                t
                                    .getElementsByClassName("ladi-gallery-view-arrow-left")[0]
                                    .classList.add("opacity-0"),
                                d >= c - 1 &&
                                t
                                    .getElementsByClassName("ladi-gallery-view-arrow-right")[0]
                                    .classList.add("opacity-0"),
                                (t
                                    .getElementsByClassName("ladi-gallery")[0]
                                    .classList.contains("ladi-gallery-left") ||
                                    t
                                        .getElementsByClassName("ladi-gallery")[0]
                                        .classList.contains("ladi-gallery-right")) &&
                                e.reloadLazyload(!1),
                                !i &&
                                t.hasAttribute("data-loaded") &&
                                t.setAttribute("data-stop", !0);
                        }
                    }
                }
            },
            M = function (t, i, a) {
                var n = i.getAttribute("data-video-type"),
                    r = i.getAttribute("data-video-url"),
                    o = i.getAttribute("data-index"),
                    s = t.getAttribute("data-runtime-id") + "_" + o + "_player",
                    l = document.getElementById(s);
                a || (e.pauseAllVideo(), (e.runtime.tmp.gallery_playing_video = !0)),
                    e.isEmpty(l)
                        ? (n == e.const.VIDEO_TYPE.youtube &&
                            ((l = document.createElement("iframe")),
                                i.parentElement.insertBefore(l, i.nextSibling),
                                (l.outerHTML =
                                    '<iframe id="' +
                                    s +
                                    '" class="iframe-video-preload" data-video-type="' +
                                    n +
                                    '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                                e.runEventPlayVideo(s, n, r, !1, !1, !0, a, !1, !0)),
                            n == e.const.VIDEO_TYPE.direct &&
                            ((l = document.createElement("video")),
                                i.parentElement.insertBefore(l, i.nextSibling),
                                (l.outerHTML =
                                    '<video id="' +
                                    s +
                                    '" class="iframe-video-preload" data-video-type="' +
                                    n +
                                    '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                                e.runEventPlayVideo(s, n, r, !1, !1, !0, a, !1, !0)))
                        : e.runEventReplayVideo(s, n, !0);
            },
            q = function (t, i, a, n) {
                if (
                    "gallery" == n &&
                    (a || (i = document.getElementById(t)), !e.isEmpty(i))
                ) {
                    var r = i.getElementsByClassName("ladi-gallery-control-item").length;
                    i.setAttribute("data-max-item", r),
                        i.setAttribute("data-runtime-id", e.randomString(12));
                    var o = function (t) {
                        t.stopPropagation(), M(i, t.target, !1);
                    },
                        s = i.classList.contains("preload");
                    if (r > 0) {
                        for (var l = 0; l < r; l++) {
                            var d = i.getElementsByClassName("ladi-gallery-view-item")[l];
                            e.isEmpty(d) ||
                                (s && M(i, d, s),
                                    d.classList.contains("play-video") &&
                                    d.addEventListener("click", o));
                        }
                        i.setAttribute("data-current", 0),
                            i.setAttribute("data-is-next", !0);
                    }
                    for (
                        var c = i.getElementsByClassName("ladi-gallery-view-arrow"), u = 0;
                        u < c.length;
                        u++
                    )
                        r <= 1
                            ? c[u].classList.add("ladi-hidden")
                            : c[u].classList.remove("ladi-hidden");
                }
            },
            B = function (t, i) {
                t.stopPropagation();
                var a = e.runtime.eventData[i.id],
                    n = a[e.runtime.device + ".option.gallery_control.autoplay"],
                    r = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                    o = 0;
                n && !e.isEmpty(r) && (o = r);
                var s = parseFloatLadiPage(t.target.getAttribute("data-index")) || 0,
                    l = null,
                    d = null;
                (parseFloatLadiPage(i.getAttribute("data-current")) || 0) > s
                    ? ((l = "prev"), (d = "right"))
                    : ((l = "next"), (d = "left"));
                var c = i.getAttribute("data-is-next") || "true";
                (c = "true" == c.toLowerCase()) ? s-- : s++,
                    i.setAttribute("data-current", s),
                    i.setAttribute("data-next-time", Date.now() + 1e3 * o),
                    F(i, !1, l, d);
            },
            Y = function () {
                m.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if ("gallery" == i.type)
                        for (
                            var a = document.querySelectorAll("#" + t), n = 0;
                            n < a.length;
                            n++
                        ) {
                            var r = a[n];
                            if (
                                "true" == r.getAttribute("data-scrolled") &&
                                "true" != r.getAttribute("data-stop")
                            ) {
                                var o =
                                    i[e.runtime.device + ".option.gallery_control.autoplay"],
                                    s =
                                        i[
                                        e.runtime.device + ".option.gallery_control.autoplay_time"
                                        ],
                                    l = 0;
                                if ((o && !e.isEmpty(s) && (l = s), l > 0)) {
                                    var d = r.getAttribute("data-next-time"),
                                        c = Date.now();
                                    e.isEmpty(d) &&
                                        ((d = c + 1e3 * (l - 1)),
                                            r.setAttribute("data-next-time", d)),
                                        c >= d &&
                                        (F(r, !0), r.setAttribute("data-next-time", c + 1e3 * l));
                                }
                            }
                        }
                });
            },
            V = function (t, i) {
                var a = e.runtime.eventData[t];
                if ("gallery" == a.type) {
                    var n = i.getAttribute("data-runtime-id");
                    if (!i.hasAttribute("data-scrolled")) {
                        i.setAttribute("data-scrolled", !1);
                        e.runtime.list_scroll_func[n] = function () {
                            i.setAttribute("data-scrolled", !0);
                        };
                    }
                    var r = a[e.runtime.device + ".option.gallery_control.autoplay"],
                        o = a[e.runtime.device + ".option.gallery_control.autoplay_time"],
                        s = 0;
                    r && !e.isEmpty(o) && (s = o);
                    var l = function (t) {
                        B(t, i);
                    },
                        d = function (t) {
                            t.stopPropagation(), (t = e.getEventCursorData(t));
                            var a = i.getAttribute("data-runtime-id");
                            e.isEmpty(e.runtime.timeout_gallery[a]) &&
                                ((e.runtime.current_element_mouse_down_gallery_view = a),
                                    (e.runtime.current_element_mouse_down_gallery_view_position_x =
                                        t.pageX));
                        },
                        c = function (t) {
                            t.stopPropagation(),
                                (t = e.getEventCursorData(t)),
                                (i
                                    .getElementsByClassName("ladi-gallery")[0]
                                    .classList.contains("ladi-gallery-top") ||
                                    i
                                        .getElementsByClassName("ladi-gallery")[0]
                                        .classList.contains("ladi-gallery-bottom")) &&
                                ((e.runtime.current_element_mouse_down_gallery_control = n),
                                    (e.runtime.current_element_mouse_down_gallery_control_time =
                                        Date.now()),
                                    (e.runtime.current_element_mouse_down_gallery_control_position_x =
                                        t.pageX),
                                    i
                                        .getElementsByClassName("ladi-gallery-control-box")[0]
                                        .style.setProperty("transition-duration", "0ms"),
                                    i
                                        .getElementsByClassName("ladi-gallery-control-box")[0]
                                        .setAttribute(
                                            "data-left",
                                            getComputedStyle(
                                                i.getElementsByClassName("ladi-gallery-control-box")[0]
                                            ).left
                                        ));
                        };
                    i
                        .getElementsByClassName("ladi-gallery-view-arrow-left")[0]
                        .addEventListener("click", function (t) {
                            t.stopPropagation(),
                                i.setAttribute("data-is-next", !1),
                                i.setAttribute("data-next-time", Date.now() + 1e3 * s),
                                F(i, !1);
                        }),
                        i.getElementsByClassName("ladi-gallery-view-item").length > 1 &&
                        i
                            .getElementsByClassName("ladi-gallery-view-arrow-right")[0]
                            .classList.remove("opacity-0"),
                        i
                            .getElementsByClassName("ladi-gallery-view-arrow-right")[0]
                            .addEventListener("click", function (t) {
                                t.stopPropagation(),
                                    i.setAttribute("data-is-next", !0),
                                    i.setAttribute("data-next-time", Date.now() + 1e3 * s),
                                    F(i, !1);
                            }),
                        i
                            .getElementsByClassName("ladi-gallery-control-arrow-left")[0]
                            .addEventListener("click", function (t) {
                                t.stopPropagation();
                                var a = i.getElementsByClassName(
                                    "ladi-gallery-control-item"
                                )[0];
                                if (!e.isEmpty(a)) {
                                    var n = getComputedStyle(a);
                                    if (
                                        (i
                                            .getElementsByClassName(
                                                "ladi-gallery-control-arrow-left"
                                            )[0]
                                            .classList.remove("opacity-0"),
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.remove("opacity-0"),
                                            i
                                                .getElementsByClassName("ladi-gallery")[0]
                                                .classList.contains("ladi-gallery-top") ||
                                            i
                                                .getElementsByClassName("ladi-gallery")[0]
                                                .classList.contains("ladi-gallery-bottom"))
                                    ) {
                                        var r =
                                            (parseFloatLadiPage(n.width) || 0) +
                                            (parseFloatLadiPage(n.marginRight) || 0);
                                        r +=
                                            parseFloatLadiPage(
                                                i
                                                    .getElementsByClassName("ladi-gallery-control-box")[0]
                                                    .style.getPropertyValue("left")
                                            ) || 0;
                                        var o =
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    i.getElementsByClassName(
                                                        "ladi-gallery-control-box"
                                                    )[0]
                                                ).width
                                            ) || 0;
                                        (o =
                                            (o = -(o -=
                                                parseFloatLadiPage(
                                                    getComputedStyle(
                                                        i.getElementsByClassName("ladi-gallery-control")[0]
                                                    ).width
                                                ) || 0)) > 0
                                                ? 0
                                                : o),
                                            r > 0 && (r = 0),
                                            i
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.setProperty("left", r + "px"),
                                            r >= 0 &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-left"
                                                )[0]
                                                .classList.add("opacity-0"),
                                            r <= o &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.add("opacity-0");
                                    } else {
                                        var l =
                                            (parseFloatLadiPage(n.height) || 0) +
                                            (parseFloatLadiPage(n.marginBottom) || 0);
                                        l +=
                                            parseFloatLadiPage(
                                                i
                                                    .getElementsByClassName("ladi-gallery-control-box")[0]
                                                    .style.getPropertyValue("top")
                                            ) || 0;
                                        var d =
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    i.getElementsByClassName(
                                                        "ladi-gallery-control-box"
                                                    )[0]
                                                ).height
                                            ) || 0;
                                        (d =
                                            (d = -(d -=
                                                parseFloatLadiPage(
                                                    getComputedStyle(
                                                        i.getElementsByClassName("ladi-gallery-control")[0]
                                                    ).height
                                                ) || 0)) > 0
                                                ? 0
                                                : d),
                                            l > 0 && (l = 0),
                                            i
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.setProperty("top", l + "px"),
                                            l >= 0 &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-left"
                                                )[0]
                                                .classList.add("opacity-0"),
                                            l <= d &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.add("opacity-0");
                                    }
                                    i.setAttribute("data-next-time", Date.now() + 1e3 * s);
                                }
                            }),
                        (parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control-box")[0]
                            ).width
                        ) || 0) >
                        (parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control")[0]
                            ).width
                        ) || 0) &&
                        i
                            .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                            .classList.remove("opacity-0"),
                        i
                            .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                            .addEventListener("click", function (t) {
                                t.stopPropagation();
                                var a = i.getElementsByClassName(
                                    "ladi-gallery-control-item"
                                )[0];
                                if (!e.isEmpty(a)) {
                                    var n = getComputedStyle(a);
                                    if (
                                        (i
                                            .getElementsByClassName(
                                                "ladi-gallery-control-arrow-left"
                                            )[0]
                                            .classList.remove("opacity-0"),
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.remove("opacity-0"),
                                            i
                                                .getElementsByClassName("ladi-gallery")[0]
                                                .classList.contains("ladi-gallery-top") ||
                                            i
                                                .getElementsByClassName("ladi-gallery")[0]
                                                .classList.contains("ladi-gallery-bottom"))
                                    ) {
                                        var r =
                                            (parseFloatLadiPage(n.width) || 0) +
                                            (parseFloatLadiPage(n.marginRight) || 0);
                                        r =
                                            -r +
                                            (parseFloatLadiPage(
                                                i
                                                    .getElementsByClassName("ladi-gallery-control-box")[0]
                                                    .style.getPropertyValue("left")
                                            ) || 0);
                                        var o =
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    i.getElementsByClassName(
                                                        "ladi-gallery-control-box"
                                                    )[0]
                                                ).width
                                            ) || 0;
                                        r <
                                            (o =
                                                (o = -(o -=
                                                    parseFloatLadiPage(
                                                        getComputedStyle(
                                                            i.getElementsByClassName(
                                                                "ladi-gallery-control"
                                                            )[0]
                                                        ).width
                                                    ) || 0)) > 0
                                                    ? 0
                                                    : o) && (r = o),
                                            i
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.setProperty("left", r + "px"),
                                            r >= 0 &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-left"
                                                )[0]
                                                .classList.add("opacity-0"),
                                            r <= o &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.add("opacity-0");
                                    } else {
                                        var l =
                                            (parseFloatLadiPage(n.height) || 0) +
                                            (parseFloatLadiPage(n.marginBottom) || 0);
                                        l =
                                            -l +
                                            (parseFloatLadiPage(
                                                i
                                                    .getElementsByClassName("ladi-gallery-control-box")[0]
                                                    .style.getPropertyValue("top")
                                            ) || 0);
                                        var d =
                                            parseFloatLadiPage(
                                                getComputedStyle(
                                                    i.getElementsByClassName(
                                                        "ladi-gallery-control-box"
                                                    )[0]
                                                ).height
                                            ) || 0;
                                        l <
                                            (d =
                                                (d = -(d -=
                                                    parseFloatLadiPage(
                                                        getComputedStyle(
                                                            i.getElementsByClassName(
                                                                "ladi-gallery-control"
                                                            )[0]
                                                        ).height
                                                    ) || 0)) > 0
                                                    ? 0
                                                    : d) && (l = d),
                                            i
                                                .getElementsByClassName("ladi-gallery-control-box")[0]
                                                .style.setProperty("top", l + "px"),
                                            l >= 0 &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-left"
                                                )[0]
                                                .classList.add("opacity-0"),
                                            l <= d &&
                                            i
                                                .getElementsByClassName(
                                                    "ladi-gallery-control-arrow-right"
                                                )[0]
                                                .classList.add("opacity-0");
                                    }
                                    i.setAttribute("data-next-time", Date.now() + 1e3 * s);
                                }
                            }),
                        i
                            .getElementsByClassName("ladi-gallery-view")[0]
                            .addEventListener("mousedown", d),
                        i
                            .getElementsByClassName("ladi-gallery-view")[0]
                            .addEventListener("touchstart", d, e.runtime.scrollEventPassive),
                        i
                            .getElementsByClassName("ladi-gallery-control")[0]
                            .addEventListener("mousedown", c),
                        i
                            .getElementsByClassName("ladi-gallery-control")[0]
                            .addEventListener("touchstart", c, e.runtime.scrollEventPassive);
                    for (
                        var u = i.getElementsByClassName("ladi-gallery-control-item"),
                        p = 0;
                        p < u.length;
                        p++
                    )
                        u[p].addEventListener("click", l);
                    e.isEmpty(a["option.product_mapping_name"]) &&
                        !i.hasAttribute("data-loaded") &&
                        e.runTimeout(function () {
                            i.setAttribute("data-loaded", !0);
                        }, 300);
                }
            },
            H = function (t, i) {
                if (
                    (e.isEmpty(e.runtime.timenext_carousel[t]) ||
                        !(e.runtime.timenext_carousel[t] > Date.now())) &&
                    e.isEmpty(e.runtime.current_element_mouse_down_carousel)
                ) {
                    var a = document.getElementById(t);
                    if (!e.isEmpty(a)) {
                        var n = a.getAttribute("data-is-next") || "true";
                        n = "true" == n.toLowerCase();
                        var r = parseFloatLadiPage(a.getAttribute("data-current")) || 0,
                            o =
                                parseFloatLadiPage(
                                    e.runtime.eventData[t][
                                    e.runtime.device + ".option.carousel_crop.width"
                                    ]
                                ) || 0,
                            s =
                                parseFloatLadiPage(
                                    e.runtime.eventData[t][
                                    e.runtime.device + ".option.carousel_crop.width_item"
                                    ]
                                ) || 0;
                        s > a.clientWidth && (s = a.clientWidth);
                        var l = Math.ceil(o / s);
                        i
                            ? n
                                ? r >= l - 1
                                    ? ((r = l - 2), (n = !1))
                                    : r++
                                : r <= 0
                                    ? ((r = 1), (n = !0))
                                    : r--
                            : n
                                ? r++
                                : r--,
                            r < 0 && (r = 0),
                            r >= l - 1 && (r = l - 1);
                        var d =
                            1e3 *
                            (parseFloatLadiPage(
                                getComputedStyle(
                                    a.getElementsByClassName("ladi-carousel-content")[0]
                                ).transitionDuration
                            ) || 0);
                        e.runtime.timenext_carousel[t] = Date.now() + d;
                        var c = e.getElementBoundingClientRect(a),
                            u = c.x + r * s - c.x - (a.clientWidth - s) / 2;
                        u = -u > 0 ? 0 : -u;
                        var p = -(o - a.clientWidth);
                        u < p && (u = p),
                            a
                                .getElementsByClassName("ladi-carousel-content")[0]
                                .style.setProperty("left", u + "px"),
                            a.setAttribute("data-is-next", n),
                            a.setAttribute("data-current", r),
                            i || a.setAttribute("data-stop", !0);
                        var m = a.getElementsByClassName("ladi-carousel-arrow-left")[0],
                            _ = a.getElementsByClassName("ladi-carousel-arrow-right")[0];
                        e.isEmpty(m) || m.classList.remove("opacity-0"),
                            e.isEmpty(_) || _.classList.remove("opacity-0"),
                            u >= 0 && m.classList.add("opacity-0"),
                            u <= p && _.classList.add("opacity-0");
                    }
                }
            },
            G = function () {
                var i,
                    a = document.getElementsByClassName("ladi-form"),
                    n = null,
                    r = null,
                    l = null,
                    d = null,
                    c = null,
                    u = null,
                    m = null,
                    _ = null,
                    g = null,
                    y = null,
                    h = null,
                    v = e.runtime.shopping,
                    E = null,
                    L = [
                        "utm_source",
                        "utm_medium",
                        "utm_campaign",
                        "utm_term",
                        "utm_content",
                    ],
                    A = [
                        "name",
                        "email",
                        "phone",
                        "address",
                        "ward",
                        "district",
                        "state",
                        "country",
                    ],
                    b = ["email", "phone"],
                    S = e.copy(e.runtime.list_set_value_name_country).reverse(),
                    O = function (t, i) {
                        var a = window.ladi("_capture_" + t).get_cookie();
                        if (e.isEmpty(a)) {
                            a =
                                i +
                                "|" +
                                e.runtime.ladipage_id +
                                "|" +
                                Date.now() +
                                "|" +
                                e.randomId();
                            var n = new Date();
                            n.setTime(n.getTime() + 3e5),
                                window.ladi("_capture_" + t).set_cookie(a, n);
                        }
                        return a;
                    },
                    C = function (t, i, a) {
                        if (i && e.isEmpty(n[a])) return !1;
                        var r = [];
                        if (
                            (y.forEach(function (t) {
                                e.isEmpty(n[t]) && r.push(t);
                            }),
                                i && (r = r.only([a])),
                                r.length > 0)
                        )
                            return (
                                i ||
                                e.showMessage(
                                    e.const.LANG.FORM_INPUT_REQUIRED_ERROR,
                                    null,
                                    function () {
                                        var i = t.querySelector('[name="' + r[0] + '"]');
                                        e.isEmpty(i) || i.focus();
                                    }
                                ),
                                !1
                            );
                        var o = !0,
                            s = 0,
                            l = function () {
                                var i = t.querySelector('[name="' + h[s].name + '"]');
                                e.isEmpty(i) || i.focus();
                            };
                        for (s = 0; s < h.length; s++)
                            if (!i || h[s].name == a) {
                                var d = n[h[s].name];
                                if (!e.isEmpty(d))
                                    try {
                                        if (
                                            !new RegExp(
                                                "^" + h[s].pattern + "$",
                                                h[s].pattern_flag
                                            ).test(d)
                                        ) {
                                            i || e.showMessage(h[s].title, null, l), (o = !1);
                                            break;
                                        }
                                    } catch (t) { }
                            }
                        return o;
                    },
                    N = function (t, i) {
                        (n = {}), (r = {});
                        for (
                            var a = t.querySelectorAll(
                                ".ladi-element .ladi-form-item-container [name]"
                            ),
                            s = {},
                            c = null,
                            u = 0;
                            u < a.length;
                            u++
                        )
                            (c = a[u].getAttribute("name")),
                                (s[c] = parseInt(a[u].getAttribute("tabindex")) || 0);
                        var p = Object.keys(s).sort(function (t, e) {
                            return s[t] - s[e];
                        });
                        if (
                            p.only(e.runtime.list_set_value_name_country).length ==
                            e.runtime.list_set_value_name_country.length
                        )
                            for (var m = 0; m < p.length; m++) {
                                var _ = e.runtime.list_set_value_name_country.indexOf(p[m]);
                                -1 != _ && (p[m] = S[_]);
                            }
                        for (var g = 0; g < p.length; g++) n[p[g]] = "";
                        d = p;
                        for (var f = 0; f < a.length; f++) {
                            (c = a[f].getAttribute("name")),
                                a[f].required && -1 == y.indexOf(c) && y.push(c);
                            var v = null;
                            if ("INPUT" == a[f].tagName) {
                                v = a[f].getAttribute("type").trim().toLowerCase();
                                var E = a[f].getAttribute("pattern"),
                                    P = a[f].getAttribute("title");
                                if (
                                    ("email" == v
                                        ? h.push({
                                            name: c,
                                            pattern:
                                                '(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))',
                                            pattern_flag: "gi",
                                            title: e.const.LANG.FORM_INPUT_EMAIL_REGEX,
                                        })
                                        : e.isEmpty(E) ||
                                        h.push({
                                            name: c,
                                            pattern: E,
                                            title: e.isEmpty(P)
                                                ? e.const.LANG.FORM_INPUT_TEXT_REGEX
                                                : P,
                                        }),
                                        "checkbox" == v)
                                ) {
                                    e.isArray(n[c]) || (n[c] = []),
                                        a[f].checked && n[c].push(a[f].value);
                                    continue;
                                }
                                if ("radio" == v) {
                                    a[f].checked && (n[c] = a[f].value);
                                    continue;
                                }
                            }
                            if (
                                ((n[c] = a[f].value),
                                    a[f].hasAttribute("data-path-file") &&
                                    ((n[c] = JSON.parse(a[f].getAttribute("data-path-file"))),
                                        (r[c] = !0)),
                                    "coupon" == c &&
                                    "INPUT" == a[f].tagName &&
                                    "text" == v &&
                                    "true" == a[f].getAttribute("data-replace-coupon") &&
                                    (n[c] = e.runtime.tmp.current_use_coupon || ""),
                                    "INPUT" == a[f].tagName && "date" == v && !e.isEmpty(n[c]))
                            ) {
                                var L = a[f].getAttribute("date-format") || "dd-mm-yyyy",
                                    b = new Date(n[c]);
                                (L = (L = (L = (L = L.replaceAll(
                                    "dd",
                                    (b.getDate() < 10 ? "0" : "") + b.getDate()
                                )).replaceAll(
                                    "mm",
                                    (b.getMonth() + 1 < 10 ? "0" : "") + (b.getMonth() + 1)
                                )).replaceAll("yyyy", b.getFullYear())).replaceAll(
                                    "yy",
                                    b.getFullYear() - 2e3
                                )),
                                    (n[c] = L);
                            }
                        }
                        i ||
                            A.forEach(function (t) {
                                e.isNull(n[t]) ||
                                    (window
                                        .ladi("_ladipage_" + t)
                                        .set_cookie(n[t], 365, "/", window.location.host),
                                        e.isArray(e.runtime.DOMAIN_SET_COOKIE) &&
                                        e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                                            e != window.location.host &&
                                                window
                                                    .ladi("_ladipage_" + t)
                                                    .set_cookie(n[t], 365, "/", e);
                                        }));
                            }),
                            (l = o(n));
                    },
                    I = function (t, i, a) {
                        var o = {
                            form_config_id: c,
                            ladi_form_id: u,
                            ladipage_id: e.runtime.ladipage_id,
                            tracking_form: [],
                            form_data: [],
                            data_key: i,
                        };
                        if (t) o.status_send = 1;
                        else if (((o.status_send = 2), v)) {
                            var s = window.ladi("_checkout_token").get_cookie();
                            e.isEmpty(s) || (o.checkout_token = s);
                        }
                        e.isEmpty(g) || (o.captcha_token = g),
                            e.isEmpty(m) || (o.total_revenue = m),
                            e.isEmpty(e.runtime.time_zone) ||
                            (o.time_zone = e.runtime.time_zone);
                        var l = Object.keys(LadiFormApi);
                        if (
                            (d.forEach(function (t) {
                                var i = n[t];
                                e.isArray(i) && 0 == i.length && (i = "");
                                var a = {
                                    name: t,
                                    value: (i = -1 != l.indexOf(t) ? LadiFormApi[t] : i),
                                };
                                r[t] && (a.is_file = !0), o.form_data.push(a);
                            }),
                                (l = l.except(d)).forEach(function (t) {
                                    o.form_data.push({ name: t, value: LadiFormApi[t] });
                                }),
                                v)
                        ) {
                            if (!e.isNull(_)) {
                                o.form_data.push({
                                    name: "cart_products",
                                    value: _,
                                    is_ladipage: !0,
                                }),
                                    e.isEmpty(e.runtime.tmp.add_to_cart_shipping_method_id) ||
                                    o.form_data.push({
                                        name: "cart_shipping",
                                        value:
                                            e.runtime.tmp.add_to_cart_shipping_method_id +
                                            "|" +
                                            (e.runtime.tmp.add_to_cart_fee_shipping || 0),
                                        is_ladipage: !0,
                                    });
                                var y = o.form_data.findIndex(function (t) {
                                    return "coupon" == t.name;
                                });
                                -1 != y && (o.form_data[y].is_ladipage = !0);
                            }
                            e.isEmpty(m) ||
                                o.form_data.push({
                                    name: "cart_revenue",
                                    value: m,
                                    is_ladipage: !0,
                                }),
                                e.isEmpty(e.runtime.tmp.current_use_coupon) ||
                                o.form_data.push({
                                    name: "cart_coupon_amount",
                                    value: e.runtime.tmp.add_to_cart_discount || 0,
                                    is_ladipage: !0,
                                });
                        }
                        o.tracking_form.push({
                            name: "url_page",
                            value: window.location.href,
                        }),
                            e.runtime.has_popupx &&
                            o.tracking_form.push({
                                name: "origin_url_page",
                                value: e.runtime.tmp.popupx_origin_url,
                            }),
                            L.forEach(function (t) {
                                var i = E[t];
                                (i = e.isNull(i) ? "" : i),
                                    o.tracking_form.push({ name: t, value: i });
                            }),
                            o.tracking_form.push({ name: "variant_url", value: P }),
                            o.tracking_form.push({
                                name: "variant_content",
                                value: e.generateVariantContentString(w, !0),
                            }),
                            e.isEmpty(p) ||
                            o.tracking_form.push({ name: e.const.REF_NAME, value: p }),
                            e.isFunction(a) && a(o);
                    },
                    k = function (t) {
                        t.reset();
                        for (
                            var i = t.querySelectorAll(
                                ".ladi-element .ladi-form-item-container .ladi-form-checkbox-item input"
                            ),
                            a = 0;
                            a < i.length;
                            a++
                        ) {
                            var n = e
                                .findAncestor(i[a], "ladi-form-checkbox-item")
                                .querySelector("span");
                            e.isEmpty(n) || n.setAttribute("data-checked", i[a].checked);
                        }
                        var r = e.findAncestor(t, "ladi-element");
                        if (!e.isEmpty(r))
                            for (
                                var o = document.querySelectorAll(
                                    '.ladi-form [data-submit-form-id="' + r.id + '"]'
                                ),
                                s = 0;
                                s < o.length;
                                s++
                            ) {
                                var l = e.findAncestor(o[s], "ladi-form");
                                if (
                                    !e.isEmpty(l) &&
                                    ((l = e.findAncestor(l, "ladi-element")), !e.isEmpty(l))
                                ) {
                                    var d = l.querySelector(".ladi-form-remove-coupon");
                                    if (e.isEmpty(d)) {
                                        var c = l.querySelector('input[name="coupon"]');
                                        e.isEmpty(c) || ((c.value = ""), e.fireEvent(c, "change"));
                                    } else d.click();
                                }
                            }
                        for (
                            var u = document.querySelectorAll(
                                '[data-combobox-type="delivery_method"]'
                            ),
                            p = 0;
                            p < u.length;
                            p++
                        )
                            u[p].hasAttribute("data-placeholder") &&
                                (u[p].innerHTML =
                                    '<option value="">' +
                                    u[p].getAttribute("data-placeholder") +
                                    "</option>"),
                                u[p].setAttribute("data-selected", "");
                        e.runtime.tmp.add_to_cart_shipping_method_id = null;
                    },
                    x = function (t, i) {
                        N(t, !1),
                            C(t, !1, null) &&
                            (I(!1, i, function (t) {
                                e.sendRequest(
                                    "POST",
                                    e.const.API_FORM_DATA,
                                    JSON.stringify(t),
                                    !0,
                                    { "Content-Type": "application/json" }
                                );
                            }),
                                e.showMessage(e.const.LANG.FORM_SEND_DATA_NO_CONFIG),
                                k(t));
                    },
                    R = function () {
                        e.showMessage(e.const.LANG.FORM_CAPTCHA_ERROR);
                    },
                    D = function (i, a, o, s, p) {
                        (E = e.getURLSearchParams(null, null, !1)),
                            (n = {}),
                            (r = {}),
                            (l = {}),
                            (d = []),
                            (c = null),
                            (u = null),
                            (m = null),
                            (_ = null),
                            (g = a.captcha_token),
                            (y = []),
                            (h = []),
                            (v = e.findAncestor(i, "ladi-popup")),
                            e.isEmpty(v)
                                ? (v = !1)
                                : ((v = e.findAncestor(v, "ladi-element")),
                                    (v = !e.isEmpty(v) && "POPUP_CHECKOUT" == v.id));
                        var P = i.getElementsByClassName("ladi-form")[0];
                        if (!e.isEmpty(P)) {
                            var A = e.runtime.eventData[i.id];
                            if (!e.isEmpty(A)) {
                                if (A["option.is_add_to_cart"]) return;
                                (c = A["option.form_config_id"]),
                                    (u = i.id),
                                    (m =
                                        parseFloatLadiPage(A["option.form_purchase_value"]) || 0),
                                    v &&
                                    ((m = e.getCartCheckoutPrice(m)),
                                        (_ = e.getCartProducts()));
                            }
                            if (o) {
                                if (e.isEmpty(s)) return;
                                if ((N(P, o), !C(P, o, p))) return;
                                return a.captcha &&
                                    !e.isEmpty(A) &&
                                    A["option.form_captcha"] &&
                                    e.isObject(e.runtime.tmp.google_captcha)
                                    ? void (
                                        window.grecaptcha &&
                                        window.grecaptcha.ready(function () {
                                            try {
                                                window.grecaptcha
                                                    .execute(e.runtime.tmp.google_captcha.api_key, {
                                                        action: "submit",
                                                    })
                                                    .then(function (t) {
                                                        D(i, { captcha_token: t }, o, s, p);
                                                    });
                                            } catch (t) { }
                                        })
                                    )
                                    : void I(o, s, function (t) {
                                        var i = t.form_data.findIndex(function (t) {
                                            return t.name == p;
                                        }),
                                            a = -1 != i ? t.form_data[i].value : null;
                                        (!e.isEmpty(
                                            e.runtime.tmp.capture_form_data_last[s + "_" + p]
                                        ) &&
                                            e.equals(
                                                e.runtime.tmp.capture_form_data_last[s + "_" + p],
                                                a
                                            )) ||
                                            ((e.runtime.tmp.capture_form_data_last[s + "_" + p] =
                                                a),
                                                e.sendRequest(
                                                    "POST",
                                                    e.const.API_FORM_DATA,
                                                    JSON.stringify(t),
                                                    !0,
                                                    { "Content-Type": "application/json" }
                                                ));
                                    });
                            }
                            if (e.isEmpty(A)) x(P, s);
                            else if (
                                (e.isNull(e.runtime.tmp.form_sending) &&
                                    (e.runtime.tmp.form_sending = {}),
                                    e.isNull(e.runtime.tmp.form_button_headline) &&
                                    (e.runtime.tmp.form_button_headline = {}),
                                    !e.runtime.tmp.form_sending[i.id])
                            ) {
                                var b = function () {
                                    e.runtime.tmp.form_sending[i.id] = !0;
                                    var t = P.querySelector(
                                        ".ladi-button > .ladi-element > .ladi-headline"
                                    );
                                    e.isNull(e.runtime.tmp.form_button_headline[i.id]) &&
                                        (e.runtime.tmp.form_button_headline[i.id] = t.innerHTML),
                                        (t.innerHTML = "â— â— â—");
                                },
                                    w = function () {
                                        delete e.runtime.tmp.form_sending[i.id],
                                            (P.querySelector(
                                                ".ladi-button > .ladi-element > .ladi-headline"
                                            ).innerHTML = e.runtime.tmp.form_button_headline[i.id]);
                                    };
                                if (
                                    a.captcha &&
                                    !e.isEmpty(A) &&
                                    A["option.form_captcha"] &&
                                    e.isObject(e.runtime.tmp.google_captcha)
                                )
                                    window.grecaptcha
                                        ? (b(),
                                            window.grecaptcha.ready(function () {
                                                try {
                                                    window.grecaptcha
                                                        .execute(e.runtime.tmp.google_captcha.api_key, {
                                                            action: "submit",
                                                        })
                                                        .then(function (t) {
                                                            w(), D(i, { captcha_token: t }, o, s, p);
                                                        })
                                                        .catch(function () {
                                                            R(), w();
                                                        });
                                                } catch (t) {
                                                    R(), w();
                                                }
                                            }))
                                        : e.showMessage(e.const.LANG.FORM_CAPTCHA_LOADING);
                                else {
                                    var S = A["option.form_send_ladipage"],
                                        O = A["option.form_api_data"],
                                        F = A["option.thankyou_type"],
                                        M = A["option.thankyou_value"],
                                        q = A["option.deeplink_value"],
                                        B = A["option.form_auto_funnel"],
                                        Y = A["option.form_thankyou_funnel"];
                                    if (e.isEmpty(c)) x(P, s);
                                    else if ((N(P, o), C(P, o, p))) {
                                        var V = 0,
                                            H = 0,
                                            G = [],
                                            U = !1,
                                            j = !1,
                                            W = !0,
                                            X = function (t) {
                                                t && k(P), w();
                                            },
                                            z = function (t) {
                                                if (
                                                    -1 !=
                                                    [
                                                        e.const.FORM_CONFIG_TYPE.sapo,
                                                        e.const.FORM_CONFIG_TYPE.shopify,
                                                        e.const.FORM_CONFIG_TYPE.haravan,
                                                        e.const.FORM_CONFIG_TYPE.wordpress,
                                                    ].indexOf(e.runtime.shopping_product_type) &&
                                                    e.runtime.tmp.cart.length > 0
                                                ) {
                                                    var i = !1;
                                                    return (
                                                        -1 !=
                                                        [
                                                            e.const.FORM_CONFIG_TYPE.haravan,
                                                            e.const.FORM_CONFIG_TYPE.wordpress,
                                                        ].indexOf(e.runtime.shopping_product_type) &&
                                                        (i = !0),
                                                        void e.removeAddToCartProduct(
                                                            e.runtime.tmp.cart[0].product_variant_id,
                                                            !1,
                                                            i,
                                                            function (i) {
                                                                i ? z(t) : e.isFunction(t) && t();
                                                            }
                                                        )
                                                    );
                                                }
                                                -1 !=
                                                    [e.const.FORM_CONFIG_TYPE.ladisales].indexOf(
                                                        e.runtime.shopping_product_type
                                                    ) &&
                                                    (window.ladi("_cart_token").delete_cookie(),
                                                        window.ladi("_checkout_token").delete_cookie(),
                                                        e.createCartData()),
                                                    e.isFunction(t) && t();
                                            },
                                            K = function (a, r, o, s) {
                                                if (o.readyState == XMLHttpRequest.DONE) {
                                                    if (s == e.const.API_FORM_DATA) {
                                                        var d = {};
                                                        try {
                                                            d = JSON.parse(a);
                                                        } catch (t) { }
                                                        200 == d.code ? V++ : (H++, (W = !1));
                                                    } else
                                                        200 == r || 201 == r
                                                            ? V++
                                                            : e.getElementAHref(s).host ==
                                                                e.const.DOMAIN_GOOGLE_DOCS
                                                                ? V++
                                                                : H++;
                                                    V + H == G.length &&
                                                        (W && !U && V >= 1
                                                            ? ((U = !0),
                                                                (function (t, i, a) {
                                                                    var n = null,
                                                                        r = !1,
                                                                        o = function (t, i) {
                                                                            r ||
                                                                                (e.isFunction(a) && a(t, i),
                                                                                    e.removeTimeout(n),
                                                                                    (r = !0));
                                                                        };
                                                                    (n = e.runTimeout(o, 3e3)),
                                                                        T(
                                                                            "FormSubmit",
                                                                            { ladi_form_id: t, total_revenue: i },
                                                                            o
                                                                        );
                                                                })(i.id, m, function (a, r) {
                                                                    e.runEventTracking(i.id, !0, n),
                                                                        window
                                                                            .ladi("_capture_" + i.id)
                                                                            .delete_cookie(),
                                                                        z(function () {
                                                                            e.runTimeout(function () {
                                                                                X(!0),
                                                                                    (e.runtime.tmp.current_use_coupon =
                                                                                        null),
                                                                                    (function () {
                                                                                        if (
                                                                                            F !=
                                                                                            e.const.FORM_THANKYOU_TYPE.url
                                                                                        ) {
                                                                                            var a = e.findAncestor(
                                                                                                i,
                                                                                                "ladi-popup"
                                                                                            );
                                                                                            e.isEmpty(a) ||
                                                                                                ((a = e.findAncestor(
                                                                                                    a,
                                                                                                    "ladi-element"
                                                                                                )),
                                                                                                    e.runRemovePopup(a.id, t));
                                                                                        }
                                                                                        var r = 0;
                                                                                        if (
                                                                                            !e.runtime.isDesktop &&
                                                                                            !e.isEmpty(q)
                                                                                        ) {
                                                                                            r = 1e3;
                                                                                            var o = e.convertDataReplaceStr(
                                                                                                q,
                                                                                                !0,
                                                                                                null,
                                                                                                !1,
                                                                                                l
                                                                                            );
                                                                                            window.ladi(o).open_url();
                                                                                        }
                                                                                        if (!Y || e.isEmpty(f)) {
                                                                                            if (
                                                                                                (F ==
                                                                                                    e.const.FORM_THANKYOU_TYPE
                                                                                                        .default &&
                                                                                                    (e.isEmpty(M) ||
                                                                                                        e.showMessage(M, l)),
                                                                                                    F ==
                                                                                                    e.const.FORM_THANKYOU_TYPE
                                                                                                        .popup &&
                                                                                                    (B &&
                                                                                                        e.setDataReplaceElement(
                                                                                                            !1,
                                                                                                            !1,
                                                                                                            l,
                                                                                                            M
                                                                                                        ),
                                                                                                        window.ladi(M).show()),
                                                                                                    F ==
                                                                                                    e.const.FORM_THANKYOU_TYPE
                                                                                                        .url && !e.isEmpty(M))
                                                                                            ) {
                                                                                                var s = window
                                                                                                    .ladi(M)
                                                                                                    .get_url(n, B, !0);
                                                                                                e.runTimeout(function () {
                                                                                                    window.ladi(s).open_url();
                                                                                                }, r);
                                                                                            }
                                                                                        } else {
                                                                                            var d = window
                                                                                                .ladi(f)
                                                                                                .get_url(n, B, !1);
                                                                                            e.runTimeout(function () {
                                                                                                window.ladi(d).open_url();
                                                                                            }, r);
                                                                                        }
                                                                                    })();
                                                                            }, 500);
                                                                        });
                                                                }))
                                                            : !j &&
                                                            H >= 1 &&
                                                            ((j = !0),
                                                                e.showMessage(e.const.LANG.REQUEST_SEND_ERROR),
                                                                X(!1)));
                                                }
                                            },
                                            J = function (t) {
                                                G.push({
                                                    url: e.const.API_FORM_DATA,
                                                    data: JSON.stringify(t),
                                                    async: !0,
                                                    headers: { "Content-Type": "application/json" },
                                                    callback: K,
                                                });
                                            };
                                        S && I(o, s, J),
                                            e.isArray(O) &&
                                            O.forEach(function (t) {
                                                if (
                                                    !e.isEmpty(t.api_url) &&
                                                    e.isArray(t.custom_fields)
                                                ) {
                                                    var i =
                                                        e.getElementAHref(t.api_url).host ==
                                                        e.const.DOMAIN_GOOGLE_DOCS,
                                                        a = {},
                                                        n = null,
                                                        o = null,
                                                        s = null,
                                                        d = null;
                                                    t.custom_fields.forEach(function (t) {
                                                        if (
                                                            (v &&
                                                                ("cart_products" == t.ladi_name &&
                                                                    (n = t.name),
                                                                    "cart_revenue" == t.ladi_name && (o = t.name),
                                                                    "cart_shipping" == t.ladi_name &&
                                                                    (s = t.name),
                                                                    "cart_coupon_amount" == t.ladi_name &&
                                                                    (d = t.name)),
                                                                !r[t.ladi_name])
                                                        ) {
                                                            var i = l[t.ladi_name];
                                                            e.isNull(i) ||
                                                                (e.isArray(i)
                                                                    ? 0 == i.length
                                                                        ? (a[t.name] = "")
                                                                        : (a[t.name] = JSON.stringify(i))
                                                                    : (a[t.name] = i));
                                                        }
                                                    }),
                                                        e.isEmpty(n) ||
                                                        e.isNull(_) ||
                                                        (a[n] = JSON.stringify(_)),
                                                        e.isEmpty(o) || e.isNull(m) || (a[o] = m),
                                                        e.isEmpty(s) ||
                                                        e.isNull(
                                                            e.runtime.tmp.add_to_cart_shipping_method_id
                                                        ) ||
                                                        (a[s] =
                                                            e.runtime.tmp.add_to_cart_shipping_method_id +
                                                            "|" +
                                                            (e.runtime.tmp.add_to_cart_fee_shipping ||
                                                                0)),
                                                        e.isEmpty(d) ||
                                                        e.isEmpty(e.runtime.tmp.current_use_coupon) ||
                                                        (a[d] =
                                                            e.runtime.tmp.add_to_cart_discount || 0);
                                                    var c = {};
                                                    if (!e.isEmpty(t.api_request_header))
                                                        try {
                                                            var u = JSON.parse(t.api_request_header);
                                                            Object.keys(u).forEach(function (t) {
                                                                c[t] = u[t];
                                                            });
                                                        } catch (t) { }
                                                    if (!i)
                                                        (a.link = window.location.href),
                                                            e.runtime.has_popupx &&
                                                            (a.origin_link =
                                                                e.runtime.tmp.popupx_origin_url),
                                                            Object.keys(LadiFormApi).forEach(function (t) {
                                                                a[t] = LadiFormApi[t];
                                                            }),
                                                            L.forEach(function (t) {
                                                                var i = E[t];
                                                                e.isNull(i) || (a[t] = i);
                                                            });
                                                    var p = null,
                                                        g =
                                                            t.content_type ||
                                                            e.const.CONTENT_TYPE.form_urlencoded;
                                                    if (
                                                        (g == e.const.CONTENT_TYPE.form_urlencoded &&
                                                            ((c["Content-Type"] =
                                                                "application/x-www-form-urlencoded"),
                                                                (p = Object.keys(a)
                                                                    .reduce(function (t, e) {
                                                                        return (
                                                                            t.push(
                                                                                e + "=" + encodeURIComponent(a[e])
                                                                            ),
                                                                            t
                                                                        );
                                                                    }, [])
                                                                    .join("&"))),
                                                            g == e.const.CONTENT_TYPE.json &&
                                                            ((c["Content-Type"] = "application/json"),
                                                                (p = JSON.stringify(a))),
                                                            g == e.const.CONTENT_TYPE.form_data)
                                                    )
                                                        (p = new FormData()),
                                                            Object.keys(a).forEach(function (t) {
                                                                p.append(t, a[t]);
                                                            });
                                                    G.push({
                                                        url: t.api_url,
                                                        data: p,
                                                        async: !0,
                                                        headers: c,
                                                        callback: K,
                                                    });
                                                }
                                            });
                                        G.length > 0 ? b() : S ? x(P, s) : (b(), I(o, s, J)),
                                            G.forEach(function (t) {
                                                e.sendRequest(
                                                    "POST",
                                                    t.url,
                                                    t.data,
                                                    t.async,
                                                    t.headers,
                                                    t.callback
                                                );
                                            });
                                    }
                                }
                            }
                        }
                    },
                    F = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i))
                            for (
                                var a = i.querySelectorAll('[type="checkbox"]'), n = 0;
                                n < a.length;
                                n++
                            )
                                a[n].removeAttribute("required");
                    },
                    M = function (t) {
                        var i = e.findAncestor(t.target, "ladi-element");
                        if (!e.isEmpty(i)) {
                            for (
                                var a = i.querySelectorAll('[ladi-checkbox-required="true"]'),
                                r = -1,
                                o = 0;
                                o < a.length;
                                o++
                            )
                                if (
                                    0 == a[o].querySelectorAll('[type="checkbox"]:checked').length
                                ) {
                                    r = o;
                                    break;
                                }
                            if (-1 == r) {
                                var s = null,
                                    c = e.runtime.eventData[i.id];
                                if (!e.isEmpty(c) && c["option.is_form_login"])
                                    !(function (t, i) {
                                        var a = t.querySelector('input[name="access_key"]');
                                        if (!e.isEmpty(a) && !e.isEmpty(a.value)) {
                                            for (var n = [], r = 0, o = 1; o <= 50; o++) {
                                                var s = window.ladi("_login_token_" + o).get_cookie();
                                                0 == r && e.isEmpty(s) && (r = o), n.push(s);
                                            }
                                            if (0 == r) {
                                                for (o = 1; o <= 50; o++)
                                                    window.ladi("_login_token_" + o).delete_cookie();
                                                (n = []), (r = 1);
                                            }
                                            e.sendRequest(
                                                "POST",
                                                e.const.API_ACCESS_KEY_LOGIN,
                                                JSON.stringify({
                                                    tokens: n.removeSpace(),
                                                    url: window.location.href,
                                                    code: a.value.toUpperCase(),
                                                }),
                                                !0,
                                                { "Content-Type": "application/json" },
                                                function (t, i, a, o) {
                                                    if (a.readyState == XMLHttpRequest.DONE) {
                                                        var s = {};
                                                        try {
                                                            if (200 == (s = JSON.parse(t)).code) {
                                                                var l = n.findIndex(function (t) {
                                                                    return t == s.data.token;
                                                                });
                                                                -1 != l && (r = l + 1),
                                                                    window
                                                                        .ladi("_login_token_" + r)
                                                                        .set_cookie(s.data.token, 7);
                                                                var d = e.getElementAHref(s.data.url, !0),
                                                                    c = window.location.search;
                                                                (c.startsWith("?") || c.startsWith("&")) &&
                                                                    (c = c.substring(1)),
                                                                    e.isEmpty(c) ||
                                                                    (d.search =
                                                                        d.search +
                                                                        (e.isEmpty(d.search) ? "?" : "&") +
                                                                        c),
                                                                    window.ladi(d.href).open_url();
                                                            } else e.showMessage(s.message);
                                                            return;
                                                        } catch (t) { }
                                                        e.showMessage(e.const.LANG.FORM_LOGIN_SEND_ERROR);
                                                    }
                                                }
                                            );
                                        }
                                    })(i);
                                else {
                                    if (
                                        e.runtime.shopping_product_type ==
                                        e.const.FORM_CONFIG_TYPE.ladisales &&
                                        !e.isNull(e.runtime.shopping_config_checkout_id)
                                    ) {
                                        var u = e.findAncestor(i, "ladi-popup");
                                        if (
                                            !e.isEmpty(u) &&
                                            ((u = e.findAncestor(u, "ladi-element")),
                                                !e.isEmpty(u) && "POPUP_CHECKOUT" == u.id)
                                        )
                                            return (
                                                (function (t) {
                                                    var i = window.ladi("_cart_token").get_cookie(),
                                                        a = window.ladi("_checkout_token").get_cookie();
                                                    (l = {}), (d = []), (y = []), (h = []), N(t, !1);
                                                    var r = n.email,
                                                        o = n.phone;
                                                    if (e.isEmpty(i) || e.isEmpty(a))
                                                        e.showMessage(
                                                            e.const.LANG.FORM_INPUT_REQUIRED_ERROR
                                                        );
                                                    else if (e.isEmpty(r) && e.isEmpty(o))
                                                        e.showMessage(
                                                            e.const.LANG.FORM_INPUT_REQUIRED_ERROR
                                                        );
                                                    else {
                                                        var s = (E = e.getURLSearchParams(null, null, !1))
                                                            .utm_source,
                                                            c = E.utm_medium,
                                                            u = E.utm_campaign,
                                                            m = E.utm_term,
                                                            _ = E.utm_content,
                                                            g = n.name,
                                                            f = n.address,
                                                            v = n.message,
                                                            P = n.country || "";
                                                        P = P.split(":")[0];
                                                        var L = n.state || "";
                                                        L = L.split(":")[0];
                                                        var A = n.district || "";
                                                        A = A.split(":")[0];
                                                        var b = n.ward || "";
                                                        b = b.split(":")[0];
                                                        var w = n.coupon,
                                                            S = e.runtime.tmp.add_to_cart_shipping_method_id,
                                                            T = e.getLadiSaleCheckoutCartProducts(),
                                                            O = {
                                                                cart_token: i,
                                                                checkout_token: a,
                                                                discount_code: w,
                                                                customer_first_name: g,
                                                                customer_email: r,
                                                                customer_phone: o,
                                                                customer_address: f,
                                                                customer_note: v,
                                                                customer_country_code: P,
                                                                customer_state_id: L,
                                                                customer_district_id: A,
                                                                customer_ward_id: b,
                                                                shipping_method_id: S,
                                                                shipping_first_name: g,
                                                                shipping_address: f,
                                                                shipping_phone: o,
                                                                shipping_email: r,
                                                                shipping_country_code: P,
                                                                shipping_state_id: L,
                                                                shipping_district_id: A,
                                                                shipping_ward_id: b,
                                                                shipping_note: v,
                                                                checkout_config_id:
                                                                    e.runtime.shopping_config_checkout_id,
                                                                is_export_invoice: 0,
                                                                is_generate_url: !0,
                                                                variants: T,
                                                                utm: {
                                                                    url_page: window.location.href,
                                                                    utm_source: s,
                                                                    utm_medium: c,
                                                                    utm_campaign: u,
                                                                    utm_term: m,
                                                                    utm_content: _,
                                                                },
                                                            };
                                                        e.runtime.has_popupx &&
                                                            (O.utm.origin_url_page =
                                                                e.runtime.tmp.popupx_origin_url),
                                                            e.isEmpty(p) || (O.utm[e.const.REF_NAME] = p),
                                                            e.sendRequest(
                                                                "POST",
                                                                e.const.API_LADISALE_CHECKOUT_CREATE,
                                                                JSON.stringify(O),
                                                                !0,
                                                                { "Content-Type": "application/json" },
                                                                function (t, i, a) {
                                                                    if (a.readyState == XMLHttpRequest.DONE) {
                                                                        if (200 == i)
                                                                            try {
                                                                                var n = JSON.parse(t);
                                                                                if (
                                                                                    200 == n.code &&
                                                                                    e.isObject(n.data) &&
                                                                                    !e.isEmpty(n.data.url)
                                                                                )
                                                                                    return void window
                                                                                        .ladi(n.data.url)
                                                                                        .open_url();
                                                                                e.showMessage(n.message);
                                                                            } catch (t) { }
                                                                        e.showMessage(
                                                                            e.const.LANG.REQUEST_SEND_ERROR
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                    }
                                                })(i),
                                                !1
                                            );
                                    }
                                    e.isEmpty(c) ||
                                        !c["option.form_auto_capture"] ||
                                        e.isEmpty(c["option.form_config_id"]) ||
                                        (s = O(i.id, c["option.form_config_id"])),
                                        D(i, { captcha: !0 }, !1, s);
                                }
                            } else {
                                var m = a[r].querySelectorAll('[type="checkbox"]');
                                if (m.length > 0) {
                                    m[0].setAttribute("required", "required");
                                    for (var _ = 0; _ < m.length; _++)
                                        m[_].removeEventListener("change", F),
                                            m[_].addEventListener("change", F);
                                    i.querySelector(".ladi-form").reportValidity();
                                }
                            }
                        }
                        return !1;
                    },
                    q = function (t, i, a, n) {
                        var r = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(r)) {
                            var o = e.findAncestor(r, "ladi-element");
                            if (
                                !(
                                    e.isEmpty(o) ||
                                    ((a = i ? a : e.runtime.eventData[o.id]),
                                        e.isEmpty(a) ||
                                        (!a["option.is_buy_now"] && !a["option.is_add_to_cart"]) ||
                                        e.isEmpty(a["option.product_type"]) ||
                                        e.isEmpty(a["option.product_id"]))
                                )
                            ) {
                                var s = function () {
                                    var r = e.generateVariantProduct(
                                        a,
                                        !1,
                                        null,
                                        null,
                                        null,
                                        null,
                                        !0,
                                        !0,
                                        s
                                    );
                                    if (
                                        e.isEmpty(r) ||
                                        e.isEmpty(r.store_info) ||
                                        e.isEmpty(r.product)
                                    )
                                        e.isEmpty(
                                            e.runtime.tmp.timeout_product_info[
                                            a["option.product_type"]
                                            ][a["option.product_id"]]
                                        ) &&
                                            e.showMessage(e.const.LANG.ADD_TO_CART_NO_PRODUCT, {
                                                name: e.getMessageNameProduct(),
                                            });
                                    else {
                                        var l = -1,
                                            d = null;
                                        if (i) {
                                            var c = o.querySelector('[data-variant="true"]');
                                            (d = e.getProductVariantId(c, r.product)),
                                                e.isEmpty(d) ||
                                                (l = r.product.variants.findIndex(function (t) {
                                                    return t.product_variant_id == d;
                                                }));
                                        } else l = e.getProductVariantIndex(o.id, a);
                                        if (-1 != l) {
                                            var u = r.product.variants[l].product_id;
                                            d = r.product.variants[l].product_variant_id;
                                            var p = r.product.name,
                                                m = r.product.variants[l].title,
                                                _ = r.product.variants[l].price,
                                                g = r.product.variants[l].quantity,
                                                y = r.product.variants[l].quantity_stock;
                                            g = e.isNull(y) ? g : y;
                                            var f = e.isEmpty(r.product.variants[l].src)
                                                ? ""
                                                : r.product.variants[l].src;
                                            (f =
                                                e.isEmpty(f) && e.isObject(r.product.image)
                                                    ? r.product.image.src
                                                    : f),
                                                e.isEmpty(f) ||
                                                !e.isString(f) ||
                                                f.startsWith("http://") ||
                                                f.startsWith("https://") ||
                                                f.startsWith("//") ||
                                                (f = "https://" + e.const.STATIC_W_DOMAIN + "/" + f);
                                            if (
                                                0 == r.product.select_many_service &&
                                                e.isArray(e.runtime.tmp.cart) &&
                                                -1 !=
                                                e.runtime.tmp.cart.findIndex(function (t) {
                                                    return (
                                                        t.product_id == u &&
                                                        t.product_variant_id != d &&
                                                        t.quantity > 0
                                                    );
                                                })
                                            )
                                                e.showMessage(
                                                    e.const.LANG.ADD_TO_CART_PRODUCT_ONLY_ONE,
                                                    {
                                                        name: e.getMessageNameProduct(
                                                            r.product.variants[l]
                                                        ),
                                                    }
                                                );
                                            else {
                                                var h = e.runtime.tmp.cart.findIndex(function (t) {
                                                    return t.product_variant_id == d;
                                                }),
                                                    v = !1;
                                                -1 == h &&
                                                    ((v = !0),
                                                        e.runtime.tmp.cart.push({
                                                            store_id: r.store_info.id,
                                                            product_id: u,
                                                            product_variant_id: d,
                                                            name: p,
                                                            title: m,
                                                            price: _,
                                                            image: f,
                                                            quantity: 0,
                                                            min_buy: r.product.variants[l].min_buy,
                                                            max_buy: r.product.variants[l].max_buy,
                                                            inventory_checked:
                                                                r.product.variants[l].inventory_checked,
                                                            available_quantity: g,
                                                            currency: r.store_info.currency,
                                                            product_type: r.product.variants[l].product_type,
                                                            package_quantity:
                                                                r.product.variants[l].package_quantity,
                                                        }),
                                                        (h = e.runtime.tmp.cart.length - 1));
                                                var E = o.querySelector('input[name="quantity"]');
                                                if (e.isEmpty(E) || e.isEmpty(E.value))
                                                    e.showMessage(
                                                        e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED
                                                    );
                                                else {
                                                    var P = parseInt(E.value) || 0;
                                                    if (P <= 0)
                                                        return void e.showMessage(
                                                            e.const.LANG.ADD_TO_CART_QUANTITY_REQUIRED
                                                        );
                                                    var L = null,
                                                        A = 1;
                                                    A = r.product.variants[l].min_buy || A;
                                                    var b = r.product.variants[l].max_buy;
                                                    A > e.runtime.tmp.cart[h].quantity + P &&
                                                        (P = A - e.runtime.tmp.cart[h].quantity);
                                                    var w = !1;
                                                    if (
                                                        (!e.isEmpty(b) &&
                                                            e.runtime.tmp.cart[h].quantity + P > b &&
                                                            (P = b - e.runtime.tmp.cart[h].quantity) <= 0 &&
                                                            ((w = !0), (L = b)),
                                                            1 == r.product.variants[l].inventory_checked)
                                                    ) {
                                                        if (A > g)
                                                            return void e.showMessage(
                                                                e.const.LANG.ADD_TO_CART_NO_QUANTITY,
                                                                {
                                                                    name: e.getMessageNameProduct(
                                                                        r.product.variants[l],
                                                                        !0
                                                                    ),
                                                                }
                                                            );
                                                        e.runtime.tmp.cart[h].quantity + P > g &&
                                                            ((P = g - e.runtime.tmp.cart[h].quantity),
                                                                g > 0 &&
                                                                ((w = !0), (e.isEmpty(L) || L > g) && (L = g)));
                                                    }
                                                    if (w || (P <= 0 && g > 0))
                                                        e.showMessage(
                                                            e.const.LANG.ADD_TO_CART_MAX_QUANTITY,
                                                            {
                                                                max: L,
                                                                name: e.getMessageNameProduct(
                                                                    r.product.variants[l]
                                                                ),
                                                            },
                                                            function () {
                                                                var i = t.target;
                                                                (i = e.findAncestor(i, "ladi-button")),
                                                                    e.isEmpty(i) ||
                                                                    (i = e.findAncestor(i, "ladi-element"));
                                                                var a = e.runtime.eventData[i.id];
                                                                e.isEmpty(a) ||
                                                                    !e.isObject(a["option.data_action"]) ||
                                                                    e.isEmpty(a["option.data_action"].type) ||
                                                                    (a["option.data_action"].type ==
                                                                        e.const.DATA_ACTION_TYPE.popup_cart &&
                                                                        window.ladi("POPUP_CART").show(),
                                                                        a["option.data_action"].type ==
                                                                        e.const.DATA_ACTION_TYPE.popup_checkout &&
                                                                        (e.runtime.shopping_third_party
                                                                            ? e.getThirdPartyCheckoutUrl(!0)
                                                                            : window.ladi("POPUP_CHECKOUT").show()));
                                                            }
                                                        );
                                                    else if (P > 0) {
                                                        var S =
                                                            !e.isEmpty(r.product.variants[l].start_date) &&
                                                            new Date(
                                                                r.product.variants[l].start_date
                                                            ).getTime() > Date.now(),
                                                            T =
                                                                !e.isEmpty(r.product.variants[l].end_date) &&
                                                                new Date(
                                                                    r.product.variants[l].end_date
                                                                ).getTime() < Date.now();
                                                        if (S)
                                                            e.showMessage(
                                                                e.const.LANG
                                                                    .ADD_TO_CART_PRODUCT_BEFORE_START_DATE,
                                                                {
                                                                    name: e.getMessageNameProduct(
                                                                        r.product.variants[l]
                                                                    ),
                                                                }
                                                            );
                                                        else if (T)
                                                            e.showMessage(
                                                                e.const.LANG.ADD_TO_CART_PRODUCT_AFTER_END_DATE,
                                                                {
                                                                    name: e.getMessageNameProduct(
                                                                        r.product.variants[l]
                                                                    ),
                                                                }
                                                            );
                                                        else {
                                                            var O = function () {
                                                                e.runtime.tmp.cart[h].quantity += P;
                                                                var t = {
                                                                    product_id: u,
                                                                    product_variant_id: d,
                                                                    quantity: P,
                                                                };
                                                                (t.product_type =
                                                                    e.runtime.tmp.cart[h].product_type),
                                                                    (t.package_quantity =
                                                                        e.runtime.tmp.cart[h].package_quantity),
                                                                    e.addCartCookie(
                                                                        r.store_info.id,
                                                                        t,
                                                                        function () {
                                                                            e.isFunction(n) && n();
                                                                            var t = document.getElementsByClassName(
                                                                                "ladi-form-remove-coupon"
                                                                            )[0];
                                                                            e.isEmpty(t) || t.click(),
                                                                                e.updateCartPromotion();
                                                                        },
                                                                        function (t) {
                                                                            (e.runtime.tmp.cart[h].quantity -= P),
                                                                                v && e.runtime.tmp.cart.splice(h, 1),
                                                                                e.showMessage(t.message);
                                                                        },
                                                                        function () {
                                                                            e.runtime.tmp.generateCart(),
                                                                                e.changeTotalPriceCart(),
                                                                                (e.runtime.tmp.is_click_add_to_cart =
                                                                                    !1),
                                                                                0 == e.runtime.tmp.cart.length &&
                                                                                -1 !=
                                                                                [
                                                                                    e.const.FORM_CONFIG_TYPE
                                                                                        .ladisales,
                                                                                ].indexOf(
                                                                                    e.runtime.shopping_product_type
                                                                                ) &&
                                                                                (window
                                                                                    .ladi("_cart_token")
                                                                                    .delete_cookie(),
                                                                                    window
                                                                                        .ladi("_checkout_token")
                                                                                        .delete_cookie()),
                                                                                e.runResizeAll();
                                                                        }
                                                                    );
                                                            };
                                                            if (
                                                                e.isEmpty(
                                                                    window.ladi("_cart_token").get_cookie()
                                                                )
                                                            )
                                                                if (e.runtime.tmp.is_click_add_to_cart) {
                                                                    var C = function () {
                                                                        e.runTimeout(function () {
                                                                            if (e.runtime.tmp.is_click_add_to_cart)
                                                                                return C();
                                                                            s();
                                                                        }, 100);
                                                                    };
                                                                    C();
                                                                } else
                                                                    (e.runtime.tmp.is_click_add_to_cart = !0),
                                                                        O();
                                                            else O();
                                                        }
                                                    } else
                                                        g <= 0 &&
                                                            e.showMessage(
                                                                e.const.LANG.ADD_TO_CART_NO_QUANTITY,
                                                                {
                                                                    name: e.getMessageNameProduct(
                                                                        r.product.variants[l],
                                                                        !0
                                                                    ),
                                                                }
                                                            );
                                                }
                                            }
                                        } else
                                            e.showMessage(e.const.LANG.ADD_TO_CART_PRODUCT_REQUIRED, {
                                                name: e.getMessageNameProduct(r.product.variants[l]),
                                            });
                                    }
                                };
                                s();
                            }
                        }
                    },
                    B = function (t) {
                        q(t, !1, null, function () {
                            var i = e.findAncestor(t.target, "ladi-button");
                            i = e.findAncestor(i || t.target, "ladi-element");
                            var a = e.runtime.eventData[i.id];
                            if (!e.isEmpty(a) && e.isObject(a["option.data_action"])) {
                                var n = null;
                                a["option.data_action"].type ==
                                    e.const.DATA_ACTION_TYPE.popup_cart && (n = "POPUP_CART"),
                                    a["option.data_action"].type ==
                                    e.const.DATA_ACTION_TYPE.popup_checkout &&
                                    (n = "POPUP_CHECKOUT"),
                                    a["option.data_action"].type ==
                                        e.const.DATA_ACTION_TYPE.popup_checkout &&
                                        e.runtime.shopping_third_party
                                        ? e.getThirdPartyCheckoutUrl(!0)
                                        : e.isEmpty(n) || window.ladi(n).show(),
                                    e.runEventTracking(i.id, !1);
                            }
                        });
                    },
                    Y = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        e.isEmpty(i) ||
                            ((i = e.findAncestor(i, "ladi-element")),
                                e.isEmpty(i) || window.ladi(i.id).submit());
                    },
                    V = function (t) {
                        var i = e.findAncestor(t.target, "ladi-form");
                        if (!e.isEmpty(i)) {
                            var a = e.findAncestor(i, "ladi-element");
                            if (!e.isEmpty(a)) {
                                var n = e.runtime.eventData[a.id];
                                if (
                                    !e.isEmpty(n) &&
                                    n["option.form_auto_capture"] &&
                                    !e.isEmpty(n["option.form_config_id"])
                                ) {
                                    var r = O(a.id, n["option.form_config_id"]);
                                    D(a, { captcha: !0 }, !0, r, t.target.getAttribute("name"));
                                }
                            }
                        }
                    },
                    H = {};
                A.forEach(function (t) {
                    (H[t] = window.ladi("_ladipage_" + t).get_cookie()),
                        e.isEmpty(s[t]) || (H[t] = s[t]);
                }),
                    (i = o(H));
                var G = 0,
                    U = !1,
                    j = function (t) {
                        for (
                            var n = a[G].querySelectorAll(
                                '.ladi-element .ladi-form-item-container [name="' + t + '"]'
                            ),
                            r = 0;
                            r < n.length;
                            r++
                        ) {
                            var o = H[t];
                            if (!e.isEmpty(o))
                                if (
                                    ("true" != n[r].getAttribute("data-is-select-country") &&
                                        (o = i[t]),
                                        "SELECT" == n[r].tagName)
                                )
                                    n[r].querySelectorAll('option[value="' + o + '"]').length >
                                        0 && ((n[r].value = o), U && e.fireEvent(n[r], "change"));
                                else {
                                    if (
                                        "country" == t &&
                                        "true" == n[r].getAttribute("data-is-select-country")
                                    )
                                        continue;
                                    (n[r].value = o), U && e.fireEvent(n[r], "change");
                                }
                        }
                    },
                    W = function (t) {
                        (t.target.type = "date"), t.target.focus();
                    },
                    X = function (t) {
                        e.isEmpty(t.target.value) && (t.target.type = "text");
                    };
                for (G = 0; G < a.length; G++) {
                    a[G].onsubmit = (event) => {
                        event.preventDefault();
                        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdzzmAgV-zKhRVCRmPLhmXUu1P7_0vVPq_zIz6R__HRtV0uug/formResponse?', {
                            method: "POST",
                            body: new FormData(event.target),
                        }).finally(() => {
                            let alert = document.createElement('div');
                            alert.className = "ladipage-message";
                            alert.innerHTML = `<div class="ladipage-message-box"><span>Thông báo</span>
                                                <div class="ladipage-message-text">Chúc mừng bạn đã đăng ký thành công</div>
                                                <button class="ladipage-message-close" onclick="this.parentElement.parentElement.remove();">OK</button></div >`
                            document.body.append(alert)
              });
                    };
                    for (
                        var z = e.findAncestor(a[G], "ladi-element"),
                        K = a[G].getElementsByClassName("ladi-button"),
                        J = 0;
                        J < K.length;
                        J++
                    ) {
                        var Z = a[G].getElementsByClassName("ladi-button")[J];
                        if (!e.isEmpty(Z)) {
                            var Q = e.findAncestor(Z, "ladi-element");
                            e.isEmpty(z) ||
                                e.isEmpty(e.runtime.eventData[z.id]) ||
                                !e.runtime.eventData[z.id]["option.is_add_to_cart"]
                                ? Q.addEventListener("click", Y)
                                : (Q.setAttribute("data-click", !1),
                                    Q.addEventListener("click", B));
                        }
                    }
                    var $ = a[G].querySelector(
                        '[data-is-select-country="true"][name="country"]'
                    );
                    if (!e.isEmpty($) && "true" == $.getAttribute("data-no-ward")) {
                        var tt = a[G].querySelector(
                            'select[data-is-select-country="true"][name="ward"]'
                        );
                        e.isEmpty(tt) || tt.removeAttribute("required");
                    }
                    for (
                        var et = a[G].querySelectorAll('input[data-type="date"]'), it = 0;
                        it < et.length;
                        it++
                    )
                        e.isEmpty(et[it].getAttribute("placeholder")) ||
                            (et[it].setAttribute("type", "text"),
                                et[it].addEventListener("focus", W),
                                et[it].addEventListener("blur", X));
                    var at = a[G].querySelectorAll("[tabindex]"),
                        nt = 0;
                    for (it = 0; it < at.length; it++) {
                        var rt = parseInt(at[it].getAttribute("tabindex")) || 0;
                        rt > nt && (nt = rt),
                            at[it].setAttribute("tabindex", e.runtime.tabindexForm + rt);
                    }
                    e.runtime.tabindexForm += nt;
                    for (var ot = 0; ot < b.length; ot++) {
                        var st = a[G].querySelector(
                            '.ladi-element .ladi-form-item-container input[name="' +
                            b[ot] +
                            '"]'
                        );
                        e.isEmpty(st) || st.addEventListener("focusout", V);
                    }
                }
                var lt = function (t, i) {
                    for (U = i, G = 0; G < a.length; G++) {
                        var n = e.findAncestor(a[G], "ladi-element");
                        !e.isEmpty(e.runtime.eventData[n.id]) &&
                            e.runtime.eventData[n.id]["option.form_auto_complete"] &&
                            t.forEach(j);
                    }
                };
                lt(e.copy(A).except(e.runtime.list_set_value_name_country));
                e.runtime.tmp.runAfterLocation.push(function () {
                    var t = "",
                        i = "",
                        n = "",
                        r = "",
                        o = null,
                        s = function (t, e) {
                            var i = "" + o[t].name,
                                a = "" + o[e].name;
                            try {
                                return i.localeCompare(a);
                            } catch (t) { }
                            return i == a ? 0 : i > a ? 1 : -1;
                        },
                        l = function (a) {
                            var n = window.LadiLocation[i].data[a];
                            e.isEmpty(n) ||
                                (t +=
                                    '<option value="' +
                                    n.id +
                                    ":" +
                                    n.name +
                                    '">' +
                                    n.name +
                                    "</option>");
                        },
                        d = function (t) {
                            var i =
                                window.LadiLocation[t.target.getAttribute("data-country")].data[
                                t.target.value.split(":")[0]
                                ];
                            if (((n = ""), !e.isEmpty(i))) {
                                var a = Object.keys(i.data);
                                (o = i.data),
                                    a.sort(s),
                                    a.forEach(function (t) {
                                        var e = i.data[t];
                                        n +=
                                            '<option value="' +
                                            e.id +
                                            ":" +
                                            e.name +
                                            '">' +
                                            e.name +
                                            "</option>";
                                    });
                            }
                            var r = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(r)) {
                                var l = r.querySelector('select[name="district"]');
                                e.isEmpty(l) ||
                                    (l.setAttribute("data-selected", ""),
                                        (l.innerHTML = l.querySelector("option").outerHTML + n));
                                var d = r.querySelector('select[name="ward"]');
                                e.isEmpty(d) ||
                                    (d.setAttribute("data-selected", ""),
                                        (d.innerHTML = d.querySelector("option").outerHTML)),
                                    e.reloadFeeShipping({ target: d });
                            }
                        },
                        c = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(i)) {
                                var a = i.querySelector('select[name="ward"]');
                                if (!e.isEmpty(a)) {
                                    a.setAttribute("data-selected", ""), (r = "");
                                    var n = i.querySelector('select[name="state"]');
                                    if (!e.isEmpty(n)) {
                                        var l = n.getAttribute("data-selected");
                                        if (!e.isEmpty(l)) {
                                            l = l.split(":")[0];
                                            var d =
                                                window.LadiLocation[n.getAttribute("data-country")]
                                                    .data[l];
                                            if (!e.isEmpty(d)) {
                                                var c = d.data[t.target.value.split(":")[0]];
                                                if (!e.isEmpty(c)) {
                                                    var u = Object.keys(c.data);
                                                    (o = c.data),
                                                        u.sort(s),
                                                        u.forEach(function (t) {
                                                            var e = c.data[t];
                                                            r +=
                                                                '<option value="' +
                                                                e.id +
                                                                ":" +
                                                                e.name +
                                                                '">' +
                                                                e.name +
                                                                "</option>";
                                                        });
                                                }
                                            }
                                        }
                                    }
                                    a.innerHTML = a.querySelector("option").outerHTML + r;
                                }
                                e.reloadFeeShipping({ target: a });
                            }
                        },
                        u = function (t) {
                            var i = e.findAncestor(t.target, "ladi-element");
                            if (!e.isEmpty(i)) {
                                var a = i.querySelector('select[name="ward"]');
                                e.reloadFeeShipping({ target: a });
                            }
                        };
                    for (G = 0; G < a.length; G++) {
                        var p = a[G].querySelectorAll(
                            '.ladi-element .ladi-form-item-container [name="state"]'
                        ),
                            m = 0,
                            _ = null;
                        for (m = 0; m < p.length; m++)
                            if (
                                ((_ = e.findAncestor(p[m], "ladi-element")),
                                    !e.isEmpty(_) &&
                                    ((i = e.runtime.eventData[_.id]["option.input_country"]),
                                        !e.isEmpty(i) &&
                                        ((t = ""),
                                            (i = i.split(":")[0]),
                                            !e.isEmpty(window.LadiLocation[i]))))
                            ) {
                                var g = window.LadiLocation[i].data,
                                    y = Object.keys(g);
                                (o = g),
                                    y.sort(s),
                                    "VN" == i &&
                                    ((y = y.except(["201", "202", "224", "220", "203"])),
                                        (y = ["201", "202", "224", "220", "203"].concat(y))),
                                    y.forEach(l),
                                    (p[m].innerHTML = p[m].querySelector("option").outerHTML + t),
                                    p[m].setAttribute("data-country", i),
                                    p[m].addEventListener("change", d);
                            }
                        var f = a[G].querySelectorAll(
                            '.ladi-element .ladi-form-item-container [name="district"]'
                        );
                        for (m = 0; m < f.length; m++) f[m].addEventListener("change", c);
                        var h = a[G].querySelectorAll(
                            '.ladi-element .ladi-form-item-container [name="ward"]'
                        );
                        for (m = 0; m < h.length; m++) h[m].addEventListener("change", u);
                    }
                }),
                    e.runtime.tmp.runAfterLocation.push(function () {
                        lt(S, !0);
                    }),
                    (e.runtime.tmp.buttonAddToCartClick = q);
            },
            U = function () {
                for (
                    var t = document.querySelectorAll(
                        ".ladi-form .ladi-element .ladi-form-control-file"
                    ),
                    i = function (t) {
                        var i = t.target,
                            a = document.getElementById("input-file-tmp");
                        e.isEmpty(a) &&
                            (((a = document.createElement("input")).id = "input-file-tmp"),
                                (a.multiple = !0),
                                (a.type = "file"),
                                (a.className = "ladi-hidden"),
                                n.setAttribute(
                                    "accept",
                                    ".jpg, .jpeg, .png, .gif, .svg, .ico, .mp3, .mp4, .ttf, .otf, .woff2, .txt, .doc, .docx, .xls, .xlsx, .pdf"
                                ),
                                document.body.appendChild(a),
                                a.addEventListener("change", function (t) {
                                    !(function (t, i, a) {
                                        if (i.length > e.const.FORM_UPLOAD_FILE_LENGTH)
                                            e.showMessage(
                                                e.const.LANG.FORM_UPLOAD_FILE_MAX_LENGTH_ERROR,
                                                { max_length: e.const.FORM_UPLOAD_FILE_LENGTH }
                                            );
                                        else {
                                            for (
                                                var n = new FormData(), r = 0, o = 0;
                                                o < i.length;
                                                o++
                                            )
                                                (r += i[o].size), n.append("file[]", i[o]);
                                            if (r > 1024 * e.const.FORM_UPLOAD_FILE_SIZE * 1024)
                                                e.showMessage(
                                                    e.const.LANG.FORM_UPLOAD_FILE_MAX_SIZE_ERROR,
                                                    { max_size: e.const.FORM_UPLOAD_FILE_SIZE }
                                                );
                                            else {
                                                var s = {
                                                    ladipage_id: e.runtime.ladipage_id,
                                                    lang: e.runtime.lang,
                                                };
                                                n.append("json_data", JSON.stringify(s)),
                                                    e.showLoadingBlur(),
                                                    e.sendRequest(
                                                        "POST",
                                                        e.const.API_FILE_UPLOAD,
                                                        n,
                                                        !0,
                                                        null,
                                                        function (i, a, n) {
                                                            if (n.readyState == XMLHttpRequest.DONE) {
                                                                if ((e.hideLoadingBlur(), 200 == a))
                                                                    try {
                                                                        var r = JSON.parse(i);
                                                                        if (200 == r.code) {
                                                                            var o = [],
                                                                                s = [];
                                                                            return (
                                                                                r.data.success.forEach(function (t) {
                                                                                    o.push(t.name),
                                                                                        s.push({ id: t._id, path: t.path });
                                                                                }),
                                                                                (t.value =
                                                                                    o.length > 0
                                                                                        ? "[" + o.join(", ") + "]"
                                                                                        : ""),
                                                                                void t.setAttribute(
                                                                                    "data-path-file",
                                                                                    JSON.stringify(s)
                                                                                )
                                                                            );
                                                                        }
                                                                        if (!e.isEmpty(r.message))
                                                                            return void e.showMessage(r.message);
                                                                    } catch (t) { }
                                                                e.showMessage(e.const.LANG.REQUEST_SEND_ERROR);
                                                            }
                                                        }
                                                    ),
                                                    e.isFunction(a) && a();
                                            }
                                        }
                                    })(i, t.target.files, function () {
                                        t.target.parentElement.removeChild(t.target);
                                    });
                                })),
                            a.click();
                    },
                    a = 0;
                    a < t.length;
                    a++
                ) {
                    var n = t[a],
                        r = e.findAncestor(n, "ladi-form");
                    r = e.findAncestor(r, "ladi-element");
                    var o = e.runtime.eventData[r.id];
                    !e.isEmpty(o) &&
                        o["option.form_send_ladipage"] &&
                        ((n.readOnly = !0),
                            n.style.setProperty("cursor", "pointer"),
                            n.addEventListener("click", i));
                }
            },
            j = function (t) {
                if (
                    e.runtime.isClient &&
                    !e.runtime.isDesktop &&
                    !e.isEmpty(e.runtime.bodyFontSize)
                ) {
                    var i =
                        (parseFloatLadiPage(getComputedStyle(document.body).fontSize) ||
                            0) / e.runtime.bodyFontSize;
                    if (1 != i)
                        for (
                            var a = document.querySelectorAll(
                                ".ladi-paragraph, .ladi-list-paragraph, .ladi-headline, .ladi-countdown, .ladi-form, .ladi-table, .ladi-spin-lucky"
                            ),
                            n = 0;
                            n < a.length;
                            n++
                        ) {
                            var r =
                                (parseFloatLadiPage(getComputedStyle(a[n]).fontSize) || 0) /
                                (i * i);
                            a[n].style.setProperty("font-size", r + "px");
                        }
                    else
                        t > Date.now() &&
                            e.runTimeout(function () {
                                j(t);
                            }, 100);
                }
            },
            W = function (t) {
                var i = null;
                return (
                    e.isEmpty(t) ||
                    (i = t.classList.contains("no-value")
                        ? null
                        : t.getAttribute("data-value")),
                    (i = e.isEmpty(i) ? "" : i)
                );
            },
            X = function (t, i) {
                var a = t.querySelectorAll(".ladi-form-label-item");
                i = e.isEmpty(i) ? "" : i;
                for (var n = 0; n < a.length; n++) {
                    W(a[n]) == i
                        ? a[n].classList.add("selected")
                        : a[n].classList.remove("selected");
                }
            },
            z = function (t) {
                var e = t.querySelector(".ladi-form-label-item.selected");
                return W(e);
            },
            K = function (t, i) {
                var a = t.target;
                if (a.classList.contains("disabled"))
                    for (
                        var n = e
                            .findAncestor(a, "ladi-element")
                            .querySelectorAll(".ladi-form-label-item"),
                        r = 0;
                        r < n.length;
                        r++
                    )
                        n[r].classList.contains("no-value")
                            ? n[r].classList.add("selected")
                            : n[r].classList.remove("selected"),
                            n[r].classList.remove("disabled");
                var o = W(a);
                !t.is_fire_event && a.classList.contains("selected") && (o = "");
                var s = e.findAncestor(a, "ladi-form-label-container");
                X(s, o), e.isFunction(i) && i(s);
            },
            J = function (i, a, n, r) {
                if ("form" == a) {
                    var o = e.runtime.eventData[i];
                    if (!e.isEmpty(o) && o["option.is_add_to_cart"]) {
                        var s = document.getElementById(i);
                        if (
                            !e.isEmpty(s) &&
                            (!n || e.isEmpty(e.findAncestor(s, "ladi-collection-item")))
                        ) {
                            var l = s.querySelector('[data-variant="true"]');
                            if (!e.isEmpty(l)) {
                                var d = e.runtime.eventData[l.id];
                                if (!e.isEmpty(d)) {
                                    var c = o["option.product_type"],
                                        u = o["option.product_id"];
                                    if (!e.isEmpty(c) && !e.isEmpty(u)) {
                                        var p = e.generateVariantProduct(
                                            o,
                                            !0,
                                            d["option.product_variant_type"],
                                            d["option.product_variant_title"],
                                            d["option.product_variant_price"],
                                            d["option.input_tabindex"],
                                            t,
                                            !0,
                                            function (t) {
                                                J(i, a, n, r);
                                            }
                                        ),
                                            m = function (t) {
                                                e.updateProductVariantSelectOption(
                                                    t,
                                                    o,
                                                    d,
                                                    r,
                                                    function () {
                                                        if (r) {
                                                            var a = e.generateVariantProduct(
                                                                o,
                                                                !1,
                                                                null,
                                                                null,
                                                                null,
                                                                null,
                                                                !0,
                                                                !0
                                                            ),
                                                                n = e.getProductVariantId(t.target, a.product);
                                                            if (!e.isArray(a.product.variants)) return;
                                                            var s = a.product.variants.find(function (t) {
                                                                return t.product_variant_id == n;
                                                            });
                                                            if (e.isEmpty(s)) return;
                                                            for (
                                                                var l = document.querySelectorAll(
                                                                    "#POPUP_PRODUCT .ladi-element"
                                                                ),
                                                                d = 0;
                                                                d < l.length;
                                                                d++
                                                            )
                                                                l[d].id != i &&
                                                                    e.runtime.tmp.runLadiSaleProductKey(
                                                                        l[d].id,
                                                                        !1,
                                                                        !0,
                                                                        s,
                                                                        a
                                                                    );
                                                        } else
                                                            e.runtime.tmp.generateLadiSaleProduct(!1, !0, t);
                                                    }
                                                );
                                            },
                                            _ = function (t) {
                                                K(t, function (t) {
                                                    m({ target: t });
                                                });
                                            };
                                        e.showParentVisibility(l, function () {
                                            for (
                                                var t = l.clientHeight,
                                                i = t,
                                                a = l.querySelectorAll("select.ladi-form-control"),
                                                n = {},
                                                r = 0;
                                                r < a.length;
                                                r++
                                            )
                                                n[
                                                    a[r].getAttribute("data-store-id") +
                                                    "_" +
                                                    a[r].getAttribute("data-product-id") +
                                                    "_" +
                                                    a[r].getAttribute("data-product-option-id")
                                                ] = a[r].value;
                                            var c = l.querySelectorAll(".ladi-form-label-container");
                                            for (r = 0; r < c.length; r++)
                                                n[
                                                    c[r].getAttribute("data-store-id") +
                                                    "_" +
                                                    c[r].getAttribute("data-product-id") +
                                                    "_" +
                                                    c[r].getAttribute("data-product-option-id")
                                                ] = z(c[r]);
                                            l.innerHTML = p;
                                            for (
                                                var u = null,
                                                g = null,
                                                y = l.querySelectorAll("select.ladi-form-control"),
                                                f = 0;
                                                f < y.length;
                                                f++
                                            )
                                                y[f].removeEventListener("change", m),
                                                    y[f].addEventListener("change", m),
                                                    (u =
                                                        n[
                                                        y[f].getAttribute("data-store-id") +
                                                        "_" +
                                                        y[f].getAttribute("data-product-id") +
                                                        "_" +
                                                        y[f].getAttribute("data-product-option-id")
                                                        ]),
                                                    e.isNull(u) &&
                                                    ((g = y[f].querySelector("option")),
                                                        e.isEmpty(g) || (u = g.getAttribute("value"))),
                                                    (y[f].value = u);
                                            var h = l.querySelectorAll(".ladi-form-label-container");
                                            for (f = 0; f < h.length; f++) {
                                                for (
                                                    var v = h[f].querySelectorAll(
                                                        ".ladi-form-label-item"
                                                    ),
                                                    E = 0;
                                                    E < v.length;
                                                    E++
                                                )
                                                    v[E].removeEventListener("click", _),
                                                        v[E].addEventListener("click", _);
                                                (u =
                                                    n[
                                                    h[f].getAttribute("data-store-id") +
                                                    "_" +
                                                    h[f].getAttribute("data-product-id") +
                                                    "_" +
                                                    h[f].getAttribute("data-product-option-id")
                                                    ]),
                                                    e.isNull(u) &&
                                                    ((g = v[1]), e.isEmpty(g) || (u = W(g))),
                                                    X(h[f], u);
                                            }
                                            if (
                                                (e.updateProductVariantSelectOptionFirst(o, d, l),
                                                    d["option.product_variant_type"] !=
                                                    e.const.PRODUCT_VARIANT_TYPE.combined)
                                            )
                                                l.style.setProperty("height", "auto"),
                                                    (i = l.clientHeight),
                                                    l.style.removeProperty("height"),
                                                    t != i &&
                                                    (l.style.setProperty("height", i + "px"),
                                                        e.updateHeightElement(!0, l, s, t, i));
                                            else if (!e.isEmpty(o["option.product_variant_id"]))
                                                for (var P = 0; P < y.length; P++) {
                                                    var L = y[P].querySelector(
                                                        'option[data-product-variant-id="' +
                                                        o["option.product_variant_id"] +
                                                        '"]'
                                                    );
                                                    e.isEmpty(L) ||
                                                        y[P].value == L.getAttribute("value") ||
                                                        ((y[P].value = L.getAttribute("value")),
                                                            e.fireEvent(y[P], "change"));
                                                }
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            },
            Z = function (i, a, n) {
                if (e.isObject(a) && e.isObject(a.variant) && e.isObject(a.product)) {
                    var r = a.variant.src;
                    if (
                        (e.isEmpty(r) &&
                            ((r = a.product.image), e.isObject(r) && (r = r.src)),
                            !e.isEmpty(r))
                    ) {
                        !e.isString(r) ||
                            r.startsWith("http://") ||
                            r.startsWith("https://") ||
                            r.startsWith("//") ||
                            (r = "https://" + e.const.STATIC_W_DOMAIN + "/" + r);
                        var o = e.findAncestor(i, "ladi-collection-item"),
                            s = [],
                            l = 0,
                            d = null;
                        if (e.isEmpty(o)) {
                            var c = document.querySelectorAll("[data-runtime-id]");
                            for (l = 0; l < c.length; l++)
                                (o = e.findAncestor(c[l], "ladi-collection-item")),
                                    e.isEmpty(o) &&
                                    ((d = e.runtime.eventData[c[l].id]),
                                        e.isEmpty(d) ||
                                        d["option.product_type"] != n["option.product_type"] ||
                                        d["option.product_id"] != n["option.product_id"] ||
                                        s.push(c[l]));
                        } else s = o.querySelectorAll("[data-runtime-id]");
                        for (l = 0; l < s.length; l++)
                            if (
                                ((d = e.runtime.eventData[s[l].id]),
                                    !e.isEmpty(d) && !e.isEmpty(d["option.product_mapping_name"]))
                            ) {
                                var u = s[l].getElementsByClassName("ladi-gallery-view")[0],
                                    p = e.getOptimizeImage(
                                        r,
                                        u.clientWidth,
                                        u.clientHeight,
                                        !0,
                                        !1,
                                        !1,
                                        t
                                    );
                                p = 'url("' + p + '")';
                                var m = e.getOptimizeImage(r, 0, 0, !0, !1, !1, t);
                                m = 'url("' + m + '")';
                                for (
                                    var _ = u.getElementsByClassName("ladi-gallery-view-item"),
                                    g = 0;
                                    g < _.length;
                                    g++
                                )
                                    if (
                                        p == getComputedStyle(_[g]).backgroundImage ||
                                        m == getComputedStyle(_[g]).backgroundImage
                                    ) {
                                        var y =
                                            (parseFloatLadiPage(_[g].getAttribute("data-index")) ||
                                                0) + 1;
                                        window.ladi(s[l].id, s[l]).index(y);
                                    }
                            }
                    }
                }
            },
            Q = function (i, a, n, r, o, s, l) {
                var d = e.runtime.eventData[i];
                if (!e.isEmpty(d)) {
                    var c = d["option.product_mapping_name"],
                        u = !e.isEmpty(c),
                        p = d.type,
                        _ = JSON.stringify(d),
                        g = null,
                        y = null;
                    if (s) g = o.product[c];
                    else if (e.isEmpty(r)) {
                        if (
                            e.isEmpty(d) ||
                            e.isEmpty(d["option.product_type"]) ||
                            e.isEmpty(d["option.product_id"]) ||
                            e.isEmpty(c)
                        )
                            return;
                        var f = d["option.product_variant_id"],
                            h = !1;
                        if (
                            e.isEmpty(f) &&
                            (a &&
                                (h = !(function () {
                                    for (var t = !1, i = 0; i < m.length; i++) {
                                        var a = e.runtime.eventData[m[i]];
                                        if (
                                            "form" == a.type &&
                                            a["option.product_type"] == d["option.product_type"] &&
                                            a["option.product_id"] == d["option.product_id"]
                                        ) {
                                            t = !0;
                                            break;
                                        }
                                    }
                                    return t;
                                })()),
                                !e.isEmpty(l))
                        ) {
                            if (
                                d["option.product_id"] !=
                                l.target.getAttribute("data-product-id")
                            )
                                return;
                            d["option.product_type"];
                            var v = e.generateVariantProduct(
                                d,
                                !1,
                                null,
                                null,
                                null,
                                null,
                                !0,
                                !0,
                                function (t) {
                                    Q(i, a, n, r, o, !1, l);
                                }
                            );
                            e.isObject(v) && (f = e.getProductVariantId(l.target, v.product));
                        }
                        if (
                            _ ===
                            (g = (y = e.generateProductKey(
                                !0,
                                _,
                                !0,
                                d,
                                h,
                                f,
                                r,
                                function (t) {
                                    Q(i, a, n, r, o, s, l);
                                }
                            )).value)
                        )
                            return;
                    } else {
                        if ("form" == p && d["option.is_add_to_cart"])
                            return (
                                (d["option.product_id"] = r.product_id),
                                (d["option.product_variant_id"] = r.product_variant_id),
                                void J(i, p, !1, !0)
                            );
                        if (!u) return;
                        g =
                            (g = (y = e.generateProductKey(
                                !0,
                                null,
                                !0,
                                d,
                                !1,
                                r.product_variant_id,
                                r
                            )).value) || "";
                    }
                    var E = null,
                        P = null,
                        L = null;
                    if (
                        (("headline" != p && "paragraph" != p) ||
                            window.ladi(i).value(e.isNull(g) ? "" : g),
                            "image" == p)
                    ) {
                        if (((E = document.getElementById(i)), e.isEmpty(E))) return;
                        (L = e.getOptimizeImage(
                            g,
                            E.clientWidth,
                            E.clientHeight,
                            !0,
                            !1,
                            !1,
                            t
                        )),
                            (P = "style_add_to_cart_image_" + i);
                        var A = "";
                        (A = e.isEmpty(L)
                            ? "#" +
                            i +
                            "  > .ladi-image > .ladi-image-background {background-image: none;}"
                            : "#" +
                            i +
                            '  > .ladi-image > .ladi-image-background {background-image: url("' +
                            L +
                            '");}'),
                            e.createStyleElement(P, A);
                    }
                    if ("gallery" == p) {
                        if (!e.isArray(g)) return;
                        if (((E = document.getElementById(i)), e.isEmpty(E))) return;
                        if (n && "true" == E.getAttribute("data-loaded"))
                            return void Z(E, y, d);
                        for (
                            var b = E.getElementsByClassName("ladi-gallery-view")[0],
                            w = E.getElementsByClassName("ladi-gallery-view-item");
                            w.length < g.length;

                        ) {
                            var S = e.createTmpElement(
                                "div",
                                '<div class="ladi-gallery-view-item" data-index="' +
                                w.length +
                                '"></div>',
                                null,
                                !0
                            );
                            E.getElementsByClassName("ladi-gallery-view")[0].appendChild(S);
                        }
                        for (; w.length > g.length;)
                            w[w.length - 1].parentElement.removeChild(w[w.length - 1]);
                        for (
                            var T = E.getElementsByClassName("ladi-gallery-control-item"),
                            O = function (t) {
                                B(t, E);
                            };
                            T.length < g.length;

                        ) {
                            var C = e.createTmpElement(
                                "div",
                                '<div class="ladi-gallery-control-item" data-index="' +
                                T.length +
                                '"></div>',
                                null,
                                !0
                            );
                            C.addEventListener("click", O),
                                E.getElementsByClassName(
                                    "ladi-gallery-control-box"
                                )[0].appendChild(C);
                        }
                        for (; T.length > g.length;)
                            T[T.length - 1].parentElement.removeChild(T[T.length - 1]);
                        P = "style_add_to_cart_gallery_" + i;
                        var N = "";
                        g.length <= 1 &&
                            ((N +=
                                "#" +
                                i +
                                " .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {display: none;}"),
                                (N +=
                                    "#" +
                                    i +
                                    " > .ladi-gallery > .ladi-gallery-view {height: 100%;}"),
                                (N +=
                                    "#" +
                                    i +
                                    " > .ladi-gallery > .ladi-gallery-control {display: none;}"));
                        var I = E.getElementsByClassName("ladi-gallery-control-item")[0];
                        g.forEach(function (a, n) {
                            (L = e.getOptimizeImage(
                                a.src,
                                b.clientWidth,
                                b.clientHeight,
                                !0,
                                !1,
                                !1,
                                t
                            )),
                                (N +=
                                    "#" +
                                    i +
                                    ' .ladi-gallery .ladi-gallery-view-item[data-index="' +
                                    n +
                                    '"] {background-image: url("' +
                                    L +
                                    '");}'),
                                (L = e.getOptimizeImage(
                                    a.src,
                                    I.clientWidth,
                                    I.clientHeight,
                                    !0,
                                    !1,
                                    !1,
                                    t
                                )),
                                (N +=
                                    "#" +
                                    i +
                                    ' .ladi-gallery .ladi-gallery-control-item[data-index="' +
                                    n +
                                    '"] {background-image: url("' +
                                    L +
                                    '");}');
                        }),
                            E.setAttribute("data-max-item", g.length),
                            E.setAttribute("data-loaded", !0),
                            e.createStyleElement(P, N);
                    }
                }
            },
            $ = function (t) {
                var i = { type: "POPUPX", iframe_id: e.runtime.tmp.popupx_iframe_id };
                Object.keys(t).forEach(function (e) {
                    i[e] = t[e];
                }),
                    e.postMessageWindow(window.parent, i, "*");
            },
            tt = function (t) {
                e.runtime.tmp.popupx_is_desktop ||
                    ((window.outerWidth = parseFloatLadiPage(t) || window.outerWidth),
                        (window.ladi_screen_width = window.outerWidth),
                        e.isFunction(window.ladi_viewport) && window.ladi_viewport());
            },
            et = function (t, i, a, n) {
                var r = e.isEmpty(e.runtime.tmp.popupx_current_element_id);
                (e.runtime.tmp.popupx_current_element_id = t),
                    !i || r || a || n || T("PageView", {});
            },
            it = function (t) {
                for (
                    var i = !1,
                    a = !1,
                    n = document.querySelectorAll(
                        "#" +
                        e.runtime.builder_section_popup_id +
                        " .ladi-container > .ladi-element"
                    ),
                    r = 0;
                    r < n.length;
                    r++
                )
                    "none" != getComputedStyle(n[r]).display &&
                        (n[r].id == t && (i = !0),
                            e.runRemovePopup(n[r].id, !0, null, !1, !0));
                for (
                    n = document.querySelectorAll(
                        ".ladi-section:not(#" + e.runtime.builder_section_popup_id + ")"
                    ),
                    r = 0;
                    r < n.length;
                    r++
                )
                    "none" != getComputedStyle(n[r]).display &&
                        (n[r].id == t && (a = !0), window.ladi(n[r].id).hide(!0));
                return { isCurrentPopup: i, isCurrentSection: a };
            },
            at = function (t, i) {
                var a = e.runtime.eventData[t],
                    n = document.getElementById(t),
                    r = null,
                    o = null,
                    s = !1,
                    l = !1,
                    d = { width_device: e.runtime.desktop_width },
                    c = document.getElementById("style_container_desktop");
                if (
                    ((e.isEmpty(c) || "print" == c.getAttribute("media")) &&
                        (d = { width_device: e.runtime.mobile_width }),
                        !e.isEmpty(a) && !e.isEmpty(n))
                ) {
                    var u = getComputedStyle(n);
                    if ("popup" == a.type) {
                        (r = {}),
                            (s = (o = it(t)).isCurrentPopup),
                            (l = o.isCurrentSection);
                        var p = a[e.runtime.device + ".option.popup_position"];
                        [
                            "width",
                            "height",
                            "position",
                            "margin",
                            "top",
                            "left",
                            "bottom",
                            "right",
                            "z-index",
                        ].forEach(function (t) {
                            r[t] = u[t];
                        }),
                            tt(r.width),
                            (d.width = r.width);
                        var m = null;
                        return (
                            p == e.const.POSITION_TYPE.default &&
                            (m = background_style =
                                a[e.runtime.device + ".option.popup_backdrop"]),
                            $({
                                id: t,
                                data_backdrop: m,
                                data_scale: d,
                                is_opacity: !s,
                                set_scroll_popup: !0,
                                dimension: r,
                                action: { type: "set_iframe_dimension" },
                            }),
                            window.ladi(t).show(!0),
                            et(t, i, s, l),
                            !0
                        );
                    }
                    if ("section" == a.type) {
                        if (
                            ((s = (o = it(t)).isCurrentPopup),
                                (l = o.isCurrentSection),
                                a[e.runtime.device + ".option.sticky"])
                        ) {
                            r = { height: u.height };
                            var _ = n.getElementsByClassName("ladi-container")[0],
                                g = getComputedStyle(_);
                            tt(g.width),
                                (d.width = g.width),
                                (d.is_sticky_bar = !0),
                                $({
                                    id: t,
                                    data_scale: d,
                                    dimension: r,
                                    element: a,
                                    device: e.runtime.device,
                                    action: { type: "set_iframe_sticky" },
                                }),
                                window.ladi(t).show(!0),
                                et(t, i, s, l);
                        }
                        return !0;
                    }
                }
                return !1;
            },
            nt = function (t, i) {
                var a = e.runtime.eventData[t],
                    n = document.getElementById(t),
                    r = null;
                if (!e.isEmpty(a) && !e.isEmpty(n)) {
                    var o = getComputedStyle(n),
                        s = it(t),
                        l = s.isCurrentPopup,
                        d = s.isCurrentSection,
                        c = { width_device: e.runtime.desktop_width },
                        u = document.getElementById("style_container_desktop");
                    if (
                        ((e.isEmpty(u) || "print" == u.getAttribute("media")) &&
                            (c = { width_device: e.runtime.mobile_width }),
                            (r = { width: o.width, height: o.height }),
                            "popup" == a.type && (c.width = r.width),
                            "section" == a.type)
                    ) {
                        var p = n.getElementsByClassName("ladi-container")[0],
                            m = getComputedStyle(p);
                        (r.width = m.width), (c.width = m.width), (c.is_sticky_bar = !0);
                    }
                    return (
                        tt(r.width),
                        $({
                            id: t,
                            data_scale: c,
                            dimension: r,
                            action: { type: "set_iframe_dimension" },
                        }),
                        window.ladi(t).show(!0),
                        et(t, i, l, d),
                        !0
                    );
                }
                return !1;
            },
            rt = function (t) {
                for (
                    var i = [
                        "style_element_desktop",
                        "style_container_desktop",
                        "style_ladi_media_desktop",
                    ],
                    a = [
                        "style_element_mobile",
                        "style_container_mobile",
                        "style_ladi_media_mobile",
                    ],
                    n = 0;
                    n < i.length;
                    n++
                ) {
                    var r = document.getElementById(i[n]);
                    e.isEmpty(r) ||
                        (t ? r.removeAttribute("media") : r.setAttribute("media", "print"));
                }
                for (n = 0; n < a.length; n++) {
                    var o = document.getElementById(a[n]);
                    e.isEmpty(o) ||
                        (t ? o.setAttribute("media", "print") : o.removeAttribute("media"));
                }
            };
        (e.runtime.tmp.generateLadiSaleProduct = function (t, i, a) {
            var n = function () {
                m.forEach(function (n) {
                    e.runtime.eventData[n];
                    Q(n, t, i, null, null, !1, a);
                });
            },
                r = function (t) {
                    if (t && e.isEmpty(a)) n();
                    else {
                        var i = a.target,
                            o = e.findAncestor(i, "ladi-element");
                        if (!e.isEmpty(o)) {
                            var s = e.findAncestor(o, "ladi-form");
                            if (!e.isEmpty(s)) {
                                var l = e.findAncestor(s, "ladi-element");
                                if (!e.isEmpty(l)) {
                                    var d = e.runtime.eventData[l.id];
                                    if (!e.isEmpty(d)) {
                                        var c = d["option.product_id"];
                                        if (!e.isEmpty(c)) {
                                            var u = e.generateVariantProduct(
                                                d,
                                                !1,
                                                null,
                                                null,
                                                null,
                                                null,
                                                !0,
                                                !0,
                                                function (t) {
                                                    r(!1);
                                                }
                                            );
                                            if (
                                                e.isObject(u) &&
                                                e.isObject(u.store_info) &&
                                                e.isObject(u.product)
                                            ) {
                                                var p = e.getProductVariantIndex(l.id, d),
                                                    m = document.querySelectorAll(
                                                        '[data-variant="true"]'
                                                    );
                                                if (-1 != p)
                                                    for (var _ = 0; _ < m.length; _++)
                                                        if (
                                                            m[_].id != o.id &&
                                                            e.isEmpty(e.findAncestor(m[_], "ladi-collection"))
                                                        ) {
                                                            var g = e.runtime.eventData[m[_].id];
                                                            if (!e.isEmpty(g)) {
                                                                var y = e.findAncestor(m[_], "ladi-form");
                                                                if (!e.isEmpty(y)) {
                                                                    var f = e.findAncestor(y, "ladi-element");
                                                                    if (!e.isEmpty(f)) {
                                                                        var h = e.runtime.eventData[f.id];
                                                                        if (
                                                                            !e.isEmpty(h) &&
                                                                            !e.isEmpty(h["option.product_variant_id"])
                                                                        )
                                                                            continue;
                                                                    }
                                                                    var v = null,
                                                                        E = null,
                                                                        P = null,
                                                                        L = 0;
                                                                    if (
                                                                        g["option.product_variant_type"] ==
                                                                        e.const.PRODUCT_VARIANT_TYPE.combobox
                                                                    ) {
                                                                        if (!e.isArray(u.product.variants))
                                                                            continue;
                                                                        if (
                                                                            ((E = u.product.variants[p]),
                                                                                e.isString(E.option_ids))
                                                                        )
                                                                            for (
                                                                                P = E.option_ids.split("/"), L = 0;
                                                                                L < P.length;
                                                                                L++
                                                                            )
                                                                                (v = document.querySelector(
                                                                                    "#" +
                                                                                    m[_].id +
                                                                                    ' .ladi-form-item select[data-product-option-id="' +
                                                                                    P[L] +
                                                                                    '"]'
                                                                                )),
                                                                                    e.isEmpty(v) ||
                                                                                    v.getAttribute("data-store-id") !=
                                                                                    u.store_info.id ||
                                                                                    v.getAttribute("data-product-id") !=
                                                                                    E.product_id ||
                                                                                    (v.value = E["option" + (L + 1)]);
                                                                    }
                                                                    if (
                                                                        g["option.product_variant_type"] ==
                                                                        e.const.PRODUCT_VARIANT_TYPE.label
                                                                    ) {
                                                                        if (!e.isArray(u.product.variants))
                                                                            continue;
                                                                        if (
                                                                            ((E = u.product.variants[p]),
                                                                                e.isString(E.option_ids))
                                                                        )
                                                                            for (
                                                                                P = E.option_ids.split("/"), L = 0;
                                                                                L < P.length;
                                                                                L++
                                                                            )
                                                                                (v = document.querySelector(
                                                                                    "#" +
                                                                                    m[_].id +
                                                                                    ' .ladi-form-label-container[data-product-option-id="' +
                                                                                    P[L] +
                                                                                    '"]'
                                                                                )),
                                                                                    e.isEmpty(v) ||
                                                                                    v.getAttribute("data-store-id") !=
                                                                                    u.store_info.id ||
                                                                                    v.getAttribute("data-product-id") !=
                                                                                    E.product_id ||
                                                                                    e.runtime.tmp.updateLabelValue(
                                                                                        v,
                                                                                        E["option" + (L + 1)]
                                                                                    );
                                                                    }
                                                                    if (
                                                                        g["option.product_variant_type"] ==
                                                                        e.const.PRODUCT_VARIANT_TYPE.combined
                                                                    ) {
                                                                        if (
                                                                            ((v = m[_].querySelector(
                                                                                "select.ladi-form-control"
                                                                            )),
                                                                                e.isEmpty(v) ||
                                                                                v.getAttribute("data-store-id") !=
                                                                                u.store_info.id ||
                                                                                v.getAttribute("data-product-id") !=
                                                                                u.product.product_id)
                                                                        )
                                                                            continue;
                                                                        var A = e.getProductVariantId(o, u);
                                                                        if (!e.isEmpty(A)) {
                                                                            var b = v.querySelector(
                                                                                'option[data-product-variant-id="' +
                                                                                A +
                                                                                '"]'
                                                                            );
                                                                            e.isEmpty(b) ||
                                                                                (p = b.getAttribute("value"));
                                                                        }
                                                                        v.value = p + "";
                                                                    }
                                                                }
                                                            }
                                                        }
                                                for (var w = 0; w < m.length; w++) {
                                                    var S = e.findAncestor(m[w], "ladi-form");
                                                    if (!e.isEmpty(S)) {
                                                        var T = S.querySelector('input[name="quantity"]');
                                                        e.isEmpty(T) || e.fireEvent(T, "input");
                                                    }
                                                }
                                                n();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            r(!0);
        }),
            (e.runtime.tmp.generateCart = function () {
                m.forEach(function (i) {
                    !(function (i, a) {
                        if ("cart" == a) {
                            var n = e.runtime.eventData[i];
                            if (!e.isEmpty(n)) {
                                var r = document.getElementById(i);
                                e.isEmpty(r) ||
                                    e.showParentVisibility(r, function () {
                                        var i = parseFloatLadiPage(getComputedStyle(r).height) || 0,
                                            a =
                                                parseFloatLadiPage(r.getAttribute("data-height")) || 0;
                                        r.hasAttribute("data-height") ||
                                            (r.setAttribute("data-height", i), (a = i));
                                        var o = e.generateHtmlCart(
                                            n["option.cart_layout"],
                                            n["option.message_no_product"],
                                            t
                                        );
                                        r.getElementsByClassName("ladi-cart")[0].innerHTML = o;
                                        var s =
                                            r.getElementsByClassName("ladi-cart")[0].scrollHeight;
                                        if (i != (s = s < a ? a : s)) {
                                            r.style.setProperty("height", s + "px");
                                            var l = e.findAncestor(r.parentElement, "ladi-element");
                                            e.isEmpty(l) &&
                                                (l = e.findAncestor(r.parentElement, "ladi-section")),
                                                e.updateHeightElement(!0, r, l, i, s);
                                        }
                                    });
                            }
                        }
                    })(i, e.runtime.eventData[i].type);
                });
            }),
            (e.runtime.tmp.runButtonSectionClose = I),
            (e.runtime.tmp.runOptionAction = C),
            (e.runtime.tmp.runOptionHover = N),
            (e.runtime.tmp.runTrackingAnalytics = T),
            (e.runtime.tmp.runLadiSaleProductKey = Q),
            (e.runtime.tmp.eventClickGalleryControlItem = B),
            (e.runtime.tmp.runGallery = q),
            (e.runtime.tmp.setGalleryStart = V),
            (e.runtime.tmp.updateImageGalleryProduct = Z),
            (e.runtime.tmp.runOptionCountdown = k),
            (e.runtime.tmp.runOptionCountdownItem = x),
            (e.runtime.tmp.getOptionLabelValue = W),
            (e.runtime.tmp.updateLabelValue = X),
            (e.runtime.tmp.getLabelValue = z),
            (e.runtime.tmp.clickLabelProductChangeCallback = K),
            (e.runtime.tmp.fireEventLabelChange = function (t) {
                var i = t.querySelector(".ladi-form-label-item.selected");
                e.isEmpty(i) || e.fireEvent(i, "click", { is_fire_event: !0 });
            }),
            (e.runtime.tmp.showPopupX = at),
            (e.runtime.tmp.runActionPopupX = $);
        var ot = function () {
            var i;
            e.runtime.tmp.generateLadiSaleProduct(!0),
                e.runtime.shopping && e.createCartData(),
                e.loadDataset(null, null, null, null, null, !0, t),
                m.forEach(function (i) {
                    var a,
                        n,
                        r = e.runtime.eventData[i],
                        o = LadiPageApp[r.type + e.const.APP_RUNTIME_PREFIX];
                    e.isEmpty(o)
                        ? (!(function (t, i, a, n, r, o) {
                            var s = document.getElementById(t);
                            if (
                                !e.isEmpty(s) &&
                                (I(t), "section" == i && !e.isEmpty(r) && !e.isEmpty(o))
                            ) {
                                var l = s.getElementsByClassName(
                                    "ladi-section-background"
                                )[0];
                                e.isEmpty(l) ||
                                    (e.runtime.list_scroll_func[t] = function () {
                                        if (
                                            (!e.runtime.isDesktop ||
                                                a == e.const.BACKGROUND_STYLE.video) &&
                                            (e.runtime.isDesktop ||
                                                n == e.const.BACKGROUND_STYLE.video)
                                        ) {
                                            var i = "",
                                                s = t + "_background_video";
                                            r == e.const.VIDEO_TYPE.youtube &&
                                                ((i =
                                                    '<iframe id="' +
                                                    s +
                                                    '" class="ladi-section-background-video" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'),
                                                    (l.innerHTML += i),
                                                    e.runEventPlayVideo(s, r, o, !0, !0, !1)),
                                                r == e.const.VIDEO_TYPE.direct &&
                                                ((i =
                                                    '<video id="' +
                                                    s +
                                                    '" class="ladi-section-background-video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"></video>'),
                                                    (l.innerHTML += i),
                                                    e.runEventPlayVideo(s, r, o, !0, !0, !1));
                                        }
                                    });
                            }
                        })(
                            i,
                            r.type,
                            r[e.const.DESKTOP + ".option.background-style"],
                            r[e.const.MOBILE + ".option.background-style"],
                            r["option.background_video.video_type"],
                            r["option.background_video.video_value"]
                        ),
                            C(null, i, r.type, r),
                            (a = r.type),
                            (n = r["option.data_action"]),
                            e.runtime.list_loaded_func.push(function () {
                                var t = 0;
                                -1 != ["headline", "paragraph", "list_paragraph"].indexOf(a) &&
                                    (t = 1e3),
                                    e.runTimeout(function () {
                                        e.isEmpty(n) ||
                                            n.type != e.const.DATA_ACTION_TYPE.collapse ||
                                            e.isEmpty(n.action) ||
                                            (!e.isNull(n.collapse_start_is_show) &&
                                                n.collapse_start_is_show) ||
                                            window.ladi(n.action).collapse(!1);
                                    }, t);
                            }),
                            N(null, i, r.type, r["option.data_hover"]),
                            (function (t, i, a, n, r, o, s) {
                                if ("video" == i && !e.isEmpty(a)) {
                                    var l = document.getElementById(t);
                                    if (!e.isEmpty(l)) {
                                        var d = function () {
                                            var i = e.runtime.eventData[t];
                                            e.isEmpty(i) ||
                                                ((n = i["option.video_type"]),
                                                    (a = i["option.video_value"]),
                                                    (r = i["option.video_control"]));
                                        },
                                            c =
                                                (e.runtime.isDesktop && o) ||
                                                (!e.runtime.isDesktop && s);
                                        if (c) {
                                            var u = function () {
                                                d(), e.playVideo(t, n, a, r, c);
                                            },
                                                p = e.findAncestor(l, "ladi-popup");
                                            e.isEmpty(p)
                                                ? (e.runtime.list_scroll_func[t] = u)
                                                : ((p = e.findAncestor(p, "ladi-element")),
                                                    e.isArray(e.runtime.list_show_popup_func[p.id]) ||
                                                    (e.runtime.list_show_popup_func[p.id] = []),
                                                    e.runtime.list_show_popup_func[p.id].push(u));
                                        } else {
                                            var m =
                                                document.querySelectorAll("#" + t + ".preload").length >
                                                0;
                                            m && e.playVideo(t, n, a, r, !1, m);
                                        }
                                        l.addEventListener("click", function (i) {
                                            i.stopPropagation(),
                                                d(),
                                                (n == e.const.VIDEO_TYPE.direct &&
                                                    "VIDEO" == i.target.tagName) ||
                                                (n == e.const.VIDEO_TYPE.youtube &&
                                                    "IFRAME" == i.target.tagName) ||
                                                e.playVideo(t, n, a, r);
                                        });
                                    }
                                }
                            })(
                                i,
                                r.type,
                                r["option.video_value"],
                                r["option.video_type"],
                                r["option.video_control"],
                                r[e.const.DESKTOP + ".option.video_autoplay"],
                                r[e.const.MOBILE + ".option.video_autoplay"]
                            ),
                            (function (t, i, a, n) {
                                "popup" == i &&
                                    a &&
                                    ((e.isEmpty(n) || n < 0) && (n = 0),
                                        e.runTimeout(function () {
                                            window.ladi(t).show();
                                        }, 1e3 * n));
                            })(
                                i,
                                r.type,
                                r["option.show_popup_welcome_page"],
                                r["option.delay_popup_welcome_page"]
                            ),
                            k(
                                i,
                                null,
                                r.type,
                                r["option.countdown_type"],
                                r["option.countdown_minute"],
                                r["option.countdown_daily_start"],
                                r["option.countdown_daily_end"],
                                r["option.countdown_endtime"]
                            ),
                            x(i, null, r.type, r["option.countdown_item_type"]),
                            (function (t, i, a, n) {
                                if ("section" == i) {
                                    var r = document.getElementById(t);
                                    if (!e.isEmpty(r)) {
                                        var o = r.getElementsByClassName(
                                            "ladi-section-arrow-down"
                                        )[0];
                                        S.push(function () {
                                            if (e.isEmpty(o)) {
                                                if (e.runtime.isDesktop) {
                                                    if (e.isEmpty(a))
                                                        return void r.removeAttribute("data-opacity");
                                                    var t = (parseFloatLadiPage(a) || 0) + 50;
                                                    if (t > r.clientHeight)
                                                        return void r.removeAttribute("data-opacity");
                                                    r.setAttribute("data-height", r.clientHeight),
                                                        r.style.setProperty("height", t + "px"),
                                                        r.classList.add("overflow-hidden");
                                                } else {
                                                    if (e.isEmpty(n))
                                                        return void r.removeAttribute("data-opacity");
                                                    var i = (parseFloatLadiPage(n) || 0) + 50;
                                                    if (i > r.clientHeight)
                                                        return void r.removeAttribute("data-opacity");
                                                    r.setAttribute("data-height", r.clientHeight),
                                                        r.style.setProperty("height", i + "px"),
                                                        r.classList.add("overflow-hidden");
                                                }
                                                ((o = document.createElement("div")).className =
                                                    "ladi-section-arrow-down"),
                                                    r.appendChild(o),
                                                    r.removeAttribute("data-opacity"),
                                                    o.addEventListener("click", function (t) {
                                                        t.stopPropagation(),
                                                            r.classList.add("transition-readmore"),
                                                            r.style.removeProperty("height"),
                                                            o.parentElement.removeChild(o),
                                                            e.runTimeout(function () {
                                                                r.classList.remove("transition-readmore"),
                                                                    r.classList.remove("overflow-hidden"),
                                                                    r.clientHeight !=
                                                                    r.getAttribute("data-height") &&
                                                                    r.style.setProperty(
                                                                        "height",
                                                                        r.getAttribute("data-height") + "px"
                                                                    ),
                                                                    r.removeAttribute("data-height"),
                                                                    e.runTimeout(e.removeSticky, 100);
                                                            }, 1e3 *
                                                            parseFloatLadiPage(
                                                                getComputedStyle(r).transitionDuration
                                                            ));
                                                    });
                                            }
                                        });
                                    }
                                }
                            })(
                                i,
                                r.type,
                                r[e.const.DESKTOP + ".option.readmore_range"],
                                r[e.const.MOBILE + ".option.readmore_range"]
                            ),
                            (function (t, i, a) {
                                if ("form_item" == i) {
                                    var n = null;
                                    if (
                                        a == e.const.INPUT_TYPE.select ||
                                        a == e.const.INPUT_TYPE.select_multiple
                                    )
                                        for (
                                            var r = document
                                                .getElementById(t)
                                                .getElementsByClassName("ladi-form-control"),
                                            o = 0;
                                            o < r.length;
                                            o++
                                        )
                                            r[o].addEventListener("change", function (t) {
                                                t.target.setAttribute("data-selected", t.target.value);
                                            });
                                    if (a == e.const.INPUT_TYPE.checkbox) {
                                        n = document
                                            .getElementById(t)
                                            .getElementsByClassName("ladi-form-checkbox-item");
                                        for (
                                            var s = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(
                                                    t.target,
                                                    "ladi-form-checkbox-item"
                                                );
                                                e.isEmpty(i) ||
                                                    i
                                                        .getElementsByTagName("span")[0]
                                                        .setAttribute("data-checked", t.target.checked);
                                            },
                                            l = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(
                                                    t.target,
                                                    "ladi-form-checkbox-item"
                                                );
                                                e.isEmpty(i) ||
                                                    i.getElementsByTagName("input")[0].click();
                                            },
                                            d = 0;
                                            d < n.length;
                                            d++
                                        ) {
                                            var c = n[d].getElementsByTagName("input")[0];
                                            n[d]
                                                .getElementsByTagName("span")[0]
                                                .addEventListener("click", l),
                                                c.addEventListener("change", s);
                                        }
                                    }
                                    if (a == e.const.INPUT_TYPE.radio) {
                                        n = document
                                            .getElementById(t)
                                            .getElementsByClassName("ladi-form-checkbox-item");
                                        for (
                                            var u = function (t) {
                                                var i = e.findAncestor(
                                                    t.target,
                                                    "ladi-form-checkbox-item"
                                                ),
                                                    a = e.findAncestor(i, "ladi-form-checkbox");
                                                if (!e.isEmpty(a)) {
                                                    for (
                                                        var n = a.querySelectorAll(
                                                            ".ladi-form-checkbox-item span"
                                                        ),
                                                        r = 0;
                                                        r < n.length;
                                                        r++
                                                    )
                                                        n[r].setAttribute("data-checked", !1);
                                                    e.isEmpty(i) ||
                                                        i
                                                            .getElementsByTagName("span")[0]
                                                            .setAttribute("data-checked", t.target.checked);
                                                }
                                            },
                                            p = function (t) {
                                                t.stopPropagation();
                                                var i = e.findAncestor(
                                                    t.target,
                                                    "ladi-form-checkbox-item"
                                                );
                                                e.isEmpty(i) ||
                                                    i.getElementsByTagName("input")[0].click();
                                            },
                                            m = 0;
                                            m < n.length;
                                            m++
                                        ) {
                                            var _ = n[m].getElementsByTagName("input")[0];
                                            n[m]
                                                .getElementsByTagName("span")[0]
                                                .addEventListener("click", p),
                                                _.addEventListener("change", u);
                                        }
                                    }
                                }
                            })(i, r.type, r["option.input_type"]),
                            q(i, null, !1, r.type),
                            e.startAutoScroll(
                                i,
                                r.type,
                                r[e.const.DESKTOP + ".option.auto_scroll"],
                                r[e.const.MOBILE + ".option.auto_scroll"]
                            ),
                            J(i, r.type, !0, !1),
                            (function (t, i) {
                                if ("form" == i) {
                                    var a = document.getElementById(t);
                                    if (!e.isEmpty(a)) {
                                        var n = a.querySelector('input[name="quantity"]');
                                        if (!e.isEmpty(n)) {
                                            var r = function (i) {
                                                if (!e.isEmpty(i.target.value)) {
                                                    var a = e.runtime.eventData[t];
                                                    if (!e.isEmpty(a) && a["option.is_add_to_cart"]) {
                                                        var n = e.generateVariantProduct(
                                                            a,
                                                            !1,
                                                            null,
                                                            null,
                                                            null,
                                                            null,
                                                            !0,
                                                            !0,
                                                            function () {
                                                                r(i);
                                                            }
                                                        );
                                                        if (
                                                            !(
                                                                e.isEmpty(n) ||
                                                                e.isEmpty(n.store_info) ||
                                                                e.isEmpty(n.product)
                                                            )
                                                        ) {
                                                            var o = e.getProductVariantIndex(t, a);
                                                            if (-1 != o) {
                                                                var s = n.product.variants[o].quantity,
                                                                    l = n.product.variants[o].quantity_stock;
                                                                s = e.isNull(l) ? s : l;
                                                                var d = parseInt(i.target.value) || 0,
                                                                    c = 1;
                                                                c = n.product.variants[o].min_buy || c;
                                                                var u = n.product.variants[o].max_buy,
                                                                    p = 0,
                                                                    m = e.runtime.tmp.cart.findIndex(function (
                                                                        t
                                                                    ) {
                                                                        return (
                                                                            t.product_id ==
                                                                            n.product.variants[o].product_id &&
                                                                            t.product_variant_id ==
                                                                            n.product.variants[o].product_variant_id
                                                                        );
                                                                    });
                                                                -1 != m && (p = e.runtime.tmp.cart[m].quantity),
                                                                    c > d + p && (d = c - p),
                                                                    1 ==
                                                                    n.product.variants[o].inventory_checked &&
                                                                    d + p > s &&
                                                                    (d = s - p),
                                                                    !e.isEmpty(u) && d + p > u && (d = u - p),
                                                                    (d = d < 1 ? 1 : d),
                                                                    i.target.setAttribute("min", c),
                                                                    e.isEmpty(u) ||
                                                                    i.target.setAttribute("max", u),
                                                                    (i.target.value = d);
                                                            }
                                                        }
                                                    }
                                                }
                                            };
                                            n.addEventListener("input", r), e.fireEvent(n, "input");
                                            var o = a.querySelectorAll("button")[0],
                                                s = a.querySelectorAll("button")[1];
                                            e.isEmpty(o) ||
                                                e.isEmpty(s) ||
                                                (o.addEventListener("click", function (t) {
                                                    (n.value = (parseFloatLadiPage(n.value) || 0) - 1),
                                                        e.fireEvent(n, "input");
                                                }),
                                                    s.addEventListener("click", function (t) {
                                                        (n.value = (parseFloatLadiPage(n.value) || 0) + 1),
                                                            e.fireEvent(n, "input");
                                                    }));
                                        }
                                    }
                                }
                            })(i, r.type),
                            (function (t, i) {
                                if ("collection" == i) {
                                    var a = document.getElementById(t);
                                    if (!e.isEmpty(a)) {
                                        var n = e.runtime.eventData[t];
                                        if (!e.isEmpty(n)) {
                                            var r = n["option.collection_setting.type"],
                                                o = a.getElementsByClassName("ladi-collection")[0];
                                            if (
                                                (r == e.const.COLLECTION_TYPE.carousel &&
                                                    o.classList.add("carousel"),
                                                    r == e.const.COLLECTION_TYPE.carousel)
                                            ) {
                                                var s = document.createElement("div");
                                                s.className =
                                                    "ladi-collection-arrow ladi-collection-arrow-left opacity-0";
                                                var l = document.createElement("div");
                                                (l.className =
                                                    "ladi-collection-arrow ladi-collection-arrow-right opacity-0"),
                                                    o.appendChild(s),
                                                    o.appendChild(l),
                                                    s.addEventListener("click", function (i) {
                                                        i.stopPropagation();
                                                        var r =
                                                            parseFloatLadiPage(a.getAttribute("data-page")) ||
                                                            1;
                                                        (r = (r -= 1) < 1 ? 1 : r),
                                                            e.loadCollectionData(t, n, r, !1);
                                                    }),
                                                    l.addEventListener("click", function (i) {
                                                        i.stopPropagation();
                                                        var r =
                                                            parseFloatLadiPage(a.getAttribute("data-page")) ||
                                                            1;
                                                        if (((r += 1), a.hasAttribute("data-max-page"))) {
                                                            var o =
                                                                parseFloatLadiPage(
                                                                    a.getAttribute("data-max-page")
                                                                ) || 1;
                                                            r = r > o ? o : r;
                                                        }
                                                        e.loadCollectionData(t, n, r, !1);
                                                    });
                                            }
                                            if (r == e.const.COLLECTION_TYPE.readmore) {
                                                var d = document.createElement("div");
                                                (d.className = "ladi-collection-button-next opacity-0"),
                                                    o.appendChild(d),
                                                    d.addEventListener("click", function (i) {
                                                        i.stopPropagation();
                                                        var r =
                                                            parseFloatLadiPage(a.getAttribute("data-page")) ||
                                                            1;
                                                        if (((r += 1), a.hasAttribute("data-max-page"))) {
                                                            var o =
                                                                parseFloatLadiPage(
                                                                    a.getAttribute("data-max-page")
                                                                ) || 1;
                                                            r = r > o ? o : r;
                                                        }
                                                        e.loadCollectionData(t, n, r, !1, !0);
                                                    });
                                            }
                                            e.loadCollectionData(t, n, 1, !0);
                                        }
                                    }
                                }
                            })(i, r.type))
                        : o(r, t).run(i, e.runtime.isDesktop);
                }),
                j(Date.now() + 1e3),
                G(),
                U(),
                (i = function () {
                    m.forEach(function (t) {
                        if ("countdown" == e.runtime.eventData[t].type)
                            for (
                                var i = document.querySelectorAll("#" + t), a = 0;
                                a < i.length;
                                a++
                            ) {
                                var n = i[a],
                                    r = n.getAttribute("data-type"),
                                    o = 0,
                                    s = 0,
                                    l = Date.now();
                                if (
                                    n.hasAttribute("data-date-start") ||
                                    n.hasAttribute("data-date-end")
                                )
                                    (o =
                                        parseFloatLadiPage(n.getAttribute("data-date-start")) || 0),
                                        (s =
                                            parseFloatLadiPage(n.getAttribute("data-date-end")) || 0);
                                else {
                                    if (r == e.const.COUNTDOWN_TYPE.countdown) {
                                        var d = parseInt(n.getAttribute("data-minute")) || 0;
                                        if (d <= 0) return;
                                        for (s = e.runtime.timenow; s <= l;) s += 60 * d * 1e3;
                                    }
                                    if (
                                        (r == e.const.COUNTDOWN_TYPE.endtime &&
                                            (s = parseInt(n.getAttribute("data-endtime")) || 0),
                                            r == e.const.COUNTDOWN_TYPE.daily)
                                    ) {
                                        var c = n.getAttribute("data-daily-start"),
                                            u = n.getAttribute("data-daily-end");
                                        if (!e.isEmpty(c) && !e.isEmpty(u)) {
                                            var p = new Date().toDateString();
                                            (o = new Date(p + " " + c).getTime()),
                                                (s = new Date(p + " " + u).getTime());
                                        }
                                    }
                                    n.setAttribute("data-date-start", o),
                                        n.setAttribute("data-date-end", s);
                                }
                                if (o > l) return;
                                var m = s - l;
                                m < 0 && (m = 0);
                                for (
                                    var _ = e.getCountdownTime(m),
                                    g = n.querySelectorAll("[data-item-type]"),
                                    y = 0;
                                    y < g.length;
                                    y++
                                )
                                    g[y].querySelectorAll(
                                        ".ladi-countdown-text span"
                                    )[0].textContent = _[g[y].getAttribute("data-item-type")];
                            }
                    });
                })(),
                (e.runtime.interval_countdown = e.runInterval(i, 1e3)),
                m.forEach(function (t) {
                    var i = document.getElementById(t);
                    e.isEmpty(i) || V(t, i);
                }),
                (e.runtime.interval_gallery = e.runInterval(Y, 1e3)),
                m.forEach(function (t) {
                    var i = e.runtime.eventData[t];
                    if ("carousel" == i.type) {
                        var a = document.getElementById(t);
                        if (!e.isEmpty(a)) {
                            a.hasAttribute("data-scrolled") ||
                                (a.setAttribute("data-scrolled", !1),
                                    (e.runtime.list_scroll_func[t] = function () {
                                        a.setAttribute("data-scrolled", !0);
                                    }));
                            var n = i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                r =
                                    i[
                                    e.runtime.device + ".option.carousel_setting.autoplay_time"
                                    ],
                                o = 0;
                            n && !e.isEmpty(r) && (o = r);
                            var s = function (i) {
                                i.stopPropagation(),
                                    (i = e.getEventCursorData(i)),
                                    (!e.isEmpty(e.runtime.timenext_carousel[t]) &&
                                        e.runtime.timenext_carousel[t] > Date.now()) ||
                                    ((e.runtime.timenext_carousel[t] = Date.now() + 864e5),
                                        (e.runtime.current_element_mouse_down_carousel = t),
                                        (e.runtime.current_element_mouse_down_carousel_position_x =
                                            i.pageX),
                                        a
                                            .getElementsByClassName("ladi-carousel-content")[0]
                                            .style.setProperty("transition-duration", "0ms"),
                                        a
                                            .getElementsByClassName("ladi-carousel-content")[0]
                                            .setAttribute(
                                                "data-left",
                                                getComputedStyle(
                                                    a.getElementsByClassName("ladi-carousel-content")[0]
                                                ).left
                                            ));
                            };
                            a
                                .getElementsByClassName("ladi-carousel-arrow-left")[0]
                                .addEventListener("click", function (e) {
                                    e.stopPropagation(),
                                        a
                                            .getElementsByClassName("ladi-carousel-content")[0]
                                            .style.removeProperty("transition-duration"),
                                        a.setAttribute("data-is-next", !1),
                                        a.setAttribute("data-next-time", Date.now() + 1e3 * o),
                                        H(t, !1);
                                }),
                                -(
                                    (parseFloatLadiPage(
                                        i[e.runtime.device + ".option.carousel_crop.width"]
                                    ) || 0) - a.clientWidth
                                ) < 0 &&
                                a
                                    .getElementsByClassName("ladi-carousel-arrow-right")[0]
                                    .classList.remove("opacity-0"),
                                a
                                    .getElementsByClassName("ladi-carousel-arrow-right")[0]
                                    .addEventListener("click", function (e) {
                                        e.stopPropagation(),
                                            a
                                                .getElementsByClassName("ladi-carousel-content")[0]
                                                .style.removeProperty("transition-duration"),
                                            a.setAttribute("data-is-next", !0),
                                            a.setAttribute("data-next-time", Date.now() + 1e3 * o),
                                            H(t, !1);
                                    }),
                                a
                                    .getElementsByClassName("ladi-carousel")[0]
                                    .addEventListener("mousedown", s),
                                a
                                    .getElementsByClassName("ladi-carousel")[0]
                                    .addEventListener(
                                        "touchstart",
                                        s,
                                        e.runtime.scrollEventPassive
                                    );
                        }
                    }
                }),
                (e.runtime.interval_carousel = e.runInterval(function () {
                    m.forEach(function (t) {
                        var i = e.runtime.eventData[t];
                        if ("carousel" == i.type) {
                            var a = document.getElementById(t);
                            if (
                                !e.isEmpty(a) &&
                                "true" == a.getAttribute("data-scrolled") &&
                                "true" != a.getAttribute("data-stop")
                            ) {
                                var n =
                                    i[e.runtime.device + ".option.carousel_setting.autoplay"],
                                    r =
                                        i[
                                        e.runtime.device +
                                        ".option.carousel_setting.autoplay_time"
                                        ],
                                    o = 0;
                                if ((n && !e.isEmpty(r) && (o = r), o > 0)) {
                                    var s = a.getAttribute("data-next-time"),
                                        l = Date.now();
                                    e.isEmpty(s) &&
                                        ((s = l + 1e3 * (o - 1)),
                                            a.setAttribute("data-next-time", s)),
                                        l >= s &&
                                        (H(t, !0), a.setAttribute("data-next-time", l + 1e3 * o));
                                }
                            }
                        }
                    });
                }, 1e3)),
                (function () {
                    var t = ["phone", "email", "coupon"],
                        i = document.querySelectorAll(".ladi-form .ladi-button");
                    e.runtime.tmp.list_form_checkout = [];
                    for (
                        var a = function (t, i) {
                            var a = e.findAncestor(t.target, "ladi-form");
                            if (
                                !e.isEmpty(a) &&
                                ((a = a.querySelector("[data-submit-form-id]")),
                                    !e.isEmpty(a))
                            ) {
                                var n = a.getAttribute("data-submit-form-id");
                                if (!e.isEmpty(n)) {
                                    var r = document.querySelector(
                                        "#" + n + ' .ladi-form-item input[name="coupon"]'
                                    );
                                    e.isEmpty(r) ||
                                        ((r.value = t.target.value), e.fireEvent(r, i));
                                }
                            }
                        },
                        n = function (t) {
                            a(t, "change");
                        },
                        r = function (t) {
                            a(t, "input");
                        },
                        o = function (t) {
                            e.isEmpty(e.runtime.tmp.current_use_coupon) &&
                                e.reloadPriceDiscount(t);
                        },
                        s = 0;
                        s < i.length;
                        s++
                    ) {
                        var l = e.findAncestor(i[s], "ladi-element");
                        if (!e.isEmpty(l)) {
                            var d = e.findAncestor(i[s], "ladi-form");
                            if (!e.isEmpty(d)) {
                                var c = e.findAncestor(d, "ladi-element");
                                if (!e.isEmpty(c)) {
                                    var u = e.runtime.eventData[l.id];
                                    if (!e.isEmpty(u)) {
                                        var p = e.runtime.eventData[c.id];
                                        if (!e.isEmpty(p))
                                            if (e.isEmpty(u["option.data_submit_form_id"])) {
                                                if (
                                                    !p["option.is_form_login"] &&
                                                    !p["option.is_form_coupon"]
                                                ) {
                                                    var m = e.findAncestor(c, "ladi-popup");
                                                    e.isEmpty(m) ||
                                                        (m = e.findAncestor(m, "ladi-element")),
                                                        e.isEmpty(m) ||
                                                        "POPUP_CHECKOUT" != m.id ||
                                                        e.runtime.tmp.list_form_checkout.push(c.id);
                                                }
                                            } else if (p["option.is_form_coupon"]) {
                                                l.setAttribute(
                                                    "data-submit-form-id",
                                                    u["option.data_submit_form_id"]
                                                ),
                                                    l.addEventListener("click", o),
                                                    (d.onsubmit = function () {
                                                        return !1;
                                                    });
                                                var _ = d.querySelector(
                                                    '.ladi-form-item input[name="coupon"]'
                                                );
                                                if (!e.isEmpty(_)) {
                                                    _.addEventListener("change", n),
                                                        _.addEventListener("input", r);
                                                    var g = document.querySelector(
                                                        "#" +
                                                        u["option.data_submit_form_id"] +
                                                        ' .ladi-form-item input[name="coupon"]'
                                                    );
                                                    e.isEmpty(g) ||
                                                        g.setAttribute("data-replace-coupon", !0);
                                                }
                                                e.runtime.tmp.list_form_checkout.push(
                                                    u["option.data_submit_form_id"]
                                                );
                                            }
                                    }
                                }
                            }
                        }
                    }
                    e.runtime.tmp.list_form_checkout =
                        e.runtime.tmp.list_form_checkout.unique();
                    for (
                        var y = function (t) {
                            -1 ==
                                [
                                    e.const.FORM_CONFIG_TYPE.sapo,
                                    e.const.FORM_CONFIG_TYPE.haravan,
                                    e.const.FORM_CONFIG_TYPE.shopify,
                                    e.const.FORM_CONFIG_TYPE.wordpress,
                                ].indexOf(e.runtime.shopping_product_type) &&
                                e.reloadPriceDiscount();
                        },
                        f = 0;
                        f < e.runtime.tmp.list_form_checkout.length;
                        f++
                    )
                        for (
                            var h = document.querySelectorAll(
                                "#" +
                                e.runtime.tmp.list_form_checkout[f] +
                                " .ladi-form-item input.ladi-form-control"
                            ),
                            v = 0;
                            v < h.length;
                            v++
                        )
                            -1 != t.indexOf(h[v].getAttribute("name")) &&
                                (h[v].addEventListener("change", y),
                                    h[v].addEventListener("input", y));
                })(),
                (function () {
                    m.forEach(function (t) {
                        var i = e.runtime.eventData[t];
                        if (!e.isEmpty(i["option.data_action"])) {
                            var a = document.getElementById(t);
                            if (
                                !e.isEmpty(a) &&
                                "true" != a.getAttribute("data-action") &&
                                i["option.data_action"].type == e.const.DATA_ACTION_TYPE.link
                            )
                                if (e.isEmpty(a.getAttribute("href")))
                                    a.removeAttribute("href");
                                else {
                                    var n = e.getLinkUTMRedirect(a.href, null);
                                    a.setAttribute("data-replace-href", n),
                                        (a.href = e.convertDataReplaceStr(n, !0));
                                }
                        }
                    });
                    for (
                        var t = document.querySelectorAll(
                            ".ladi-headline a[href], .ladi-paragraph a[href], .ladi-list-paragraph a[href]"
                        ),
                        i = 0;
                        i < t.length;
                        i++
                    )
                        if (e.isEmpty(t[i].getAttribute("href")))
                            t[i].removeAttribute("href");
                        else {
                            var a = e.getLinkUTMRedirect(t[i].href, null);
                            t[i].setAttribute("data-replace-href", a),
                                (t[i].href = e.convertDataReplaceStr(a, !0));
                        }
                })(),
                t &&
                (e.runtime.is_popupx ||
                    e.const.TIME_ONPAGE_TRACKING.forEach(function (t) {
                        e.runTimeout(function () {
                            e.isFunction(window.gtag) &&
                                window.gtag("event", "TimeOnPage_" + t + "_seconds", {
                                    event_category: "LadiPageTimeOnPage",
                                    event_label:
                                        window.location.host + window.location.pathname,
                                    non_interaction: !0,
                                }),
                                e.isFunction(window.fbq) &&
                                window.fbq("trackCustom", "TimeOnPage_" + t + "_seconds");
                        }, 1e3 * t);
                    })),
                m.forEach(function (t) {
                    var i = document.getElementById(t);
                    if (!e.isEmpty(i)) {
                        var a = e.runtime.eventData[t],
                            n = a["option.data_tooltip.text"];
                        if (!e.isEmpty(n)) {
                            var r =
                                a["option.data_tooltip.type"] || e.const.TOOLTIP_TYPE.default,
                                o =
                                    a["option.data_tooltip.position"] ||
                                    e.const.TOOLTIP_POSITION.top_middle,
                                s =
                                    a["option.data_tooltip.size"] || e.const.TOOLTIP_SIZE.medium;
                            i.setAttribute("data-hint", n);
                            var l = "hint";
                            o == e.const.TOOLTIP_POSITION.top_middle && (l += "-top-middle"),
                                o == e.const.TOOLTIP_POSITION.top_left && (l += "-top-left"),
                                o == e.const.TOOLTIP_POSITION.top_right && (l += "-top-right"),
                                o == e.const.TOOLTIP_POSITION.bottom_middle &&
                                (l += "-bottom-middle"),
                                o == e.const.TOOLTIP_POSITION.bottom_left &&
                                (l += "-bottom-left"),
                                o == e.const.TOOLTIP_POSITION.bottom_right &&
                                (l += "-bottom-right"),
                                o == e.const.TOOLTIP_POSITION.left_middle &&
                                (l += "-left-middle"),
                                o == e.const.TOOLTIP_POSITION.left_top && (l += "-left-top"),
                                o == e.const.TOOLTIP_POSITION.left_bottom &&
                                (l += "-left-bottom"),
                                o == e.const.TOOLTIP_POSITION.right_middle &&
                                (l += "-right-middle"),
                                o == e.const.TOOLTIP_POSITION.right_top && (l += "-right-top"),
                                o == e.const.TOOLTIP_POSITION.right_bottom &&
                                (l += "-right-bottom"),
                                r == e.const.TOOLTIP_TYPE.info && (l += "-t-info"),
                                r == e.const.TOOLTIP_TYPE.success && (l += "-t-success"),
                                r == e.const.TOOLTIP_TYPE.error && (l += "-t-error"),
                                r == e.const.TOOLTIP_TYPE.notice && (l += "-t-notice"),
                                s == e.const.TOOLTIP_SIZE.small && (l += "-s-small"),
                                s == e.const.TOOLTIP_SIZE.medium && (l += "-s-med"),
                                s == e.const.TOOLTIP_SIZE.big && (l += "-s-big"),
                                (l += "-hint-anim-d-short"),
                                i.classList.add(l);
                        }
                    }
                }),
                D(),
                (function () {
                    for (
                        var t = document.querySelectorAll(
                            ".ladi-button-group > .ladi-element"
                        ),
                        i = function (t) {
                            var i = e.findAncestor(t.target, "ladi-button");
                            (i = e.isEmpty(i)
                                ? t.target
                                : e.findAncestor(i, "ladi-element")).classList.add(
                                    "selected"
                                );
                            var a = e.findAncestor(t.target, "ladi-button-group");
                            if (!e.isEmpty(a))
                                for (
                                    var n = (a = e.findAncestor(
                                        a,
                                        "ladi-element"
                                    )).querySelectorAll(".ladi-button-group > .ladi-element"),
                                    r = 0;
                                    r < n.length;
                                    r++
                                )
                                    n[r].id != i.id && n[r].classList.remove("selected");
                        },
                        a = 0;
                        a < t.length;
                        a++
                    )
                        t[a].addEventListener("click", i);
                })(),
                (function () {
                    document.addEventListener("mouseleave", e.runEventMouseLeave),
                        document.addEventListener("mousemove", e.runEventMouseMove),
                        document.addEventListener(
                            "touchmove",
                            e.runEventMouseMove,
                            e.runtime.scrollEventPassive
                        ),
                        document.addEventListener("mouseup", e.runEventMouseUp),
                        document.addEventListener("touchend", e.runEventMouseUp);
                    var t = window;
                    e.isObject(e.runtime.story_page) &&
                        (t = document.getElementsByClassName("ladi-wraper")[0]),
                        t.addEventListener(
                            "scroll",
                            e.runEventScroll,
                            e.runtime.scrollEventPassive
                        ),
                        window.addEventListener("resize", e.runEventResize),
                        window.addEventListener(
                            "orientationchange",
                            e.runEventOrientationChange
                        ),
                        document
                            .getElementById(e.runtime.backdrop_popup_id)
                            .addEventListener("click", e.runEventBackdropClick);
                })(),
                e.reloadLazyload(!0),
                R(),
                e.setDataReplaceStart(),
                e.resetViewport(),
                e.runConversionApi(),
                e.runStoryPage(),
                t || e.runAfterLocation(),
                (e.runtime.list_loaded_func = e.runtime.list_loaded_func.concat(S)),
                "complete" === document.readyState ||
                    ("loading" !== document.readyState &&
                        !document.documentElement.doScroll)
                    ? e.documentLoaded()
                    : document.addEventListener("DOMContentLoaded", e.documentLoaded);
        };
        e.runtime.is_popupx
            ? ((e.runtime.tmp.popupx_iframe_id = e.randomId()),
                $({
                    ladipage_id: e.runtime.ladipage_id,
                    action: { type: "set_iframe_loaded" },
                }),
                window.addEventListener("message", function (t) {
                    try {
                        var i = JSON.parse(t.data);
                        "POPUPX" == i.type &&
                            i.iframe_id == e.runtime.tmp.popupx_iframe_id &&
                            i.action.value.forEach(function (t) {
                                !(function (t, i) {
                                    var a = null,
                                        n = null;
                                    if ("set_style_device" == t) {
                                        if (
                                            (rt(i.is_desktop),
                                                (n = document.getElementById(
                                                    e.runtime.tmp.popupx_current_element_id
                                                )),
                                                e.isEmpty(n))
                                        )
                                            return;
                                        "none" != getComputedStyle(n).display &&
                                            (e.runtime.tmp.popupx_is_inline
                                                ? nt(e.runtime.tmp.popupx_current_element_id, !1)
                                                : at(e.runtime.tmp.popupx_current_element_id, !1));
                                    }
                                    if ("set_iframe_info" == t) {
                                        e.isEmpty(_) &&
                                            ((_ = i.ladi_client_id || e.randomId()),
                                                window.ladi("LADI_CLIENT_ID").set_cookie(_, 3650)),
                                            (e.runtime.tmp.popupx_is_desktop = i.is_desktop),
                                            (e.runtime.isDesktop = i.is_desktop),
                                            (e.runtime.device = e.runtime.isDesktop
                                                ? e.const.DESKTOP
                                                : e.const.MOBILE),
                                            (e.runtime.tmp.popupx_origin_store_id =
                                                i.origin_store_id),
                                            (e.runtime.tmp.popupx_origin_referer = i.origin_referer),
                                            (e.runtime.tmp.popupx_origin_domain = i.origin_domain),
                                            (e.runtime.tmp.popupx_origin_url = i.origin_url),
                                            (e.runtime.tmp.popupx_is_inline = i.is_inline),
                                            rt(i.is_desktop);
                                        var r =
                                            "#" +
                                            e.runtime.builder_section_popup_id +
                                            " .ladi-container {width: 100% !important;}";
                                        e.runtime.tmp.popupx_is_inline &&
                                            (r +=
                                                ".ladi-section > .ladi-section-close {display: none !important;}"),
                                            e.createStyleElement("style_popup_container", r),
                                            (e.runtime.has_popupx = !0),
                                            ot();
                                    }
                                    "hide_popupx" == t &&
                                        ((a = e.runtime.eventData[i]),
                                            (n = document.getElementById(i)),
                                            e.isEmpty(a) || e.isEmpty(n) || window.ladi(i).hide()),
                                        "show_popupx" == t && at(i, !0),
                                        "show_popupx_inline_iframe" == t && nt(i, !0),
                                        "show_message_callback" == t &&
                                        (e.isFunction(
                                            e.runtime.tmp.popupx_show_message_callback
                                        ) && e.runtime.tmp.popupx_show_message_callback(),
                                            delete e.runtime.tmp.popupx_show_message_callback);
                                })(i.action.type, t);
                            });
                    } catch (t) { }
                }))
            : ot();
    }),
    (LadiPageScriptV2.prototype.equals = function (t, e) {
        return typeof t == typeof e && JSON.stringify(t) == JSON.stringify(e);
    }),
    (LadiPageScriptV2.prototype.copy = function (t) {
        return this.isNull(t) ? t : JSON.parse(JSON.stringify(t));
    }),
    (LadiPageScriptV2.prototype.showLoadingBlur = function () {
        var t = document.getElementsByClassName("ladi-loading")[0];
        this.isEmpty(t) &&
            (((t = document.createElement("div")).className = "ladi-loading"),
                (t.innerHTML =
                    "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"),
                document.body.appendChild(t));
    }),
    (LadiPageScriptV2.prototype.hideLoadingBlur = function () {
        var t = document.getElementsByClassName("ladi-loading")[0];
        this.isEmpty(t) || t.parentElement.removeChild(t);
    }),
    (LadiPageScriptV2.prototype.loadDataset = function () { }),
    (LadiPageScriptV2.prototype.postMessageWindow = function (t, e, i) {
        t.postMessage(JSON.stringify(e), i);
    }),
    (LadiPageScriptV2.prototype.updateHeightElement = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o
    ) {
        for (
            var s = this, l = [], d = [], c = e.parentElement.children, u = 0;
            u < c.length;
            u++
        )
            c[u].id != e.id &&
                c[u].classList.contains("ladi-element") &&
                d.push(c[u]);
        var p = "style_update_height_element";
        if (t) {
            var m =
                "#" +
                s.runtime.builder_section_popup_id +
                " > .ladi-container > .ladi-element { max-height: none !important;}";
            s.createStyleElement(p, m);
        }
        for (
            var _ = function (t) {
                var e = !s.isArray(o) || -1 != o.indexOf(t.id);
                if (
                    (e = e ? t.id != s.runtime.builder_section_popup_id : e) &&
                    "fixed" == getComputedStyle(t).position &&
                    (!t.classList.contains("ladi-element") ||
                        0 == t.getElementsByClassName("ladi-popup").length) &&
                    ((e = !1), t.classList.contains("ladi-section"))
                ) {
                    var i = s.runtime.eventData[t.id],
                        a = s.runtime.isDesktop ? s.const.DESKTOP : s.const.MOBILE;
                    s.isEmpty(i) ||
                        i[a + ".option.sticky_position"] != s.const.POSITION_TYPE.top ||
                        (e = !0);
                }
                return e;
            },
            g = n - a,
            y = parseFloatLadiPage(getComputedStyle(e).top) || 0,
            f = function (t) {
                s.runTimeout(function () {
                    t.classList.remove("transition-parent-collapse-top");
                }, 1e3 * parseFloatLadiPage(getComputedStyle(t).transitionDuration));
            },
            h = 0;
            h < d.length;
            h++
        )
            if (_(d[h])) {
                var v = parseFloatLadiPage(getComputedStyle(d[h]).top) || 0;
                v >= y + a &&
                    (r && (d[h].classList.add("transition-parent-collapse-top"), f(d[h])),
                        d[h].style.setProperty(
                            "top",
                            (parseFloatLadiPage(v + g) || 0) + "px"
                        ),
                        l.push(d[h].id));
            }
        var E = 0,
            P = 0;
        if (
            (!this.isEmpty(i) &&
                0 != g &&
                _(i) &&
                ((E = parseFloatLadiPage(getComputedStyle(i).height) || 0),
                    (P = parseFloatLadiPage(E + g) || 0),
                    r &&
                    (i.classList.add("transition-parent-collapse-height"),
                        s.runTimeout(function () {
                            i.classList.remove("transition-parent-collapse-height");
                        }, 1e3 * parseFloatLadiPage(getComputedStyle(i).transitionDuration))),
                    i.style.setProperty("height", P + "px"),
                    l.push(i.id)),
                E != P)
        ) {
            var L = this.findAncestor(i.parentElement, "ladi-element");
            this.isEmpty(L) &&
                (L = this.findAncestor(i.parentElement, "ladi-section")),
                (l = l.concat(this.updateHeightElement(!1, i, L, E, P, r, o)));
        }
        if (t) {
            var A = document.getElementById(p);
            this.isEmpty(A) || A.parentElement.removeChild(A);
        }
        return l.unique();
    }),
    (LadiPageScriptV2.prototype.showParentVisibility = function (t, e) {
        var i = this.findAncestor(t, "ladi-popup");
        if (
            !this.isEmpty(i) &&
            ((i = this.findAncestor(i, "ladi-element")), !this.isEmpty(i))
        )
            return (
                "none" == getComputedStyle(i).display &&
                i.classList.add("hide-visibility"),
                this.isFunction(e) && e(),
                void i.classList.remove("hide-visibility")
            );
        this.isFunction(e) && e();
    }),
    (LadiPageScriptV2.prototype.pauseAllVideo = function (t) {
        var e = document
            .getElementById(this.runtime.lightbox_screen_id)
            .getElementsByClassName("lightbox-close")[0];
        if (!this.isEmpty(e)) return e.click(), this.pauseAllVideo(t);
        delete this.runtime.tmp.gallery_playing_video;
        for (
            var i = (t = t || document).querySelectorAll(
                ".iframe-video-preload:not(.no-pause)"
            ),
            a = 0;
            a < i.length;
            a++
        )
            this.runEventReplayVideo(
                i[a].id,
                i[a].getAttribute("data-video-type"),
                !1
            );
    }),
    (LadiPageScriptV2.prototype.runEventReplayVideo = function (t, e, i) {
        var a = this,
            n = document.getElementById(t),
            r = null;
        if (!a.isEmpty(n)) {
            var o = document.getElementById(t + "_button_unmute"),
                s = a.isEmpty(o);
            if (e == a.const.VIDEO_TYPE.youtube) {
                r = i ? "playVideo" : "pauseVideo";
                var l = !1;
                if (a.runtime.isYouTubeIframeAPIReady) {
                    var d = window.YT.get(t);
                    if (!a.isEmpty(d)) {
                        if (
                            (s && i && a.isFunction(d.unMute) && d.unMute(),
                                !s && i && a.isFunction(d.mute) && d.mute(),
                                !a.isFunction(d[r]))
                        )
                            return void a.runTimeout(function () {
                                a.runEventReplayVideo(t, e, i);
                            }, 100);
                        d[r](), (l = !0);
                    }
                }
                l ||
                    (s &&
                        i &&
                        a.postMessageWindow(
                            n.contentWindow,
                            { event: "command", func: "unMute", args: [] },
                            "*"
                        ),
                        !s &&
                        i &&
                        a.postMessageWindow(
                            n.contentWindow,
                            { event: "command", func: "mute", args: [] },
                            "*"
                        ),
                        a.postMessageWindow(
                            n.contentWindow,
                            { event: "command", func: r, args: [] },
                            "*"
                        ));
            }
            e == a.const.VIDEO_TYPE.direct &&
                ((r = i ? "play" : "pause"),
                    s && i && (n.muted = !1),
                    !s && i && (n.muted = !0),
                    a.isFunction(n[r]) && n[r]()),
                i
                    ? (n.classList.remove("ladi-hidden"),
                        a.isEmpty(o) || o.style.removeProperty("display"))
                    : (n.classList.add("ladi-hidden"),
                        a.isEmpty(o) || o.style.setProperty("display", "none"));
        }
    }),
    (LadiPageScriptV2.prototype.runEventPlayVideo = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o,
        s,
        l,
        d
    ) {
        var c = this,
            u = c.runtime.isVideoButtonUnmute;
        (c.runtime.isDesktop || o || s || n || a) && (u = !1);
        var p = function (t, i) {
            if (u && !t.hasAttribute("data-remove-button-unmute")) {
                var a = t.id + "_button_unmute",
                    n = document.getElementById(a);
                c.isEmpty(n) &&
                    (((n = document.createElement("div")).id = a),
                        (n.innerHTML = "<div></div>"),
                        (n.className = "button-unmute ladi-hidden"),
                        n.addEventListener("click", function (i) {
                            if (
                                (i.stopPropagation(),
                                    (t = document.getElementById(t.id)),
                                    e == c.const.VIDEO_TYPE.youtube)
                            ) {
                                var a = !1;
                                if (c.runtime.isYouTubeIframeAPIReady) {
                                    var r = window.YT.get(t.id);
                                    !c.isEmpty(r) &&
                                        c.isFunction(r.unMute) &&
                                        (r.unMute(), (a = !0));
                                }
                                a ||
                                    c.postMessageWindow(
                                        t.contentWindow,
                                        { event: "command", func: "unMute", args: [] },
                                        "*"
                                    );
                            }
                            e == c.const.VIDEO_TYPE.direct && (t.muted = !1),
                                n.parentElement.removeChild(n),
                                t.setAttribute("data-remove-button-unmute", !0);
                        }),
                        t.parentElement.appendChild(n)),
                    i && n.classList.remove("ladi-hidden");
                var r = c.findAncestor(t, "lightbox-screen");
                c.isEmpty(r) ||
                    (n.style.setProperty("width", getComputedStyle(t).width),
                        n.style.setProperty("height", getComputedStyle(t).height));
            }
        },
            m = document.getElementById(t);
        if (!c.isEmpty(m)) {
            var _ = c.findAncestor(m, "ladi-video");
            c.isEmpty(_) || (_ = c.findAncestor(_, "ladi-element")),
                !a ||
                r ||
                c.isEmpty(_) ||
                (_.classList.add("pointer-events-none"), m.classList.add("no-pause")),
                o && m.classList.add("ladi-hidden");
            var g = "";
            if (!c.isEmpty(_)) {
                var y = _.getElementsByClassName("ladi-video-background")[0];
                if (!c.isEmpty(y)) {
                    var f = getComputedStyle(y).backgroundImage;
                    f.toLowerCase().startsWith('url("') &&
                        f.toLowerCase().endsWith('")') &&
                        ((f = (f = f.substr('url("'.length)).substr(
                            0,
                            f.length - '")'.length
                        )),
                            c.isEmpty(f) || (g = f));
                }
            }
            if (e == c.const.VIDEO_TYPE.youtube) {
                var h = c.getVideoId(e, i),
                    v = function () {
                        try {
                            if (
                                ((c.runtime.isLoadYouTubeIframeAPI &&
                                    c.runtime.isYouTubeIframeAPIReady) ||
                                    !c.isObject(window.YT) ||
                                    !c.isFunction(window.YT.Player) ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0),
                                        (c.runtime.isYouTubeIframeAPIReady = !0)),
                                    c.runtime.isLoadYouTubeIframeAPI ||
                                    ((c.runtime.isLoadYouTubeIframeAPI = !0),
                                        (window.onYouTubeIframeAPIReady = function () {
                                            c.runtime.isYouTubeIframeAPIReady = !0;
                                            for (; c.runtime.list_youtube_ready_exec.length > 0;)
                                                c.runtime.list_youtube_ready_exec.shift()();
                                        }),
                                        c.loadScript("//www.youtube.com/iframe_api")),
                                    !c.runtime.isYouTubeIframeAPIReady)
                            )
                                return void c.runtime.list_youtube_ready_exec.push(v);
                            (m.outerHTML = m.outerHTML
                                .replaceAll("<iframe", "<div")
                                .replaceAll("</iframe>", "</div>")),
                                (m = document.getElementById(t)),
                                n && m.classList.add("opacity-0");
                            var e = function () {
                                n &&
                                    (m = document.getElementById(t)).classList.remove(
                                        "opacity-0"
                                    );
                            },
                                i = e,
                                _ = function (e) {
                                    m = document.getElementById(t);
                                    var i = window.YT.get(t);
                                    c.isEmpty(i) || c.isEmpty(m)
                                        ? c.runTimeout(_, 100)
                                        : (c.runResizeAll(),
                                            a || u ? i.mute() : i.unMute(),
                                            o || s || i.playVideo(),
                                            c.isFunction(d) && d(),
                                            p(m));
                                };
                            new window.YT.Player(t, {
                                videoId: h,
                                playerVars: {
                                    rel: 0,
                                    modestbranding: 0,
                                    playsinline: n || a || l || u ? 1 : 0,
                                    controls: !n && r ? 1 : 0,
                                },
                                events: {
                                    onReady: _,
                                    onStateChange: function (i) {
                                        if (i.data == window.YT.PlayerState.PLAYING) {
                                            if (((m = document.getElementById(t)), n)) {
                                                var a = function () {
                                                    window.YT.get(t).getCurrentTime() >= 0.1
                                                        ? e()
                                                        : c.runTimeout(a, 100);
                                                };
                                                a();
                                            }
                                            p(m, !0);
                                            var r = document.getElementById(t + "_button_unmute");
                                            c.isEmpty(r) || window.YT.get(t).mute();
                                        }
                                        i.data == window.YT.PlayerState.ENDED &&
                                            window.YT.get(t).playVideo();
                                    },
                                    onError: i,
                                },
                            });
                        } catch (t) { }
                    };
                v();
            }
            if (e == c.const.VIDEO_TYPE.direct) {
                c.isEmpty(g) || m.setAttribute("poster", g),
                    m.setAttribute("preload", "auto"),
                    m.setAttribute("controlslist", "nodownload"),
                    m.setAttribute("loop", ""),
                    o || s || m.setAttribute("autoplay", ""),
                    (n || a || l || u) &&
                    (m.setAttribute("playsinline", ""),
                        m.setAttribute("webkit-playsinline", "")),
                    !n && r && m.setAttribute("controls", ""),
                    a || u ? m.setAttribute("muted", "") : m.removeAttribute("muted"),
                    n && m.classList.add("opacity-0");
                var E = function () {
                    n && (m = document.getElementById(t)).classList.remove("opacity-0");
                };
                m.removeAttribute("src"),
                    m.setAttribute("data-src", i),
                    (m.outerHTML = m.outerHTML.replaceAll("data-src=", "src=")),
                    (m = document.getElementById(t)),
                    c.isFunction(d) && d(m),
                    m.addEventListener("loadedmetadata", function (t) {
                        p(m);
                    }),
                    m.addEventListener("error", E),
                    m.addEventListener("playing", function (t) {
                        if (n) {
                            var e = function () {
                                m.currentTime >= 0.1 ? E() : c.runTimeout(e, 100);
                            };
                            e();
                        }
                        p(m, !0);
                        var i = document.getElementById(m.id + "_button_unmute");
                        c.isEmpty(i) || (m.muted = !0);
                    });
            }
        }
    }),
    (LadiPageScriptV2.prototype.playVideo = function (t, e, i, a, n, r) {
        var o = document.getElementById(t);
        if (!this.isEmpty(o)) {
            var s = document.getElementById(t + "_player");
            if ((r || n || this.pauseAllVideo(), this.isEmpty(s))) {
                var l = o.getElementsByClassName("ladi-video")[0],
                    d = t + "_player";
                e == this.const.VIDEO_TYPE.youtube &&
                    ((l.innerHTML =
                        l.innerHTML +
                        '<iframe id="' +
                        d +
                        '" class="iframe-video-preload" data-video-type="' +
                        e +
                        '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),
                        this.runEventPlayVideo(d, e, i, n, !1, a, r)),
                    e == this.const.VIDEO_TYPE.direct &&
                    ((l.innerHTML =
                        l.innerHTML +
                        '<video id="' +
                        d +
                        '" class="iframe-video-preload" data-video-type="' +
                        e +
                        '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; object-fit: cover;"></video>'),
                        this.runEventPlayVideo(d, e, i, n, !1, a, r));
            } else this.runEventReplayVideo(s.id, e, !0);
        }
    }),
    (LadiPageScriptV2.prototype.checkResizeImage = function (t) {
        var e = [".jpg", ".jpeg", ".png"],
            i = function (t) {
                for (var i = !1, a = 0; a < e.length; a++)
                    if (t.endsWith(e[a])) {
                        i = !0;
                        break;
                    }
                return i;
            };
        if (!i(t.toLowerCase())) {
            var a = this.getElementAHref(t, !0);
            return (a.search = ""), i(a.href);
        }
        return !0;
    }),
    (LadiPageScriptV2.prototype.getOptimizeImage = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o
    ) {
        if (this.isEmpty(t) || !this.isString(t)) return t;
        var s = t.split("/"),
            l = s.indexOf("");
        if (
            (-1 != l && s.length > l + 1 && (s[l + 1] = s[l + 1].toLowerCase()),
                (l = s.indexOf(this.const.STATIC_W_DOMAIN.toLowerCase())),
                this.checkResizeImage(t) &&
                -1 != l &&
                (s.length == l + 3 ||
                    (s.length == l + 6 && "ls" == s[3] && "product" == s[5]) ||
                    (s.length == l + 4 && "luid" == s[3] && "avatar" == s[4]) ||
                    (s.length == l + 4 && "rbg" == s[4])))
        ) {
            var d = s[l + 1].toLowerCase(),
                c = !0;
            if (d.startsWith("s")) {
                var u = d.split("x");
                2 == u.length && parseFloatLadiPage(u[1]) == u[1] && (c = !1);
            }
            if (c) {
                if (o || n) {
                    if (((e = parseInt(e) || 0), (i = parseInt(i) || 0), a)) {
                        var p =
                            this.const.RESIZE_RANGE +
                            (r
                                ? this.const.RESIZE_ADD_PIXEL_THUMB
                                : this.const.RESIZE_ADD_PIXEL);
                        (e <= 0 || i <= 0) && (p *= 2),
                            (e = e - (e % this.const.RESIZE_RANGE) + p),
                            (i = i - (i % this.const.RESIZE_RANGE) + p);
                    }
                } else
                    (e = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]),
                        (i = this.const.WIDTH_SECTION_RESIZE[LadiPage.data.device_screen]);
                s.insert(l + 1, "s" + e + "x" + i);
            }
        }
        return (t = s.join("/"));
    }),
    (LadiPageScriptV2.prototype.historyReplaceState = function (t) {
        try {
            window.history.replaceState(null, null, t);
        } catch (t) { }
    }),
    (LadiPageScriptV2.prototype.resetViewport = function () {
        this.isEmpty(this.runtime.tmp.timeoutViewport) ||
            this.removeTimeout(this.runtime.tmp.timeoutViewport),
            this.isFunction(window.ladi_viewport) &&
            (this.runtime.tmp.timeoutViewport = this.runTimeout(
                window.ladi_viewport,
                10
            ));
    }),
    (LadiPageScriptV2.prototype.runStoryPage = function () {
        var t = this,
            e = t.runtime.story_page;
        if (this.isObject(e)) {
            var i = document.getElementsByClassName("ladi-wraper")[0];
            if (!this.isEmpty(i)) {
                var a = document.getElementsByClassName(
                    "ladi-story-page-progress-bar"
                )[0];
                this.isEmpty(a) || a.parentElement.removeChild(a);
                var n = document.querySelectorAll(
                    '.ladi-section:not([id="' +
                    this.runtime.builder_section_popup_id +
                    '"]):not([id="' +
                    this.runtime.builder_section_background_id +
                    '"])'
                );
                if (0 != n.length) {
                    (a = document.createElement("div")).className =
                        "ladi-story-page-progress-bar";
                    for (
                        var r = null,
                        o =
                            (n[0],
                                function (e, i) {
                                    e.addEventListener("click", function (e) {
                                        e.stopPropagation(),
                                            t.removeTimeout(t.runtime.tmp.story_page_next_timeout_id),
                                            window.ladi(i.id, i).scroll();
                                    });
                                }),
                        s = 0;
                        s < n.length;
                        s++
                    ) {
                        var l = document.createElement("div");
                        (l.className = "ladi-story-page-progress-bar-item"),
                            l.style.setProperty(
                                "width",
                                "calc(100% / " + n.length + " - 10px)"
                            ),
                            o(l, n[s]),
                            a.appendChild(l),
                            0 == s && (r = l);
                    }
                    i.appendChild(a),
                        (t.runtime.tmp.story_page_mouse_down = !1),
                        (t.runtime.tmp.story_page_current_page = 1);
                    var d = function (i, a) {
                        if (!t.isEmpty(i)) {
                            a && i.click();
                            for (var n = i; !t.isEmpty(n.previousElementSibling);)
                                (n = n.previousElementSibling).classList.add("active");
                            for (var r = i; !t.isEmpty(r.nextElementSibling);)
                                (r = r.nextElementSibling).classList.remove("active");
                            i.classList.remove("active");
                            var o = i.parentElement.getElementsByTagName("span")[0];
                            t.isEmpty(o) || o.parentElement.removeChild(o),
                                (o = document.createElement("span")),
                                i.appendChild(o),
                                e.is_autoplay || o.style.setProperty("width", "100%");
                        }
                    },
                        c = function () {
                            if (e.is_autoplay) {
                                var i = 300,
                                    a = null;
                                if (
                                    t.isEmpty(t.runtime.tmp.current_default_popup_id) &&
                                    !t.runtime.tmp.story_page_mouse_down &&
                                    !t.runtime.tmp.story_page_scroll &&
                                    ((a = document.querySelector(
                                        ".ladi-story-page-progress-bar-item span"
                                    )),
                                        !t.isEmpty(a))
                                ) {
                                    var n =
                                        parseFloatLadiPage(a.style.getPropertyValue("width")) || 0;
                                    (n =
                                        (n =
                                            (((n = (1e3 * e.autoplay_time) / (100 / n)) + i) /
                                                (1e3 * e.autoplay_time)) *
                                            100) > 100
                                            ? 100
                                            : n),
                                        a.style.setProperty("width", n + "%"),
                                        n >= 100 &&
                                        ((t.runtime.tmp.story_page_next_timeout_id = t.runTimeout(
                                            function () {
                                                t.isEmpty(a.parentElement) ||
                                                    d(a.parentElement.nextElementSibling, !0);
                                            },
                                            i
                                        )),
                                            (i *= 2));
                                }
                                t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, i);
                            }
                        };
                    d(r, !1),
                        (t.runtime.tmp.story_page_timeout_id = t.runTimeout(c, 300)),
                        document.addEventListener("mousedown", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !0;
                        }),
                        document.addEventListener(
                            "touchstart",
                            function (e) {
                                t.runtime.tmp.story_page_mouse_down = !0;
                            },
                            t.runtime.scrollEventPassive
                        ),
                        document.addEventListener("mouseup", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !1;
                        }),
                        document.addEventListener("touchend", function (e) {
                            t.runtime.tmp.story_page_mouse_down = !1;
                        }),
                        i.addEventListener(
                            "scroll",
                            function (a) {
                                t.isEmpty(t.runtime.tmp.current_default_popup_id) &&
                                    ((t.runtime.tmp.story_page_scroll = !0),
                                        t.removeTimeout(t.runtime.tmp.story_page_scroll_timeout_id),
                                        t.removeTimeout(t.runtime.tmp.story_page_timeout_id),
                                        (t.runtime.tmp.story_page_scroll_timeout_id = t.runTimeout(
                                            function () {
                                                var a = 0,
                                                    n =
                                                        e.type == t.const.STORY_PAGE.horizontal
                                                            ? i.scrollLeft / i.clientWidth
                                                            : i.scrollTop / i.clientHeight;
                                                if (
                                                    (n = Math.floor(n + 1.5)) !=
                                                    t.runtime.tmp.story_page_current_page
                                                ) {
                                                    t.runtime.tmp.story_page_current_page = n;
                                                    var r = document.querySelector(
                                                        ".ladi-story-page-progress-bar-item:nth-child(" +
                                                        n +
                                                        ")"
                                                    );
                                                    t.removeTimeout(
                                                        t.runtime.tmp.story_page_next_timeout_id
                                                    ),
                                                        d(r, !1),
                                                        (a = 100);
                                                }
                                                (t.runtime.tmp.story_page_scroll = !1),
                                                    delete t.runtime.tmp.story_page_scroll_timeout_id,
                                                    (t.runtime.tmp.story_page_timeout_id = t.runTimeout(
                                                        c,
                                                        a
                                                    ));
                                            },
                                            300
                                        )));
                            },
                            t.runtime.scrollEventPassive
                        );
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.runResizeSectionBackground = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        try {
            for (
                var e = document.querySelectorAll(
                    ".ladi-section .ladi-section-background iframe.ladi-section-background-video"
                ),
                i = 0;
                i < e.length;
                i++
            ) {
                var a = e[i],
                    n = parseFloatLadiPage(a.getAttribute("width")) || 0,
                    r = parseFloatLadiPage(a.getAttribute("height")) || 0;
                if (!(n <= 0 || r <= 0)) {
                    var o = t.findAncestor(a, "ladi-section-background"),
                        s = o.clientWidth,
                        l = (r / n) * s;
                    l < o.clientHeight &&
                        ((s = (o.clientHeight / l) * s), (l = o.clientHeight));
                    var d = (o.clientHeight - l) / 2,
                        c = (o.clientWidth - s) / 2;
                    a.style.setProperty("top", (parseFloatLadiPage(d) || 0) + "px"),
                        a.style.setProperty("left", (parseFloatLadiPage(c) || 0) + "px"),
                        a.style.setProperty("width", (parseFloatLadiPage(s) || 0) + "px"),
                        a.style.setProperty("height", (parseFloatLadiPage(l) || 0) + "px");
                }
            }
        } catch (t) { }
    }),
    (LadiPageScriptV2.prototype.runResizeAll = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        try {
            t.isFunction(window.ladi_viewport) && window.ladi_viewport(),
                t.runtime.tmp.generateCart();
            for (
                var e = document.querySelectorAll(
                    "#" +
                    t.runtime.builder_section_popup_id +
                    " .ladi-container > .ladi-element"
                ),
                i = 0;
                i < e.length;
                i++
            )
                "none" != getComputedStyle(e[i]).display &&
                    window.ladi(e[i].id).show(!0);
            t.runResizeSectionBackground();
        } catch (t) { }
    }),
    (LadiPageScriptV2.prototype.runEventResize = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            e.isEmpty(e.runtime.tmp.timeoutResizeAll) ||
            e.removeTimeout(e.runtime.tmp.timeoutResizeAll),
            (e.runtime.tmp.timeoutResizeAll = e.runTimeout(e.runResizeAll, 10));
    }),
    (LadiPageScriptV2.prototype.runEventOrientationChange = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript), e.runEventResize(t);
    }),
    (LadiPageScriptV2.prototype.runAfterLocation = function () {
        var t = this;
        for (
            t instanceof LadiPageScriptV2 || (t = LadiPageScript);
            t.runtime.tmp.runAfterLocation.length > 0;

        ) {
            t.runtime.tmp.runAfterLocation.shift()();
        }
        t.reloadFeeShipping();
    }),
    (LadiPageScriptV2.prototype.randomId = function () {
        var t = Date.now(),
            e =
                (window.performance &&
                    window.performance.now &&
                    1e3 * window.performance.now()) ||
                0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (i) {
                var a = 16 * Math.random();
                return (
                    t > 0
                        ? ((a = (t + a) % 16 | 0), (t = Math.floor(t / 16)))
                        : ((a = (e + a) % 16 | 0), (e = Math.floor(e / 16))),
                    ("x" === i ? a : (3 & a) | 8).toString(16)
                );
            }
        );
    }),
    (LadiPageScriptV2.prototype.removeLazyloadPopup = function (t) {
        var e = document.getElementById(t);
        if (!this.isEmpty(e))
            for (var i = e.getElementsByClassName("ladi-lazyload"); i.length > 0;)
                i[0].classList.remove("ladi-lazyload");
    }),
    (LadiPageScriptV2.prototype.reloadLazyload = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        var i = [];
        if (t && e.isObject(e.runtime.story_page)) {
            var a = document.getElementsByClassName("ladi-section")[0];
            if (!e.isEmpty(a))
                for (i = a.getElementsByClassName("ladi-lazyload"); i.length > 0;)
                    i[0].classList.remove("ladi-lazyload");
        } else {
            i = document.getElementsByClassName("ladi-lazyload");
            for (var n = [], r = 0; r < i.length; r++) {
                var o = e.getElementBoundingClientRect(i[r]).y + window.scrollY;
                window.scrollY + e.getHeightDevice() > o &&
                    o + i[r].offsetHeight > window.scrollY &&
                    n.push(i[r]);
            }
            n.forEach(function (t) {
                t.classList.remove("ladi-lazyload");
            });
            for (
                var s = document.querySelectorAll(
                    ".ladi-gallery .ladi-gallery-view-item.selected:not(.ladi-lazyload)"
                ),
                l = 0;
                l < s.length;
                l++
            )
                if (e.isEmpty(s[l].getAttribute("data-lazyload"))) {
                    s[l].setAttribute("data-lazyload", !0);
                    for (
                        var d = s[l].parentElement.getElementsByClassName("ladi-lazyload");
                        d.length > 0;

                    )
                        d[0].classList.remove("ladi-lazyload");
                }
        }
    }),
    (LadiPageScriptV2.prototype.documentLoaded = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        var e = t.getURLSearchParams(null, null, !0),
            i = e.ladishow,
            a = e.ladihide,
            n = e.laditop,
            r = window.location.hash;
        t.isEmpty(i) ? (i = []) : t.isArray(i) || (i = i.split(",").removeSpace()),
            t.isEmpty(a)
                ? (a = [])
                : t.isArray(a) || (a = a.split(",").removeSpace()),
            t.isEmpty(n)
                ? (n = [])
                : t.isArray(n) || (n = n.split(",").removeSpace().reverse());
        try {
            var o = window.ladi("LADI_CAMP_END_DATE").get_cookie(),
                s = window.ladi("LADI_CAMP_CONFIG").get_cookie();
            if (!t.isEmpty(o) && !t.isEmpty(s)) {
                s = JSON.parse(Base64.decode(s));
                var l = ((o = parseInt(o) || 0) - Date.now()) / 24 / 60 / 60 / 1e3;
                if (l > 0 && t.isArray(s.dynamic_content.cookie)) {
                    var d = [];
                    s.dynamic_content.cookie.forEach(function (e) {
                        var i = e.split("=");
                        2 != (i = i.removeSpace()).length ||
                            t.isEmpty(i[0]) ||
                            t.isEmpty(i[1]) ||
                            d.push({ name: i[0], value: i[1] });
                    }),
                        d.forEach(function (t) {
                            window.ladi(t.name).set_cookie(t.value, l);
                        });
                }
                (a = s.dynamic_content.hide || []),
                    (i = s.dynamic_content.show || []),
                    (n = s.dynamic_content.top || []),
                    t.isArray(s.dynamic_content.scroll) &&
                    s.dynamic_content.scroll.length > 0 &&
                    (r = "#" + s.dynamic_content.scroll.pop());
            }
        } catch (t) { }
        if (
            (a.forEach(function (t) {
                window.ladi(t).hide();
            }),
                i.forEach(function (t) {
                    window.ladi(t).show();
                }),
                n.forEach(function (t) {
                    window.ladi(t).top();
                }),
                !t.isEmpty(r))
        )
            try {
                var c = document.querySelector(r);
                t.isEmpty(c) ||
                    t.isEmpty(c.id) ||
                    t.runTimeout(function () {
                        window.ladi(c.id).scroll();
                    }, 300);
            } catch (t) { }
        if (
            (t.resetViewport(),
                t.runEventScroll(),
                !t.isEmpty(t.runtime.tracking_global_url))
        ) {
            var u = !1,
                p = window;
            t.isObject(t.runtime.story_page) &&
                (p = document.getElementsByClassName("ladi-wraper")[0]);
            var m = function () {
                u ||
                    ((u = !0),
                        t.loadScript(t.runtime.tracking_global_url + "?v=" + Date.now()),
                        p.removeEventListener("scroll", m),
                        document.removeEventListener("mousemove", m),
                        document.removeEventListener("touchstart", m));
            };
            p.addEventListener("scroll", m, t.runtime.scrollEventPassive),
                document.addEventListener("mousemove", m),
                document.addEventListener(
                    "touchstart",
                    m,
                    t.runtime.scrollEventPassive
                ),
                t.runTimeout(m, t.runtime.tracking_global_delay);
        }
        for (; t.runtime.list_loaded_func.length > 0;) {
            t.runtime.list_loaded_func.shift()();
        }
    }),
    (LadiPageScriptV2.prototype.runConversionApi = function (t, e, i) {
        !this.isEmpty(t) &&
            !this.isEmpty(e) &&
            this.isObject(window.ladi_conversion_api) &&
            this.isObject(window.ladi_conversion_api[t]) &&
            (window.ladi_conversion_api[t][e] = i);
        if (
            this.isObject(window.ladi_conversion_api) &&
            this.isObject(window.ladi_conversion_api.facebook) &&
            this.isArray(window.ladi_conversion_api.facebook.pixels) &&
            this.isArray(window.ladi_conversion_api.facebook.events)
        ) {
            (window.ladi_conversion_api.facebook.pixels =
                window.ladi_conversion_api.facebook.pixels.unique()),
                (window.ladi_conversion_api.facebook.fbc = window
                    .ladi("_fbc")
                    .get_cookie()),
                (window.ladi_conversion_api.facebook.fbp = window
                    .ladi("_fbp")
                    .get_cookie());
            for (
                var a = 0;
                a < window.ladi_conversion_api.facebook.events.length;
                a++
            ) {
                var n = window.ladi_conversion_api.facebook.events[a].data;
                (n.event_id = n.eventID),
                    delete n.eventID,
                    (window.ladi_conversion_api.facebook.events[a].data = n);
            }
            this.runtime.tmp.runTrackingAnalytics("ConversionApi", {
                data: window.ladi_conversion_api,
            }),
                delete window.ladi_conversion_api.facebook.fbc,
                delete window.ladi_conversion_api.facebook.fbp,
                delete window.ladi_conversion_api.facebook.events;
        }
    }),
    (LadiPageScriptV2.prototype.getWidthDevice = function () {
        if (this.runtime.isMobileOnly) {
            var t = document.getElementsByClassName("ladi-wraper")[0];
            if (!this.isEmpty(t)) return t.clientWidth;
        }
        var e = window.ladi_screen_width || window.screen.width;
        return window.outerWidth > 0 ? window.outerWidth : e;
    }),
    (LadiPageScriptV2.prototype.getHeightDevice = function (t) {
        return window.outerHeight > 0 &&
            !this.runtime.isDesktop &&
            ((t && window.outerHeight > window.innerHeight) ||
                (!t && window.innerHeight > window.outerHeight))
            ? window.outerHeight
            : window.innerHeight;
    }),
    (LadiPageScriptV2.prototype.startAutoScroll = function (t, e, i, a) {
        if (this.runtime.isDesktop ? i : a) {
            var n = document.getElementById(t);
            if (!this.isEmpty(n) && !n.classList.contains("ladi-auto-scroll")) {
                var r = 0;
                if ("section" != e) {
                    if (n.clientWidth <= this.getWidthDevice()) return;
                    r =
                        (r = parseFloatLadiPage(getComputedStyle(n).left) || 0) > 0
                            ? 0
                            : -1 * r;
                } else {
                    for (
                        var o = n.querySelectorAll(".ladi-container > .ladi-element"),
                        s = 0;
                        s < o.length;
                        s++
                    ) {
                        var l = parseFloatLadiPage(getComputedStyle(o[s]).left) || 0;
                        l < r && (r = l);
                    }
                    (r = r > 0 ? 0 : -1 * r),
                        n
                            .querySelector(".ladi-container")
                            .style.setProperty("margin-left", r + "px");
                }
                n.classList.add("ladi-auto-scroll"), (n.scrollLeft = r);
            }
        }
    }),
    (LadiPageScriptV2.prototype.getLinkUTMRedirect = function (t, e) {
        var i = this.createTmpElement("a", "", { href: t }),
            a = this.getURLSearchParams(e, null, !1),
            n = a.utm_source;
        if (!this.isEmpty(n)) {
            n = "utm_source=" + encodeURIComponent(n);
            var r = a.utm_medium,
                o = a.utm_campaign,
                s = a.utm_term,
                l = a.utm_content;
            this.isEmpty(r) || (n += "&utm_medium=" + encodeURIComponent(r)),
                this.isEmpty(o) || (n += "&utm_campaign=" + encodeURIComponent(o)),
                this.isEmpty(s) || (n += "&utm_term=" + encodeURIComponent(s)),
                this.isEmpty(l) || (n += "&utm_content=" + encodeURIComponent(l)),
                this.isEmpty(i.href) ||
                this.isEmpty(i.host) ||
                !this.isEmpty(this.getURLSearchParams(i.search, "utm_source", !1)) ||
                (i.search = i.search + (this.isEmpty(i.search) ? "?" : "&") + n);
        }
        return i.href;
    }),
    (LadiPageScriptV2.prototype.randomInt = function (t, e) {
        return (
            (t = Math.ceil(t)),
            (e = Math.floor(e)),
            Math.floor(Math.random() * (e - t + 1)) + t
        );
    }),
    (LadiPageScriptV2.prototype.randomString = function (t) {
        for (
            var e = "",
            i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            a = i.length,
            n = 0;
            n < t;
            n++
        )
            e += i.charAt(Math.floor(Math.random() * a));
        return e;
    }),
    (LadiPageScriptV2.prototype.runCallback = function (t, e) {
        if (this.isFunction(e)) {
            var i = this;
            if (t) {
                var a = i.runInterval(function () {
                    i.removeInterval(a), i.runCallback(!1, e);
                }, 0);
                return;
            }
            e();
        }
    }),
    (LadiPageScriptV2.prototype.runTimeout = function (t, e) {
        if (this.isFunction(t)) {
            if (!this.isEmpty(e) && e > 0) return setTimeout(t, e);
            t();
        }
    }),
    (LadiPageScriptV2.prototype.removeTimeout = function (t) {
        return clearTimeout(t);
    }),
    (LadiPageScriptV2.prototype.removeInterval = function (t) {
        return clearInterval(t);
    }),
    (LadiPageScriptV2.prototype.runInterval = function (t, e) {
        if (this.isFunction(t)) return setInterval(t, e);
    }),
    (LadiPageScriptV2.prototype.getURLSearchParams = function (t, e, i) {
        var a = this,
            n = {},
            r = this.isNull(t);
        if (((t = r ? window.location.search : t), !this.isEmpty(t)))
            for (var o = t.substr(1).split("&"), s = 0; s < o.length; ++s) {
                var l = o[s].split("=", 2);
                this.isNull(n[l[0]])
                    ? 1 == l.length
                        ? (n[l[0]] = "")
                        : (n[l[0]] = decodeURIComponentLadiPage(l[1].replace(/\+/g, " ")))
                    : i &&
                    (this.isArray(n[l[0]]) || (n[l[0]] = [n[l[0]]]),
                        1 == l.length
                            ? n[l[0]].push("")
                            : n[l[0]].push(
                                decodeURIComponentLadiPage(l[1].replace(/\+/g, " "))
                            ));
            }
        return (
            r &&
            ["email", "phone"].forEach(function (t) {
                try {
                    var e = n[t];
                    if (!a.isEmpty(e)) {
                        var i = Base64.decode(e);
                        e == Base64.encode(i) && (n[t] = i);
                    }
                } catch (t) { }
            }),
            this.isEmpty(e) ? n : n[e]
        );
    }),
    (LadiPageScriptV2.prototype.getVideoId = function (t, e) {
        if (this.isEmpty(e)) return e;
        if (t == this.const.VIDEO_TYPE.youtube) {
            var i = this.createTmpElement("a", "", { href: e });
            -1 != e.toLowerCase().indexOf("watch")
                ? (e = this.getURLSearchParams(i.search, "v", !1))
                : -1 != e.toLowerCase().indexOf("embed/")
                    ? (e = i.pathname.substring("/embed/".length))
                    : -1 != e.toLowerCase().indexOf("youtu.be") &&
                    (e = i.pathname.substring("/".length));
        }
        return e;
    }),
    (LadiPageScriptV2.prototype.sendRequest = function (t, e, i, a, n, r) {
        this.sendRequestWithOption(t, e, i, a, n, null, r);
    }),
    (LadiPageScriptV2.prototype.sendRequestWithOption = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o
    ) {
        var s = new XMLHttpRequest();
        try {
            this.isFunction(o) &&
                (s.onreadystatechange = function () {
                    var t = null;
                    try {
                        t = s.responseText;
                    } catch (t) { }
                    o(t, s.status, s, e);
                }),
                s.open(t, e, a);
            this.isObject(n) &&
                Object.keys(n).forEach(function (t) {
                    s.setRequestHeader(t, n[t]);
                }),
                this.isObject(r) &&
                Object.keys(r).forEach(function (t) {
                    s[t] = r[t];
                }),
                s.send(i);
        } catch (t) {
            this.isFunction(o) && o(t, 0, s, e);
        }
    }),
    (LadiPageScriptV2.prototype.deleteCookie = function (t) {
        return window.ladi(t).delete_cookie();
    }),
    (LadiPageScriptV2.prototype.setCookie = function (t, e, i, a, n, r) {
        return window.ladi(e).set_cookie(i, a, r, t, n);
    }),
    (LadiPageScriptV2.prototype.getCookie = function (t) {
        return window.ladi(t).get_cookie();
    }),
    (LadiPageScriptV2.prototype.removeSticky = function () {
        var t = this;
        t instanceof LadiPageScriptV2 || (t = LadiPageScript);
        for (
            var e = document.querySelectorAll('[data-sticky="true"]'), i = 0;
            i < e.length;
            i++
        )
            e[i].removeAttribute("data-top"),
                e[i].removeAttribute("data-left"),
                e[i].style.removeProperty("top"),
                e[i].style.removeProperty("left"),
                e[i].style.removeProperty("width"),
                e[i].style.removeProperty("position"),
                e[i].style.removeProperty("z-index");
        t.runEventScroll();
    }),
    (LadiPageScriptV2.prototype.runEventBackdropClick = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        for (
            var i = null,
            a = document.querySelectorAll('[data-popup-backdrop="true"]'),
            n = 0;
            n < a.length;
            n++
        )
            "none" != getComputedStyle(a[n]).display && (i = a[n].id);
        if (!e.isEmpty(i)) {
            var r = document.querySelector("#" + i + " .popup-close");
            if (!e.isEmpty(r) && "none" == getComputedStyle(r).display) return;
        }
        e.runRemovePopup(i, e.runtime.isClient);
    }),
    (LadiPageScriptV2.prototype.runEventMouseMove = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            (t = e.getEventCursorData(t));
        var i = null,
            a = 0,
            n = 0,
            r = 0;
        e.isEmpty(e.runtime.current_element_mouse_down_carousel) ||
            ((i = document.getElementById(
                e.runtime.current_element_mouse_down_carousel
            )),
                (a = t.pageX - e.runtime.current_element_mouse_down_carousel_position_x),
                (n =
                    parseFloatLadiPage(
                        i
                            .getElementsByClassName("ladi-carousel-content")[0]
                            .getAttribute("data-left")
                    ) || 0),
                (n += a) <
                (r = -(
                    (parseFloatLadiPage(
                        e.runtime.eventData[e.runtime.current_element_mouse_down_carousel][
                        e.runtime.device + ".option.carousel_crop.width"
                        ]
                    ) || 0) - i.clientWidth
                )) && (n = r),
                n > 0 && (n = 0),
                i
                    .getElementsByClassName("ladi-carousel-content")[0]
                    .style.setProperty("left", n + "px"));
        if (!e.isEmpty(e.runtime.current_element_mouse_down_gallery_view)) {
            (i = document.querySelector(
                '[data-runtime-id="' +
                e.runtime.current_element_mouse_down_gallery_view +
                '"]'
            )),
                (a =
                    t.pageX -
                    e.runtime.current_element_mouse_down_gallery_view_position_x);
            var o = parseFloatLadiPage(i.getAttribute("data-current")) || 0;
            o == (parseFloatLadiPage(i.getAttribute("data-max-item")) || 0) - 1 &&
                a < 0 &&
                (a = 0),
                a > 0 && 0 == o && (a = 0),
                a >= e.runtime.current_element_mouse_down_gallery_view_diff
                    ? ((e.runtime.current_element_mouse_down_gallery_view = null),
                        (e.runtime.current_element_mouse_down_gallery_view_position_x = 0),
                        i.getElementsByClassName("ladi-gallery-view-arrow-left")[0].click())
                    : a <= -e.runtime.current_element_mouse_down_gallery_view_diff
                        ? ((e.runtime.current_element_mouse_down_gallery_view = null),
                            (e.runtime.current_element_mouse_down_gallery_view_position_x = 0),
                            i
                                .getElementsByClassName("ladi-gallery-view-arrow-right")[0]
                                .click())
                        : i.querySelectorAll(".ladi-gallery-view-item.selected").length > 0 &&
                        i
                            .querySelectorAll(".ladi-gallery-view-item.selected")[0]
                            .style.setProperty("left", a + "px");
        }
        e.isEmpty(e.runtime.current_element_mouse_down_gallery_control) ||
            ((i = document.querySelector(
                '[data-runtime-id="' +
                e.runtime.current_element_mouse_down_gallery_control +
                '"]'
            )),
                (a =
                    t.pageX -
                    e.runtime.current_element_mouse_down_gallery_control_position_x),
                (n =
                    parseFloatLadiPage(
                        i
                            .getElementsByClassName("ladi-gallery-control-box")[0]
                            .getAttribute("data-left")
                    ) || 0),
                (n += a) <
                (r =
                    (parseFloatLadiPage(
                        getComputedStyle(
                            i.getElementsByClassName("ladi-gallery-control")[0]
                        ).width
                    ) || 0) -
                    (parseFloatLadiPage(
                        getComputedStyle(
                            i.getElementsByClassName("ladi-gallery-control-box")[0]
                        ).width
                    ) || 0)) && (n = r),
                n > 0 && (n = 0),
                i
                    .getElementsByClassName("ladi-gallery-control-box")[0]
                    .style.setProperty("left", n + "px"));
    }),
    (LadiPageScriptV2.prototype.runEventMouseUp = function (t) {
        t.stopPropagation();
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            (t = e.getEventCursorData(t));
        var i = null,
            a = 0;
        if (!e.isEmpty(e.runtime.current_element_mouse_down_carousel)) {
            delete e.runtime.timenext_carousel[
                e.runtime.current_element_mouse_down_carousel
            ],
                (a =
                    t.pageX - e.runtime.current_element_mouse_down_carousel_position_x);
            var n = (i = document.getElementById(
                e.runtime.current_element_mouse_down_carousel
            ))
                .getElementsByClassName("ladi-carousel-content")[0]
                .getAttribute("data-left");
            i
                .getElementsByClassName("ladi-carousel-content")[0]
                .removeAttribute("data-left"),
                i
                    .getElementsByClassName("ladi-carousel-content")[0]
                    .style.removeProperty("transition-duration"),
                (e.runtime.current_element_mouse_down_carousel = null),
                a >= e.runtime.current_element_mouse_down_carousel_diff
                    ? i.getElementsByClassName("ladi-carousel-arrow-left")[0].click()
                    : a <= -e.runtime.current_element_mouse_down_carousel_diff
                        ? i.getElementsByClassName("ladi-carousel-arrow-right")[0].click()
                        : i.getElementsByClassName("ladi-carousel-content").length > 0 &&
                        (i
                            .getElementsByClassName("ladi-carousel-content")[0]
                            .style.setProperty("transition-duration", "100ms"),
                            i
                                .getElementsByClassName("ladi-carousel-content")[0]
                                .style.setProperty("left", n),
                            e.runTimeout(function () {
                                i.getElementsByClassName(
                                    "ladi-carousel-content"
                                )[0].style.removeProperty("transition-duration");
                            }, 1));
        }
        if (
            (e.isEmpty(e.runtime.current_element_mouse_down_gallery_view) ||
                ((i = document.querySelector(
                    '[data-runtime-id="' +
                    e.runtime.current_element_mouse_down_gallery_view +
                    '"]'
                )).querySelectorAll(".ladi-gallery-view-item.selected").length > 0 &&
                    i
                        .querySelectorAll(".ladi-gallery-view-item.selected")[0]
                        .style.removeProperty("left")),
                !e.isEmpty(e.runtime.current_element_mouse_down_gallery_control))
        )
            if (
                ((i = document.querySelector(
                    '[data-runtime-id="' +
                    e.runtime.current_element_mouse_down_gallery_control +
                    '"]'
                ))
                    .getElementsByClassName("ladi-gallery-control-box")[0]
                    .removeAttribute("data-left"),
                    i
                        .getElementsByClassName("ladi-gallery-control-box")[0]
                        .style.removeProperty("transition-duration"),
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-left")[0]
                        .classList.remove("opacity-0"),
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                        .classList.remove("opacity-0"),
                    i
                        .getElementsByClassName("ladi-gallery")[0]
                        .classList.contains("ladi-gallery-top") ||
                    i
                        .getElementsByClassName("ladi-gallery")[0]
                        .classList.contains("ladi-gallery-bottom"))
            ) {
                var r =
                    parseFloatLadiPage(
                        i
                            .getElementsByClassName("ladi-gallery-control-box")[0]
                            .style.getPropertyValue("left")
                    ) || 0,
                    o =
                        parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control-box")[0]
                            ).width
                        ) || 0;
                (o =
                    (o = -(o -=
                        parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control")[0]
                            ).width
                        ) || 0)) > 0
                        ? 0
                        : o),
                    r > 0 && (r = 0),
                    r >= 0 &&
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-left")[0]
                        .classList.add("opacity-0"),
                    r <= o &&
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                        .classList.add("opacity-0");
            } else {
                var s =
                    parseFloatLadiPage(
                        i
                            .getElementsByClassName("ladi-gallery-control-box")[0]
                            .style.getPropertyValue("top")
                    ) || 0,
                    l =
                        parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control-box")[0]
                            ).height
                        ) || 0;
                (l =
                    (l = -(l -=
                        parseFloatLadiPage(
                            getComputedStyle(
                                i.getElementsByClassName("ladi-gallery-control")[0]
                            ).height
                        ) || 0)) > 0
                        ? 0
                        : l),
                    s > 0 && (s = 0),
                    s >= 0 &&
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-left")[0]
                        .classList.add("opacity-0"),
                    s <= l &&
                    i
                        .getElementsByClassName("ladi-gallery-control-arrow-right")[0]
                        .classList.add("opacity-0");
            }
        (e.runtime.current_element_mouse_down_carousel_position_x = 0),
            (e.runtime.current_element_mouse_down_gallery_view = null),
            (e.runtime.current_element_mouse_down_gallery_view_position_x = 0);
        var d = 0;
        e.runtime.current_element_mouse_down_gallery_control_time +
            e.runtime.current_element_mouse_down_gallery_control_time_click <
            Date.now() && (d = 5),
            e.runTimeout(function () {
                (e.runtime.current_element_mouse_down_gallery_control = null),
                    (e.runtime.current_element_mouse_down_gallery_control_time = 0),
                    (e.runtime.current_element_mouse_down_gallery_control_position_x = 0);
            }, d);
    }),
    (LadiPageScriptV2.prototype.runEventMouseLeave = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript),
            Object.keys(e.runtime.eventData).forEach(function (t) {
                var i = e.runtime.eventData[t];
                if ("popup" == i.type && i["option.show_popup_exit_page"]) {
                    if (
                        (e.isObject(e.runtime.tmp.popup_leave_show) ||
                            (e.runtime.tmp.popup_leave_show = {}),
                            e.runtime.tmp.popup_leave_show[t])
                    )
                        return;
                    (e.runtime.tmp.popup_leave_show[t] = !0), window.ladi(t).show();
                }
            });
    }),
    (LadiPageScriptV2.prototype.runEventScroll = function (t) {
        var e = this;
        if (
            (e instanceof LadiPageScriptV2 || (e = LadiPageScript),
                !e.isEmpty(e.runtime.eventData) && !e.runtime.tmp.is_run_show_popup)
        ) {
            for (
                var i = null,
                a = document.querySelectorAll('[data-popup-backdrop="true"]'),
                n = 0;
                n < a.length;
                n++
            )
                "none" != getComputedStyle(a[n]).display && (i = a[n].id);
            var r = [];
            if (!e.isEmpty(i))
                for (
                    var o = document.querySelectorAll("#" + i + " .ladi-element"), s = 0;
                    s < o.length;
                    s++
                )
                    r.push(o[s].id);
            if (
                (Object.keys(e.runtime.eventData).forEach(function (t) {
                    var a = e.runtime.eventData[t],
                        n = null,
                        o = null,
                        s = null,
                        l = Object.keys(e.runtime.list_scroll_func),
                        d = [];
                    d =
                        "gallery" == a.type
                            ? document.querySelectorAll("#" + t)
                            : [(s = document.getElementById(t))];
                    for (var c = 0; c < d.length; c++)
                        if (((s = d[c]), !e.isEmpty(s))) {
                            var u =
                                "gallery" == a.type
                                    ? s.getAttribute("data-runtime-id")
                                    : s.getAttribute("id");
                            if (-1 != l.indexOf(u)) {
                                var p = !1;
                                "section" == a.type
                                    ? ((n = s.offsetTop),
                                        ((window.scrollY >= n &&
                                            window.scrollY <= n + s.offsetHeight) ||
                                            (window.scrollY + e.getHeightDevice() >= n &&
                                                window.scrollY + e.getHeightDevice() <=
                                                n + s.offsetHeight) ||
                                            (n >= window.scrollY &&
                                                window.scrollY + e.getHeightDevice() >= n)) &&
                                        (p = !0))
                                    : ((n = e.getElementBoundingClientRect(s).y + window.scrollY),
                                        ((window.scrollY >= n &&
                                            window.scrollY <= n + s.offsetHeight) ||
                                            (window.scrollY + e.getHeightDevice(!0) >= n &&
                                                window.scrollY + e.getHeightDevice(!0) <=
                                                n + s.offsetHeight) ||
                                            (n >= window.scrollY &&
                                                window.scrollY + e.getHeightDevice(!0) >= n)) &&
                                        (p = !0)),
                                    p &&
                                    ((o = e.runtime.list_scroll_func[u]),
                                        delete e.runtime.list_scroll_func[u],
                                        o());
                            }
                        }
                    var m = a[e.runtime.device + ".style.animation-name"];
                    if (
                        !e.isEmpty(m) &&
                        ((s = document.getElementById(t)),
                            !e.isEmpty(s) && !s.classList.contains("ladi-animation"))
                    ) {
                        var _ =
                            parseFloatLadiPage(
                                a[e.runtime.device + ".style.animation-delay"]
                            ) || 0;
                        n = e.getElementBoundingClientRect(s).y + window.scrollY;
                        var g =
                            (window.scrollY >= n && window.scrollY <= n + s.offsetHeight) ||
                            (window.scrollY + e.getHeightDevice(!0) >= n &&
                                window.scrollY + e.getHeightDevice(!0) <= n + s.offsetHeight) ||
                            (n >= window.scrollY &&
                                window.scrollY + e.getHeightDevice(!0) >= n);
                        e.runtime.tmp.isFirstScroll &&
                            _ > 0 &&
                            !g &&
                            s.classList.add("ladi-animation-hidden"),
                            g &&
                            (s.classList.add("ladi-animation"),
                                e.runTimeout(function () {
                                    s.classList.remove("ladi-animation-hidden");
                                }, 1e3 * _));
                    }
                    if (e.isEmpty(i) || -1 != r.indexOf(t)) {
                        var y = null,
                            f = null,
                            h = null;
                        if (
                            (a[e.runtime.device + ".option.sticky"] &&
                                ((y = a[e.runtime.device + ".option.sticky_position"]),
                                    (f = parseFloatLadiPage(
                                        a[e.runtime.device + ".option.sticky_position_top"]
                                    )),
                                    (h = parseFloatLadiPage(
                                        a[e.runtime.device + ".option.sticky_position_bottom"]
                                    ))),
                                !e.runtime.has_popupx && !e.isEmpty(y))
                        ) {
                            var v = document.getElementById(t);
                            if (
                                !e.isEmpty(v) &&
                                v.clientWidth > 0 &&
                                v.clientHeight > 0 &&
                                -1 != ["default", "top", "bottom"].indexOf(y)
                            ) {
                                var E = e.getElementBoundingClientRect(v),
                                    P = v.getAttribute("data-top"),
                                    L = v.getAttribute("data-left");
                                e.isEmpty(P)
                                    ? (v.setAttribute("data-top", E.y + window.scrollY),
                                        (P = E.y))
                                    : (P = parseFloatLadiPage(P)),
                                    e.isEmpty(L)
                                        ? (v.setAttribute("data-left", E.x + window.scrollX),
                                            (L = E.x))
                                        : (L = parseFloatLadiPage(L));
                                var A = null,
                                    b = null;
                                if (
                                    ("default" == y &&
                                        (f > P - window.scrollY
                                            ? ((A = f + "px"), (b = L + "px"))
                                            : e.getHeightDevice() - h - v.clientHeight <
                                            P - window.scrollY &&
                                            ((A = "calc(100% - " + (h + v.clientHeight) + "px)"),
                                                (b = L + "px"))),
                                        "top" == y &&
                                        (f > P - window.scrollY ||
                                            e.getHeightDevice() - 0 < P - window.scrollY) &&
                                        ((A = f + "px"), (b = L + "px")),
                                        "bottom" == y &&
                                        (e.getHeightDevice() - h - v.clientHeight <
                                            P - window.scrollY ||
                                            0 > P + v.clientHeight - window.scrollY) &&
                                        ((A = "calc(100% - " + (h + v.clientHeight) + "px)"),
                                            (b = L + "px")),
                                        e.isEmpty(A) || e.isEmpty(b))
                                )
                                    v.style.removeProperty("top"),
                                        v.style.removeProperty("left"),
                                        v.style.removeProperty("width"),
                                        v.style.removeProperty("position"),
                                        v.style.removeProperty("z-index");
                                else if (
                                    (v.style.setProperty("top", A),
                                        v.style.setProperty("left", b),
                                        "section" == a.type &&
                                        (e.runtime.isMobileOnly
                                            ? v.style.setProperty(
                                                "width",
                                                document.getElementsByClassName("ladi-wraper")[0]
                                                    .clientWidth + "px"
                                            )
                                            : e.runtime.isDesktop &&
                                            v.style.setProperty("width", "100%")),
                                        v.style.setProperty("position", "fixed"),
                                        v.style.setProperty("z-index", "90000050"),
                                        !v.hasAttribute("data-sticky"))
                                ) {
                                    v.setAttribute("data-sticky", !0),
                                        v.classList.contains("ladi-animation-hidden") &&
                                        (v.classList.remove("ladi-animation-hidden"),
                                            v.classList.add("ladi-animation"));
                                    for (
                                        var w = v.getElementsByClassName("ladi-animation-hidden");
                                        w.length > 0;

                                    )
                                        w[0].classList.add("ladi-animation"),
                                            w[0].classList.remove("ladi-animation-hidden");
                                    v.classList.remove("ladi-lazyload");
                                    for (
                                        var S = v.getElementsByClassName("ladi-lazyload");
                                        S.length > 0;

                                    )
                                        S[0].classList.remove("ladi-lazyload");
                                }
                            }
                        }
                    }
                    if ("popup" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_show_popup[t])) return;
                        e.isEmpty(a["option.popup_welcome_page_scroll_to"]) ||
                            ((s = document.getElementById(
                                a["option.popup_welcome_page_scroll_to"]
                            )),
                                !e.isEmpty(s) &&
                                s.offsetHeight > 0 &&
                                ((n = s.offsetTop),
                                    ((window.scrollY >= n &&
                                        window.scrollY <= n + s.offsetHeight) ||
                                        (window.scrollY + e.getHeightDevice() >= n &&
                                            window.scrollY + e.getHeightDevice() <=
                                            n + s.offsetHeight) ||
                                        (n >= window.scrollY &&
                                            window.scrollY + e.getHeightDevice() >= n)) &&
                                    ((e.runtime.scroll_show_popup[t] = !0),
                                        window.ladi(t).show())));
                    }
                    if ("section" == a.type) {
                        if (!e.isEmpty(e.runtime.scroll_to_section[t])) return;
                        (s = document.getElementById(t)),
                            e.isEmpty(s) ||
                            ((n = s.offsetTop),
                                ((window.scrollY >= n &&
                                    window.scrollY <= n + s.offsetHeight) ||
                                    (window.scrollY + e.getHeightDevice() >= n &&
                                        window.scrollY + e.getHeightDevice() <=
                                        n + s.offsetHeight) ||
                                    (n >= window.scrollY &&
                                        window.scrollY + e.getHeightDevice() >= n)) &&
                                ((e.runtime.scroll_to_section[t] = !0),
                                    e.runEventTracking(t, !1)));
                    }
                }),
                    e.runtime.isClient)
            ) {
                if (e.runtime.is_popupx) return;
                for (
                    var l = Math.round(
                        ((window.scrollY + e.getHeightDevice()) /
                            document.body.clientHeight) *
                        100
                    ),
                    d = 1;
                    d < e.const.PERCENT_TRACKING_SCROLL.length;
                    d++
                )
                    l > e.const.PERCENT_TRACKING_SCROLL[d - 1] &&
                        l <= e.const.PERCENT_TRACKING_SCROLL[d] &&
                        -1 ==
                        e.runtime.scroll_depth.indexOf(
                            e.const.PERCENT_TRACKING_SCROLL[d]
                        ) &&
                        (e.runtime.scroll_depth.push(e.const.PERCENT_TRACKING_SCROLL[d]),
                            e.isFunction(window.gtag) &&
                            window.gtag(
                                "event",
                                "ScrollDepth_" +
                                e.const.PERCENT_TRACKING_SCROLL[d] +
                                "_percent",
                                {
                                    event_category: "LadiPageScrollDepth",
                                    event_label: window.location.host + window.location.pathname,
                                    non_interaction: !0,
                                }
                            ),
                            e.isFunction(window.fbq) &&
                            window.fbq(
                                "trackCustom",
                                "ScrollDepth_" + e.const.PERCENT_TRACKING_SCROLL[d] + "_percent"
                            ));
            }
            e.runtime.tmp.isFirstScroll = !1;
        }
    }),
    (LadiPageScriptV2.prototype.runRemovePopup = function (t, e, i, a, n) {
        var r = this,
            o = document.querySelectorAll(
                "#" +
                this.runtime.builder_section_popup_id +
                " .ladi-container > .ladi-element"
            ),
            s = !1,
            l = !1;
        e ||
            (LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilder(),
                LadiPagePlugin.getPlugin("popup").removeStyleShowPopupBuilderScroll());
        var d = function () {
            var t = document.getElementById("style_popup");
            r.isEmpty(t) || t.parentElement.removeChild(t);
        },
            c = [],
            u = 0;
        if (this.isEmpty(t)) for (u = 0; u < o.length; u++) c.push(o[u].id);
        else c.push(t);
        if (
            (c.forEach(function (t) {
                var i = document.getElementById(t);
                if (!r.isEmpty(i)) {
                    r.runtime.has_popupx &&
                        ("none" != getComputedStyle(i).display && (l = !0),
                            document.body.style.removeProperty("height"));
                    var a = parseFloatLadiPage(i.getAttribute("data-timeout-id")) || null;
                    r.removeTimeout(a),
                        i.removeAttribute("data-timeout-id"),
                        (a =
                            parseFloatLadiPage(i.getAttribute("data-timeout-id-2")) || null),
                        r.removeTimeout(a),
                        i.removeAttribute("data-timeout-id-2");
                    var n = i.getElementsByClassName("popup-close")[0];
                    if (
                        (r.isEmpty(n) ||
                            ((a =
                                parseFloatLadiPage(n.getAttribute("data-timeout-id")) || null),
                                r.removeTimeout(a),
                                n.removeAttribute("data-timeout-id")),
                            r.pauseAllVideo(i),
                            r.isEmpty(i.style.getPropertyValue("display")) || (s = !0),
                            i.style.removeProperty("display"),
                            i.style.removeProperty("z-index"),
                            i.hasAttribute("data-popup-backdrop"))
                    ) {
                        d(),
                            e &&
                            (r.isEmpty(r.runtime.tmp.bodyScrollY) ||
                                window.scrollTo(0, r.runtime.tmp.bodyScrollY)),
                            (r.runtime.tmp.bodyScrollY = null);
                        for (var c = 0; c < o.length; c++)
                            o[c].style.removeProperty("z-index");
                    }
                    i.removeAttribute("data-scroll"),
                        i.removeAttribute("data-fixed-close"),
                        i.style.removeProperty("overflow-y"),
                        i.style.removeProperty("overflow-x"),
                        i
                            .getElementsByClassName("ladi-popup")[0]
                            .style.removeProperty("height"),
                        i.style.removeProperty("max-height");
                }
            }),
                s && this.isFunction(i) && i(),
                a && d(),
                !n && l)
        ) {
            r.runtime.tmp.runActionPopupX({
                id: t,
                dimension: { display: "none" },
                action: { type: "set_iframe_dimension" },
            });
        }
        delete this.runtime.tmp.current_default_popup_id;
    }),
    (LadiPageScriptV2.prototype.runShowPopup = function (t, e, i, a, n, r) {
        var o = this;
        if (!o.isEmpty(e)) {
            var s = document.getElementById(e),
                l = null;
            if (
                !n ||
                (!o.isEmpty(s) &&
                    o.isObject(o.runtime.eventData) &&
                    !o.isEmpty(o.runtime.eventData[e]))
            ) {
                o.runtime.tmp.is_run_show_popup = !0;
                var d = 0,
                    c = "";
                n || LadiPagePlugin.getPlugin("popup").showStyleShowPopupBuilder(e),
                    n &&
                    ((i =
                        o.runtime.eventData[e][
                        o.runtime.device + ".option.popup_position"
                        ]),
                        (a =
                            o.runtime.eventData[e][
                            o.runtime.device + ".option.popup_backdrop"
                            ]));
                var u = function () {
                    if (!o.runtime.has_popupx && n) {
                        var t = window.scrollY;
                        if (!o.isEmpty(o.runtime.tmp.bodyScrollY)) {
                            var i = getComputedStyle(document.body);
                            "fixed" == i.position &&
                                (parseFloatLadiPage(i.top) || 0) ==
                                -1 * o.runtime.tmp.bodyScrollY &&
                                (t = o.runtime.tmp.bodyScrollY);
                        }
                        "block" != s.style.getPropertyValue("display") ||
                            o.isEmpty(o.runtime.tmp.bodyScrollY) ||
                            (t = o.runtime.tmp.bodyScrollY),
                            (c += "body {"),
                            (c += "position: fixed !important;"),
                            (c += "width: 100% !important;"),
                            (c += "top: -" + t + "px"),
                            (c += "}"),
                            (o.runtime.tmp.bodyScrollY = t),
                            (l = function () {
                                o.runtime.tmp.bodyScrollY = t;
                            });
                    }
                    for (
                        var a = document.querySelectorAll(
                            "#" +
                            o.runtime.builder_section_popup_id +
                            " .ladi-container > .ladi-element"
                        ),
                        r = 0;
                        r < a.length;
                        r++
                    )
                        a[r].id != e && a[r].style.setProperty("z-index", "1", "important");
                    d = 500;
                };
                i == o.const.POSITION_TYPE.default
                    ? ((c +=
                        "#" +
                        o.runtime.backdrop_popup_id +
                        " { display: block !important; " +
                        a +
                        "}"),
                        s.setAttribute("data-popup-backdrop", !0),
                        u(),
                        (this.runtime.tmp.current_default_popup_id = e))
                    : n ||
                    ((c +=
                        "#" +
                        o.runtime.backdrop_popup_id +
                        " { display: block !important;}"),
                        s.setAttribute("data-popup-backdrop", !0),
                        u());
                var p = "block" == s.style.getPropertyValue("display");
                if (
                    (o.isFunction(r) && !p && (r(), o.isFunction(l) && l()),
                        o.isArray(o.runtime.list_show_popup_func[e]))
                )
                    for (; o.runtime.list_show_popup_func[e].length > 0;) {
                        o.runtime.list_show_popup_func[e].shift()();
                    }
                var m = s.hasAttribute("data-scroll"),
                    _ = s.hasAttribute("data-fixed-close"),
                    g = !1,
                    y = s.getElementsByClassName("ladi-popup")[0],
                    f =
                        1e3 *
                        (parseFloatLadiPage(getComputedStyle(y).animationDuration) || 0),
                    h =
                        1e3 * (parseFloatLadiPage(getComputedStyle(y).animationDelay) || 0),
                    v = parseFloatLadiPage(s.getAttribute("data-timeout-id")) || null;
                o.removeTimeout(v),
                    (v = parseFloatLadiPage(s.getAttribute("data-timeout-id-2")) || null),
                    o.removeTimeout(v),
                    s.classList.add("ladi-animation-hidden"),
                    s.style.setProperty("display", "block", "important"),
                    (v = o.runTimeout(function () {
                        s.classList.remove("ladi-animation-hidden"),
                            s.removeAttribute("data-timeout-id");
                    }, h)),
                    o.isEmpty(v) || s.setAttribute("data-timeout-id", v),
                    t &&
                    (!m &&
                        s.clientHeight > 0.8 * o.getHeightDevice() &&
                        (n
                            ? o.runtime.has_popupx
                                ? (g = !0)
                                : (s.setAttribute("data-scroll", !0),
                                    s.style.setProperty("overflow-y", "auto", "important"),
                                    s.style.setProperty("overflow-x", "hidden", "important"),
                                    (m = !0))
                            : (_ = !0)),
                        o.runtime.has_popupx &&
                        (g
                            ? (s.setAttribute("data-fixed-close", !0),
                                document.body.style.setProperty(
                                    "height",
                                    s.clientHeight + "px"
                                ))
                            : document.body.style.removeProperty("height")),
                        m &&
                        n &&
                        (s
                            .getElementsByClassName("ladi-popup")[0]
                            .style.removeProperty("height"),
                            s.style.removeProperty("max-height"),
                            s
                                .getElementsByClassName("ladi-popup")[0]
                                .style.setProperty(
                                    "height",
                                    s.clientHeight + "px",
                                    "important"
                                ),
                            s.style.setProperty("max-height", "80vh"))),
                    !n &&
                    _ &&
                    LadiPagePlugin.getPlugin("popup").styleShowPopupBuilderScroll(e),
                    o.runtime.has_popupx &&
                    ((c +=
                        "#" +
                        o.runtime.backdrop_popup_id +
                        " { display: none !important;}"),
                        s.style.removeProperty("max-height"),
                        s.style.removeProperty("overflow-y"),
                        s.style.removeProperty("overflow-x")),
                    o.isEmpty(c) || o.createStyleElement("style_popup", c);
                var E = null;
                if (n && !o.isEmpty(s)) {
                    var P = s.getElementsByClassName("popup-close")[0];
                    o.isEmpty(P) &&
                        (((P = document.createElement("div")).className = "popup-close"),
                            s.appendChild(P),
                            P.addEventListener("click", function (t) {
                                t.stopPropagation(), o.runRemovePopup(e, n);
                            })),
                        (v = parseFloatLadiPage(P.getAttribute("data-timeout-id")) || null),
                        o.removeTimeout(v),
                        P.classList.add("opacity-0"),
                        o.runtime.has_popupx &&
                        o.runtime.tmp.popupx_is_inline &&
                        P.classList.add("ladi-hidden");
                    var L = function () {
                        var t = s.getElementsByClassName("popup-close")[0];
                        if (!o.isEmpty(t)) {
                            var e = o.getElementBoundingClientRect(s),
                                i = e.y,
                                a = window.innerWidth - e.x - e.width;
                            (m || g) && (a += o.runtime.widthScrollBar),
                                t.style.setProperty("right", a + "px"),
                                t.style.setProperty("top", i + "px"),
                                t.style.setProperty("position", "fixed");
                        }
                    };
                    (E = function () {
                        (v = o.runTimeout(function () {
                            L(),
                                P.classList.remove("opacity-0"),
                                P.removeAttribute("data-timeout-id");
                        }, f + h + 100)),
                            P.setAttribute("data-timeout-id", v);
                    }),
                        (m || g) &&
                        (s.hasAttribute("data-resize-scroll") ||
                            (s.setAttribute("data-resize-scroll", !0),
                                window.addEventListener("resize", L)));
                }
                n && !p && o.runEventTracking(e, !1);
                var A = function () {
                    (v = o.runTimeout(function () {
                        delete o.runtime.tmp.is_run_show_popup,
                            o.runEventScroll(),
                            o.isFunction(E) && E(),
                            s.removeAttribute("data-timeout-id-2");
                    }, d)),
                        o.isEmpty(v) || s.setAttribute("data-timeout-id-2", v);
                };
                if (t) A();
                else {
                    (v = o.runTimeout(function () {
                        "none" == getComputedStyle(s).display
                            ? ((d -= 100), A())
                            : o.runShowPopup(!0, e, i, a, n, r),
                            s.removeAttribute("data-timeout-id-2");
                    }, 100)),
                        s.setAttribute("data-timeout-id-2", v);
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.runEventTracking = function (t, e, i) {
        var a = this;
        if (this.runtime.isClient && !this.isEmpty(t)) {
            var n = a.runtime.eventData[t],
                r = n.type,
                o = null,
                s = null,
                l = null,
                d = null,
                c = null,
                u = a.runtime.currency;
            e && "form" == r
                ? ((o = n["option.form_conversion_name"]),
                    (s = n["option.form_google_ads_conversion"]),
                    (l = n["option.form_google_ads_label"]),
                    (d = n["option.form_event_custom_script"]),
                    (c = a.isEmpty(n["option.form_purchase_value"])
                        ? null
                        : parseFloatLadiPage(n["option.form_purchase_value"]) || 0),
                    a.runtime.shopping && (c = a.getCartCheckoutPrice(c)))
                : ((o = n["option.conversion_name"]),
                    (s = n["option.google_ads_conversion"]),
                    (l = n["option.google_ads_label"]),
                    (d = n["option.event_custom_script"]));
            var p = function (t) {
                var n = "trackCustom";
                -1 !=
                    [
                        "AddPaymentInfo",
                        "AddToCart",
                        "AddToWishlist",
                        "CompleteRegistration",
                        "Contact",
                        "CustomizeProduct",
                        "Donate",
                        "FindLocation",
                        "InitiateCheckout",
                        "Lead",
                        "PageView",
                        "Purchase",
                        "Schedule",
                        "Search",
                        "StartTrial",
                        "SubmitApplication",
                        "Subscribe",
                        "ViewContent",
                    ].indexOf(o) && (n = "track");
                var r = null,
                    s = null;
                if (
                    (a.isEmpty(c) ||
                        a.isEmpty(u) ||
                        (((r = {}).value = c), (r.currency = u)),
                        t)
                )
                    a.runtime.tmp.runActionPopupX({
                        fbq_track_name: n,
                        conversion_name: o,
                        fbq_data: r,
                        fbq_event_data: s,
                        action: { type: "run_tracking_fbq" },
                    });
                else {
                    if (
                        a.isObject(window.ladi_conversion_api) &&
                        a.isObject(window.ladi_conversion_api.facebook) &&
                        a.isArray(window.ladi_conversion_api.facebook.pixels)
                    ) {
                        s = {
                            eventID:
                                "ladi." +
                                Date.now() +
                                "." +
                                (Math.floor(9e10 * Math.random()) + 1e10),
                        };
                    }
                    if ((window.fbq(n, o, r, s), a.runtime.shopping && e)) {
                        var l = a.getCartProducts();
                        a.isNull(l) || (a.isObject(s) || (s = {}), (s.cart_products = l));
                    }
                }
                a.isObject(i) &&
                    (a.isObject(s) || (s = {}),
                        (s.email = i.email),
                        (s.phone = i.phone)),
                    t
                        ? a.runtime.tmp.runActionPopupX({
                            type: "facebook",
                            key: "events",
                            keyData: [{ key: n, name: o, custom_data: r, data: s }],
                            action: { type: "run_conversion_api" },
                        })
                        : a.runConversionApi("facebook", "events", [
                            { key: n, name: o, custom_data: r, data: s },
                        ]);
            },
                m = function (t) {
                    if (
                        (a.isEmpty(s) ||
                            a.isEmpty(l) ||
                            (t
                                ? a.runtime.tmp.runActionPopupX({
                                    conversion_name: "conversion",
                                    gtag_data: { send_to: "AW-" + s + "/" + l },
                                    action: { type: "run_tracking_gtag" },
                                })
                                : window.gtag("event", "conversion", {
                                    send_to: "AW-" + s + "/" + l,
                                })),
                            !a.isEmpty(o))
                    ) {
                        var e = "";
                        e =
                            "section" == r
                                ? "LadiPageSection"
                                : "popup" == r
                                    ? "LadiPagePopup"
                                    : "form" == r
                                        ? "LadiPageConversion"
                                        : "LadiPageClick";
                        var i = LadiPageApp[n.type + a.const.APP_RUNTIME_PREFIX];
                        if (!a.isEmpty(i)) {
                            var d = i(n, a.runtime.isClient);
                            a.isFunction(d.getEventTrackingCategory) &&
                                (e = i(n, a.runtime.isClient).getEventTrackingCategory());
                        }
                        var p = {
                            event_category: e,
                            event_label: window.location.host + window.location.pathname,
                        };
                        a.isEmpty(c) || a.isEmpty(u) || ((p.value = c), (p.currency = u)),
                            t
                                ? a.runtime.tmp.runActionPopupX({
                                    conversion_name: o,
                                    gtag_data: p,
                                    action: { type: "run_tracking_gtag" },
                                })
                                : window.gtag("event", o, p);
                    }
                };
            if (a.runtime.is_popupx)
                return (
                    p(!0),
                    m(!0),
                    void a.runtime.tmp.runActionPopupX({
                        script: d,
                        action: { type: "event_custom_script" },
                    })
                );
            a.isFunction(window.fbq) && !a.isEmpty(o) && p(),
                a.isFunction(window.gtag) && m(),
                a.isEmpty(d) || a.runFunctionString(d);
        }
    }),
    (LadiPageScriptV2.prototype.runFunctionString = function (t) {
        try {
            new Function(t)();
        } catch (t) { }
    }),
    (LadiPageScriptV2.prototype.loadCollectionData = function (t, e, i, a, n) {
        var r = this,
            o = e["option.product_type"],
            s = e["option.ladisale_store_id"],
            l = e["option.product_tag_id"],
            d = e["option.collection_setting.type"],
            c = r.runtime.eventData[t];
        if (!r.isEmpty(c) && "collection" == c.type) {
            var u = this.runtime.isDesktop ? this.const.DESKTOP : this.const.MOBILE,
                p = c[u + ".option.collection_setting.row"],
                m = c[u + ".option.collection_setting.column"],
                _ = function (t, e, i, a, n, o) {
                    if (
                        ((i = r.copy(i)),
                            Object.keys(a).forEach(function (t) {
                                i[t] = a[t];
                            }),
                            a["option.input_type"] == r.const.INPUT_TYPE.product_variant)
                    ) {
                        var s = r.generateVariantProduct(
                            i,
                            !0,
                            a["option.product_variant_type"],
                            a["option.product_variant_title"],
                            a["option.product_variant_price"],
                            a["option.input_tabindex"],
                            r.runtime.isClient,
                            !0,
                            function (r) {
                                _(t, e, i, a, n, o);
                            }
                        ),
                            l = function (e) {
                                r.updateProductVariantSelectOption(e, i, a, !1, function () {
                                    var i = r.getProductVariantId(e.target, n),
                                        a = n.variants.findIndex(function (t) {
                                            return t.product_variant_id == i;
                                        }),
                                        s = r.findAncestor(e.target, "ladi-element");
                                    if (!r.isEmpty(s)) {
                                        var l = r.findAncestor(s, "ladi-collection-item");
                                        if (!r.isEmpty(l))
                                            for (
                                                var d = l.querySelectorAll('[data-variant="true"]'),
                                                c = 0;
                                                c < d.length;
                                                c++
                                            )
                                                if (d[c].id != s.id) {
                                                    var u = r.runtime.eventData[d[c].id],
                                                        p = null,
                                                        m = null,
                                                        _ = null,
                                                        g = 0;
                                                    if (
                                                        u["option.product_variant_type"] ==
                                                        r.const.PRODUCT_VARIANT_TYPE.combobox &&
                                                        ((m = n.variants[a]),
                                                            r.isObject(m) && r.isString(m.option_ids))
                                                    )
                                                        for (
                                                            _ = m.option_ids.split("/"), g = 0;
                                                            g < _.length;
                                                            g++
                                                        )
                                                            (p = d[c].querySelector(
                                                                'select[data-product-option-id="' + _[g] + '"]'
                                                            )),
                                                                r.isEmpty(p) ||
                                                                (p.value = m["option" + (g + 1)]);
                                                    if (
                                                        u["option.product_variant_type"] ==
                                                        r.const.PRODUCT_VARIANT_TYPE.label &&
                                                        ((m = n.variants[a]),
                                                            r.isObject(m) && r.isString(m.option_ids))
                                                    )
                                                        for (
                                                            _ = m.option_ids.split("/"), g = 0;
                                                            g < _.length;
                                                            g++
                                                        )
                                                            (p = d[c].querySelector(
                                                                '.ladi-form-label-container[data-product-option-id="' +
                                                                _[g] +
                                                                '"]'
                                                            )),
                                                                r.isEmpty(p) ||
                                                                r.runtime.tmp.updateLabelValue(
                                                                    p,
                                                                    m["option" + (g + 1)]
                                                                );
                                                    if (
                                                        u["option.product_variant_type"] ==
                                                        r.const.PRODUCT_VARIANT_TYPE.combined
                                                    ) {
                                                        if (
                                                            ((p = d[c].querySelector(
                                                                "select.ladi-form-control"
                                                            )),
                                                                !r.isEmpty(i))
                                                        ) {
                                                            var y = p.querySelector(
                                                                'option[data-product-variant-id="' + i + '"]'
                                                            );
                                                            r.isEmpty(y) || (a = y.getAttribute("value"));
                                                        }
                                                        p.value = (-1 == a ? "" : a) + "";
                                                    }
                                                }
                                    }
                                    o(t, n, !1, i, !0, !0);
                                });
                            },
                            d = r.runtime.tmp.getOptionLabelValue,
                            c = r.runtime.tmp.updateLabelValue,
                            u = r.runtime.tmp.getLabelValue,
                            p = function (t) {
                                r.runtime.tmp.clickLabelProductChangeCallback(t, function (t) {
                                    l({ target: t });
                                });
                            };
                        r.showParentVisibility(e, function () {
                            for (
                                var t = e.clientHeight,
                                n = t,
                                o = e.querySelectorAll("select.ladi-form-control"),
                                m = {},
                                _ = 0;
                                _ < o.length;
                                _++
                            )
                                m[
                                    o[_].getAttribute("data-store-id") +
                                    "_" +
                                    o[_].getAttribute("data-product-id") +
                                    "_" +
                                    o[_].getAttribute("data-product-option-id")
                                ] = o[_].value;
                            var g = e.querySelectorAll(".ladi-form-label-container");
                            for (_ = 0; _ < g.length; _++)
                                m[
                                    g[_].getAttribute("data-store-id") +
                                    "_" +
                                    g[_].getAttribute("data-product-id") +
                                    "_" +
                                    g[_].getAttribute("data-product-option-id")
                                ] = u(g[_]);
                            e.innerHTML = s;
                            for (
                                var y = e.querySelectorAll("select.ladi-form-control"),
                                f = null,
                                h = null,
                                v = 0;
                                v < y.length;
                                v++
                            )
                                y[v].removeEventListener("change", l),
                                    y[v].addEventListener("change", l),
                                    (f =
                                        m[
                                        y[v].getAttribute("data-store-id") +
                                        "_" +
                                        y[v].getAttribute("data-product-id") +
                                        "_" +
                                        y[v].getAttribute("data-product-option-id")
                                        ]),
                                    r.isNull(f) &&
                                    ((h = y[v].querySelector("option")),
                                        r.isEmpty(h) || (f = h.getAttribute("value"))),
                                    (y[v].value = f);
                            var E = e.querySelectorAll(".ladi-form-label-container");
                            for (v = 0; v < E.length; v++) {
                                for (
                                    var P = E[v].querySelectorAll(".ladi-form-label-item"), L = 0;
                                    L < P.length;
                                    L++
                                )
                                    P[L].removeEventListener("click", p),
                                        P[L].addEventListener("click", p);
                                (f =
                                    m[
                                    E[v].getAttribute("data-store-id") +
                                    "_" +
                                    E[v].getAttribute("data-product-id") +
                                    "_" +
                                    E[v].getAttribute("data-product-option-id")
                                    ]),
                                    r.isNull(f) && ((h = P[1]), r.isEmpty(h) || (f = d(h))),
                                    c(E[v], f);
                            }
                            if (
                                (r.updateProductVariantSelectOptionFirst(i, a, e),
                                    a["option.product_variant_type"] !=
                                    r.const.PRODUCT_VARIANT_TYPE.combined &&
                                    (e.style.setProperty("height", "auto"),
                                        (n = e.clientHeight),
                                        e.style.removeProperty("height"),
                                        t != n))
                            ) {
                                e.style.setProperty("height", n + "px");
                                var A = r.findAncestor(e, "ladi-form");
                                r.isEmpty(A) ||
                                    ((A = r.findAncestor(A, "ladi-element")),
                                        r.updateHeightElement(!0, e, A, t, n));
                            }
                        });
                    }
                    if (a["option.input_type"] == r.const.INPUT_TYPE.number) {
                        var m = e.querySelector('input[name="quantity"]'),
                            g = function (t) {
                                if (!r.isEmpty(t.target.value)) {
                                    var e = r.generateVariantProduct(
                                        i,
                                        !1,
                                        null,
                                        null,
                                        null,
                                        null,
                                        !0,
                                        !0,
                                        function () {
                                            g(t);
                                        }
                                    );
                                    if (
                                        !(
                                            r.isEmpty(e) ||
                                            r.isEmpty(e.store_info) ||
                                            r.isEmpty(e.product)
                                        )
                                    ) {
                                        var a = t.target;
                                        a = (a = r.findAncestor(a, "ladi-form")).querySelector(
                                            '[data-variant="true"]'
                                        );
                                        var n = r.getProductVariantId(a, e.product),
                                            o = e.product.variants.findIndex(function (t) {
                                                return t.product_variant_id == n;
                                            });
                                        if (-1 != o) {
                                            var s = e.product.variants[o].quantity,
                                                l = e.product.variants[o].quantity_stock;
                                            s = r.isNull(l) ? s : l;
                                            var d = parseInt(t.target.value) || 0,
                                                c = 1;
                                            c = e.product.variants[o].min_buy || c;
                                            var u = e.product.variants[o].max_buy,
                                                p = 0,
                                                m = r.runtime.tmp.cart.findIndex(function (t) {
                                                    return (
                                                        t.product_id == e.product.variants[o].product_id &&
                                                        t.product_variant_id ==
                                                        e.product.variants[o].product_variant_id
                                                    );
                                                });
                                            -1 != m && (p = r.runtime.tmp.cart[m].quantity),
                                                c > d + p && (d = c - p),
                                                1 == e.product.variants[o].inventory_checked &&
                                                d + p > s &&
                                                (d = s - p),
                                                !r.isEmpty(u) && d + p > u && (d = u - p),
                                                (d = d < 1 ? 1 : d),
                                                t.target.setAttribute("min", c),
                                                r.isEmpty(u) || t.target.setAttribute("max", u),
                                                (t.target.value = d);
                                        }
                                    }
                                }
                            };
                        m.addEventListener("input", g), r.fireEvent(m, "input");
                        var y = e.querySelectorAll("button")[0],
                            f = e.querySelectorAll("button")[1];
                        if (r.isEmpty(y) || r.isEmpty(f)) return;
                        y.addEventListener("click", function (t) {
                            (m.value = (parseFloatLadiPage(m.value) || 0) - 1),
                                r.fireEvent(m, "input");
                        }),
                            f.addEventListener("click", function (t) {
                                (m.value = (parseFloatLadiPage(m.value) || 0) + 1),
                                    r.fireEvent(m, "input");
                            });
                    }
                    if (
                        "button" == a.type &&
                        (a["option.is_buy_now"] || a["option.is_add_to_cart"])
                    ) {
                        var h = function () {
                            r.isObject(i["option.data_action"]) &&
                                (i["option.data_action"].type ==
                                    r.const.DATA_ACTION_TYPE.popup_cart &&
                                    (window.ladi("POPUP_CART").show(),
                                        r.runEventTracking(e.id, !1)),
                                    i["option.data_action"].type ==
                                    r.const.DATA_ACTION_TYPE.popup_checkout &&
                                    (r.runtime.shopping_third_party
                                        ? r.getThirdPartyCheckoutUrl(!0)
                                        : window.ladi("POPUP_CHECKOUT").show(),
                                        r.runEventTracking(e.id, !1)));
                        };
                        e.setAttribute("data-click", !1),
                            e.addEventListener("click", function (t) {
                                r.runtime.tmp.buttonAddToCartClick(t, !0, i, h);
                            });
                    }
                },
                g = function (t, e, i, a, n, o) {
                    var s = !r.isEmpty(e["option.product_mapping_name"]),
                        l = JSON.stringify(e),
                        d = null,
                        c = null;
                    if (s)
                        if (a && r.isEmpty(i)) d = "";
                        else if (
                            !r.isEmpty(e["option.product_id"]) &&
                            l ===
                            (d = (c = r.generateProductKey(
                                !0,
                                l,
                                !0,
                                e,
                                !0,
                                i,
                                null,
                                function (r) {
                                    g(t, e, i, a, n, o);
                                }
                            )).value)
                        )
                            return;
                    var u = e.type,
                        p = null,
                        m = null;
                    if (
                        (s &&
                            "headline" == u &&
                            ((m = t.getElementsByClassName("ladi-headline")[0]),
                                r.isEmpty(m) || (m.innerHTML = r.isNull(d) ? "" : d)),
                            s &&
                            "paragraph" == u &&
                            ((m = t.getElementsByClassName("ladi-paragraph")[0]),
                                r.isEmpty(m) || (m.innerHTML = r.isNull(d) ? "" : d)),
                            s && "image" == u)
                    ) {
                        p = r.getOptimizeImage(
                            d,
                            t.clientWidth,
                            t.clientHeight,
                            !0,
                            !1,
                            !1,
                            !0
                        );
                        var _ = t.getElementsByClassName("ladi-image-background")[0];
                        r.isEmpty(_) ||
                            (r.isEmpty(p)
                                ? _.style.setProperty("background-image", "none")
                                : _.style.setProperty("background-image", 'url("' + p + '")'));
                    }
                    if ("gallery" == u) {
                        if (s && !r.isArray(d)) return;
                        if (o && !n && "true" == t.getAttribute("data-collection"))
                            return void r.runtime.tmp.updateImageGalleryProduct(t, c, e);
                        t.setAttribute("data-collection", !0),
                            t.removeAttribute("data-stop"),
                            t.removeAttribute("data-loaded"),
                            t.removeAttribute("data-scrolled"),
                            t.removeAttribute("data-current"),
                            t.removeAttribute("data-is-next"),
                            t.removeAttribute("data-runtime-id"),
                            t.removeAttribute("data-next-time");
                        var y = t.querySelector(".ladi-gallery-view-item.selected");
                        r.isEmpty(y) || y.classList.remove("selected");
                        var f = t.querySelector(".ladi-gallery-control-item.selected");
                        r.isEmpty(f) || f.classList.remove("selected");
                        var h = t.getElementsByClassName("ladi-gallery-view")[0];
                        (f = t.getElementsByClassName("ladi-gallery-control-item")[0]),
                            (y = t.getElementsByClassName("ladi-gallery-view-item")[0]),
                            r.isEmpty(y) || y.classList.add("selected"),
                            r.isEmpty(f) || f.classList.add("selected");
                        var v = t.getElementsByClassName("ladi-gallery-control-box")[0];
                        if ((r.isEmpty(v) || v.style.removeProperty("left"), s)) {
                            for (
                                var E = t.getElementsByClassName("ladi-gallery-view-item");
                                E.length < d.length;

                            ) {
                                var P = r.createTmpElement(
                                    "div",
                                    '<div class="ladi-gallery-view-item" data-index="' +
                                    E.length +
                                    '"></div>',
                                    null,
                                    !0
                                );
                                t.getElementsByClassName("ladi-gallery-view")[0].appendChild(P);
                            }
                            for (; E.length > d.length;)
                                E[E.length - 1].parentElement.removeChild(E[E.length - 1]);
                            for (
                                var L = t.getElementsByClassName("ladi-gallery-control-item"),
                                A = function (e) {
                                    r.runtime.tmp.eventClickGalleryControlItem(e, t);
                                };
                                L.length < d.length;

                            ) {
                                var b = r.createTmpElement(
                                    "div",
                                    '<div class="ladi-gallery-control-item" data-index="' +
                                    L.length +
                                    '"></div>',
                                    null,
                                    !0
                                );
                                b.addEventListener("click", A),
                                    t
                                        .getElementsByClassName("ladi-gallery-control-box")[0]
                                        .appendChild(b);
                            }
                            for (; L.length > d.length;)
                                L[L.length - 1].parentElement.removeChild(L[L.length - 1]);
                            for (
                                var w = t.querySelectorAll(
                                    ".ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow"
                                ),
                                S = 0;
                                S < w.length;
                                S++
                            )
                                d.length <= 1
                                    ? w[S].style.setProperty("display", "none")
                                    : w[S].style.removeProperty("display");
                            for (
                                w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-control"),
                                S = 0;
                                S < w.length;
                                S++
                            )
                                d.length <= 1
                                    ? w[S].style.setProperty("display", "none")
                                    : w[S].style.removeProperty("display");
                            for (
                                w = t.querySelectorAll(".ladi-gallery > .ladi-gallery-view"),
                                S = 0;
                                S < w.length;
                                S++
                            )
                                d.length <= 1
                                    ? w[S].style.setProperty("height", "100%")
                                    : w[S].style.removeProperty("height");
                            d.forEach(function (e, i) {
                                (p = e.src),
                                    r.isEmpty(h) ||
                                    (p = r.getOptimizeImage(
                                        e.src,
                                        h.clientWidth,
                                        h.clientHeight,
                                        !0,
                                        !1,
                                        !1,
                                        r.runtime.isClient
                                    ));
                                var a = t.querySelector(
                                    '.ladi-gallery .ladi-gallery-view-item[data-index="' +
                                    i +
                                    '"]'
                                );
                                r.isEmpty(a) ||
                                    a.style.setProperty("background-image", 'url("' + p + '")'),
                                    r.isEmpty(f) ||
                                    (p = r.getOptimizeImage(
                                        e.src,
                                        f.clientWidth,
                                        f.clientHeight,
                                        !0,
                                        !1,
                                        !1,
                                        r.runtime.isClient
                                    )),
                                    (a = t.querySelector(
                                        '.ladi-gallery .ladi-gallery-control-item[data-index="' +
                                        i +
                                        '"]'
                                    )),
                                    r.isEmpty(a) ||
                                    a.style.setProperty("background-image", 'url("' + p + '")');
                            }),
                                r.runTimeout(function () {
                                    t.setAttribute("data-loaded", !0);
                                }, 300);
                        }
                        r.runtime.tmp.runGallery(t.id, t, !0, u),
                            r.runtime.tmp.setGalleryStart(t.id, t);
                    }
                    "countdown_item" == u &&
                        r.runtime.tmp.runOptionCountdownItem(
                            t.id,
                            t,
                            u,
                            e["option.countdown_item_type"]
                        ),
                        "countdown" == u &&
                        r.runtime.tmp.runOptionCountdown(
                            t.id,
                            t,
                            u,
                            e["option.countdown_type"],
                            e["option.countdown_minute"],
                            e["option.countdown_daily_start"],
                            e["option.countdown_daily_end"],
                            e["option.countdown_endtime"]
                        );
                },
                y = function (t, e) {
                    var c = p * m,
                        u = r.getListProductByTagId(e, c, i, !0, function () {
                            y(t, e);
                        });
                    if (r.isObject(u) && r.isArray(u.products)) {
                        var f = document.getElementById(t);
                        if (r.isEmpty(f)) return;
                        if (f.getAttribute("data-page") == i) return;
                        var h = i,
                            v = !1;
                        if (!r.isEmpty(u.total_record) && i * c >= u.total_record) {
                            if (d == r.const.COLLECTION_TYPE.readmore) {
                                var E = f.getElementsByClassName(
                                    "ladi-collection-button-next"
                                )[0];
                                r.isEmpty(E) || E.setAttribute("data-opacity", "0");
                            }
                            f.setAttribute("data-max-page", h), (v = !0);
                        }
                        f.setAttribute("data-page", i > h ? h : i);
                        var P = f.getElementsByClassName("ladi-collection-arrow-left")[0],
                            L = f.getElementsByClassName("ladi-collection-arrow-right")[0],
                            A = f.getElementsByClassName("ladi-collection-button-next")[0];
                        if (
                            (r.isEmpty(P) || P.classList.remove("opacity-0"),
                                r.isEmpty(L) || L.classList.remove("opacity-0"),
                                r.isEmpty(A) || A.classList.remove("opacity-0"),
                                1 == f.getAttribute("data-page") &&
                                d == r.const.COLLECTION_TYPE.carousel &&
                                (r.isEmpty(P) || P.classList.add("opacity-0")),
                                f.getAttribute("data-page") == f.getAttribute("data-max-page") &&
                                (d == r.const.COLLECTION_TYPE.readmore &&
                                    (r.isEmpty(A) || A.classList.add("opacity-0")),
                                    d == r.const.COLLECTION_TYPE.carousel &&
                                    (r.isEmpty(L) || L.classList.add("opacity-0"))),
                                h < i)
                        )
                            return;
                        var b = f.getElementsByClassName("ladi-collection-item");
                        if (0 == b.length) return;
                        var w = 0,
                            S = 0;
                        if (f.hasAttribute("data-max-option-length"))
                            w = parseFloatLadiPage(f.getAttribute("data-max-option-length"));
                        else {
                            var T = f.querySelectorAll('.ladi-form [data-variant="true"]');
                            for (S = 0; S < T.length; S++) {
                                var O = T[S].getElementsByClassName("ladi-form-item-box");
                                O.length > w && (w = O.length);
                            }
                        }
                        var C = f.getElementsByClassName("ladi-collection-content")[0],
                            N = { className: b[0].className, innerHTML: b[0].innerHTML };
                        a && b[0].parentElement.removeChild(b[0]);
                        for (
                            var I = C.getElementsByClassName("ladi-collection-page");
                            I.length < i;

                        ) {
                            var k = document.createElement("div");
                            (k.className = "ladi-collection-page"), C.appendChild(k);
                        }
                        var x = I[i - 1],
                            R = x.getElementsByClassName("ladi-collection-item");
                        if (R.length != u.products.length)
                            for (; R.length > 0;) R[0].parentElement.removeChild(R[0]);
                        var D = function (t, i, a, n, d, c) {
                            r.isEmpty(i.id) &&
                                !r.isEmpty(i.product_id) &&
                                (i.id = i.product_id);
                            for (var u = 0; u < t.length; u++) {
                                var p = r.copy(r.runtime.eventData[t[u].id]);
                                r.isEmpty(p) ||
                                    ((p["option.product_type"] = o),
                                        (p["option.ladisale_store_id"] = s),
                                        (p["option.product_tag_id"] = l),
                                        (p["option.product_id"] = i.id),
                                        a &&
                                        (r.isFunction(r.runtime.tmp.runOptionAction) &&
                                            r.runtime.tmp.runOptionAction(t[u], t[u].id, p.type, p),
                                            r.isFunction(r.runtime.tmp.runOptionHover) &&
                                            r.runtime.tmp.runOptionHover(
                                                t[u],
                                                t[u].id,
                                                p.type,
                                                p["option.data_hover"]
                                            ),
                                            _(t, t[u], e, p, i, D)),
                                        g(t[u], p, n, d, a, c));
                            }
                        };
                        for (S = 0; S < u.products.length; S++)
                            r.isArray(u.products[S].options) &&
                                u.products[S].options.length > w &&
                                (w = u.products[S].options.length);
                        for (
                            f.setAttribute("data-max-option-length", w), S = 0;
                            S < u.products.length;
                            S++
                        )
                            if (!(R.length > S)) {
                                var F = document.createElement("div");
                                (F.className = N.className),
                                    x.appendChild(F),
                                    (F.innerHTML = N.innerHTML);
                                for (
                                    var M = F.getElementsByClassName("ladi-element");
                                    r.isArray(u.products[S].options) &&
                                    u.products[S].options.length < w;

                                )
                                    u.products[S].options.push({ is_tmp: !0 });
                                D(M, u.products[S], !0, null, !1, !1);
                            }
                        v && x.classList.add("last"),
                            d == r.const.COLLECTION_TYPE.carousel &&
                            (function (t) {
                                var e = document.getElementById(t);
                                if (!r.isEmpty(e) && e.hasAttribute("data-page")) {
                                    var i = "0",
                                        a = getComputedStyle(e).width,
                                        n = a,
                                        o = parseFloatLadiPage(e.getAttribute("data-page")) || 1,
                                        s = e
                                            .getElementsByClassName("ladi-collection-content")[0]
                                            .getElementsByClassName("ladi-collection-page"),
                                        l = s[s.length - 1].getElementsByClassName(
                                            "ladi-collection-item"
                                        ),
                                        d = m - l.length,
                                        c = "";
                                    d > 0
                                        ? (o > 1 &&
                                            (i =
                                                o != s.length
                                                    ? "calc(-" + a + " * " + (o - 1) + ")"
                                                    : "calc(-" +
                                                    a +
                                                    " * " +
                                                    (o - 1) +
                                                    " + (" +
                                                    a +
                                                    " / " +
                                                    m +
                                                    " * " +
                                                    d +
                                                    "))"),
                                            (n =
                                                "calc(" +
                                                a +
                                                " * " +
                                                s.length +
                                                " - (" +
                                                a +
                                                " / " +
                                                m +
                                                " * " +
                                                d +
                                                "))"),
                                            (c +=
                                                "#" +
                                                t +
                                                " .ladi-collection-content .ladi-collection-page.last {"),
                                            (c +=
                                                "width: calc(" +
                                                getComputedStyle(e).width +
                                                " / " +
                                                m +
                                                " * " +
                                                l.length +
                                                ");"),
                                            (c += "}"))
                                        : (o > 1 && (i = "calc(-" + a + " * " + (o - 1) + ")"),
                                            (n = "calc(" + a + " * " + s.length + ")"));
                                    var u = "style_collection_" + t,
                                        p = document.getElementById(u);
                                    r.isEmpty(p) || p.parentElement.removeChild(p);
                                    var _ = "#" + t + " .ladi-collection-content {";
                                    (_ += "width: " + n + ";"),
                                        (_ += "left: " + i + ";"),
                                        (_ += "}"),
                                        (_ += c),
                                        r.createStyleElement(u, _);
                                }
                            })(t),
                            n &&
                            d == r.const.COLLECTION_TYPE.readmore &&
                            (function (t) {
                                var e = document.getElementById(t);
                                if (!r.isEmpty(e)) {
                                    var i = e.getElementsByClassName(
                                        "ladi-collection-content"
                                    )[0];
                                    if (e.hasAttribute("data-max-page")) {
                                        var a = i.querySelector(".ladi-collection-page.last"),
                                            n = a.getElementsByClassName("ladi-collection-item"),
                                            o = Math.ceil(n.length / m);
                                        a.style.setProperty(
                                            "height",
                                            (parseFloatLadiPage(
                                                ((parseFloatLadiPage(getComputedStyle(a).height) ||
                                                    0) /
                                                    p) *
                                                o
                                            ) || 0) + "px"
                                        );
                                    }
                                    var s = parseFloatLadiPage(getComputedStyle(e).height) || 0,
                                        l = i.scrollHeight;
                                    if (s != l) {
                                        e.style.setProperty("height", l + "px");
                                        var d = r.findAncestor(e.parentElement, "ladi-element");
                                        r.isEmpty(d) &&
                                            (d = r.findAncestor(e.parentElement, "ladi-section")),
                                            r.updateHeightElement(!0, e, d, s, l);
                                    }
                                }
                            })(t),
                            r.runEventScroll(),
                            r.runResizeAll();
                    }
                },
                f = c["option.product_tag_id"],
                h = c["option.data_setting.value"];
            (!r.isArray(f) && r.isEmpty(h)) || y(t, c);
        }
    }),
    (LadiPageScriptV2.prototype.formatCurrency = function (t, e, i, a) {
        var n = {
            VND: "{0}Ä‘",
            USD: "${0}",
            EUR: "â‚¬{0}",
            GBP: "â‚¤{0}",
            CNY: "Â¥{0}",
            MYR: "RM{0}",
            THB: "à¸¿{0}",
            IDR: "Rp {0}",
        };
        if (a) return this.isEmpty(n[e]) ? e : n[e].format("").trim();
        var r = this.formatNumber(
            t,
            3,
            null,
            { VND: 0, USD: 2, EUR: 2, GBP: 2, CNY: 0, MYR: 0, THB: 0, IDR: 0 }[e] || 0
        );
        return i && (r = this.isEmpty(n[e]) ? r + " " + e : n[e].format(r)), r;
    }),
    (LadiPageScriptV2.prototype.formatNumber = function (t, e, i, a) {
        if (void 0 != t) {
            void 0 == i && (i = 0), void 0 == a && (a = 0);
            var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (a > 0 ? "\\." : "$") + ")";
            t = t.toFixed(Math.max(0, ~~a)).replace(new RegExp(n, "g"), "$&,");
            var r = null,
                o = null;
            i >= 1 &&
                ((o = (r = t.split("."))[0]),
                    (t = o = new Array(i - o.length + 1).join("0") + o),
                    2 == r.length && (t += "." + r[1])),
                a >= 1 &&
                2 == (r = t.split(".")).length &&
                ((o = r[1]),
                    (o = new Array(a - o.length + 1).join("0") + o),
                    (t = r[0] + "." + o));
        }
        return t;
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStr = function (t, e) {
        this.runtime.replaceStr[t] = e;
    }),
    (LadiPageScriptV2.prototype.getDataReplaceStr = function (t, e) {
        var i = null;
        return (
            this.isNull(e) || (i = e[t]),
            this.isNull(i) && (i = this.runtime.replaceStr[t]),
            i
        );
    }),
    (LadiPageScriptV2.prototype.highlightText = function (t, e, i, a) {
        if (!this.isEmpty(t) && 0 != e.length) {
            var n = i ? "gi" : "g",
                r = [];
            e.forEach(function (t) {
                r.push(t.replaceAll("|", "\\|"));
            }),
                r.sort(function (t, e) {
                    return e.length - t.length;
                });
            var o = this;
            Array.from(t.childNodes).forEach(function (t) {
                var s = new RegExp(r.join("|"), n);
                if (3 !== t.nodeType) o.highlightText(t, e, i, a);
                else if (s.test(t.textContent)) {
                    var l = document.createDocumentFragment(),
                        d = 0;
                    t.textContent.replace(s, function (e, i) {
                        var n = document.createTextNode(t.textContent.slice(d, i)),
                            r = null;
                        o.isFunction(a)
                            ? (r = a(e))
                            : ((r = document.createElement("span")).textContent = e),
                            l.appendChild(n),
                            l.appendChild(r),
                            (d = i + e.length);
                    });
                    var c = document.createTextNode(t.textContent.slice(d));
                    l.appendChild(c), t.parentNode.replaceChild(l, t);
                }
            });
        }
    }),
    (LadiPageScriptV2.prototype.convertDataReplaceStr = function (t, e, i, a, n) {
        var r = this,
            o = r.runtime.replacePrefixStart,
            s = r.runtime.replacePrefixEnd;
        r.runtime.convert_replace_str &&
            ((o = r.runtime.replaceNewPrefixStart),
                (s = r.runtime.replaceNewPrefixEnd));
        for (
            var l = (t = r.isEmpty(t) ? "" : t),
            d = new RegExp(o + "[^" + o + "$" + s + "]*" + s, "gi"),
            c = null,
            u = [],
            p = function (t) {
                if (a) u.push(t);
                else {
                    var i = t,
                        d = i.split("|");
                    (i = d[0].substr(o.length)),
                        1 == d.length && (i = i.substr(0, i.length - s.length));
                    var c = r.getDataReplaceStr(i, n);
                    if (r.isEmpty(c))
                        if (d.length > 1) {
                            var p = r.randomInt(1, d.length - 1);
                            (c = d[p]),
                                p == d.length - 1 && (c = c.substr(0, c.length - s.length));
                        } else c = "";
                    e && (c = encodeURIComponent(c)), (l = l.replaceAll(t, c));
                }
            };
            null !== (c = d.exec(t));

        )
            c.index === d.lastIndex && d.lastIndex++, c.forEach(p);
        return (
            (u = u.unique()),
            r.highlightText(i, u, !0, function (t) {
                var e = document.createElement("span");
                return e.setAttribute("data-replace-str", t), e;
            }),
            r.runtime.isDesktop &&
            e &&
            !r.isEmpty(l) &&
            ["fb://profile/", "fb://page/?id=", "fb://page/"].forEach(function (t) {
                l.startsWith(t) &&
                    (l = l.replaceAll(
                        t,
                        window.location.protocol + "//www.facebook.com/"
                    ));
            }),
            l
        );
    }),
    (LadiPageScriptV2.prototype.setDataReplaceElement = function (t, e, i, a, n) {
        for (
            var r = this.isEmpty(a) ? document : document.getElementById(a),
            o = r.querySelectorAll("span[data-replace-str]"),
            s = 0;
            s < o.length;
            s++
        ) {
            var l = o[s].getAttribute("data-replace-str");
            o[s].innerHTML = this.convertDataReplaceStr(l, !1, null, !1, i);
        }
        for (
            var d = r.querySelectorAll("a[data-replace-href]"), c = 0;
            c < d.length;
            c++
        ) {
            var u = d[c].getAttribute("data-replace-href");
            (u = this.convertDataReplaceStr(u, !0, null, !1, i)), (d[c].href = u);
        }
        for (
            var p = r.querySelectorAll(
                ".ladi-element .ladi-form-item-container [name]"
            ),
            m = 0;
            m < p.length;
            m++
        ) {
            var _ = null,
                g = null,
                y = !1,
                f = null,
                h = null;
            if (t) {
                var v = p[m].getAttribute("name").trim();
                (y = !0) && -1 == n.indexOf(v) && (y = !1),
                    y &&
                    "country" == v &&
                    "true" == p[m].getAttribute("data-is-select-country") &&
                    (y = !1),
                    y && (_ = this.getDataReplaceStr(v, i));
            }
            if (!y) {
                if (((h = this.findAncestor(p[m], "ladi-element")), this.isEmpty(h)))
                    continue;
                var E = this.runtime.eventData[h.id];
                if (this.isEmpty(E)) continue;
                var P = E["option.input_default_value"];
                if (this.isEmpty(P)) continue;
                _ = this.convertDataReplaceStr(P, !1, null, !1, i);
            }
            if (!this.isNull(_)) {
                if (
                    ((g = this.isArray(_) ? _[0] : _),
                        (g = this.isNull(g) ? "" : g),
                        (g += ""),
                        "INPUT" == p[m].tagName)
                )
                    if (
                        "checkbox" == (f = p[m].getAttribute("type").trim()) ||
                        "radio" == f
                    ) {
                        var L = !1;
                        if ("checkbox" == f) {
                            var A = _;
                            this.isArray(A) || (A = [A]),
                                (L = -1 != A.indexOf(p[m].getAttribute("value")));
                        }
                        "radio" == f && (L = p[m].getAttribute("value") == g.trim()),
                            L
                                ? ((p[m].checked = !0),
                                    e && p[m].setAttribute("checked", "checked"))
                                : ((p[m].checked = !1), e && p[m].removeAttribute("checked"));
                        var b = this.findAncestor(p[m], "ladi-form-checkbox-item");
                        if (!this.isEmpty(b)) {
                            var w = b.querySelector("span");
                            this.isEmpty(w) || w.setAttribute("data-checked", p[m].checked);
                        }
                    } else
                        (h = this.findAncestor(p[m], "ladi-element")),
                            (this.isEmpty(h) || "true" != h.getAttribute("data-quantity")) &&
                            ((p[m].value = g.trim()),
                                e && p[m].setAttribute("value", p[m].value));
                if (
                    ("TEXTAREA" == p[m].tagName &&
                        ((p[m].value = g.trim()), e && (p[m].innerHTML = p[m].value)),
                        "SELECT" == p[m].tagName)
                ) {
                    var S = p[m].querySelector('option[value="' + g.trim() + '"]');
                    if (
                        !this.isEmpty(S) &&
                        ((p[m].value = S.getAttribute("value")),
                            e && !S.hasAttribute("selected"))
                    ) {
                        for (
                            var T = p[m].querySelectorAll("option"), O = 0;
                            O < T.length;
                            O++
                        )
                            T[O].removeAttribute("selected");
                        S.setAttribute("selected", "selected");
                    }
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.setDataReplaceStart = function () {
        for (
            var t = document.querySelectorAll(
                ".ladi-headline, .ladi-paragraph, .ladi-list-paragraph ul"
            ),
            e = 0;
            e < t.length;
            e++
        )
            this.convertDataReplaceStr(t[e].innerHTML, !1, t[e], !0);
        this.setDataReplaceElement(
            !0,
            !0,
            null,
            null,
            Object.keys(this.runtime.replaceStr)
        );
    }),
    (LadiPageScriptV2.prototype.generateVariantContentString = function (
        t,
        e,
        i,
        a
    ) {
        var n = [];
        i = this.isEmpty(i) ? " | " : i;
        try {
            this.isEmpty(t) ||
                (e && (t = Base64.decode(t)),
                    (t = JSON.parse(t)),
                    this.isArray(t.dynamic_content.hide) &&
                    t.dynamic_content.hide.length > 0 &&
                    n.push(
                        this.const.LANG.HIDE_ELEMENT +
                        " " +
                        t.dynamic_content.hide.join(", ")
                    ),
                    this.isArray(t.dynamic_content.show) &&
                    t.dynamic_content.show.length > 0 &&
                    n.push(
                        this.const.LANG.SHOW_ELEMENT +
                        " " +
                        t.dynamic_content.show.join(", ")
                    ),
                    this.isArray(t.dynamic_content.top) &&
                    t.dynamic_content.top.length > 0 &&
                    n.push(
                        this.const.LANG.TOP_ELEMENT + " " + t.dynamic_content.top.join(", ")
                    ),
                    this.isArray(t.dynamic_content.scroll) &&
                    t.dynamic_content.scroll.length > 0 &&
                    n.push(
                        this.const.LANG.SCROLL_ELEMENT +
                        " " +
                        t.dynamic_content.scroll.join(", ")
                    ),
                    this.isArray(t.dynamic_content.cookie) &&
                    t.dynamic_content.cookie.length > 0 &&
                    n.push(
                        this.const.LANG.SET_COOKIE +
                        " " +
                        t.dynamic_content.cookie.join("; ")
                    ));
        } catch (t) { }
        return a ? n : n.join(i);
    }),
    (LadiPageScriptV2.prototype.reloadFeeShipping = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        var i = function (t, i) {
            window
                .ladi("_ladipage_" + t)
                .set_cookie(i, 365, "/", window.location.host),
                e.isArray(e.runtime.DOMAIN_SET_COOKIE) &&
                e.runtime.DOMAIN_SET_COOKIE.forEach(function (e) {
                    e != window.location.host &&
                        window.ladi("_ladipage_" + t).set_cookie(i, 365, "/", e);
                });
        };
        e.isEmpty(e.runtime.tmp.timeout_reload_fee_shipping) ||
            e.removeTimeout(e.runtime.tmp.timeout_reload_fee_shipping);
        var a = function (t, i) {
            (e.runtime.tmp.add_to_cart_fee_shipping = t),
                e.changeTotalPriceCart(),
                e.isNull(i) &&
                ((e.runtime.tmp.add_to_cart_shipping_method_id = null), (i = []));
            for (
                var a = null,
                n = e.runtime.tmp.add_to_cart_shipping_method_id,
                r = function (t) {
                    l.setAttribute("data-selected", t.target.value || ""),
                        (e.runtime.tmp.add_to_cart_shipping_method_id = e.isEmpty(
                            l.getAttribute("data-selected")
                        )
                            ? null
                            : l.getAttribute("data-selected")),
                        (parseFloatLadiPage(
                            e.runtime.tmp.add_to_cart_shipping_method_id
                        ) || 0) == e.runtime.tmp.add_to_cart_shipping_method_id &&
                        (e.runtime.tmp.add_to_cart_shipping_method_id =
                            parseFloatLadiPage(
                                e.runtime.tmp.add_to_cart_shipping_method_id
                            ) || 0),
                        (a = t.target.querySelector(
                            'option[value="' + t.target.value + '"]'
                        )),
                        (e.runtime.tmp.add_to_cart_fee_shipping = e.isEmpty(a)
                            ? 0
                            : parseFloatLadiPage(a.getAttribute("data-fee")) || 0),
                        e.changeTotalPriceCart();
                },
                o = document.querySelectorAll(
                    'select[data-combobox-type="' +
                    e.const.COMBOBOX_TYPE.delivery_method +
                    '"]'
                ),
                s = 0;
                s < o.length;
                s++
            ) {
                var l = o[s],
                    d = l.getElementsByTagName("option");
                for (
                    "true" != l.getAttribute("data-event") &&
                    (l.setAttribute("data-event", !0), l.addEventListener("change", r)),
                    e.isNull(l.getAttribute("data-placeholder")) &&
                    l.setAttribute("data-placeholder", d[0].innerHTML);
                    d.length > 0;

                )
                    d[0].parentElement.removeChild(d[0]);
                i.length <= 0 &&
                    (((a = document.createElement("option")).innerHTML =
                        l.getAttribute("data-placeholder")),
                        l.appendChild(a));
                for (var c = 0; c < i.length; c++) {
                    a = document.createElement("option");
                    var u = e.formatNumber(i[c].fee, 3);
                    if (
                        e.runtime.tmp.cart.length > 0 &&
                        !e.isEmpty(e.runtime.tmp.cart[0].currency) &&
                        !e.isEmpty(e.runtime.tmp.cart[0].currency.symbol)
                    ) {
                        var p = e.runtime.tmp.cart[0].currency.symbol;
                        u = e.formatCurrency(i[c].fee, p, !0);
                    }
                    (a.innerHTML = i[c].name + " - " + u),
                        a.setAttribute("data-fee", i[c].fee),
                        a.setAttribute("value", i[c].shipping_method_id),
                        n == i[c].shipping_method_id &&
                        a.setAttribute("selected", "selected"),
                        l.appendChild(a);
                }
                l.setAttribute("data-selected", n || "");
            }
        };
        e.runtime.tmp.timeout_reload_fee_shipping = e.runTimeout(function () {
            if (0 != e.runtime.tmp.list_form_checkout.length) {
                var n = null;
                if (
                    ((n = e.isEmpty(t)
                        ? document.getElementById(e.runtime.tmp.list_form_checkout[0])
                        : e.findAncestor(t.target, "ladi-form")),
                        e.isEmpty(n))
                )
                    a(0);
                else {
                    var r = n.querySelector('.ladi-form-item select[name="state"]'),
                        o = n.querySelector('.ladi-form-item select[name="district"]'),
                        s = n.querySelector('.ladi-form-item select[name="ward"]');
                    if (e.isEmpty(r) || e.isEmpty(o) || e.isEmpty(s)) a(0);
                    else {
                        var l = r.value,
                            d = o.value,
                            c = s.value;
                        if (e.isEmpty(l) || e.isEmpty(d)) return void a(0);
                        var u = {
                            state_id: l.split(":")[0],
                            district_id: d.split(":")[0],
                            ward_id: c.split(":")[0],
                        };
                        (u.state_id = parseInt(u.state_id) || u.state_id),
                            (u.district_id = parseInt(u.district_id) || u.district_id),
                            (u.ward_id = parseInt(u.ward_id) || u.ward_id);
                        var p = null,
                            m = null,
                            _ = null;
                        if (
                            e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.sapo
                        )
                            return (
                                (m = function (t, n) {
                                    (t = t.querySelector("#checkoutForm")),
                                        (p = new FormData()).append("_method", "patch"),
                                        p.append("billingProvince", u.state_id),
                                        p.append("billingDistrict", u.district_id),
                                        p.append("billingWard", u.ward_id),
                                        e.sendRequest(
                                            "POST",
                                            window.location.origin + t.getAttribute("action"),
                                            p,
                                            !0,
                                            _,
                                            function (t, n, r) {
                                                if (r.readyState == XMLHttpRequest.DONE) {
                                                    if (200 == n)
                                                        try {
                                                            for (
                                                                var o = 0,
                                                                s = [],
                                                                c = e
                                                                    .createTmpElement("div", t, null, !1)
                                                                    .querySelectorAll(
                                                                        '[for^="shippingMethod-"]'
                                                                    ),
                                                                u = 0;
                                                                u < c.length;
                                                                u++
                                                            ) {
                                                                var p = "",
                                                                    m = 0,
                                                                    _ = "",
                                                                    g = c[u].querySelector(
                                                                        "span.radio__label__primary"
                                                                    );
                                                                e.isEmpty(g) || (p = g.textContent.trim()),
                                                                    (g = c[u].querySelector(
                                                                        "span.content-box__emphasis"
                                                                    )),
                                                                    e.isEmpty(g) ||
                                                                    (m =
                                                                        parseFloatLadiPage(
                                                                            g.textContent
                                                                                .trim()
                                                                                .replaceAll(".", "")
                                                                                .replaceAll(",", ".")
                                                                        ) || 0);
                                                                var y = e.findAncestor(
                                                                    c[u],
                                                                    "content-box__row"
                                                                );
                                                                e.isEmpty(y) ||
                                                                    ((y = y.querySelector(
                                                                        'input[name="shippingMethod"]'
                                                                    )),
                                                                        e.isEmpty(y) || (_ = y.value)),
                                                                    e.isEmpty(p) ||
                                                                    e.isEmpty(_) ||
                                                                    s.push({
                                                                        name: p,
                                                                        fee: m,
                                                                        shipping_method_id: _,
                                                                    });
                                                            }
                                                            return (
                                                                -1 ==
                                                                s.findIndex(function (t) {
                                                                    return (
                                                                        t.shipping_method_id ==
                                                                        e.runtime.tmp
                                                                            .add_to_cart_shipping_method_id
                                                                    );
                                                                }) &&
                                                                (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                    null),
                                                                s.forEach(function (t) {
                                                                    e.isEmpty(
                                                                        e.runtime.tmp.add_to_cart_shipping_method_id
                                                                    ) &&
                                                                        (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                            t.shipping_method_id),
                                                                        e.runtime.tmp
                                                                            .add_to_cart_shipping_method_id ==
                                                                        t.shipping_method_id && (o = t.fee || 0);
                                                                }),
                                                                i("state", l),
                                                                i("district", d),
                                                                void a(o, s)
                                                            );
                                                        } catch (t) { }
                                                    a(0);
                                                }
                                            }
                                        );
                                }),
                                void e.getCheckoutSapo(null, m, a)
                            );
                        if (
                            e.runtime.shopping_product_type ==
                            e.const.FORM_CONFIG_TYPE.haravan
                        )
                            return (
                                (m = function (t) {
                                    _ = { "X-Requested-With": "XMLHttpRequest" };
                                    var n = e.createTmpElement("a", "", { href: t });
                                    (n.search =
                                        n.search +
                                        (e.isEmpty(n.search) ? "?" : "&") +
                                        "customer_shipping_province=" +
                                        u.state_id +
                                        "&customer_shipping_district=" +
                                        u.district_id +
                                        "&form_name=form_update_location"),
                                        (t = n.href),
                                        e.sendRequest("GET", t, null, !0, _, function (t, n, r) {
                                            if (r.readyState == XMLHttpRequest.DONE) {
                                                if (200 == n)
                                                    try {
                                                        for (
                                                            var o = 0,
                                                            s = [],
                                                            c = e
                                                                .createTmpElement("div", t, null, !1)
                                                                .querySelectorAll(
                                                                    '[for^="shipping_rate_id_"]'
                                                                ),
                                                            u = 0;
                                                            u < c.length;
                                                            u++
                                                        ) {
                                                            var p = "",
                                                                m = 0,
                                                                _ = "",
                                                                g = c[u].querySelector(
                                                                    "span.radio-label-primary"
                                                                );
                                                            e.isEmpty(g) || (p = g.textContent.trim()),
                                                                (g = c[u].querySelector(
                                                                    "span.content-box-emphasis"
                                                                )),
                                                                e.isEmpty(g) ||
                                                                (m =
                                                                    parseFloatLadiPage(
                                                                        g.textContent.trim().replaceAll(",", "")
                                                                    ) || 0);
                                                            var y = c[u].querySelector("input");
                                                            e.isEmpty(y) || (_ = y.value),
                                                                e.isEmpty(p) ||
                                                                e.isEmpty(_) ||
                                                                s.push({
                                                                    name: p,
                                                                    fee: m,
                                                                    shipping_method_id: _,
                                                                });
                                                        }
                                                        return (
                                                            -1 ==
                                                            s.findIndex(function (t) {
                                                                return (
                                                                    t.shipping_method_id ==
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id
                                                                );
                                                            }) &&
                                                            (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                null),
                                                            s.forEach(function (t) {
                                                                e.isEmpty(
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id
                                                                ) &&
                                                                    (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                        t.shipping_method_id),
                                                                    e.runtime.tmp
                                                                        .add_to_cart_shipping_method_id ==
                                                                    t.shipping_method_id && (o = t.fee || 0);
                                                            }),
                                                            i("state", l),
                                                            i("district", d),
                                                            void a(o, s)
                                                        );
                                                    } catch (t) { }
                                                a(0);
                                            }
                                        });
                                }),
                                void e.getThirdPartyCheckoutUrl(!1, m)
                            );
                        if (
                            e.runtime.shopping_product_type ==
                            e.const.FORM_CONFIG_TYPE.shopify
                        )
                            return void a(0);
                        if (
                            e.runtime.shopping_product_type ==
                            e.const.FORM_CONFIG_TYPE.wordpress
                        )
                            return void a(0);
                        var g = window.ladi("_cart_token").get_cookie(),
                            y = window.ladi("_checkout_token").get_cookie();
                        if (e.isEmpty(g) || e.isEmpty(y)) return void a(0);
                        (_ = { "Content-Type": "application/json", "cart-token": g }),
                            e.sendRequest(
                                "POST",
                                e.const.API_LADISALE_GET_SHIPPING.format(y),
                                JSON.stringify(u),
                                !0,
                                _,
                                function (t, i, n) {
                                    if (n.readyState == XMLHttpRequest.DONE) {
                                        if (200 == i)
                                            try {
                                                var r = JSON.parse(t);
                                                if (200 == r.code) {
                                                    var o = 0;
                                                    if (e.isArray(r.data.shipping_methods))
                                                        -1 ==
                                                            r.data.shipping_methods.findIndex(function (t) {
                                                                return (
                                                                    t.shipping_method_id ==
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id
                                                                );
                                                            }) &&
                                                            (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                null),
                                                            r.data.shipping_methods.forEach(function (t) {
                                                                e.isEmpty(
                                                                    e.runtime.tmp.add_to_cart_shipping_method_id
                                                                ) &&
                                                                    (e.runtime.tmp.add_to_cart_shipping_method_id =
                                                                        t.shipping_method_id),
                                                                    e.runtime.tmp
                                                                        .add_to_cart_shipping_method_id ==
                                                                    t.shipping_method_id && (o = t.fee || 0);
                                                            });
                                                    return void a(o, r.data.shipping_methods);
                                                }
                                            } catch (t) { }
                                        a(0);
                                    }
                                }
                            );
                    }
                }
            }
        }, 1e3);
    }),
    (LadiPageScriptV2.prototype.getThirdPartyCheckoutUrl = function (t, e) {
        var i = this,
            a = window.location.origin + "/checkout",
            n = function (n, r, o) {
                t &&
                    ((a = i.getLinkUTMRedirect(a, null)),
                        (a = i.convertDataReplaceStr(a, !0)),
                        window.ladi(a).open_url()),
                    i.isFunction(e) && e(a, n, r, o);
            };
        -1 !=
            [
                i.const.FORM_CONFIG_TYPE.sapo,
                i.const.FORM_CONFIG_TYPE.haravan,
                i.const.FORM_CONFIG_TYPE.shopify,
            ].indexOf(i.runtime.shopping_product_type) &&
            i.sendRequest("GET", a, null, !0, null, function (t, e, i) {
                i.readyState == XMLHttpRequest.HEADERS_RECEIVED && (a = i.responseURL),
                    i.readyState == XMLHttpRequest.DONE && 200 == e && n(t, e, i);
            }),
            -1 !=
            [i.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                i.runtime.shopping_product_type
            ) && n(),
            -1 !=
            [i.const.FORM_CONFIG_TYPE.ladisales].indexOf(
                i.runtime.shopping_product_type
            ) &&
            (i.isNull(i.runtime.shopping_config_checkout_id)
                ? ((a = i.runtime.tmp.ladisales_checkout_url), n())
                : (t && window.ladi("POPUP_CHECKOUT").show(),
                    i.isFunction(e) && e()));
    }),
    (LadiPageScriptV2.prototype.getCheckoutAll = function (t, e, i) {
        var a = this;
        a.getThirdPartyCheckoutUrl(!1, function (t, i, n, r) {
            try {
                var o = a.createTmpElement("div", i, null, !1);
                return void (a.isFunction(e) && e(o, i));
            } catch (t) { }
        });
    }),
    (LadiPageScriptV2.prototype.getCheckoutSapo = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutHaravan = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutWordpress = function (t, e, i) {
        this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.getCheckoutShopify = function (t, e, i) {
        return this.getCheckoutAll(t, e, i);
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutSapo = function () {
        var t = this;
        t.getCheckoutSapo(null, function (e, i) {
            var a = 0,
                n = (e = e.querySelector("#checkoutForm")).querySelector(
                    "#discountCode .discount-code span.ui-tag__label"
                );
            if (!t.isEmpty(n)) {
                var r = e.querySelector("#discountCode .discount-code .col-block");
                t.isEmpty(r) ||
                    (a =
                        parseFloatLadiPage(
                            r.textContent.trim().replaceAll(".", "").replaceAll(",", ".")
                        ) || 0);
                var o = document.querySelector(
                    "#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]"
                );
                if (!t.isEmpty(o)) {
                    var s = t
                        .findAncestor(o, "ladi-form")
                        .querySelector('input[name="coupon"]');
                    t.isEmpty(s) ||
                        ((s.value = n.textContent.trim()),
                            t.fireEvent(s, "change"),
                            (t.runtime.tmp.current_use_coupon = s.value),
                            t.reloadPriceDiscount({ target: o, discount_price: a }));
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutHaravan = function () {
        var t = this;
        t.getCheckoutHaravan(null, function (e, i) {
            var a = 0,
                n = e.querySelector(".applied-reduction-code-information");
            if (!t.isEmpty(n)) {
                var r = e.querySelector(
                    ".total-line-price span[data-checkout-discount-amount-target]"
                );
                t.isEmpty(r) ||
                    (a =
                        (parseFloatLadiPage(
                            r.getAttribute("data-checkout-discount-amount-target")
                        ) || 0) / 100);
                var o = document.querySelector(
                    "#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]"
                );
                if (!t.isEmpty(o)) {
                    var s = t
                        .findAncestor(o, "ladi-form")
                        .querySelector('input[name="coupon"]');
                    t.isEmpty(s) ||
                        ((s.value = n.textContent.trim()),
                            t.fireEvent(s, "change"),
                            (t.runtime.tmp.current_use_coupon = s.value),
                            t.reloadPriceDiscount({
                                target: o,
                                discount_price: a,
                                docCrawl: e,
                            }));
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadCheckoutWordpress = function () {
        var t = this;
        this.getCheckoutWordpress(null, function (e, i) {
            var a = 0,
                n = e.querySelector("#order_review .cart-discount");
            if (!t.isEmpty(n)) {
                var r = n.querySelector("a[data-coupon]");
                if (!t.isEmpty(r)) {
                    var o = n.querySelector(".woocommerce-Price-amount");
                    t.isEmpty(o) ||
                        (a =
                            parseFloatLadiPage(
                                o.textContent.trim().replaceAll(".", "").replaceAll(",", ".")
                            ) || 0);
                    var s = document.querySelector(
                        "#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]"
                    );
                    if (!t.isEmpty(s)) {
                        var l = t
                            .findAncestor(s, "ladi-form")
                            .querySelector('input[name="coupon"]');
                        t.isEmpty(l) ||
                            ((l.value = r.getAttribute("data-coupon")),
                                t.fireEvent(l, "change"),
                                (t.runtime.tmp.current_use_coupon = l.value),
                                t.reloadPriceDiscount({
                                    target: s,
                                    discount_price: a,
                                    docCrawl: e,
                                }));
                    }
                }
            }
        });
    }),
    (LadiPageScriptV2.prototype.reloadPriceDiscount = function (t) {
        var e = this;
        e instanceof LadiPageScriptV2 || (e = LadiPageScript);
        var i = e.runtime.tmp.current_use_coupon,
            a = function (n, r) {
                (e.runtime.tmp.add_to_cart_discount = n),
                    (e.runtime.tmp.is_click_check_price_discount = !1),
                    e.changeTotalPriceCart();
                var o = null,
                    s = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                e.isEmpty(s) ||
                    ((o = e.findAncestor(s, "ladi-form")),
                        s.parentElement.removeChild(s));
                var l = document.querySelector(
                    '.ladi-form-item input[name="coupon"].pointer-events-none'
                );
                if (
                    (e.isEmpty(l) || l.classList.remove("pointer-events-none"),
                        !e.isEmpty(e.runtime.tmp.current_use_coupon))
                ) {
                    if (
                        (e.isEmpty(o) &&
                            !e.isEmpty(t) &&
                            (o = e.findAncestor(t.target, "ladi-form")),
                            e.isEmpty(o))
                    )
                        return;
                    if (
                        ((l = o.querySelector('.ladi-form-item input[name="coupon"]')),
                            e.isEmpty(l))
                    )
                        return;
                    ((s = document.createElement("span")).className =
                        "ladi-form-remove-coupon"),
                        (s.innerHTML = "âŒ«"),
                        s.addEventListener("click", function (t) {
                            t.stopPropagation();
                            var i = e.runtime.tmp.current_use_coupon;
                            if (
                                ((l.value = ""),
                                    e.fireEvent(l, "change"),
                                    (e.runtime.tmp.current_use_coupon = null),
                                    a(0),
                                    -1 !=
                                    [
                                        e.const.FORM_CONFIG_TYPE.sapo,
                                        e.const.FORM_CONFIG_TYPE.haravan,
                                        e.const.FORM_CONFIG_TYPE.shopify,
                                        e.const.FORM_CONFIG_TYPE.wordpress,
                                    ].indexOf(e.runtime.shopping_product_type))
                            ) {
                                var n = document.querySelector(
                                    "#POPUP_CHECKOUT .ladi-form .ladi-element[data-submit-form-id]"
                                );
                                e.isEmpty(n) ||
                                    e.reloadPriceDiscount({
                                        isRemoveCoupon: !0,
                                        couponOld: i,
                                        target: n,
                                    });
                            }
                        }),
                        e.findAncestor(l, "ladi-form-item").appendChild(s),
                        l.classList.add("pointer-events-none");
                }
                if (
                    (i != e.runtime.tmp.current_use_coupon ||
                        e.isEmpty(t) ||
                        !t.isRemoveCoupon ||
                        !e.isEmpty(t.docCrawl)) &&
                    e.runtime.shopping_product_type == e.const.FORM_CONFIG_TYPE.haravan
                ) {
                    if (
                        (delete e.runtime.tmp.use_cart_line_price_original,
                            !e.isEmpty(e.runtime.tmp.current_use_coupon))
                    ) {
                        var d = r.querySelector(
                            ".order-summary-emphasis[data-checkout-subtotal-price-target]"
                        );
                        if (!e.isEmpty(d))
                            (d =
                                (parseFloatLadiPage(
                                    d.getAttribute("data-checkout-subtotal-price-target")
                                ) || 0) / 100),
                                e.changeTotalPriceCart(!0).cart_price != d &&
                                (e.runtime.tmp.use_cart_line_price_original = !0);
                    }
                    e.updateCartPromotion();
                }
            };
        e.isEmpty(t) || e.isEmpty(t.discount_price)
            ? e.runtime.tmp.is_click_check_price_discount ||
            (e.isEmpty(t) && e.isEmpty(e.runtime.tmp.current_use_coupon)) ||
            (e.isEmpty(e.runtime.tmp.timeout_reload_price_discount) ||
                e.removeTimeout(e.runtime.tmp.timeout_reload_price_discount),
                (e.runtime.tmp.timeout_reload_price_discount = e.runTimeout(
                    function () {
                        if (0 != e.runtime.tmp.list_form_checkout.length) {
                            var i = null;
                            if (
                                (e.isEmpty(t)
                                    ? (i = document.getElementById(
                                        e.runtime.tmp.list_form_checkout[0]
                                    ))
                                    : ((i = e.findAncestor(t.target, "ladi-form")),
                                        e.isEmpty(i) ||
                                        ((i = i.querySelector("[data-submit-form-id]")),
                                            e.isEmpty(i) ||
                                            (i = document.getElementById(
                                                i.getAttribute("data-submit-form-id")
                                            )))),
                                    e.isEmpty(i))
                            )
                                a(0);
                            else {
                                var n = null,
                                    r = i.querySelector('.ladi-form-item input[name="email"]'),
                                    o = i.querySelector('.ladi-form-item input[name="phone"]'),
                                    s = i.querySelector('.ladi-form-item input[name="coupon"]');
                                if (e.isEmpty(s)) a(0);
                                else {
                                    var l = e.runtime.tmp.current_use_coupon;
                                    e.runtime.tmp.current_use_coupon = null;
                                    var d = s.value;
                                    if (e.isEmpty(d) && (e.isEmpty(t) || !t.isRemoveCoupon))
                                        return void a(0);
                                    if (e.isEmpty(t) && d != l) return void a(0);
                                    (n = { discount_code: d }),
                                        e.isEmpty(r) || (n.email = r.value),
                                        e.isEmpty(o) || (n.phone = o.value),
                                        (e.runtime.tmp.is_click_check_price_discount = !0);
                                    var c = null,
                                        u = null,
                                        p = null;
                                    if (
                                        e.runtime.shopping_product_type ==
                                        e.const.FORM_CONFIG_TYPE.sapo
                                    )
                                        return (
                                            (u = function (i, r) {
                                                (i = i.querySelector("#checkoutForm")),
                                                    (p = new FormData()).append("_method", "patch"),
                                                    p.append("reductionCode", n.discount_code),
                                                    p.append("email", n.email),
                                                    e.sendRequest(
                                                        "POST",
                                                        window.location.origin + i.getAttribute("action"),
                                                        p,
                                                        !0,
                                                        c,
                                                        function (i, n, r) {
                                                            if (r.readyState == XMLHttpRequest.DONE) {
                                                                if (200 == n)
                                                                    try {
                                                                        var o = 0,
                                                                            s = e.createTmpElement(
                                                                                "div",
                                                                                i,
                                                                                null,
                                                                                !1
                                                                            ),
                                                                            l = s.querySelector(
                                                                                "#discountCode .discount-code span.ui-tag__label"
                                                                            );
                                                                        if (e.isEmpty(l)) {
                                                                            var c = s.querySelector(
                                                                                "#discountCode .field__message--error"
                                                                            );
                                                                            e.isEmpty(c) ||
                                                                                e.isEmpty(c.textContent.trim()) ||
                                                                                e.isEmpty(t) ||
                                                                                e.showMessage(c.textContent.trim());
                                                                        } else {
                                                                            e.runtime.tmp.current_use_coupon = d;
                                                                            var u = s.querySelector(
                                                                                "#discountCode .discount-code .col-block"
                                                                            );
                                                                            e.isEmpty(u) ||
                                                                                (o =
                                                                                    parseFloatLadiPage(
                                                                                        u.textContent
                                                                                            .trim()
                                                                                            .replaceAll(".", "")
                                                                                            .replaceAll(",", ".")
                                                                                    ) || 0);
                                                                        }
                                                                        return void a(o);
                                                                    } catch (t) { }
                                                                e.isEmpty(t) ||
                                                                    e.showMessage(
                                                                        e.const.LANG.REQUEST_SEND_ERROR
                                                                    ),
                                                                    a(0);
                                                            }
                                                        }
                                                    );
                                            }),
                                            void e.getCheckoutSapo(t, u, a)
                                        );
                                    if (
                                        e.runtime.shopping_product_type ==
                                        e.const.FORM_CONFIG_TYPE.haravan
                                    )
                                        return (
                                            (u = function (i) {
                                                c = { "X-Requested-With": "XMLHttpRequest" };
                                                var r = e.createTmpElement("a", "", { href: i });
                                                e.isEmpty(n.discount_code)
                                                    ? (r.search =
                                                        r.search +
                                                        (e.isEmpty(r.search) ? "?" : "&") +
                                                        "form_name=form_discount_remove")
                                                    : (r.search =
                                                        r.search +
                                                        (e.isEmpty(r.search) ? "?" : "&") +
                                                        "discount.code=" +
                                                        n.discount_code +
                                                        "&form_name=form_discount_add"),
                                                    (i = r.href),
                                                    e.sendRequest(
                                                        "GET",
                                                        i,
                                                        null,
                                                        !0,
                                                        c,
                                                        function (i, n, r) {
                                                            if (r.readyState == XMLHttpRequest.DONE) {
                                                                if (200 == n)
                                                                    try {
                                                                        var o = 0,
                                                                            s = e.createTmpElement(
                                                                                "div",
                                                                                i,
                                                                                null,
                                                                                !1
                                                                            ),
                                                                            l = s.querySelector(
                                                                                ".applied-reduction-code-information"
                                                                            );
                                                                        if (
                                                                            e.isEmpty(l) ||
                                                                            l.textContent.trim().toLowerCase() !=
                                                                            d.trim().toLowerCase()
                                                                        ) {
                                                                            var c = s.querySelector(
                                                                                "#form_discount_add .field-message-error"
                                                                            );
                                                                            e.isEmpty(c) ||
                                                                                e.isEmpty(c.textContent.trim()) ||
                                                                                e.isEmpty(t) ||
                                                                                e.showMessage(c.textContent.trim());
                                                                        } else {
                                                                            e.runtime.tmp.current_use_coupon = d;
                                                                            var u = s.querySelector(
                                                                                ".total-line-price span[data-checkout-discount-amount-target]"
                                                                            );
                                                                            e.isEmpty(u) ||
                                                                                (o =
                                                                                    (parseFloatLadiPage(
                                                                                        u.getAttribute(
                                                                                            "data-checkout-discount-amount-target"
                                                                                        )
                                                                                    ) || 0) / 100);
                                                                        }
                                                                        return void a(o, s);
                                                                    } catch (t) { }
                                                                e.isEmpty(t) ||
                                                                    e.showMessage(
                                                                        e.const.LANG.REQUEST_SEND_ERROR
                                                                    ),
                                                                    a(0);
                                                            }
                                                        }
                                                    );
                                            }),
                                            void e.getThirdPartyCheckoutUrl(!1, u)
                                        );
                                    if (
                                        e.runtime.shopping_product_type ==
                                        e.const.FORM_CONFIG_TYPE.shopify
                                    )
                                        return void a(0);
                                    if (
                                        e.runtime.shopping_product_type ==
                                        e.const.FORM_CONFIG_TYPE.wordpress
                                    ) {
                                        var m = window.location.origin + "/ladipage/api";
                                        return (
                                            e.isEmpty(n.discount_code)
                                                ? (m +=
                                                    "?action=remove_coupon&coupon=" +
                                                    (e.isEmpty(t) ? "" : t.couponOld))
                                                : (m +=
                                                    "?action=apply_coupon&coupon=" + n.discount_code),
                                            void e.sendRequest(
                                                "GET",
                                                m,
                                                null,
                                                !0,
                                                c,
                                                function (i, n, r) {
                                                    if (r.readyState == XMLHttpRequest.DONE) {
                                                        if (200 == n)
                                                            try {
                                                                var o = JSON.parse(i);
                                                                if (200 == o.code)
                                                                    return (
                                                                        (e.runtime.tmp.current_use_coupon = d),
                                                                        void a(o.data)
                                                                    );
                                                                e.isEmpty(o.message) ||
                                                                    e.isEmpty(t) ||
                                                                    e.showMessage(o.message);
                                                            } catch (t) { }
                                                        a(0);
                                                    }
                                                }
                                            )
                                        );
                                    }
                                    var _ = window.ladi("_cart_token").get_cookie(),
                                        g = window.ladi("_checkout_token").get_cookie();
                                    if (e.isEmpty(_) || e.isEmpty(g)) return void a(0);
                                    (c = { "Content-Type": "application/json", "cart-token": _ }),
                                        e.sendRequest(
                                            "POST",
                                            e.const.API_LADISALE_VALIDATE_DISCOUNT.format(g),
                                            JSON.stringify(n),
                                            !0,
                                            c,
                                            function (i, n, r) {
                                                if (r.readyState == XMLHttpRequest.DONE) {
                                                    if (200 == n)
                                                        try {
                                                            var o = JSON.parse(i);
                                                            if (200 == o.code)
                                                                return (
                                                                    e.isEmpty(o.data.discount_error)
                                                                        ? (e.runtime.tmp.current_use_coupon = d)
                                                                        : e.isEmpty(t) ||
                                                                        e.showMessage(o.data.discount_error),
                                                                    void a(o.data.discount_price)
                                                                );
                                                        } catch (t) { }
                                                    a(0);
                                                }
                                            }
                                        );
                                }
                            }
                        }
                    },
                    e.isEmpty(t) ? 1e3 : 0
                )))
            : a(t.discount_price, t.docCrawl);
    }),
    (LadiPageScriptV2.prototype.updateCartPromotion = function (t, e, i) {
        var a = this,
            n = function (t) {
                for (var e = 0; e < a.runtime.tmp.cart.length; e++) {
                    var i = a.runtime.tmp.cart[e];
                    if (
                        i.product_id == t.product_id &&
                        i.product_variant_id == t.product_variant_id
                    ) {
                        a.runtime.tmp.use_cart_line_price_original || t.sub_total == t.total
                            ? delete i.promotion
                            : (i.promotion = t),
                            (a.runtime.tmp.cart[e] = i);
                        for (
                            var n = document.querySelectorAll(
                                '.ladi-cart .ladi-cart-row .ladi-cart-price span[data-product-variant-id="' +
                                i.product_variant_id +
                                '"]'
                            ),
                            r = 0;
                            r < n.length;
                            r++
                        ) {
                            var o = a.findAncestor(n[r], "ladi-cart-row"),
                                s = o.querySelector(".ladi-cart-price"),
                                l = o.querySelector(".ladi-cart-title"),
                                d = s.querySelector("span.price-compare"),
                                c = l.querySelector("span.promotion-name");
                            if (a.isObject(i.promotion)) {
                                o.classList.add("has-promotion"),
                                    a.isEmpty(d) &&
                                    (((d = document.createElement("span")).className =
                                        "price-compare"),
                                        s.appendChild(d));
                                var u = a.formatNumber(t.total, 3);
                                a.isObject(i.currency) &&
                                    !a.isEmpty(i.currency.symbol) &&
                                    (u = a.formatCurrency(t.total, i.currency.symbol, !0)),
                                    (d.innerHTML = u),
                                    a.isEmpty(c) &&
                                    (((c = document.createElement("span")).className =
                                        "promotion-name"),
                                        l.appendChild(c)),
                                    (c.innerHTML = i.promotion.discount.note);
                            } else
                                o.classList.remove("has-promotion"),
                                    a.isEmpty(d) || d.parentElement.removeChild(d),
                                    a.isEmpty(c) || c.parentElement.removeChild(c);
                        }
                    }
                }
            },
            r = function () {
                var t = [];
                return (
                    a.isArray(a.runtime.tmp.cart) &&
                    a.runtime.tmp.cart.forEach(function (e) {
                        var i = e.quantity;
                        t.push({
                            product_id: e.product_id,
                            product_variant_id: e.product_variant_id,
                            quantity: i,
                        });
                    }),
                    { variants: t }
                );
            },
            o = r(),
            s = JSON.stringify(o);
        if (
            (a.isObject(a.runtime.tmp.info_update_cart_promotion) ||
                (a.runtime.tmp.info_update_cart_promotion = {}),
                !a.isEmpty(t))
        ) {
            var l = [],
                d = a.runtime.tmp.cart;
            a.runtime.tmp.cart = [];
            return (
                -1 !=
                [
                    a.const.FORM_CONFIG_TYPE.sapo,
                    a.const.FORM_CONFIG_TYPE.haravan,
                    a.const.FORM_CONFIG_TYPE.shopify,
                ].indexOf(a.runtime.shopping_product_type) &&
                t.items.forEach(function (t) {
                    var e = null;
                    -1 !=
                        [a.const.FORM_CONFIG_TYPE.sapo].indexOf(
                            a.runtime.shopping_product_type
                        ) &&
                        t.name == t.title &&
                        "Default Title" == t.variant_title &&
                        (t.variant_title = null),
                        -1 !=
                        [
                            a.const.FORM_CONFIG_TYPE.haravan,
                            a.const.FORM_CONFIG_TYPE.shopify,
                        ].indexOf(a.runtime.shopping_product_type) &&
                        t.product_title == t.title &&
                        "Default Title" == t.variant_title &&
                        (t.variant_title = null),
                        -1 !=
                        [
                            a.const.FORM_CONFIG_TYPE.sapo,
                            a.const.FORM_CONFIG_TYPE.haravan,
                        ].indexOf(a.runtime.shopping_product_type) &&
                        (e = {
                            store_id: -1,
                            product_id: t.product_id,
                            product_variant_id: t.variant_id,
                            name: t.title,
                            title: t.variant_title,
                            image: t.image,
                            quantity: t.quantity,
                            inventory_checked: 0,
                            available_quantity: 0,
                            min_buy: 1,
                            max_buy: null,
                        }),
                        -1 !=
                        [a.const.FORM_CONFIG_TYPE.shopify].indexOf(
                            a.runtime.shopping_product_type
                        ) &&
                        (e = {
                            store_id: -1,
                            product_id: t.product_id,
                            product_variant_id: t.variant_id,
                            name: t.product_title,
                            title: t.variant_title,
                            image: t.image,
                            quantity: t.quantity,
                            inventory_checked: 0,
                            available_quantity: 0,
                            min_buy: 1,
                            max_buy: null,
                        });
                    var i = a.runtime.currency;
                    a.runtime.isClient ||
                        (i = LadiPage.getRootScope().getStoreCurrency()),
                        (e.currency = {
                            code: i,
                            symbol: a.formatCurrency(null, i, !1, !0),
                        });
                    var n = d.findIndex(function (t) {
                        return (
                            t.product_id == e.product_id &&
                            t.product_variant_id == e.product_variant_id
                        );
                    });
                    -1 != n && (e.title = d[n].title);
                    var r = null,
                        o = null;
                    if (
                        -1 !=
                        [
                            a.const.FORM_CONFIG_TYPE.sapo,
                            a.const.FORM_CONFIG_TYPE.haravan,
                        ].indexOf(a.runtime.shopping_product_type)
                    ) {
                        if (((e.price = t.price_original), a.isObject(t.properties))) {
                            var s = Object.keys(t.properties);
                            s.length > 0 &&
                                ((r = t.properties[s[0]]),
                                    -1 !=
                                    [a.const.FORM_CONFIG_TYPE.haravan].indexOf(
                                        a.runtime.shopping_product_type
                                    ) &&
                                    ((r = r.split("-")).shift(),
                                        (r = (r = r.join("-")).trim())),
                                    (o = {
                                        product_id: t.product_id,
                                        product_variant_id: t.variant_id,
                                        sub_total: t.line_price_original,
                                        total: t.line_price,
                                        discount: { note: r },
                                    }),
                                    (e.promotion = o),
                                    l.push(o));
                        }
                        a.isEmpty(e.promotion) &&
                            -1 !=
                            [a.const.FORM_CONFIG_TYPE.sapo].indexOf(
                                a.runtime.shopping_product_type
                            ) &&
                            (e.price = t.price);
                    }
                    -1 !=
                        [a.const.FORM_CONFIG_TYPE.shopify].indexOf(
                            a.runtime.shopping_product_type
                        ) &&
                        ((e.price = t.original_price),
                            t.original_line_price != t.line_price &&
                            a.isArray(t.discounts) &&
                            t.discounts.length > 0 &&
                            ((r = t.discounts[0].title),
                                (o = {
                                    product_id: t.product_id,
                                    product_variant_id: t.variant_id,
                                    sub_total: t.original_line_price,
                                    total: t.line_price,
                                    discount: { note: r },
                                }),
                                (e.promotion = o),
                                l.push(o))),
                        -1 !=
                        [
                            a.const.FORM_CONFIG_TYPE.haravan,
                            a.const.FORM_CONFIG_TYPE.shopify,
                        ].indexOf(a.runtime.shopping_product_type) &&
                        ((e.price = e.price / 100),
                            a.isEmpty(e.promotion) ||
                            ((e.promotion.total = e.promotion.total / 100),
                                (e.promotion.sub_total = e.promotion.sub_total / 100))),
                        a.runtime.tmp.cart.push(e);
                }),
                -1 !=
                [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                    a.runtime.shopping_product_type
                ) &&
                t.data.forEach(function (t) {
                    var e = null;
                    a.isObject(t.variation) &&
                        (e = Object.values(t.variation).join(", "));
                    var i = {
                        store_id: -1,
                        product_id: t.product_id,
                        product_variant_id: t.variation_id,
                        name: t.product_name,
                        title: e,
                        min_buy: 1,
                        max_buy: null,
                        price: t.price,
                        image: t.image || "",
                        quantity: t.quantity,
                        inventory_checked: 0,
                        available_quantity: 0,
                    },
                        n = a.runtime.currency;
                    a.runtime.isClient ||
                        (n = LadiPage.getRootScope().getStoreCurrency()),
                        (i.currency = {
                            code: n,
                            symbol: a.formatCurrency(null, n, !1, !0),
                        });
                    var r = d.findIndex(function (t) {
                        return (
                            t.product_id == i.product_id &&
                            t.product_variant_id == i.product_variant_id
                        );
                    });
                    -1 != r && (i.title = d[r].title),
                        (i.cart_item_key = t.key),
                        a.runtime.tmp.cart.push(i);
                }),
                (o = r()),
                (s = JSON.stringify(o)),
                l.forEach(n),
                void (a.runtime.tmp.info_update_cart_promotion[s] = l)
            );
        }
        if (!0 !== a.runtime.tmp.info_update_cart_promotion[s]) {
            if (a.isArray(a.runtime.tmp.info_update_cart_promotion[s]))
                return (
                    a.runtime.tmp.info_update_cart_promotion[s].forEach(n),
                    void a.changeTotalPriceCart()
                );
            if (
                ((a.runtime.tmp.info_update_cart_promotion[s] = !0),
                    -1 ==
                    [
                        a.const.FORM_CONFIG_TYPE.sapo,
                        a.const.FORM_CONFIG_TYPE.haravan,
                        a.const.FORM_CONFIG_TYPE.shopify,
                    ].indexOf(a.runtime.shopping_product_type))
            )
                if (
                    -1 ==
                    [a.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                        a.runtime.shopping_product_type
                    )
                ) {
                    var c = window.ladi("_cart_token").get_cookie(),
                        u = { "Content-Type": "application/json" };
                    a.isEmpty(c) || (u["cart-token"] = c),
                        a.sendRequest(
                            "POST",
                            a.const.API_LADISALE_PROMOTION,
                            JSON.stringify(o),
                            !0,
                            u,
                            function (t, e, r) {
                                if (r.readyState == XMLHttpRequest.DONE) {
                                    if (200 == e)
                                        try {
                                            var o = JSON.parse(t);
                                            if (
                                                200 == o.code &&
                                                a.isObject(o.data) &&
                                                a.isArray(o.data.variants)
                                            )
                                                return (
                                                    o.data.variants.forEach(n),
                                                    (a.runtime.tmp.info_update_cart_promotion[s] =
                                                        o.data.variants),
                                                    a.changeTotalPriceCart(),
                                                    void (a.isFunction(i) && i())
                                                );
                                        } catch (t) { }
                                    delete a.runtime.tmp.info_update_cart_promotion[s],
                                        a.isFunction(i) && i();
                                }
                            }
                        );
                } else
                    a.sendRequest(
                        "GET",
                        window.location.origin + "/ladipage/api?action=cart_info",
                        null,
                        !0,
                        null,
                        function (t, n, r) {
                            if (r.readyState == XMLHttpRequest.DONE) {
                                if (200 == n)
                                    try {
                                        var o = JSON.parse(t);
                                        delete a.runtime.tmp.info_update_cart_promotion[s];
                                        a.updateCartPromotion(o);
                                        return (
                                            e &&
                                            a.runtime.tmp.cart.length > 0 &&
                                            a.reloadCheckoutWordpress(),
                                            a.changeTotalPriceCart(),
                                            void (a.isFunction(i) && i())
                                        );
                                    } catch (t) { }
                                delete a.runtime.tmp.info_update_cart_promotion[s],
                                    a.isFunction(i) && i();
                            }
                        }
                    );
            else
                a.sendRequest(
                    "GET",
                    window.location.origin + "/cart.js",
                    null,
                    !0,
                    null,
                    function (t, n, r) {
                        if (r.readyState == XMLHttpRequest.DONE) {
                            if (200 == n)
                                try {
                                    var o = JSON.parse(t);
                                    delete a.runtime.tmp.info_update_cart_promotion[s];
                                    a.updateCartPromotion(o);
                                    return (
                                        e &&
                                        a.runtime.tmp.cart.length > 0 &&
                                        (-1 !=
                                            [a.const.FORM_CONFIG_TYPE.sapo].indexOf(
                                                a.runtime.shopping_product_type
                                            ) && a.reloadCheckoutSapo(),
                                            -1 !=
                                            [a.const.FORM_CONFIG_TYPE.haravan].indexOf(
                                                a.runtime.shopping_product_type
                                            ) && a.reloadCheckoutHaravan(),
                                            [a.const.FORM_CONFIG_TYPE.shopify].indexOf(
                                                a.runtime.shopping_product_type
                                            )),
                                        a.changeTotalPriceCart(),
                                        void (a.isFunction(i) && i())
                                    );
                                } catch (t) { }
                            delete a.runtime.tmp.info_update_cart_promotion[s],
                                a.isFunction(i) && i();
                        }
                    }
                );
        }
    }),
    (LadiPageScriptV2.prototype.addCartCookie = function (t, e, i, a, n) {
        var r = this,
            o = {},
            s = null,
            l = null;
        if (
            -1 !=
            [
                r.const.FORM_CONFIG_TYPE.sapo,
                r.const.FORM_CONFIG_TYPE.haravan,
                r.const.FORM_CONFIG_TYPE.shopify,
            ].indexOf(r.runtime.shopping_product_type)
        )
            return (
                -1 !=
                [r.const.FORM_CONFIG_TYPE.sapo].indexOf(
                    r.runtime.shopping_product_type
                ) &&
                ((l = new FormData()).append("variantId", e.product_variant_id),
                    l.append("quantity", e.quantity)),
                -1 !=
                [r.const.FORM_CONFIG_TYPE.haravan].indexOf(
                    r.runtime.shopping_product_type
                ) &&
                ((s = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                }),
                    (l = { id: e.product_variant_id, quantity: e.quantity }),
                    (l = Object.keys(l)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(l[e])), t;
                        }, [])
                        .join("&"))),
                -1 !=
                [r.const.FORM_CONFIG_TYPE.shopify].indexOf(
                    r.runtime.shopping_product_type
                ) &&
                ((s = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                }),
                    (l = {
                        id: e.product_variant_id,
                        quantity: e.quantity,
                        form_type: "product",
                    }),
                    (l = Object.keys(l)
                        .reduce(function (t, e) {
                            return t.push(e + "=" + encodeURIComponent(l[e])), t;
                        }, [])
                        .join("&"))),
                void this.sendRequest(
                    "POST",
                    window.location.origin + "/cart/add.js",
                    l,
                    !0,
                    s,
                    function (t, e, s) {
                        if (s.readyState == XMLHttpRequest.DONE) {
                            if (200 == e)
                                try {
                                    if (((o = JSON.parse(t)), !r.isEmpty(o.id)))
                                        return (
                                            r.isFunction(i) && i(),
                                            r.isFunction(n) && n(),
                                            r.reloadPriceDiscount(),
                                            void r.reloadFeeShipping()
                                        );
                                } catch (t) { }
                            r.isFunction(a) && a(o), r.isFunction(n) && n();
                        }
                    }
                )
            );
        if (
            -1 ==
            [r.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                r.runtime.shopping_product_type
            )
        ) {
            var d = window.ladi("_cart_token").get_cookie();
            ((s = { "Content-Type": "application/json" })["store-id"] = t),
                this.isEmpty(d) || (s["cart-token"] = d);
            var c = e.quantity;
            (l = JSON.stringify({
                type: "LP",
                product_variant_id: e.product_variant_id,
                quantity: c,
            })),
                this.sendRequest(
                    "POST",
                    this.const.API_LADISALE_ADD,
                    l,
                    !0,
                    s,
                    function (t, e, s) {
                        if (s.readyState == XMLHttpRequest.DONE) {
                            if (200 == e)
                                try {
                                    if (200 == (o = JSON.parse(t)).code)
                                        return (
                                            window
                                                .ladi("_cart_token")
                                                .set_cookie(o.data.cart_token, 30),
                                            window
                                                .ladi("_checkout_token")
                                                .set_cookie(o.data.checkout_token, 30),
                                            (r.runtime.tmp.ladisales_checkout_url = o.data.url),
                                            r.isFunction(i) && i(),
                                            r.isFunction(n) && n(),
                                            r.reloadPriceDiscount(),
                                            void r.reloadFeeShipping()
                                        );
                                } catch (t) { }
                            r.isFunction(a) && a(o), r.isFunction(n) && n();
                        }
                    }
                );
        } else
            this.sendRequest(
                "POST",
                window.location.origin +
                "/ladipage/api?action=cart_add&product_id=" +
                e.product_id +
                "&variant_id=" +
                e.product_variant_id +
                "&qty=" +
                e.quantity,
                l,
                !0,
                s,
                function (t, e, s) {
                    if (s.readyState == XMLHttpRequest.DONE) {
                        if (200 == e)
                            try {
                                if (200 == (o = JSON.parse(t)).code)
                                    return (
                                        r.updateCartPromotion(o),
                                        r.isFunction(i) && i(),
                                        r.isFunction(n) && n(),
                                        r.reloadPriceDiscount(),
                                        void r.reloadFeeShipping()
                                    );
                            } catch (t) { }
                        r.isFunction(a) && a(o), r.isFunction(n) && n();
                    }
                }
            );
    }),
    (LadiPageScriptV2.prototype.updateCartCookie = function (t, e, i, a, n) {
        var r = this,
            o = {},
            s = null,
            l = null,
            d = null;
        if (
            -1 ==
            [
                r.const.FORM_CONFIG_TYPE.sapo,
                r.const.FORM_CONFIG_TYPE.haravan,
                r.const.FORM_CONFIG_TYPE.shopify,
            ].indexOf(r.runtime.shopping_product_type)
        ) {
            if (
                -1 !=
                [r.const.FORM_CONFIG_TYPE.wordpress].indexOf(
                    r.runtime.shopping_product_type
                )
            )
                return (
                    (d =
                        window.location.origin +
                        "/ladipage/api?action=cart_update_item_qty&cart_item_key=" +
                        t.cart_item_key +
                        "&qty=" +
                        t.quantity),
                    e &&
                    (d =
                        0 == t.quantity
                            ? window.location.origin + "/ladipage/api?action=cart_empty"
                            : window.location.origin +
                            "/ladipage/api?action=cart_update_item_qty&qty=" +
                            t.quantity),
                    void this.sendRequest("POST", d, s, !0, l, function (t, e, s) {
                        if (s.readyState == XMLHttpRequest.DONE) {
                            if (200 == e)
                                try {
                                    if (200 == (o = JSON.parse(t)).code)
                                        return (
                                            r.updateCartPromotion(o),
                                            r.isFunction(i) && i(),
                                            r.isFunction(n) && n(),
                                            r.reloadPriceDiscount(),
                                            void r.reloadFeeShipping()
                                        );
                                } catch (t) { }
                            r.isFunction(a) && a(o), r.isFunction(n) && n();
                        }
                    })
                );
            var c = window.ladi("_cart_token").get_cookie();
            (l = { "Content-Type": "application/json" }),
                this.isEmpty(c) || (l["cart-token"] = c);
            var u = t.quantity;
            (s = JSON.stringify({
                product_variant_id: t.product_variant_id,
                quantity: u,
            })),
                this.sendRequest(
                    "POST",
                    this.const.API_LADISALE_UPDATE,
                    s,
                    !0,
                    l,
                    function (t, e, s) {
                        if (s.readyState == XMLHttpRequest.DONE) {
                            if (200 == e)
                                try {
                                    if (200 == (o = JSON.parse(t)).code)
                                        return (
                                            r.isFunction(i) && i(),
                                            r.isFunction(n) && n(),
                                            r.reloadPriceDiscount(),
                                            void r.reloadFeeShipping()
                                        );
                                } catch (t) { }
                            r.isFunction(a) && a(o), r.isFunction(n) && n();
                        }
                    }
                );
        } else {
            if (
                (-1 !=
                    [r.const.FORM_CONFIG_TYPE.sapo].indexOf(
                        r.runtime.shopping_product_type
                    ) &&
                    ((d = window.location.origin + "/cart/change.js"),
                        (s = new FormData()).append("variantId", t.product_variant_id),
                        s.append("quantity", t.quantity)),
                    -1 !=
                    [r.const.FORM_CONFIG_TYPE.haravan].indexOf(
                        r.runtime.shopping_product_type
                    ) &&
                    ((d = window.location.origin + "/cart/update.js"),
                        (l = {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Requested-With": "XMLHttpRequest",
                        }),
                        (s = r.runtime.tmp.cart
                            .reduce(function (i, a) {
                                var n = a.quantity;
                                return (
                                    (e || a.product_variant_id == t.product_variant_id) &&
                                    (n = t.quantity),
                                    i.push("updates[]=" + encodeURIComponent(n)),
                                    i
                                );
                            }, [])
                            .join("&"))),
                    -1 !=
                    [r.const.FORM_CONFIG_TYPE.shopify].indexOf(
                        r.runtime.shopping_product_type
                    ))
            ) {
                (d = window.location.origin + "/cart/change.js"),
                    (l = {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    });
                var p = r.runtime.tmp.cart.findIndex(function (e) {
                    return e.product_variant_id == t.product_variant_id;
                });
                if (-1 == p) return;
                s = JSON.stringify({ line: p + 1, quantity: t.quantity });
            }
            this.sendRequest("POST", d, s, !0, l, function (t, e, s) {
                if (s.readyState == XMLHttpRequest.DONE) {
                    if (200 == e)
                        try {
                            if (((o = JSON.parse(t)), !r.isEmpty(o.token)))
                                return (
                                    r.updateCartPromotion(o),
                                    r.isFunction(i) && i(),
                                    r.isFunction(n) && n(),
                                    r.reloadPriceDiscount(),
                                    void r.reloadFeeShipping()
                                );
                        } catch (t) { }
                    r.isFunction(a) && a(o), r.isFunction(n) && n();
                }
            });
        }
    }),
    (LadiPageScriptV2.prototype.getMessageNameProduct = function (t, e) {
        var i = this.const.LANG.PRODUCT;
        return (
            this.isObject(t) &&
            (t.product_type == this.const.PRODUCT_TYPE.event
                ? (i = this.const.LANG.TICKET)
                : t.product_type == this.const.PRODUCT_TYPE.service &&
                (i = this.const.LANG.SERVICE)),
            e || (i = i.toLowerCase()),
            i
        );
    }),
    (LadiPageScriptV2.prototype.createCartData = function (t) {
        (this.runtime.tmp.cart = []),
            (this.runtime.tmp.add_to_cart_discount = 0),
            (this.runtime.tmp.add_to_cart_fee_shipping = 0);
        var e = this,
            i = function () {
                e.runtime.tmp.generateCart(),
                    e.changeTotalPriceCart(),
                    e.runResizeAll(),
                    e.isFunction(t) && t();
            };
        if (
            (e.isEmpty(e.runtime.shopping_product_type) ||
                (window.ladi("_shopping_product_type").get_cookie() !=
                    e.runtime.shopping_product_type &&
                    (window.ladi("_cart_token").delete_cookie(),
                        window.ladi("_checkout_token").delete_cookie(),
                        window
                            .ladi("_shopping_product_type")
                            .set_cookie(e.runtime.shopping_product_type, 30))),
                -1 ==
                [
                    e.const.FORM_CONFIG_TYPE.sapo,
                    e.const.FORM_CONFIG_TYPE.haravan,
                    e.const.FORM_CONFIG_TYPE.wordpress,
                ].indexOf(e.runtime.shopping_product_type))
        )
            if (
                -1 ==
                [e.const.FORM_CONFIG_TYPE.shopify].indexOf(
                    e.runtime.shopping_product_type
                )
            ) {
                var a = window.ladi("_cart_token").get_cookie(),
                    n = { "Content-Type": "application/json" };
                if (!this.isEmpty(a))
                    return (
                        (n["cart-token"] = a),
                        void this.sendRequest(
                            "POST",
                            this.const.API_LADISALE_SHOW,
                            JSON.stringify({ type: "LP" }),
                            !0,
                            n,
                            function (t, a, n) {
                                if (n.readyState == XMLHttpRequest.DONE) {
                                    if (200 == a)
                                        try {
                                            var r = JSON.parse(t);
                                            200 == r.code &&
                                                ((e.runtime.tmp.ladisales_checkout_url = r.data.url),
                                                    r.data.items.forEach(function (t) {
                                                        var i = e.isEmpty(t.src) ? "" : t.src;
                                                        e.isEmpty(i) ||
                                                            !e.isString(i) ||
                                                            i.startsWith("http://") ||
                                                            i.startsWith("https://") ||
                                                            i.startsWith("//") ||
                                                            (i =
                                                                "https://" + e.const.STATIC_W_DOMAIN + "/" + i);
                                                        var a = e.runtime.tmp.cart.findIndex(function (e) {
                                                            return (
                                                                e.store_id == t.store_id &&
                                                                e.product_id == t.product_id &&
                                                                e.product_variant_id == t.product_variant_id
                                                            );
                                                        }),
                                                            n = t.quantity,
                                                            o = t.option_name,
                                                            s = t.price;
                                                        e.isEmpty(t.package_quantity) ||
                                                            e.isEmpty(t.package_quantity_unit) ||
                                                            (o =
                                                                o +
                                                                " (" +
                                                                t.package_quantity +
                                                                " " +
                                                                t.package_quantity_unit +
                                                                ")"),
                                                            -1 == a &&
                                                            e.runtime.tmp.cart.push({
                                                                store_id: t.store_id,
                                                                product_id: t.product_id,
                                                                product_variant_id: t.product_variant_id,
                                                                name: t.product_name,
                                                                title: o,
                                                                price: s,
                                                                image: i,
                                                                quantity: n,
                                                                inventory_checked: t.inventory_checked,
                                                                available_quantity: t.available_quantity,
                                                                min_buy: t.min_buy,
                                                                max_buy: t.max_buy,
                                                                currency: r.data.store_info.currency,
                                                                product_type: t.product_type,
                                                                package_quantity: t.package_quantity,
                                                            });
                                                    }),
                                                    e.updateCartPromotion());
                                        } catch (t) { }
                                    i();
                                }
                            }
                        )
                    );
                i();
            } else
                e.getCheckoutShopify(
                    null,
                    function (t, a) {
                        e.updateCartPromotion(null, !0, i);
                    },
                    function () {
                        e.updateCartPromotion(null, !0, i);
                    }
                );
        else this.updateCartPromotion(null, !0, i);
    }),
    (LadiPageScriptV2.prototype.changeTotalPriceCart = function (t) {
        var e = this,
            i = 0,
            a = 0;
        this.runtime.tmp.cart.forEach(function (t) {
            (a += t.quantity),
                e.isObject(t.promotion)
                    ? (i += t.promotion.total)
                    : (i += t.price * t.quantity);
        }),
            (i = i < 0 ? 0 : i);
        var n = this.runtime.tmp.add_to_cart_fee_shipping || 0,
            r = this.runtime.tmp.add_to_cart_discount || 0,
            o = i + n - r;
        if (((o = o < 0 ? 0 : o), t))
            return {
                cart_price: i,
                cart_checkout_price: o,
                cart_fee_shipping: n,
                cart_discount: r,
                total_quantity: a,
            };
        var s = this.formatNumber(i, 3),
            l = this.formatNumber(o, 3),
            d = this.formatNumber(n, 3),
            c = this.formatNumber(r, 3);
        if (
            this.runtime.tmp.cart.length > 0 &&
            !this.isEmpty(this.runtime.tmp.cart[0].currency) &&
            !this.isEmpty(this.runtime.tmp.cart[0].currency.symbol)
        ) {
            var u = this.runtime.tmp.cart[0].currency.symbol;
            (s = this.formatCurrency(i, u, !0)),
                (l = this.formatCurrency(o, u, !0)),
                (d = this.formatCurrency(n, u, !0)),
                (c = this.formatCurrency(r, u, !0));
        }
        this.setDataReplaceStr("cart_price", s),
            this.setDataReplaceStr("cart_checkout_price", l),
            this.setDataReplaceStr("cart_fee_shipping", d),
            this.setDataReplaceStr("cart_discount", c),
            this.setDataReplaceStr("cart_quantity", a),
            this.setDataReplaceElement(!1);
    }),
    (LadiPageScriptV2.prototype.removeAddToCartProduct = function (t, e, i, a) {
        var n = this.runtime.tmp.cart.findIndex(function (e) {
            return e.product_variant_id == t;
        }),
            r = this;
        -1 != n &&
            this.updateCartCookie(
                {
                    cart_item_key: this.runtime.tmp.cart[n].cart_item_key,
                    product_variant_id: t,
                    quantity: 0,
                },
                i,
                function () {
                    -1 !=
                        (n = r.runtime.tmp.cart.findIndex(function (e) {
                            return e.product_variant_id == t;
                        })) && r.runtime.tmp.cart.splice(n, 1),
                        i && (r.runtime.tmp.cart = []),
                        r.runtime.tmp.generateCart(),
                        r.changeTotalPriceCart();
                    var e = document.getElementsByClassName("ladi-form-remove-coupon")[0];
                    r.isEmpty(e) || e.click(),
                        r.updateCartPromotion(),
                        0 == r.runtime.tmp.cart.length &&
                        -1 !=
                        [r.const.FORM_CONFIG_TYPE.ladisales].indexOf(
                            r.runtime.shopping_product_type
                        ) &&
                        (window.ladi("_cart_token").delete_cookie(),
                            window.ladi("_checkout_token").delete_cookie()),
                        r.runResizeAll(),
                        r.isFunction(a) && a(!0);
                },
                function (t) {
                    e && r.showMessage(t.message), r.isFunction(a) && a(!1);
                }
            );
    }),
    (LadiPageScriptV2.prototype.buttonAddToCartProductQuantity = function (t, e) {
        if (
            this.isArray(this.runtime.tmp.cart) &&
            0 != this.runtime.tmp.cart.length
        ) {
            var i = this.findAncestor(t, "ladi-cart-quantity");
            if (!this.isEmpty(i)) {
                var a = i.querySelector("input");
                if (!this.isEmpty(a)) {
                    var n = parseInt(a.value) || 0;
                    (a.value =
                        n + e < a.getAttribute("min") ? a.getAttribute("min") : n + e),
                        a.value != n && this.fireEvent(a, "input");
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.changeAddToCartProductQuantity = function (
        t,
        e,
        i
    ) {
        var a = this.runtime.tmp.cart.findIndex(function (t) {
            return t.product_variant_id == e;
        }),
            n = this;
        if (-1 != a) {
            var r = !1,
                o = -1,
                s = 1,
                l = null,
                d = null,
                c = this.runtime.tmp.cart[a];
            n.isEmpty(c) || ((s = c.min_buy || s), (l = c.max_buy));
            var u = this.runtime.tmp.cart[a].quantity;
            if (this.isEmpty(t.value))
                i && (t.value = s), (this.runtime.tmp.cart[a].quantity = s);
            else {
                var p = parseInt(t.value) || 0;
                1 == this.runtime.tmp.cart[a].inventory_checked &&
                    p > (o = this.runtime.tmp.cart[a].available_quantity) &&
                    ((p = o), (r = !0), (d = o)),
                    (p = p < s ? s : p),
                    !this.isEmpty(l) &&
                    p > l &&
                    ((p = l), (r = !0), (n.isEmpty(d) || d > l) && (d = l)),
                    (this.runtime.tmp.cart[a].quantity = p),
                    (t.value = p);
            }
            r &&
                this.showMessage(this.const.LANG.ADD_TO_CART_MAX_QUANTITY, {
                    max: d,
                    name: n.getMessageNameProduct(c),
                });
            var m = this.runtime.tmp.cart[a].quantity;
            if (u == m) return void (t.value = u);
            var _ = {
                cart_item_key: this.runtime.tmp.cart[a].cart_item_key,
                product_variant_id: this.runtime.tmp.cart[a].product_variant_id,
                quantity: m,
            };
            (_.product_type = this.runtime.tmp.cart[a].product_type),
                (_.package_quantity = this.runtime.tmp.cart[a].package_quantity),
                this.updateCartCookie(
                    _,
                    !1,
                    function () {
                        var t = document.getElementsByClassName(
                            "ladi-form-remove-coupon"
                        )[0];
                        n.isEmpty(t) || t.click(), n.updateCartPromotion();
                    },
                    function (t) {
                        (n.runtime.tmp.cart[a].quantity -= m - u), n.showMessage(t.message);
                    },
                    function () {
                        if (
                            (n.changeTotalPriceCart(),
                                -1 !=
                                (a = n.runtime.tmp.cart.findIndex(function (t) {
                                    return t.product_variant_id == e;
                                })))
                        ) {
                            var i =
                                n.runtime.tmp.cart[a].price * n.runtime.tmp.cart[a].quantity,
                                r = n.formatNumber(i, 3);
                            n.isObject(n.runtime.tmp.cart[a].currency) &&
                                !n.isEmpty(n.runtime.tmp.cart[a].currency.symbol) &&
                                (r = n.formatCurrency(
                                    i,
                                    n.runtime.tmp.cart[a].currency.symbol,
                                    !0
                                ));
                            for (
                                var o = document.querySelectorAll(
                                    '.ladi-cart-price span[data-product-variant-id="' + e + '"]'
                                ),
                                s = 0;
                                s < o.length;
                                s++
                            )
                                if (
                                    o[s].getAttribute("data-store-id") ==
                                    n.runtime.tmp.cart[a].store_id &&
                                    o[s].getAttribute("data-product-id") ==
                                    n.runtime.tmp.cart[a].product_id
                                ) {
                                    o[s].innerHTML = r;
                                    var l = n.findAncestor(o[s], "ladi-cart-row");
                                    if (!n.isEmpty(l)) {
                                        var d = n.findAncestor(t, "ladi-element"),
                                            c = n.findAncestor(l, "ladi-element");
                                        if (!n.isEmpty(d) && !n.isEmpty(c) && d.id == c.id)
                                            continue;
                                        var u = l.querySelector(".ladi-cart-image-quantity");
                                        n.isEmpty(u) ||
                                            (u.innerHTML = n.runtime.tmp.cart[a].quantity);
                                        var p = l.querySelector(".ladi-cart-quantity input");
                                        n.isEmpty(p) || (p.value = n.runtime.tmp.cart[a].quantity);
                                    }
                                }
                        }
                    }
                );
        }
    }),
    (LadiPageScriptV2.prototype.updateProductVariantSelectOption = function (
        t,
        e,
        i,
        a,
        n
    ) {
        var r = this,
            o = t.target,
            s = r.generateVariantProduct(
                e,
                !1,
                null,
                null,
                null,
                null,
                !0,
                !0,
                function (o) {
                    r.updateProductVariantSelectOption(t, e, i, a, n);
                }
            );
        if (r.isObject(s)) {
            var l = r.getProductVariantId(o, s.product),
                d = r.findAncestor(o, "ladi-collection-item"),
                c = [],
                u = 0;
            if (r.isEmpty(d))
                for (
                    var p = document.querySelectorAll('[data-variant="true"]'), m = 0;
                    m < p.length;
                    m++
                ) {
                    var _ = r.findAncestor(p[m], "ladi-form");
                    if (
                        !r.isEmpty(_) &&
                        ((_ = r.findAncestor(_, "ladi-element")),
                            r.isEmpty(r.findAncestor(_, "ladi-collection")))
                    ) {
                        var g = r.runtime.eventData[_.id];
                        r.isEmpty(g) ||
                            g["option.product_type"] != e["option.product_type"] ||
                            g["option.product_id"] != e["option.product_id"] ||
                            c.push(p[m]);
                    }
                }
            else c = d.querySelectorAll('[data-variant="true"]');
            var y = [];
            for (u = 0; u < c.length; u++) {
                if (a) {
                    var f = r.findAncestor(c[u], "ladi-popup");
                    if (r.isEmpty(f)) continue;
                    if (
                        "POPUP_PRODUCT" != (f = r.findAncestor(f, "ladi-element")).id &&
                        "POPUP_BLOG" != f.id
                    )
                        continue;
                }
                y.push(c[u]);
            }
            var h = o.getAttribute("data-product-option-id"),
                v = null,
                E = null,
                P = null;
            if (r.isArray(s.product.variants) && 0 != s.product.variants.length) {
                if (r.isString(s.product.variants[0].option_ids)) {
                    for (
                        P = s.product.variants[0].option_ids.split("/"), u = 0;
                        u < P.length;
                        u++
                    )
                        if (P[u] == h) {
                            E = u;
                            break;
                        }
                    if (!r.isEmpty(E)) {
                        v = {};
                        var L = o.value;
                        o.classList.contains("ladi-form-label-container") &&
                            (L = r.runtime.tmp.getLabelValue(o)),
                            s.product.variants.forEach(function (t) {
                                if (r.isEmpty(L) || L == t["option" + (E + 1)])
                                    for (u = 0; u < P.length; u++)
                                        r.isArray(v[P[u]]) || (v[P[u]] = []),
                                            u != E && v[P[u]].push(t["option" + (u + 1)]);
                            });
                    }
                }
                for (var A = v, b = [], w = [], S = null, T = 0; T < y.length; T++) {
                    var O = r.runtime.eventData[y[T].id];
                    if (!r.isEmpty(O)) {
                        v = r.copy(A);
                        var C = 0,
                            N = 0,
                            I = 0,
                            k = 0,
                            x = null,
                            R = null,
                            D = null,
                            F = null;
                        if (
                            O["option.product_variant_type"] ==
                            r.const.PRODUCT_VARIANT_TYPE.combobox
                        ) {
                            if (
                                ((S = y[T].querySelectorAll("select[data-product-option-id]")),
                                    r.isObject(v))
                            ) {
                                for (C = 0; C < S.length; C++)
                                    if ((x = S[C].getAttribute("data-product-option-id")) != h)
                                        for (
                                            (r.isArray(v[x]) && -1 != v[x].indexOf(S[C].value)) ||
                                            (S[C].value = ""),
                                            R = S[C].getElementsByTagName("option"),
                                            N = 0;
                                            N < R.length;
                                            N++
                                        )
                                            r.isEmpty(R[N].getAttribute("value")) ||
                                                R[N].removeAttribute("disabled");
                                for (C = 0; C < S.length; C++) {
                                    for (
                                        x = S[C].getAttribute("data-product-option-id"),
                                        v = {},
                                        I = 0;
                                        I < s.product.variants.length;
                                        I++
                                    )
                                        if (
                                            ((F = s.product.variants[I]),
                                                (P = F.option_ids.split("/")),
                                                -1 != (E = P.indexOf(x)) &&
                                                (r.isEmpty(S[C].value) ||
                                                    S[C].value == F["option" + (E + 1)]))
                                        )
                                            for (u = 0; u < P.length; u++)
                                                r.isArray(v[P[u]]) || (v[P[u]] = []),
                                                    u != E && v[P[u]].push(F["option" + (u + 1)]);
                                    for (k = 0; k < S.length; k++)
                                        if ((D = S[k].getAttribute("data-product-option-id")) != x)
                                            for (
                                                R = S[k].getElementsByTagName("option"), N = 0;
                                                N < R.length;
                                                N++
                                            )
                                                r.isEmpty(R[N].getAttribute("value")) ||
                                                    (r.isArray(v[D]) &&
                                                        -1 != v[D].indexOf(R[N].getAttribute("value"))) ||
                                                    R[N].setAttribute("disabled", "");
                                }
                            }
                            if (!r.isObject(v)) for (C = 0; C < S.length; C++) b.push(S[C]);
                        }
                        if (
                            O["option.product_variant_type"] ==
                            r.const.PRODUCT_VARIANT_TYPE.label
                        ) {
                            if (
                                ((S = y[T].querySelectorAll(
                                    ".ladi-form-label-container[data-product-option-id]"
                                )),
                                    r.isObject(v))
                            ) {
                                for (C = 0; C < S.length; C++)
                                    if ((x = S[C].getAttribute("data-product-option-id")) != h) {
                                        var M = r.runtime.tmp.getLabelValue(S[C]);
                                        for (
                                            (r.isArray(v[x]) && -1 != v[x].indexOf(M)) ||
                                            r.runtime.tmp.updateLabelValue(S[C], null),
                                            R = S[C].getElementsByClassName("ladi-form-label-item"),
                                            N = 0;
                                            N < R.length;
                                            N++
                                        )
                                            R[N].classList.contains("no-value") ||
                                                R[N].classList.remove("disabled");
                                    }
                                for (C = 0; C < S.length; C++) {
                                    for (
                                        x = S[C].getAttribute("data-product-option-id"),
                                        v = {},
                                        I = 0;
                                        I < s.product.variants.length;
                                        I++
                                    )
                                        if (
                                            ((F = s.product.variants[I]),
                                                (P = F.option_ids.split("/")),
                                                -1 != (E = P.indexOf(x)))
                                        ) {
                                            var q = r.runtime.tmp.getLabelValue(S[C]);
                                            if (r.isEmpty(q) || q == F["option" + (E + 1)])
                                                for (u = 0; u < P.length; u++)
                                                    r.isArray(v[P[u]]) || (v[P[u]] = []),
                                                        u != E && v[P[u]].push(F["option" + (u + 1)]);
                                        }
                                    for (k = 0; k < S.length; k++)
                                        if ((D = S[k].getAttribute("data-product-option-id")) != x)
                                            for (
                                                R = S[k].getElementsByClassName("ladi-form-label-item"),
                                                N = 0;
                                                N < R.length;
                                                N++
                                            )
                                                if (!R[N].classList.contains("no-value")) {
                                                    var B = r.runtime.tmp.getOptionLabelValue(R[N]);
                                                    (r.isArray(v[D]) && -1 != v[D].indexOf(B)) ||
                                                        R[N].classList.add("disabled");
                                                }
                                }
                            }
                            if (!r.isObject(v)) for (C = 0; C < S.length; C++) w.push(S[C]);
                        }
                    }
                }
                !r.isEmpty(l) && r.isFunction(n) && n();
                for (var Y = null; b.length > 0;)
                    (Y = b.shift()), r.fireEvent(Y, "change");
                for (; w.length > 0;)
                    (Y = w.shift()), r.runtime.tmp.fireEventLabelChange(Y);
                for (
                    S = document.querySelectorAll(
                        ".ladi-form .ladi-form-label-container"
                    ),
                    T = 0;
                    T < S.length;
                    T++
                ) {
                    var V = r.runtime.tmp.getLabelValue(S[T]);
                    if (!r.isEmpty(V))
                        r
                            .findAncestor(S[T], "ladi-element")
                            .getAttribute("data-title-type") ==
                            r.const.PRODUCT_VARIANT_TITLE.top && (V = ": " + V);
                    var H = r.findAncestor(S[T], "ladi-form-item-box");
                    r.isEmpty(H) ||
                        ((H = H.querySelector(".ladi-form-item-title-value")),
                            r.isEmpty(H) || (H.innerHTML = V));
                }
            }
        }
    }),
    (LadiPageScriptV2.prototype.updateProductVariantSelectOptionFirst = function (
        t,
        e,
        i
    ) {
        var a = this,
            n = a.generateVariantProduct(
                t,
                !1,
                null,
                null,
                null,
                null,
                !0,
                !0,
                function () {
                    a.updateProductVariantSelectOptionFirst(t, e, i);
                }
            );
        if (a.isObject(n) && a.isObject(n.product)) {
            var r = i.querySelectorAll("select.ladi-form-control"),
                o = i.querySelectorAll(".ladi-form-label-container"),
                s = 0;
            if (a.isArray(n.product.variants) && 0 != n.product.variants.length) {
                var l = null,
                    d = null;
                if (
                    (a.isEmpty(t["option.product_variant_id"]) ||
                        (l = n.product.variants.find(function (e) {
                            return e.product_variant_id == t["option.product_variant_id"];
                        })),
                        a.isEmpty(l) && (l = n.product.variants[0]),
                        e["option.product_variant_type"] ==
                        a.const.PRODUCT_VARIANT_TYPE.combined)
                )
                    for (s = 0; s < r.length; s++)
                        (d = r[s].querySelector(
                            'option[data-product-variant-id="' + l.product_variant_id + '"]'
                        )),
                            a.isEmpty(d) ||
                            ((r[s].value = d.getAttribute("value")),
                                a.fireEvent(r[s], "change"));
                e["option.product_variant_type"] ==
                    a.const.PRODUCT_VARIANT_TYPE.combobox &&
                    a.isString(l.option_ids) &&
                    l.option_ids.split("/").forEach(function (t, e) {
                        for (s = 0; s < r.length; s++)
                            r[s].getAttribute("data-product-option-id") == t &&
                                ((r[s].value = l["option" + (e + 1)] || ""),
                                    a.fireEvent(r[s], "change"));
                    }),
                    e["option.product_variant_type"] ==
                    a.const.PRODUCT_VARIANT_TYPE.label &&
                    a.isString(l.option_ids) &&
                    l.option_ids.split("/").forEach(function (t, e) {
                        for (s = 0; s < o.length; s++)
                            o[s].getAttribute("data-product-option-id") == t &&
                                (a.runtime.tmp.updateLabelValue(
                                    o[s],
                                    l["option" + (e + 1)] || ""
                                ),
                                    a.runtime.tmp.fireEventLabelChange(o[s]));
                    });
            } else {
                for (s = 0; s < r.length; s++)
                    (r[s].value = ""), a.fireEvent(r[s], "change");
                for (s = 0; s < o.length; s++)
                    a.runtime.tmp.updateLabelValue(o[s], null),
                        a.runtime.tmp.fireEventLabelChange(o[s]);
            }
        }
    }),
    (LadiPageScriptV2.prototype.generateHtmlCart = function (t, e, i) {
        var a = this,
            n = [];
        if (i) n = a.runtime.tmp.cart;
        else {
            var r = LadiPage.getRootScope().getStoreCurrency();
            n = [
                {
                    name: "Product Name",
                    title: "Product Variant",
                    price: 9999,
                    image: LadiPage.getRootScope().logoUrlColor,
                    quantity: 1,
                    inventory_checked: 0,
                    available_quantity: 999,
                    currency: { code: r, symbol: a.formatCurrency(null, r, !1, !0) },
                },
            ];
        }
        var o = "";
        if (((o += "<tbody>"), 0 == n.length))
            o += '<tr><td class="ladi-cart-no-product">' + e + "</td></tr>";
        else {
            n.forEach(function (e, n) {
                if (!(e.quantity <= 0)) {
                    var r = a.getOptimizeImage(e.image, 60, 60, !0, !1, !0, i);
                    (o +=
                        '<tr class="ladi-cart-row' +
                        (a.isObject(e.promotion) ? " has-promotion" : "") +
                        '"><td class="ladi-cart-image"><img src="' +
                        r +
                        '" />'),
                        t == a.const.CART_LAYOUT.viewonly &&
                        (o +=
                            '<span class="ladi-cart-image-quantity">' +
                            e.quantity +
                            "</span>"),
                        (o += "</td>"),
                        (o +=
                            '<td class="ladi-cart-title"><span class="ladi-cart-title-name">' +
                            e.name +
                            '</span><span class="ladi-cart-title-variant">' +
                            (e.title || "") +
                            "</span>"),
                        a.isObject(e.promotion) &&
                        (o +=
                            '<span class="promotion-name">' +
                            e.promotion.discount.note +
                            "</span>"),
                        (o += "</td>"),
                        t == a.const.CART_LAYOUT.editable &&
                        (o +=
                            '<td class="ladi-cart-quantity"><div class="ladi-cart-quantity-content"><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, -1);" type="button"><span>-</span></button><input' +
                            (i ? "" : " disabled") +
                            ' type="number" min="1" value="' +
                            e.quantity +
                            '" oninput="javascript: LadiPageScript.changeAddToCartProductQuantity(this, ' +
                            e.product_variant_id +
                            ', true);" /><button onclick="javascript: LadiPageScript.buttonAddToCartProductQuantity(this, 1);" type="button"><span>+</span></button></div></td>'),
                        (o +=
                            '<td class="ladi-cart-price"><span' +
                            (a.isNull(e.store_id)
                                ? ""
                                : ' data-store-id="' + e.store_id + '"') +
                            ' data-product-id="' +
                            e.product_id +
                            '" data-product-variant-id="' +
                            e.product_variant_id +
                            '">');
                    var s = e.price * e.quantity,
                        l = a.formatNumber(s, 3);
                    a.isObject(e.currency) &&
                        !a.isEmpty(e.currency.symbol) &&
                        (l = a.formatCurrency(s, e.currency.symbol, !0)),
                        (o += l + "</span>"),
                        a.isObject(e.promotion) &&
                        ((s = e.promotion.total),
                            (l = a.formatNumber(s, 3)),
                            a.isObject(e.currency) &&
                            !a.isEmpty(e.currency.symbol) &&
                            (l = a.formatCurrency(s, e.currency.symbol, !0)),
                            (o += '<span class="price-compare">' + l + "</span>")),
                        (o += "</td>"),
                        t == a.const.CART_LAYOUT.editable &&
                        ((o +=
                            '<td class="ladi-cart-action"><button onclick="javascript: LadiPageScript.removeAddToCartProduct(' +
                            e.product_variant_id +
                            ', true);" type="button"><span>X</span></button></td>'),
                            (o += "</tr>"));
                }
            });
        }
        return (o += "</tbody>");
    }),
    (LadiPageScriptV2.prototype.getProductVariantId = function (t, e) {
        var i = null,
            a = this.findAncestor(t, "ladi-element"),
            n = this;
        if (!this.isEmpty(a)) {
            var r = this.runtime.eventData[a.id];
            if (
                !this.isEmpty(r) &&
                r["option.product_variant_type"] ==
                this.const.PRODUCT_VARIANT_TYPE.combined
            ) {
                var o = a.querySelector("select.ladi-form-control");
                if (!this.isEmpty(o) && !this.isEmpty(o.value)) {
                    var s = o.querySelector('option[value="' + o.value + '"]');
                    this.isEmpty(s) || (i = s.getAttribute("data-product-variant-id"));
                }
            }
            var l = null,
                d = null;
            if (
                !this.isEmpty(r) &&
                (r["option.product_variant_type"] ==
                    this.const.PRODUCT_VARIANT_TYPE.combobox ||
                    r["option.product_variant_type"] ==
                    this.const.PRODUCT_VARIANT_TYPE.label)
            ) {
                (d = {}),
                    (l = a.querySelectorAll(
                        ".ladi-form-item select[data-product-option-id]"
                    ));
                for (var c = 0; c < l.length; c++)
                    d[l[c].getAttribute("data-product-option-id")] = (
                        n.isEmpty(l[c].value) ? "" : l[c].value
                    ).trim();
                for (
                    l = a.querySelectorAll(
                        ".ladi-form-label-container[data-product-option-id]"
                    ),
                    c = 0;
                    c < l.length;
                    c++
                )
                    d[l[c].getAttribute("data-product-option-id")] = n.runtime.tmp
                        .getLabelValue(l[c])
                        .trim();
                this.isArray(e.variants) &&
                    e.variants.forEach(function (t) {
                        if (n.isEmpty(i)) {
                            var e = !0;
                            if (n.isString(t.option_ids))
                                for (var a = t.option_ids.split("/"), r = 0; r < a.length; r++)
                                    if (d[a[r].trim()] != (t["option" + (r + 1)] || "").trim()) {
                                        e = !1;
                                        break;
                                    }
                            e && (i = t.product_variant_id);
                        }
                    });
            }
        }
        return i;
    }),
    (LadiPageScriptV2.prototype.getProductVariantIndex = function (t, e) {
        var i = this,
            a = -1,
            n = e["option.product_type"],
            r = e["option.ladisale_store_id"] || null,
            o = e["option.product_id"],
            s = i.generateVariantProduct(e, !1, null, null, null, null, !0, !0);
        if (
            !i.isObject(s) ||
            !i.isObject(s.store_info) ||
            !i.isObject(s.product) ||
            !i.isArray(s.product.variants) ||
            s.product.variants.length <= 0
        )
            return a;
        this.runtime.isClient
            ? Object.keys(this.runtime.eventData).forEach(function (e) {
                if ((i.isEmpty(t) || t == e) && -1 == a) {
                    var l = i.runtime.eventData[e];
                    if (
                        "form" == l.type &&
                        l["option.is_add_to_cart"] &&
                        l["option.product_type"] == n &&
                        l["option.product_id"] == o &&
                        l["option.ladisale_store_id"] == r
                    ) {
                        var d = document.getElementById(e);
                        if (!i.isEmpty(d)) {
                            var c = d.querySelector('[data-variant="true"]');
                            if (!i.isEmpty(c)) {
                                var u = i.runtime.eventData[c.id];
                                if (!i.isEmpty(u)) {
                                    var p = null;
                                    if (
                                        (u["option.product_variant_type"] ==
                                            i.const.PRODUCT_VARIANT_TYPE.combobox &&
                                            ((p = c.querySelectorAll(
                                                ".ladi-form-item select[data-product-option-id]"
                                            )),
                                                (a = s.product.variants.findIndex(function (t) {
                                                    for (
                                                        var e = !0,
                                                        a = null,
                                                        n = function (t) {
                                                            return t == a;
                                                        },
                                                        r = 0;
                                                        r < p.length;
                                                        r++
                                                    )
                                                        if (
                                                            p[r].getAttribute("data-store-id") ==
                                                            s.store_info.id &&
                                                            p[r].getAttribute("data-product-id") ==
                                                            t.product_id
                                                        ) {
                                                            a = p[r].getAttribute("data-product-option-id");
                                                            var o = p[r].value;
                                                            if (i.isString(t.option_ids)) {
                                                                var l = t.option_ids.split("/").findIndex(n);
                                                                if (-1 != l && t["option" + (l + 1)] != o) {
                                                                    e = !1;
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    return e;
                                                }))),
                                            u["option.product_variant_type"] ==
                                            i.const.PRODUCT_VARIANT_TYPE.label &&
                                            ((p = c.querySelectorAll(
                                                ".ladi-form-label-container[data-product-option-id]"
                                            )),
                                                (a = s.product.variants.findIndex(function (t) {
                                                    for (
                                                        var e = !0,
                                                        a = null,
                                                        n = function (t) {
                                                            return t == a;
                                                        },
                                                        r = 0;
                                                        r < p.length;
                                                        r++
                                                    )
                                                        if (
                                                            p[r].getAttribute("data-store-id") ==
                                                            s.store_info.id &&
                                                            p[r].getAttribute("data-product-id") ==
                                                            t.product_id
                                                        ) {
                                                            a = p[r].getAttribute("data-product-option-id");
                                                            var o = i.runtime.tmp.getLabelValue(p[r]);
                                                            if (i.isString(t.option_ids)) {
                                                                var l = t.option_ids.split("/").findIndex(n);
                                                                if (-1 != l && t["option" + (l + 1)] != o) {
                                                                    e = !1;
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    return e;
                                                }))),
                                            u["option.product_variant_type"] ==
                                            i.const.PRODUCT_VARIANT_TYPE.combined)
                                    ) {
                                        var m = c.querySelector(".ladi-form-control");
                                        if (
                                            i.isEmpty(m) ||
                                            m.getAttribute("data-store-id") != s.store_info.id ||
                                            m.getAttribute("data-product-id") !=
                                            s.product.product_id
                                        )
                                            return;
                                        (a = m.value), (a = i.isEmpty(a) ? -1 : parseInt(a));
                                    }
                                }
                            }
                        }
                    }
                }
            })
            : (a = 0);
        return a;
    }),
    (LadiPageScriptV2.prototype.generateProductKey = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o,
        s
    ) {
        var l = this;
        l.isEmpty(o) || (a["option.product_id"] = o.product_id);
        var d = a["option.product_type"],
            c = a["option.product_mapping_name"],
            u = l.generateVariantProduct(
                a,
                !1,
                null,
                null,
                null,
                null,
                !0,
                !0,
                function (i) {
                    l.generateProductKey(t, e, !1, a, n, r, o, s);
                }
            ),
            p = null;
        function m(t) {
            return (t >= 10 ? "" : "0") + t;
        }
        if (l.isObject(u) && l.isObject(u.product)) {
            var _ = null,
                g = function () {
                    if (
                        -1 !=
                        [
                            l.const.FORM_CONFIG_TYPE.ladisales,
                            l.const.FORM_CONFIG_TYPE.sapo,
                            l.const.FORM_CONFIG_TYPE.haravan,
                            l.const.FORM_CONFIG_TYPE.shopify,
                            l.const.FORM_CONFIG_TYPE.wordpress,
                        ].indexOf(d)
                    ) {
                        if (
                            (-1 != ["name", "description", "content"].indexOf(c) &&
                                ((_ = u.product[c]), (e = _)),
                                -1 != ["image"].indexOf(c) &&
                                ((_ = u.product[c]),
                                    l.isObject(_) &&
                                    ((e = _.src),
                                        l.isEmpty(e) ||
                                        !l.isString(e) ||
                                        e.startsWith("http://") ||
                                        e.startsWith("https://") ||
                                        e.startsWith("//") ||
                                        (e = "https://" + l.const.STATIC_W_DOMAIN + "/" + e))),
                                -1 != ["images"].indexOf(c) &&
                                ((_ = u.product[c]),
                                    l.isArray(_) &&
                                    ((e = []),
                                        _.forEach(function (t) {
                                            l.isEmpty(t.src) ||
                                                (!l.isString(t.src) ||
                                                    t.src.startsWith("http://") ||
                                                    t.src.startsWith("https://") ||
                                                    t.src.startsWith("//")
                                                    ? e.push({ src: t.src })
                                                    : e.push({
                                                        src:
                                                            "https://" +
                                                            l.const.STATIC_W_DOMAIN +
                                                            "/" +
                                                            t.src,
                                                    }));
                                        }))),
                                l.isArray(u.product.variants) && u.product.variants.length > 0)
                        ) {
                            var t = n ? 0 : l.getProductVariantIndex(null, a);
                            if (
                                (l.isEmpty(r) ||
                                    (t = u.product.variants.findIndex(function (t) {
                                        return t.product_variant_id == r;
                                    })),
                                    -1 != t)
                            ) {
                                var o = u.product.variants[t];
                                if (
                                    ((p = o),
                                        -1 != ["sku"].indexOf(c) && ((_ = o[c]), (e = _)),
                                        -1 != ["title"].indexOf(c) &&
                                        ((_ = o[c] || o.product_name), (e = _)),
                                        -1 != ["text_quantity"].indexOf(c) &&
                                        ((_ = 1 == o.inventory_checked ? o[c] : ""), (e = _)),
                                        -1 != ["weight"].indexOf(c) &&
                                        ((_ = o[c]),
                                            l.isEmpty(o.weight_unit) || (_ += o.weight_unit),
                                            (e = _)),
                                        -1 != ["price", "price_compare"].indexOf(c) &&
                                        (l.isEmpty(o[c])
                                            ? (_ = "")
                                            : ((_ = l.formatNumber(o[c], 3)),
                                                l.isObject(u.store_info) &&
                                                l.isObject(u.store_info.currency) &&
                                                !l.isEmpty(u.store_info.currency.symbol) &&
                                                (_ = l.formatCurrency(
                                                    o[c],
                                                    u.store_info.currency.symbol,
                                                    !0
                                                ))),
                                            (e = _)),
                                        -1 != ["price_sale"].indexOf(c))
                                ) {
                                    var y = 0;
                                    l.isEmpty(o.price) ||
                                        l.isEmpty(o.price_compare) ||
                                        (y = o.price_compare - o.price),
                                        y > 0
                                            ? ((_ = l.formatNumber(y, 3)),
                                                l.isObject(u.store_info) &&
                                                l.isObject(u.store_info.currency) &&
                                                !l.isEmpty(u.store_info.currency.symbol) &&
                                                (_ = l.formatCurrency(
                                                    y,
                                                    u.store_info.currency.symbol,
                                                    !0
                                                )))
                                            : (_ = ""),
                                        (e = _);
                                }
                                if (-1 != ["price_sale_percent"].indexOf(c)) {
                                    var f = 0;
                                    l.isEmpty(o.price) ||
                                        l.isEmpty(o.price_compare) ||
                                        (f = Math.floor(
                                            ((o.price_compare - o.price) / o.price_compare) * 100
                                        )),
                                        (e = _ = f > 0 ? f + "%" : "");
                                }
                                if (-1 != ["src"].indexOf(c)) {
                                    if (((_ = o[c]), l.isEmpty(_))) return (c = "image"), g();
                                    !l.isString(_) ||
                                        _.startsWith("http://") ||
                                        _.startsWith("https://") ||
                                        _.startsWith("//") ||
                                        (_ = "https://" + l.const.STATIC_W_DOMAIN + "/" + _),
                                        (e = _);
                                }
                                -1 != ["description"].indexOf(c) &&
                                    ((_ = o[c]), l.isEmpty(_) || (e = _));
                            } else e = _ = "";
                        }
                        if (-1 != ["description"].indexOf(c) && l.isEmpty(e))
                            return (c = "content"), g();
                    } else {
                        if (((_ = u.product[c]), l.isBoolean(_)))
                            _ = _ ? l.const.LANG.OPTION_TRUE : l.const.LANG.OPTION_FALSE;
                        else
                            try {
                                var h = new Date(_);
                                h.toISOString() == _ &&
                                    (_ =
                                        h.getFullYear() +
                                        "-" +
                                        m(h.getMonth() + 1) +
                                        "-" +
                                        m(h.getDate()) +
                                        " " +
                                        m(h.getHours()) +
                                        ":" +
                                        m(h.getMinutes()) +
                                        ":" +
                                        m(h.getSeconds()));
                            } catch (t) { }
                        e = _;
                    }
                    !i && l.isFunction(s) && s(e);
                };
            g();
        }
        return t ? { product: u, variant: p, value: e } : e;
    }),
    (LadiPageScriptV2.prototype.generateVariantProduct = function (
        t,
        e,
        i,
        a,
        n,
        r,
        o,
        s,
        l
    ) {
        var d = e ? "" : null,
            c = this,
            u = function (t) {
                if (!e) return c.isObject(t) ? t : null;
                var s = "";
                if (c.isObject(t)) {
                    if (!c.isObject(t.product)) return s;
                    i == c.const.PRODUCT_VARIANT_TYPE.combined &&
                        ((s +=
                            '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' +
                            (c.isObject(t.store_info) && !c.isNull(t.store_info.id)
                                ? ' data-store-id="' + t.store_info.id + '"'
                                : "") +
                            ' data-product-id="' +
                            t.product.product_id +
                            '" required tabindex="' +
                            r +
                            '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                            (o ? "" : ' onmousedown="javascript: event.preventDefault();"') +
                            ">"),
                            c.runtime.isClient &&
                            (s +=
                                '<option value="" data-product-variant-id="">' +
                                c.const.LANG.OPTION_NO_SELECT +
                                "</option>"),
                            c.isArray(t.product.variants) &&
                            t.product.variants.forEach(function (e, i) {
                                var a = e.title || e.product_name;
                                if (n) {
                                    var r = c.formatNumber(e.price, 3);
                                    c.isObject(t.store_info) &&
                                        c.isObject(t.store_info.currency) &&
                                        !c.isEmpty(t.store_info.currency.symbol) &&
                                        (r = c.formatCurrency(
                                            e.price,
                                            t.store_info.currency.symbol,
                                            !0
                                        )),
                                        (a += " - " + r);
                                }
                                s +=
                                    '<option value="' +
                                    i +
                                    '" data-product-variant-id="' +
                                    e.product_variant_id +
                                    '">' +
                                    a +
                                    "</option>";
                            }),
                            (s += "</select></div></div>")),
                        i == c.const.PRODUCT_VARIANT_TYPE.combobox &&
                        c.isArray(t.product.options) &&
                        t.product.options.forEach(function (e) {
                            if (e.is_tmp) s += '<div class="ladi-form-item-box"></div>';
                            else if (c.isArray(e.values) && 0 != e.values.length) {
                                (s += '<div class="ladi-form-item-box">'),
                                    c.isEmpty(a) ||
                                    (s +=
                                        '<div class="ladi-form-item-title"><span>' +
                                        e.name +
                                        "</span></div>"),
                                    (s +=
                                        '<div class="ladi-form-item-container"><div class="ladi-form-item-background"></div><div class="ladi-form-item"><select' +
                                        (c.isObject(t.store_info) && !c.isNull(t.store_info.id)
                                            ? ' data-store-id="' + t.store_info.id + '"'
                                            : "") +
                                        ' data-product-id="' +
                                        e.product_id +
                                        '" data-product-option-id="' +
                                        e.product_option_id +
                                        '" required tabindex="' +
                                        r +
                                        '" class="ladi-form-control ladi-form-control-select" data-selected=""' +
                                        (o
                                            ? ""
                                            : ' onmousedown="javascript: event.preventDefault();"') +
                                        ">"),
                                    c.runtime.isClient &&
                                    (s +=
                                        '<option value="">' +
                                        c.const.LANG.OPTION_NO_SELECT +
                                        "</option>");
                                var i = null;
                                c.isArray(t.product.variants) && (i = t.product.variants[0]);
                                var n = null;
                                c.isEmpty(i) ||
                                    (c.isString(i.option_ids) && (n = i.option_ids.split("/")));
                                e.values.forEach(function (t) {
                                    var a = (function (t) {
                                        var a = "";
                                        return (
                                            c.isArray(n) &&
                                            n.forEach(function (n, r) {
                                                e.product_option_id == n &&
                                                    t == i["option" + (r + 1)] &&
                                                    (a = " selected");
                                            }),
                                            a
                                        );
                                    })(t.name);
                                    s +=
                                        "<option" +
                                        a +
                                        ' value="' +
                                        t.name +
                                        '">' +
                                        (t.name_new || t.name) +
                                        "</option>";
                                }),
                                    (s += "</select></div></div></div>");
                            }
                        }),
                        i == c.const.PRODUCT_VARIANT_TYPE.label &&
                        c.isArray(t.product.options) &&
                        t.product.options.forEach(function (e) {
                            if (c.isArray(e.values) && 0 != e.values.length) {
                                (s += '<div class="ladi-form-item-box">'),
                                    c.isEmpty(a) ||
                                    ((s += '<div class="ladi-form-item-title">'),
                                        (s += "<span>" + e.name + "</span>"),
                                        (s += '<span class="ladi-form-item-title-value"></span>'),
                                        (s += "</div>")),
                                    (s +=
                                        '<div class="ladi-form-label-container"' +
                                        (c.isObject(t.store_info) && !c.isNull(t.store_info.id)
                                            ? ' data-store-id="' + t.store_info.id + '"'
                                            : "") +
                                        ' data-product-id="' +
                                        e.product_id +
                                        '" data-product-option-id="' +
                                        e.product_option_id +
                                        '" data-selected="">');
                                var i = null;
                                c.isArray(t.product.variants) && (i = t.product.variants[0]);
                                var n = null;
                                c.isEmpty(i) ||
                                    (c.isString(i.option_ids) && (n = i.option_ids.split("/")));
                                e.values.forEach(function (t, a) {
                                    0 == a &&
                                        (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image
                                            ? (s +=
                                                '<div class="ladi-form-label-item image no-value" data-value=""></div>')
                                            : t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color
                                                ? (s +=
                                                    '<div class="ladi-form-label-item color no-value" data-value=""></div>')
                                                : (s +=
                                                    '<div class="ladi-form-label-item text no-value" data-value="">&nbsp;</div>'));
                                    var r = (function (t) {
                                        var a = "";
                                        return (
                                            c.isArray(n) &&
                                            n.forEach(function (n, r) {
                                                e.product_option_id == n &&
                                                    t == i["option" + (r + 1)] &&
                                                    (a = " selected");
                                            }),
                                            a
                                        );
                                    })(t.name);
                                    if (t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.image) {
                                        var o = t.value;
                                        c.isEmpty(o) ||
                                            !c.isString(o) ||
                                            o.startsWith("http://") ||
                                            o.startsWith("https://") ||
                                            o.startsWith("//") ||
                                            (o = "https://" + c.const.STATIC_W_DOMAIN + "/" + o),
                                            (o = c.getOptimizeImage(o, 100, 100, !1, !1, !1, !0)),
                                            (s +=
                                                '<div class="ladi-form-label-item image' +
                                                r +
                                                '" style=\'background-image: url("' +
                                                o +
                                                '");\' title="' +
                                                (t.name_new || t.name) +
                                                '" data-value="' +
                                                t.name +
                                                '"></div>');
                                    } else t.type == c.const.PRODUCT_VARIANT_OPTION_TYPE.color ? (s += '<div class="ladi-form-label-item color' + r + "\" style='background-color: " + t.value + ";' title=\"" + (t.name_new || t.name) + '" data-value="' + t.name + '"></div>') : (s += '<div class="ladi-form-label-item text' + r + '" data-value="' + t.name + '">' + (t.name_new || t.name) + "</div>");
                                }),
                                    (s += "</div></div>");
                            }
                        });
                }
                return s;
            };
        if (!c.isNull(t.dataProduct)) return u(t.dataProduct);
        var p = t["option.form_account_id"],
            m = t["option.product_type"],
            _ = t["option.ladisale_store_id"] || null,
            g = t["option.product_id"],
            y = t["option.data_setting.value"],
            f = t["option.data_setting.type_dataset"],
            h = t["option.data_setting.sort_name"],
            v = t["option.data_setting.sort_by"],
            E = null,
            P = null;
        if (
            -1 !=
            [
                c.const.FORM_CONFIG_TYPE.ladisales,
                c.const.FORM_CONFIG_TYPE.sapo,
                c.const.FORM_CONFIG_TYPE.haravan,
                c.const.FORM_CONFIG_TYPE.shopify,
                c.const.FORM_CONFIG_TYPE.wordpress,
            ].indexOf(m)
        ) {
            if (!c.isEmpty(g)) {
                if (
                    (c.isEmpty(c.runtime.tmp.product_info[m]) &&
                        (c.runtime.tmp.product_info[m] = {}),
                        c.isEmpty(c.runtime.tmp.timeout_product_info[m]) &&
                        (c.runtime.tmp.timeout_product_info[m] = {}),
                        (g = parseInt(g) || g),
                        (E = c.runtime.tmp.product_info[m][g]),
                        (P = function () {
                            return u(E);
                        }),
                        c.isNull(E))
                ) {
                    c.runtime.tmp.product_info[m][g] = !0;
                    var L = function () {
                        (c.runtime.tmp.product_info[m][g] = !1),
                            c.isEmpty(c.runtime.tmp.timeout_product_info[m][g]) ||
                            (c.removeTimeout(c.runtime.tmp.timeout_product_info[m][g]),
                                delete c.runtime.tmp.timeout_product_info[m][g]);
                    },
                        A = function (t) {
                            if (
                                ((E = c.isObject(c.runtime.tmp.product_info[m][g])
                                    ? c.runtime.tmp.product_info[m][g]
                                    : t.data),
                                    c.isObject(E))
                            ) {
                                if (!c.isObject(E.store_info)) {
                                    var e = c.runtime.currency;
                                    c.runtime.isClient ||
                                        (e = LadiPage.getRootScope().getStoreCurrency()),
                                        (E.store_info = {
                                            currency: {
                                                code: e,
                                                symbol: c.formatCurrency(null, e, !1, !0),
                                            },
                                        });
                                }
                                if (
                                    (m != c.const.FORM_CONFIG_TYPE.ladisales &&
                                        (E.store_info.id = -1),
                                        c.isObject(E.product) &&
                                        c.isArray(E.product.options) &&
                                        c.isArray(E.product.variants))
                                ) {
                                    var i = E.product.options.map(function (t) {
                                        return t.product_option_id;
                                    });
                                    i = i.join("/");
                                    for (var a = 0; a < E.product.variants.length; a++)
                                        c.isEmpty(E.product.variants[a].option_ids) &&
                                            (E.product.variants[a].option_ids = i),
                                            -1 !=
                                            [
                                                c.const.FORM_CONFIG_TYPE.sapo,
                                                c.const.FORM_CONFIG_TYPE.haravan,
                                                c.const.FORM_CONFIG_TYPE.shopify,
                                            ].indexOf(m) &&
                                            1 == E.product.variants.length &&
                                            "Default Title" == E.product.variants[a].title &&
                                            ((E.product.variants[a].title = null),
                                                (E.product.variants[a].option1 = null),
                                                (E.product.options = [])),
                                            -1 != [c.const.FORM_CONFIG_TYPE.wordpress].indexOf(m) &&
                                            1 == E.product.variants.length &&
                                            E.product.variants[a].title ==
                                            E.product.variants[a].product_name &&
                                            ((E.product.variants[a].title = null),
                                                (E.product.variants[a].option1 = null),
                                                (E.product.options = [])),
                                            c.isEmpty(E.product.variants[a].package_quantity) ||
                                            c.isEmpty(
                                                E.product.variants[a].package_quantity_unit
                                            ) ||
                                            (c.isNull(E.product.variants[a].title_old) &&
                                                (E.product.variants[a].title_old =
                                                    E.product.variants[a].title),
                                                (E.product.variants[a].title =
                                                    E.product.variants[a].title_old +
                                                    " (" +
                                                    E.product.variants[a].package_quantity +
                                                    " " +
                                                    E.product.variants[a].package_quantity_unit +
                                                    ")"));
                                    if (
                                        c.isArray(E.product.options) &&
                                        1 == E.product.options.length &&
                                        c.isArray(E.product.options[0].values)
                                    )
                                        for (
                                            var n = null,
                                            r = function (t) {
                                                return t.option1 == n;
                                            },
                                            o = 0;
                                            o < E.product.options[0].values.length;
                                            o++
                                        ) {
                                            n = E.product.options[0].values[o].name;
                                            var s = E.product.variants.find(r);
                                            (E.product.options[0].values[o].name_new =
                                                E.product.options[0].values[o].label ||
                                                E.product.options[0].values[o].name),
                                                c.isEmpty(s) ||
                                                c.isEmpty(s.package_quantity) ||
                                                c.isEmpty(s.package_quantity_unit) ||
                                                (E.product.options[0].values[o].name_new =
                                                    E.product.options[0].values[o].name_new +
                                                    " (" +
                                                    s.package_quantity +
                                                    " " +
                                                    s.package_quantity_unit +
                                                    ")");
                                        }
                                }
                                (c.runtime.tmp.product_info[m][g] = E),
                                    (d = P()),
                                    c.isFunction(l) && l(d);
                            } else L();
                        },
                        b = { product_id: g },
                        w = null,
                        S = "POST";
                    return (
                        c.runLimitRequest(20, function () {
                            if (c.runtime.isClient) {
                                var t = c.const.API_LADISALE_SHOW_PRODUCT;
                                m == c.const.FORM_CONFIG_TYPE.ladisales
                                    ? (((w = { "Content-Type": "application/json" })["Store-Id"] =
                                        _),
                                        (b = JSON.stringify(b)))
                                    : m == c.const.FORM_CONFIG_TYPE.wordpress
                                        ? ((S = "GET"),
                                            (t =
                                                window.location.origin +
                                                "/ladipage/api?action=product_info&product_id=" +
                                                g),
                                            (b = null))
                                        : ((w = { "Content-Type": "application/json" }),
                                            (t = c.const.API_SHOW_PRODUCT),
                                            (b = { form_account_id: p, product_id: g }),
                                            (b = JSON.stringify(b))),
                                    c.sendRequest(S, t, b, !0, w, function (t, e, i) {
                                        if (i.readyState == XMLHttpRequest.DONE)
                                            try {
                                                var a = JSON.parse(t);
                                                A(a);
                                            } catch (t) {
                                                L();
                                            }
                                    });
                            } else {
                                var e = function (t) {
                                    c.isNull(t) || A({ data: t });
                                },
                                    i = LadiPage.getProductInfo(p, g, function (t) {
                                        e(t);
                                    });
                                e(i);
                            }
                        }),
                        d
                    );
                }
                !0 === E
                    ? (c.runtime.tmp.timeout_product_info[m][g] = c.runTimeout(
                        function () {
                            c.generateVariantProduct(t, e, i, a, n, r, o, !1, l);
                        },
                        100
                    ))
                    : ((d = P()), !s && c.isFunction(l) && l(d));
            }
        } else if (!c.isEmpty(g)) {
            if (
                (c.isEmpty(c.runtime.tmp.product_info[m]) &&
                    (c.runtime.tmp.product_info[m] = {}),
                    c.isEmpty(c.runtime.tmp.timeout_product_info[m]) &&
                    (c.runtime.tmp.timeout_product_info[m] = {}),
                    (g += ""),
                    (E = c.runtime.tmp.product_info[m][g]),
                    (P = function () {
                        return e ? "" : c.isObject(E) ? E : null;
                    }),
                    c.isNull(E))
            )
                return (
                    (c.runtime.tmp.product_info[m][g] = !0),
                    c.loadDataset(y, y, f, h, v, !0, c.runtime.isClient, function (t) {
                        (d = P()), c.isFunction(l) && l(d);
                    }),
                    d
                );
            !0 === E
                ? (c.runtime.tmp.timeout_product_info[m][g] = c.runTimeout(function () {
                    c.generateVariantProduct(t, e, i, a, n, r, o, !1, l);
                }, 100))
                : ((d = P()), !s && c.isFunction(l) && l(d));
        }
        return d;
    }),
    (LadiPageScriptV2.prototype.runLimitRequest = function (t, e) {
        var i = this,
            a = 1e3 / t;
        if (i.runtime.tmp.time_limit_request_next > Date.now())
            return i.runTimeout(function () {
                i.runLimitRequest(t, e);
            }, a / 5);
        (i.runtime.tmp.time_limit_request_next = Date.now() + a),
            i.isFunction(e) && e();
    }),
    (LadiPageScriptV2.prototype.getListProductByTagId = function (t, e, i, a, n) {
        var r = this,
            o = t["option.form_account_id"],
            s = t["option.product_type"],
            l = t["option.ladisale_store_id"] || null,
            d = t["option.product_tag_id"],
            c = t["option.data_setting.value"],
            u = t["option.data_setting.type_dataset"],
            p = t["option.collection_setting.type"],
            m = t["option.data_setting.sort_name"],
            _ = t["option.data_setting.sort_by"],
            g = null,
            y = null,
            f = null,
            h = null,
            v = null;
        if (r.isArray(d) && d.length > 0) {
            if (
                (r.isEmpty(r.runtime.tmp.product_tag_info[s]) &&
                    (r.runtime.tmp.product_tag_info[s] = {}),
                    r.isEmpty(r.runtime.tmp.timeout_product_tag_info[s]) &&
                    (r.runtime.tmp.timeout_product_tag_info[s] = {}),
                    d.sort(),
                    (f = JSON.stringify(d) + "_page_" + i + "_limit_" + e),
                    (h = r.runtime.tmp.product_tag_info[s][f]),
                    -1 !=
                    [
                        r.const.FORM_CONFIG_TYPE.ladisales,
                        r.const.FORM_CONFIG_TYPE.sapo,
                        r.const.FORM_CONFIG_TYPE.haravan,
                        r.const.FORM_CONFIG_TYPE.shopify,
                        r.const.FORM_CONFIG_TYPE.wordpress,
                    ].indexOf(s))
            ) {
                y = function () {
                    var t = null;
                    return (
                        r.isObject(h) &&
                        r.isArray(h.products) &&
                        ((t = { products: h.products, total_record: h.total_record }),
                            r.isEmpty(r.runtime.tmp.product_info[s]) &&
                            (r.runtime.tmp.product_info[s] = {}),
                            t.products.forEach(function (t) {
                                r.runtime.tmp.product_info[s][t.product_id] = {
                                    store_info: h.store_info,
                                    product: t,
                                };
                            })),
                        t
                    );
                };
                var E = null;
                if ((r.isString(h) && ((E = h), (h = null)), r.isNull(h))) {
                    r.runtime.tmp.product_tag_info[s][f] = !0;
                    var P = function () {
                        (r.runtime.tmp.product_tag_info[s][f] = !1),
                            r.isEmpty(r.runtime.tmp.timeout_product_tag_info[s][f]) ||
                            (r.removeTimeout(
                                r.runtime.tmp.timeout_product_tag_info[s][f]
                            ),
                                delete r.runtime.tmp.timeout_product_tag_info[s][f]);
                    },
                        L = function (t) {
                            if (((h = t.data), r.isObject(h))) {
                                if (!r.isObject(h.store_info)) {
                                    var a = r.runtime.currency;
                                    r.runtime.isClient ||
                                        (a = LadiPage.getRootScope().getStoreCurrency()),
                                        (h.store_info = {
                                            currency: {
                                                code: a,
                                                symbol: r.formatCurrency(null, a, !1, !0),
                                            },
                                        });
                                }
                                if (
                                    (s != r.const.FORM_CONFIG_TYPE.ladisales &&
                                        (h.store_info.id = -1),
                                        r.isArray(h.products))
                                )
                                    for (
                                        var o = null,
                                        l = function (t) {
                                            return t.option1 == o;
                                        },
                                        c = 0;
                                        c < h.products.length;
                                        c++
                                    )
                                        if (
                                            r.isArray(h.products[c].options) &&
                                            r.isArray(h.products[c].variants)
                                        ) {
                                            var u = h.products[c].options.map(function (t) {
                                                return t.product_option_id;
                                            });
                                            u = u.join("/");
                                            for (var p = 0; p < h.products[c].variants.length; p++)
                                                r.isEmpty(h.products[c].variants[p].option_ids) &&
                                                    (h.products[c].variants[p].option_ids = u),
                                                    -1 !=
                                                    [
                                                        r.const.FORM_CONFIG_TYPE.sapo,
                                                        r.const.FORM_CONFIG_TYPE.haravan,
                                                        r.const.FORM_CONFIG_TYPE.shopify,
                                                    ].indexOf(s) &&
                                                    1 == h.products[c].variants.length &&
                                                    "Default Title" ==
                                                    h.products[c].variants[p].title &&
                                                    ((h.products[c].variants[p].title = null),
                                                        (h.products[c].variants[p].option1 = null),
                                                        (h.products[c].options = [])),
                                                    -1 !=
                                                    [r.const.FORM_CONFIG_TYPE.wordpress].indexOf(s) &&
                                                    1 == h.products[c].variants.length &&
                                                    h.products[c].variants[p].title ==
                                                    h.products[c].variants[p].product_name &&
                                                    ((h.products[c].variants[p].title = null),
                                                        (h.products[c].variants[p].option1 = null),
                                                        (h.products[c].options = [])),
                                                    r.isEmpty(
                                                        h.products[c].variants[p].package_quantity
                                                    ) ||
                                                    r.isEmpty(
                                                        h.products[c].variants[p].package_quantity_unit
                                                    ) ||
                                                    (r.isNull(h.products[c].variants[p].title_old) &&
                                                        (h.products[c].variants[p].title_old =
                                                            h.products[c].variants[p].title),
                                                        (h.products[c].variants[p].title =
                                                            h.products[c].variants[p].title_old +
                                                            " (" +
                                                            h.products[c].variants[p].package_quantity +
                                                            " " +
                                                            h.products[c].variants[p].package_quantity_unit +
                                                            ")"));
                                            if (
                                                r.isArray(h.products[c].options) &&
                                                1 == h.products[c].options.length &&
                                                r.isArray(h.products[c].options[0].values)
                                            )
                                                for (
                                                    var m = 0;
                                                    m < h.products[c].options[0].values.length;
                                                    m++
                                                ) {
                                                    o = h.products[c].options[0].values[m].name;
                                                    var _ = h.products[c].variants.find(l);
                                                    (h.products[c].options[0].values[m].name_new =
                                                        h.products[c].options[0].values[m].label ||
                                                        h.products[c].options[0].values[m].name),
                                                        r.isEmpty(_) ||
                                                        r.isEmpty(_.package_quantity) ||
                                                        r.isEmpty(_.package_quantity_unit) ||
                                                        (h.products[c].options[0].values[m].name_new =
                                                            h.products[c].options[0].values[m].name_new +
                                                            " (" +
                                                            _.package_quantity +
                                                            " " +
                                                            _.package_quantity_unit +
                                                            ")");
                                                }
                                        }
                                if (r.isString(h.page_next)) {
                                    var v =
                                        JSON.stringify(d) + "_page_" + (i + 1) + "_limit_" + e;
                                    r.runtime.tmp.product_tag_info[s][v] = h.page_next;
                                }
                                (r.runtime.tmp.product_tag_info[s][f] = h),
                                    (g = y()),
                                    r.isFunction(n) && n(g);
                            } else P();
                        },
                        A = { product_tag_ids: d, limit: e };
                    r.isEmpty(p) ? (A.type = "group") : (A.paged = i),
                        r.isEmpty(m) ||
                        r.isEmpty(_) ||
                        ((A.sort = {}),
                            (A.sort[m] = _ == r.const.SORT_BY_TYPE.desc ? -1 : 1));
                    var b = null,
                        w = "POST";
                    return (
                        r.runLimitRequest(20, function () {
                            if (r.runtime.isClient) {
                                var a = r.const.API_LADISALE_COLLECTION_PRODUCT;
                                s == r.const.FORM_CONFIG_TYPE.ladisales
                                    ? (((b = { "Content-Type": "application/json" })["Store-Id"] =
                                        l),
                                        (A = JSON.stringify(A)))
                                    : s == r.const.FORM_CONFIG_TYPE.wordpress
                                        ? ((w = "GET"),
                                            (a =
                                                window.location.origin +
                                                "/ladipage/api?action=product_list&category_ids=" +
                                                d.join("|") +
                                                "&page=" +
                                                i +
                                                "&limit=" +
                                                e),
                                            (A = null))
                                        : ((b = { "Content-Type": "application/json" }),
                                            (a = r.const.API_COLLECTION_PRODUCT),
                                            (A = { form_account_id: o, tags: d, limit: e }),
                                            r.isEmpty(E) ? (A.page = i) : (A.page_info = E),
                                            (A = JSON.stringify(A))),
                                    r.sendRequest(w, a, A, !0, b, function (t, e, i) {
                                        if (i.readyState == XMLHttpRequest.DONE)
                                            try {
                                                var a = JSON.parse(t);
                                                L(a);
                                            } catch (t) {
                                                P();
                                            }
                                    });
                            } else {
                                var n = function (t) {
                                    if (r.isArray(t) && t.length > 1) {
                                        var e = { products: [] };
                                        t.forEach(function (t) {
                                            if (
                                                r.isNull(t.product) &&
                                                !r.isNull(t.store_info) &&
                                                !r.isNull(t.total_record)
                                            )
                                                return (
                                                    (e.store_info = t.store_info),
                                                    void (e.total_record = t.total_record)
                                                );
                                            r.isNull(t.product) || e.products.push(t.product);
                                        }),
                                            L({ data: e });
                                    }
                                },
                                    c = LadiPage.mapping_attribute_option_product_id(
                                        t.element,
                                        "",
                                        d,
                                        e,
                                        i,
                                        !1,
                                        !0,
                                        function (t) {
                                            n(t);
                                        }
                                    );
                                n(c);
                            }
                        }),
                        g
                    );
                }
            }
        } else
            r.isEmpty(c) ||
                ((y = function () {
                    var t = null;
                    if (r.isArray(v)) {
                        var a = r.copy(v);
                        (t = {
                            products: (a = a.splice((i - 1) * e, e)),
                            total_record: v.length,
                        }),
                            r.isEmpty(r.runtime.tmp.product_info[s]) &&
                            (r.runtime.tmp.product_info[s] = {}),
                            v.forEach(function (t) {
                                r.runtime.tmp.product_info[s][t.id] = {
                                    store_info: {},
                                    product: t,
                                };
                            });
                    }
                    return t;
                }),
                    (v = r.loadDataset(c, c, u, m, _, !0, r.runtime.isClient, function (t) {
                        (v = t), (g = y()), r.isFunction(n) && n(g);
                    })));
        return (
            r.isFunction(y) &&
            (!0 === h
                ? (r.runtime.tmp.timeout_product_tag_info[s][f] = r.runTimeout(
                    function () {
                        r.getListProductByTagId(t, e, i, !1, n);
                    },
                    100
                ))
                : ((g = y()), !a && r.isFunction(n) && n(g))),
            g
        );
    }),
    (LadiPageScriptV2.prototype.getLadiSaleCheckoutCartProducts = function () {
        var t = [];
        return (
            this.isArray(this.runtime.tmp.cart) &&
            this.runtime.tmp.cart.forEach(function (e) {
                e.quantity <= 0 ||
                    t.push({
                        product_id: e.product_id,
                        product_variant_id: e.product_variant_id,
                        quantity: e.quantity,
                    });
            }),
            t
        );
    }),
    (LadiPageScriptV2.prototype.getCartProducts = function () {
        var t = this,
            e = function () {
                var e = [];
                return (
                    t.runtime.tmp.cart.forEach(function (i) {
                        if (!(i.quantity <= 0)) {
                            var a = i.name;
                            t.isEmpty(i.title) || a == i.title || (a += " - " + i.title);
                            var n = [
                                [
                                    i.product_variant_id,
                                    i.quantity,
                                    i.price,
                                    i.weight,
                                    i.weight_unit,
                                ].join(":"),
                                a,
                            ];
                            t.isObject(i.promotion) &&
                                n.push(
                                    [
                                        i.promotion.discount.discount_id,
                                        i.promotion.discount.note,
                                        i.promotion.total,
                                    ].join(":")
                                ),
                                (n = n.join("|")),
                                e.push(n);
                        }
                    }),
                    e
                );
            };
        if (
            -1 !=
            [
                t.const.FORM_CONFIG_TYPE.sapo,
                t.const.FORM_CONFIG_TYPE.haravan,
                t.const.FORM_CONFIG_TYPE.shopify,
                t.const.FORM_CONFIG_TYPE.wordpress,
            ].indexOf(t.runtime.shopping_product_type)
        )
            return e();
        var i = window.ladi("_checkout_token").get_cookie();
        return this.isArray(this.runtime.tmp.cart) && !this.isEmpty(i)
            ? e()
            : void 0;
    }),
    (LadiPageScriptV2.prototype.getCartCheckoutPrice = function (t) {
        var e = this.changeTotalPriceCart(!0);
        if (
            -1 !=
            [
                this.const.FORM_CONFIG_TYPE.sapo,
                this.const.FORM_CONFIG_TYPE.haravan,
                this.const.FORM_CONFIG_TYPE.shopify,
                this.const.FORM_CONFIG_TYPE.wordpress,
            ].indexOf(this.runtime.shopping_product_type)
        )
            return e.cart_checkout_price;
        var i = window.ladi("_checkout_token").get_cookie();
        return this.isArray(this.runtime.tmp.cart) && !this.isEmpty(i)
            ? e.cart_checkout_price
            : t;
    }),
    (LadiPageScriptV2.prototype.showMessage = function (t, e, i) {
        var a = this;
        if (
            ((t = a.convertDataReplaceStr(t, !1, null, !1, e)), a.runtime.has_popupx)
        )
            (a.runtime.tmp.popupx_show_message_callback = i),
                a.runtime.tmp.runActionPopupX({
                    message: t,
                    action: { type: "show_message" },
                });
        else {
            var n = document.getElementsByClassName("ladipage-message")[0];
            if ((this.isEmpty(n) || n.parentElement.removeChild(n), this.isEmpty(t)))
                return void (this.isFunction(i) && i());
            ((n = document.createElement("div")).className = "ladipage-message"),
                document.body.appendChild(n);
            var r = document.createElement("div");
            (r.className = "ladipage-message-box"), n.appendChild(r);
            var o = document.createElement("span");
            r.appendChild(o), (o.textContent = this.const.LANG.ALERT_TITLE);
            var s = document.createElement("div");
            (s.className = "ladipage-message-text"),
                r.appendChild(s),
                (s.innerHTML = t);
            var l = document.createElement("button");
            (l.className = "ladipage-message-close"),
                r.appendChild(l),
                (l.textContent = this.const.LANG.ALERT_BUTTON_TEXT),
                l.focus(),
                l.addEventListener("click", function (t) {
                    t.stopPropagation(),
                        n.parentElement.removeChild(n),
                        a.isFunction(i) && i();
                });
        }
    }),
    (LadiPageScriptV2.prototype.findAncestor = function (t, e) {
        if (this.isNull(t) || this.isNull(t.classList) || !t.classList.contains(e))
            for (; (t = t.parentElement) && !t.classList.contains(e););
        return t;
    }),
    (LadiPageScriptV2.prototype.createStyleElement = function (t, e) {
        var i = document.getElementById(t);
        return (
            this.isEmpty(i) &&
            (((i = document.createElement("style")).id = t),
                (i.type = "text/css"),
                document.head.appendChild(i)),
            i.innerHTML != e && (i.innerHTML = e),
            i
        );
    }),
    (LadiPageScriptV2.prototype.createTmpElement = function (t, e, i, a, n) {
        var r = document.createElement(t);
        this.isEmpty(i) ||
            Object.keys(i).forEach(function (t) {
                r.setAttribute(t, i[t]);
            });
        var o = document.createElement("div");
        return (
            o.appendChild(r),
            a ? (r.outerHTML = e) : (r.innerHTML = e),
            n ? o : o.firstChild
        );
    }),
    (LadiPageScriptV2.prototype.getCountdownTime = function (t, e) {
        var i = Math.floor(t / 1e3),
            a = i % 86400,
            n = a % 3600,
            r = Math.floor(i / 86400),
            o = Math.floor(a / 3600),
            s = Math.floor(n / 60),
            l = n % 60;
        (r = r < 0 ? 0 : r),
            (o = o < 0 ? 0 : o),
            (s = s < 0 ? 0 : s),
            (l = l < 0 ? 0 : l),
            (r = r < 10 ? "0" + r : r),
            (o = o < 10 ? "0" + o : o),
            (s = s < 10 ? "0" + s : s),
            (l = l < 10 ? "0" + l : l);
        var d = {};
        return (
            (d[this.const.COUNTDOWN_ITEM_TYPE.day] = r),
            (d[this.const.COUNTDOWN_ITEM_TYPE.hour] = o),
            (d[this.const.COUNTDOWN_ITEM_TYPE.minute] = s),
            (d[this.const.COUNTDOWN_ITEM_TYPE.seconds] = l),
            this.isEmpty(e) ? d : d[e]
        );
    }),
    (LadiPageScriptV2.prototype.getElementBoundingClientRect = function (t) {
        var e = t.getBoundingClientRect();
        return (
            (this.isNull(e.x) || this.isNull(e.y)) && ((e.x = e.left), (e.y = e.top)),
            e
        );
    }),
    (LadiPageScriptV2.prototype.getElementViewBox = function (t) {
        var e = { x: 0, y: 0, width: 0, height: 0 },
            i = t.getAttribute("viewBox").split(" ");
        return (
            (e.x = parseFloatLadiPage(i[0]) || 0),
            (e.y = parseFloatLadiPage(i[1]) || 0),
            (e.width = parseFloatLadiPage(i[2]) || 0),
            (e.height = parseFloatLadiPage(i[3]) || 0),
            e
        );
    }),
    (LadiPageScriptV2.prototype.getEventCursorData = function (t) {
        return (
            (this.isNull(t.pageX) || this.isNull(t.pageY)) &&
            (!this.isEmpty(t.touches) && t.touches.length > 0
                ? ((t.pageX = t.touches[0].pageX), (t.pageY = t.touches[0].pageY))
                : !this.isEmpty(t.targetTouches) && t.targetTouches.length > 0
                    ? ((t.pageX = t.targetTouches[0].pageX),
                        (t.pageY = t.targetTouches[0].pageY))
                    : !this.isEmpty(t.changedTouches) &&
                    t.changedTouches.length > 0 &&
                    ((t.pageX = t.changedTouches[0].pageX),
                        (t.pageY = t.changedTouches[0].pageY))),
            t
        );
    }),
    (LadiPageScriptV2.prototype.getElementAHref = function (t, e) {
        var i = document.createElement("a");
        return (
            !e ||
            t.toLowerCase().startsWith("http://") ||
            t.toLowerCase().startsWith("https://") ||
            t.startsWith("//") ||
            (t = "http://" + t),
            (i.href = t),
            i
        );
    }),
    (LadiPageScriptV2.prototype.loadScript = function (t, e, i, a) {
        var n = document.createElement("script");
        ((n.type = "text/javascript"),
            this.isFunction(i) && ((a = i), (i = e), (e = null)),
            i && (n.async = !0),
            this.isObject(e)) &&
            Object.keys(e).forEach(function (t) {
                n.setAttribute(t, e[t]);
            });
        n.addEventListener("load", a), (n.src = t), document.head.appendChild(n);
    }),
    (LadiPageScriptV2.prototype.isObject = function (t) {
        return !this.isFunction(t) && !this.isArray(t) && t instanceof Object;
    }),
    (LadiPageScriptV2.prototype.isArray = function (t) {
        return t instanceof Array;
    }),
    (LadiPageScriptV2.prototype.isFunction = function (t) {
        return "function" == typeof t || t instanceof Function;
    }),
    (LadiPageScriptV2.prototype.isBoolean = function (t) {
        return "boolean" == typeof t;
    }),
    (LadiPageScriptV2.prototype.isString = function (t) {
        return "string" == typeof t || t instanceof String;
    }),
    (LadiPageScriptV2.prototype.isEmpty = function (t) {
        return (
            !!this.isNull(t) ||
            (this.isString(t)
                ? 0 == (t = t.trim()).length || "undefined" == t.toLowerCase()
                : !!this.isArray(t) && 0 == t.length)
        );
    }),
    (LadiPageScriptV2.prototype.isNull = function (t) {
        return void 0 === t || void 0 == t;
    }),
    (LadiPageScriptV2.prototype.fireEvent = function (t, e, i) {
        var a = null;
        if (document.createEventObject)
            return (a = document.createEventObject()), t.fireEvent("on" + e, a);
        ((a = document.createEvent("HTMLEvents")).initEvent(e, !0, !0),
            this.isObject(i)) &&
            Object.keys(i).forEach(function (t) {
                a[t] = i[t];
            });
        return !t.dispatchEvent(a);
    });
var Base64 = {
    _keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (t) {
        var e,
            i,
            a,
            n,
            r,
            o,
            s,
            l = "",
            d = 0;
        for (t = Base64._utf8_encode(t); d < t.length;)
            (n = (e = t.charCodeAt(d++)) >> 2),
                (r = ((3 & e) << 4) | ((i = t.charCodeAt(d++)) >> 4)),
                (o = ((15 & i) << 2) | ((a = t.charCodeAt(d++)) >> 6)),
                (s = 63 & a),
                isNaN(i) ? (o = s = 64) : isNaN(a) && (s = 64),
                (l =
                    l +
                    Base64._keyStr.charAt(n) +
                    Base64._keyStr.charAt(r) +
                    Base64._keyStr.charAt(o) +
                    Base64._keyStr.charAt(s));
        return l;
    },
    decode: function (t) {
        var e,
            i,
            a,
            n,
            r,
            o,
            s = "",
            l = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length;)
            (e =
                (Base64._keyStr.indexOf(t.charAt(l++)) << 2) |
                ((n = Base64._keyStr.indexOf(t.charAt(l++))) >> 4)),
                (i =
                    ((15 & n) << 4) |
                    ((r = Base64._keyStr.indexOf(t.charAt(l++))) >> 2)),
                (a = ((3 & r) << 6) | (o = Base64._keyStr.indexOf(t.charAt(l++)))),
                (s += String.fromCharCode(e)),
                64 != r && (s += String.fromCharCode(i)),
                64 != o && (s += String.fromCharCode(a));
        return (s = Base64._utf8_decode(s));
    },
    _utf8_encode: function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var e = "", i = 0; i < t.length; i++) {
            var a = t.charCodeAt(i);
            a < 128
                ? (e += String.fromCharCode(a))
                : a > 127 && a < 2048
                    ? ((e += String.fromCharCode((a >> 6) | 192)),
                        (e += String.fromCharCode((63 & a) | 128)))
                    : ((e += String.fromCharCode((a >> 12) | 224)),
                        (e += String.fromCharCode(((a >> 6) & 63) | 128)),
                        (e += String.fromCharCode((63 & a) | 128)));
        }
        return e;
    },
    _utf8_decode: function (t) {
        for (var e = "", i = 0, a = 0, n = 0, r = 0; i < t.length;)
            (a = t.charCodeAt(i)) < 128
                ? ((e += String.fromCharCode(a)), i++)
                : a > 191 && a < 224
                    ? ((r = t.charCodeAt(i + 1)),
                        (e += String.fromCharCode(((31 & a) << 6) | (63 & r))),
                        (i += 2))
                    : ((r = t.charCodeAt(i + 1)),
                        (n = t.charCodeAt(i + 2)),
                        (e += String.fromCharCode(
                            ((15 & a) << 12) | ((63 & r) << 6) | (63 & n)
                        )),
                        (i += 3));
        return e;
    },
},
    LadiPageScript = LadiPageScript || new LadiPageScriptV2();
LadiPageScript.init();
var LadiFormApi = LadiFormApi || {},
    parseFloatLadiPage = function (t, e) {
        var i = parseFloat(t);
        return parseFloat(LadiPageScript.formatNumber(i, 21, null, e || 6));
    },
    decodeURIComponentLadiPage = function (t) {
        try {
            return decodeURIComponent(t);
        } catch (e) {
            return t;
        }
    },
    lightbox_run = function (t, e, i, a, n, r, o, s) {
        var l = document.getElementById(LadiPageScript.runtime.lightbox_screen_id);
        if (!LadiPageScript.isEmpty(l)) {
            var d = JSON.stringify({
                html: t,
                url: e,
                is_video: i,
                video_type: r,
                video_value: o,
            }),
                c = Object.keys(LadiPageScript.runtime.list_lightbox_id);
            -1 == c.indexOf(d) &&
                (LadiPageScript.runtime.list_lightbox_id[d] = c.length + 1);
            var u = LadiPageScript.runtime.list_lightbox_id[d];
            n = n + "_" + u;
            var p = document.getElementById(n),
                m = !1;
            LadiPageScript.isEmpty(p)
                ? ((p = document.createElement("div")),
                    l.appendChild(p),
                    (p.outerHTML = t),
                    (p = l.lastChild),
                    (m = !0))
                : i && LadiPageScript.runEventReplayVideo(n, r, !0);
            var _ = document.createElement("div");
            (_.className = "lightbox-close"),
                _.setAttribute("data-hidden", !0),
                l.appendChild(_),
                p.setAttribute("id", n),
                p.setAttribute("data-hidden", !0),
                p.classList.remove("lightbox-hidden");
            var g = function () {
                if (((p = document.getElementById(n)), !LadiPageScript.isEmpty(p))) {
                    if ("IFRAME" == p.tagName) {
                        var t = parseFloatLadiPage(getComputedStyle(p).width) || 0,
                            e = parseFloatLadiPage(getComputedStyle(p).height) || 0;
                        if (t > 0 || e > 0) {
                            var i = 0.8 * document.body.clientWidth,
                                a = 0.8 * LadiPageScript.getHeightDevice(),
                                r = i,
                                o = (e / t) * r;
                            o > a && (r = (o = a) * (t / e)),
                                p.style.setProperty(
                                    "width",
                                    (parseFloatLadiPage(r) || 0) + "px"
                                ),
                                p.style.setProperty(
                                    "height",
                                    (parseFloatLadiPage(o) || 0) + "px"
                                );
                        }
                    }
                    if (
                        ((_ = l.getElementsByClassName("lightbox-close")[0]),
                            !LadiPageScript.isEmpty(_))
                    ) {
                        var s = LadiPageScript.getElementBoundingClientRect(p),
                            d = 10,
                            c = 10;
                        s.x - 5 - _.clientWidth > c && (c = s.x - 5 - _.clientWidth),
                            s.y - 5 - _.clientHeight > d && (d = s.y - 5 - _.clientHeight),
                            (c += LadiPageScript.runtime.widthScrollBar),
                            (d -= 6),
                            (c -= 6),
                            _.style.setProperty("right", c + "px"),
                            _.style.setProperty("top", d + "px");
                    }
                    var u = document.getElementById(p.id + "_button_unmute");
                    LadiPageScript.isEmpty(u) ||
                        (u.style.setProperty("width", getComputedStyle(p).width),
                            u.style.setProperty("height", getComputedStyle(p).height));
                }
            },
                y = function () {
                    LadiPageScript.runTimeout(function () {
                        (p = document.getElementById(n)),
                            LadiPageScript.isEmpty(p) ||
                            (p.setAttribute("data-opacity", 0),
                                p.removeAttribute("data-hidden")),
                            (_ = l.getElementsByClassName("lightbox-close")[0]),
                            LadiPageScript.isEmpty(_) ||
                            (_.setAttribute("data-opacity", 0),
                                _.removeAttribute("data-hidden")),
                            g(),
                            LadiPageScript.isEmpty(p) || p.removeAttribute("data-opacity"),
                            LadiPageScript.isEmpty(_) || _.removeAttribute("data-opacity");
                    }, 100);
                };
            _.style.setProperty("top", "-100px"),
                _.style.setProperty("right", "-100px");
            var f = "load";
            if (
                (i &&
                    r == LadiPageScript.const.VIDEO_TYPE.direct &&
                    (f = "loadedmetadata"),
                    m && (p.addEventListener(f, y), p.addEventListener("error", y)),
                    i)
            ) {
                var h = e;
                r == LadiPageScript.const.VIDEO_TYPE.youtube && ((e = null), (h = o)),
                    m
                        ? LadiPageScript.runEventPlayVideo(
                            n,
                            r,
                            h,
                            !1,
                            !1,
                            !0,
                            !1,
                            s,
                            !1,
                            function (t) {
                                LadiPageScript.isEmpty(t)
                                    ? y()
                                    : (t.addEventListener(f, y),
                                        t.addEventListener("error", y));
                            }
                        )
                        : y();
            }
            s || l.style.setProperty("display", "block"),
                LadiPageScript.isEmpty(e) || (m ? (p.src = e) : y());
            var v = function () {
                var t = document.getElementById(
                    LadiPageScript.runtime.backdrop_popup_id
                );
                return (
                    LadiPageScript.isEmpty(t) || "none" == getComputedStyle(t).display
                );
            },
                E = 0;
            v()
                ? ((E = window.scrollY), (LadiPageScript.runtime.tmp.bodyScrollY = E))
                : (E = LadiPageScript.runtime.tmp.bodyScrollY);
            var P = function () {
                l.style.removeProperty("display"),
                    (p = document.getElementById(n)),
                    LadiPageScript.isEmpty(p) ||
                    (a && !i
                        ? p.parentElement.removeChild(p)
                        : (p.classList.add("lightbox-hidden"),
                            i && LadiPageScript.runEventReplayVideo(n, r, !1))),
                    (_ = l.getElementsByClassName("lightbox-close")[0]),
                    LadiPageScript.isEmpty(_) || _.parentElement.removeChild(_);
                var t = document.getElementById("style_lightbox");
                LadiPageScript.isEmpty(t) || t.parentElement.removeChild(t);
                var e = v();
                e &&
                    !LadiPageScript.isEmpty(LadiPageScript.runtime.tmp.bodyScrollY) &&
                    window.scrollTo(0, LadiPageScript.runtime.tmp.bodyScrollY),
                    e && (LadiPageScript.runtime.tmp.bodyScrollY = null);
            };
            if (
                (_.addEventListener("click", function (t) {
                    t.stopPropagation(), P();
                }),
                    !s)
            ) {
                var L = "body {";
                (L += "position: fixed !important;"),
                    (L += "width: 100% !important;"),
                    (L += "top: -" + E + "px"),
                    (L += "}"),
                    LadiPageScript.createStyleElement("style_lightbox", L);
            }
            LadiPageScript.isEmpty(l.getAttribute("data-load-event")) &&
                (l.setAttribute("data-load-event", !0),
                    l.addEventListener("click", function (t) {
                        t.stopPropagation(),
                            t.target.id == l.id &&
                            ((_ = l.getElementsByClassName("lightbox-close")[0]),
                                LadiPageScript.isEmpty(_) || _.click());
                    }),
                    window.addEventListener("resize", g)),
                s && P();
        }
    },
    lightbox_iframe = function (t, e, i, a, n, r) {
        if (!LadiPageScript.isEmpty(t)) {
            var o =
                "margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%;",
                s =
                    '<iframe id="' +
                    (i = i || "lightbox_iframe") +
                    '" class="lightbox-item" style="' +
                    o +
                    '" frameborder="0" allowfullscreen></iframe>',
                l = t,
                d = LadiPageScript.createTmpElement("iframe", l, null, !0);
            LadiPageScript.isEmpty(d) ||
                "IFRAME" != d.tagName ||
                ((l = d.src),
                    (i = d.id || i),
                    d.removeAttribute("src"),
                    d.setAttribute("style", o),
                    d.classList.add("lightbox-item"),
                    (s = d.outerHTML)),
                lightbox_run(s, l, e, !0, i, a, n, r);
        }
    },
    lightbox_image = function (t) {
        if (!LadiPageScript.isEmpty(t)) {
            lightbox_run(
                '<img class="lightbox-item" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; object-fit: scale-down; max-width: 80%; max-height: 80%;" />',
                t,
                !1,
                !1,
                "lightbox_image"
            );
        }
    },
    lightbox_video = function (t, e, i) {
        if (!LadiPageScript.isEmpty(t) && !LadiPageScript.isEmpty(e)) {
            LadiPageScript.pauseAllVideo();
            var a = "lightbox_player";
            if (
                (e == LadiPageScript.const.VIDEO_TYPE.youtube &&
                    lightbox_iframe(
                        '<iframe id="' +
                        a +
                        '" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>',
                        !0,
                        a,
                        e,
                        t,
                        i
                    ),
                    e == LadiPageScript.const.VIDEO_TYPE.direct)
            ) {
                lightbox_run(
                    '<video class="lightbox-item" id="lightbox_player" style="margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; max-width: 80%; max-height: 80%; object-fit: cover;"></video>',
                    t,
                    !0,
                    !1,
                    a,
                    e,
                    null,
                    i
                );
            }
        }
    },
    LadiPageLibraryV2 = LadiPageLibraryV2 || function () { };
(LadiPageLibraryV2.prototype.get_url = function (t, e, i) {
    if (!LadiPageScript.isEmpty(this.id)) {
        var a = this.id,
            n = "";
        if (e && LadiPageScript.isObject(t))
            Object.keys(t).forEach(function (e) {
                LadiPageScript.isEmpty(n) || (n += "&");
                var a = t[e];
                i && -1 != ["email", "phone"].indexOf(e) && (a = Base64.encode(a)),
                    (a = encodeURIComponent(a)),
                    (n += e + "=" + a);
            });
        if (!LadiPageScript.isEmpty(n)) {
            var r = LadiPageScript.createTmpElement("a", "", { href: a });
            (r.search =
                r.search + (LadiPageScript.isEmpty(r.search) ? "?" : "&") + n),
                (a = r.href);
        }
        return (
            (a = LadiPageScript.getLinkUTMRedirect(a, null)),
            (a = LadiPageScript.convertDataReplaceStr(a, !0, null, !1, t))
        );
    }
}),
    (LadiPageLibraryV2.prototype.open_url = function (t, e) {
        if (!LadiPageScript.isEmpty(this.id))
            if (LadiPageScript.runtime.has_popupx)
                LadiPageScript.runtime.tmp.runActionPopupX({
                    url: this.id,
                    target: t,
                    nofollow: e,
                    action: { type: "open_url" },
                });
            else {
                var i = this.id,
                    a = null;
                e &&
                    ((a = LadiPageScript.getElementAHref(i, !1)).setAttribute(
                        "rel",
                        "nofollow"
                    ),
                        document.body.appendChild(a)),
                    LadiPageScript.isEmpty(t) || "_self" == t.toLowerCase()
                        ? e
                            ? a.click()
                            : (window.location.href = i)
                        : e
                            ? (a.setAttribute("target", t), a.click())
                            : window.open(i, t),
                    e && a.parentElement.removeChild(a);
            }
    }),
    (LadiPageLibraryV2.prototype.get_cookie = function () {
        if (!LadiPageScript.isEmpty(this.id)) {
            for (
                var t = this.id + "=", e = document.cookie.split(";"), i = "", a = 0;
                a < e.length;
                a++
            ) {
                for (var n = e[a]; " " == n.charAt(0);) n = n.substring(1);
                if (0 == n.indexOf(t)) {
                    i = n.substring(t.length, n.length);
                    break;
                }
            }
            return decodeURIComponentLadiPage(i);
        }
    }),
    (LadiPageLibraryV2.prototype.delete_cookie = function (t, e) {
        this.set_cookie(null, -3650, t, e, !1);
    }),
    (LadiPageLibraryV2.prototype.set_cookie = function (t, e, i, a, n) {
        if (!LadiPageScript.isEmpty(this.id)) {
            var r = "";
            if (n) r = "expires = 0";
            else {
                var o = new Date();
                !LadiPageScript.isNull(e) && e instanceof Date
                    ? (o = e)
                    : ((e = LadiPageScript.isEmpty(e) ? 365 : e),
                        o.setTime(o.getTime() + 24 * e * 60 * 60 * 1e3)),
                    (r = "expires = " + o.toUTCString());
            }
            t = LadiPageScript.isEmpty(t) ? "" : t;
            var s = this.id + " = " + t;
            LadiPageScript.isEmpty(r) || (s += "; " + r),
                LadiPageScript.isEmpty(a) || (s += "; domain = " + a),
                (i = i || window.location.pathname),
                LadiPageScript.runtime.isIE || (s += "; path = " + i),
                "https:" == window.location.protocol &&
                (s += "; SameSite = None; secure"),
                (document.cookie = s);
        }
    }),
    (LadiPageLibraryV2.prototype.submit = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = t.querySelector('.ladi-form button[type="submit"]');
            LadiPageScript.isEmpty(e) || e.click();
        }
    }),
    (LadiPageLibraryV2.prototype.scroll = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t))
            if (LadiPageScript.runtime.has_popupx) this.show();
            else {
                for (
                    var e = document.querySelectorAll(
                        "#" +
                        LadiPageScript.runtime.builder_section_popup_id +
                        " .ladi-container > .ladi-element"
                    ),
                    i = 0;
                    i < e.length;
                    i++
                )
                    if (
                        e[i].id != this.id &&
                        e[i].hasAttribute("data-popup-backdrop") &&
                        "none" != getComputedStyle(e[i]).display
                    ) {
                        var a = LadiPageScript.findAncestor(t, "ladi-popup");
                        LadiPageScript.isEmpty(a) ||
                            (a = LadiPageScript.findAncestor(a, "ladi-element")),
                            (LadiPageScript.isEmpty(a) || a.id != e[i].id) &&
                            (LadiPageScript.runRemovePopup(e[i].id, !0), 100);
                    }
                LadiPageScript.runTimeout(function () {
                    var e,
                        i = LadiPageScript.isObject(LadiPageScript.runtime.story_page),
                        a = function (t, e, a) {
                            LadiPageScript.removeTimeout(
                                LadiPageScript.runtime.tmp.scroll_timeout_id
                            );
                            var n = function (t, e, i, a) {
                                return (t /= a / 2) < 1
                                    ? (i / 2) * t * t + e
                                    : (-i / 2) * (--t * (t - 2) - 1) + e;
                            },
                                r = 0;
                            r = i
                                ? "left" == t
                                    ? e.scrollLeft
                                    : e.scrollTop
                                : "left" == t
                                    ? e.scrollX
                                    : e.scrollY;
                            var o = "left" == t ? window.innerWidth : window.innerHeight,
                                s = a - r;
                            if (0 != s) {
                                var l = s < 0 ? -1 * s : s,
                                    d = 0,
                                    c = 1e3;
                                (c = l <= 4 * o ? 750 : c),
                                    (c = l <= 2 * o ? 525 : c),
                                    (c = l <= o ? 300 : c),
                                    (c = i ? 300 : c);
                                var u = "left" == t ? "scrollLeft" : "scrollTop",
                                    p =
                                        window.requestAnimationFrame ||
                                        window.mozRequestAnimationFrame ||
                                        window.webkitRequestAnimationFrame ||
                                        window.msRequestAnimationFrame ||
                                        window.oRequestAnimationFrame,
                                    m = null,
                                    _ = null,
                                    g = function (a) {
                                        i
                                            ? (e[u] = a)
                                            : "left" == t
                                                ? e.scrollTo(a, e.scrollY)
                                                : e.scrollTo(e.scrollX, a);
                                    };
                                if (p) {
                                    var y = Date.now() + c;
                                    p(
                                        (m = function () {
                                            (d = c - (y - Date.now())),
                                                (_ = n(d, r, s, c)),
                                                g(_),
                                                d < c ? p(m) : g(a);
                                        })
                                    );
                                } else
                                    (m = function () {
                                        (_ = n((d += 20), r, s, c)),
                                            g(_),
                                            d < c
                                                ? (LadiPageScript.runtime.tmp.scroll_timeout_id =
                                                    LadiPageScript.runTimeout(m, 20))
                                                : g(a);
                                    })();
                            }
                        },
                        n = function (e) {
                            var a =
                                LadiPageScript.getElementBoundingClientRect(t).top +
                                (i ? e.scrollTop : e.scrollY),
                                n = 0,
                                r = 0,
                                o = Object.keys(LadiPageScript.runtime.eventData),
                                s = LadiPageScript.runtime.isDesktop
                                    ? LadiPageScript.const.DESKTOP
                                    : LadiPageScript.const.MOBILE;
                            return (
                                o.forEach(function (e) {
                                    var i = LadiPageScript.runtime.eventData[e];
                                    if (
                                        "section" == i.type &&
                                        i[s + ".option.sticky"] &&
                                        i[s + ".option.sticky_position"] ==
                                        LadiPageScript.const.POSITION_TYPE.top
                                    ) {
                                        var a = document.getElementById(e);
                                        LadiPageScript.isEmpty(a) ||
                                            (t.id != e &&
                                                ((r =
                                                    parseFloatLadiPage(
                                                        i[s + ".option.sticky_position_top"]
                                                    ) || 0),
                                                    (n =
                                                        (parseFloatLadiPage(getComputedStyle(a).height) ||
                                                            0) + r),
                                                    "fixed" != getComputedStyle(a).position && (n *= 2)));
                                    }
                                }),
                                { scrollTop: (a -= n), stickyHeight: n, positionTop: r }
                            );
                        },
                        r = null,
                        o = null;
                    i
                        ? LadiPageScript.runtime.isDesktop
                            ? t.scrollIntoView({ behavior: "smooth" })
                            : ((o = document.getElementsByClassName("ladi-wraper")[0]),
                                LadiPageScript.runtime.story_page.type ==
                                LadiPageScript.const.STORY_PAGE.horizontal &&
                                ((e = o),
                                    a(
                                        "left",
                                        o,
                                        {
                                            scrollLeft:
                                                LadiPageScript.getElementBoundingClientRect(t).left +
                                                (i ? e.scrollLeft : e.scrollX),
                                        }.scrollLeft
                                    )),
                                LadiPageScript.runtime.story_page.type ==
                                LadiPageScript.const.STORY_PAGE.vertical &&
                                a("top", o, (r = n(o)).scrollTop))
                        : ((r = n((o = window))),
                            LadiPageScript.runtime.isDesktop
                                ? window.scrollTo({ top: r.scrollTop, behavior: "smooth" })
                                : a("top", o, r.scrollTop));
                }, 100);
            }
    }),
    (LadiPageLibraryV2.prototype.value = function (t) {
        if (!LadiPageScript.isEmpty(this.id)) {
            var e = [],
                i = !1,
                a = document.querySelectorAll(
                    "#" +
                    this.id +
                    " > ." +
                    [
                        "ladi-button .ladi-headline",
                        "ladi-headline",
                        "ladi-paragraph",
                        "ladi-list-paragraph",
                    ].join(", #" + this.id + " > .")
                ),
                n = document.querySelectorAll(
                    "#" +
                    this.id +
                    " > ." +
                    [
                        "ladi-form-item-container .ladi-form-item > input",
                        "ladi-form-item-container .ladi-form-item > textarea",
                        "ladi-form-item-container .ladi-form-item > select",
                    ].join(", #" + this.id + " > .")
                ),
                r = document.querySelectorAll(
                    "#" +
                    this.id +
                    " > ." +
                    ["ladi-form-item-container .ladi-form-checkbox-item > input"].join(
                        ", #" + this.id + " > ."
                    )
                ),
                o = document.querySelectorAll(
                    "#" + this.id + " > .ladi-image .ladi-image-background"
                ),
                s = document.querySelectorAll("#" + this.id + " > .ladi-video"),
                l = 0;
            for (l = 0; l < a.length; l++)
                LadiPageScript.isNull(t)
                    ? e.push(a[l].innerHTML)
                    : (a[l].innerHTML = t);
            for (l = 0; l < n.length; l++)
                LadiPageScript.isNull(t) ? e.push(n[l].value) : (n[l].value = t);
            var d = LadiPageScript.isArray(t) ? t : [t];
            for (l = 0; l < r.length; l++)
                if (LadiPageScript.isNull(t))
                    r[l].checked && e.push(r[l].value),
                        "checkbox" == r[l].getAttribute("type").toLowerCase() && (i = !0);
                else {
                    var c = !1;
                    "checkbox" == r[l].getAttribute("type").toLowerCase() &&
                        -1 != d.indexOf(r[l].value) &&
                        (c = !0),
                        "radio" == r[l].getAttribute("type").toLowerCase() &&
                        d.length > 0 &&
                        d[0] == r[l].value &&
                        (c = !0),
                        c ? r[l].checked || r[l].click() : r[l].checked && r[l].click();
                }
            for (l = 0; l < o.length; l++)
                if (LadiPageScript.isNull(t)) {
                    var u = getComputedStyle(o[l]).backgroundImage;
                    (u = u || "").startsWith('url("') &&
                        (u = u.substring('url("'.length)),
                        u.endsWith('")') && (u = u.substring(0, u.length - '")'.length)),
                        e.push(u);
                } else if (LadiPageScript.isEmpty(t))
                    o[l].style.setProperty("background-image", "none");
                else {
                    var p = LadiPageScript.findAncestor(o[l], "ladi-element"),
                        m = LadiPageScript.getOptimizeImage(
                            t,
                            p.clientWidth,
                            p.clientHeight,
                            !0,
                            !1,
                            !1,
                            !0
                        );
                    o[l].style.setProperty("background-image", 'url("' + m + '")');
                }
            for (l = 0; l < s.length; l++) {
                var _ = LadiPageScript.runtime.eventData[this.id];
                if (LadiPageScript.isNull(t))
                    LadiPageScript.isEmpty(_) ||
                        e.push({
                            type: _["option.video_type"],
                            value: _["option.video_value"],
                        });
                else {
                    _["option.video_value"] = t;
                    var g = s[l].getElementsByClassName("iframe-video-preload")[0],
                        y = null;
                    if (
                        _["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube
                    ) {
                        var f =
                            "https://img.youtube.com/vi/" +
                            (y = LadiPageScript.getVideoId(_["option.video_type"], t)) +
                            "/hqdefault.jpg",
                            h = s[l].getElementsByClassName("ladi-video-background")[0];
                        LadiPageScript.isEmpty(h) ||
                            h.style.setProperty("background-image", 'url("' + f + '")');
                    }
                    if (LadiPageScript.isEmpty(g))
                        LadiPageScript.playVideo(
                            this.id,
                            _["option.video_type"],
                            _["option.video_value"],
                            _["option.video_control"]
                        );
                    else {
                        LadiPageScript.pauseAllVideo();
                        var v = !1;
                        if (
                            _["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.youtube
                        ) {
                            var E = window.YT.get(g.id);
                            !LadiPageScript.isEmpty(E) &&
                                LadiPageScript.isFunction(E.loadVideoById) &&
                                (E.loadVideoById(y, 0), E.seekTo(0), (v = !0));
                        }
                        _["option.video_type"] == LadiPageScript.const.VIDEO_TYPE.direct &&
                            LadiPageScript.isFunction(g.play) &&
                            ((g.src = t), (g.currentTime = 0), (v = !0)),
                            v &&
                            LadiPageScript.runEventReplayVideo(
                                g.id,
                                _["option.video_type"],
                                !0
                            );
                    }
                }
            }
            return i ? e : e.length > 0 ? e[0] : null;
        }
    }),
    (LadiPageLibraryV2.prototype.top = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t) && t.classList.contains("ladi-section"))
            try {
                var e = t.parentElement.firstChild;
                LadiPageScript.isEmpty(e) ||
                    e.id != LadiPageScript.runtime.builder_section_background_id ||
                    (e = e.nextElementSibling),
                    t.parentElement.insertBefore(t, e),
                    LadiPageScript.reloadLazyload(!1);
            } catch (t) { }
    }),
    (LadiPageLibraryV2.prototype.pause = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
                var i = t.querySelector(".iframe-video-preload:not(.no-pause)");
                LadiPageScript.isEmpty(i) ||
                    LadiPageScript.runEventReplayVideo(
                        i.id,
                        i.getAttribute("data-video-type"),
                        !1
                    );
            }
        }
    }),
    (LadiPageLibraryV2.prototype.play = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e) && "video" == e.type) {
                var i = e["option.video_type"],
                    a = e["option.video_value"],
                    n = e["option.video_control"];
                LadiPageScript.playVideo(this.id, i, a, n);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.prev = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = null;
                "gallery" == e.type &&
                    (i = t.querySelector(
                        ".ladi-gallery-view-arrow.ladi-gallery-view-arrow-left"
                    )),
                    "carousel" == e.type &&
                    (i = t.querySelector(
                        ".ladi-carousel-arrow.ladi-carousel-arrow-left"
                    )),
                    "collection" == e.type &&
                    (i = t.querySelector(
                        ".ladi-collection-arrow.ladi-collection-arrow-left"
                    )),
                    LadiPageScript.isEmpty(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.next = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = null;
                "gallery" == e.type &&
                    (i = t.querySelector(
                        ".ladi-gallery-view-arrow.ladi-gallery-view-arrow-right"
                    )),
                    "carousel" == e.type &&
                    (i = t.querySelector(
                        ".ladi-carousel-arrow.ladi-carousel-arrow-right"
                    )),
                    "collection" == e.type &&
                    (i = t.querySelector(
                        ".ladi-collection-arrow.ladi-collection-arrow-right, .ladi-collection-button-next"
                    )),
                    LadiPageScript.isEmpty(i) || i.click();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.index = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e)) {
            var i = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(i)) {
                var a = 0;
                return (
                    ("gallery" != i.type && "carousel" != i.type) ||
                    ((a = parseFloatLadiPage(e.getAttribute("data-current")) || 0),
                        (a += 1)),
                    "collection" == i.type &&
                    (a = parseFloatLadiPage(e.getAttribute("data-page")) || 1),
                    LadiPageScript.isEmpty(t)
                        ? a
                        : (("gallery" != i.type && "carousel" != i.type) ||
                            ((t -= 1), (a -= 1)),
                            t == a
                                ? ("carousel" == i.type && e.setAttribute("data-stop", !0),
                                    void (
                                        "gallery" == i.type &&
                                        e.hasAttribute("data-loaded") &&
                                        e.setAttribute("data-stop", !0)
                                    ))
                                : void (t > a
                                    ? (("gallery" != i.type && "carousel" != i.type) ||
                                        e.setAttribute("data-current", t - 1),
                                        "collection" == i.type &&
                                        e.setAttribute("data-page", t - 1),
                                        this.next())
                                    : (("gallery" != i.type && "carousel" != i.type) ||
                                        e.setAttribute("data-current", t + 1),
                                        "collection" == i.type &&
                                        e.setAttribute("data-page", t + 1),
                                        this.prev())))
                );
            }
        }
    }),
    (LadiPageLibraryV2.prototype.readmore = function () {
        var t = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(t)) {
            var e = t.getElementsByClassName("ladi-section-arrow-down")[0];
            LadiPageScript.isEmpty(e) || e.click();
        }
    }),
    (LadiPageLibraryV2.prototype.collapse = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e) && !e.classList.contains("ladi-section")) {
            var i = e.getElementsByClassName("ladi-popup")[0];
            if (LadiPageScript.isEmpty(i)) {
                var a = LadiPageScript.isNull(t),
                    n = document.querySelector(
                        [
                            "#" + this.id + " > .ladi-headline",
                            "#" + this.id + " > .ladi-paragraph",
                            "#" + this.id + " > .ladi-list-paragraph",
                        ].join(", ")
                    ),
                    r = LadiPageScript.isEmpty(n),
                    o = 0,
                    s = 0,
                    l = null,
                    d = this,
                    c = function (t) {
                        var i = LadiPageScript.findAncestor(
                            e.parentElement,
                            "ladi-element"
                        );
                        LadiPageScript.isEmpty(i) &&
                            (i = LadiPageScript.findAncestor(
                                e.parentElement,
                                "ladi-section"
                            )),
                            r || (t = !1),
                            (LadiPageScript.runtime.list_collapse[d.id] =
                                LadiPageScript.updateHeightElement(
                                    !0,
                                    e,
                                    i,
                                    o,
                                    s,
                                    t,
                                    LadiPageScript.runtime.list_collapse[d.id]
                                ));
                    };
                if ("none" == getComputedStyle(e).display) {
                    if (a || t)
                        if (a && r) {
                            if (
                                ((l =
                                    parseFloatLadiPage(e.getAttribute("data-timeout-id")) ||
                                    null),
                                    !LadiPageScript.isEmpty(l))
                            )
                                return;
                            e.classList.remove("height-0"),
                                e.classList.remove("overflow-hidden"),
                                e.classList.remove("transition-collapse"),
                                d.show(),
                                (s = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                                e.classList.add("overflow-hidden"),
                                e.classList.add("height-0"),
                                (l = LadiPageScript.runTimeout(function () {
                                    e.classList.add("transition-collapse"),
                                        e.classList.remove("height-0"),
                                        (l = LadiPageScript.runTimeout(function () {
                                            e.classList.remove("overflow-hidden"),
                                                e.classList.remove("transition-collapse"),
                                                e.removeAttribute("data-timeout-id");
                                        }, 1e3 *
                                        parseFloatLadiPage(
                                            getComputedStyle(e).transitionDuration
                                        ))),
                                        e.setAttribute("data-timeout-id", l),
                                        c(!0);
                                }, 100)),
                                e.setAttribute("data-timeout-id", l);
                        } else
                            d.show(),
                                (s = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                                c();
                } else if (a || !t)
                    if (a && r) {
                        if (
                            ((l =
                                parseFloatLadiPage(e.getAttribute("data-timeout-id")) || null),
                                !LadiPageScript.isEmpty(l))
                        )
                            return;
                        e.classList.remove("height-0"),
                            e.classList.remove("overflow-hidden"),
                            e.classList.remove("transition-collapse"),
                            (o = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                            e.classList.add("overflow-hidden"),
                            (l = LadiPageScript.runTimeout(function () {
                                e.classList.add("transition-collapse"),
                                    e.classList.add("height-0"),
                                    (l = LadiPageScript.runTimeout(function () {
                                        e.classList.remove("overflow-hidden"),
                                            e.classList.remove("transition-collapse"),
                                            e.classList.remove("height-0"),
                                            e.removeAttribute("data-timeout-id"),
                                            d.hide();
                                    }, 1e3 *
                                    parseFloatLadiPage(
                                        getComputedStyle(e).transitionDuration
                                    ))),
                                    e.setAttribute("data-timeout-id", l),
                                    c(!0);
                            }, 100)),
                            e.setAttribute("data-timeout-id", l);
                    } else
                        (o = parseFloatLadiPage(getComputedStyle(e).height) || 0),
                            d.hide(),
                            c();
            }
        }
    }),
    (LadiPageLibraryV2.prototype.hide = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e)) {
            var i = !1;
            if (0 == e.getElementsByClassName("ladi-popup").length) {
                if (
                    (LadiPageScript.runtime.has_popupx &&
                        e.classList.contains("ladi-section") &&
                        "none" != getComputedStyle(e).display &&
                        (i = !0),
                        e.style.setProperty("display", "none", "important"),
                        LadiPageScript.reloadLazyload(!1),
                        !t && i)
                ) {
                    LadiPageScript.runtime.tmp.runActionPopupX({
                        id: this.id,
                        dimension: { display: "none" },
                        action: { type: "set_iframe_dimension" },
                    });
                }
            } else
                LadiPageScript.runRemovePopup(this.id, !0, function () {
                    for (
                        var t = document.querySelectorAll(
                            "#" +
                            LadiPageScript.runtime.builder_section_popup_id +
                            " .ladi-container > .ladi-element"
                        ),
                        e = 0;
                        e < t.length;
                        e++
                    )
                        t[e].id != this.id &&
                            t[e].hasAttribute("data-popup-backdrop") &&
                            "none" != getComputedStyle(t[e]).display &&
                            LadiPageScript.runRemovePopup(t[e].id, !0);
                });
        }
    }),
    (LadiPageLibraryV2.prototype.show = function (t) {
        var e = this.doc || document.getElementById(this.id);
        if (!LadiPageScript.isEmpty(e)) {
            var i = this,
                a = function () {
                    if (LadiPageScript.isObject(LadiPageScript.runtime.eventData)) {
                        var t = LadiPageScript.runtime.eventData[i.id];
                        LadiPageScript.isEmpty(t) ||
                            LadiPageScript.startAutoScroll(
                                i.id,
                                t.type,
                                t[LadiPageScript.const.DESKTOP + ".option.auto_scroll"],
                                t[LadiPageScript.const.MOBILE + ".option.auto_scroll"]
                            );
                        for (
                            var a = e.getElementsByClassName("ladi-element"), n = 0;
                            n < a.length;
                            n++
                        ) {
                            var r = LadiPageScript.runtime.eventData[a[n].id];
                            LadiPageScript.isEmpty(r) ||
                                LadiPageScript.startAutoScroll(
                                    a[n].id,
                                    r.type,
                                    r[LadiPageScript.const.DESKTOP + ".option.auto_scroll"],
                                    r[LadiPageScript.const.MOBILE + ".option.auto_scroll"]
                                );
                        }
                    }
                },
                n = function () {
                    for (
                        var t = e.getElementsByClassName("ladi-element"), i = -1;
                        i < t.length;
                        i++
                    ) {
                        var a = -1 == i ? e : t[i];
                        "true" == a.getAttribute("data-sticky") &&
                            (a.removeAttribute("data-top"),
                                a.removeAttribute("data-left"),
                                a.removeAttribute("data-sticky"),
                                a.style.removeProperty("top"),
                                a.style.removeProperty("left"),
                                a.style.removeProperty("width"),
                                a.style.removeProperty("position"),
                                a.style.removeProperty("z-index"));
                    }
                    LadiPageScript.runEventScroll();
                };
            if (t) {
                e.getElementsByClassName("ladi-popup").length > 0
                    ? (LadiPageScript.runShowPopup(
                        !1,
                        this.id,
                        null,
                        null,
                        !0,
                        function () {
                            for (
                                var t = document.querySelectorAll(
                                    "#" +
                                    LadiPageScript.runtime.builder_section_popup_id +
                                    " .ladi-container > .ladi-element"
                                ),
                                e = 0;
                                e < t.length;
                                e++
                            )
                                t[e].id != this.id &&
                                    t[e].hasAttribute("data-popup-backdrop") &&
                                    "none" != getComputedStyle(t[e]).display &&
                                    LadiPageScript.runRemovePopup(t[e].id, !0);
                        }
                    ),
                        LadiPageScript.removeLazyloadPopup(this.id),
                        a(),
                        n(),
                        LadiPageScript.runResizeSectionBackground())
                    : (e.style.setProperty("display", "block", "important"),
                        a(),
                        n(),
                        LadiPageScript.runResizeSectionBackground(),
                        LadiPageScript.reloadLazyload(!1));
            } else {
                if (
                    LadiPageScript.runtime.has_popupx &&
                    LadiPageScript.runtime.tmp.showPopupX(e.id, !0)
                )
                    return;
                i.show(!0);
            }
        }
    }),
    (LadiPageLibraryV2.prototype.toggle = function (t) {
        var e = this.doc || document.getElementById(this.id);
        LadiPageScript.isEmpty(e) ||
            ("none" == getComputedStyle(e).display ? this.show(t) : this.hide(t));
    }),
    (LadiPageLibraryV2.prototype.element = function () {
        return this.doc || document.getElementById(this.id);
    }),
    ["start", "add_turn"].forEach(function (t) {
        LadiPageLibraryV2.prototype[t] = function () {
            var e = LadiPageScript.runtime.eventData[this.id];
            if (!LadiPageScript.isEmpty(e)) {
                var i = LadiPageApp[e.type + LadiPageScript.const.APP_RUNTIME_PREFIX];
                if (!LadiPageScript.isEmpty(i)) {
                    var a = i(e, !0);
                    LadiPageScript.isFunction(a[t]) && a[t](this.id);
                }
            }
        };
    });
var LadiPageAppV2,
    ladi =
        ladi ||
        function (t, e) {
            if (!LadiPageScript.isEmpty(t)) {
                var i = new LadiPageLibraryV2();
                return (i.id = t), (i.doc = e), i;
            }
        },
    ladi_fbq = function (t, e, i, a) {
        if (LadiPageScript.isFunction(window.fbq)) {
            if (
                LadiPageScript.isObject(window.ladi_conversion_api) &&
                LadiPageScript.isObject(window.ladi_conversion_api.facebook) &&
                LadiPageScript.isArray(window.ladi_conversion_api.facebook.pixels)
            ) {
                LadiPageScript.isObject(a) || (a = {});
                a.eventID =
                    "ladi." +
                    Date.now() +
                    "." +
                    (Math.floor(9e10 * Math.random()) + 1e10);
            }
            window.fbq(t, e, i, a),
                LadiPageScript.runConversionApi("facebook", "events", [
                    { key: t, name: e, custom_data: i, data: a },
                ]);
        }
    };
LadiPageScript.isArray(window.ladi_fbq_data) &&
    (window.ladi_fbq_data.forEach(function (t) {
        ladi_fbq(t[0], t[1], t[2], t[3]);
    }),
        delete window.ladi_fbq_data),
    (LadiPageScript.const.API_ANALYTICS_EVENT = "https://a.ladipage.com/event"),
    (LadiPageScript.const.API_ACCESS_KEY_LOGIN =
        "https://api.ladipage.com/2.0/access-key-login"),
    (LadiPageScript.const.API_COLLECTION_PRODUCT =
        "https://api.checkout.ladisales.com/1.0/product-list"),
    (LadiPageScript.const.API_SHOW_PRODUCT =
        "https://api.checkout.ladisales.com/1.0/product-detail"),
    (LadiPageScript.const.API_LADISALE_COLLECTION_PRODUCT =
        "https://api.ladisales.com/2.0/public/collections/products"),
    (LadiPageScript.const.API_LADISALE_SHOW_PRODUCT =
        "https://api.ladisales.com/2.0/public/product/show"),
    (LadiPageScript.const.API_LADISALE_ADD =
        "https://api.ladisales.com/2.0/cart/add"),
    (LadiPageScript.const.API_LADISALE_UPDATE =
        "https://api.ladisales.com/2.0/cart/update"),
    (LadiPageScript.const.API_LADISALE_SHOW =
        "https://api.ladisales.com/2.0/cart/show"),
    (LadiPageScript.const.API_LADISALE_GET_SHIPPING =
        "https://api.ladisales.com/2.0/checkout/{0}/get-shipping"),
    (LadiPageScript.const.API_LADISALE_VALIDATE_DISCOUNT =
        "https://api.ladisales.com/2.0/checkout/{0}/validate-discount"),
    (LadiPageScript.const.API_LADISALE_PROMOTION =
        "https://api.checkout.ladisales.com/1.0/checkout/get-promotion"),
    (LadiPageScript.const.API_LADISALE_CHECKOUT_CREATE =
        "https://api.checkout.ladisales.com/1.0/checkout/create"),
    (LadiPageScript.const.API_FORM_DATA =
        "https://api.form.ladipage.com/sendform"),
    (LadiPageScript.const.API_FILE_UPLOAD =
        "https://api.files.ladicdn.com/2.0/ladipage-upload-file"),
    (LadiPageScript.const.API_DATASET_DATA =
        "https://g.ladicdn.com/dataset/{0}.json?id={1}"),
    (LadiPageScript.const.API_DATASET_BLOG = "https://g.ladicdn.com/blog-"),
    (LadiPageScript.const.CDN_LIBRARY_JS_URL =
        "https://w.ladicdn.com/v2/source/"),
    (LadiPageScript.const.CDN_LIBRARY_CSS_URL =
        "https://w.ladicdn.com/v2/source/"),
    ((LadiPageAppV2 = LadiPageAppV2 || function () { }).prototype.notify_runtime =
        function (t, e) {
            var i = function () { },
                a = "top_left",
                n = "top_center",
                r = "top_right",
                o = "bottom_left",
                s = "bottom_center",
                l = "bottom_right";
            return (
                (i.prototype.run = function (e, i) {
                    LadiPageScript.isObject(LadiPageScript.runtime.tmp.timeout_notify) ||
                        (LadiPageScript.runtime.tmp.timeout_notify = {});
                    var d = t["option.sheet_id"],
                        c = t.dataset_value,
                        u = document.getElementById(e);
                    if (
                        (u.classList.add("ladi-hidden"),
                            !LadiPageScript.isEmpty(d) || !LadiPageScript.isEmpty(c))
                    ) {
                        var p = i
                            ? LadiPageScript.const.DESKTOP
                            : LadiPageScript.const.MOBILE,
                            m = t[p + ".option.position"],
                            _ = 1e3 * (parseFloatLadiPage(t["option.time_show"]) || 5),
                            g = 1e3 * (parseFloatLadiPage(t["option.time_delay"]) || 10);
                        g = g < 501 ? 501 : g;
                        var y = "https://static.ladipage.net/source/notify.svg",
                            f = [
                                { key: "gsx$title", className: ".ladi-notify-title" },
                                { key: "gsx$content", className: ".ladi-notify-content" },
                                { key: "gsx$time", className: ".ladi-notify-time" },
                                { key: "gsx$image", className: ".ladi-notify-image img" },
                            ];
                        u.classList.remove("ladi-hidden");
                        var h = function () {
                            u.style.setProperty("opacity", 0),
                                (m != a && m != n && m != r) ||
                                u.style.setProperty("top", -u.clientHeight - 100 + "px"),
                                (m != o && m != s && m != l) ||
                                u.style.setProperty("bottom", -u.clientHeight - 100 + "px");
                        };
                        h(),
                            f.forEach(function (t) {
                                "gsx$image" == t.key
                                    ? (u.querySelectorAll(t.className)[0].src = y)
                                    : (u.querySelectorAll(t.className)[0].textContent = "");
                            });
                        var v = function (t) {
                            t = t.sort(function () {
                                return 0.5 - Math.random();
                            });
                            var i = -1,
                                d = function () {
                                    if (i + 1 < t.length) {
                                        var c = t[++i],
                                            p = Object.keys(c);
                                        u.style.removeProperty("opacity"),
                                            (m != a && m != n && m != r) ||
                                            u.style.removeProperty("top"),
                                            (m != o && m != s && m != l) ||
                                            u.style.removeProperty("bottom"),
                                            f.forEach(function (t) {
                                                -1 != p.indexOf(t.key) &&
                                                    ("gsx$image" == t.key
                                                        ? (u.querySelectorAll(t.className)[0].src =
                                                            LadiPageScript.isEmpty(c[t.key].$t)
                                                                ? y
                                                                : c[t.key].$t)
                                                        : (u.querySelectorAll(
                                                            t.className
                                                        )[0].textContent = c[t.key].$t));
                                            });
                                        var E = function () {
                                            var a = f.findIndex(function (t) {
                                                return "gsx$image" == t.key;
                                            });
                                            if (-1 != a) {
                                                var n = t[i + 1 >= t.length ? 0 : i + 1];
                                                n.hasOwnProperty(f[a].key) &&
                                                    (u.querySelectorAll(f[a].className)[0].src =
                                                        LadiPageScript.isEmpty(n[f[a].key].$t)
                                                            ? y
                                                            : n[f[a].key].$t);
                                            }
                                            LadiPageScript.runtime.tmp.timeout_notify[e] =
                                                LadiPageScript.runTimeout(d, g - 500);
                                        };
                                        LadiPageScript.runtime.tmp.timeout_notify[e] =
                                            LadiPageScript.runTimeout(function () {
                                                h(),
                                                    (LadiPageScript.runtime.tmp.timeout_notify[e] =
                                                        LadiPageScript.runTimeout(E, 500));
                                            }, _);
                                    } else v(t);
                                };
                            LadiPageScript.runtime.tmp.timeout_notify[e] =
                                LadiPageScript.runTimeout(d, g);
                        },
                            E = function (t) {
                                u.querySelector(".ladi-notify").classList.remove("ladi-hidden"),
                                    u.classList.add("ladi-notify-transition"),
                                    v(t);
                            };
                        LadiPageScript.isEmpty(c) || E(c),
                            LadiPageScript.isEmpty(d) ||
                            LadiPageScript.sendRequest(
                                "GET",
                                "https://docs.google.com/spreadsheets/d/" +
                                d +
                                "/gviz/tq?tqx=out:json",
                                null,
                                !0,
                                null,
                                function (t, e, i) {
                                    if (i.readyState == XMLHttpRequest.DONE && 200 == e) {
                                        t = (t = t.substr(
                                            t.indexOf('"table":{') + '"table":'.length
                                        )).substr(0, t.indexOf("});"));
                                        var a = JSON.parse(t),
                                            n = [],
                                            r = a.cols;
                                        LadiPageScript.isObject(a) &&
                                            0 == a.parsedNumHeaders &&
                                            LadiPageScript.isArray(a.rows) &&
                                            a.rows.length > 0 &&
                                            LadiPageScript.isObject(a.rows[0]) &&
                                            LadiPageScript.isArray(a.rows[0].c) &&
                                            a.rows[0].c.length > 0 &&
                                            ((r = []),
                                                a.rows[0].c.forEach(function (t) {
                                                    r.push({
                                                        label: LadiPageScript.isObject(t) ? t.v : "",
                                                    });
                                                }),
                                                a.rows.shift()),
                                            LadiPageScript.isObject(a) &&
                                            LadiPageScript.isArray(a.rows) &&
                                            LadiPageScript.isArray(r) &&
                                            a.rows.forEach(function (t) {
                                                if (LadiPageScript.isObject(t)) {
                                                    var e = {};
                                                    r.forEach(function (i, a) {
                                                        if (LadiPageScript.isArray(t.c)) {
                                                            var n = t.c[a];
                                                            LadiPageScript.isObject(i) &&
                                                                !LadiPageScript.isEmpty(i.label) &&
                                                                LadiPageScript.isObject(n) &&
                                                                (e["gsx$" + i.label.toLowerCase()] = {
                                                                    $t: n.v,
                                                                });
                                                        }
                                                    }),
                                                        n.push(e);
                                                }
                                            }),
                                            E(n);
                                    }
                                }
                            );
                    }
                }),
                new i()
            );
        }),
    ((LadiPageAppV2 =
        LadiPageAppV2 || function () { }).prototype.spinlucky_runtime = function (
            t,
            e
        ) {
            var i = function () { },
                a = function (t) {
                    return (
                        parseFloatLadiPage(window.ladi("_total_turn_" + t).get_cookie()) || 0
                    );
                };
            return (
                (i.prototype.getEventTrackingCategory = function () {
                    return "LadiPageFinish";
                }),
                (i.prototype.run = function (e, i) {
                    var n = t["option.spinlucky_setting.list_value"],
                        r = t.dataset_value,
                        o = t["option.spinlucky_setting.result_popup_id"],
                        s = t["option.spinlucky_setting.result_message"],
                        l = t["option.spinlucky_setting.max_turn"],
                        d = a(e);
                    if (!LadiPageScript.isEmpty(n) || !LadiPageScript.isEmpty(r)) {
                        (n = n || r),
                            LadiPageScript.setDataReplaceStr("spin_turn_left", l - d);
                        var c = document.getElementById(e),
                            u = c.getElementsByClassName("ladi-spin-lucky-start")[0],
                            p = c.getElementsByClassName("ladi-spin-lucky-screen")[0],
                            m = "";
                        n.forEach(function (t, e) {
                            var i = Base64.decode(t).split("|");
                            if (3 == i.length) {
                                var a = (360 / n.length) * e + 180 / n.length,
                                    r = "rotate(" + (a *= -1) + "deg) translateY(-50%)";
                                m +=
                                    '<div class="ladi-spin-lucky-label" style="transform: ' +
                                    r +
                                    "; -webkit-transform: " +
                                    r +
                                    ';">' +
                                    i[1].trim() +
                                    "</div>";
                            }
                        }),
                            (p.innerHTML = m);
                        var _ = !1;
                        u.addEventListener("click", function (t) {
                            if ((t.stopPropagation(), !_))
                                if ((d = a(e)) >= l)
                                    LadiPageScript.showMessage(
                                        LadiPageScript.const.LANG.GAME_MAX_TURN_MESSAGE.format(l)
                                    );
                                else {
                                    _ = !0;
                                    var i = [],
                                        r = 0,
                                        c = 1;
                                    n.forEach(function (t, e) {
                                        var a = Base64.decode(t).split("|"),
                                            n = a[0].trim(),
                                            o = a[1].trim(),
                                            s = parseFloatLadiPage(a[2].trim()) || 0;
                                        i.push({
                                            min: c,
                                            max: c + s - 1,
                                            value: n,
                                            text: o,
                                            percent: s,
                                            index: e,
                                        }),
                                            (c += s),
                                            (r += s);
                                    });
                                    for (
                                        var u = LadiPageScript.randomInt(1, r), m = null, g = 0;
                                        g < i.length;
                                        g++
                                    )
                                        if (i[g].min <= u && i[g].max >= u) {
                                            m = i[g];
                                            break;
                                        }
                                    if (LadiPageScript.isEmpty(m)) _ = !1;
                                    else {
                                        var y =
                                            parseFloatLadiPage(p.getAttribute("data-rotate")) || 0,
                                            f =
                                                m.index * (360 / i.length) +
                                                360 * (4 + Math.ceil(y / 360)) +
                                                180 / i.length,
                                            h = "rotate(" + f + "deg)";
                                        p.setAttribute("data-rotate", f),
                                            p.style.setProperty("transform", h),
                                            p.style.setProperty("-webkit-transform", h),
                                            "NEXT_TURN" != m.value.toUpperCase() &&
                                            (d++, window.ladi("_total_turn_" + e).set_cookie(d, 1));
                                        LadiPageScript.runTimeout(function () {
                                            "NEXT_TURN" == m.value.toUpperCase()
                                                ? LadiPageScript.isEmpty(m.text) ||
                                                LadiPageScript.showMessage(m.text)
                                                : (LadiPageScript.setDataReplaceStr("coupon", m.value),
                                                    LadiPageScript.setDataReplaceStr(
                                                        "coupon_code",
                                                        m.value
                                                    ),
                                                    LadiPageScript.setDataReplaceStr("coupon_text", m.text),
                                                    LadiPageScript.setDataReplaceStr(
                                                        "spin_turn_left",
                                                        l - d
                                                    ),
                                                    LadiPageScript.setDataReplaceElement(
                                                        !0,
                                                        !1,
                                                        null,
                                                        null,
                                                        [
                                                            "coupon",
                                                            "coupon_code",
                                                            "coupon_text",
                                                            "spin_turn_left",
                                                        ]
                                                    ),
                                                    o == LadiPageScript.const.GAME_RESULT_TYPE.default
                                                        ? LadiPageScript.isEmpty(s) ||
                                                        LadiPageScript.showMessage(s)
                                                        : window.ladi(o).show(),
                                                    LadiPageScript.runEventTracking(e, !1)),
                                                (_ = !1);
                                        }, 1e3 *
                                        parseFloatLadiPage(getComputedStyle(p).transitionDuration) +
                                        1e3);
                                    }
                                }
                        });
                    }
                }),
                (i.prototype.start = function (t) {
                    var e = document.getElementById(t);
                    if (
                        !LadiPageScript.isEmpty(e) &&
                        e.getElementsByClassName("ladi-spin-lucky").length > 0
                    ) {
                        var i = e.getElementsByClassName("ladi-spin-lucky-start")[0];
                        LadiPageScript.isEmpty(i) || i.click();
                    }
                }),
                (i.prototype.add_turn = function (e) {
                    var i = t["option.spinlucky_setting.max_turn"],
                        n = a(e);
                    n > 0 && n--,
                        window.ladi("_total_turn_" + e).set_cookie(n, 1),
                        LadiPageScript.setDataReplaceStr("spin_turn_left", i - n),
                        LadiPageScript.setDataReplaceElement(!1);
                }),
                new i()
            );
        });
(LadiPageScript.runtime.lang = "vi"),
    (LadiPageScript.const.LANG = {
        ALERT_TITLE: "Alert",
        ALERT_BUTTON_TEXT: "OK",
        OPTION_NO_SELECT: "KhÃ´ng chá»n",
        OPTION_TRUE: "CÃ³",
        OPTION_FALSE: "KhÃ´ng",
        REQUEST_SEND_ERROR: "ÄÃ£ xáº£y ra lá»—i, vui lÃ²ng thá»­ láº¡i!",
        FORM_LOGIN_SEND_ERROR:
            "MÃ£ cá»§a báº¡n khÃ´ng Ä‘Ãºng hoáº·c Ä‘Ã£ háº¿t háº¡n!",
        FORM_SEND_DATA_NO_CONFIG: "Vui lÃ²ng kiá»ƒm tra láº¡i cáº¥u hÃ¬nh Form!",
        FORM_UPLOAD_FILE_MAX_SIZE_ERROR:
            "Báº¡n chá»‰ Ä‘Æ°á»£c upload file tá»•ng dung lÆ°á»£ng tá»‘i Ä‘a !::max_size::!MB.",
        FORM_UPLOAD_FILE_MAX_LENGTH_ERROR:
            "Báº¡n chá»‰ Ä‘Æ°á»£c upload tá»‘i Ä‘a !::max_length::! file.",
        FORM_CAPTCHA_ERROR: "MÃ£ xÃ¡c thá»±c Captcha khÃ´ng Ä‘Ãºng!",
        FORM_CAPTCHA_LOADING:
            "Vui lÃ²ng chá» xÃ¡c thá»±c Captcha trong giÃ¢y lÃ¡t!",
        FORM_THANKYOU_MESSAGE_DEFAULT: "Cáº£m Æ¡n báº¡n Ä‘Ã£ quan tÃ¢m!",
        FORM_INPUT_REQUIRED_ERROR:
            "Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ cÃ¡c trÆ°á»ng thÃ´ng tin!",
        FORM_INPUT_EMAIL_REGEX: "Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng email!",
        FORM_INPUT_TEXT_REGEX: "Vui lÃ²ng nháº­p Ä‘Ãºng Ä‘á»‹nh dáº¡ng!",
        PRODUCT: "Sáº£n pháº©m",
        SERVICE: "Dá»‹ch vá»¥",
        TICKET: "VÃ©",
        ADD_TO_CART_QUANTITY_REQUIRED: "Vui lÃ²ng nháº­p sá»‘ lÆ°á»£ng!",
        ADD_TO_CART_NO_PRODUCT:
            "KhÃ´ng tÃ¬m tháº¥y thÃ´ng tin !::name::!, vui lÃ²ng thá»­ láº¡i sau!",
        ADD_TO_CART_PRODUCT_REQUIRED: "Vui lÃ²ng chá»n !::name::!!",
        ADD_TO_CART_NO_QUANTITY: "!::name::! Ä‘Ã£ háº¿t sá»‘ lÆ°á»£ng!",
        ADD_TO_CART_MAX_QUANTITY:
            "Báº¡n chá»‰ Ä‘Æ°á»£c mua tá»‘i Ä‘a !::max::! !::name::!.",
        ADD_TO_CART_PRODUCT_BEFORE_START_DATE:
            "ChÆ°a Ä‘áº¿n thá»i gian má»Ÿ bÃ¡n !::name::!!",
        ADD_TO_CART_PRODUCT_AFTER_END_DATE: "Thá»i gian mua !::name::! Ä‘Ã£ háº¿t!",
        ADD_TO_CART_PRODUCT_ONLY_ONE:
            "Báº¡n chá»‰ Ä‘Æ°á»£c mua 1 !::name::! cÃ¹ng lÃºc.",
        GAME_RESULT_MESSAGE:
            "ChÃºc má»«ng báº¡n nháº­n Ä‘Æ°á»£c !::coupon_text::!. Nháº­p mÃ£: !::coupon_code::! Ä‘á»ƒ sá»­ dá»¥ng. Báº¡n cÃ²n !::spin_turn_left::! lÆ°á»£t quay.",
        GAME_MAX_TURN_MESSAGE: "Báº¡n Ä‘Ã£ háº¿t lÆ°á»£t quay.",
        HIDE_ELEMENT: "áº¨n pháº§n tá»­",
        SHOW_ELEMENT: "Hiá»‡n pháº§n tá»­",
        TOP_ELEMENT: "KÃ©o Section lÃªn Ä‘áº§u",
        SCROLL_ELEMENT: "KÃ©o tá»›i Section",
        SET_COOKIE: "Thiáº¿t láº­p Cookie",
    });
1;
