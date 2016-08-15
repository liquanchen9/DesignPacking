/**
 * Created by zhangcai on 2016/3/9.
 */
define(['model', 'snap', 'tweenmax'], function (SiteModel) {
        var view = {
            logoGroup: null,
            init: function () {
                var _self = this;
                //console.log("step3");
                TweenMax.set($("#page3").find("#btnsMove").children(), {scaleX: 0.01, scaleY: 0.01});
                for (var i = 0; i < $("#page3").find("#btnsMove").children().length; i++) {
                    TweenMax.to($("#page3").find("#btnsMove").children()[i], 0.1, {scaleX: 1, scaleY: 1, delay: (i * 0.05)});
                }
                TweenMax.set($(".nextBtn"), {scaleX: 0.01, scaleY: 0.01});
                TweenMax.to($(".nextBtn"), 0.2, {scaleX: 1, scaleY: 1, delay: 0.5});


                this.logoGroup = window.svg.g().attr({transform: "translate(20,30) scale(0.9)"});
                window.svg.add(this.logoGroup);

                $("#svgContainer").removeClass("bgGroupColor1");
                $("#svgContainer").removeClass("bgGroupColor2");
                $("#svgContainer").removeClass("bgGroupColor3");
                $("#svgContainer").removeClass("bgGroupColor4");
                $("#svgContainer").removeClass("bgGroupColor5");

                $(window.svg).trigger("setLogo", "wow");
                $("#page3 .logoBtn").off().on("click", this.logoClick.bind(_self));
                $("#page3 #rbtn").off().on("click", function () {
                    TweenMax.to($("#btnsMove"), 0.5, {x: -352});
                });
                $("#page3 #lbtn").off().on("click", function () {
                    TweenMax.to($("#btnsMove"), 0.5, {x: 0});
                });
                $(".logoBtn").removeClass("sel");
                $("#page3 .logoBtn").eq(0).addClass("sel");
                $("#chooseTag").css("left", "0px");

              //  $("#bgGroup").css("cursor", "auto");
                $("#svgContainer").removeClass("svgBig");

            },
            logoClick: function (e) {
                var _self = this;
                var id = $(e.target).attr("id");
                // console.log($(e.target).index());
                var leftVal = ($(e.target).index()) * 120;
                $("#chooseTag").css("left", leftVal);
                $(".logoBtn").removeClass("sel");
                $(e.target).addClass("sel");
                $(window.svg).trigger("setLogo", id);
                SiteModel.playAudio("ButtonClick");
            }


        }
        return view
    }
)
