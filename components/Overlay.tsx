import React from 'react'
import ColorPicker from './ColorPicker'

function Overlay() {
  return (
      <section className='absolute top-[30%] left-32 z-10 hidden lg:block'>
          <h1 className='text-5xl font-bold text-black tracking-widest'>Joseph Robot</h1>
          <p className='text-lg text-gray-700 mt-2 hidden sm:block w-[500px]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolor officia iste ex nisi vel nihil aliquam perspiciatis eos voluptas,
              ea incidunt quisquam ullam porro omnis dolorem neque consequuntur veniam amet?
          </p>
          <h1 className='text-4xl text-gray-800 font-bold mt-10 uppercase'>Match your Furniture</h1>
          {/* colorpicker */}
          <ColorPicker dronePart='Outer'/>
          <ColorPicker dronePart='Inner'/>
          
          <button className='p-2 border rounded-lg'>MyButton</button>
      </section>
  )
}

export default Overlay