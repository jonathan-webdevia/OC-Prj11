/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Carousel from "../../components/Carousel";
import Collapse from "../../components/collapse";
import Rate from "../../components/Rate";

function Housing() {
  const params = useParams();
  const [location, setPickedAppart] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/logements.json");
      const picked = res.data.find((res) => res.id === params.id);
      res.data.map(() => setPickedAppart(picked));
      if (picked === undefined) {
        navigate("/Error");
      }
    };
    getData();
  }, []);

  return (
    <React.StrictMode>
      {location && (
        <div className="location">
          <Carousel slides={location.pictures} />
          <div className="infoLocation">
            <div>
              <h1>{location.title}</h1>
              <h2>{location.location}</h2>
              <ul className="tagsContainer">
                {location.tags.map((tag, index) => (
                  <li key={`${tag}-${index}`} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hostContainer">
              <div className="host">
                <p>
                  {`${location.host.name.split(" ")[0]}`}
                  <br />
                  {`${location.host.name.split(" ")[1]}`}
                </p>
                <img src={location.host.picture} alt="l'hôte"></img>
              </div>
              <Rate score={location.rating} />
            </div>
          </div>
          <div className="collapsesContainer">
            <Collapse
              title="Description"
              content={location.description}
              type={"string"}
            />
            <Collapse
              title="Equipements"
              content={location.equipments}
              type={"list"}
            />
          </div>
        </div>
      )}
    </React.StrictMode>
  );
}

export default Housing;
