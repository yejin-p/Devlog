
import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

export function MyForm() {

  type code = {
    info: {
      code: string
      codeName: string
    }[]
  }

  const { register, control, handleSubmit, setValue, getValues } = useForm();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'info',
  });
  const [updateText, setUpdateText] = useState("");

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const updateWork = (index: number) => {
    setUpdateText(getValues(`info.${index}.code`));
    setValue(`info.${index}.code`, '');
    setValue(`info.${index}.codeName`, '');
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={index}>
            <input {...register(`info.${index}.code`)}/>
            <input {...register(`info.${index}.codeName`)}/>
            <button type="button" onClick={() => updateWork(index)}>Update</button>
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => append({ code: '', codeName: ''})}>Add</button>
        <button type="submit">Submit</button>
        <div>{updateText}</div>
      </form>
    </>
  );
}
