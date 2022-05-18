import "./DisplayMovies.css";
import { useState, useEffect } from "react";

let DisplayMovies = () => {
  let [movieArr, setMovieArr] = useState([]);

  let fetchMovies = async () => {
    let res = await fetch(
      "https://react-http-c2111-default-rtdb.firebaseio.com/movies.json"
    );

    let data = await res.json();

    console.log("fetched data=", data);
    let dataArr = [];

    for (let key in data) {
      dataArr.push(data[key]);
    }
    console.log("DataArr=", dataArr);
    setMovieArr(dataArr);
  };

  useEffect(() => {
    fetchMovies();
  }, [movieArr]);

  return (
    <div className="DisplayMovies p-3">
      <div className="text-center">
        <button className="btn btn-primary" onClick={fetchMovies}>
          Fetch Data
        </button>
      </div>
      <hr />

      <div className="text-center ">
        {movieArr.map((item) => {
          return (
            <div className=" bg-white rounded-2 my-3 py-3" key={Math.random()}>
              <div className="display-movie-items py-2 rounded-2 bg-primary text-white">
                <div className="d-flex align-items-center justify-content-between px-3">
                  <span>Movie Name:</span>
                  <span>{item.movieName}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between  px-3">
                  <span>Movie Description:</span>
                  <span>{item.movieDes}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between  px-3">
                  <span>Release Date:</span>
                  <span>{item.ReleaseDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayMovies;
