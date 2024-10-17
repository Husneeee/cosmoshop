"use client"
import React, { use } from 'react'

export const Client = () => {
 
 console.log("client")
    return (
    <div>
      This is a client component

      <button onClick={() =>console.log("hello")}> Clik Client Button</button>
    </div>
  )
}


