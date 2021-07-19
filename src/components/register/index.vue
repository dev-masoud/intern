<template>
    <div class="container">

        <div class="login-box">
             <div class="box">
            <p class="register tit">ثبت نام</p>

            <router-link to="/login" class="tit">ورود</router-link>
        </div>
        <div class="input-container">
            <input type="text" class="put" placeholder="ایمیل">
            <input type="text" class="put" placeholder="گذرواژه">
            <input type="text" class="put" placeholder="تکرار گذر واژه">
            <input type="text" class="put invite" placeholder="کد دعوت(اختیاری)">

            <div class="captcha"></div>

            <div class="rule-box">
                <label for="rule-check" class="rule-label">قوانین و مقررات را مطالعه کرده و می پذیرم

                </label>
                    <input type="checkbox" class="rule-check" id="rule-check">  
                    <span class="rule-check-span"></span>
                

            </div>

                <button class="register-btn"><p> ثبت نام</p></button>
                <div class="gradiant">
                    <button class="gradiant-btn"><img src="../../assets/g-logo.svg" alt="" class="google-logo"><p>sign in with google</p>
                     </button>
                </div>
        </div>
        </div>
       
    </div>


</template>


<script>
export default {
    
}
</script>


<style scoped>
*{
    direction: rtl
}
@import url('https://fonts.googleapis.com/css2?family=Lateef&display=swap');
.gradiant{
    width: 200px;
    height: 30px;
    background: rgb(219,68,55);
    background: linear-gradient(90deg, rgba(219,68,55,1) 0%, rgba(244,180,0,1) 50%, rgba(15,157,88,1) 81%, rgba(66,133,244,1) 100%);
    padding: 2px;
}
.gradiant-btn{
    width: 200px;
    height: 30px;
    background-color:rgb(75, 74, 74);
    outline: none;
    border: none;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.captcha{
    width: 200px;
    height: 40px;
    background-color: #fff;
    margin:8px 0 12px 0;
}

.gradiant-btn p{
    color: white;
}

.google-logo{
    height: 20px;
    margin-right: 10px;

}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    align-content: center;
}
.login-box{
    background-color: rgb(75, 74, 74);
    width: auto;
    padding: 20px;
    margin-top: 30px;
    border-radius: 5%;
    height: 400px;

}

.box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.put{
    width: 200px;
    padding: 5px;
    background-color: rgb(44, 44, 44);
    margin-top: 5px;
    border-radius: 5%;
    border: 3px solid rgb(94, 92, 92);
}
.invite{
    margin-top: 20px;
}
.input-container{
    height:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.tit{
font-family: 'Lateef', cursive;
color: aliceblue;
font-size: 20px;
text-decoration: none;
margin:0px
}
.rule-label{
    font-family: 'Lateef', cursive;
    color: aliceblue;
    font-size: 15px;
    margin-right: 25px;
}
.rule-box{
    display: flex;
    flex-direction:row;
    align-items: center;
}

.rule-check{
    opacity:0%;
    width: 0;
    height: 0;
}
.rule-check-span{
    border: 2px solid white;
    background: transparent;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius:10%;
}
.rule-check-span:hover{
    background-color: rgb(116, 112, 112);
}
.rule-check:checked ~ .rule-check-span{
    background-color: white;
}

.rule-check-span:after {
  content: "";
  position: absolute;
  display: none;
}
.register-btn{
    background: rgb(242,215,4);
background: linear-gradient(90deg, rgba(242,215,4,1) 0%, rgba(162,144,51,1) 100%);
    width: 200px;
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    margin: 5px 0px 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;


}
.register-btn p{
    font-family: 'Lateef', cursive;
    font-size: 20px;
}

input::placeholder{
    font-family: 'Lateef', cursive;
    color: aliceblue;
    font-size: 18px;
    color: rgb(131, 128, 128);
}

.register{
    font-weight:700;
    
}

</style>