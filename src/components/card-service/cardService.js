import "./cardService.scss";

function CardService({orgName, subName, duration}) {
  return (
    <div className="cardService">
      <div className="card-head">
        <div className="card-title">
            <h3>{orgName}</h3> <span>{subName}</span>
            <div className="duration">{duration}</div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature.
        </div>
      </div>
    </div>
  );
}

export default CardService;
