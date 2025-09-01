import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/images/logo.svg';
import userIcon from '../../../assets/images/user_icon.svg';
import '../Header/header.css'
import { FiAlignJustify } from "react-icons/fi";
import OffCanvas from '../OffCanvas/OffCanvas';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from "i18next";

const Header = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authtoken");
    navigate(`/${i18n.language}/login`);
  };

  const isAuthPage = [
    `/${i18n.language}/login`,
    `/${i18n.language}/login-entry`,
    `/${i18n.language}/register`
  ].includes(location.pathname);

  if (isOpen && isAuthPage) {
    return null;
  }

  return (
    <header className="header_main z-[1000] ">
      <section className="haeder_top">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <a className="logo_main" href="/">
              <img src={logo} width="158px" height="30px" alt="logo" />
            </a>
          </div>
          <div className='col-auto'>
            {
              isOpen ? (<>
                <OffCanvas
                  setToggle={setToggle}
                  buttonText={<FiAlignJustify className='text-teal' style={{ width: '34px', height: '34px' }} />}
                  titleContent={
                    <div className="col-auto">
                      <ul className="hdt_top_menu  align-items-center gap-4">
                        <li className="user_dd dropdown">
                          <a href="/" class="dropdown-toggle" type="button" id="dd_user" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className=' flex justify-center'><img src={userIcon} alt="gfdgdg" />{t("starter")} </div>
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dd_user">
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                          </ul>
                        </li>
                        <li className="hdr_btn">
                          {t("update")}
                        </li>
                      </ul>
                    </div>}
                  bodyContent={<div className="custom-scrollbar overflow-y-auto overflow-x-hidden">
                    <Sidebar isToggle={toggle} />
                  </div>}
                />
              </>) : (<>
                <div className="col-auto">
                  <ul className="hdt_top_menu d-flex align-items-center gap-4">
                    {location.pathname !== `/${i18n.language}/login` && location.pathname !== `/${i18n.language}/register` && (
                      <li className="user_dd dropdown">
                        <a href="/" class="dropdown-toggle" type="button" id="dd_user" data-bs-toggle="dropdown" aria-expanded="false">
                          <div className=' flex justify-center'><img src={userIcon} alt="gfdgdg" />{t("starter")} </div>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dd_user">
                          <li><a className="dropdown-item" href="/">Profile</a></li>
                          <li><a className="dropdown-item" href="/">Settings</a></li>
                          <li ><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                        </ul>
                      </li>
                    )}
                    {location.pathname !== `/${i18n.language}/login` && location.pathname !== `/${i18n.language}/register` ? (
                      <li className="hdr_btn">
                        {t("update")}
                      </li>
                    ) : (
                      <li className="hdr_btn cursor-pointer" onClick={() => navigate(`/${i18n.language}/login-entry`)}>
                        {t("header_entry")}
                      </li>
                    )}
                  </ul>
                </div>
              </>)
            }
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
