"use client";
import React, { useState } from "react";
import CustomLoginInput from "./CustomLoginInput";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    toast.success("Connexion réussie");
    router.push("/products");
  };

  return (
    <div className="flex w-full bg-white flex-col items-center justify-center px-4 md:px-8 lg:px-24 gap-8 text-center text-primary">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/logos/alyceLogo.png"
          width={200}
          height={200}
          alt="logo"
          className="flex sm:hidden"
        />
        <h1 className="text-4xl md:text-5xl font-bold">
          Bienvenue dans votre espace
        </h1>
        <p className="text-grey">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="w-full max-w-[480px] flex flex-col gap-4">
        <CustomLoginInput
          icon="mail"
          placeholder="Entrer votre addresse email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomLoginInput
          icon="password"
          placeholder="Entrer votre mot de passe"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full px-8 py-4 bg-primary rounded-xl cursor-pointer select-none hover:bg-opacity-95"
        >
          <span className="text-white font-semibold text-xl">Connecter</span>
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
