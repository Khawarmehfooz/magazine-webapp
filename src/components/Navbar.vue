<script>
export default {
    data(){
        return{
            navigations:{
                "Home": "/",
                "Blog": "/blog",
                "Podcasts": "/podcasts",
                "Books": "/books",
                "About":"/about",
            },
            isActive:false,
            isHidden:false
        }
    },
    methods: {
        // Toggle Navigation Menu on Mobile
        toggleActive(){
            this.isActive = !this.isActive
            this.isHidden=!this.isHidden
        }
    }

}
</script>
<template>
    <nav role="navigation">
        <div class="brand">
            <h1>Magazine</h1>
        </div>
        <ul class="nav__items" :class="{active: isActive}">
            <router-link v-for="(link,navigation,index) in navigations" :to="link" class="nav__item">{{ navigation }}</router-link>
        </ul>
        <div class="user__account">
            <i class="fas fa-bag-shopping fa-xl"></i>
            <i class="fa-solid fa-user fa-xl"></i> 
        </div>
        <div class="nav__toggle">
            <button @click="toggleActive" class="toggle__buttons" :class="{hide: isHidden}" aria-label="open navigation" id="open__nav">
                <i class="fas fa-bars fa-xl"></i>
            </button>
            <button @click="toggleActive" class="toggle__buttons" :class="{hide: !isHidden}" aria-label="open navigation" id="close__nav">
                <i class="fas fa-x fa-xl"></i>
            </button>
        </div>
        
    </nav>
</template>

<style scoped>
:root {
  --primary-clr: black;
  --secondary-clr: white;
  --grey-clr: #b3b3b3;
}
body{
    position: relative;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    position: relative;
}
.nav__items{
    display: flex;
    align-items: center;
    gap: 4rem;
}
li{
    list-style-type: none;
}

a {
  color: grey;
  text-decoration: none;
}
a:hover {
  color: var(--primary-clr);
  text-decoration: underline;
}
a:active,a:focus {
  color: var(--primary-clr);
  text-decoration: underline;
}

.user__account{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.toggle__buttons{
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: none;
}
.nav__toggle{
    display: none;
}
@media only screen and (max-width:800px){
   
    .nav__items{
        gap: 2rem;
    }
    
}
@media only screen and (max-width:600px){
    .hide{
        display: none !important;
    }
    .user__account{
        display: none;
    }
    .nav__items{
        position: absolute;
        flex-direction: column;
        gap: 1rem;
        top: -500px;
        width: 100%;
        background-color: white;
        padding: 1rem 0;
    }
    .active{
        top:50px;
    }
     .nav__toggle{
        display: block;
    }
    #open__nav{
        display: block;
        margin-left: 1rem;
    }
    #close__nav{
        display: block;
    }
}
</style>