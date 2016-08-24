/**
 * Created by admin on 2016/8/23.
 */
require('../../css/banner/1.css')

import * as banner  from './banner.js'


banner.banner(function () {
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
    })
})

