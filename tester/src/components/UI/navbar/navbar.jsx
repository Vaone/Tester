import React from "react";
import {Link} from 'react-router-dom';
import cl from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <Link to="/createTests" className={cl.navbarLink}>
        Создать тест
      </Link>
      <Link to="/createQuestions" className={cl.navbarLink}>
        Создать вопросник
      </Link>
      <Link to="/SelectTest" className={cl.navbarLink}>
        Пройти тест
      </Link>
      <Link to="/pathQuestions" className={cl.navbarLink}>
        Пройти Вопросник 
      </Link>
      <Link to="/Exam" className={cl.navbarLink}>
        Экзамен
      </Link>
    </div>
  );
};

export default Navbar;
