import React from 'react';

// import '../bootstrap.min.css';

export default function Layout({ children }) {

  return (
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
        </head>
        <body style={{padding: '0px'}}>
            {children}
        </body>
    </html>
  );
}
