import react, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import './loader.scss'

extend({ OrbitControls });

const Pyramids = () => {
    const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/Neutral.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} /> : null;
}

const Controls = () => {
    const orbitRef = useRef();
    const { camera, gl } = useThree();
  
    useFrame(() => {
      orbitRef.current.update();
    });
  
    return (
      <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
    );
  };
  
  function Loader() {
    const isBrowser = typeof window !== "undefined";
    // var scene = new THREE.Scene(); // initialising the scene
    // scene.background = new THREE.Color(0xff0000);
  
    return (
      <>
        {isBrowser && (
          <Canvas
            camera={{ position: [0,2 , 10], fov: 40 }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
          >
            <ambientLight intensity={5.0} />
            <pointLight position={ [10, 10, 10] } />
  
            <Controls />
            <Pyramids />
          {/* <OrbitControls autoRotate autoRotateSpeed={15} /> */}
  
          </Canvas>
        )}
      </>
    );
  }
  export default Loader;