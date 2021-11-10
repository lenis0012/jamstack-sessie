import React from 'react';
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link href="/mountain">Mountain</Link></li>
        <li><Link href="/beach">Beaches</Link></li>
        <li><Link href="/bird">Birds</Link></li>
        <li><Link href="/food">Food</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
