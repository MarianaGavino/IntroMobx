import React from "react";
import { observer } from "mobx-react";
import store from "./store";


function App() {
  return (
    <div className="App">
      <p>Numero: {store.numero}</p>
      <button onClick={store.inc}>Incrementar</button>
    </div>
    
  );
};

export default observer(App)

// suscribir App para que este escuchando los cambios que suceden en Store
