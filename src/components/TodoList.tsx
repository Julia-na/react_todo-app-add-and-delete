import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  loadingTodoId: number | null;
  preparedTodos: Todo[] | null;
  loading: boolean;
  errorMessage: string | null;
  handleToggleChange: (todo: Todo) => void;
  deleteTodoFromBase: (todoId: number) => void;
  isSubmitting: boolean;
};
export const TodoList: React.FC<Props> = ({
  loadingTodoId,
  preparedTodos,
  loading,
  errorMessage,
  handleToggleChange,
  deleteTodoFromBase,
  isSubmitting,
}) => {
  return (
    <>
      <section className="todoapp__main" data-cy="TodoList">
        {preparedTodos?.map(todo => (
          <TodoItem
            key={todo.id}
            loadingTodoId={loadingTodoId}
            spinnerLoading={loadingTodoId === todo.id}
            todo={todo}
            loading={loading}
            errorMessage={errorMessage}
            handleToggleChange={handleToggleChange}
            deleteTodoFromBase={deleteTodoFromBase}
            isSubmitting={isSubmitting}
          />
        ))}
      </section>
    </>
  );
};
