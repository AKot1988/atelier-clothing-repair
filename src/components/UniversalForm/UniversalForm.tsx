'use client';

import { FC } from 'react';
import { FormProps } from './type';
import { Input } from '../index';
import classes from './UniversalForm.module.scss';

const UniversalForm: FC<{ data: FormProps }> = ({ data }) => {
  // Передаємо обробник як onSubmit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
    if (data.button.clickHandler) {
      data.button.clickHandler(event); // Викликаємо обробник з переданими даними
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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
        />
      ))}
      <button className={classes.formButton} type="submit">
        {data.button.text}
      </button>
    </form>
  );
};

export default UniversalForm;
