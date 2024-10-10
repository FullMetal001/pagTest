import { useState } from 'react';
import './App.css';
import reyes from './reyes';

function App() {
  const [texto, setTexto] = useState('Vota por tu rey preferido') 
  const [votos, setVotos] = useState(reyes.map(() => 0))
  const votar = (index) => {
    setVotos(
      votosAnteriores => {        
        const nuevosVotos = [...votosAnteriores]
        nuevosVotos[index] += 1;
        setTexto(<div>Has votado por <span className='reyVotado'>
          {reyes[index].nombre}</span> con <span className='reyVotado'>{nuevosVotos[index]}
            </span> votaciones</div>)
        return nuevosVotos
      }
    )
  }
  
  return (    
      <>
        <div className='textoP'>{texto}</div>
        <div className='contenedor'>
          {reyes.map((rey, index) => (
            <div className='rey-card' key={index}>
              <h2>{rey.nombre}</h2>
              <h3>Come {rey.vacas} vacas al dia</h3>
              <img src={rey.imagen} alt='' />
              <button className='botones' onClick={() => votar(index)}>Votar</button><br />
              <label className='conteo'>{votos[index]}</label>
            </div>
          ))}
        </div>
      </>
  );
}

export default App;
