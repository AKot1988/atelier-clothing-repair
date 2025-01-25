import { FormProps } from '@/components/UniversalForm/type';
import { InputType } from '@/components/Input/type';

export const logInFormProps: FormProps = {
  title: 'Вхід',
  inputs: [
    {
      id: "1",
      type: InputType.EMAIL,
      name: 'email',
      placeHolder: 'Email',
      required: true,
    },
    {
      id: "2",
      type: InputType.PASSWORD,
      name: 'password',
      placeHolder: 'Password',
      required: true,
    },
    {
      id: "3",
      type: InputType.HIDDEN,
      name: 'formType',
      value: 'logIn',
      required: true,
    },
  ],
  button: {text: 'увійти'},
};


export const signInFormProps: FormProps = {
  title: 'Реєстрація',
  inputs: [
    {
      id: "1",
      type: InputType.EMAIL,
      name: 'email',
      placeHolder: 'email',
      required: true,
    },
    {
      id: "2",
      type: InputType.PASSWORD,
      name: 'password',
      placeHolder: 'password',
      required: true,
    },
    {
      id: "3",
      type: InputType.HIDDEN,
      name: 'formType',
      value: 'signIn',
      required: true,
    },
  ],
  button: {text: 'зареєструватись'},
};


