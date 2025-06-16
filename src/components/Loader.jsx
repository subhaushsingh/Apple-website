import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
    <div className='absolute top-0 left-[-70]  h-full flex justify-center items-center'>
        <div class="loader ">
  <span class="shadow"></span>
  <span class="shadow"></span>
  <span class="shadow"></span>
  <span class="dot"></span>
  <span class="text">&nbsp;&nbsp;&nbsp;loading...</span>
</div>
</div>
    </Html>
  )
}

export default Loader