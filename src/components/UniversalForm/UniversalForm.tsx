import { FC } from 'react';
import { FormProps } from './type';
import { Input } from '../index';
import classes from './UniversalForm.module.scss';

const UniversalForm: FC<{ data: FormProps }> = ({ data }) => {
  return (
    <form className={classes.form}>
      <p className={classes.formTitle}>{data.title}</p>
      {data.inputs.map((input) => (
        <Input
          id={input.id}
          key={input.id}
          type={input.type}
          placeHolder={input.placeHolder}
          value={input.value}
          name={input.name}
          required={input.required}
          options={input.options}
          label={input.label}
          onFocus={input.onFocus}
          onChange={input.onChange}
          imagePurpose={input.imagePurpose}
        />
      ))}
      <button
        className={classes.formButton}
        type="submit"
        onClick={data.button.clickHandler}>
        {data.button.text}
      </button>
    </form>
  );
};

export default UniversalForm;
