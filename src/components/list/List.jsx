import serie from './dados'

export const List = () => {
    return(
        <>
        {
            serie.map(item =>{
                return(
                    <> 
                    <h3 key={item.id}>{item.nome}</h3>
                    <img src={item.capa} />
                    </>
                )
            })
        }
        </>
    )

}