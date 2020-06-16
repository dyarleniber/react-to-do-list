import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { toggleTodo, removeTodo } from '../../store/actions/todos';

const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos.length) {
    return (
      <div className="bg-light text-center">
        <small>
          No records found
        </small>
      </div>
    );
  }

  return (
    <Table hover className="bg-white">
      <tbody>
        { todos.map((todo) => {
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
                          onClick={() => dispatch(toggleTodo(id))}
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
                          onClick={() => dispatch(toggleTodo(id))}
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
                  onClick={() => dispatch(removeTodo(id))}
                >
                  <small>REMOVE</small>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default List;
