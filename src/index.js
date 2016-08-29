/**
 * Created by admin on 2016/8/20.
 */
import './css/public.less';

import $ from 'jquery'
import vue from 'vue'
import './public.js'
class index{
    constructor(){
        this.init()
    }

    init(){
        $.getJSON('./datas/index.json').done(function (rs) {

            new vue({
                el: '#index',
                data: rs
            })


        })
    }

}


new index()



