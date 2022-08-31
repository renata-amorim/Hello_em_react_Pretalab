import filmes from './dados'

export const Lista = () => {
    return(
        <ul>
            <li>
                {filmes.map(item => {
                    return(
                        <li key={item.id}>{item.nome}</li>
                    )
                })}
            </li>
        </ul>
    )
}