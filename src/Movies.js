import { useState, useEffect } from "react";
import "./Movies.css";
let Movies = ({ fetchHandler }) => {
  //   let [moviesArr, setMoviesArr] = useState([]);
  let [movieName, setMovieName] = useState("");
  let [movieDes, setMovieDes] = useState("");
  let [ReleaseDate, setReleaseDate] = useState("");

  //   useEffect(() => {
  //     console.log("moviesArr=", moviesArr);
  //     fetchHandler(moviesArr);
  //   }, [moviesArr]);

  let NameChangeHandler = (e) => {
    setMovieName(e.target.value);
    // console.log("movie name=", e.target.value);
  };

  let DescriptionChangeHandler = (e) => {
    setMovieDes(e.target.value);
    // console.log("movie description=", e.target.value);
  };
  let releaseDateChangeHandler = (e) => {
    setReleaseDate(e.target.value);
    // console.log("movie release date=", e.target.value);
  };

  let formSubmitHandler = (e) => {
    e.preventDefault();
    let obj = { movieName, movieDes, ReleaseDate };
    console.log("obj=", obj);
    fetchHandler(obj);

    // setMoviesArr((prevArr) => {
    //   return [...prevArr, obj];
    // });

    setMovieName("");
    setMovieDes("");
    setReleaseDate("");
  };

  return (
    <div className="movie-bucket-1">
      <form className="movie-form p-3" onSubmit={formSubmitHandler}>
        <label htmlFor="title" className="text-capitalize ">
          movie name:
        </label>
        <input
          onChange={(e) => {
            NameChangeHandler(e);
          }}
          value={movieName}
          type="text"
          className="movie-title mb-3 form-control"
        />
        <label htmlFor="title" className="text-capitalize ">
          movie description:
        </label>
        <textarea
          value={movieDes}
          onChange={(e) => {
            DescriptionChangeHandler(e);
          }}
          rows="3"
          type="text"
          className="movie-description mb-3 form-control"
        />
        <label htmlFor="title" className="text-capitalize ">
          release date:
        </label>
        <input
          value={ReleaseDate}
          onChange={(e) => {
            releaseDateChangeHandler(e);
          }}
          type="date"
          className="movie-releaseDate mb-3 form-control"
        />
        <div className="text-center my-3">
          <button className=" text-capitalize px-2 py-1 btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Movies;
