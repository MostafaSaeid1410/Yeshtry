import React, { useState } from 'react';
import {
  addidas,
  cartIcon,
  loginIcon,
  wishListIcon,
} from '../../../icons/header-icons';
import SearchComponent from './components/SearchComponent';
import Cta from './components/Cta';
import Overlay from '../../overLay/Overlay';

function CtaContainer() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setShowModal((prevState) => !prevState);
    console.log('show');
  };
  return (
    <div className='background-color-white'>
      <div className='container cta-container'>
        <div className='cta flex-center'>
          <SearchComponent />
          <div className='logo'>{addidas}</div>
          <div className='cta-btns-list flex-center'>
            <ul className='cta-btns-ul flex-center'>
              <div onClick={handleClick}>
                <Cta icon={cartIcon} onClick={handleClick}>
                  Cart
                </Cta>
              </div>
              {showModal && <Overlay onClose={handleClick} />}
              <div>
                {' '}
                <Cta icon={wishListIcon}>Wishlist</Cta>
              </div>
              <div>
                <Cta icon={loginIcon}>Login</Cta>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaContainer;
