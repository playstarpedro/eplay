import { Link } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open, close } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categorias">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produtos(s) </span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      {/* nav para dispositivos mobile: */}
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
      {/* nav para dispositivos mobile: */}
    </HeaderBar>
  )
}

export default Header
