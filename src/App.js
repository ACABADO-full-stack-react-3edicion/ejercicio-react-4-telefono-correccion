import { useRef, useState } from "react";
import { Acciones } from "./componentes/Acciones/Acciones";
import { Display } from "./componentes/Display/Display";
import { Info } from "./componentes/Info/Info";
import { Teclado } from "./componentes/Teclado/Teclado";

function App() {
  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const timer = useRef(null);
  const llamar = () => {
    if (!numeroCompleto) {
      return;
    }
    setLlamando(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      colgar();
      console.log("He colgado automáticamente");
    }, 5000);
  };
  const colgar = () => {
    clearTimeout(timer.current);
    setNumero("");
    setLlamando(false);
  };
  const anyadirDigito = (digito) => {
    if (numeroCompleto) {
      return;
    }
    setNumero(numero + digito);
  };
  const borrarUltimoDigito = () => {
    setNumero(numero.slice(0, -1));
  };
  const numeroCompleto = numero.length === 9;
  return (
    <div className="contenedor">
      <Info mostrarMensaje={llamando} />
      <main className="telefono">
        <Teclado
          llamando={llamando}
          anyadirDigito={anyadirDigito}
          borrarUltimoDigito={borrarUltimoDigito}
        />
        <div className="acciones">
          <Display numero={numero} />
          <Acciones
            activo={numeroCompleto}
            llamando={llamando}
            colgar={colgar}
            llamar={llamar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
