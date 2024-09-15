import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ongPage.css";
import { IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { BiDonateHeart } from "react-icons/bi";

function OngPage() {
  const { id } = useParams();
  const [ong, setOng] = useState(null);

  const fetchOng = async () => {
    try {
      const response = await fetch("https://linkedongs.github.io/linkedongs/data/ongs.json");
      if (!response.ok) {
        throw new Error(`Erro ao carregar dados das ONGs: ${response.statusText}`);
      }
      const data = await response.json();
      const selectedOng = data.find((ong) => ong.id === parseInt(id));
      
      if (!selectedOng) {
        throw new Error('ONG não encontrada');
      }

      setOng(selectedOng);
    } catch (error) {
      console.error("Erro ao carregar dados da ONG:", error);
      setOng(null); // Exibe mensagem de erro
    }
  };

  useEffect(() => {
    fetchOng();
  }, [id]);

  if (!ong) {
    return <div>ONG não encontrada ou erro ao carregar os dados.</div>;
  }

  return (
    <div className="ong-page">
      <h1>{ong.name}</h1>
      <p>{ong.summary}</p>
      {ong.details && <p>{ong.details}</p>}
      <div className="ong-contact">
        {ong.contact && (
          <div>
            <h2>Contato <IoMdMail /></h2>
            <p>{ong.contact}</p>
          </div>
        )}
        {ong.website && (
          <div>
            <h2>Website <CgWebsite /></h2>
            <a href={ong.website} target="_blank" rel="noopener noreferrer">
              Visite nosso site
            </a>
          </div>
        )}
        {ong.donationLink && (
          <div>
            <h2>Doações <BiDonateHeart /></h2>
            <a href={ong.donationLink} target="_blank" rel="noopener noreferrer">
              Faça uma doação
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default OngPage;
