<script>
</script>
<template>
    <div class="latest__articles">
        <div class="latest__header">
            <h2 class="latest__header__title">The Latest Articles</h2>
            <a href="#">View all</a>
        </div>
        <article class="latest__article">
            <figure>
                <img class="article__img" src="../assets/images/Meghan-and-Harry.jpeg" alt="">
            </figure>
            <div class="latest__article__content">
                <div class="article__author">
                    <p class="article__author__name">By Elen Jhosh</p>
                </div>
                <h3 class="article__title">The Definitive Helmut Newton Photobook is Reissued-in Miniature-for His 100th Birthday</h3>
                <p class="article__excerpt">The Photographer, whose provocative work rose to prominence in the 1970s against a backdrop of the second-wave feminist movement, was one of the most impactful visual creators of his time.</p>
            </div>
        </article>
    </div>
</template>
<style scoped>
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
        width: 280px;
    }
    .article__title{
        font-size: 1.3rem;
    }

}
@media only screen and (max-width:766px){
    .latest__article{
        grid-template-columns: 1fr;
    }
    .article__img{
        width: 100%;
        height: 280px;
    }
    .latest__header{
        margin:3rem 0;
    }
}

</style>