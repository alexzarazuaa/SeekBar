const CheckRegex = (regEx: any, text: string) => {
  return regEx.test(text) ? true : false;
};

export const RegisterFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push({name: 'username', value:'El username es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,values.email)) {
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


export const CreateBarFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.name)) {
    typesErrors.push({name: 'BarName', value:'El name es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z]{3,26}$/, values.description)) {
    typesErrors.push({name: 'BarDescription', value:'El description es incorrecto'});
  }

  if (!CheckRegex(/^[0-9]{9}$/, values.phoneNumber)) {
    typesErrors.push({name: 'BarPhoneNumber', value:'El phoneNumber es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z]{3,16}$/, values.location)) {
    typesErrors.push({name: 'BarLocation', value:'La localidad  es incorrecta'});
  }




  return typesErrors ;


};


export const DesactivateFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push({name: 'des_username', value:'El username es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    typesErrors.push({name: 'des_password', value:'La contraseña es incorrecta'});
  }

  return typesErrors ;
};

export const ActivateFormErrors = (values: any) => {
  const typesErrors: any[] = [];

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.username)) {
    typesErrors.push({name: 'act_username', value:'El username es incorrecto'});
  }

  if (!CheckRegex(/^[a-zA-Z0-9]{3,16}$/, values.password)) {
    typesErrors.push({name: 'act_password', value:'La contraseña es incorrecta'});
  }

  return typesErrors ;
};
