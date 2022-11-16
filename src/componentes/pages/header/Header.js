import React from 'react';

function Example() {
  return (
    <nav class="navbar navbar-expand-lg bg-light " id='navBar'>
      <div class="container-md">
         <a class="navbar-brand" href="#">Navbar</a>
         <nav class="nav">
            <a class="nav-link active navItens" aria-current="page" href="#">Home</a>
            <a class="nav-link navItens" href="#">Serviços</a>
            <a class="nav-link navItens" href="#">Sobre nós</a>
            
        </nav>
      </div>
    </nav>
  )
}

export default Example;