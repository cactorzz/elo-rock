import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Home from './componentes/pages/Home'
import ServicePage from './componentes/pages/servicePage/ServicePage';
import Cards from './componentes/pages/servicePage/Card1'
import Example from './componentes/pages/Header';
import ServiceChoose from './componentes/pages/ServiceChoose/ServiceChoose';

function App() {
  return (
   <>
    <ServiceChoose/>
   </>
  );
}

export default App;
