'use client'
import { state } from '@/store'
import React from 'react'
import { useSnapshot } from 'valtio'

function ColorPicker({dronePart}: {dronePart: string}) {
    const snap = useSnapshot(state)
    const changeColor = (color: string) => {
        switch (dronePart) {
            case "Outer":
                state.items.body = color
                break
            case "Inner":
                state.items.skeleton = color
                break
         
        }
    }
  return (
      <div>
          <div className='flex gap-5 mt-2 items-center'>
              <h1 className='text-lg text-gray-800 font-bold w-[90px]' >
                 {dronePart}
              </h1>
                <div onClick={()=> changeColor("red")} className='h-6 w-6 bg-red-500 rounded-full inline-flex cursor-pointer'/>
                <div onClick={()=> changeColor("green")} className='h-6 w-6 bg-green-500 rounded-full inline-flex cursor-pointer'/>
                <div onClick={()=> changeColor("yellow")} className='h-6 w-6 bg-yellow-500 rounded-full inline-flex cursor-pointer'/>
                <div onClick={()=> changeColor("white")} className='h-6 w-6 bg-white rounded-full inline-flex cursor-pointer'/>
          </div>
    </div>
  )
}

export default ColorPicker