import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ length }) => (
  <small>
    TOTAL:
    {' '}
    {length}
  </small>
);

Footer.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Footer;
