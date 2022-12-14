import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import './Header.css';

import NavigationAccount from '../Navigation/NavigationAccount/NavigationAccount';
import NavigationMain from '../Navigation/NavigationMain/NavigationMain';
import NavigationSlaider from '../Navigation/NavigationSlaider/NavigationSlaider';

function Header({ loggedIn, color }) {

  const [openSlaider, setSlaider] = useState(false);

  const navigation = useNavigate();

  function handleAccountBtn() {
    navigation('/profile');
  }

  return (
    <section className={`header header_color_${color}`}>
      {openSlaider && <NavigationSlaider stateSlaider={setSlaider} btnProfile={handleAccountBtn} />}
      <div className='header__container'>
        <NavLink to='/'>
          <div className='header__logo'></div>
        </NavLink>
        {loggedIn ? <NavigationAccount stateSlaider={setSlaider} btnProfile={handleAccountBtn} /> : <NavigationMain />}
      </div>
    </section>
  );
}

export default Header;