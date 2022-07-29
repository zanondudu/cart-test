import Intl from 'intl'
import 'intl/locale-data/jsonp/pt-BR'

const currencyFormat = amount => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
    .format(amount / 100)
    .replace(/^(\D+)/, '$1 ')
}

export default currencyFormat
