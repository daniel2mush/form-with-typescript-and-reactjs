import React from "react";

interface InputType {
  name: string;
  type: string;
  placeHolder: string;
  value: string;
  onChangeHandler: (e: any) => void;
  borderColor: string;
  errorText: string;
}

const FormInput = ({
  name,
  type,
  placeHolder,
  value,
  onChangeHandler,
  borderColor,
  errorText,
}: InputType) => {
  console.log(borderColor);

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChangeHandler}
        className={`border-b-2 border-[${borderColor}]  w-full  active:outline-none focus:outline-none py-2 mt-2 flex-2 `}
      />
      <p className=" text-red-600 text-center text-sm">{errorText}</p>
    </div>
  );
};

export default FormInput;
