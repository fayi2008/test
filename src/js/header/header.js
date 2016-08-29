import '../../css/public.less';
import $ from 'jquery'
import vue from 'vue'
import _plus from '../../public.js'

class header {
    constructor(){
        this.init()
    }

    init(){
        $.getJSON('../../datas/header.json').done(function (rs) {

            new vue({
                el: '#header',
                data: rs,
                ready: function () {
                    _plus._back()
                }
            })

        })
    }
}


new header()