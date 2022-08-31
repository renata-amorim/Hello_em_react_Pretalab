function Relogio(){
    const horario = new Date().toLocaleTimeString()
    return(
        <p>{horario}</p>
    )
}

export default Relogio 