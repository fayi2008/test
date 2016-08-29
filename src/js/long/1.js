/**
 * Created by admin on 2016/8/23.
 */
import '../../css/banner/1.less';
import 'fullpage';
import  banner  from './long.js';

class A1{
    constructor(){
        this.init()
    }

    init(){

        banner.run(function(){

           // $('#superContainer').fullpage({
           //     slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
           //     anchors: ['page1', 'page2', 'page3', 'page4']
           //
           //
           // })
        })
    }


}

new A1()
