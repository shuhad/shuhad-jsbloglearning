import React from "react";
import { blogList } from "./data";
import SingleNews from "./component/singleNews";
import Navbar from "./component/navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="row">
          {blogList.map((x, i) => {
            return (
              <div className="col-md-4" key={i}>
                <Link to={`details/${x.id}`}>
                  <SingleNews
                    title={x.title}
                    picture={x.cover}
                    details={x.description.substring(0, 100)}
                    date={x.createdAt}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
