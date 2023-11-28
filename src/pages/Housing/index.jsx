import { useParams } from "react-router-dom";
import datas from "../../assets/data/data";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/collapse";
import Rate from "../../components/Rate";

function Housing() {
  const params = useParams();
  const location = datas.find((data) => data.id === params.id);

  return (
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
  );
}

export default Housing;
