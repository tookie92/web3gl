'use client'
import { useGLTF } from "@react-three/drei"
import { DroneGLTF } from "./typing";
import { useThree } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "@/store";

function Drone() {
    const { nodes, materials } = useGLTF("/drone.glb") as DroneGLTF

    const snap = useSnapshot(state)
    // const { camera } = useThree()
    // console.log(camera.position);
    
    return (
        // primitive nous permet dutiliser le model en entier(pas de possiblite de decompomser)
        //   <primitive object={model.scene}/>


        // castShadow afin que le shadow s'apllique a notre model et a chaque mesh aussi ajout receiveShadow
        <group
            castShadow
            scale={0.6}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_BlackGlass_0.geometry}
                material={materials.BlackGlass}
               

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_MetalShiny_0.geometry}
                material={materials.MetalShiny}
                material-color={snap.items.skeleton}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_Metal_0.geometry}
                material={materials.Metal}
                material-color={snap.items.neck}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_Rubber_0.geometry}
                material={materials.Rubber}
                material-color={snap.items.feet}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_lambert1_0.geometry}
                material={materials.lambert1}
                material-color={snap.items.body}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_lambert4_0.geometry}
                material={materials.lambert4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube43_pasted__Eyes_0.geometry}
              //  material={materials.pasted__Eyes}
                material-color={snap.items.eyes}
            >
                <meshBasicMaterial/>
            </mesh>
        </group>
  )
}

export default Drone