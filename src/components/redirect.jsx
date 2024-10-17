"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from 'react-bootstrap';
import iwatch from"../../public/images/iwatch.png";


export const Redirect = () => {

    const router = useRouter();

    const handleClick = () => { 
        const res = confirm("Are you sure you want to redirect?");
        if(!res) return;

        //throw new Error("Redirection error");

        // router.replace("/dashboard");
    }

  return (
    <div>

      <Image src="/images/nature.jpg" width="500" height="334" alt='nature'/>
      <Image src={iwatch} alt='iwatch' />

      <div style={{ height: "300px", position: "relative"}}>
      <Image src="https://plus.unsplash.com/premium_photo-1673697239909-e11521d1ba94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       fill alt='mountain'
       style={{ objectFit: "cover"}}/>
      </div>
      
      
        <Button onClick={handleClick}>Redirect</Button>
    </div>
  )
}