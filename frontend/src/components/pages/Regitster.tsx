import { useState } from 'react';
import axios from 'axios';

import Button from '../Button';
import Input from '../Input';

export default function Register() {
    const [name, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const registerUser = async () => {
        try {
            const response = await axios.post('http://localhost:3001/user', {
                name,
                email,
                password
            });
        
            setNome("");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error("Error when registering user:", err);
            setMessage("Error when registering user");
        }
    };

    return(
        <div className="w-dvw h-dvh content-center justify-items-center">
            <div className='flex flex-col size-2/5 min-h-3xs max-h-sm min-w-3xs max-w-xs border border-white bg-[#22284b] drop-shadow-xl/50 rounded-2xl space-y-3 justify-items-center'>
                <h1 className='font-bold text-white text-2xl mt-3'>Login</h1>
                <Button 
                    text='Entrar com o Google'
                    route='/'
                    className='w-[80%]'
                />
                <input
                    placeholder='Escreva seu nome'
                />
                <Input 
                    placeholder='Escreva seu smail'
                    className='rounded-xl'
                />
                <Input 
                    placeholder='Escreva sua senha'
                    className='rounded-xl'
                />                <Button 
                    text='Continuar'
                    route='/'
                    className='w-[80%]'
                />
            </div>
        </div>
    )
}