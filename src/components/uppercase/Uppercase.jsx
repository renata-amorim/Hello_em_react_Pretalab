function Uppercase(props) {
    const textoDigitado = props.texto
    const textoMudado = textoDigitado.toUpperCase()

    return (
        <p>{textoMudado}</p>
    )
}

export default Uppercase