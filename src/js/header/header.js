import '../../css/public.less';


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