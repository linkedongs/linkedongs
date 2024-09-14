import React from "react";
import { Link } from "react-router-dom";
import "./feed.css";
import posts from "./posts.json";
import Banner from "../../components/banner";

function Feed() {
  return (
    <div className="feed">
      <Banner
        image="images/rsimage.jpeg"
        link="https://sosenchentes.rs.gov.br/inicial"
      />
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <h1 className="ongName">
            <Link to={`/ong/${post.id}`}>{post.name}</Link>
          </h1>
          <h2 className="post-title">{post.titulo}</h2>
          <p className="post-category">
            <Link to={`/categories/${post.categoria}`}>{post.categoria}</Link>
          </p>
          <p className="post-description">{post.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
