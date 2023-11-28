import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import bannerIMG from "../../assets/media/bannerhome.png";
import datas from "../../assets/data/data";

function Home() {
  return (
    <div className="home">
      <Banner imgSRC={bannerIMG} text="Chez vous, partout et ailleurs" />
      <div className="cardContainer">
        {datas.map((data, index) => {
          return (
            <Link
              key={`${data.id}-${index}`}
              to={`/Housing/${data.id}`}
              className="card"
            >
              <h2>{data.title}</h2>
              <img src={data.cover} alt="location"></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
