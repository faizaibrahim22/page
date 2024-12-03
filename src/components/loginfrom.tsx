"use client"

import { useState} from "react"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"



const LoginForm = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const handleSubmit =(e:React.FormEvent) =>{
        e.preventDefault()
        console.log("login, attempt,with:", {email,password})
    }
    return(
            <Card className="w-[350px] bg-white">
                <CardHeader>
                <CardTitle >Login</CardTitle>
                <CardDescription>Enter your credentiable to access your account</CardDescription>
               </CardHeader>
                 <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className="space-y-2">
                           <Input
                           type="email" placeholder="enter your email"
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           required
                           />
                           <div className="space-x-2">
                            <Input 
                            type="password"
                            placeholder="enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                          <Button type="submit" className="w-full bg-white" onClick={()=> alert("Thank")}></Button>
                           </div>
                        </div>

                    </form>


                    </CardContent>

            </Card>
    )
}


export default LoginForm