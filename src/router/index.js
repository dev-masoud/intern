// import { component } from "vue/types/umd";

export const routes = [
    {
        path:"/",
        name:"",
        redirect:"/login",
    },
    {
    name: "login",
    path: "/login",
    component:()=> import("../components/login/index.vue")
},
{
    name:"register",
    path: "/register",
    component:()=> import("../components/register/index.vue")

},
{
name:"forgetPassword",
path: "/forgetPassword",
component:()=> import("../components/forget/index.vue")
},
{
    name:"passRecovery",
    path:"passRecovery",
    component:()=> import("../components/passRecovery/index.vue")
}

]