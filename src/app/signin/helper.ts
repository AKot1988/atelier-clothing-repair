import { FormProps } from '@/components/UniversalForm/type';
import { InputType } from '@/components/Input/type';

export const LogInFormProps: FormProps = {
  title: 'Log In',
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
  ],
  button: {text: 'Log In'},
};


