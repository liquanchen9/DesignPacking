define(['text!./tip1.html', 'css!./tip1.css', 'pop', 'map', 'model', 'router'], function (html, css, BasePop, SiteMap, SiteModel, SiteRouter) {
    var view = BasePop.extend({
        id: "tip1-pop",

        init: function () {
            this.template = html.html || html;
            this.render();
            view.__super__.init.apply(this);
            var _self = this;

            this.$el.css({
                opacity: 0,
                visibility: 'hidden'
            });
            this.setSlide();
            $(".closeBtn").on("click", function (e) {
                _self.closeHandler();
            });

        },
        setSlide: function () {
            //slider
            var _self = this;
            var _isDragable = false;
            var oldy;
            $("#dragbtn").off("mousedown").on("mousedown", function (e) {
                _isDragable = true;
                oldy = e.pageY;
                //console.log("down");
                return false;
            });
            $(document).on("mouseup", function () {
                _isDragable = false;
                return false;
            });
            $(document).on("mousemove", function (e) {
                if (_isDragable) {
                    var y = parseInt($("#dragbtn").css("top"));
                    var moveY = e.pageY - oldy;
                    //var yVal = y + moveY;
                    var yVal = Math.min((246), Math.max((y + moveY), 0));
                    $("#dragbtn").css("top", yVal);
                    _self.setScollbar();

                    oldy = e.pageY;
                }
                return false;
            });
        },
        setScollbar: function () {
            var barY = parseInt($("#dragbtn").css("top")) / 246;
            var height = $(".hdgz").height() - $(".hdgzCon").height();
            var y = barY * height * -1;

            $(".hdgz").css("top", y)

        },


        resize: function () {
            view.__super__.resize.apply(this);
        },

        transitionIn: function () {
            var _self = this;
            view.__super__.transitionIn.apply(this);
            this.$el.css({
                visibility: 'visible'
            });
            JT.to(this.$el, 0.3, {
                opacity: 1,
                onEnd: function () {
                    _self.transitionInComplete();
                }
            });
        },

        transitionOut: function () {
            var _self = this;
            view.__super__.transitionOut.apply(this);
            JT.to(this.$el, 0.3, {
                opacity: 0,
                visibility: 'hidden',
                onEnd: function () {
                    _self.transitionOutComplete();
                }
            });
        },

        closeHandler: function () {
            view.__super__.closeHandler.apply(this);
        }

    });
    return view;
});
