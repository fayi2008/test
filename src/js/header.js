/**
 * Created by admin on 2016/8/20.
 */
var _plus = require('../public.js')
var vue = require('vue')


$.getJSON('../../datas/header.json').done(function (rs) {

    new vue({
        el: '#header',
        data: rs,
        ready: function () {
            _plus._back()
        }
    })

})




