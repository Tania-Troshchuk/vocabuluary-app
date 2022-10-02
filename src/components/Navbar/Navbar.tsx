import React from 'react';
import { NavBarLink } from '../NavBarLink';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavBarLink to="/" title="Словник" />
        </li>

        <li className="navigation__item">
          <NavBarLink to="/add-word" title="Додати слово" />
        </li>

        <li className="navigation__item">
          <NavBarLink to="/test" title="Перевірка" />
        </li>

        <li className="navigation__item">
          <NavBarLink to="/tests-history" title="Історія перевірок" />
        </li>
      </ul>
    </nav>
  );
};
