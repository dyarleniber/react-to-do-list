import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const List = ({ todos, toggleTodo, removeTodo }) => (
  <Table hover className="bg-white">
    <tbody>
      {todos.length
        ? todos.map((todo) => {
          const { id, text, completed } = todo;
          return (
            <tr key={`rowTodo${id}`} id={`rowTodo${id}`}>
              <td className="align-middle">
                <Form.Check custom type="checkbox" id={`todo${id}`}>
                  <Form.Check.Input type="checkbox" isValid />
                  {completed
                    ? (
                      <>
                        <Form.Check.Label
                          className="labelTodo text-success"
                          onClick={() => toggleTodo(id)}
                          tabIndex="0"
                          role="button"
                        >
                          {text}
                        </Form.Check.Label>
                        <Form.Control.Feedback className="text-success">
                          <small>
                            &#10003;
                            {' '}
                            Completed
                          </small>
                        </Form.Control.Feedback>
                      </>
                    )
                    : (
                      <>
                        <Form.Check.Label
                          className="labelTodo text-dark"
                          onClick={() => toggleTodo(id)}
                          tabIndex="0"
                          role="button"
                        >
                          {text}
                        </Form.Check.Label>
                        <Form.Control.Feedback className="text-warning">
                          <small>
                            &#33;
                            {' '}
                            Pending
                          </small>
                        </Form.Control.Feedback>
                      </>
                    )}
                </Form.Check>
              </td>
              <td className="text-right">
                <Button
                  className="removeTodoButton"
                  variant="danger"
                  size="sm"
                  type="button"
                  onClick={() => removeTodo(id)}
                >
                  <small>REMOVE</small>
                </Button>
              </td>
            </tr>
          );
        })
        : (
          <div className="bg-light text-center">
            <small>
              No records found
            </small>
          </div>
        )}
    </tbody>
  </Table>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default List;
