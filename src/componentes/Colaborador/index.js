import "./Colaborador.css"


const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo } = props.datos
    const { colorPrimario, eliminarColaborador } = props
    return <div className="colaborador">
        <img className="eliminar" src="/img/eliminar-usuario2.png" alt="delete" onClick={eliminarColaborador}/>
      
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            <h4>{equipo}</h4>
        </div>
    </div>
}

export default Colaborador