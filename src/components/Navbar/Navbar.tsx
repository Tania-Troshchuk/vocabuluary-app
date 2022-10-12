import React from 'react';
import { Link } from '../../types/LinkObj';
import { NavBarLink } from './NavBarLink';
import './Navbar.scss';

export const Navbar = () => {
  const links: Link[] = [
    { to: '/', title: 'Словник' },
    { to: '/add-word', title: 'Додати слово' },
    { to: '/test', title: 'Перевірка' },
    { to: '/tests-history', title: 'Історія перевірок' },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map(link => (
          <li key={link.title} className="navigation__item">
            <NavBarLink to={link.to} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
