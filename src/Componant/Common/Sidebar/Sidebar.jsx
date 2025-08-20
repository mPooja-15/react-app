import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import iconHome from '../../../assets/images/icon_home.svg';
import iconPaper from '../../../assets/images/icon_paper.svg';
import homeWork from '../../../assets/images/home_work.svg';
import icon5 from '../../../assets/images/icon_5.svg';
import attachMoney from '../../../assets/images/attach_money.svg';
import barChart from '../../../assets/images/bar_chart.svg';
import familyHome from '../../../assets/images/family_home.svg';
import book2 from '../../../assets/images/book_2.svg';
import menuIcon7 from '../../../assets/images/menu_icon7.svg';
import lock from '../../../assets/images/lock.svg';
import doorOpen from '../../../assets/images/door_open.svg';
import actionIcon1 from '../../../assets/images/action_icon1.svg';
import actionIcon2 from '../../../assets/images/action_icon2.svg';
import actionIcon3 from '../../../assets/images/action_icon3.svg';
import userIcon from '../../../assets/images/user_icon.svg';
import userkey from '../../../assets/images/user-key.png';
import usercontact from '../../../assets/images/user-contect.png';
import userhouse from '../../../assets/images/user-house.png';
import "../Sidebar/Sidebar.css";
import { Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sidebar = ({ isToggle }) => {

  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const authToken = localStorage.getItem("authtoken");
//       setIsAuthenticated(!!authToken);
//       if (!authToken) {
//         navigate(`/${i18n.language}/login`);
//       }
//     };
//     handleStorageChange();
//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, [i18n.language, navigate]);


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authtoken");
    navigate(`/${i18n.language}/login`);
  }



  return (
    <>
      <section className={`haeder_right_block w-lg-344 d-flex flex-column justify-content-between ${!isToggle ? 'd-none d-lg-flex ' : ''}`}>
        <div className="haeder_right px-lg-3 pt-md-4 overflow-auto custom-scrollbar">
          <ul className="hdr_right_menu">
            {[{ icon: iconHome, text: t("sitem1"), to: `/${i18n.language}/home` },
            { icon: iconPaper, text: t("sitem2"), to: `/${i18n.language}/agreements` },
            { icon: userIcon, text: t("sitem3"), to: `/${i18n.language}/customers` },
            { icon: homeWork, text: t("sitem4"), to: `/${i18n.language}/property` },
            { icon: icon5, text: t("sitem5"), to: `/${i18n.language}/agents` },
            { icon: attachMoney, text: t("sitem6"), to: `/${i18n.language}/invoices` },
            { icon: barChart, text: t("sitem7"), to: `/${i18n.language}/data` },
            { icon: familyHome, text: t("sitem8"), to: `/${i18n.language}/report` },
            { icon: book2, text: t("sitem9") },
            { icon: menuIcon7, text: t("sitem10"), to: `/${i18n.language}/setting` },
            { icon: lock, text: t("sitem11"), to: `/${i18n.language}/personal-area` },
            { icon: doorOpen, text: t("sitem12") }].map((item, index) => (
              <li key={index} >
                {item.to ? (
                  <Link to={item.to} className={location.pathname === item.to ? 'active-sidebar-tab' : ''}>
                    <span className="menu_icon">
                      <img src={item.icon} alt="icon" />
                    </span>
                    {item.text}
                  </Link>
                ) : item.text === t("sitem12") ? (
                  <Link onClick={handleLogout}>
                    <span className="menu_icon">
                      <img src={item.icon} alt="icon" />
                    </span>
                    {item.text}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div >
          {!isOpen ? (<>
            <div className="cmn_actions px-3 w-100 bg-white">
              <h4> {t("action")}</h4>
              <ul className="cmn_actions_list d-none d-md-flex ">
                {[{ icon: actionIcon1, text: t("action1") },
                { icon: actionIcon2, text: t("action2") },
                { icon: actionIcon3, text: t("action3") }].map((action, index) => (
                  <li key={index}>
                    <Link to={action.to}>
                      <span className="action_icon">
                        <img src={action.icon} alt="icon" />
                      </span>
                      <span className='font'>{action.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>) : (<>
            <div className='pt-md-0 pt-5'>
              <div className='cmn_actions'>
                <h4 className=' text-success fw-bold'>Actions</h4>
                <ul className='cmn_actions_list d-block'>
                  <div className='d-flex align-items-center '>
                    <img src={userkey} alt="action icon " />
                    {/* <p className='fs-5 fw-normal px-2 pt-2 lh-1'>{t("action1")}</p> */}
                  </div>
                  <div className='d-flex align-items-center'>
                    <img src={userhouse} alt="action icon " />
                    <p className='fs-5 fw-normal px-2 pt-3 lh-1'>{t("action2")}</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <img src={usercontact} alt="action icon " />
                    <p className='fs-5 fw-normal px-2 pt-3 lh-1'>{t("action3")}</p>
                  </div>
                </ul>
                <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
                  <Card className="custom-card text-center bg-success bg-opacity-10" >
                    <Card.Body className='!p-0'>
                      <Card.Title className="custom-title">
                        רוצים לנהל הכל במקום אחד?
                      </Card.Title>
                      <Card.Text>
                        רוצים להוסיף עוד סוכנים? לשלוח מסמכים ושהכל יופיע לכם במקום אחד?
                      </Card.Text>
                      <Button className="hdr_btn py-2 px-5 border-0 me-0 rounded-pill">שדרגו את המנוי שלכם</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </>)}
        </div>
      </section>
    </>
  )
}

export default Sidebar;
