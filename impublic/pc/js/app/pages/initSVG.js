/**
 * Created by zhangcai on 2016/3/7.
 */
define(['model', 'snap', 'snaplimite', 'tweenmax'], function (SiteModel, Snap, Snaplimite) {
    var MainSVG = {
        svg: null,
        svgRoot: null,
        picWidth: 780,
        picHeight: 499,
        bgGroup: null,
        logo: null,
        tag: null,

        oreo1: null,
        oreo2: null,
        oreo3: null,
        boxsvg: null,
        cokiesvg: null,
        replaceSvg: function (n) {
            $(".nextBtn").hide();
            if (this.bgGroup.select("#content").select("#bgPic0")) {
                var picWidth = this.picWidth;
                var picHeight = this.picHeight;
                var _fixX = Math.round(picWidth / 2);
                var _fixY = Math.round(-picHeight / 2 + 10);
                var svgColor = this.svg.paper.g();
                var svg_gColor;
                var _self = this;
                $("#page2loadingCon").show();
                TweenMax.to($("#page2loading"), 0.5, {rotation: 360, repeat: -1});
                Snap.load("impublic/pc/images/work/oreo" + n + ".svg", function (f) {
                    $(".nextBtn").show();
                    var gcSvg = f;
                    //  var gcSvg = Snap.parse(svg);
                    svg_gColor = gcSvg;
                    svgColor.add(svg_gColor);
                    svgColor.attr({
                        transform: "translate(" + (_fixX) + "," + _fixY + ") scale(1)"
                    });
                    svgColor.select("#outline").attr({
                        pointerEvents: "none"
                    });

                    var content = this.bgGroup.select("#content");
                    content.select("#bgPic0").remove();
                    content.add(svgColor);
                    $(window.bgGroup).trigger("replaceSvgComplete");
                    $(".stepbtn").eq(0).show();
                    $(".stepbtn").eq(2).show();
                    $("#work-page #page2").show();
                    //window.setTimeout(function () {
                    //    _self.setTip(2);
                    //}, 1000);
                    SiteModel.track("pv_pc", "Start-Customize-Step2");
                    $("#page2loadingCon").hide();
                    _self.refill();
                });
            } else {
                $(".stepbtn").eq(0).show();
                $(".stepbtn").eq(2).show();
                $("#work-page #page2").show();
                $(".nextBtn").show();
                //window.setTimeout(function () {
                //    _self.setTip(2);
                //}, 1000);
                SiteModel.track("pv_pc", "Start-Customize-Step2");
            }
        },
        setPic: function (jpg, n) {
            SiteModel.currentSvg = n;
            //console.log(n);
            var picWidth = this.picWidth;
            var picHeight = this.picHeight;
            var bgImg = jpg;
            var _fixX = picWidth / 2;
            var _fixY = -Math.round(picHeight / 2) + 10;
            var bg0 = this.svg.paper.image(bgImg, _fixX, _fixY, picWidth, picHeight).attr({id: "bgPic0"});
            var bg1 = this.svg.paper.image(bgImg, _fixX - picWidth, _fixY, picWidth, picHeight).attr({id: "bg1"});
            var bg2 = this.svg.paper.image(bgImg, _fixX + picWidth, _fixY, picWidth, picHeight).attr({id: "bg2"});
            var bg0u = this.svg.paper.image(bgImg, _fixX, _fixY - picHeight, picWidth, picHeight).attr({id: "bg0u"});
            var bg1u = this.svg.paper.image(bgImg, _fixX - picWidth, _fixY - picHeight, picWidth, picHeight).attr({id: "bg1u"});
            var bg2u = this.svg.paper.image(bgImg, _fixX + picWidth, _fixY - picHeight, picWidth, picHeight).attr({id: "bg2u"});
            var bg0b = this.svg.paper.image(bgImg, _fixX, _fixY + picHeight, picWidth, picHeight).attr({id: "bg0b"});
            var bg1b = this.svg.paper.image(bgImg, _fixX - picWidth, _fixY + picHeight, picWidth, picHeight).attr({id: "bg1b"});
            var bg2b = this.svg.paper.image(bgImg, _fixX + picWidth, _fixY + picHeight, picWidth, picHeight).attr({id: "bg2b"});


            var content = this.svg.g(bg0, bg1, bg2, bg0u, bg1u, bg2u, bg0b, bg1b, bg2b).attr({
                transform: "translate(" + picWidth * -1 + "," + 0 + ")",
                id: "content"
            });

            this.bgGroup.add(content);


        },
        setCurrentPic: function (n) {
            this.bgGroup.select("#content").remove();

            var obj;
            switch (n) {
                case 1:
                    obj = this.oreo1;
                    break;
                case 2:
                    obj = this.oreo2;
                    break;
                case 3:
                    obj = this.oreo3;
                    break;
            }
            this.setPic("impublic/pc/images/work/oreo" + n + ".jpg", n);
            //  this.setPic("impublic/pc/images/work/oreo" + n + ".jpg", obj);
        },
        refill: function () {
            this.refillPart($("#group1"));
            this.refillPart($("#group2"));
            this.refillPart($("#group3"));
            this.refillPart($("#group4"));
            this.refillPart($("#group5"));
            this.refillPart($("#bg"));
        },
        refillPart: function (ta) {
            var target = $(ta).children();
            for (var i = 0; i < target.length; i++) {
                Snap(target[i]).attr({
                    style: "fill:" + "#ffffff"
                });
                $(target[i]).attr("oldColor", "#ffffff");
            }
        },
        init: function (svgs) {

            this.oreo1 = svgs[0];
            this.oreo2 = svgs[1];
            this.oreo3 = svgs[2];
            this.boxsvg = svgs[3];
            this.cokiesvg = svgs[4];


            var _self = this;
            this.svg = Snap("#mysvg");
            this.svg.attr({
                viewBox: [0, 0, 1280, 720],
                preserveAspectRatio: "xMidYMid"
            });


            this.bgGroup = this.svg.paper.g().attr({
                id: "bgGroup",
                transform: "translate(0,0)"
                //transform: "translate(300, 70)"
            });

            this.svgRoot = this.svg.paper.g().attr({
                id: "svgRoot",
                transform: "translate(0,0)"
            }).add(this.bgGroup);
            window.bgGroup = this.bgGroup;

            this.logo = this.svg.paper.g().attr({
                id: "logo",
                transform: "translate(0,0) scale(0.9)"
            });
            this.tag = this.svg.paper.g().attr({
                id: "tag",
                transform: "translate(0,0)"
            });

            window.svgRoot = this.svgRoot;
            this.svgRoot.add(this.logo);
            this.svgRoot.add(this.tag);

            var _w = 420;
            var _h = 320;
            //var _w = 600;
            //var _h = 500;
            Snaplimite.init();
            this.bgGroup.limitDrag({w1: this.picWidth, h1: this.picHeight, w2: _w, h2: _h});
            var boxSvg = Snap.parse(this.boxsvg).select("#boxSvg");
            boxSvg.attr({
                transform: "translate( 0, 0)"
            })
            boxSvg.select("#boxPrint").attr({
                display: "none"
                //pointerEvents: "none"
            });
            boxSvg.select("#boxstroke").attr({
                pointerEvents: "none"
            });
            boxSvg.select("#boxShadow").attr({
                pointerEvents: "none"
            });
            boxSvg.select("#whitebg").attr({
                //pointerEvents: "none",
                //display: "none"
            });
            _self.svgRoot.add(boxSvg);
            window.boxSvg = boxSvg;


            var cokieSVG = Snap.parse(this.cokiesvg).select("#layer1");
            _self.logo.add(cokieSVG);
            cokieSVG.attr({
                id: "logoContent",
                transform: "translate(-40,-970)"
            });
            window.svg = this.svg;

            $(window.svg).on("setLogo", function (evt, logoId) {
                //console.log(logoId);
                Snap.load("impublic/pc/images/work/logo/" + logoId + ".svg", function (f) {
                    //  var logo = f.select("#" + logoId);
                    var logo = f;
                    _self.logo.select("#logoContent").remove();
                    var logoGroup = window.svg.g().attr({
                        transform: "translate(-390,-265)",
                        id: "logoContent"
                    }).add(logo);
                    _self.logo.add(logoGroup);
                });

            });


            $(window.svgRoot).on("setBar", function (evt, barId) {
                //console.log(barId);
            });
            $(window.bgGroup).on("replaceSvg", function (evt) {
                //console.log("replaceSvg");
                //console.log(SiteModel.currentSvg);
                _self.replaceSvg(SiteModel.currentSvg);

            });


            $(window.bgGroup).on("setPic", function (evt, picId) {
                //console.log(picId);
                _self.setCurrentPic(picId + 1);
            })

            this.setPic("impublic/pc/images/work/oreo1.jpg", 1);

        }
    }
    return MainSVG;


});
