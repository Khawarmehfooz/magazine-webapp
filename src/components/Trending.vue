<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// import required modules
import { Navigation,Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
<template>
    <article class="trending">
        <div class="trending__header">
            <h2 class="trending__header__title">Today's Trending</h2>
            <a href="#">View all</a>
        </div>
        <div class="sliders">
            <div class="slider__left"><i class="fa-solid fa-arrow-left-long fa-xl"></i></div>
            <div class="slider__right"><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
        </div>

        <swiper 
        :slides-per-view="3" 
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" 
        :space-between="32"
        :breakpoints="{
            '767':{
                slidesPerView: 3
            },
            '360':{
                slidesPerView:2
            },
            '0':{
                slidesPerView: 1
            }
        }" 
        :modules="modules" 
        class="mySwiper trending__articles__grid">
            <swiper-slide class="trending__article">
                <div class="trending__article__img">
                    <img src="../assets/images/Meghan and Harry.jpeg" alt="">
                </div>
                <div class="trending__article__info">
                    <div class="trending__article__info__left">
                        <p class="trending__article__date">Feb 11</p>
                        <p class="trending__article__readtime">12min</p>
                    </div>
                    <div class="trending__article__info__right">
                        <p class="trending__article__author">
                            By Elen Jhosh
                        </p>
                    </div>
                </div>
                <h2 class="trending__article__title">A Brit in America Makes Sense of the Meghan Markle Oprah Interview</h2>
            </swiper-slide>
            <swiper-slide class="trending__article">
                    <div class="trending__article__img">
                        <img src="../assets/images/Meghan and Harry.jpeg" alt="">
                    </div>
                    <div class="trending__article__info">
                        <div class="trending__article__info__left">
                            <p class="trending__article__date">Feb 11</p>
                            <p class="trending__article__readtime">12min</p>
                        </div>
                        <div class="trending__article__info__right">
                            <p class="trending__article__author">
                                By Elen Jhosh
                            </p>
                        </div>
                    </div>
                <h2 class="trending__article__title">In Deborah Roberts's Art, an Interrogation of What Society Imposes on Black Children</h2>

            </swiper-slide>
            <swiper-slide class="trending__article">
                    <div class="trending__article__img">
                        <img src="../assets/images/Meghan and Harry.jpeg" alt="">
                    </div>
                    <div class="trending__article__info">
                        <div class="trending__article__info__left">
                            <p class="trending__article__date">Feb 11</p>
                            <p class="trending__article__readtime">12min</p>
                        </div>
                        <div class="trending__article__info__right">
                            <p class="trending__article__author">
                                By Elen Jhosh
                            </p>
                        </div>
                    </div>
                    <h2 class="trending__article__title">Spring Sirts Have Sprung - 6 Ways to Wear Them All Season Long</h2>
            </swiper-slide>
            <swiper-slide class="trending__article">
                        <div class="trending__article__img">
                            <img src="../assets/images/Meghan and Harry.jpeg" alt="">
                        </div>
                        <div class="trending__article__info">
                            <div class="trending__article__info__left">
                                <p class="trending__article__date">Feb 11</p>
                                <p class="trending__article__readtime">12min</p>
                            </div>
                            <div class="trending__article__info__right">
                                <p class="trending__article__author">
                                    By Elen Jhosh
                                </p>
                            </div>
                        </div>
                        <h2 class="trending__article__title">Spring Sirts Have Sprung - 6 Ways to Wear Them All Season Long</h2>
                </swiper-slide>
        </swiper>
    </article>

</template>
<style scoped>
.trending__header{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 1rem 0;
    margin: 5rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.trending__header__title{
    text-transform: uppercase;
    font-size: 1.8rem;
}
.trending__header a{
    color: grey;
    font-size: 1.1rem;
}
.sliders{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}
.slider__left i, .slider__right i{
    cursor: pointer;
}
.trending__articles__grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
}
.trending__article__img img{
    aspect-ratio: 1;
    object-fit: cover;
}
.trending__article__info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}
.trending__article__info__left{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.trending__article__info__right{
    position: relative;
}
.trending__article__author{
    text-transform: uppercase;
}
.trending__article__author::before{
    content: "";
    display: block;
    position: absolute;
    height: 1.5px;
    width: 25px;
    background-color: black;
    top: 50%;
    left: -35px;
}
.trending__article__title{
    font-size: 1.8rem;
}
    swiper-container {
      width: 100%;
      height: 100%;
    }

    swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
@media only screen and (max-width:900px){
    .trending__article__info{
        font-size: 12px;
    }
    .trending__article__info__left{
        display: none;
    }
    .trending__article__author{
        margin-left: 40px;
    }
    .trending__article__author::before{
    content: "";
    display: block;
    position: absolute;
    height: 1.5px;
    width: 25px;
    background-color: black;
    top: 50%;
    left: 0px;
}
.trending__article__title{
    font-size: 1.4rem;
}
}
@media only screen and (max-width:766px){
    .trending__article__title{
        font-size: 1.2rem;
    }
    .trending__articles__grid{
        grid-template-columns: repeat(2,1fr);
    }
}


</style>