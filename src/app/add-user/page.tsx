"use client";

import { useState } from "react";

import { User } from "@/components";

type User = {
  name: string;
  email: string;
};

export default function AddUserPage() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="flex flex-col gap-8 p-12">
      <User.Form onSubmit={addUser} />
      <hr />
      <User.List users={users} />
    </div>
  );
}
