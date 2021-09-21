import "../styles/App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  const [favoritas, setFavoritas] = useState([]);

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    //const url =   ` https://api.adviceslip.com/advice${userId}/todos`

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        console.log(json.slip.id);
        console.log(json.slip);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  const handleCompleted = (position) => {
    console.log("adviceaaaaaa", position);
    setFavoritas([...favoritas, position]);
    console.log("favoritas", favoritas);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={refreshPage}>
          {" "}
          <span>Siguiente consejo</span>{" "}
        </button>
      </div>
      <div>
        <h1>
          <p>{advice}</p>
          <button onClick={() => handleCompleted(advice)}>
            Marcar como favorito
          </button>
        </h1>
      </div>
    </div>
  );
};

export default App;
