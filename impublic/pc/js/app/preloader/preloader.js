define(['text!./preloader.html', 'css!./preloader.css', 'map', 'model', 'router', 'tweenmax'], function (html, css, SiteMap, SiteModel, SiteRouter) {
    var view = Athena.Page.extend({
        id: 'preloader',
        className: 'pop',
        $bar: null,
        currentPage: "",
        init: function () {
            this.template = html.html || html;
            this.render();
            view.__super__.init.apply(this);
            var _self = this;

            //this.$bar = $(this.el).find('#loading-bar');


            $(".loadingtxt").text("0");

            this.listenTo(Athena, Athena.FLOW_START, function (data) {
                //console.log('start', data);
                var pageName = "";
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == "header" || data[i].id == "footer") {
                    } else {
                        pageName = pageName + data[i].id;
                    }
                }
                //console.log(pageName);
                _self.currentPage = pageName;

                switch (pageName) {
                    case "home":
                        $("#flowImg").attr("src", "impublic/pc/images/loading/flow2.png");
                        $(".loading-bg").css("background", "#efefef");
                        break;
                    case "work":
                        $("#flowImg").attr("src", "impublic/pc/images/loading/flow.png");
                        $(".loading-bg").css("background", "#12b6e2");
                        break;
                    case "tip1":
                        break;

                }
                TweenMax.set($("#flowImg"), {height: 1});


            });

            this.$el.css({
                opacity: 0,
                visibility: 'hidden'
            });
        },

        resize: function () {
            view.__super__.resize.apply(this);
        },

        transitionIn: function () {
            //console.log('in~~~~~~~~~~~~~~');
            var _self = this;
            view.__super__.transitionIn.apply(this);
            if (_self.currentPage != "tip1") {
                this.$el.css({
                    visibility: 'visible'
                });

                TweenMax.to(this.$el, 0.5, {
                    opacity: 1,
                    onComplete: function () {
                        _self.transitionInComplete();
                    }
                });
            }

        },

        transitionOut: function () {
            var _self = this;
            view.__super__.transitionOut.apply(this);
            SiteModel.track("pv_pc", "Loading");

            if (_self.currentPage != "tip1") {
                TweenMax.to($("#flowImg"), 2, {height: 3000});
                TweenMax.to(this.$el, 0.5, {
                    delay: 2,
                    opacity: 0,
                    onComplete: function () {
                        _self.$el.css({
                            visibility: 'hidden'
                        });
                        _self.transitionOutComplete();
                    }
                });
            }
        },

        transitionOutComplete: function () {
            this.trigger(Athena.TRANSITION_OUT_COMPLETE, {
                data: this.data
            });
        },

        progress: function (obj) {
            var _n = obj.progress ? obj.progress : 0;
            $(".loadingtxt").text(Math.round(_n * 100));

            //TweenMax.to(this.$bar, 0.3, {
            //    width: _n * 100 + '%',
            //    left: (1 - _n) * 0.5 * 100 + '%'
            //});
        }

    });
    return view;
});
