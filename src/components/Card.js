function Card(props) {
  const {
    name,
    image,
    handleClick,
  } = props;

  return (
    <div className="Card" onClick={handleClick} >
      <img src={image} alt={name} />
      <div className="Name">{name}</div>
    </div>
  );
}

export default Card;
