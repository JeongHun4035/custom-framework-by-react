import './Header.css';
import { useState } from 'react'
import { TbMenu2 } from 'react-icons/tb';
import { CgMenuMotion } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import i18n from './locales/i18n';
import CustomSelect from '@/components/CustomSelect';
import { IOption, ICustomStyle } from "@/types"
import { GrLanguage } from "react-icons/gr";

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
const HeaderItems = () => {
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

  const selectStyle: ICustomStyle = {
    width: '80px',
    border: 'none',
    background: 'rgb(102, 178, 255)',
    color: 'rgb(255 255 255)',
    height: '33px'
  }
  
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
        <HeaderItems />
      </div>
    </div>
  );
};

export default Header;
