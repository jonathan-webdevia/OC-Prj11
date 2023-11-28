const Banner = (props) => {
  const imgSRC = props.imgSRC;
  const text = props.text;
  return (
    <div className="banner">
      <img src={imgSRC} alt="Banner kasa" />
      {text !== false && <h1>{text}</h1>}
    </div>
  );
};

export default Banner;
