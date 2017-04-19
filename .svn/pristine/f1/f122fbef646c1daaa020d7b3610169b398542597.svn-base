(function (d, a) {
    a.ui = {
        llyqTop: d("#llyq-body"),
        llyqDownArrow: d(".llyq-down-arrow"),
        llygHeaderDiv: d(".llyg-header-div"),
        llygTip3: d(".llyg-tip3"),
        searchOne: d(".llyq-search-key .one div a"),
        searchTwo: d(".llyq-search-key .two div a"),
        searchButton: d(".search-button"),
        searchGroup: d(".llyq-search-group input"),
        newHot: d(".llyq-new-hot1"),
        searchInput: d('.llyq-search-group input[type="text"]')
    };
    a.flag = true;
    a.data = {playGifID: "aaabbbeee11111"};
    d(window).resize(function () {
        d("html,body").css("height", d("#llyq-body").height());
        var h = d(window).width() < 1200 ? 1200 : d(window).width;
        d(".llyg-header-div").css("height", h)
    });
    var g = 0, f = 0, e = 0, c = true, b = true;
    a.init = function () {
        window.scrollTo(0, 0);
        a.data.pageCount = 1;
        a.data.pageSum = pageSum;
        a.data.time1 = new Date().getTime();
        if (a.isIEFunc()) {
            d(".canvas-div").hide();
            d(".goFirstPage").hide();
            d(".llyq-body-Div").show();
            d(".theme-popover-mask1").hide()
        }
        if (a.data.pageCount >= a.data.pageSum) {
            d(".llyq-add-progress").hide();
            d(".llyg-tail").show();
            d("html,body").css("height", d("#llyq-body").height())
        }
        a.data.hideFlag = false;
        if (tag == "" && market == 2) {
            d(".llyg-tip2 .llyg-item span").css({top: "0px", left: "32px", "z-index": "8", zoom: "1"})
        }
        d(".llyq-left-bg").velocity({top: "0px"}, 1000);
        d(".llyq-right-bg").velocity({top: "0px"}, 1000);
        d(window).scroll(a.TopShowHideFunc);
        a.ui.searchOne.bind("click", a.searchOneFunc);
        a.ui.searchTwo.bind("click", a.searchTwoFunc);
        a.ui.newHot.on("click", a.newHotClickFunc);
        a.ui.searchButton.on("click", a.searchEggFunc);
        a.ui.searchInput.bind("keydown", a.searchInputKeydownFunc);
        a.ui.searchInput.bind("keyup", a.searchInputKeyupFunc);
        d(".llyq-categ-detail").on("mouseover", ".anli-img-div", a.playGifFunc);
        d(".llyq-categ-detail").on("mouseout", ".anli-img-div", a.stopGifFunc);
        d("html,body").css("height", d("#llyq-body").height())
    };
    a.isIEFunc = function () {
        if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
            return true
        } else {
            return false
        }
    };
    a.stopGifFunc = function () {
        var h = d(this);
        var i = h.find("img");
        if (i.length == 3) {
            a.data.playGifID = h.find(".real").attr("id");
            d("#play_" + a.data.playGifID).hide();
            d("#" + a.data.playGifID).show();
            d("html,body").css("height", d("#llyq-body").height())
        }
    };
    a.playGifFunc = function () {
        var h = d(this);
        var i = h.find("img");
        if (i.length == 3) {
            a.data.playGifID = h.find(".real").attr("id");
            d("#play_" + a.data.playGifID).show();
            d("#" + a.data.playGifID).hide();
            d("html,body").css("height", d("#llyq-body").height())
        }
    };
    a.getOsFunc = function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {
            return true
        } else {
            if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
                return true
            }
        }
        return false
    };
    a.searchInputKeyupFunc = function (h) {
        a.data.inputValueEnd = a.ui.searchInput.val();
        if (h.keyCode == 13) {
            if (a.data.inputValueBegin == a.data.inputValueEnd) {
                a.searchEggFunc()
            }
        }
    };
    a.searchInputKeydownFunc = function () {
        a.data.inputValueBegin = a.ui.searchInput.val()
    };
    a.searchEggFunc = function () {
        if (b == false) {
            return
        }
        b = false;
        var l = {};
        var m = "?p=1";
        if (d(".llyq-search-group input[type=text]").val() != "") {
            l.keyWord = d(".llyq-search-group input[type=text]").val();
            var h = l.keyWord.split(" ");
            var k = 0;
            for (var j = 0; j < h.length; j++) {
                if (h[j] != "") {
                    if (k == 0) {
                        k++;
                        l.keyWord = h[j]
                    } else {
                        l.keyWord += "," + h[j]
                    }
                }
            }
            if (l.keyWord != undefined || l.keyWord != "") {
                m += "&keyWord=" + l.keyWord
            }
        }
        l.scene = d(".llyq-search-key .one").find(".secene_select").text();
        if (l.scene != "全部") {
            m += "&scene=" + l.scene
        }
        l.profession = d(".llyq-search-key .two").find(".secene_select").text();
        if (l.profession != "全部") {
            m += "&profession=" + l.profession
        }
        if (d(".llyg-new-hot .selected").text() == "NEW") {
            l.isHot = "不是热门"
        } else {
            l.isHot = "是热门"
        }
        m += "&isHot=" + l.isHot;
        d.ajax({
            type: "get", url: "/home/index/casePort" + encodeURI(m), dataType: "json", success: function (p) {
                a.data.pageCount = 1;
                a.data.pageSum = p.pageCount;
                var n = [];
                a.data.playGifID != "aaabbbeee11111";
                var i = {};
                i.caseData = [];
                if (p.code == 0) {
                    if (p.caseData.length <= 4 && a.data.pageCount == 1) {
                        d(".titleWordContainer-detail").css("margin-bottom", "400px")
                    } else {
                        d(".titleWordContainer-detail").css("margin-bottom", "0px")
                    }
                    i.caseData = p.caseData;
                    var o = template("test", i);
                    d(".llyq-categ-detail").html(o);
                    if (a.data.pageCount == a.data.pageSum) {
                        a.showTailFunc();
                        d(".llyq-no-goods").hide();
                        d(".llyq-add-progress").hide();
                        d("html,body").css("height", d("#llyq-body").height())
                    } else {
                        d(".llyq-no-goods").hide();
                        d(".llyq-add-progress").hide();
                        d(".llyg-tail").hide();
                        d("html,body").css("height", d("#llyq-body").height())
                    }
                } else {
                    d(".titleWordContainer-detail").css("margin-bottom", "0px");
                    var o = template("test", i);
                    d(".llyq-categ-detail").html(o);
                    d(".llyq-no-goods").show();
                    d(".llyq-add-progress").hide();
                    d(".llyg-tail").hide();
                    d("html,body").css("height", d("#llyq-body").height())
                }
                b = true
            }, error: function (i) {
                alert(json.msg);
                b = true;
                return
            }
        })
    };
    a.mouseWheelFunc = function (h) {
        var i = (h.originalEvent.wheelDelta && (h.originalEvent.wheelDelta > 0 ? 1 : -1)) || (h.originalEvent.detail && (h.originalEvent.detail > 0 ? -1 : 1));
        if (i > 0) {
        } else {
            if (i < 0) {
                window.clearTimeout(a.data.timeout);
                a.showHideHeaderDivFunc();
                d(".show-head1").hide();
                d(".show-head2").show();
                d("html,body").css("height", d("#llyq-body").height());
                d(".llyg-tip2 .llyg-item span").css({top: "10px", left: "32px", "z-index": "8", zoom: "1"});
                d(".llyq-left-bg").velocity({top: "0px"}, 1000);
                d(".llyq-right-bg").velocity({top: "0px"}, 1000);
                if (a.getOsFunc() == true) {
                    setTimeout(a.clearInterver1Func, 1000)
                }
                a.data.hideFlag = true;
                d(document).off("mousewheel DOMMouseScroll")
            }
        }
    };
    a.categDetailFunc = function () {
        var l = {};
        var n = "/id/" + d(this).parent().find(".real").attr("id");
        if (d(".llyq-search-group input[type=text]").val() != "") {
            l.keyWord = d(".llyq-search-group input[type=text]").val();
            var h = l.keyWord.split(" ");
            var k = 0;
            for (var j = 0; j < h.length; j++) {
                if (h[j] != "") {
                    if (k == 0) {
                        k++;
                        l.keyWord = h[j]
                    } else {
                        l.keyWord += "," + h[j]
                    }
                }
            }
            if (l.keyWord != undefined || l.keyWord != "") {
                n += "/keyWord/" + encodeURI(encodeURI(l.keyWord))
            }
        }
        l.scene = d(".llyq-search-key .one").find(".secene_select").text();
        if (l.scene != "全部") {
            n += "/scene/" + encodeURI(encodeURI(l.scene))
        }
        l.profession = d(".llyq-search-key .two").find(".secene_select").text();
        if (l.profession != "全部") {
            n += "/profession/" + encodeURI(encodeURI(l.profession))
        }
        if (d(".llyg-new-hot .selected").text() == "HOT") {
            l.isHot = "yes";
            n += "/isHot/" + l.isHot
        }
        var m = window.open("_blank");
        m.location = "/H5yemian" + n
    };
    a.newHot1Func = function () {
        if (d(".hot").hasClass("selected")) {
            d(".hot").css({"z-index": 2, "background-color": "transparent"});
            d(".new").css({"z-index": 5, "background-color": "#01CDED"})
        } else {
            d(".new").css({"z-index": 2, "background-color": "transparent"});
            d(".hot").css({"z-index": 5, "background-color": "#01CDED"})
        }
    };
    a.newHotFunc = function () {
        if (d(".hot").hasClass("selected")) {
            d(".new").css({"z-index": 2, "background-color": "transparent"});
            d(".hot").css({"z-index": 5, "background-color": "#01CDED"})
        } else {
            d(".hot").css({"z-index": 2, "background-color": "transparent"});
            d(".new").css({"z-index": 5, "background-color": "#01CDED"})
        }
    };
    a.newHotClickFunc = function () {
        var h = new Date().getTime();
        if (h - a.data.time1 < 500) {
            return
        }
        if (d(".hot").hasClass("selected")) {
            d(".hot").removeClass("blue");
            d(".new").animate({"z-index": 5, left: "0px", top: "11px"}, 500);
            d(".hot").animate({"z-index": 2, left: "28px", top: "0px"}, 500);
            d(".new").removeClass("redtotrans").addClass("transtored");
            d(".hot").removeClass("transtored").addClass("redtotrans");
            d(".hot").removeClass("selected");
            d(".new").addClass("selected")
        } else {
            d(".hot").removeClass("blue");
            d(".new").animate({"z-index": 2, left: "28px", top: "0px"}, 500);
            d(".hot").animate({"z-index": 5, left: "0px", top: "11px"}, 500);
            d(".new").removeClass("transtored").addClass("redtotrans");
            d(".hot").removeClass("redtotrans").addClass("transtored");
            d(".hot").addClass("selected");
            d(".new").removeClass("selected")
        }
        a.data.time1 = new Date().getTime();
        a.searchEggFunc()
    };
    //添加移除按钮选中状态.
    a.searchOneFunc = function () {
        var h = d(this);
        a.ui.searchOne.removeClass("secene_select").css({color: "#0888A3", "margin-left": "12px"});
        h.addClass("secene_select").css("color", "#ffffff");
        h.parent().parent().children().removeClass("twobg").removeClass("threebg");
        if (h.parent().hasClass("give-two")) {
            h.parent().addClass("twobg")
        } else {
            h.parent().addClass("threebg")
        }
        d(".secene_select").css("margin-left", "24px");
        a.searchEggFunc()
    };
    //添加移除按钮选中状态.
    a.searchTwoFunc = function () {
        var h = d(this);
        a.ui.searchTwo.removeClass("secene_select").css({color: "#0888A3", "margin-left": "12px"});
        h.addClass("secene_select").css("color", "#ffffff");
        h.parent().parent().children().removeClass("twobg").removeClass("threebg");
        if (h.parent().hasClass("give-two")) {
            h.parent().addClass("twobg")
        } else {
            h.parent().addClass("threebg")
        }
        d(".secene_select").css("margin-left", "24px");
        a.searchEggFunc()
    };
    a.hotFunc = function () {
        a.ui.newdd.velocity({"z-index": 2, left: "0px", top: "0px"});
        a.ui.hot.velocity({"z-index": 5, left: "28px", top: "11px"})
    };
    a.hot1Func = function () {
        d(".new").css({"z-index": 2, "background-color": "transparent"});
        d(".hot").css({"z-index": 5, "background-color": "#01CDED"})
    };
    a.newFunc = function () {
        a.ui.newdd.velocity({"z-index": 5, left: "28px", top: "11px"});
        a.ui.hot.velocity({"z-index": 2, left: "0px", top: "0px"})
    };
    a.new1Func = function () {
        a.ui.newdd.css({"z-index": 5, "background-color": "#01CDED"});
        a.ui.hot.css({"z-index": 2, "background-color": "transparent"})
    };
    a.TopShowHideFunc = function () {
        var n = d(this).scrollTop();
        var k = d(document).height();
        var p = d(this).height();
        if (n + p == k) {
            if (a.data.pageCount < a.data.pageSum) {
                if (c == false) {
                    return
                }
                c = false;
                d(".llyq-add-progress").show();
                d(".llyg-tail").hide();
                d("html,body").css("height", d("#llyq-body").height());
                var m = {};
                var o = "?p=" + (a.data.pageCount + 1);
                if (d(".llyq-search-group input[type=text]").val() != "") {
                    m.keyWord = d(".llyq-search-group input[type=text]").val();
                    var h = m.keyWord.split(" ");
                    var l = 0;
                    for (var j = 0; j < h.length; j++) {
                        if (h[j] != "") {
                            if (l == 0) {
                                l++;
                                m.keyWord = h[j]
                            } else {
                                m.keyWord += "," + h[j]
                            }
                        }
                    }
                    if (m.keyWord != undefined || m.keyWord != "") {
                        o += "&keyWord=" + m.keyWord
                    }
                }
                m.scene = d(".llyq-search-key .one").find(".secene_select").text();
                if (m.scene != "全部") {
                    o += "&scene=" + m.scene
                }
                m.profession = d(".llyq-search-key .two").find(".secene_select").text();
                if (m.profession != "全部") {
                    o += "&profession=" + m.profession
                }
                if (d(".llyg-new-hot .selected").text() == "NEW") {
                    m.isHot = "不是热门"
                } else {
                    m.isHot = "是热门"
                }
                o += "&isHot=" + m.isHot;
                d.ajax({
                    type: "get",
                    url: "/home/index/casePort" + encodeURI(o),
                    dataType: "json",
                    success: function (q) {
                        a.data.pageCount += 1;
                        if (q.code == 0) {
                            if (q.caseData.length <= 4 && a.data.pageCount == 1) {
                                d(".titleWordContainer-detail").css("margin-bottom", "400px")
                            } else {
                                d(".titleWordContainer-detail").css("margin-bottom", "0px")
                            }
                            var i = template("test", q);
                            d(".llyq-categ-detail").append(i);
                            if (a.data.pageCount == a.data.pageSum) {
                                a.showTailFunc();
                                d(".llyq-no-goods").hide();
                                d(".llyq-add-progress").hide();
                                d("html,body").css("height", d("#llyq-body").height())
                            } else {
                                d(".llyq-no-goods").hide();
                                d(".llyq-add-progress").hide();
                                d(".llyg-tail").hide();
                                d("html,body").css("height", d("#llyq-body").height())
                            }
                        } else {
                            d(".titleWordContainer-detail").css("margin-bottom", "0px");
                            d(".llyq-categ-detail").html("");
                            d(".llyq-no-goods").show();
                            d(".llyq-add-progress").hide();
                            d(".llyg-tail").hide();
                            d("html,body").css("height", d("#llyq-body").height())
                        }
                        c = true
                    },
                    error: function (i) {
                        c = true;
                        alert(json.msg);
                        return
                    }
                })
            }
        }
    };
    a.showTailFunc = function () {
        d(".llyq-add-progress").hide();
        d(".llyg-tail").show();
        d("html,body").css("height", d("#llyq-body").height())
    };
    a.llyqDownArrowFunc = function () {
        a.showHideHeaderDivFunc();
        d(".show-head1").hide();
        d(".show-head2").show();
        d("html,body").css("height", d("#llyq-body").height());
        d(".llyg-tip2 .llyg-item span").css({top: "10px", left: "32px", "z-index": "8", zoom: "1"});
        d(".llyq-left-bg").velocity({top: "0px"}, 1000);
        d(".llyq-right-bg").velocity({top: "0px"}, 1000);
        if (a.getOsFunc() == true) {
            setTimeout(a.clearInterver1Func, 1000)
        }
        a.data.hideFlag = true
    };
    a.llyqTopFunc = function () {
        d(document).off("mousewheel DOMMouseScroll");
        a.showHideHeaderDivFunc();
        d(".show-head1").hide();
        d(".show-head2").show();
        d("html,body").css("height", d("#llyq-body").height());
        d(".llyg-tip2 .llyg-item span").css({top: "10px", left: "32px", "z-index": "8", zoom: "1"});
        window.scrollTo(0, 1);
        d(".llyq-left-bg").velocity({top: "0px"}, 1000);
        d(".llyq-right-bg").velocity({top: "0px"}, 1000);
        if (a.getOsFunc() == true) {
            setTimeout(a.clearInterver1Func, 1000)
        }
        a.data.hideFlag = true
    };
    a.clearInterver1Func = function () {
        clearInterval(a.data.Interver1)
    };
    a.showHideHeaderDivFunc = function () {
        a.ui.llygHeaderDiv.velocity({height: "toggle"}, 1000)
    };
    d(function () {
        a.init()
    })
})($, window.index = {});