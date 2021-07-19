<template>
    <div class="container">
        <div class="logo">
            <div class="btn-container"><button class="log-btn">
                <router-link to="/login" class="title">ورود</router-link><p class="login">/</p>
                <router-link to="/register" class="title">ثبت نام</router-link>
                </button></div>


                <div class="logo-titles">
                 <div class="zar">صرافی زرکوین</div>
                <div class="bazar">بازار انلاین خرید و فروش رمزارزها</div>
            </div>



            <div class="logo-container">
                <img src="../../assets/logo.png" alt="logo">
            </div>
            
        </div>
        <div class="title-box">
            <div class="box">
                <router-link to="/" class="title">بازار ها</router-link>
            </div>
            <div class="box">
                <router-link to="/" class="title">کارمزد ها</router-link>

            </div>
            <div class="box">
                <router-link to="/" class="title">بلاگ</router-link>

            </div>
            <div class="box">
                <router-link to="/" class="title">راهنما</router-link>

            </div>


        </div>

        <div class="box"></div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lateef&display=swap');
.title{
font-family: 'Lateef', cursive;
color: aliceblue;
font-size: 20px;
text-decoration: none;
}
.logo{
    display: flex;
    flex-direction:row ;
    justify-content: center;
    align-items: center;
}
.zar{
    font-family: 'Lateef', cursive;
    color: aliceblue;
    font-size: 30px;
}
.bazar{
    font-family: 'Lateef', cursive;
    color: aliceblue;
    font-size: 15px;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;
    height: 60px;
    background-color: rgb(66, 65, 65);
    
}
.login{
    margin:8px
}
.title-box {
    width: 400px;
     display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
}
    .log-btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:auto ;
        height: 30px;
        padding:20px;
        margin-right: 30px; 
        margin-left: 20px;
        outline: none;
        border:none;
        background: rgb(218,165,32);
        background: linear-gradient(90deg, rgba(218,165,32,1) 0%, rgba(255,203,73,1) 49%, rgba(218,165,32,1) 100%);
    }

    img{
        width: 30px;
        margin-right: 10px;
        margin-left: 10px;

    }
    .logo-titles{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .bazar{
        margin-top: -10px;
    }
</style>