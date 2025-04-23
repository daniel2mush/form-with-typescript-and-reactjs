import React from "react";
import FormInput from "./FormInput";
import { RegistrationType } from "./formData";
import { FormError, IconInterface, ValidateForm } from "../../Form2";
import { User } from "lucide-react";

interface FormType {
  state: any;
  formData: RegistrationType[];
  dispatch: React.Dispatch<any>;
  buttonText: string;
  onSubmit: (e: React.FormEvent) => void;
  icons: any;
}
let value = "";

const FormModel = ({
  dispatch,
  buttonText,
  onSubmit,
  formData,
  icons,
  state,
}: FormType) => {
  function getValue(item: string) {
    let dispatch = "";

    switch (item) {
      case "username":
        value = state.formData.username;
        console.log(value, "state");

        return;

      default:
        break;
    }
  }
  return (
    <form onSubmit={(e) => onSubmit(e)} className=" w-full">
      {formData.map((item) => {
        return (
          <div className=" flex w-full justify-start items-center">
            <div className=" mr-5 scale-75 text-gray-600 ">
              {icons[item.name]}
            </div>
            <div className=" flex-1">
              <FormInput
                name={item.name}
                type={item.type}
                placeHolder={item.placeHolder}
                borderColor={state.formColor[item.name]}
                errorText={state.formDataError[item.name]}
                value={state.formData[item.name]}
                onChangeHandler={(e) =>
                  dispatch({
                    type: ValidateForm.validated[
                      item.name === "username"
                        ? "username"
                        : item.name === "email"
                        ? "email"
                        : item.name === "password"
                        ? "password"
                        : "confirmPassword"
                    ],
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>
        );
      })}
      <button
        type="submit"
        className=" bg-[#525351] px-8 py-3 w-full mt-8 rounded font-bold text-white shadow-md ">
        {buttonText || "Submit"}
      </button>
    </form>
  );
};

export default FormModel;
