import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import BikeList from './components/BikeList';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="container-main">
          <BikeList />
          <Form />
        </section>
      </main>

      <Footer />
    </div>
  );
}
