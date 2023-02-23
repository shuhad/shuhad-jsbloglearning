import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const SingleNews = (props) => {
  return (
    <div className="card m-3 shadow">
      <div className="card-body singleNews">
        <h4>{props.title}</h4> <br />
        <FontAwesomeIcon icon={faClock} size="1x" />
        {props.date}
        <img src={props.picture} alt="" className="img-fluid" />
        <p>{props.details} ...</p>
      </div>
    </div>
  );
};

export default SingleNews;
