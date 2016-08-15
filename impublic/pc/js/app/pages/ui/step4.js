/**
 * Created by zhangcai on 2016/3/9.
 */
define(['snap', 'model'], function (Snap, SiteModel) {
        var view = {
            tagGroup: null,
            txt: null,
            init: function () {
                var _self = this;
                //console.log("step4");
                this.tagGroup = window.svg.g().attr({transform: "translate(-650,-330)"});

                $("#page4 #inputTxt").val("");

                window.svg.select("#svgRoot").add(this.tagGroup);
                _self.setSvgTag("tag1");
                $("#page4 .tagBtn").off().on("click", this.logoClick.bind(_self));
                $("#page4 #inputTxt").off().on("input", this.setTxt.bind(_self));

                TweenMax.set($("#page4").children(), {scaleX: 0.01, scaleY: 0.01});
                for (var i = 0; i < $("#page4").children().length; i++) {
                    TweenMax.to($("#page4").children()[i], 0.1, {scaleX: 1, scaleY: 1, delay: (i * 0.05)});
                }
                TweenMax.set($(".nextBtn"), {scaleX: 0.01, scaleY: 0.01});
                TweenMax.to($(".nextBtn"), 0.2, {scaleX: 1, scaleY: 1, delay: 0.5});


                this.txt = window.svg.paper.text(780, 190, " ");
                _self.tagGroup.add(_self.txt);
                window.userTypeTxt = "";

                $("#page4 .tagBtn").removeClass("sel");
                $("#page4 .tagBtn").eq(0).addClass("sel");

            },

            checkInputLength: function (strTemp) {
                var i, sum;
                sum = 0;
                for (i = 0; i < strTemp.length; i++) {
                    if ((strTemp.charCodeAt(i) >= 0) && (strTemp.charCodeAt(i) <= 255)) {
                        sum = sum + 1;
                    } else {
                        sum = sum + 2;
                    }
                }
                return sum;
            },

            layoutTxt: function (txtArr) {
                var txt = txtArr;
                var p = 0;
                var q = 0;
                var newTxt = [];
                a();
                function a() {
                    var mytxt = "";
                    b();
                    function b() {
                        if (mytxt.length < 10) {
                            if (mytxt.length == 0) {
                                mytxt = txt[p];
                            } else {
                                mytxt = mytxt + " " + txt[p];
                            }
                            newTxt[q] = mytxt;
                            if (p < txt.length - 1) {
                                p++;
                                b();
                            }
                        } else {
                            q++;
                            mytxt = "";
                            newTxt[q] = mytxt;
                            // newTxt.push(mytxt);
                            if (p < txt.length) {
                                a();
                            }
                        }

                    }
                }

                return newTxt


            },
            setTxt: function (e) {
                $("#work-page #Page4Tip1").hide();
                var _self = this;
                this.txt.remove();
                var str = $(e.target).val();
                window.userTypeTxt = str;
                if (str.length == 24) {
                    $("#work-page #Page4Tip1").attr("src", "impublic/pc/images/work/page4/tip.png")
                    $("#work-page #Page4Tip1").show();
                }


                var maxLetter = 8;
                var fontsize = 6;
                var font1X = 0;
                var font2X = 0;
                var font3X = 0;
                var fontY = -177;
                if (this.len(str) > maxLetter) {
                    if (this.len(str) > (maxLetter * 2)) {
                        var txt1 = str.substr(0, maxLetter);
                        var txt2 = str.substr(maxLetter, maxLetter);
                        var txt3 = str.substr(maxLetter * 2, maxLetter);
                        txtStr = [txt1, txt2, txt3];
                    } else {
                        var txt1 = str.substr(0, maxLetter);
                        var txt2 = str.substr(maxLetter, maxLetter);
                        txtStr = [txt1, txt2];
                    }
                } else {
                    txtStr = [str];

                }

                this.txt = window.svg.paper.text(font1X, fontY, txtStr);
                var txtOriginP = 760;

                switch ($(this.txt.node).find("tspan").length) {
                    case 0:
                        break;
                    case 1:
                        // fontsize = 14;
                        // fontY = -167;
                        // txtOriginP = 750;
                        fontsize = 8;
                        fontY = -167;
                        txtOriginP = 768;
                        $(this.txt.node).find("tspan").eq(0).attr("id", "text1");
                        //  var w = $("#text1").get(0).getBoundingClientRect().width;
                        var w1 = $("#text1").get(0).getComputedTextLength();
                        font1X = txtOriginP - w1 / 2;
                        $("#text1").attr("x", font1X);
                        break;
                    case 2:
                        //fontsize = 10;
                        //fontY = -175;
                        //txtOriginP = 760;
                        fontsize = 8;
                        fontY = -175;
                        txtOriginP = 768;

                        $(this.txt.node).find("tspan").eq(0).attr("id", "text1");
                        $(this.txt.node).find("tspan").eq(1).attr("id", "text2");
                        var w1 = $("#text1").get(0).getComputedTextLength();
                        var w2 = $("#text2").get(0).getComputedTextLength();
                        font1X = txtOriginP - w1 / 2;
                        $("#text1").attr("x", font1X);
                        font2X = txtOriginP - w2 / 2;
                        $("#text2").attr("x", font2X).attr("dy", 13);
                        break;
                    case 3:
                        fontsize = 8;
                        fontY = -182;
                        txtOriginP = 768;
                        $(this.txt.node).find("tspan").eq(0).attr("id", "text1");
                        $(this.txt.node).find("tspan").eq(1).attr("id", "text2");
                        $(this.txt.node).find("tspan").eq(2).attr("id", "text3");
                        var w1 = $("#text1").get(0).getComputedTextLength();
                        var w2 = $("#text2").get(0).getComputedTextLength();
                        var w3 = $("#text3").get(0).getComputedTextLength();
                        font1X = txtOriginP - w1 / 2;
                        $("#text1").attr("x", font1X);
                        font2X = txtOriginP - w2 / 2;
                        $("#text2").attr("x", font2X).attr("dy", 13);
                        font3X = txtOriginP - w3 / 2;
                        $("#text3").attr("x", font3X).attr("dy", 13);
                        break;

                }


                this.txt.attr({
                    transform: "rotate(30 20,40)",
                    fontSize: fontsize + "pt",
                    y: fontY
                })
                //    $(this.txt.node).find("tspan").attr("x", fontX);
                //if ($(this.txt.node).find("tspan").length > 1) {
                //    $(this.txt.node).find("tspan").eq(1).attr("id", "text2").attr("dy", 13).attr("x", font2X);
                //}
                //if ($(this.txt.node).find("tspan").length > 2) {
                //    $(this.txt.node).find("tspan").eq(2).attr("id", "text3").attr("dy", 13).attr("x", font3X);
                //} else {
                //    $(this.txt.node).find("tspan").eq(0).attr("id", "text1").attr("x", font1X);
                //}

                _self.tagGroup.add(this.txt);

            }
            ,

            logoClick: function (e) {

                var _self = this;
                var id = $(e.target).attr("id");

                SiteModel.step4currentTagId = id;
                //     console.log(id);
                $(".tagBtn").removeClass("sel");
                $(e.target).addClass("sel");
                _self.setSvgTag(id);
                SiteModel.playAudio("ButtonClick");

                SiteModel.track("click_pc", "Step4-Choose-" + id);
            }
            ,
            setSvgTag: function (id) {
                //console.log(id);
                var _self = this;
                if (id == "tag4") {
                    if (_self.tagGroup) {
                        _self.tagGroup.remove();
                    }
                } else {
                    Snap.load("impublic/pc/images/work/tag/" + id + ".svg", function (f) {
                        var logo = f.select("#tag");
                        if (window.svgRoot.select("#tag").select("#tagContent")) {
                            window.svgRoot.select("#tag").select("#tagContent").remove();
                        }

                        _self.tagGroup = window.svgRoot.select("#tag").g().attr({
                            transform: "translate(-650,-330)",
                            id: "tagContent"
                        });
                        //    _self.tagGroup.after(window.boxSvg);
                        _self.tagGroup.add(logo);
                        _self.tagGroup.add(_self.txt);
                    });
                }
            }
            ,
            len: function (s) {//获取字符串的字节长度
                s = String(s);
                //var txtNum = 0;
                //for (var i = 0; i < s.length; i++) {
                //    if ((s.charCodeAt(i) >= 0) && (s.charCodeAt(i) <= 255)) {
                //        txtNum++;
                //    } else {
                //        txtNum += 2;
                //    }
                //}
                //return txtNum / 2;
                return s.length;

            }


        }
        return view
    }
)
