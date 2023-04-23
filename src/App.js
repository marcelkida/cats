import logo from './logo.svg';
import './App.css';
import Main from './Views/Main';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test from './Views/Test';
import Scene from './Views/ThreeTest';
import { Canvas } from '@react-three/fiber';
import Devil from './Views/Test2';
import Devil2 from './Views/devil2';
import Temp from './Views/Temp';

function App() {

  return (
    <HelmetProvider>
      
      <Helmet>
        <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
      </Helmet>
      {/* <Main /> */}
      {/* <Test/> */}
      {/* <div className='h-screen'>
        <Canvas>
          <Devil2 x={2} pos={2}/>
          <Devil2 pos={200}/>
        </Canvas>
      </div> */}
      <Temp/>
    </HelmetProvider>
  );
}

export default App;
