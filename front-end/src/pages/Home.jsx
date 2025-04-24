import React from 'react';
import '../pageStyles/Home.css';
import Logo from '../assets/logo.png';

const Home = () => {
    return (
      <div className="home-container">
        <section className="company-section">
        <div className="header-title">
          <h2 className="neon-title">
            PIXEL ON LINE
          </h2>
          <img src={Logo} alt="Logo Pixel On Line" className="company-logo" />
        </div>
  
          <div className="company-block">
            <div className="text-content">
              <h3>Misión</h3>
              <p>
                Ser una empresa responsable en proporcionar tecnologías innovadoras a la medida de las necesidades de nuestros clientes, para poder satisfacer la competitividad y productividad de los mismos. Implementando soluciones prácticas y creativas, con base en las nuevas tecnologías.
              </p>
            </div>
          </div>
  
          <div className="company-block">
            <div className="text-content">
              <h3>Visión</h3>
              <p>
                En Pixel On Line nuestro compromiso es dar soluciones de una forma transparente y eficaz a los problemas de nuestros clientes, convirtiéndonos en su socio de confianza; siendo una empresa referente en los cambios tecnológicos, en forma ética y satisfactoria a las necesidades del mercado.
              </p>
            </div>
          </div>
  
          <div className="company-block">
            <div className="text-content">
              <h3>Objetivos</h3>
              <ul>
                <li>Que nuestros clientes se sientan satisfechos con nuestro trabajo.</li>
                <li>Que nuestros clientes tengan confianza en nosotros y en nuestros productos.</li>
                <li>Trabajar muy duro para poder destacarnos en el mercado nacional e internacional de productos de tecnología.</li>
                <li>Mantener los niveles de calidad que nos permitan satisfacer las necesidades primordiales de nuestros clientes.</li>
              </ul>
            </div>
          </div>
  
          <div className="company-block">
            <div className="text-content">
              <h3>Descripción de la Empresa</h3>
              <p>
                La empresa Pixel On Line inició sus operaciones el 18 de enero del año 2000, por Kendrick Lopez, Rauda Palacios y William Alexander. Inicialmente se comenzó con la venta de papelería, fotocopias, productos tecnológicos básicos para computadoras, telefonía celular y computadoras.
              </p>
              <p>
                El mayor logro resultó cuando nos abrimos a la venta de productos online a nivel nacional, lo que nos ha dado reconocimiento a nivel mundial.
              </p>
              <p>
                Hoy en día, el rango de nuestros productos es amplio e incluye todo lo relacionado a computadoras de escritorio, portátiles, accesorios, tablets, teléfonos inteligentes, ventas al detalle y mayoreo.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;