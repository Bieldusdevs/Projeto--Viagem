"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, PerspectiveCamera, Environment, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function AnimatedPlane() {
  const planeRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (planeRef.current) {
      planeRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2
      planeRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={planeRef}>
      {/* Body */}
      <mesh castShadow>
        <cylinder args={[0.2, 0.2, 2, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffffff" />
        </cylinder>
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3, 0.05, 0.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Tail */}
      <mesh position={[0, 0.3, -0.8]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

export default function FlightScene() {
  return (
    <div className="h-full w-full absolute top-0 left-0 -z-10">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AnimatedPlane />
        </Float>

        {/* Background Sphere for "Atmosphere" */}
        <mesh scale={20}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#e0f2fe" 
            speed={2} 
            distort={0.3} 
            radius={1} 
            transparent 
            opacity={0.3} 
            side={THREE.BackSide} 
          />
        </mesh>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
