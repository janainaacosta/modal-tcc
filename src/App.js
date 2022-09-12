import './App.css';
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

function App() {
  const [modalIsOpen, setIsOpen ] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='container'>
      <div className='container-etiquetas'>
        <div className='card-total-itens'>
        <img src='../assets/grafico-de-bolo.png' alt='cadastro' className='icon-grafico'/>
          <h1>Total de itens</h1>
          <p>4.669</p>
        </div>
        <div className='card-valor-itens'>
        <img src='../assets/moeda.png' alt='cadastro' className='icon-moeda'/>
        <h1>Valor total</h1>
          <p>R$ 1.721.144,36</p>
        </div>
      <button className="btn-ver" onClick={openModal}>
        <img src='../assets/cadastro.png' alt='cadastro' className='icon-cadastro'/>
        cadastrar item
      </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="exemplo"
        overlayClassName="modal-overlay"
        className="modal-content">
          <h1>Cadastrar novo departamento</h1>

          <div className='container-menu'>
            <label>Departamento</label>
            <select className='menu-select'>
              <option>Sala</option>
              <option>Laboratório</option>
              <option>Oficina</option>
              <option>Biblioteca</option>
              <option>Refeiório</option>
            </select>
            <a href='#' className='link-criar'>criar departamento</a>
          </div>

          <div className='container-info'>
            <div className='container-nome'>
              <label>Responsável</label>
              <input className='input-nome'></input>
            </div>
            <div className='container-identificacao'>
              <label>N° de identificação</label>
              <input className='input-identificacao'></input>
            </div>
          </div>

          <div className='container-button'>
            <button onClick={() => {}} className='btn-cadastrar'>Cadastrar</button>
            <button onClick={closeModal} className='btn-voltar'>voltar</button>
          </div>
        </Modal>
    </div>
  );
}

export default App;

