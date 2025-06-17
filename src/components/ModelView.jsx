import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import * as THREE from 'three';
import Lights from './Light';
import IPhone from './IPhone';
import Loader from './Loader';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, item, size }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadTime = 1500; 

    const timer = setTimeout(() => {
      setLoading(false);
    }, minLoadTime);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {loading && <Loader isVisible={loading} />} 

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
        <Suspense fallback={null}> {/* no fallback now — loader is global */}
          {!loading && (
            <IPhone
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
          )}
        </Suspense>
      </group>

      <Lights />
    </View>
  );
};

export default ModelView;
