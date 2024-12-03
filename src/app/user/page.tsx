"use client";
import { useState } from "react";
import LoginForm from "@/components/loginfrom"
import SignForm from "@/components/Singup"
import { Button } from "@/components/ui/button";

export default function User() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center content-center bg-black text-white ">
      <div className="mb-5 ">
        <Button
          onClick={() => setIsLogin((prev) => !prev)}
          variant={"ghost"}
        >
          {isLogin ? "login page" : "Signup page"}
        </Button>
      <div className="w-full max-w-md">
        {isLogin ? <LoginForm /> : <SignForm />}
      </div>
    </div>
    </div>

  );
}
