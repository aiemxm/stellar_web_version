import { Link } from "react-router-dom";

const CardHover = (props) => {
  return (
    <div className="card-hover">
      <Link to="/detail" state={props.date}>
        <h3 className="picture-title">{props.title}</h3>
      </Link>
    </div>
  );
};

export default CardHover;
