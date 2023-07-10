<script>
export default {
    data(){
        return {
            featuredPost: {
                postDate: "Feb 11",
                readTime:5,
                authorName: "Elen Jhosh",
                img:"/images/hero-models.jpg" ,
                postTitle: "What Designers, Photographers, and Other Insiders Missed About Paris Fashion Week",
                postExcerpt: "If Paris Fashion Week in digital form has remained saturated with propositions and vision of the clothes we will be seeing- and perhaps wearing-in a few months. it's only natural to be feeling a certain wistfulness for the experience as ti used to be not so long ago."
            },
            sideFeaturedPostOne:{
                postDate: "Feb 11",
                readTime: 5,
                authorName: "Elen Jhosh",
                img: "/images/hero-image-2.webp",
                postTitle: "What Happens When One Partner Is Vaccinated and the Other Isn't?",
                postExcerpt: "For the moment, many people are learning to balance happiness about partner's vaccine eligibility with personal disappointment."

            },
            sideFeaturedPostTwo:
                {
                    postDate: "Feb 11",
                    readTime: 5,
                    authorName: "Elen Jhosh",
                    img: "/images/hero-image-3.webp",
                    postTitle: "These Intimate Portraits Celebrate the Beauty and Versatility of Black Men's Hair",
                    postExcerpt: "Identity for Black men is something we have always struggled with, not because we don't understand who we are, but because of what society tries to make us out to be."
                }
        }

    }
}

</script>
<template>
    <main>
        <article class="post col-1 span-2">
            <img :src="featuredPost.img" alt="">
            <div class="post__details">
                <div class="post__details__left">
                    <p class="post__date">{{ featuredPost.postDate }}</p>
                    <p class="post__read__time">{{ featuredPost.readTime}} min read</p>
                </div>
                <div class="post__details__right">
                    <p class="author__name">By {{ featuredPost.authorName }}</p>
                </div>
            </div>
            <h1 class="feature__post__title">
                {{ featuredPost.postTitle }}
            </h1>
            <p class="post__excerpt">
                {{ featuredPost.postExcerpt }}
            </p>
        </article>
        <article class="col-2">
            <img :src="sideFeaturedPostOne.img" alt="">
            <div class="post__details">
                    <div class="post__details__left">
                        <p class="post__date">{{sideFeaturedPostOne.postDate }}</p>
                        <p class="post__read__time">{{ sideFeaturedPostOne.readTime }} min read</p>
                    </div>
                    <div class="post__details__right">
                        <p class="author__name">By Elen Jhosh</p>
                    </div>
            </div>
            <h1 class="side__featured__title">{{ sideFeaturedPostOne.postTitle }}</h1>
            <p class="side__post__excerpt">{{ sideFeaturedPostOne.postExcerpt }}</p>
        </article>
        <article class="col-3">
            <img :src="sideFeaturedPostTwo.img" alt="">
            <div class="post__details">
                    <div class="post__details__left">
                        <p class="post__date">{{ sideFeaturedPostTwo.postDate }}</p>
                        <p class="post__read__time">{{sideFeaturedPostTwo.readTime}} min read</p>
                    </div>
                    <div class="post__details__right">
                        <p class="author__name">By Elen Jhosh</p>
                    </div>
                </div>
                <h1 class="side__featured__title">{{ sideFeaturedPostTwo.postTitle }}</h1>
                <p class="side__post__excerpt">{{ sideFeaturedPostTwo.postExcerpt }}</p>
        </article>
    </main>

</template>
<style scoped>
main{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.span-2{
    grid-column: span 2;
    grid-row: span 2 ;
    padding: 0 2rem 0 0;
    border-right: 1px solid grey;
}
.span-2 img{
    object-fit: cover;
    /* height: 580px; */

}
.col-2{
    margin-bottom: 2rem;
}
.col-2,.col-3{
    padding: 0 0 0 2rem;
}
.col-2 img{
    aspect-ratio: 16/9;
    height: 200px;
    object-fit: cover;
    grid-row: -1;
    object-position: 0 -70px;
    
}
.col-3{
    grid-column: 3;
}
.col-3 img{
    aspect-ratio: 16/9;
    height: 200px;
    object-fit: cover;
    object-position: 0 -40px;

}
/* Post details */
.post__details{
    margin: 1rem 0;
    color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__details__left{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.post__details__right{
    position: relative;
}
.author__name{
    text-transform: uppercase;
}
.author__name::before{
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    background-color: grey;
    width: 40px;
    top: 50%;
    left: -55px;
}
/* Features Post Titles */
.feature__post__title{
    font-size: 2.5rem;
    color: var(--grey-clr);
}
.post__excerpt{
    color: hsl(0,0%,40%);
    font-size: 18px;
    display: --webkit-box;
    line-clamp: 3;
    --webkit-line-clamp:3;
    --webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
}
.side__featured__title{
    font-size: 1.350rem;
    
}
.side__post__excerpt{
    color: hsl(0,0%,40%);
    font-size: 14px;
    margin-top: .8rem;
    display: --webkit-box;
    line-clamp: 3;
    --webkit-line-clamp:3;
    --webkit-box-orient:vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
}
@media only screen and (max-width:1200px){
    .feature__post__title{
        font-size: 2.3rem;
    }
    .col-2 .post__read__time, .col-3 .post__read__time{
        display: none;
    }


}
@media only screen and (max-width:900px){
    .col-2 .post__details__left, .col-3 .post__details__left{
        display: none;
    }
    .col-2 .author__name, .col-3 .author__name{
        padding-left:45px ;
    }
    .col-2 .author__name::before, .col-3 .author__name::before{
        left: 0;
    }
}
@media only screen and (max-width:800px){
    main{
        grid-template-columns: repeat(2,1fr);
        gap: 0 2rem;
    }
    .span-2{
        grid-column: span 2;
        padding: 0;
        border-right: none;
        border-bottom: 1px solid grey;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }
    .feature__post__title{
        font-size: 2rem;
    }
    .post__excerpt,.side__post__excerpt{
        display: none;
    }
    .col-2{
        padding: 0;

    }
    .col-3{
        padding: 0;
        grid-column: 2;
    }
    .col-2 .post__details__left,
    .col-3 .post__details__left{
        display: none;
    }
    .col-2 .author__name,
    .col-3 .author__name{
        margin-left: 3rem;
    }
    .col-2 .author__name::before,
    .col-3 .author__name::before{
    content: "";
    /* display: block; */
    position: absolute;
    height: 2px;
    background-color: grey;
    width: 35px;
    /* top: 50%; */
    left: 0;
    }
}
@media only screen and (max-width:766px){
    .feature__post__title{
        font-size: 1.5rem;
    }
    .col-2 img,.col-3 img{
        aspect-ratio: 1;
        height: 200px;
        object-position: center;
    }
    .side__featured__title{
        font-size: 1.275rem;
    }
}
@media only screen and (max-width:600px){
    .post__details__left{

        gap: 1rem;
    }
    .col-2 .author__name,
    .col-3 .author__name{
        margin-left: 0;
        

    }
}
@media only screen and (max-width:380px){
    .col-2,.col-3{
        grid-column:span 2;
    }

}


</style>