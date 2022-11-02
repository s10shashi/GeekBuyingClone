const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') !== 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}); 

let form=document.querySelector("form")
userdata=JSON.parse(localStorage.getItem("userdata"))||[]
form.addEventListener("submit",function(event){
    event.preventDefault()
    let data={
        name:  form.username.value,
        email:form.useremail.value,
        pass: form.userpass.value,
    }
    if(checkemail(data.email)==true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata))
        alert("register sucessfull")
    }else{
        alert("Account already exist")
    }
})
    function checkemail(email){
        let filtered=userdata.filter(function(el){
            return email==el.email
        })
        if(filtered.length>0){
            return false;
        }else{
            return true;      
        }
    }
   