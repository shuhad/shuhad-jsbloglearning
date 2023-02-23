import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "./data";

const Details = () => {
  let { id } = useParams();
  const [theData, setTheData] = useState([]);
  useEffect(() => {
    let dt = blogList.filter((x) => x.id == id);
    setTheData(dt[0]);
  }, []);
  return (
    <div>
      {theData ? (
        <div className="card m-3 shadow">
          <div className="card-body singleNews">
            <h4> {theData.title} </h4> <br />
            {theData.createdAt}
            <img src={theData.cover} alt="" className="img-fluid" />
            <p>{theData.description}</p>
          </div>
        </div>
      ) : (
        <div className="container">
          <h5>No data available</h5>
        </div>
      )}
    </div>
  );
};
export default Details;
