define(['text!./home.html', 'css!./home.css', 'map', 'model', 'router', "tweenmax"], function (html, css, SiteMap, SiteModel, SiteRouter) {
    var view = Athena.Page.extend({
            id: 'home-page',
            className: 'page',
            interval: 0,

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
            autoRun: function () {
                if (this.currentId < 2) {
                    this.currentId++;
                } else {
                    this.currentId = 0;
                }
                this.setHomePic($(".pic")[this.currentId], "left");
            },
            events: {
                "click .nextBtn": function () {
                  //  $.post("/background/index.php?s=User/doCheckInventory",
                  //      {},
                  //      function (data) {
                   //         var val = JSON.parse(data);
                            //console.log(val);
                   //         if (val.data.ret == 1) {
                                SiteRouter.navigate(SiteMap.work.id, {
                                    trigger: true
                                });
                   //         } else {
                   //             SiteRouter.navigate(SiteMap.sellout.id, {
                   //                 trigger: true
                   //             });

                   //         }
                            SiteModel.track("click_pc", "Start-Customize-BTN");
                   //     });


                },
                "click .lb": function () {
                    if (this.currentId > 0) {
                        this.currentId--;
                    } else {
                        this.currentId = 2;
                    }

                    this.setHomePic($(".pic")[this.currentId], "right");

                },
                "click .rb": function () {
                    if (this.currentId < 2) {
                        this.currentId++;
                    } else {
                        this.currentId = 0;
                    }
                    this.setHomePic($(".pic")[this.currentId], "left");
                },
                "click .IDbutton": function () {
                    SiteRouter.navigate(SiteMap.back.id, {
                        trigger: true
                    });
                    SiteModel.track("click_pc", "Product-ID-BTN");

                }, "mouseover .lb": function () {

                    window.clearInterval(this.interval);

                }, "mouseout .lb": function () {
                    this.interval = window.setInterval(this.autoRun.bind(this), 3000);
                },
                "mouseover .rb": function () {
                    window.clearInterval(this.interval);

                }, "mouseout .rb": function () {
                    this.interval = window.setInterval(this.autoRun.bind(this), 3000);
                },

            },
            target: null,
            currentId: 0,
            setHomePic: function (n, dirction) {
                var dirct;
                if (dirction == "left") {
                    dirct = 1;
                } else {
                    dirct = -1;
                }
                TweenMax.set(n, {x: 100 * dirct, alpha: 0});
                TweenMax.to(this.target, 0.5, {x: -100 * dirct, alpha: 0});
                TweenMax.to(n, 1, {x: 0, alpha: 1});
                this.target = n;

                $(".changeBtns").find("li").removeClass("choose");
                $(".changeBtns").find("li").eq(this.currentId).addClass("choose");
            }
            ,
            destroy: function () {
                window.clearInterval(this.interval);
                view.__super__.destroy.apply(this);
            }
            ,

            resize: function () {
                view.__super__.resize.apply(this);

                this.$el.width(Athena.stageRect().width);
                this.$el.height(Athena.stageRect().height);
                if (Athena.stageRect().height < 800) {
                    var scaleVal = (Athena.stageRect().height / 800).toFixed(1);

                    //var isIE = navigator.userAgent.indexOf("MSIE") >= 0;
                    var isIE = !!window.ActiveXObject || "ActiveXObject" in window;

                //    console.log("IE:" + isIE);
                    if (navigator.userAgent.indexOf("Firefox") > 0 || isIE) {
                        this.$el.find(".content").css("transform", "scale(" + scaleVal + "," + scaleVal + ")  translateZ(0)");
                    } else {
                        this.$el.find(".content").css("zoom", scaleVal);
                    }


                } else {
                    if (navigator.userAgent.indexOf("Firefox") > 0) {
                        this.$el.find(".content").css("transform", "scale(" + 1 + "," + 1 + ") translateZ(0)");
                    } else {
                        this.$el.find(".content").css("zoom", "1");
                    }


                }


            }
            ,

            transitionIn: function () {
                var _self = this;
                view.__super__.transitionIn.apply(this);
                this.$el.css({
                    visibility: 'visible'
                });
                TweenMax.to(this.$el, 0.5, {
                    opacity: 1,
                    onComplete: function () {
                        _self.interval = window.setInterval(_self.autoRun.bind(_self), 3000);
                        _self.transitionInComplete();
                    }
                });

                this.target = $(".pic")[0];
                TweenMax.set($(".pic"), {alpha: 0});
                TweenMax.to(this.target, 1, {x: 0, alpha: 1});
                SiteModel.track("pv_pc", "Homepage");
            }
            ,

            transitionOut: function () {
                var _self = this;
                view.__super__.transitionOut.apply(this);
                TweenMax.to(this.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                        clearInterval(_self.interval);
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
});
