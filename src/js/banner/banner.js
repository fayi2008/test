/**
 * Created by admin on 2016/8/20.
 */
import '../../css/public.less';
import 'swiper/dist/css/swiper.css';

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
        var _this=this
        $.getJSON('../../datas/banner.json').done(function (rs) {

            new vue({
                el: '#swiper_box',
                data: rs,
                ready: function () {
                    _plus._back()
                    _this.callback()

                }
            })

        })
    }


}
export default banner




