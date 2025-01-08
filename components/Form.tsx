"use client";
import React from "react";
import { Work_Sans } from "next/font/google";
import { classNames } from "./utils/utils";
import { gql, request } from "graphql-request";
import { useMutation } from "@tanstack/react-query";
import { Toast } from "./utils/Notification";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const SUBMIT_FORM = gql`
  mutation submitForm($formInput: FormInput!) {
    createForm(createFormInput: $formInput) {
      code
      message
      data {
        id
        name
      }
    }
  }
`;

type RegisterForm = {
  name: string;
  email: string;
  phone: string;
  affiliation: string;
  college?: string;
  id_type: string;
  others?: string;
};

const initForm: RegisterForm = {
  name: "",
  email: "",
  phone: "",
  affiliation: "",
  college: "",
  id_type: "",
  others: "",
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Form = () => {
  const router = useRouter();
  const toastID = "formSubmit";
  const queryPoint = "https://tedx-backend-6x4f.onrender.com";
  const [form, setForm] = React.useState(initForm);

  const mutation = useMutation({
    mutationKey: ["tedxForm"],
    mutationFn: async (form: RegisterForm) => {
      const data = await request(queryPoint, SUBMIT_FORM, {
        formInput: form,
      });
      return data;
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp: any = await mutation.mutateAsync(form);
      toast.loading("Submitting Form", {
        toastId: toastID,
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const code = resp.createForm.code;
      if (code == 201) {
        await delay(1000);
        toast.update(toastID, {
          render: "Registration Successful",
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          type: "success",
        });
        setForm(initForm);
        await delay(1000);
        router.push("/success");
      } else {
        toast.update(toastID, {
          render: "Registration Failed",
          isLoading: false,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          type: "error",
        });
      }
    } catch (error) {
      toast.update(toastID, {
        render: "Registration Failed",
        isLoading: false,
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: "error",
      });
    }
    toast.dismiss(toastID);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setForm((pForm) => {
      const { name, value } = e.target;
      if (name === "affiliation" && value === "vnit") {
        return {
          ...pForm,
          affiliation: value,
          id_type: "vnit",
        };
      } else {
        return {
          ...pForm,
          [name]: value,
        };
      }
    });

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center bg-gray-800 bg-[url('/assets/background.png')] bg-cover bg-center bg-blend-hard-light">
      <form
        onSubmit={handleSubmit}
        className={classNames("w-full max-w-2xl p-6", work_sans.className)}
      >
        <div className="h-full items-center justify-center gap-10 pt-10 md:pt-0">
          <div className="grid grid-cols-6 gap-8 lg:gap-12">
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
              <label
                htmlFor="name"
                className="block text-2xl font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full col-span-4 bg-[#D9D9D9] p-4 rounded-md sm:text-md"
              />
            </div>
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
              <label
                htmlFor="email"
                className="block text-2xl font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                placeholder="Personal Email"
                onChange={handleChange}
                className="bg-[#D9D9D9] col-span-4 w-full rounded-md p-4 sm:text-md"
              />
            </div>
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
              <label
                htmlFor="contact"
                className="block text-2xl font-medium text-white"
              >
                Contact
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                maxLength={10}
                value={form.phone}
                placeholder="Personal Phone number"
                onChange={handleChange}
                className="block w-full bg-[#D9D9D9] col-span-4 rounded-md p-4 sm:text-md"
              />
            </div>
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
              <label
                htmlFor="affiliation"
                className="block text-2xl font-medium text-white"
              >
                Affiliation
              </label>
              <div className="block w-full bg-[#D9D9D9] col-span-4 rounded-md p-4 sm:text-md mr-2">
                <select
                  id="affiliation"
                  name="affiliation"
                  className="block w-full bg-[#D9D9D9] col-span-4 rounded-md mr-2 outline-none"
                  value={form.affiliation}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    Select Affiliation
                  </option>
                  <option value="non">Non-VNIT</option>
                  <option value="vnit">VNIT</option>
                </select>
              </div>
            </div>
            {form.affiliation === "non" && (
              <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
                <label
                  htmlFor="college"
                  className="block text-2xl font-medium text-white"
                >
                  College
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  required
                  maxLength={10}
                  value={form.college}
                  placeholder="College Name"
                  onChange={handleChange}
                  className="block w-full bg-[#D9D9D9] col-span-4 rounded-md p-4 sm:text-md"
                />
              </div>
            )}
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
              <label
                htmlFor="id_type"
                className="block text-2xl font-medium text-white"
              >
                ID
              </label>
              <div className="block w-full bg-[#D9D9D9] col-span-4 rounded-md p-4 sm:text-md mr-2">
                <select
                  id="id_type"
                  name="id_type"
                  className="block w-full bg-[#D9D9D9] col-span-4 rounded-md mr-2 outline-none"
                  value={form.id_type}
                  disabled={form.affiliation === "vnit"}
                  onChange={handleChange}
                >
                  <option value="" hidden>
                    Select ID Type
                  </option>
                  <option value="vnit" hidden={form.affiliation == "non"}>
                    VNIT Student ID
                  </option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="pan">PAN Card</option>
                  <option value="driving">Driving License</option>
                  <option value="other">Others if any specify</option>
                </select>
              </div>
            </div>
            {form.id_type === "other" && (
              <div className="col-span-6 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 md:items-center">
                <label
                  htmlFor="others"
                  className="block text-2xl font-medium text-white"
                >
                  Other
                </label>
                <input
                  type="text"
                  name="others"
                  id="pothers"
                  value={form.others}
                  placeholder="Other ID"
                  onChange={handleChange}
                  className="block w-full bg-[#D9D9D9] col-span-4 rounded-md p-4 sm:text-md"
                />
              </div>
            )}
            <div className="col-span-6 flex flex-col w-full justify-center items-center">
              <div className="text-red-500 mb-4 text-lg font-bold underline underline-offset-4">
                <span>
                  * Note: ID will be checked at entry on the event day
                </span>
              </div>
              <button className="w-1/2 mt-8 text-2xl px-4 py-3 rounded-md bg-red-500 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
