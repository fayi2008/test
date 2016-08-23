var _plus = require('../../public.js')
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

require('../../css/main.css')
require('../../css/index.css')