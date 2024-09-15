import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ongPage.css";
import { IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { BiDonateHeart } from "react-icons/bi";
import ongs from "./ongs.json";  // Importa o arquivo JSON diretamente

function OngPage() {
  const { id } = useParams();
  const [ong, setOng] = useState(null);

  useEffect(() => {
    const selectedOng = ongs.find((ong) => ong.id === parseInt(id));
    if (selectedOng) {
      setOng(selectedOng);
    } else {
      console.error('ONG não encontrada');
      setOng(null);
    }
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
