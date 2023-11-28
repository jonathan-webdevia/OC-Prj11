/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/banner";
import bannerIMG from "../../assets/media/bannerhome.png";
import axios from "axios";

function Home() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/logements.json");
      setDatas(response.data);
      console.log(datas);
    };
    getData();
  }, []);
  return (
    <React.StrictMode>
      {datas && (
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
      )}
    </React.StrictMode>
  );
}

export default Home;
