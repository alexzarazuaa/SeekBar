const CheckRegex = (regEx: any, text: string) => {
  return regEx.test(text) ? true : false;
};

export const RegisterFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push("username");
  }

  if (!CheckRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,values.email)) {
    console.log("EMAIL ERROR", values.email);
    typesErrors.push("email");
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    typesErrors.push("password");
  } else if (values.password !== values.repeatPassword) {
    typesErrors.push({name: 'repeat', value:'La contraseña no es igual'});
  }

  return typesErrors ;
};