import Movies from "./Movies";
let MoviesContainer = () => {
  let httpReq = async (itemObj) => {
    let response = await fetch(
      "https://react-http-c2111-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(itemObj),
        headers: {
          contentType: "application/json",
        },
      }
    );

    let data = await response.json();

    console.log("data=", data);
  };

  let fetchHandler = (itemObj) => {
    console.log("In Movies Container:moviesArr=", itemObj);

    httpReq(itemObj);
  };

  return (
    <div>
      <Movies fetchHandler={fetchHandler} />
    </div>
  );
};

export default MoviesContainer;
