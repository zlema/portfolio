import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Html, OrbitControls, Preload, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import CanvasLoader from "./Loader"

const stackGroups = ["Interface systems", "Backend services", "Cloud + DevOps", "AI automation"];

const positions = [
  [-4.8, 1.2, -0.4],
  [-3.2, -0.8, 0.3],
  [-2.0, 1.5, -0.2],
  [-0.8, -1.05, 0.6],
  [0.35, 1.2, -0.3],
  [1.45, -0.72, 0.25],
  [2.65, 1.38, -0.35],
  [3.8, -0.46, 0.3],
  [4.9, 0.96, -0.5],
  [-4.25, -2.55, 0.5],
  [-2.75, 2.9, -0.55],
  [-1.2, -3.0, 0.1],
  [0.55, 3.0, -0.6],
  [2.08, -2.65, 0.45],
  [3.55, 2.65, -0.35],
  [4.75, -2.2, 0.22],
  [-0.15, 0.12, 0.8],
  [1.65, 0.38, -0.15],
  [-1.8, 0.02, 0.2],
];

const toneColors = {
  cyan: "#12f7d6",
  green: "#3ecf8e",
  orange: "#ff9900",
  blue: "#5aa9ff",
  violet: "#ab7bff",
};

const relatedTerms = {
  "Next.js": ["React JS", "TypeScript", "JavaScript"],
  Stripe: ["Product Engineering", "payments"],
  Automation: ["OpenAI", "Claude", "AI workflows"],
  AI: ["OpenAI", "Claude", "Python"],
  Analytics: ["MongoDB", "Node JS"],
  Audio: ["Python", "OpenAI"],
  GSAP: ["JavaScript", "React JS"],
  "Google Maps": ["JavaScript", "React JS"],
  "Material UI": ["React JS"],
  jQuery: ["JavaScript"],
};

const matchesActiveStack = (technology, activeStack) => {
  if (!activeStack.length) return false;
  return activeStack.some((item) => {
    const related = relatedTerms[item] || [];
    return item === technology.name || related.includes(technology.name) || related.includes(technology.category);
  });
};

const StackNode = ({ technology, index, onDragChange, active }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const targetPosition = useRef(new THREE.Vector3(...positions[index % positions.length]));
  const dragPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), -positions[index % positions.length][2]), [index]);
  const dragPoint = useMemo(() => new THREE.Vector3(), []);
  const { camera, raycaster } = useThree();
  const texture = technology.icon ? useTexture(technology.icon) : null;
  const accent = toneColors[technology.tone] || toneColors.cyan;

  if (texture) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
  }

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.position.lerp(targetPosition.current, dragging ? 0.42 : 0.08);
    groupRef.current.rotation.y += hovered || dragging || active ? 0.018 : 0.004;
    groupRef.current.rotation.x = Math.sin(t * 0.65 + index) * 0.08;
  });

  const updateDragTarget = (event) => {
    raycaster.setFromCamera(event.pointer, camera);
    raycaster.ray.intersectPlane(dragPlane, dragPoint);
    targetPosition.current.set(
      THREE.MathUtils.clamp(dragPoint.x, -5.3, 5.3),
      THREE.MathUtils.clamp(dragPoint.y, -3.25, 3.25),
      positions[index % positions.length][2],
    );
  };

  return (
    <Float
      speed={1.15 + (index % 4) * 0.16}
      rotationIntensity={dragging ? 0 : hovered ? 0.3 : 0.14}
      floatIntensity={dragging ? 0 : hovered ? 1.4 : 0.95}
    >
      <group
        ref={groupRef}
        position={positions[index % positions.length]}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = dragging ? "grabbing" : "grab";
          window.dispatchEvent(new CustomEvent("portfolio-tech-hover", {
            detail: { tech: technology.name, category: technology.category },
          }));
        }}
        onPointerOut={() => {
          setHovered(false);
          if (!dragging) document.body.style.cursor = "auto";
          window.dispatchEvent(new CustomEvent("portfolio-tech-hover", {
            detail: { tech: null, category: null },
          }));
        }}
        onPointerDown={(event) => {
          event.stopPropagation();
          event.target.setPointerCapture(event.pointerId);
          setDragging(true);
          onDragChange(true);
          document.body.style.cursor = "grabbing";
          updateDragTarget(event);
        }}
        onPointerMove={(event) => {
          if (!dragging) return;
          event.stopPropagation();
          updateDragTarget(event);
        }}
        onPointerUp={(event) => {
          event.stopPropagation();
          event.target.releasePointerCapture(event.pointerId);
          setDragging(false);
          onDragChange(false);
          document.body.style.cursor = hovered ? "grab" : "auto";
        }}
        scale={dragging ? 1.22 : hovered ? 1.12 : active ? 1.08 : 1}
      >
        <mesh>
          <sphereGeometry args={[0.58, 48, 48]} />
          <meshPhysicalMaterial
            color="#11192f"
            roughness={0.24}
            metalness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.16}
            transmission={0.12}
            thickness={0.8}
            emissive={accent}
            emissiveIntensity={dragging ? 0.22 : hovered ? 0.16 : active ? 0.18 : 0.045}
          />
        </mesh>
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[0.72, 0.72]} />
          {texture ? (
            <meshBasicMaterial
              map={texture}
              transparent
              toneMapped={false}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          ) : (
            <meshBasicMaterial color={accent} transparent opacity={0.18} />
          )}
        </mesh>
        <Html center position={[0, -0.92, 0]} distanceFactor={8} occlude={false}>
          <div className={`stack-node-label ${hovered || dragging || active ? "is-visible" : ""}`}>
            <strong>{technology.name}</strong>
            <span>{technology.category}</span>
          </div>
        </Html>
      </group>
    </Float>
  );
};

