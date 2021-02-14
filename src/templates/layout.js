import React from 'react';

// import './bulma.css'

export default function Layout({ children }) {

  return (
    <html lang="en">
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Note Sharing</title>
        </head>
        <body>
            {children}
        </body>
    </html>
  );
}
