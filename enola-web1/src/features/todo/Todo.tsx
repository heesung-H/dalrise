import { strict } from "assert";
import React, { useCallback, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    addTodo,
    removeTodo,
    doneTodo,
    selectTodos
} from './todoSlice';


function UL<T>({
    items,
    render,
    itemClick,
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
> & {
    items: T[];
    render: (item: T) => React.ReactNode;
    itemClick: (item: T) => void;
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li onClick={() => itemClick(item)} key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

function test2(name: string): string {
    return `username: ${name}`;
}

type User =  {
    name: string;
    id: number
}

function test(uu : User): string {
    return `username: ${uu.name}`;
}

export function Todos() {
    const todos = useAppSelector(selectTodos);
    const dispatch = useAppDispatch();
    const newTodoRef = useRef<HTMLInputElement>(null);

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            dispatch(addTodo(newTodoRef.current.value));
            newTodoRef.current.value = '';
        }
    }, [dispatch]);

    return (
        <div>
            <div>Todos!!</div>
            <UL
                items={todos}
                itemClick={() => {}}
                render={(todo) => (
                    <>
                        {todo.done ? (
                            <b>{todo.text}</b>
                        ) : (
                            <>
                            {todo.text}
                            </>
                        )}                        
                        <button onClick={() => dispatch(doneTodo(todo.id))}>확인 </button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            Remove
                        </button>
                    </>
                )}
            />
            <div>
                <input type="text" ref={newTodoRef} />
                <button onClick={onAddTodo}>Add Todo</button>
            </div>
        </div>
    );
}