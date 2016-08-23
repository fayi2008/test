/**
 * Created by admin on 2016/8/20.
 */

require('swiper/dist/css/swiper.css')
require('../css/main.css')
require('../css/index.css')
var _plus = require('../public.js')
var vue = require('vue')

var swiper=require('Swiper')

$.getJSON('../../datas/banner.json').done(function (rs) {

    new vue({
        el: '#swiper',
        data: rs,
        ready: function () {
            _plus._back()

            swiper('#swiper')
        }
    })

})




