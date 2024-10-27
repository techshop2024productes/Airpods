import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Venta de AirPods Pro</h1>
        <p>Compra los mejores AirPods Pro a precios bajos</p>
      </header>
      <main className="App-main">
        <section className="products">
          <h2>Nuestros productos</h2>
          <div className="product">
            <img src="airpods-pro.jpg" alt="AirPods Pro" />
            <h3>AirPods Pro</h3>
            <p>Precio: <€80</p>
            <button>Añadir al carrito</button>
          </div>
          <div className="product">
            <img src="airpods-pro-clone.jpg" alt="AirPods Pro Clone" />
            <h3>AirPods Pro Clone</h3>
            <p>Precio: €50</p>
            <button>Añadir al carrito</button>
          </div>
        </section>
        <section className="contact">
          <h2>Contáctanos</h2>
          <p>Correo electrónico: techshop.tutiendadeconfi@gmail.com</p>
          <p>Teléfono: 633971761</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Venta de AirPods Pro</p>
      </footer>
    </div>
  );
};

export default App;