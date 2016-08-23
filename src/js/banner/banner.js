/**
 * Created by admin on 2016/8/20.
 */

require('swiper/dist/css/swiper.css');
require('../../css/main.css');
require('../../css/index.css');


module.exports = function banner(callback) {
    var _plus = require('../../public.js');
    var vue = require('vue');
    var _this = this

    $.getJSON('../../datas/banner.json').done(function (rs) {

        new vue({
            el: '#swiper',
            data: rs,
            ready: function () {
                _plus._back()
                callback()

            }
        })

    })

    return _this
}










