<script>
export default{
    data(){
        return{
            title:"Subscribe to get more",
            description: "Be virtually guided through interviews and video tutorials with women that have already done it (and done it well). The perks, discounts and events are the icing on the cake.",
            price:10.99
        }
    }
}

</script>
<template>
    <section class="newsletter">
        <h1 class="newsletter__title">{{ title }}</h1>
        <p class="newsletter__description">{{ description }}</p>
        <div class="newsletter__actions">
            <a role="button" href="#">Learn more</a>
            <a role="button" href="#">Buy now for ${{ price }} (Monthly)</a>
        </div>
    </section>

</template>
<style scoped>
    .newsletter{
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        padding:3rem 0 ;
        margin-bottom: 3rem;
        text-align: center;
    }
    .newsletter__title{
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 300;
        margin-bottom: 1rem;
    }
    .newsletter__description{
        width: min(720px,95%);
        margin-inline:auto;
        margin-bottom: 2rem;
    }
    .newsletter__actions{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .newsletter__actions a{
        display: block;
        background-color: black;
        color: white;
        padding: 10px 30px;
        text-decoration: none;
        cursor: pointer;
    }
    @media only screen and (max-width:766px){
        .newsletter__title{
            font-size: 2rem;
        }
    }
    @media only screen and (max-width:470px){
        .newsletter__title{
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 1px;
        }
        .newsletter__actions{
            flex-direction: column;
            gap: 1rem;
        }
        .newsletter__actions a{
            width: 100%;
        }
    }

</style>