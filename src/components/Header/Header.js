import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

import NavigationAccount from './NavigationAccount/NavigationAccount';
import NavigationMain from './NavigationMain/NavigationMain';
import NavigationSlaider from './NavigationSlaider/NavigationSlaider';

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
        <div className='header__logo'></div>
        {loggedIn ? <NavigationAccount stateSlaider={setSlaider} btnProfile={handleAccountBtn} /> : <NavigationMain />}
      </div>
    </section>
  );
}

export default Header;