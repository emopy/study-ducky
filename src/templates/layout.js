import React from 'react';

export default function Layout({ children }) {

  return (
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            {children}
        </body>
    </html>
  );
}
