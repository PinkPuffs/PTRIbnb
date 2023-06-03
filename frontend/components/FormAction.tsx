import React, { FC } from "react";

let handleSubmit: (arg: any) => void;

const FormAction: FC<{
  handleSubmit?: typeof handleSubmit;
  formType?: string | "Button";
  action?: undefined | "submit";
  text?: string;
}> = ({ handleSubmit, formType = "Button", action = "submit", text }) => {
  return (
    <>
      {formType === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormAction;
