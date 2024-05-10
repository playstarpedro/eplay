import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit corrupti
      hic deleniti rem aperiam officiis quis impedit, quod ullam laudantium
      vitae atque, eligendi, iste autem dolores distinctio. Maxime, consectetur
      aperiam.
    </Descricao>
  </Card>
)

export default Product
