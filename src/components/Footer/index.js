import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Footer = ({ length }) => (
  <footer className="text-center">
    { !!length && <small>{`TOTAL: ${length}`}</small> }
  </footer>
);

Footer.propTypes = {
  length: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  length: state.todos.length,
});

export default connect(mapStateToProps)(Footer);
