"use client";

import { useState } from "react";

type UserFormProps = {
  onSubmit: (user: { name: string; email: string }) => void;
};

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email);

    onSubmit({ name, email });
  };

  return (
    <div className="max-w-[400px] bg-teal-700 m-auto rounded-xl p-8">
      <h1 className="text-center text-white text-2xl font-bold mb-4">User Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <section className="w-full flex flex-col gap-2">
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </section>

        <button
          type="submit"
          className="bg-teal-500 text-white w-fit rounded-md px-4 py-2 hover:bg-teal-600 active:bg-teal-700 shadow-md hover:shadow-lg hover:scale-105 duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <label className="flex items-center gap-4 w-full">
      <div className="basis-1/4">{label}:</div>
      <input
        className="text-neutral-700 border border-neutral-300 rounded-md px-2 py-1 flex-grow"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
