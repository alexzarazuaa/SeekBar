 let Register = (username, email,password, confPassword) => {

    let check=true

    let types=[];
    console.log(types)
    if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/,username)){
        console.log("USERNAME ERROR",username)
        types.push("username")
        check=false
    }

    if (!CheckRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,email)){
        console.log("EMAIL ERROR",email)
        console.log(types)
        check=false

    }
    if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/,password)){
        console.log("PASSWORD ERROR",password)
        check=false

    }

    if(password !== confPassword){
        check=false
    }

      (check) ? RegisterUser(username, email,password ) : console.log("types")

 
  };
  
let CheckRegex = (regEx,text) => {

    return regEx.test(text) ?  true : false;

}

let RegisterUser= (username, email,password) => {
    let user = {};
    try {
      user = {
        username: username,
        email: email,
        password: password,
      };
    } catch (e) {
      console.error(e);
    }

    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", user);
}
  export default Register