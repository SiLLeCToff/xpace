import React from "react";
import "./MainPage.css";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainPage = () => {
  return (
    //============================   BackGround  Часть END  ===================================>
    <div className="background">
      {/*  ============================   Header  Часть END  ===================================>   */}
      <header className="header">
        <div className="divLogo">
          <img src={logo} alt="Логотип" className="img-fluid imageLogo" />
        </div>
        <Navbar
          expand="lg"
          variant="dark"
          className="bg-body-tertiary textColor"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  className="text-nowrap mr-4 px-0 navLink text-light"
                  href="#home"
                >
                  Главная
                </Nav.Link>
                <Nav.Link
                  className="text-nowrap mr-4 navLink px-0 text-light"
                  href="#techs"
                >
                  Технология
                </Nav.Link>
                <Nav.Link
                  className="text-nowrap mr-4 navLink px-0 text-light"
                  href="#schedule"
                >
                  График полетов
                </Nav.Link>
                <Nav.Link
                  className="text-nowrap mr-4 navLink px-0 text-light"
                  href="#Guarantees"
                >
                  Гарантии
                </Nav.Link>
                <Nav.Link
                  className="text-nowrap mr-4 navLink px-0 text-light"
                  href="#about"
                >
                  О компании
                </Nav.Link>
                <Nav.Link
                  className="text-nowrap mr-4 navLink px-0 text-light"
                  href="#contacts"
                >
                  Контакты
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/*  ============================   Header  Часть END  ===================================>   */}

      {/*  ============================   Main  Часть START  ===================================>   */}
      <main className="main">
        {/*  ============================   Left Block START  ===================================>   */}
        <div className="leftBlock">
          <button className="buttonStart text-nowrap">
            Начать путешествие
          </button>
        </div>
        <div className="midleBlock"></div>
        {/*  ============================   Left Block END  ===================================>   */}

        {/*  ============================   Right Block END  ===================================>   */}
        <div className="rightBlock">
          <div className="gridCustom">
            <div className="text-styles block1">
              <span>мы</span>
              <h1>1</h1>
              <span>на рынке</span>
            </div>
            <div className="text-styles block2">
              <span>гарантируем</span>
              <h1>50%</h1>
              <span>безопасности</span>
            </div>
            <div className="text-styles block3">
              <span>календарик за</span>
              <h1>2001</h1>
              <span>в подарок</span>
            </div>
            <div className="text-styles block4">
              <span>путешествие</span>
              <h1>597</h1>
              <span>дней</span>
            </div>
          </div>
        </div>
        {/*  ============================   Left Block END  ===================================>   */}
      </main>
      {/*  ============================   Main  Часть END  ===================================>   */}
    </div>
    //============================   BackGround  Часть END  ===================================>
  );
};

export default MainPage;
