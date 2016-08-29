/**
 * Created by admin on 2016/8/20.
 */
import './css/index.less';

import vue from 'vue'


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



