import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movies from "../components/Movies";
import Post from "../components/Post/Post";
import { userContext } from "../context/UserContext";
import ButtonReducer from "../components/ButtonReducer";

function Home() {
  const [characters, setCharacters] = useState([]);

  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://thronesapi.com/api/v2/Characters");
      const data = await res.json();

      setCharacters(data);
    }

    fetchData();
  }, []); // No omitir, causa ciclos infinitos
  return (
    <>
      <p>{user.nombre}</p>
      <button
        onClick={() => {
          setUser({ nombre: "Tzuzul", foto: "Mi foto" });
        }}
      >
        Iniciar sesión
      </button>
      <Link to="/home2"> Ir a home2</Link>
      <ButtonReducer />
      <Movies movies={characters} />
      <Post usuario={user} />
    </>
  );
}

export default Home;
