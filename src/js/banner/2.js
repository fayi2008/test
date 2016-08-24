/**
 * Created by admin on 2016/8/23.
 */
import '../../css/banner/2.less';

import  banner  from './banner.js';

class A2{
    constructor(){
        this.init()
    }

    init(){

        banner.run(function(){


            var swiper=require('Swiper')

            swiper('#swiper',{
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30,
                scrollbar: '.swiper-scrollbar',
                scrollbarHide: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                grabCursor: true
               // centeredSlides: true
            })
        })
    }


}

new A2()
