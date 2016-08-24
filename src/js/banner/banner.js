/**
 * Created by admin on 2016/8/20.
 */

require('swiper/dist/css/swiper.css');
require('../../css/main.css');
require('../../css/index.css');


class banner {

    static run(callback) {
        console.log(typeof callback)
        if (typeof callback=="function") {
            return new banner(callback);

        } else {
           console.log('XXX');
        }
    }

    constructor(callback) {
        this.callback=callback
        this.init()
    }

    init() {

        var _plus = require('../../public.js');
        var vue = require('vue');


        $.getJSON('../../datas/banner.json').done(function (rs) {

            new vue({
                el: '#swiper',
                data: rs,
                ready: function () {
                    _plus._back()
                    this.callback
                    

                }
            })

        })
    }


}
export default banner




