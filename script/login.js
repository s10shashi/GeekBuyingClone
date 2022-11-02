


let form=document.querySelector("form")
let userdata=JSON.parse(localStorage.getItem("userdata"))||[]

form.addEventListener("submit",function(event){
    event.preventDefault()
    let data={  
    email:form.useremail.value,
    pass: form.userpass.value,
    } 
    if(checksignin(data.email,data.pass)==true){
       
        localStorage.setItem("signin",JSON.stringify(data))
        alert("sign in sucessfull")
        window.location.href="./index.html"
    }else{
        alert("not yet registered")
    }
})
    function checksignin(email,pass){
        let check=userdata.filter(function(el){
            return email==el.useremail && pass==el.userpass
        })
        if(check.length>0){
            return false
        }else{
            return true
        }
    }
    function logingmail(){
        window.location.href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%2Fprofile&redirect_uri=https%3A%2F%2Fwww.geekbuying.com%2FMain%2FSignIn&response_type=token&client_id=472714482096-o15au3vh80f5hontiepjt6jb2psi5enk.apps.googleusercontent.com&flowName=GeneralOAuthFlow"
    }