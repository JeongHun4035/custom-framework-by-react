import './Header.css';
import { useState, useEffect } from 'react'
import { TbMenu2 } from 'react-icons/tb';
import { CgMenuMotion } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import i18n from './locales/i18n';
import CustomSelect from '@/components/CustomSelect';
import { IOption, ICustomStyle } from "@/types"
import { GrLanguage } from "react-icons/gr";
import { CgSun } from "react-icons/cg";
import { CiDark } from "react-icons/ci";
import { useTheme } from './contexts/ThemeContext';

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

// 테마 선택
const ThemeItem = () => {
  const { themeStatus, toggleTheme } = useTheme();

  return (
    <div className='header-item-icon' onClick={toggleTheme}>
      {themeStatus === 'CgSun' ? <CgSun /> : <CiDark />}
    </div>
  );
}

// 언어 선택
const LanguageItem = () => {
  const currentTheme = useTheme().themeStatus
  const defaultSelectStyle: ICustomStyle = {
    width: '80px',
    border: 'none',
    background: 'rgb(102, 178, 255)',
    color: 'rgb(255 255 255)',
    height: '33px'
  }
  const [selectStyle, setSelectStyle] = useState<ICustomStyle>(defaultSelectStyle)
  useEffect(() => {
    if (currentTheme === 'CgSun') {
      setSelectStyle(defaultSelectStyle);
    } else {
      setSelectStyle({
        width: '80px',
        border: 'none',
        background: '#333', 
        color: '#fff', 
        height: '33px'
      });
    }
  }, [currentTheme])
  
  const langOptions: IOption[] = [
    {
      value: 'ko',
      label: '한국어'
    },
    {
      value: 'en',
      label: 'English'
    },
  ]
  const changeLanguage = () => {
    if (i18n.language === 'ko') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('ko')
    }
  }

  return (
    <>
      <div className='header-item-icon'>
        <GrLanguage />
        <CustomSelect customStyle={selectStyle} options={langOptions} onSelectChange={changeLanguage} />
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
      </div>
      <div className="header-right">
        <ThemeItem />
        <LanguageItem />
      </div>
    </div>
  );
};

export default Header;
