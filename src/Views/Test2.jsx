/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Devil({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/Lor6CySFnqufFDFX/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#6bb0f9']} />
      <group {...props} dispose={null}>
        <mesh
          name="Triangle"
          geometry={nodes.Triangle.geometry}
          material={materials.Red}
          castShadow
          receiveShadow
          position={[183.21, 116.09, 16.83]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group name="lvl 3" position={[209.39, 222.86, 17.38]}>
          <mesh
            name="3"
            geometry={nodes['3'].geometry}
            material={materials.Red}
            castShadow
            receiveShadow
            position={[0.38, 0.12, 1.03]}
            rotation={[0, -0.04, 0]}
          />
          <mesh
            name="anger meter 1"
            geometry={nodes['anger meter 1'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[0, 0, -3.91]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group name="lvl 2" position={[209.39, 169.25, 17.38]}>
          <mesh
            name="2"
            geometry={nodes['2'].geometry}
            material={materials.Red}
            castShadow
            receiveShadow
            position={[-0.65, -0.85, 0.99]}
            rotation={[0, -0.04, 0]}
          />
          <mesh
            name="anger meter 11"
            geometry={nodes['anger meter 11'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[0, 0, -3.91]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group name="lvl 1" position={[209.39, 117.09, 17.38]}>
          <mesh
            name="1"
            geometry={nodes['1'].geometry}
            material={materials.Red}
            castShadow
            receiveShadow
            position={[-0.01, -0.85, 1.01]}
            rotation={[0, -0.04, 0]}
          />
          <mesh
            name="anger meter 12"
            geometry={nodes['anger meter 12'].geometry}
            material={materials.Glass}
            castShadow
            receiveShadow
            position={[0, 0, -3.91]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group name="Character 2" position={[109.8, 59.55, 3.63]} rotation={[0, 0.55, 0]}>
          <group name="Tail" position={[0.73, -33.92, -18.72]}>
            <group name="Group" position={[3.37, 46.95, -55.6]} rotation={[0.12, 0, 0]}>
              <mesh
                name="Cone"
                geometry={nodes.Cone.geometry}
                material={materials['Cone Material']}
                castShadow
                receiveShadow
                position={[0.07, 4.2, -7.15]}
                rotation={[-0.94, -1.4, 0.09]}
                scale={1}
              />
            </group>
            <mesh
              name="tail"
              geometry={nodes.tail.geometry}
              material={materials['tail Material']}
              castShadow
              receiveShadow
              position={[0.89, -0.04, -22.41]}
              rotation={[3.14, 0, -1.49]}
              scale={1}
            />
          </group>
          <mesh
            name="lHorn"
            geometry={nodes.lHorn.geometry}
            material={materials['lHorn Material']}
            castShadow
            receiveShadow
            position={[-36.69, 28.98, 19.87]}
            rotation={[-1.64, -0.5, 1.08]}
            scale={[1, 1, 1.85]}
          />
          <mesh
            name="rHorn"
            geometry={nodes.rHorn.geometry}
            material={materials['rHorn Material']}
            castShadow
            receiveShadow
            position={[31.22, 27.07, 41.13]}
            rotation={[-1.33, 0.61, -1.98]}
            scale={[1, 1, 1.85]}
          />
          <mesh
            name="body"
            geometry={nodes.body.geometry}
            material={materials['body Material']}
            castShadow
            receiveShadow
            position={[0, -10.68, 24.28]}
            rotation={[-Math.PI / 2, 0, -1.91]}
            scale={1}
          />
          <mesh
            name="left eye"
            geometry={nodes['left eye'].geometry}
            material={materials['left eye Material']}
            castShadow
            receiveShadow
            position={[-24.27, -3.63, 57.33]}
            rotation={[-0.2, -0.53, -0.1]}
            scale={0.74}
          />
          <mesh
            name="right eye"
            geometry={nodes['right eye'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[6.37, -3.94, 65.95]}
            rotation={[-0.22, -0.08, -0.07]}
            scale={0.74}
          />
          <mesh
            name="left eyebrow"
            geometry={nodes['left eyebrow'].geometry}
            material={materials['left eyebrow Material']}
            castShadow
            receiveShadow
            position={[-23.06, 6.68, 53.84]}
            rotation={[0, -0.45, -1.55]}
            scale={1}
          />
          <mesh
            name="right eyebrow"
            geometry={nodes['right eyebrow'].geometry}
            material={materials['right eyebrow Material']}
            castShadow
            receiveShadow
            position={[7.28, 6.17, 61.98]}
            rotation={[0, 0.02, -1.63]}
            scale={1}
          />
          <mesh
            name="left cheek"
            geometry={nodes['left cheek'].geometry}
            material={materials['left cheek Material']}
            castShadow
            receiveShadow
            position={[-30.09, -14.88, 55.2]}
            rotation={[0, -0.61, 0]}
          />
          <mesh
            name="right cheek"
            geometry={nodes['right cheek'].geometry}
            material={materials['right cheek Material']}
            castShadow
            receiveShadow
            position={[11.44, -14.9, 67.41]}
            rotation={[-0.04, -0.12, -0.01]}
            scale={1}
          />
        </group>
        <mesh
          name="Rectangle 3"
          geometry={nodes['Rectangle 3'].geometry}
          material={materials.BG}
          castShadow
          receiveShadow
          position={[103.34, 10.47, 445.43]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="4"
          makeDefault={true}
          zoom={2.05}
          far={100000}
          near={-100000}
          position={[61.19, 203.97, 362.81]}
          rotation={[-0.2, -0.12, -0.02]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
