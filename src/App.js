import React from "react";
import ForForm from "./components/ForForm";
import Header from "./components/Header";
import LiIcons from "./components/LiIcons";
import Main from "./components/Main";
import Materials from "./components/Materials";
import Moduls from "./components/Moduls";
import Tab from "./components/Tab";
import Reklama from "./components/Reklama";
import Teacher from "./components/Teacher";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Kamchilik from "./components/Kamchilik";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
            <section className="about-course">
              <Tab title="BU KURS KIM UCHUN ?" />
              <ForForm />
              <Tab title="KURS DAVOMIDA NIMALAR O'RGATILADI ?" />
              <LiIcons />
              <Tab title="MATERIALLARNI O'Z ICHIGA OLADI" />
              <Materials />
              <Tab title="KURS TARKIBI" />
              <Moduls />
              <Reklama />
              <Teacher />
              <Tab title="BIZ HAQIMIZDA O'QUVCHILARNI FIKRI" />
              <Comments />
            </section>
          </Route>
          <Route path="/foundation-speed" component={Kamchilik} />
          <Route path="/foundation" component={Kamchilik} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
