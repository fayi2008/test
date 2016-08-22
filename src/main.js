/**
 * Created by admin on 2016/8/20.
 */

require('./css/main.css')
require('./css/index.css')
var _plus = require('./public.js')
var vue = require('vue')

$.getJSON('./datas/index.json').done(function (rs) {

    new vue({
        el: '#index',
        data: rs
    })


})



