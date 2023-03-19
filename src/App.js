import logo from './logo.svg';
import './App.css';
import Main from './Views/Main';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Test from './Views/Test';

function App() {

  return (
    <HelmetProvider>
      
      <Helmet>
        <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
      </Helmet>
      {/* <Main /> */}
      <Test/>
    </HelmetProvider>
  );
}

export default App;
