import React from 'react';
import { Link } from 'react-router';

import Logo from './logo.svg';

export default function HeaderLogo({ logoIsUnclickable }) {
  const logoComponent = (
    <Logo
      width={83}
      height={30}
    />
  );

  if (logoIsUnclickable) {
    return logoComponent;
  }

  return (
    <Link to="/?noredirect=true">
      {logoComponent}
    </Link>
  );
}
