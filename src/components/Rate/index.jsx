const Rate = (props) => {
  const score = props.score;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="rate">
      {stars.map((star, index) => {
        // eslint-disable-next-line no-unused-expressions
        return score >= star ? (
          <i className="bi bi-star-fill" key={index}></i>
        ) : (
          <i className="bi bi-star-fill unfill" key={index}></i>
        );
      })}
    </div>
  );
};

export default Rate;
