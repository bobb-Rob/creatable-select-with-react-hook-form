import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';
import Select from './features/selectInput/Select';

function App() {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">      
        <form onSubmit={handleSubmit(onSubmit)} >        
          <label htmlFor="fancy">Category</label>
          <Controller 
            control={control}
            name="fancy"
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  options={[
                      { value: "one", label: "One" },
                      { value: "two", label: "Two" },
                      { value: "three", label: "Three" },
                    ]}
                />
              )
            }
          />
          {/* <input type="submit" /> */}
        </form>      
    </div>
  );
}

export default App;
