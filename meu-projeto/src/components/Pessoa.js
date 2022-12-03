function Pessoa({nome, idade, profissao, foto}) {

    return (
        <div>   
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            <img src={foto} alt={nome}></img>
        </div>
    )
}

export default Pessoa;