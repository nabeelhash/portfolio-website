import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { MeshStandardMaterial, Scene } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { useRef } from 'react'
const Computers = () => {
  const ref = useRef(null)
  // Load the .gltf model from the public folder
  // const { scene } = useGLTF('/desktop_pc/scene.gltf')  // Adjust path as needed


  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls />
        {/* Add the model to the scene using the <primitive> component */}
        {/* <primitive object={scene} /> */}

        <mesh ref={ref}>

        </mesh>
      </Canvas>
    </div>
  )
}

export default Computers