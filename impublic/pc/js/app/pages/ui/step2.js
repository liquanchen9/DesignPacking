/**
 * Created by zhangcai on 2016/3/9.
 */
define(['snap', 'model', 'soundjs', 'tweenmax'], function (Snap, SiteModel, createjs) {
        var view = {
            target: null,
            isTipAble: false,
            tipTarget: null,
            colorArr: {
                fillYellow: {click: ["#ffe3ab", "#efd07a"], over: ["#ffe3ab", "#ffe3ab"]},
                fillGreen: {click: ["#b8cd81", "#87b86d"], over: ["#b8cd81", "#b8cd81"]},
                fillBlue: {click: ["#B4E1EF", "#7CB7C6"], over: ["#B4E1EF", "#B4E1EF"]},
                fillPink: {click: ["#d06c94", "#d283a8"], over: ["#d06c94", "#d06c94"]},
                fillViolet: {click: ["#ffffff", "#ffffff"], over: ["#ffffff", "#ffffff"]}
            },
            currentColor: {},
            currentSound: [],
            //  oldColor: "#ffffff",
            currentMode: "easy",
            //   changeColorAble: false,
            destroy: function () {
                if (this.target) {
                    this.target.unhover();
                    this.target.unclick();
                }

                $("#svgContainer").removeClass("bgGroupColor1");
                $("#svgContainer").removeClass("bgGroupColor2");
                $("#svgContainer").removeClass("bgGroupColor3");
                $("#svgContainer").removeClass("bgGroupColor4");
                $("#svgContainer").removeClass("bgGroupColor5");
                $("#svgContainer").removeClass("bgGroupColorIE");
            },
            soundnameArr: {
                fillYellow: ["Mouseover-A1", "Mouseover-A2", "Mouseover-A3", "Mouseover-A4", "Mouseover-A5"],
                fillGreen: ["Mouseover-B1", "Mouseover-B2", "Mouseover-B3", "Mouseover-B4", "Mouseover-B5"],
                fillBlue: ["Mouseover-C1", "Mouseover-C2", "Mouseover-C3", "Mouseover-C4", "Mouseover-C5"],
                fillPink: ["Mouseover-D1", "Mouseover-D2", "Mouseover-D3", "Mouseover-D4", "Mouseover-D5"],
                fillViolet: ["Mouseover-E1", "Mouseover-E2", "Mouseover-E3", "Mouseover-E4", "Mouseover-E5"]
            },
            soundCurrentId: 0,
            mouseOverSoundPlay: function () {
                SiteModel.playAudio(this.currentSound[this.soundCurrentId]);
                this.soundCurrentId++;
                if (this.soundCurrentId == this.currentSound.length) {
                    this.soundCurrentId = 0;
                }


            }, setTip: function (tip) {
                //if (this.tipTarget) {
                //    $(this.tipTarget).fadeOut();
                //}
                //
                //$(tip).fadeIn();
                //this.tipTarget = tip;
            }
            ,
            init: function () {
                var _self = this;

                $(window.bgGroup).on("replaceSvgComplete", function (evt) {
                    TweenMax.set($("#page2").children(), {scaleX: 0.01, scaleY: 0.01});
                    for (var i = 0; i < $("#page2").children().length; i++) {
                        TweenMax.to($("#page2").children()[i], 0.1, {scaleX: 1, scaleY: 1, delay: (i * 0.05)});
                    }
                    TweenMax.set($(".nextBtn"), {scaleX: 0.01, scaleY: 0.01});
                    TweenMax.to($(".nextBtn"), 0.2, {scaleX: 1, scaleY: 1, delay: 0.5});
                });


                $("#work-page #Page1Tip1").hide();
                $("#work-page #Page1Tip2").hide();

                this.TipFade = setTimeout(function () {
                    _self.setTip("#work-page #Page2Tip1");
                    _self.isTipAble = true;
                }, 3000);

                this.currentColor = this.colorArr.fillYellow;
                this.currentSound = this.soundnameArr.fillYellow;

                if (window.bgGroup.select("#bg1")) {
                    window.bgGroup.select("#bg1").remove();
                    window.bgGroup.select("#bg2").remove();
                    window.bgGroup.select("#bg0u").remove();
                    window.bgGroup.select("#bg1u").remove();
                    window.bgGroup.select("#bg2u").remove();
                    window.bgGroup.select("#bg0b").remove();
                    window.bgGroup.select("#bg1b").remove();
                    window.bgGroup.select("#bg2b").remove();
                }

                //  $("#bgGroup").removeAttr("style");
                $("#svgContainer").removeClass("step1cursor");
                // $("#bgGroup").css("cursor", 'url("impublic/pc/images/work/page2/brush1.png") 14 111, pointer');
                _self.setPen(1);

                $("#page2").find(".btn1").off().on("click", function () {
                    $("#svgContainer").addClass("svgBig");

                    SiteModel.playAudio("ButtonClick");

                });
                $("#page2").find(".btn2").off().on("click", function () {
                    $("#svgContainer").removeClass("svgBig");
                    SiteModel.playAudio("ButtonClick");
                });
                $("#page2").find(".btn3").off().on("click", function () {
                    _self.refill();
                    SiteModel.playAudio("ButtonClick");
                });
                $("#page2").find(".changeModeBtn").off().on("click", function () {
                    if (_self.currentMode == "easy") {
                        _self.currentMode = "pro";
                        $(this).addClass("changeModeBtnPro");
                    } else {
                        $(this).removeClass("changeModeBtnPro");
                        _self.currentMode = "easy";
                    }
                    SiteModel.playAudio("ButtonClick");
                });


                $("#page2 .colorPart").click(function (e) {
                    //  clearTimeout(_self.TipFade);
                    if (_self.isTipAble) {
                        //   $("#work-page #Page2Tip1").fadeOut();
                    }
                    //console.log($(this).index());
                    var _index = $(this).index();
                    //$("#bgGroup").hide();
                    //   $("#bgGroup").css("cursor", 'url("impublic/pc/images/work/page2/brush2.png") 14 111, pointer');

                    //  $("#bgGroup").css("cursor", 'url("impublic/pc/images/work/page2/brush' + _index + '.png") 14 111, pointer');
                    _self.setPen(_index);

                    // $("#bgGroup").css("cursor", 'pointer');
                    _self.currentColor = _self.colorArr[$(e.target).attr("id")];
                    _self.currentSound = _self.soundnameArr[$(e.target).attr("id")];
                    $(".colorPart").removeClass("sel");
                    $(e.target).addClass("sel");
                })
                if (this.target) {
                    _self.target = window.bgGroup.select("#colorFill");
                    _self.target.click(_self.colorClick.bind(_self));
                    _self.target.hover(_self.moveOver.bind(_self), _self.moveOut.bind(_self));
                } else {
                    $(window.bgGroup).on("replaceSvgComplete", function (evt) {
                        //console.log("replaceSvgComplete");
                        _self.target = window.bgGroup.select("#colorFill");
                        _self.target.click(_self.colorClick.bind(_self));
                        _self.target.hover(_self.moveOver.bind(_self), _self.moveOut.bind(_self));
                    });
                }

                // this.refill();
                $(".colorPart").removeClass("sel");
                $(".colorPart").eq(0).addClass("sel");
            },
            setPen: function (_index) {
                //  if (navigator.userAgent.toLowerCase().indexOf('se 2.x') == -1) {
                $("#svgContainer").removeClass("bgGroupColor1");
                $("#svgContainer").removeClass("bgGroupColor2");
                $("#svgContainer").removeClass("bgGroupColor3");
                $("#svgContainer").removeClass("bgGroupColor4");
                $("#svgContainer").removeClass("bgGroupColor5");


                var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
                if (isIE) {
                  //  $("#svgContainer").css("cursor", "pointer");
                    $("#svgContainer").addClass("bgGroupColorIE");

                } else {
                    $("#svgContainer").addClass("bgGroupColor" + _index);
                }

                //} else {
                //    $("#bgGroup").css("cursor", 'pointer');
                //}


            }
            ,
            colorClick: function (e) {
                var _self = this;
                //clearTimeout(_self.TipFade);
                //if (_self.isTipAble) {
                //    $("#work-page #Page2Tip1").fadeOut();
                //}
                this.colorChange(e.target, "click");
            }
            ,

            colorChange: function (mytarget, evtName) {
                if (mytarget.changeColorAble == false) {
                    return false;
                }
                this.mouseOverSoundPlay();
                var _self = this;
                var evtTarget = mytarget;
                var target;
                if (_self.currentMode == "easy") {
                    target = $(Snap(evtTarget).parent().node).children();
                    var color;
                    switch ($(evtTarget).attr("id")) {
                        case "colorFills":
                        case "colorFill":
                            return false;
                    }

                    if ($(evtTarget).attr("id") == "bg") {
                        color = _self.currentColor[evtName][1];
                    } else {
                        color = _self.currentColor[evtName][0];
                    }
                    for (var i = 0; i < target.length; i++) {
                        if (evtName == "click") {
                            $(target[i]).attr("oldColor", color);
                        }
                        Snap(target[i]).attr({
                            style: "fill:" + color
                        });

                    }
                } else {
                    target = evtTarget;
                    var color;
                    switch ($(evtTarget).attr("id")) {
                        case "colorFills":
                        case "colorFill":
                            return false;
                    }
                    if ($(evtTarget).attr("id") == "bg") {
                        color = _self.currentColor[evtName][1];
                    } else {
                        color = _self.currentColor[evtName][0];
                    }
                    if (evtName == "click") {
                        $(target).attr("oldColor", color);
                        //       console.log($(target)[0]);
                    }
                    Snap(target).attr({
                        style: "fill:" + color
                    })

                }
            }
            ,
            refill: function () {
                this.refillPart($("#group1"));
                this.refillPart($("#group2"));
                this.refillPart($("#group3"));
                this.refillPart($("#group4"));
                this.refillPart($("#group5"));
                this.refillPart($("#bg"));
            }
            ,
            refillPart: function (ta) {
                var target = $(ta).children();
                for (var i = 0; i < target.length; i++) {
                    Snap(target[i]).attr({
                        style: "fill:" + "#ffffff"
                    })
                    $(target[i]).attr("oldColor", "#ffffff");
                }
            }
            ,
            moveOver: function (e) {

                var _self = this;
                e.target.changeColorAble = true;
                setTimeout(function () {
                    _self.colorChange(e.target, "over");
                }, 500);
            }
            ,
            moveOut: function (e) {
                var _self = this;
                e.target.changeColorAble = false;
                var target;
                if (_self.currentMode == "easy") {
                    target = $(Snap(e.target).parent().node).children();
                    for (var i = 0; i < target.length; i++) {
                        Snap(target[i]).attr({
                            style: "fill:" + $(target[i]).attr("oldColor")
                        })
                    }
                } else {
                    target = e.target;
                    Snap(target).attr({
                        style: "fill:" + $(target).attr("oldColor")
                    })
                }


            }
        }
        return view
    }
)
