/**
 * Created by zhangcai on 2016/3/7.
 */
define(['snap'],
    function (Snap) {

        var Snaplimite = {
            target: null,
            scaleVal: 1,
            params: {},
            init: function () {
                var _self = this;
                Snap.plugin(function (Snap, Element, Paper, global) {
                    Element.prototype.limitDrag = function (params) {
                        _self.target = this;
                        _self.params = params;
                        _self.setRange();
                        this.data('x', 0);
                        this.data('y', 0);
                        this.data('ot', this.transform().local);
                        this.drag(_self.limitMoveDrag.bind(_self), _self.limitStartDrag, _self.limitEndDrag);
                        _self.setScale(1, this);
                        return this;
                    };
                })

                $(window.bgGroup).on("change", _self.setScale.bind(_self));


            },
            setRange: function (scaleNum) {
                var _self = this;
                _self.scaleVal = scaleNum || _self.target.matrix.split().scalex;
                var _w = this.params.w1 * 0.835 * 0.9;
                var _h = this.params.h1 * 0.75 * 0.85;
                var _minx = -(_w * _self.scaleVal - this.params.w2) / 2;
                var _miny = -(_h * _self.scaleVal - this.params.h2) / 2;
                var _maxx = (_w * _self.scaleVal - this.params.w2) / 2;
                var _maxy = (_h * _self.scaleVal - this.params.h2) / 2;
                _self.target.data('minx', _minx);
                _self.target.data('miny', _miny);
                _self.target.data('maxx', _maxx);
                _self.target.data('maxy', _maxy);
            },


            // this code is old and clunky now, and transform possibly in wrong order, so only use for simple cases
            limitMoveDrag: function (dx, dy) {
                var _self = this;
                _self.target.data('x', Math.min(_self.target.data('maxx'), Math.max(_self.target.data('minx'), (_self.target.data('ox') + dx))));
                _self.target.data('y', Math.min(_self.target.data('maxy'), Math.max(_self.target.data('miny'), (_self.target.data('oy') + dy))));
                //_self.scaleVal = _self.target.matrix.split().scalex;
                _self.target.attr({
                    transform: "translate( " + _self.target.data('x') + "," + _self.target.data('y') + ") scale(" + _self.scaleVal + ")"
                });

            },
            setScale: function (evt, factor) {
                var _self = this;
                _self.scaleVal = Number(factor).toFixed(1);
                this.target.data('ox', 0);
                this.target.data('oy', 0);
                this.setRange(_self.scaleVal);
                this.limitMoveDrag(0, 0);

            }
            ,

            limitStartDrag: function (x, y, ev) {
                this.data('ox', this.data('x'));
                this.data('oy', this.data('y'));

                $("#work-page #Page1Tip2").fadeOut();
            }
            ,

            limitEndDrag: function (x, y, ev) {
                this.data('ox', this.data('x'));
                this.data('oy', this.data('y'));
            }

        }

        return Snaplimite;

    })
