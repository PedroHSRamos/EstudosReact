import { useState } from 'react' /* use state é usado para capturar dados da pagina */
 
function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuario $(name) foi cadastrado com a senha $(password)`)    
    }

    const [name, setName] = useState()  /* criamos uma constante que recebera o valor digitado pelo usuario
    e o guardará no banco de dados */
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>

                <div>
                <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite sua senha" 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>

            </form>
        </div>
    )
}

export default Form