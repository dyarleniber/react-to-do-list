import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../../icon.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const { addTodo } = this.props;
    const text = input.trim();
    if (text) {
      addTodo(text);
    }
    this.setState({ input: '' });
  }

  handleInput = (event) => {
    const { value: input } = event.target;
    this.setState({ input });
  }

  render() {
    const { input } = this.state;
    return (
      <Container className="text-center">
        <Row className="align-middle mt-3 mb-4">
          <Col>
            <img className="mr-2" src={logo} alt="Logo" />
            <span>
              <strong>To-Do List</strong>
            </span>
          </Col>
        </Row>
        <Form id="addForm" onSubmit={this.handleSubmit}>
          <Form.Row className="mb-3">
            <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="formNewTodo">
              <Form.Control
                id="textInput"
                type="text"
                placeholder="What needs to be done?"
                value={input}
                onChange={this.handleInput}
                maxLength="100"
                autocomplete="off"
              />
            </Form.Group>
            <Col md={{ span: 6, offset: 3 }}>
              <Button
                id="addButton"
                className="float-right"
                variant="primary"
                size="sm"
                type="submit"
              >
                <small>
                  &#43;
                  {' '}
                  ADD
                </small>
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
