import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { addTodo } from '../../store/actions/todos';

import logo from '../../icon.png';

const Header = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = input.trim();
    if (text) {
      dispatch(addTodo(text));
    }

    setInput('');
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <Container className="text-center">
      <Row className="align-middle mt-3 mb-4">
        <Col>
          <img className="mr-2" src={logo} alt="Logo" />
          <span>
            <strong>React to-do list</strong>
          </span>
        </Col>
      </Row>
      <Form id="addForm" onSubmit={handleSubmit}>
        <Form.Row className="mb-3">
          <Form.Group as={Col} md={{ span: 6, offset: 3 }}>
            <Form.Control
              id="textInput"
              type="text"
              placeholder="What needs to be done?"
              value={input}
              onChange={handleInput}
              maxLength="100"
              autoComplete="off"
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
};

export default Header;
