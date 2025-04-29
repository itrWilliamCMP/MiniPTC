import React from 'react';
import Slider from 'react-slick';
import '../pageStyles/Home.css';

// Importar los estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        {/* Diapositiva 1: Bienvenida */}
        <div className="welcome-slide">
          <div className="welcome-content">
            <h2 className="neon-title">PIXEL ON LINE</h2>
            <p className="welcome-message">
              ¡Bienvenidos a la mejor tecnología en mini impresoras portátiles!
            </p>
            <p className="info-description">
              En Pixel On Line, nos especializamos en ofrecerte mini impresoras de alta calidad, 
              compactas y fáciles de usar. Lleva tu impresión al siguiente nivel con la portabilidad y 
              rendimiento que necesitas, ¡perfectas para cualquier lugar y ocasión!
            </p>
            <p className="slogan">
              "Imprime tu creatividad donde quieras, cuando quieras."
            </p>
          </div>
        </div>

        {/* Diapositiva 2 */}
        <div className="welcome-slide">
          <div className="welcome-content">
            <h2 className="neon-title">TECNOLOGÍA QUE INSPIRA</h2>
            <p className="welcome-message">
              Eleva tu experiencia con nuestras mini impresoras portátiles.
            </p>
            <p className="info-description">
              Diseñadas pensando en ti, nuestras impresoras combinan funcionalidad y estilo para 
              acompañarte en tus estudios, trabajo o momentos especiales. ¡Transforma cada impresión en una obra única!
            </p>
            <p className="slogan">
              "Tu idea, nuestra impresión."
            </p>
          </div>
        </div>

        {/* Diapositiva 3 */}
        <div className="welcome-slide">
          <div className="welcome-content">
            <h2 className="neon-title">COMPACTA Y PODEROSA</h2>
            <p className="welcome-message">
              Potencia profesional en la palma de tu mano.
            </p>
            <p className="info-description">
              Ya sea para crear etiquetas, imprimir notas o capturar recuerdos, nuestras mini impresoras 
              te brindan resultados increíbles sin ocupar espacio. ¡Simplicidad y eficiencia al instante!
            </p>
            <p className="slogan">
              "Pequeña en tamaño, gigante en resultados."
            </p>
          </div>
        </div>

        {/* Diapositiva 4 */}
        <div className="welcome-slide">
          <div className="welcome-content">
            <h2 className="neon-title">DISEÑADAS PARA TI</h2>
            <p className="welcome-message">
              La impresión portátil nunca fue tan personalizada.
            </p>
            <p className="info-description">
              Con diseños modernos y conectividad inteligente, nuestras impresoras se adaptan a tu estilo de vida. 
              Llévalas a donde vayas y crea desde cualquier lugar, en cualquier momento.
            </p>
            <p className="slogan">
              "Tu compañera de impresión ideal."
            </p>
          </div>
        </div>
      </Slider>

      {/* Sección de Misión, Visión, Objetivos y Descripción */}
      <section className="company-section">
        <div className="company-block left">
          <h3>Misión</h3>
          <p>
            Ser una empresa responsable en proporcionar tecnologías innovadoras a la medida de las necesidades de nuestros clientes, para poder satisfacer la competitividad y productividad de los mismos. Implementando soluciones prácticas y creativas, con base en las nuevas tecnologías.
          </p>
        </div>

        <div className="company-block right">
          <h3>Visión</h3>
          <p>
            En Pixel On Line nuestro compromiso es dar soluciones de una forma transparente y eficaz a los problemas de nuestros clientes, convirtiéndonos en su socio de confianza; siendo una empresa referente en los cambios tecnológicos, en forma ética y satisfactoria a las necesidades del mercado.
          </p>
        </div>

        <div className="company-block left">
          <h3>Objetivos</h3>
          <ul>
            <li>Que nuestros clientes se sientan satisfechos con nuestro trabajo.</li>
            <li>Que nuestros clientes tengan confianza en nosotros y en nuestros productos.</li>
            <li>Trabajar muy duro para poder destacarnos en el mercado nacional e internacional de productos de tecnología.</li>
            <li>Mantener los niveles de calidad que nos permitan satisfacer las necesidades primordiales de nuestros clientes.</li>
          </ul>
        </div>

        <div className="company-block right">
          <h3>Descripción</h3>
          <p>
            La empresa Pixel On Line inició sus operaciones el 18 de enero del año 2000, por Kendrick Lopez, Rauda Palacios y William Alexander. Inicialmente se comenzó con la venta de papelería, fotocopias, productos tecnológicos básicos para computadoras, telefonía celular.
          </p>
          <p>
            El mayor logro resultó cuando nos abrimos a la venta de productos online a nivel nacional, lo que nos ha dado reconocimiento a nivel mundial.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
