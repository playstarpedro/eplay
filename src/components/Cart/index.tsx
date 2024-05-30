import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button className="close-button" type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button className="close-button" type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogos no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
