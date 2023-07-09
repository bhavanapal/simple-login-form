 const loginform = document.getElementById("myForm");

 loginform.addEventListener('submit', (e)=>{
          e.preventDefault();

    let username = document.getElementById("name");
    let password = document.getElementById("pwd");

    if(username.value == "" || password.value == ""){
        alert("confirm you input a value in both fields!");
    }else{
        alert("This form has been successfully submitted!");
        console.log(
            `This form has a username of ${username.value} and password of ${password.value}`
        );
        username.value="";
        password.value="";
    }
});