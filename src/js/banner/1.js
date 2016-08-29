/**
 * Created by admin on 2016/8/23.
 */
import '../../css/banner/1.less';
import swiper from 'swiper';
import  banner  from './banner.js';

class A1{
    constructor(){
        this.init()
    }

    init(){

        banner.run(function(){

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
                grabCursor: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            })
        })
    }


}

new A1()
