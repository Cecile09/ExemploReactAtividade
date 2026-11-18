import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch('http://localhost:3000/api/filmes');
        
        if (!resposta.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }

        const dados = await resposta.json();
        setFilmes(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmes();
  }, []);

  if (carregando) {
    return <p>Carregando filmes...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div className="container">
      <h1>Lista de Filmes</h1>

      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado.</p>
      ) : (
        <ul>
          {filmes.map((filme) => (
            <li key={filme.id}>
              {

              }
              {filme.titulo || filme.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;