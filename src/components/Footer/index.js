import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ length }) => (
  <footer className="text-center">
    { !!length && <small>{`TOTAL: ${length}`}</small> }
  </footer>
);

Footer.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Footer;
