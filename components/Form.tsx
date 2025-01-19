"use client";

import React, { useState } from "react";
import { Work_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { gql, request } from "graphql-request";
import { useMutation } from "@tanstack/react-query";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SUBMIT_FORM = gql`
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
  others: string;
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
const endpoint = "https://tedx-backend-6x4f.onrender.com/";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Form = () => {
  const router = useRouter();
  const [form, setForm] = useState(initForm);

  const mutation = useMutation({
    mutationKey: ["tedxForm"],
    mutationFn: async (form: RegisterForm) => {
      const data = await request(endpoint, SUBMIT_FORM, {
        formInput: form,
      });
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Submitting form...");

    try {
      const response: any = await mutation.mutateAsync(form);
      console.log(response);

      const { code } = response.createForm;

      if (code === 200) {
        toast.success("Registration Successful!", {
          id: toastId,
          duration: 3000,
        });
        setForm(initForm);
        router.push("/success");
      } else {
        toast.error("Registration Failed. Please try again.", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(`Error: ${error?.message || "An unknown error occurred."}`, {
        id: toastId,
        duration: 3000,
      });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      ...(name === "affiliation" && value === "vnit"
        ? { id_type: "vnit" }
        : {}),
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center bg-gray-800 bg-[url('/assets/background.png')] bg-cover bg-center bg-blend-hard-light">
      <Toaster />

      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-2xl p-6 ${work_sans.className}`}
      >
        <div className="grid grid-cols-6 gap-8">
          <InputField
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            label="Name"
            placeholder="Enter your name"
            required
          />

          <InputField
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            label="Email"
            placeholder="Enter your email"
            required
            type="email"
          />

          <InputField
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            label="Phone"
            placeholder="Enter your phone number"
            required
            maxLength={10}
          />

          <SelectField
            id="affiliation"
            name="affiliation"
            value={form.affiliation}
            onChange={handleChange}
            label="Affiliation"
            options={[
              { value: "", label: "Select Affiliation", hidden: true },
              { value: "non", label: "Non-VNIT" },
              { value: "vnit", label: "VNIT" },
            ]}
          />

          {form.affiliation === "non" && (
            <InputField
              id="college"
              name="college"
              value={form.college}
              onChange={handleChange}
              label="College"
              placeholder="Enter your college name"
              required
            />
          )}

          <SelectField
            id="id_type"
            name="id_type"
            value={form.id_type}
            onChange={handleChange}
            label="ID Type"
            options={[
              { value: "", label: "Select ID Type", hidden: true },
              { value: "vnit", label: "VNIT Student ID" },
              { value: "aadhar", label: "Aadhar Card" },
              { value: "pan", label: "PAN Card" },
              { value: "driving", label: "Driving License" },
              { value: "other", label: "Others" },
            ]}
            disabled={form.affiliation === "vnit"}
          />

          {form.id_type === "other" && (
            <InputField
              id="others"
              name="others"
              value={form.others}
              onChange={handleChange}
              label="Other ID"
              placeholder="Specify other ID"
            />
          )}

          <div className="col-span-6 flex justify-center items-center">
            <button
              type="submit"
              className="w-1/2 mt-8 text-2xl px-4 py-3 rounded-md bg-red-500 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  type = "text",
  maxLength,
}: any) => (
  <div className="col-span-6">
    <label htmlFor={id} className="block text-2xl font-medium text-white">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      className="w-full bg-[#D9D9D9] p-4 rounded-md"
    />
  </div>
);

const SelectField = ({
  id,
  name,
  value,
  onChange,
  label,
  options,
  disabled = false,
}: any) => (
  <div className="col-span-6">
    <label htmlFor={id} className="block text-2xl font-medium text-white">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full bg-[#D9D9D9] p-4 rounded-md"
    >
      {options.map((option: any) => (
        <option key={option.value} value={option.value} hidden={option.hidden}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Form;
