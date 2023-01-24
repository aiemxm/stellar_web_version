import {Link} from "react-router-dom";

const CardHover = (props) => {
    return (
        <div className="card-hover">
            <Link to="/detail" onClick={() => console.log(props.obj.date)} state={props.date}>
                <h3 className="picture-title">
                    {props.title}
                </h3>

            </Link>
        </div>
    );
};

export default CardHover;