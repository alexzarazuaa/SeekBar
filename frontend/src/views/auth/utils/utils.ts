const CheckRegex = (regEx: any, text: string) => {
  return regEx.test(text) ? true : false;
};

export const RegisterFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push({name: 'username', value:'El username es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,values.email)) {
    console.log("EMAIL ERROR", values.email);
    typesErrors.push({name: 'email', value:'El email es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    typesErrors.push("password");
  } else if (values.password !== values.repeatPassword) {
    typesErrors.push({name: 'repeat', value:'La contraseña no es igual'});
  }

  return typesErrors ;
};


export const LoginFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push({name: 'log_username', value:'El username es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    typesErrors.push({name: 'log_password', value:'La contraseña es incorrecta'});
  }

  return typesErrors ;
};