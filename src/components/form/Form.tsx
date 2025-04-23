import React, { useContext, useReducer } from "react";

interface formInputData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormError {
  usernameError: string;
  emailError: string;
  passwordError: string;
  CONFIRMPASSWORDERROR: string;
}

const formData: formInputData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formDataError: FormError = {
  usernameError: "",
  emailError: "",
  passwordError: "",
  CONFIRMPASSWORDERROR: "",
};

interface formColorType {
  usernameBorderColor: string;
  emailBorderColor: string;
  passwordBorderColor: string;
  confirmPasswordBorderColor: string;
}
const formColor: formColorType = {
  usernameBorderColor: "",
  emailBorderColor: "",
  passwordBorderColor: "",
  confirmPasswordBorderColor: "",
};

const initialData = {
  formData,
  formDataError,
  formColor,
};

const ValidateForm = {
  validated: {
    USERNAMEVALIDATED: "USERNAMEVALIDATED",
    EMAILVALIDATED: "EMAILVALIDATED",
    PASSWORDVALIDATED: "PASSWORDVALIDATED",
    COMFIRMPASSWORDVALIDATED: "COMFIRMPASSWORDVALIDATED",
  },
  error: {
    USERNAMEERROR: "USERNAMEERROR",
    EMAILERROR: "EMAILERROR",
    PASSWORDERROR: "PASSWORDERROR",
    CONFIRMPASSWORDERROR: "CONFIRMPASSWORDERROR",
  },
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ValidateForm.validated.USERNAMEVALIDATED:
      return {
        ...state,
        formData: { ...state.formData, username: action.payload },
      };
    case ValidateForm.validated.EMAILVALIDATED:
      return {
        ...state,
        formData: { ...state.formData, email: action.payload },
      };
    case ValidateForm.validated.PASSWORDVALIDATED:
      return {
        ...state,
        formData: { ...state.formData, password: action.payload },
      };
    case ValidateForm.validated.COMFIRMPASSWORDVALIDATED:
      return {
        ...state,
        formData: { ...state.formData, confirmPassword: action.payload },
      };

    ///This are the error section

    case ValidateForm.error.USERNAMEERROR:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          usernameError: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          usernameBorderColor: action.payload.borderColor,
        },
      };
    case ValidateForm.error.EMAILERROR:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          emailError: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          emailBorderColor: action.payload.borderColor,
        },
      };
    case ValidateForm.error.PASSWORDERROR:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          passwordError: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          passwordBorderColor: action.payload.borderColor,
        },
      };
    case ValidateForm.error.CONFIRMPASSWORDERROR:
      return {
        ...state,
        formDataError: {
          ...state.formDataError,
          confirmPasswordError: action.payload.error,
        },
        formColor: {
          ...state.formColor,
          confirmPasswordBorderColor: action.payload.borderColor,
        },
      };

    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  console.log(state);

  const validateForm = (e: any) => {
    e.preventDefault();

    if (state.formData.username === "") {
      dispatch({
        type: ValidateForm.error.USERNAMEERROR,
        payload: {
          error: "Your username cannot be empty ",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.USERNAMEERROR,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }

    if (!state.formData.email.includes("@")) {
      dispatch({
        type: ValidateForm.error.EMAILERROR,
        payload: {
          error: "Your email is invalid ",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.EMAILERROR,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }
    if (state.formData.password === "") {
      dispatch({
        type: ValidateForm.error.PASSWORDERROR,
        payload: {
          error: "Your password cannot be empty",
          borderColor: "#ff0000",
        },
      });
    } else if (state.formData.password.length < 6) {
      dispatch({
        type: ValidateForm.error.PASSWORDERROR,
        payload: {
          error: "Your password cannot be less than 5",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.PASSWORDERROR,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }

    if (state.formData.confirmPassword === "") {
      dispatch({
        type: ValidateForm.error.CONFIRMPASSWORDERROR,
        payload: {
          error: "Your password cannot be empty",
          borderColor: "#ff0000",
        },
      });
    } else if (state.formData.confirmPassword !== state.formData.password) {
      dispatch({
        type: ValidateForm.error.CONFIRMPASSWORDERROR,
        payload: {
          error: "Password does not match. Please try again",
          borderColor: "#ff0000",
        },
      });
    } else {
      dispatch({
        type: ValidateForm.error.CONFIRMPASSWORDERROR,
        payload: {
          error: "",
          borderColor: "#008000",
        },
      });
    }
    //

    // if (!state.formData.email.includes("@")) {
    //   // This code will execute if the email DOES NOT contain "@"
    //   console.log("......");
    //   dispatch({
    //     type: ValidateForm.error.EMAILERROR,
    //     payload: "Your email is incorrect ",
    //   });
    // }

    // switch (state) {
    //   case state.formData.username < 8:
    //     dispatch({
    //       type: ValidateForm.error.USERNAMEERROR,
    //       payload: "Your username cannot be less than 8 ",
    //     });
    //     break;

    //   default:
    //     return state;
    // }
  };

  console.log(state.formColor.usernameBorderColor);

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
        <div className=" flex justify-center items-center w-full px-10">
          <form onSubmit={(e) => validateForm(e)} className=" w-full">
            <input
              type="text"
              name="username"
              placeholder="enter your username"
              value={state.formData.username}
              onChange={(e) =>
                dispatch({
                  type: ValidateForm.validated.USERNAMEVALIDATED,
                  payload: e.target.value.trim(),
                })
              }
              className={`border-b-2 border-[${state.formColor.usernameBorderColor}]  w-full active:outline-none focus:outline-none py-2 mt-2`}
            />
            <p className=" text-red-600 text-center text-sm">
              {state.formDataError.usernameError}
            </p>
            <input
              type="text"
              name="username"
              placeholder="enter your email"
              value={state.formData.email}
              onChange={(e) =>
                dispatch({
                  type: ValidateForm.validated.EMAILVALIDATED,
                  payload: e.target.value,
                })
              }
              className={`border-[${state.formColor.emailBorderColor}] border-b-2 w-full active:outline-none focus:outline-none py-2 mt-4`}
            />
            <p className=" text-red-600 text-center text-sm">
              {state.formDataError.emailError}
            </p>
            <input
              type="text"
              name="username"
              placeholder="enter your password"
              value={state.formData.password}
              onChange={(e) =>
                dispatch({
                  type: ValidateForm.validated.PASSWORDVALIDATED,
                  payload: e.target.value,
                })
              }
              className={`border-[${state.formColor.passwordBorderColor}] border-b-2 w-full active:outline-none focus:outline-none py-2 mt-4`}
            />
            <p className=" text-red-600 text-center text-sm">
              {state.formDataError.passwordError}
            </p>
            <input
              type="text"
              name="username"
              placeholder="confirm your password"
              value={state.formData.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: ValidateForm.validated.COMFIRMPASSWORDVALIDATED,
                  payload: e.target.value,
                })
              }
              className={`border-[${state.formColor.confirmPasswordBorderColor}] border-b-2 w-full active:outline-none focus:outline-none py-2 mt-4`}
            />
            <p className=" text-red-600 text-center text-sm">
              {state.formDataError.confirmPasswordError}
            </p>
            <button
              type="submit"
              className=" bg-[#525351] px-8 py-3 w-full mt-8 rounded font-bold text-white shadow-md ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
