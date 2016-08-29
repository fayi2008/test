/**
 * Created by admin on 2016/8/23.
 */
import '../../css/long/1.less';
import 'fullpage.js/jquery.fullpage.css';
import  banner  from './long.js';
import 'fullpage.js'

class A1{
    constructor(){
        this.init()
    }

    init(){

        banner.run(function(){
           $('#superContainer').fullpage({
               navigation:true
           })

        })
    }


}

new A1()
