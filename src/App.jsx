import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Esto es una tienda Ecommerce para Damas, Caballeros y proximamente Niñ@s"} />
    </div>
  );
}
export default App;
