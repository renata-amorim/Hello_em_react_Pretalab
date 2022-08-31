function Formulario() {
    function handleClick() {
        console.log('estou clicando')
    }
    function handleInput(event) {
        console.log(event.target.value)

    }
    return(
        <>
        <input onChange={handleInput} placeholder='Digite seu nome' />
        <button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default Formulario