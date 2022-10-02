import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string,
  title: string,
};

export const NavBarLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => classNames(
        'navigation__link',
        { 'navigation__link--active': isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
