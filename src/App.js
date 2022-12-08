import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Home from './componentes/pages/homepage/Home'
import ServicePage from './componentes/pages/servicePage/ServicePage';
import Cards from './componentes/pages/servicePage/Card1'
import Header from './componentes/pages/header/Header.tsx';
import ServiceChoose from './componentes/pages/ServiceChoose/ServiceChoose';
import SelectButton from './componentes/pages/ServiceChoose/SelectButton/SelectButtons'

function App() {
  return (
   <>
    <Home/>
    <ServiceChoose/>
   </>
  );
}

export default App;
