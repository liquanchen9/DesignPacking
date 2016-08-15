define(['soundjs', 'bone'], function (createjs) {
    var model = Bone.extend({}, Bone.Events, {
        url: '',
        shareContent: '',
        shareUrl: '',
        shareImg: '',
        shareVideo: '',

        urlParam: null,
        currentPageName: "",
        currentSvg: 1,

        init: function () {
            this.parseUrl();
        },
        playAudio: function (_url) {
            var soundID = "Thunder";
            createjs.Sound.registerSound("impublic/pc/music/" + _url + ".mp3", soundID);
            createjs.Sound.play(soundID);
        },

        parseUrl: function () {
            this.urlParam = {};
            var _n1 = window.location.href.indexOf("?");
            if (_n1 != -1) {
                var _hash = window.location.href.substr(_n1 + 1);
                var _n2 = _hash.indexOf("#");
                if (_n2 != -1)
                    _hash = _hash.substr(0, _n2);
                var _a = _hash.split("&");
                var _len = _a.length;
                for (var i = 0; i < _len; i++) {
                    var _a2 = _a[i].split("=");
                    this.urlParam[_a2[0]] = _a2[1];
                }
            }
        },
        track: function (_type, _action) {
//            $.post("/background/index.php?s=User/doStatistics",
//                {
//                    type: _type,
//                    action: _action
//                },
//                function (data) {
//                });


        }
    });
    return model;
});
