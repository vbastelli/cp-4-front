import '../componentes/contato.css';
function Contato() {
        return (
          <div className="contato-container">
            <div className="contato-info">
              <h2 className="contato-title">Contato</h2>
              <p className="contato-address">Rua Madev 777, São Paulo, Brasil</p>
              <p className="contato-phone">(11) 77777-7777</p>
            </div>
            <div className="contato-form">
              <h2 className="contato-form-title">Fale Conosco</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" placeholder="Seu e-mail" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" placeholder="Sua mensagem" rows="4"></textarea>
                </div>
                <button type="submit" className="contato-submit">Enviar</button>
              </form>
            </div>
          </div>
        );
      }
export default Contato;