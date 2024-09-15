import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./categoriesPage.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Banner from "../../components/banner";



function CategoriesPage() {
  const { category } = useParams();
  const [ongs, setOngs] = useState([]);

  // Função para carregar dados de ONGs a partir de um arquivo JSON
  const fetchOngs = async () => {
    try {
      const response = await fetch("https://linkedongs.github.io/linkedongs/data/ongs.json");
      if (!response.ok) {
        throw new Error(`Erro ao carregar dados das ONGs: ${response.statusText}`);
      }
      const data = await response.json();
      setOngs(data);
    } catch (error) {
      console.error("Erro ao carregar dados das ONGs:", error);
    }
  };

  useEffect(() => {
    fetchOngs();
  }, []);

  // Filtrar as ONGs com base na categoria selecionada
  const filteredOngs = ongs.filter((ong) => ong.category === category);

  return (
    <div className="categories-body">
      <div className="categories-container">
        {filteredOngs.length > 0 ? (
          filteredOngs.map((ong) => (
            <div key={ong.id} className="ong-summary">
              <div>
              <h2>{ong.name}</h2>
              <p>{ong.summary}</p>
              </div>
              <Link to={`/ong/${ong.id}`} className="ong-page-link">Ver página <FaLongArrowAltRight /></Link>
            </div>
          ))
        ) : (
          <p className="categories-p-notfound">Nenhuma ONG encontrada para a categoria {category}</p>
        )}
      </div>
      <div className="banner-container">
      <Banner
      image={"/images/sosVida.png"}
      link={"https://www.sosvidaanimal.org.br"}/>
      </div>
    </div>
  );
}

export default CategoriesPage;
