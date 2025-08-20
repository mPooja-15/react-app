import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import bodyBg from "../../../assets/images/body_bg.webp";
import left from "../../../assets/images/left-1.png";
import boryGroupRight from "../../../assets/images/bory_group_right.png";
import iconHome from '../../../assets/images/icon_home.svg';
import userkey from '../../../assets/images/user-key.png';
import usercontact from '../../../assets/images/user-contect.png';
import userhouse from '../../../assets/images/user-house.png';
import document from '../../../assets/images/menu_icon2.png';
import { useTranslation } from 'react-i18next';
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import Login from '../../../Pages/Login/Login';
import Register from '../../../Pages/Register/Register';
import LoginEntry from '../../../Pages/LoginEntry/LoginEntry';

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const getPageTitle = (pathname) => {
    const path = pathname.split('/').pop();
    switch (path) {
      case 'home': return t('');
      case 'personal-area': return t('personal_area_title');
      case 'customers': return t('all_cust');
      case 'property': return t('pro_tab_title');
      case 'agents': return t('');
      case 'setting': return t('settings');
      case 'invoices': return t('invoice_title');
      case 'agreements': return t('mobile_agreements');
      case 'data': return t('data_title');
      case 'report': return t('report_head');
      case 'signin': return t('');
      case 'add-customers': return t('add_cust_form_title');
      case 'agent-management': return t('agentManagement');
      case 'add-agents': return t('addNewAgent');
      case 'edit-agents': return t('addAgent.editAgent');
      case 'change-password': return t('changePassword');
      case 'change-email': return t('changeEmail');
      case 'signature-invoice': return t('signature_invoice');
      case 'subscription-purchase': return t('subscription.title');
      default: return '';
    }
  };
  const { i18n } = useTranslation();
  const title = getPageTitle(location.pathname);

  return (
    <div className="bg-white text-black text-base flex flex-col">
      {location.pathname !== `/${i18n.language}/login-entry` && (
      <Header />
      )}
      {location.pathname !== `/${i18n.language}/login` && location.pathname !== `/${i18n.language}/register` && location.pathname !== `/${i18n.language}/login-entry` && (
        <>
          <div className="d-flex w-100 pt-[64px]">
            <Sidebar />
            <main className="main_content flex-grow-1 position-relative pt-0" >
              <div className="position-relative w-100 overflow-hidden top-0 start-0 z-0">
                <figure className="mb-0 h-100 w-100 position-relative">
                  <img
                    src={bodyBg}
                    className="w-100 object-fit-cover position-relative top-0 start-0"
                    alt="Background"
                    style={{ height: "271px" }}
                  />
                  <span className="position-absolute top-0 end-0">
                    <img src={left} alt="Left BG Icon" className="img-fluid" />
                  </span>
                </figure>
                <div className="right-bg-icon">
                  <img src={boryGroupRight} alt="right bg icon" className="position-fixed" />
                </div>
              </div>
              <div className='position-absolute w-100 top-responsive'>
                <Container fluid="sm" >

                  {title === '' ? (
                    ""
                  ) : (<div className='py-3 d-block d-md-none'>
                    <div className='d-flex gap-4 align-items-center text-white position-relative justify-end'>
                      <span className='fs-2 w-100 d-flex justify-content-center dynamic-margin'>{title}</span>
                      <span><IoChevronBackOutline size={20} /></span>
                    </div>
                    <div></div>
                  </div>)}

                  <Row className="d-flex w-auto mx-auto position-relative flex-wrap z-3 mb-lg-8">
                    {children}
                  </Row>
                </Container>
              </div>
            </main>
          </div>

          <div className='d-block d-lg-none'>
            <Row xs={10} className="d-flex justify-content-between text-center p-2 bg-white fixed-bottom gx-1 border-top border-secondary-subtle">
              <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={iconHome} alt="home icon" className="text-teal" />
                <div className=" fw-semibold lowerside">{t("mobile_home")}</div>
              </Col>
              <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={userkey} alt="home icon" className="text-teal" />
                <div className=" fw-semibold lowerside">{t("interested_signing")}</div>
              </Col>
              <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={userhouse} alt="action icon " />
                <div className=" fw-semibold lowerside">{t("owner_signing")}</div>
              </Col>
              <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={usercontact} alt="action icon " />
                <div className=" fw-semibold lowerside">{t("broker_collaboration")}</div>
              </Col>
              <Col xs={2} className='d-flex flex-column align-items-center justify-content-center'>
                <img src={document} alt="action icon " />
                <div className=" fw-semibold lowerside">{t("mobile_agreements")}</div>
              </Col>
            </Row>
          </div>
        </>
      )}
      {location.pathname == `/${i18n.language}/login` && (
        <Login />
      )}
      {location.pathname == `/${i18n.language}/register` && (
        <Register />
      )}
      {location.pathname == `/${i18n.language}/login-entry` && (
        <LoginEntry />
      )}
    </div>
  )
}

export default Layout;
