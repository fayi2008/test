/**
 * Created by admin on 2016/8/20.
 */
import './css/index.less'
var _plus = require('./public.js')
var vue = require('vue')

$.getJSON('./datas/index.json').done(function (rs) {

    new vue({
        el: '#index',
        data: rs
    })


})



