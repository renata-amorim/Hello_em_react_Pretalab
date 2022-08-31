function Lowercase(props) {
   const textoInserido = props.info //textor será inserido quando for usar o componente no app
   const textoTransformado = textoInserido.toLowerCase() //transforma o texto recebido em minusculo

    return (
        <p>{textoTransformado}</p>
    )
}

export default Lowercase