import MyCanvas from '@/components/MyCanvas'
import Overlay from '@/components/Overlay'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='realtive h-screen'>
      <Overlay/>
      <MyCanvas/>
   </div>
  )
}