const StackScene = () => {
  const visibleTechnologies = useMemo(() => technologies, []);
  const [dragging, setDragging] = useState(false);
  const [activeProjectStack, setActiveProjectStack] = useState([]);

  useEffect(() => {
    const handleProjectHover = (event) => {
      setActiveProjectStack(event.detail?.tech || []);
    };

    window.addEventListener("portfolio-project-hover", handleProjectHover);
    return () => window.removeEventListener("portfolio-project-hover", handleProjectHover);
  }, []);

  useFrame(({ clock, camera }) => {
    if (dragging) return;
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.16) * 0.5;
    camera.position.y = Math.cos(t * 0.13) * 0.22;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[-4, 4, 5]} intensity={18} color="#12f7d6" />
      <pointLight position={[5, -2, 4]} intensity={15} color="#ff4ecd" />
      <pointLight position={[0, 5, -4]} intensity={10} color="#f6d365" />
      <group rotation={[0.08, 0, -0.04]}>
        {visibleTechnologies.map((technology, index) => (
          <StackNode
            key={technology.name}
            technology={technology}
            index={index}
            onDragChange={setDragging}
            active={matchesActiveStack(technology, activeProjectStack)}
          />
        ))}
      </group>
    </>
  );
};

const Tech = () => {
  return (
    <div className="tech-constellation">
      <div className="tech-orbit" aria-hidden="true" />
      <div className="tech-comet tech-comet-one" aria-hidden="true" />
      <div className="tech-comet tech-comet-two" aria-hidden="true" />
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-secondary uppercase tracking-wider sm:text-[18px] text-[14px]">
            Technical Stack
          </p>
          <h2 className="text-white font-black md:text-[54px] sm:text-[44px] xs:text-[36px] text-[30px]">
            A working toolkit, not a checklist.
          </h2>
        </div>
        <div className="stack-group-row">
          {stackGroups.map((group) => (
            <span key={group}>{group}</span>
          ))}
        </div>
      </div>
      <motion.div
        className="stack-scene-shell"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <Canvas
          camera={{ position: [0, 0, 8.7], fov: 48 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <StackScene />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.34} />
            <Preload all />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Tech, "")
