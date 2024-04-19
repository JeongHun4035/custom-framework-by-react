import './Header.css';
import { useState } from 'react'
import { TbMenu2 } from 'react-icons/tb';
import { CgMenuMotion } from 'react-icons/cg';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import i18n from './locales/i18n';


// 메뉴 아이콘
const MenuIcon = () => {
  const [menuStatus, setMenuStatus] = useState('TbMenu2')
  const clickEvent = () => {
    if (menuStatus === 'TbMenu2') {
      setMenuStatus('CgMenuMotion')
    } else {
      setMenuStatus('TbMenu2')
    }
  }
  const IconComponent = menuStatus === 'TbMenu2' ? TbMenu2 : CgMenuMotion;
  
  return (
    <div className="header-menu-icon" onClick={() => clickEvent()}>
      <IconComponent /> 
    </div>
  )
}

// 헤더 우측영역 아이콘
const HeaderOptions = () => {
  const changeLanguage = () => {
    if (i18n.language === 'ko') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('ko')
    }
  }
  return (
    <>
      <div className='header-item-icon' onClick={() => changeLanguage()}>
        <FaLanguage />
      </div>
    </>
  )
}

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon /> 
        <div>
          <h1>{ t('header.title')}</h1>
        </div>
        <div>
          <label>sss</label>
        </div>
        <div>
          <label>sss</label>
        </div>
      </div>
      <div className="header-right">
        <HeaderOptions />
      </div>
    </div>
  );
};

export default Header;
