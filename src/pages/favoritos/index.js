import { useEffect, useState } from "react";
import "./estilo.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhalista = localStorage.getItem("@filmes-em-cartaz");
    setFilmes(JSON.parse(minhalista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@filmes-em-cartaz", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!")
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes favoritos</h1>

      {filmes.length === 0 && <h3>Você não tem nenhum filme salvo na lista!</h3>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
