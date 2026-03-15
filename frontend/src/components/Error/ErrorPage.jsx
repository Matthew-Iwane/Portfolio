/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import sad_gif from "../../assets/gifs/sad.gif";
import "./module.ErrorPage.css";

function SpinningContent() {
  return (
    <group>
      <Html transform center scale={0.4}>
        <div className="error-content">
          <h1>Uh oh!</h1>
          <img src={sad_gif} alt="crying marshmallow" id="sad-marshmallow" />
          <p>check the <span>navigation menu</span> for valid <span>links</span>!</p>
        </div>
      </Html>
    </group>
  );
}

export default function ErrorPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="error-page">
      <div className="canvas-bg">
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
          <color attach="background" args={["#ffffff"]} />
          <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom={false} enablePan={false} />
          <SpinningContent />
        </Canvas>
      </div>
    </div>
  );
}
