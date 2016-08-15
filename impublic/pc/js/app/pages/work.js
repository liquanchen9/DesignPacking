define(['text!./work.html', 'css!./work.css', 'map', 'model', 'router', 'snap', 'snaplimite', 'movieclip', 'tweenmax'], function (html, css, SiteMap, SiteModel, SiteRouter) {
    var view = Athena.Page.extend({
            id: 'work-page',
            className: 'page',
            svgClass: null,
            currentStep: 1,
            istip: true,
            init: function () {
                this.template = html.html || html;
                this.render();
                view.__super__.init.apply(this);
                var _self = this;

                this.$el.css({
                    opacity: 0,
                    visibility: 'hidden'
                });
                SiteModel.currentPageName = this.id;


            },
            events: {
                "click .nextBtn": "gotoNext"
            },
            setTip: function (n) {
                var _self = this;

                function setTipFunc() {
                    if (_self.istip) {
                        if ($(".tippage").eq(n - 1).attr("isshow") == "true") {
                            $("#popTipBg").show();
                            $("#work-page #tips").fadeIn();
                            $(".tippage").hide();
                            $(".tippage").eq(n - 1).attr("isshow", "false");
                            $(".tippage").eq(n - 1).show();
                        }
                    }
                    window.setTimeout(function () {
                        if (_self.currentStep == 1) {
                            $("#Page1Tip2").hide();
                        }
                        $("#work-page #tips").hide();
                    }, 3000);
                }


                if (localStorage.getItem("isHideTip")) {
                    var oDate1 = parseInt(localStorage.getItem("isHideTip"));
                    var oDate2 = new Date();
                    var nTime = Date.parse(oDate2) - oDate1;
                    var hour = Math.floor(nTime % 86400 / 3600);
                    //console.log(hour);
                    if (hour > 23) {
                        setTipFunc();
                    }
                } else {
                    setTipFunc();
                }

            },
            preload: function (fast) {
                var _self = this;

                if (fast) {
                    this.completeHandle();
                    return;
                }

                this.svgs = [];
                var _svgloaded = 0, _svgMax = 5;
                //  var _svgs = ['text!../images/work/oreo1.svg', 'text!../images/work/oreo2.svg', 'text!../images/work/oreo3.svg', 'text!../images/work/box.svg', 'text!../images/work/oreo-cokie.svg'];
                var _svgs = ['', '', '', 'text!../images/work/box.svg', 'text!../images/work/oreo-cokie.svg'];

                $.each(_svgs, function (i, obj) {
                    require([obj], function (svg) {
                        svg =(typeof(svg) == 'object')?svg.html:svg;
                        //console.log(svg);
                        _svgloaded++;
                        _self.svgs[i] = svg;
                        complete();
                    });
                });

                var _imgs0 = this.$el.find("img");
                var _imgs = [];
                for (var i = _imgs0.length - 1; i >= 0; i--) {
                    if (_imgs0[i].src && _imgs0[i].src !== '') _imgs.push(_imgs0[i].src);
                }

                var _loadMax = _imgs.length;
                var _loaded = 0;
                if (_loadMax == 0) {
                    this._progress = _svgloaded / _svgMax * 0.5 + 0.5;
                    this.progressHandle();
                    this.completeHandle();
                } else {
                    $.each(_imgs, function (index, obj) {
                        $(new Image()).load(function () {
                            _loaded++;
                            complete();
                        }).error(function () {
                            _loaded++;
                            complete();
                        }).attr("src", obj);
                    });
                }

                function complete() {
                    _self._progress = _loaded / _loadMax * 0.5 + _svgloaded / _svgMax * 0.5;
                    //   _self._progress = _loaded / _loadMax;
                    _self.progressHandle();
                    if (_self._progress >= 1) {
                        _self.completeHandle();
                    }
                }
            },

            gotoNext: function () {
                this.istip = true;
                if (this.currentStep == 4) {
                    if (SiteModel.step4currentTagId != "tag4") {
                        if ($("#inputTxt").val() == "") {
                            $("#work-page #Page4Tip1").attr("src", "impublic/pc/images/work/page4/tip2.png")
                            $("#work-page #Page4Tip1").fadeIn();
                            return false;
                        }
                    }

                }
                SiteModel.track("click_pc", "Step" + this.currentStep + "-Next-BTN");
                this.currentStep++;
                //console.log(this.currentStep);
                this["step" + this.currentStep]();
            },
            destroy: function () {
                view.__super__.destroy.apply(this);
            },

            resize: function () {
                view.__super__.resize.apply(this);
                //console.log("resize~~~~~~~~~~~~~~~~~~");
                //console.log(Athena.stageRect().height);

                this.$el.width(Athena.stageRect().width);
                this.$el.height(Athena.stageRect().height);


                var _h = (window.innerHeight - this.$el.find("#stepbtns").height()) / 2;
                this.$el.find("#stepbtns").css("top", _h);


                if (Athena.stageRect().height < 600) {

                    var scaleVal = (Athena.stageRect().height / 600).toFixed(1);
                    ;
                    this.$el.find("#svgContainer").height("140%").css("top", "-20%");

                    this.$el.find(".workIdTag").css("top", "2%");
                    var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
                    if (navigator.userAgent.indexOf("Firefox") > 0 || isIE) {
                        this.$el.find("#stepbtns").css("transform", "scale(" + (scaleVal * 0.8) + "," + (scaleVal * 0.8) + ") ");
                        this.$el.find("#Page1Tip2").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)");
                        this.$el.find(".controlUI").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)");
                        this.$el.find("#page2loadingCon").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)");
                        this.$el.find(".header").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)").css("top", "2%");
                        this.$el.find("#tipBtns").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)");
                    } else {
                        this.$el.find("#stepbtns").css("zoom", scaleVal * 0.8);
                        this.$el.find("#Page1Tip2").css("zoom", scaleVal);
                        this.$el.find(".controlUI").css("zoom", scaleVal);
                        this.$el.find("#page2loadingCon").css("zoom", scaleVal);
                        this.$el.find(".header").css("zoom", scaleVal).css("top", "2%");
                        this.$el.find("#tipBtns").css("zoom", scaleVal);
                    }


                } else {
                    this.$el.find("#svgContainer").height("100%").css("top", "0px");
                    this.$el.find(".workIdTag").css("top", "10%");

                    if (navigator.userAgent.indexOf("Firefox") > 0) {
                        this.$el.find("#stepbtns").css("transform", "scale(" + 0.8 + "," + 0.8 + ") ");
                        this.$el.find(".controlUI").css("transform", "scale(" + 1 + "," + 1 + ")  translateZ(0)");
                        this.$el.find("#page2loadingCon").css("transform", "scale(" + 1 + "," + 1 + ")  translateZ(0)");

                        this.$el.find("#tipBtns").css("transform", "scale(" + 1 + "," + 1 + ")  translateZ(0)");
                        this.$el.find("#Page1Tip2").css("transform", "scale(" + 1 + "," + 1 + ")  translateZ(0)");
                        this.$el.find(".header").css("transform", "scale(" + 1 + "," + 1 + ")  translateZ(0)").css("top", "10%");
                    } else {
                        this.$el.find("#stepbtns").css("zoom", 0.8);
                        this.$el.find("#Page1Tip2").css("zoom", 1);
                        this.$el.find(".controlUI").css("zoom", 1);
                        this.$el.find("#page2loadingCon").css("zoom", 1);
                        this.$el.find(".header").css("zoom", 1).css("top", "10%");
                        this.$el.find("#tipBtns").css("zoom", 1);
                    }

                }
                if (this.svgClass) {
                    this.setsvgCentre();
                }

                //if ($("#boxstroke").get(0)){
                //    console.log($("#boxstroke").get(0).getScreenCTM());
                //}


            },
            setsvgCentre: function () {
                var _self = this;

                //   $("#mysvg").width($("#svgContainer").width());
                $("#mysvg").width(1700);
                $("#mysvg").height($("#svgContainer").height());

                //console.log(_self.svgClass);

                var _sw = 1280 / $("#svgContainer").width();
                var _sh = 720 / $("#svgContainer").height();
                var _offsetX = -25;
                var _offsetY = -35;
                _self.svgClass.svgRoot.attr({
                    transform: "translate(" + ( $("#svgContainer").width() / 2 * _sw + _offsetX) + "," + ($("#svgContainer").height() / 2 * _sh + _offsetY) + ")"
                })

                //  $("#svgRoot").css({transform: 'translate(' + $("#svgContainer").width() / 2 + ',' + $("#svgContainer").height() / 2 + ')'});

                //if(MainSVG) MainSVG.resize(Athena.stageRect().width, Athena.stageRect().height);
            },

            stepBtn1: function () {
                window.location.reload();
            },
            stepBtn2: function () {
                // this.setLeftBar(2);
                this.step2();
            },
            stepBtn3: function () {
                //this.setLeftBar(3);
                this.step3();
            },
            stepBtn4: function () {
                this.step4();
                //this.setLeftBar(4);
                // this.step2();
            },

            step1: function () {
                this.currentStep = 1;
                $(".stepbtn").hide();
                $(".stepbtn").eq(1).show();
                $("#work-page .controlPage").hide();
                $("#work-page #page1").show();


                var _self = this;
                window.setTimeout(function () {
                    _self.setTip(1);
                    $("#svgContainer").addClass("step1cursor");
                    $("#whitebg").css("cursor", "auto");
                    if (!localStorage.getItem("isHideTip")) {
                        $("#work-page #Page1Tip2").show();
                    }

                }, 3000);
                SiteModel.track("pv_pc", "Start-Customize-Step1");


                //this.setLeftBar(1);
            },
            step2: function () {
                this.currentStep = 2;
                var _self = this;
                $(".stepbtn").hide();
                $("#work-page .controlPage").hide();
                $(window.bgGroup).trigger("replaceSvg");
                // $(".nextBtn").hide();
                $(window.bgGroup).on("replaceSvgComplete", function (evt) {

                    window.setTimeout(function () {
                        _self.setTip(2);
                    }, 1000);
                });

                $(".header").attr("src", "impublic/pc/images/work/title/title2.png");
                window.bgGroup.undrag();
                window.boxSvg.select("#boxstroke").attr({
                    display: "none"
                });
                window.boxSvg.select("#whitebg").attr({
                    style: "opacity:1",
                    fill: "#efefef"
                });

                require(['./app/pages/ui/step2', 'css!./app/pages/ui/step2.css'], function (Step2) {
                    _self.step2C = Step2;

                    Step2.init();
                })
                this.setLeftBar(2);

            },
            step2C: null,
            step3: function () {
                var _self = this;
                this.currentStep = 3;
                $(".stepbtn").hide();
                $(".stepbtn").eq(0).show();
                $(".stepbtn").eq(1).show();
                $(".stepbtn").eq(3).show();

                this.setLeftBar(3);
                $(".header").attr("src", "impublic/pc/images/work/title/title3.png")
                $("#work-page .controlPage").hide();
                $("#work-page #page3").show();
                if (this.step2C) {
                    this.step2C.destroy();
                }
                require(['./app/pages/ui/step3', 'css!./app/pages/ui/step3.css'], function (Step3) {
                    Step3.init();
                })
                window.setTimeout(function () {
                    _self.setTip(3);
                }, 1000);
                SiteModel.track("pv_pc", "Start-Customize-Step3");
            },
            step4: function () {
                var _self = this;
                this.currentStep = 4;
                $(".stepbtn").hide();
                $(".stepbtn").eq(0).show();
                $(".stepbtn").eq(1).show();
                $(".stepbtn").eq(2).show();
                $(".stepbtn").eq(4).show();
                $(".header").attr("src", "impublic/pc/images/work/title/title4.png")
                this.setLeftBar(4);
                $("#work-page .controlPage").hide();
                $("#work-page #page4").show();
                require(['./app/pages/ui/step4', 'css!./app/pages/ui/step4.css'], function (Step4) {
                    Step4.init();
                })
                window.setTimeout(function () {
                    _self.setTip(4);
                }, 1000);
                var timestamp = Date.parse(new Date());
                localStorage.setItem("isHideTip", timestamp);
                SiteModel.track("pv_pc", "Start-Customize-Step4");
            },
            step5: function () {
                var _self = this;
                //$.post("/background/index.php?s=User/doCheckContent",
                //    {content: window.userTypeTxt},
                //    function (data) {
                //        var val = JSON.parse(data);
                        //console.log(val);
                		var val = {data:{ret:1 }};
                
                        if (val.data.ret == 1) {
                            $("#saving ").show();
                            TweenMax.to($("#saving1"), 1, {rotation: 360, repeat: -1});
                            TweenMax.to($("#saving2"), 0.2, {scaleX: 1.1, scaleY: 1.1, repeat: -1, yoyo: true});
                            $("#stepbtns").hide();
                            $(".header").attr("src", "impublic/pc/images/work/title/title5.png")
                            $("#work-page .controlPage").hide();
                            // $("#work-page #page5").show();
                            require(['./app/pages/ui/step5', 'css!./app/pages/ui/step5.css'], function (Step5) {
                                Step5.init();
                            });
                            $(".nextBtn").hide();
                        } else {
                            $("#work-page #Page4Tip1").attr("src", "impublic/pc/images/work/page4/tip3.png")
                            $("#work-page #Page4Tip1").fadeIn();
                            _self.currentStep = 4;
                        }

                 //   });


                SiteModel.track("pv_pc", "Start-Customize-Done");
            },
            leftMenu: null,

            transitionIn: function () {
                var _self = this;
                view.__super__.transitionIn.apply(this);
                this.$el.css({
                    visibility: 'visible'
                });
                JT.to(this.$el, 0.5, {
                    opacity: 1,
                    onEnd: function () {

                        _self.transitionInComplete();
                    }
                });

                $("#popTipBg").on("click", function () {
                    if (_self.currentStep == 1) {
                        $("#Page1Tip2").hide();
                    }
                    $("#work-page #tips").hide();
                });

                this.setSVG();


                require(['./app/pages/ui/menu', 'movieclip'], function () {
                    var canvas, stage;
                    canvas = document.getElementById("canvas");
                    var loader = new createjs.LoadQueue(false);
                    loader.addEventListener("fileload", handleFileLoad);
                    loader.addEventListener("complete", handleComplete);
                    loader.loadManifest(lib.properties.manifest);
                    function handleFileLoad(evt) {
                        if (evt.item.type == "image") {
                            images[evt.item.id] = evt.result;
                        }
                    }

                    function handleComplete(evt) {
                        _self.leftMenu = new lib.menu();
                        stage = new createjs.Stage(canvas);
                        stage.addChild(_self.leftMenu);
                        stage.update();

                        createjs.Ticker.setFPS(lib.properties.fps);
                        createjs.Ticker.addEventListener("tick", stage);

                        //console.log(_self.leftMenu);
                        _self.setLeftBar(1);
                    }

                    $(".stepbtn").on("click", function () {
                        //console.log($(this).index());
                        var a = ($(this).index() + 1);
                        _self.istip = false;
                        _self["stepBtn" + a]();
                    });

                    for (var i = 0; i < $("#work-page .stepbtn").length; i++) {
                        $("#work-page .stepbtn").eq(i).css("top", i * 111);
                    }


                })


            },

            setLeftBar: function (n) {
                var _self = this;
                _self.leftMenu.step1.gotoAndStop(0);
                _self.leftMenu.step2.gotoAndStop(0);
                _self.leftMenu.step3.gotoAndStop(0);
                _self.leftMenu.step4.gotoAndStop(0);

                //_self.leftMenu.btn2.addEventListener("click", _self.step2);
                //_self.leftMenu.btn3.addEventListener("click", _self.step3);
                //_self.leftMenu.btn4.addEventListener("click", _self.step4);


                _self.leftMenu["step" + n].gotoAndStop(1);

                SiteModel.track("click_pc", "Nav Step" + n);
            },
            setSVG: function () {
                var _self = this;
                require(['initSVG'], function (MainSVG) {
                    _self.svgClass = MainSVG;
                    // console.log(_self.svgs[0], _self.svgs[1]);
                    MainSVG.init(_self.svgs);

                    _self.setsvgCentre();

                    require(['./app/pages/ui/step1', 'css!./app/pages/ui/step1.css'], function (Step1) {
                        Step1.init();
                        _self.step1();
                    })
                })

            },

            transitionOut: function () {
                var _self = this;
                view.__super__.transitionOut.apply(this);
                JT.to(this.$el, 0.5, {
                    opacity: 0,
                    onEnd: function () {
                        _self.$el.css({
                            visibility: 'hidden'
                        });
                        _self.transitionOutComplete();
                    }
                });
            }

        })
        ;
    return view;
})
;
