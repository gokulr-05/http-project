let Dummy = () => {
  let FetchFunc = async () => {
    let res = await fetch(
      "https://react-http-c2111-default-rtdb.firebaseio.com/movies.json"
    );

    let data = await res.json();
    console.log("fetched data=", data);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          FetchFunc();
        }}
      >
        fetch Data
      </button>
    </div>
  );
};

export default Dummy;
