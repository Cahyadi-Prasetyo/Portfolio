import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Gunakan path absolut dari public/assets/
const glbPath = '/assets/lanyard/card.glb';
const lanyardTexturePath = '/assets/lanyard/lanyard.png';

function LanyardModel({ position, scale, rotationSpeed }) {
    const [scene, setScene] = useState(null);
    const modelRef = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(glbPath, (gltf) => {
            const loadedScene = gltf.scene;
            loadedScene.scale.set(scale, scale, scale);
            
            // Load texture
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(lanyardTexturePath, (texture) => {
                loadedScene.traverse((child) => {
                    if (child.isMesh && child.name === 'LanyardBand') {
                        child.material = new THREE.MeshStandardMaterial({ map: texture });
                        child.material.needsUpdate = true;
                    }
                });
            });
            
            setScene(loadedScene);
        });
    }, [scale]);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += rotationSpeed;
        }
    });

    if (!scene) return null;
    return <primitive object={scene} ref={modelRef} position={position} />;
}

export default function LanyardComponent({ position, gravity }) {
    // Catatan: Gravity [0, -40, 0] biasanya digunakan dalam simulasi fisika.
    // React Three Fiber dasar tidak memiliki fisika bawaan.
    // Untuk menerapkan gravity, Anda akan membutuhkan library seperti `@react-three/rapier`.
    // Untuk contoh ini, kita hanya akan menggunakan `position` sebagai posisi awal model.

    return (
        <Canvas
            style={{
                width: '100%',
                height: '400px', // Atur tinggi canvas 3D
                background: 'transparent', // Agar transparan di atas background section
            }}
            camera={{ fov: 60, position: [0, 0, 80] }} // Sesuaikan posisi kamera untuk pandangan yang lebih baik
            shadows // Aktifkan bayangan jika model Anda mendukungnya
        >
            {/* Pencahayaan */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-5, -10, -5]} intensity={0.5} />

            {/* Lingkungan (misalnya, untuk refleksi) */}
            <Environment preset="city" /> {/* Coba preset lain seperti 'sunset', 'dawn', 'warehouse' */}

            {/* Model Lanyard */}
            <LanyardModel position={position} scale={40} rotationSpeed={0.002} /> {/* Sesuaikan skala model */}

            {/* Opsi: Tambahkan dasar lantai untuk bayangan jika model mengambang */}
            <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -20, 0]}>
                <planeGeometry args={[100, 100]} />
                <shadowMaterial opacity={0.3} />
            </mesh> 
        </Canvas>
    );
}