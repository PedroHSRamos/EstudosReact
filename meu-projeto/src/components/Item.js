import PropTypes from 'prop-types'

/* prop-types ja vem junto com o react */

function Item({marca, ano_lancamento}) {

    return (
        <div>
            <li>
                {marca} - {ano_lancamento}
            </li>

        </div>
    )
}

/* propTypes eu uso para definir se minha variavel é string ou number */

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

/* default.Props da um valor base para tudo */

Item.defaultProps = {
    marca: 'Faltou marca',
    ano_lancamento: 0
}

export default Item;