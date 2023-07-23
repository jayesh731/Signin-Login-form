function showRegisterForm(){

    setTitle("Register");

    showHideForm("ragisterForm","show");
    showHideForm("loginForm","hide");

    activeInactive('showLogin',"inactive");
    activeInactive('showRegister',"Active");
    
}

function showLoginForm(){

    setTitle("Login");
    showHideForm("ragisterForm","hide");
    showHideForm("loginForm","show");

    activeInactive('showRegister',"inactive");
    activeInactive('showLogin',"Active");
}

function showHideForm(formclass,showorhide){
    var form = document.getElementById(formclass);
    if(showorhide == "show"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
}

function activeInactive(buttonid,activeInactive){

    var button = document.getElementById(buttonid);

    if(activeInactive == "Active"){
        button.classList.add('active');
    }
    else{
        button.classList.remove('active');
    }
}

function setTitle(title){
    formTitle = document.getElementById("formTitle");
    formTitle.innerHTML = title;
}
