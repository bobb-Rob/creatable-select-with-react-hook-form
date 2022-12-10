import React from "react";
import CategorySelect from "./CategorySelect";
import { useForm, Controller } from "react-hook-form";

function Select() {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller
        control={control}
        name="fancy"
        render={({ field: { onChange, onBlur, value, ref } }) => {
            console.log("value", value);
            return (
          <CategorySelect />
        )}}
      />
      
      <input type="submit" />
    </form>
  );
}


export default Select;