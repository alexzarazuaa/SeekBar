let Login = (email, password) => {
  let check = true;

  let types = [];

  if (
    !CheckRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, email)
  ) {
      console.log("errorEMAIL")
    types.push("email");
    check = false;
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, password)) {
    types.push("password");
    check = false;
  }

    (check) ? LoginUser( email,password ) : console.log("false")
};

let CheckRegex = (regEx, text) => {
  return regEx.test(text) ? true : false;
};

let LoginUser = (email, password) => {
  let user = {};
  try {
    user = {
      email: email,
      password: password,
    };
  } catch (e) {
    console.error(e);
  }

  console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", user);
};
export default Login;
