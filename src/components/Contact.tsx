import React from 'react';

export default function Footer() {
  return (


    <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out hover:scale-105">
      <a href="http://facebook.com" target="_blank" rel="nofollow noopener noreferrer">
        <img 
          src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" 
          alt="Facebook logo" 
        />
      </a>

      <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer">
        <img 
          src="https://img.icons8.com/?size=100&id=BU9jRrPRo6Lf&format=png&color=000000" 
          alt="Twitter logo" 
        />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="nofollow noopener noreferrer">
        <img 
          src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" 
          alt="Instagram logo" 
        />
      </a>

      <a href="https://mail.google.com/" target="_blank" rel="nofollow noopener noreferrer">
        <img 
          src="https://img.icons8.com/?size=100&id=25581&format=png&color=000000" 
          alt="Mail logo" 
        />
      </a>
    </div>
  );
}

