import Item from './Item'

function List() {

   return (
        <>
            <h1>Carros mais bonitos</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1974}/>
                <Item marca="Ford" ano_lancamento={1923}/>
                <Item marca="Fiat" ano_lancamento={1893}/>
                <Item />
                <Item />    
            </ul>
        </>
        
    )
}
export default List;