import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const length = useSelector((state) => state.todos.length);

  return (
    <footer className="text-center">
      { !!length && <small>{`TOTAL: ${length}`}</small> }
    </footer>
  );
};


export default Footer;
