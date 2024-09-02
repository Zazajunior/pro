'use client'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const page = () => {
    const x = 2000
    // let count = 0
    const [count,setCount] = useState(0)

    const handleCount = ()=>{
      setCount(count + 1)    }
    const handleCoun = ()=>{
      setCount(count - 1)
    }

    useEffect(()=>{
      console.log('Button Clicked');
    },[count]
  )

  let userName = 'Peter'
  return (
    <>
        <h1 className='text-5xl bg-blue-800
        '>This is a Master branch </h1>
        <div>
            <p>Hello, {x}</p>
        </div>

        <Component1/>
        <p>Go to our </p>
        <div className='flex justify-between bg-slate-600 p-10'>
          <div>
            <Link href={'/about'}>
            <button className="border-5 border-solid"> About us</button> 
            </Link>
          </div>
          <div>
            <Link href={'/sign_up'}>
            <button className="border-5 border-solid">Sign up</button> 
            </Link>
          </div>
          <div>
          <Link href={'/contact_us'}>
            <button className="border-5 border-solid"> Contact us</button> 
            </Link>
          </div>
          
        </div>


        <main className='flex items-center justify-center h-dvh gap-10'>
          {/* <button
            // onClick={
            //   () => console.log("hello")
            // }
            onClick={handleCount}
            className='text-3xl bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-500'>
            Click
          </button>
          <button
            onClick={handleCoun}
            className='text-3xl bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-500'>
            Click
          </button>
          <p>
            You have clicked {count} times
          </p> */}
            <Component2 name={userName}/>
        </main>

    </>
   
  )
}

export default page