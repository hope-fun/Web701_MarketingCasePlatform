var data = {};
var contentType = "application/x-www-form-urlencoded; charset=utf-8";
if (window.XDomainRequest) {
    contentType = "text/plain";
}
var client_ticket;
var server_ticket;
var LOCAL = "https://www.h6app.com/";
var SERVER = "https://passport.h6app.com/";
get_qrcode();
function get_qrcode() {
    $.ajax({
        type: "post",
        url: SERVER + "api/user/getQRCode.html",
        data: {ticket: client_ticket},
        xhrFields: {withCredentials: true},
        crossDomain: true,
        contentType: contentType,
        success: function (a) {
            if (a.code == 0) {
                $(".login-erweima").append("<img style='height:100%' src='" + a.data.qrcode + "'>")
            }
        },
        failureCallback: function (a) {
            alert("failureCallback");
            console.log(a)
        },
        dataType: "json"
    })
}
var judge = "";
(function (b, a) {
    a.ui = {
        qq: b(".qq"),
        llyqCommunicate: b(".llyq-communicate"),
        weixin: b(".weixin"),
        message: b(".message"),
        phone: b(".phone"),
        qqDetail: b(".qq-detail"),
        phoneDetail: b(".phone-detail"),
        weixinDetail: b(".weixin-detail"),
        messageDetail: b(".message-detail"),
        llyqCommunicateDetail: b(".llyq-communicate-detail"),
        login: b(".llyg-item-login"),
        mask: b(".theme-popover-mask"),
        loginLine: b(".login-line"),
        loginPanel: b(".login-panel"),
        html: b("html"),
        goTop: b(".gotop"),
        llygPanda: b(".llyg-panda"),
        llyqTailItem1: b(".llyq-tail-item1")
    };
    a.data = {};
    a.obj = null;
    a.init = function () {
        a.data.clickPanelFlag = false;
        a.data.scrollFlag = true;
        a.ui.llyqCommunicate.on("mouseover", ".qq", "qq", a.tipFunc);
        a.ui.llyqCommunicate.on("mouseover", ".weixin", "weixin", a.tipFunc);
        a.ui.llyqCommunicate.on("mouseover", ".phone", "phone", a.tipFunc);
        a.ui.llyqCommunicate.on("mouseover", ".message", "message", a.tipFunc);
        a.ui.llyqCommunicate.on("mouseout", ".qq", a.hideTipFunc);
        a.ui.llyqCommunicate.on("mouseout", ".weixin", a.hideTipFunc);
        a.ui.llyqCommunicate.on("mouseout", ".phone", a.hideTipFunc);
        a.ui.llyqCommunicate.on("mouseout", ".message", a.hideTipFunc);
        a.ui.login.bind("click", a.loginFunc);
        a.ui.html.bind("mouseup", a.htmlFunc);
        a.ui.qq.bind("click", a.qqFunc);
        a.ui.loginPanel.bind("mousedown", a.loginPanelFunc);
        window.onscroll = function () {
            if (b(document).scrollTop() > 100) {
                if (a.data.scrollFlag == true) {
                    b(".gotop").fadeIn(1000);
                    a.data.scrollFlag = false
                }
            } else {
                if (a.data.scrollFlag == false) {
                    b(".gotop").fadeOut(500);
                    a.data.scrollFlag = true
                }
            }
        };
        a.ui.goTop.click(a.goTopFunc);
        a.ui.llygPanda.bind("click", a.goIndex);
        a.ui.llyqTailItem1.bind("click", a.goIndex);
        a.client_islogin0()
    };
    a.client_islogin0 = function () {
        b.ajax({
            type: "post",
            url: LOCAL + "home/client/isLogin",
            data: "",
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code == -1) {
                    client_ticket = c.data;
                    a.ucenter_islogin0()
                } else {
                    b(".llyg-item-login").css({background: "transparent", cursor: "default"});
                    b(".llyg-item-login").html("<nobr>" + c.data.nickname + "</nobr>");
                    a.ui.login.unbind("click");
                    a.ui.html.unbind("mouseup");
                    a.ui.loginPanel.unbind("mousedown")
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.ucenter_islogin0 = function () {
        b.ajax({
            type: "post",
            url: SERVER + "api/user/isLogin.html",
            data: {ticket: client_ticket},
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code == 0) {
                    server_ticket = c.data.ticket;
                    a.post_ticket_toclient0()
                } else {
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.post_ticket_toclient0 = function () {
        b.ajax({
            type: "post",
            url: LOCAL + "home/client/ticketLogin",
            data: {ticket: server_ticket},
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code === 0) {
                    b.ajax({
                        type: "post",
                        url: LOCAL + "home/client/isLogin",
                        data: "",
                        xhrFields: {withCredentials: true},
                        crossDomain: true,
                        contentType: contentType,
                        success: function (d) {
                            console.log(d);
                            if (d.code == -1) {
                                client_ticket = d.data
                            } else {
                                b(".llyg-item-login").css({background: "transparent", cursor: "default"});
                                b(".llyg-item-login").html("<nobr>" + d.data.nickname + "</nobr>");
                                a.ui.login.unbind("click");
                                a.ui.html.unbind("mouseup");
                                a.ui.loginPanel.unbind("mousedown")
                            }
                        },
                        failureCallback: function (d) {
                            alert("failureCallback");
                            console.log(d)
                        },
                        dataType: "json"
                    })
                } else {
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.client_islogin = function () {
        b.ajax({
            type: "post",
            url: LOCAL + "home/client/isLogin",
            data: "",
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code == -1) {
                    client_ticket = c.data;
                    a.ucenter_islogin()
                } else {
                    a.ui.loginPanel.animate({height: "toggle"}, 300);
                    window.setTimeout(a.hideLoginLineFunc, 300);
                    window.setTimeout(a.hideMask1Func(c.data.nickname), 600);
                    clearInterval(judge)
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.ucenter_islogin = function () {
        b.ajax({
            type: "post",
            url: SERVER + "api/user/isLogin.html",
            data: {ticket: client_ticket},
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code == 0) {
                    server_ticket = c.data.ticket;
                    a.post_ticket_toclient()
                } else {
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.post_ticket_toclient = function () {
        b.ajax({
            type: "post",
            url: LOCAL + "home/client/ticketLogin",
            data: {ticket: server_ticket},
            xhrFields: {withCredentials: true},
            crossDomain: true,
            contentType: contentType,
            success: function (c) {
                console.log(c);
                if (c.code === 0) {
                } else {
                }
            },
            failureCallback: function (c) {
                alert("failureCallback");
                console.log(c)
            },
            dataType: "json"
        })
    };
    a.loginFunc = function () {
        a.ui.mask.show();
        a.ui.loginLine.animate({width: "toggle"}, 500);
        window.setTimeout(a.showLoginPanelFunc, 500);
        judge = setInterval(a.client_islogin, 500)
    };
    a.qqFunc = function () {
        window.location.href = "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=938176628&website=www.h6app.com";
    };
    a.goIndex = function () {
        window.location.href = "/"
    };
    a.goTopFunc = function () {
        b("body,html").animate({scrollTop: 0}, 500)
    };
    a.scrollFunc = function () {
        if (b(document).scrollTop() > 100) {
            if (a.data.scrollFlag == true) {
                a.data.scrollFlag = false
            }
        } else {
            if (a.data.scrollFlag == false) {
                a.data.scrollFlag = false
            }
        }
    };
    a.loginPanelFunc = function () {
        a.data.clickPanelFlag = true
    };
    a.htmlFunc = function () {
        if (a.data.clickPanelFlag == false && a.ui.mask.css("display") == "block") {
            a.ui.loginPanel.animate({height: "toggle"}, 300);
            window.setTimeout(a.hideLoginLineFunc, 300);
            window.setTimeout(a.hideMaskFunc, 600)
        }
        a.data.clickPanelFlag = false;
        clearInterval(judge)
    };
    a.hideMaskFunc = function () {
        a.ui.mask.hide()
    };
    a.hideMask1Func = function (c) {
        a.ui.mask.hide();
        b(".llyg-item-login").css({background: "transparent", cursor: "default"});
        b(".llyg-item-login").html("<nobr>" + c + "</nobr>");
        a.ui.login.unbind("click");
        a.ui.html.unbind("mouseup");
        a.ui.loginPanel.unbind("mousedown")
    };
    a.hideLoginLineFunc = function () {
        a.ui.loginLine.animate({width: "toggle"}, 300)
    };
    a.showLoginPanelFunc = function () {
        a.ui.loginPanel.animate({height: "toggle"})
    };
    a.tipFunc = function (d) {
        var c = d.data;
        a.ui.llyqCommunicateDetail.show();
        if (c == "qq") {
            a.ui.messageDetail.hide();
            a.ui.phoneDetail.hide();
            a.ui.weixinDetail.hide();
            a.ui.qqDetail.show().animate({width: "140px"}, 500);
            a.obj = a.ui.qqDetail
        } else {
            if (c == "weixin") {
                a.ui.messageDetail.hide();
                a.ui.phoneDetail.hide();
                a.ui.weixinDetail.show().animate({width: "140px"}, 500);
                a.obj = a.ui.weixinDetail;
                a.ui.qqDetail.hide()
            } else {
                if (c == "phone") {
                    a.ui.messageDetail.hide();
                    a.ui.phoneDetail.show().animate({width: "140px"}, 500);
                    a.obj = a.ui.phoneDetail;
                    a.ui.weixinDetail.hide();
                    a.ui.qqDetail.hide()
                } else {
                    if (c == "message") {
                        a.ui.messageDetail.show().animate({width: "140px"}, 500);
                        a.obj = a.ui.messageDetail;
                        a.ui.phoneDetail.hide();
                        a.ui.weixinDetail.hide();
                        a.ui.qqDetail.hide()
                    }
                }
            }
        }
    };
    a.hideTipFunc = function () {
        a.ui.llyqCommunicateDetail.hide();
        if (a.obj != a.ui.phoneDetail) {
            a.ui.phoneDetail.hide()
        }
        if (a.obj != a.ui.messageDetail) {
            a.ui.messageDetail.hide()
        }
        if (a.obj != a.ui.weixinDetail) {
            a.ui.weixinDetail.hide()
        }
        if (a.obj != a.ui.qqDetail) {
            a.ui.qqDetail.hide()
        }
        a.obj.hide().animate({width: "0px"}, 1)
    };
    b(function () {
        a.init()
    })
})($, window.common = {});