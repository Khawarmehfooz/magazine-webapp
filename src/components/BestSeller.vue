<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

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
    data() {
        return {
            bestsellerBooks: [
                {
                    bookAuthor: "Halsey Street",
                    bookTitle: "What's Mine and Yours",
                    img: "/images/Meghan-and-Harry.jpeg",
                    price: 14.99

                }, {
                    bookAuthor: "Viet Thanh Nguyen",
                    bookTitle: "The Committed: A Novel",
                    img: "/images/Meghan-and-Harry.jpeg",
                    price: 10.39

                }, {
                    bookAuthor: "Julia Cooke",
                    bookTitle: "Come Fly the World: Stories",
                    img: "/images/Meghan-and-Harry.jpeg",
                    price: 23.49

                }, {
                    bookAuthor: "Kazuo Ishiguro",
                    bookTitle: "Klara and the Sun: A novel",
                    img: "/images/Meghan-and-Harry.jpeg",
                    price: 12.99

                }, {
                    bookAuthor: "Kazuo Ishiguro",
                    bookTitle: "Klara and the Sun: A novel",
                    img: "/images/Meghan-and-Harry.jpeg",
                    price: 12.99

                }

            ]
        }

    }
};
</script>
<template>
    <article class="best-seller">
        <div class="best-seller__header">
            <h2 class="best-seller__header__title">Bestsellers of the month</h2>
            <a href="#">View all</a>
        </div>
        <div class="sliders">
            <div class="slider__left"><i class="fa-solid fa-arrow-left-long fa-xl"></i></div>
            <div class="slider__right"><i class="fa-solid fa-arrow-right-long fa-xl"></i></div>
        </div>

        <swiper :slides-per-view="4" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :space-between="32" :breakpoints="{
            '800': {
                slidesPerView: 4
            },
    '680': {
        slidesPerView: 3
    },
    '380': {
        slidesPerView: 2
    },
    '0': {
        slidesPerView: 1
    }
}" :modules="modules" class="mySwiper best-seller__books__grid">
            <swiper-slide class="best-seller__book" v-for="bestsellerBook in bestsellerBooks">
                <div class="best-seller__img">
                    <img :src="bestsellerBook.img" alt="">
                </div>
                <div class="best-seller__book__info">
                    <div class="best-seller__book__info__right">
                        <p class="best-seller__book__author">
                            {{ bestsellerBook.bookAuthor }}
                        </p>
                    </div>
                </div>
                <h2 class="best-seller__book__title">{{ bestsellerBook.bookTitle }}</h2>
                <a class="book__price" role="button" href="#">Buy for <span>${{ bestsellerBook.price }}</span></a>
            </swiper-slide>
        </swiper>
    </article>
</template>
<style scoped>
.best-seller__header {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 1rem 0;
    margin: 5rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.best-seller__header__title {
    text-transform: uppercase;
    font-size: 1.8rem;
}

.best-seller__header a {
    color: grey;
    font-size: 1.1rem;
}

.sliders {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.slider__left i,
.slider__right i {
    cursor: pointer;
}

.best-seller__books__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
.best-seller__img img{
    height: 350px;
    object-fit: cover;
    aspect-ratio: 4/3;
}

.best-seller__book__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}


.best-seller__book__info__right {
    position: relative;
}

.best-seller__book__author {
    text-transform: uppercase;
    color: grey;
}


.best-seller__book__title {
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

.book__price{
    border: 1px solid black;
    padding: 10px 0;
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: black;
}
.book__price span{
    font-weight: bold;
}

@media only screen and (max-width:900px) {
    .best-seller__book__info {
        font-size: 12px;
    }

    .best-seller__book__info__left {
        display: none;
    }

    .best-seller__book__author {
        margin-left: 40px;
    }

    .best-seller__book__title {
        font-size: 1.4rem;
    }
}

@media only screen and (max-width:766px) {
    .best-seller__header {
        margin: 2rem 0;
    }

    .best-seller__book__title {
        font-size: 1.2rem;
    }

    .best-seller__books__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width:380px) {
    .best-seller__header__title {
        font-size: 1.3rem;
    }
}</style>