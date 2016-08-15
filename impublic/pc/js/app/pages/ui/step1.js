/**
 * Created by zhangcai on 2016/3/8.
 */
define(['model', 'tweenmax'], function (SiteModel) {
    var view = {
        TipFade: 0,
        isTipAble: false,
        tipTarget: null,
        init: function () {
            var _self = this;
            this.setSlide();
            $("#page1").find(".picBtn").off().on("click", function () {
                $("#page1").find(".picBtn").removeClass("sel");
                $(this).addClass("sel");
                _self.setPic($(this).index());
                SiteModel.playAudio("ButtonClick");
            });
            //this.TipFade = setTimeout(function () {
            //    _self.setTip("#work-page #Page1Tip1");
            //    _self.isTipAble = true;
            //}, 5000);


            TweenMax.set($("#page1 .picBtn"), {scaleX: 0.01, scaleY: 0.01});
            TweenMax.set($("#scaleController"), {scaleX: 0.01, scaleY: 0.01});

            for (var i = 0; i < $("#page1 .picBtn").length; i++) {
                TweenMax.to($("#page1 .picBtn")[i], 0.1, {scaleX: 1, scaleY: 1, delay: (i * 0.05 + 2.5)});
            }

            TweenMax.to($("#scaleController"), 0.1, {scaleX: 1, scaleY: 1, delay: 0.3 + 2.5});


            TweenMax.set($(".nextBtn"), {scaleX: 0.01, scaleY: 0.01});
            TweenMax.to($(".nextBtn"), 0.2, {scaleX: 1, scaleY: 1, delay: 0.4 + 2.5});

        }
        ,
        setPic: function (n) {
            var _self = this;
            //clearTimeout(_self.TipFade);
            //if (_self.isTipAble) {
            //    _self.setTip("#work-page #Page1Tip2");
            //}
            $(window.bgGroup).trigger("setPic", n);

            var picName = "";
            switch (n) {
                case 0:
                    picName = "Movie";
                    break;
                case 1:
                    picName = "Photo";
                    break;
                case 2:
                    picName = "Music";
                    break;
            }


            SiteModel.track("click_pc", "Step1-Choose-" + picName);
        }
        ,
        bgGroup: null,
        setBG: function () {
            var _self = this;
            _self.bgGroup = window.bgGroup;
            var x = parseInt($("#slide_btn").css("left"));
            var val = (x - 40) / 70;
            var factor = (1 + val);
            //var centerX = _self.bgGroup.matrix.split().dx;
            //var centerY = _self.bgGroup.matrix.split().dy;

            $(window.bgGroup).trigger("change", factor);

        },
        setTip: function (tip) {
            if (this.tipTarget) {
                $(this.tipTarget).fadeOut();
            }

            $(tip).fadeIn();
            this.tipTarget = tip;
            //setTimeout(function () {
            //    $(tip).fadeOut();
            //}, 1000)
        }

        ,
        setSlide: function () {
            //slider
            var _self = this;
            var _isDragable = false;
            var oldx;
            $("#slide_btn").off("mousedown").on("mousedown", function (e) {
                clearTimeout(_self.TipFade);
                if (_self.isTipAble) {
                    //     _self.setTip("#work-page #Page1Tip2");
                }
                _isDragable = true;
                oldx = e.pageX;
                return false;
            });
            $(document).off("mouseup").on("mouseup", function () {
                _isDragable = false;
                return false;
            });
            $(document).off("mousemove").on("mousemove", function (e) {
                if (_isDragable) {
                    var x = parseInt($("#slide_btn").css("left"));
                    var moveX = e.pageX - oldx;
                    var xVal = Math.min(110, Math.max((x + moveX), 41));
                    $("#slide_btn").css("left", xVal);
                    _self.setBG();
                    oldx = e.pageX;
                }
                return false;
            });

            $(".scaleB_Btn").on("click", function (e) {
                var x = parseInt($("#slide_btn").css("left"));
                var xVal = Math.min(110, Math.max((x + 20), 41));
                $("#slide_btn").css("left", xVal);
                _self.setBG();
            });

            $(".scaleS_Btn").on("click", function (e) {
                var x = parseInt($("#slide_btn").css("left"));
                var xVal = Math.min(110, Math.max((x - 20), 41));
                $("#slide_btn").css("left", xVal);
                _self.setBG();
            });

            $("#slide_btn").css("left", "72px");
            _self.setBG();

        }
    }
    return view


})
