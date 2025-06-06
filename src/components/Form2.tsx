import React, { useContext, useReducer, useState } from "react";
import FormModel from "./form/form-utils/FormModel";
import { LoginForm, RegistrationForm } from "./form/form-utils/formData";
import { LockKeyhole, Mail, User } from "lucide-react";

interface formInputData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormError {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formData: formInputData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formDataError: FormError = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export interface formColorType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const formColor: formColorType = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialData = {
  formData,
  formDataError,
  formColor,
};

export const ValidateForm = {
  validated: {
    username: "USERNAMEVALIDATED",
    email: "EMAILVALIDATED",
    password: "PASSWORDVALIDATED",
    confirmPassword: "COMFIRMPASSWORDVALIDATED",
  },
  error: {
    username: "USERNAMEERROR",
    email: "EMAILERROR",
    password: "PASSWORDERROR",
    confirmPassword: "CONFIRMPASSWORDERROR",
  },
};
export interface IconInterface {
  username: React.ReactNode;
  email: React.ReactNode;
  password: React.ReactNode;
  confirmPassword: React.ReactNode;
}
const FormIcons: IconInterface = {
  username: <User />,
  email: <Mail />,
  password: <LockKeyhole />,
  confirmPassword: <LockKeyhole />,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ValidateForm.validated.username:
      return {
        ...state,
        formData: { ...state.formData, username: action.payload },
      };
    case ValidateForm.validated.email:
      return {
        ...state,
        formData: { ...state.formData, email: action.payload },
      };
    case ValidateForm.validated.password:
      return {
        ...state,
        formData: { ...state.formData, password: action.payload },
      };
    case ValidateForm.validated.confirmPassword:
      return {
        ...state,
        formData: { ...state.formData, confirmPassword: action.payload },
      };

    ///This are the error section

    case ValidateForm.error.username:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          username: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          username: action.payload.borderColor,
        },
      };
    case ValidateForm.error.email:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          email: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          email: action.payload.borderColor,
        },
      };
    case ValidateForm.error.password:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          password: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          password: action.payload.borderColor,
        },
      };
    case ValidateForm.error.confirmPassword:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          confirmPassword: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          confirmPassword: action.payload.borderColor,
        },
      };

    default:
      return state;
  }
};

const Form2 = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  console.log(state);

  const validateForm = (e: any) => {
    e.preventDefault();

    if (state.formData.username === "") {
      dispatch({
        type: ValidateForm.error.username,
        payload: {
          error: "Your username cannot be empty ",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.username,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }

    if (!state.formData.email.includes("@")) {
      dispatch({
        type: ValidateForm.error.email,
        payload: {
          error: "Your email is invalid ",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.email,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }
    if (state.formData.password === "") {
      dispatch({
        type: ValidateForm.error.password,
        payload: {
          error: "Your password cannot be empty",
          borderColor: "#ff0000",
        },
      });
    } else if (state.formData.password.length < 6) {
      dispatch({
        type: ValidateForm.error.password,
        payload: {
          error: "Your password cannot be less than 5",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.password,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }

    if (state.formData.confirmPassword === "") {
      dispatch({
        type: ValidateForm.error.confirmPassword,
        payload: {
          error: "Your password cannot be empty",
          borderColor: "#ff0000",
        },
      });
    } else if (state.formData.confirmPassword !== state.formData.password) {
      dispatch({
        type: ValidateForm.error.confirmPassword,
        payload: {
          error: "Password does not match. Please try again",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.confirmPassword,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }
  };
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className=" bg-gradient-to-l from-[#525351] to-[#7E9296] flex justify-center items-center min-h-screen">
      <div className=" grid grid-cols-2 w-full max-w-4xl shadow-lg h-[500px] bg-white rounded">
        <div className=" h-[500px] border">
          <img
            src="assets/formImage.jpg"
            alt="form image"
            className=" object-cover h-full w-full "
          />
        </div>
        <div className=" flex justify-center items-center w-full px-10 flex-col">
          <LockKeyhole className=" scale-150 animate-pulse" />
          <div className=" flex justify-between items-center  mt-8 w-full ">
            <h1 className=" font-bold text-2xl  text-gray-700">
              {isLogin ? "Login" : "Registeration"}
            </h1>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className=" border-b-2 text-gray-500">
              {isLogin ? "register" : "login"}
            </button>
          </div>
          {isLogin ? (
            <FormModel
              formData={LoginForm}
              dispatch={dispatch}
              buttonText="Register"
              onSubmit={validateForm}
              state={state}
              icons={FormIcons}
            />
          ) : (
            <FormModel
              formData={RegistrationForm}
              dispatch={dispatch}
              buttonText="Register"
              onSubmit={validateForm}
              state={state}
              icons={FormIcons}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Form2;
