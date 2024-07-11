import React from 'react';

interface NavProps {
  navs: Map<string, string>;
}

const Navigation: React.FC<NavProps> = ({ navs }) => {
  return (
    <header id="main">
      <h1>Andrew&apos;s personal page</h1>
      <nav>
        <a href="#main">Home</a>
        {Array.from(navs).map(([key, value]) => (
          <a key={key} href={value}>
            {key}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
