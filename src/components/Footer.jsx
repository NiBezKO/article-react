import React from 'react';

const Footer = ({ lastElement }) => {
  return (
    <footer ref={lastElement} className="footer">
      <div className="footerContent">
        <p>Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
