import React, { useState } from "react";
import { produce } from "immer";
import stringifiedArrayOfStringsToArray from "../utlis/arrayStringifier";

interface formProps {
  targets: string[];
  values: string[];
  description: string;
  calldatas: string[];
}

export type formPropsArr = formProps[];

interface ProposalForm {
  handleForm: React.FormEventHandler<HTMLFormElement> | undefined;
  handleModalClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
  form: formPropsArr;
  setForm: React.Dispatch<React.SetStateAction<formPropsArr>>;
}

const ProposalForm = ({
  handleForm,
  handleModalClose,
  form,
  setForm,
}: ProposalForm) => {
  // const [form, setForm] = useState<formPropsArr>([
  //   { targets: [], values: [], description: "", calldatas: [] },
  // ]);
  return (
    <div>
      {form.map((form, idx) => {
        {
          return (
            <div className="max-w-full p-4" key={idx}>
              <form
                className="max-w-full flex flex-col items-center justify-center space-y-4 p-4"
                onSubmit={handleForm}
              >
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                  placeholder="targets[]"
                  name="form[]"
                  onChange={(e) => {
                    const rawTarget = e.target.value;
                    // const targets = stringifiedArrayOfStringsToArray(rawTarget);
                    const targets = rawTarget.split(",");
                    setForm((form) =>
                      produce(form, (v) => {
                        v[idx].targets = targets;
                      })
                    );
                  }}
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                  placeholder="values[]"
                  type="text"
                  onChange={(e) => {
                    const rawValues = e.target.value;
                    // const values = stringifiedArrayOfStringsToArray(rawValues);
                    const values = rawValues.split(",");
                    setForm((form) =>
                      produce(form, (v) => {
                        v[idx].values = values;
                      })
                    );
                  }}
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                  placeholder="proposal description"
                  type="text"
                  onChange={(e) => {
                    const description = e.target.value;
                    setForm((form) =>
                      produce(form, (v) => {
                        v[idx].description = description;
                      })
                    );
                  }}
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-600 focus:border-orange-600 focus:z-10 sm:text-sm"
                  placeholder="calldatas[]"
                  type="text"
                  onChange={(e) => {
                    const rawCalldatas = e.target.value;
                    const calldatas = rawCalldatas.split(",");
                    // stringifiedArrayOfStringsToArray(rawCalldatas);
                    setForm((form) =>
                      produce(form, (v) => {
                        v[idx].calldatas = calldatas;
                      })
                    );
                  }}
                />
                <button
                  disabled={!form}
                  type="submit"
                  onClick={handleModalClose}
                  className="flex flex-row w-full h-10 bg-orange-600 mt-2 rounded-[8px]"
                >
                  <span className="p-2">
                    <svg
                      className="h-5 w-5 text-gray-200 group-hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <h1 className="p-2 mx-auto text-center text-white text-md font-bold">
                    send
                  </h1>
                </button>
              </form>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProposalForm;
