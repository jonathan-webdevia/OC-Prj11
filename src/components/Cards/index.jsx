import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const data = props.data;
  const index = props.index;
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
};

export default Card;
