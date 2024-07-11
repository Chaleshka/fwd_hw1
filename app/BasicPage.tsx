import React, { ReactNode } from 'react';

interface BasicPageProps {
  children: ReactNode;
  title: string;
  description: string;
}
//title, favicon, author and description
const BasicPage: React.FC<BasicPageProps> = ({
  children,
  title,
  description
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description}></meta>
        <meta name="author" content="Andrew Pavlov" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://test.chaleshka.ru/av.jpg"
        />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default BasicPage;
