import { useState } from "react";
import {v4 as uuid} from "uuid"
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id:uuid(),
      equipo: "Data Science",
      foto: "https://github.com/btocarmona2021.png",
      nombre: "Alberto 'Beto'Carmona",
      puesto: "Programador Trainee",
    },
    {
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/TinchoBus.png",
      nombre: "Daniel Martin Bustos",
      puesto: "Programador Trainee",
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador" ,id)
    const nuevosColaboradores=colaboradores.filter((colaborador)=>colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  };

  //actualizar color equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id);
    const equipoActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equipoActualizados);
  };

  //CREAR EQUIPO

  const crearEquipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id:uuid}]) //...quiere decir una copia del arreglo que nos va a traer

  }


  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
