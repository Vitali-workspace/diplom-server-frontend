import { useNavigate } from 'react-router-dom';

import './NavigationMain.css';

function NavigationMain() {

  const navigation = useNavigate();

  function handleRegistration() {
    navigation('/signup');
  }

  function handleLogin() {
    navigation('/signin');
  }

  return (
    <nav className='nav-main'>
      <button
        className='nav-main__btn nav-main__btn-registration'
        onClick={handleRegistration}>Регистрация</button>
      <button
        className='nav-main__btn nav-main__btn-login'
        onClick={handleLogin}>Войти</button>
    </nav>
  );
}

export default NavigationMain;