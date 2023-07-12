<script>
export default {
    data() {
        return {
            latestPodcasts: [
                {
                    podcastTitle: "How are the boundaries between masculine and femine being erased in fashion?",
                    podcastExcerpt: "Today, you will not surprise anyone with pale pink shades of clothing in the men's department. Men in dresses appear on the red carpets, and big brands like Chanel are launching lines of men's makeup.",
                    podcastAuthor: "Elen Jhosh",
                    podcastImage: "/images/Meghan-and-Harry.jpeg",
                    podcastDate: "Feb 12"
                },
                {
                    podcastTitle: "What is the essence of Gandhi's philosophy?",
                    podcastExcerpt: "It so happes that a proper name becomes a household name. This happened with the name of Mahatma Gandhi. Neither before nor after him was there such a person who could so successfully combine philosophy and politics.",
                    podcastAuthor: "Elen Jhosh",
                    podcastImage: "/images/Meghan-and-Harry.jpeg",
                    podcastDate: "Feb 12"
                },
                {
                    podcastTitle: "What is the tragedy behind Vrubel's paintings?",
                    podcastExcerpt: "The work of mikhail  Vrubel(1856-1910) became the quintessence of the era in which he lived - a turning point, full of contradictions and collisions.",
                    podcastAuthor: "Elen Jhosh",
                    podcastImage: "/images/Meghan-and-Harry.jpeg",
                    podcastDate: "Feb 12"
                }
            ]
        }
    }
}
</script>
<template>
    <div class="latest__podcasts">
        <div class="latest__header">
            <h2 class="latest__header__title">The Latest podcasts</h2>
            <a href="#">View all</a>
        </div>
        <article v-for="latestPodcast in latestPodcasts" class="latest__podcast">
            <figure>
                <img class="podcast__img" :src="latestPodcast.podcastImage" alt="">
            </figure>
            <div class="latest__podcast__content">
                <div class="podcast__author">
                    <p class="podcast__author__name">By {{ latestPodcast.podcastAuthor }}</p>
                </div>
                <h3 class="podcast__title">{{ latestPodcast.podcastTitle }}</h3>
                <p class="podcast__excerpt">{{ latestPodcast.podcastExcerpt }}</p>
            </div>
        </article>
    </div>
</template>
<style scoped>
.latest__podcasts {
    margin-bottom: 2rem;
    padding-bottom: 2rem;

}

.latest__header {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 1rem 0;
    margin: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.latest__header__title {
    text-transform: uppercase;
    font-size: 1.8rem;
}

.latest__header a {
    color: grey;
    font-size: 1.1rem;
}

.latest__podcast {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.podcast__author {
    margin-bottom: 1.5rem;
    position: relative;
}

.podcast__author::before {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 30px;
    background-color: grey;
    top: 50%;
}

.podcast__author__name {
    padding-left: 40px;
    color: grey;
    text-transform: uppercase;
}

.podcast__title {
    font-size: 1.8rem;
}

.podcast__img {
    width: 350px;
    aspect-ratio: 4/3;
    object-fit: cover;
}

.podcast__excerpt {
    color: grey;
    margin-top: 1rem;
}

@media only screen and (max-width:1024px) {
    .podcast__author {
        margin-bottom: 1rem;
    }

    .podcast__title {
        font-size: 1.5rem;
    }
}

@media only screen and (max-width:800px) {
    .podcast__img {
        width: 320px;
    }

    .podcast__title {
        font-size: 1.3rem;
    }

}

@media only screen and (max-width:766px) {
    .latest__podcast {
        grid-template-columns: 1fr;
    }
    .latest__header{
        justify-content: center;
    }

    .podcast__img {
        width: 100%;
        height: 280px;
    }
    .latest__header a{
        display:none;
    }

    .latest__header {
        margin: 3rem 0;
    }
}

@media only screen and (max-width:380px) {
    .latest__header__title {
        font-size: 1.3rem;
    }
}</style>