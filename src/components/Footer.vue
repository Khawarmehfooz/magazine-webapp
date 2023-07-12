<script>
export default{
    data(){
        return{
            contents: [
                "Blog",
                "Podcasts",
                "Books",
                "Subscriptions"
            ],
            company:[
                "About",
                "Contact us",
                "Partnership",
                "Careers"
            ],
            social:{
                instagram: "#",
                facebook: '#',
                linkedIn: '#',
                youtube:'#'
            }

        }
    }
}

</script>
<template>
    <footer>
        <div class="flex__container">
            <form class=" col span-2" action="">
                <h3 class="form__heading">Send Me News</h3>
                <div class="form__group">
                    <input type="email" name="email" id="email" placeholder="Enter your email">
                    <input type="submit" value="Get Insights">
                </div>
            </form>
            <div class="col">
                <h4 class="col__title">Content</h4>
                <ul class="footer__list">
                    <li v-for="content in contents" class="footer__list"><a class="footer__link" href="#">{{ content }}</a></li>
                </ul>
            </div>
            <div class="col">
                <h4 class="col__title">Company</h4>
                <ul class="footer__list">
                    <li v-for="companyInfo in company" class="footer__list"><a class="footer__link" href="#">{{ companyInfo }}</a></li>
                </ul>
            </div>
            <div class="col">
                <h4 class="col__title">Social</h4>
                <ul class="footer__list">
                    <li v-for="(socialLink,linkName,index) in social" class="footer__list"><a class="footer__link" :href="socialLink">{{ linkName }}</a></li>
                </ul>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom--left">
                <h2>Magazine</h2>
            </div>
            <ul class="footer__bottom--right">
                <li>&copy; 2021 Dasha Yurova</li>
                <li>All rights reserved</li>
                <li>Privacy</li>
                <li>Contact</li>
            </ul>

        </div>
    </footer>

</template>
<style scoped>
.flex__container{
    display: flex;
    justify-content: space-between;
}
.form__heading{
    font-size: 1.8rem;
}
.form__group{
    border-bottom: 2px solid black;
    display: flex;
    margin-top: 1rem;
}
input[type="email"],
input[type="submit"]{
    display: block;
}
input[type="email"]{
    flex: 70%;
    outline:none;
    border: none;
    padding: 10px 0;
    font-size: 1rem;
}
input[type="submit"]{
    background-color: transparent;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
}

.flex__container .span-2{
    flex:40%;
}
.col{
    flex: 20%;
}
.col__title{
    text-align: right;
    margin-bottom: 1rem;
}
.footer__list li{
    list-style: none;
    text-align: right;
    margin-bottom: .5rem;
} 
.footer__link{
    text-decoration: none;
    text-transform: capitalize;
    color: black;
    text-align: right;
}
.footer__bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 0;
}
.footer__bottom--right{
    display: flex;
    gap: 2rem;
    list-style: none;
}
@media  only screen and (max-width:766px){
    .flex__container{
        flex-direction: column;
        gap: 2rem;
    }
    .col__title
    ,.footer__list li{
        text-align: center;
    }
    .footer__bottom{
        flex-direction: column;
    }
    .footer__bottom--right{
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}

</style>