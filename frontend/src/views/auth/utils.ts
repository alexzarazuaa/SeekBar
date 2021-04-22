const CheckRegex = (regEx: any, text: string) => {
  return regEx.test(text) ? true : false;
};

export const RegisterFormErrors = (values: any) => {
  console.log(values.username);
  console.log(values.email);
  console.log(values.password);
  console.log(values.repeatPassword);
  console.log(values.username);
  console.log(values.username);

  const typesErrors: string[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    console.log("USERNAME ERROR", values.username);
    typesErrors.push("username");
  }

  if (
    !CheckRegex(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      values.email
    )
  ) {
    console.log("EMAIL ERROR", values.email);
    typesErrors.push("email");
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    console.log("PASSWORD ERROR", values.password);
    typesErrors.push("password");
  } else if (values.password !== values.repeatPassword) {
    typesErrors.push("repeat");
  }

  return typesErrors ;
};