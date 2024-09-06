import '../componentes/sobrenos.css';

function Sobrenos() {
    return (
        <>
      <section className="sobrenos-container">
      <div className="sobrenos-text-container">
        <h2 className="sobrenos-title">Sobre a Madev</h2>
        <p className="sobrenos-text">
          A Madev é uma empresa de esportes especializada em produtos de futebol, fundada em 2024 por três visionários apaixonados pelo esporte. 
          Nossa missão é oferecer camisetas e chuteiras de alta qualidade para jogadores e fãs que buscam desempenho e estilo. 
          Nascemos com o objetivo de unir paixão, inovação e compromisso com o esporte, trazendo o melhor para dentro de campo.
        </p>
        <p className="sobrenos-text">
          Cada produto que oferecemos é pensado para proporcionar conforto, durabilidade e, claro, aquele toque de paixão pelo futebol que move milhões de corações. 
          Na Madev, somos mais do que uma loja; somos parte do seu time.
        </p>
        <a href="/produtos" className="sobrenos-button">Conheça nossos produtos</a>
      </div>
      <div className="sobrenos-images">
        <img src="./imagens/neymar.jpg" alt="Imagem 1" className="sobrenos-image"/>
        <img src="./imagens/messi.webp" alt="Imagem 2" className="sobrenos-image"/>
        <img src="./imagens/bagre.jpg" alt="Imagem 3" className="sobrenos-image"/>
      </div>
    </section>
      </>
    );
  }

export default Sobrenos
