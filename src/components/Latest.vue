<script>
export default{
    data(){
        return{
            latestArticles: [
                {
                    articleTitle: "The Definitive Helmut Newton Photobook is Reissued-in Miniature-for His 100th Birthday",
                    articleExcerpt: "The Photographer, whose provocative work rose to prominence in the 1970s against a backdrop of the second-wave feminist movement, was one of the most impactful visual creators of his time.",
                    articleAuthor: "Elen Jhosh",
                    articleImage:"/images/Meghan-and-Harry.jpeg",
                    articleDate: "Feb 12"
                },
                {
                    articleTitle: "Made You Look: A True Story About Fake Art - When Working to Believe Is Just Not Enought",
                    articleExcerpt: "The story of the most significant art fraud in history where ruined reputations and wounded egos mattered more than money.",
                    articleAuthor: "Elen Jhosh",
                    articleImage: "/images/Meghan-and-Harry.jpeg",
                    articleDate: "Feb 12"
                },
                {
                    articleTitle: "5 Things White People Keep Getting Totally Wrong About Racism",
                    articleExcerpt: "They want to escape the harsh, unforgiving glare of culpability by pretending they've done nothing wrong, that if there are ongoing issues with racism in this country, it has nothing to do with how they raise their children. It's because black people refuse to move on.",
                    articleAuthor: "Elen Jhosh",
                    articleImage: "/images/Meghan-and-Harry.jpeg",
                    articleDate: "Feb 12"
                },
                {
                    articleTitle: "In London, the Most Famous \"Great Women Artist\" Finally Gets Her Due",
                    articleExcerpt: "In July 2018, London's National Gallery Acquired a self-portrait by the Baroque artist Artemisia Gentileschi, featuring the painter in the guise of Sait Catherine of Alexandria. Almost immediately, it drew an unpresedented level of media attention.",
                    articleAuthor: "Elen Jhosh",
                    articleImage: "/images/Meghan-and-Harry.jpeg",
                    articleDate: "Feb 12"
                }
            ]
        }
    }
}
</script>
<template>
    <div class="latest__articles">
        <div class="latest__header">
            <h2 class="latest__header__title">The Latest Articles</h2>
            <a href="#">View all</a>
        </div>
        <article v-for="latestArticle in latestArticles" class="latest__article">
            <figure>
                <img class="article__img" :src="latestArticle.articleImage" alt="">
            </figure>
            <div class="latest__article__content">
                <div class="article__author">
                    <p class="article__author__name">By {{ latestArticle.articleAuthor }}</p>
                </div>
                <h3 class="article__title">{{ latestArticle.articleTitle }}</h3>
                <p class="article__excerpt">{{ latestArticle.articleExcerpt }}</p>
            </div>
        </article>
    </div>
</template>
<style scoped>
.latest__articles{
    margin-bottom: 2rem;
    padding-bottom: 2rem;

}
.latest__header{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 1rem 0;
    margin: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.latest__header__title{
    text-transform: uppercase;
    font-size: 1.8rem;
}
.latest__header a{
    color: grey;
    font-size: 1.1rem;
}

.latest__article{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
}
.article__author{
    margin-bottom: 1.5rem;
    position: relative;
}
.article__author::before{
    content:"";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    background-color: grey;
    top: 50%;
}
.article__author__name{
    padding-left: 40px;
    color: grey;
    text-transform: uppercase;
}
.article__title{
    font-size: 1.8rem;
}
.article__img{
    width: 350px;
    aspect-ratio: 4/3;
    object-fit: cover;
}
.article__excerpt{
    color: grey;
    margin-top: 1rem;
}
@media only screen and (max-width:1024px){
    .article__author{
        margin-bottom: 1rem;
    }
    .article__title{
        font-size: 1.5rem;
    }
}
@media only screen and (max-width:800px){
    .article__img{
        width: 320px;
    }
    .article__title{
        font-size: 1.3rem;
    }

}
@media only screen and (max-width:766px){
    .latest__header a{
        display: none;
    }
    .latest__article{
        grid-template-columns: 1fr;
    }
    .article__img{
        width: 100%;
        height: 280px;
    }
    .latest__header{
        margin:3rem 0;
        justify-content: center;
    }
}
@media only screen and (max-width:380px){
    .latest__header__title{
        font-size: 1.3rem;
    }
}

</style>