import todoReducer, { TodosSliceState, addTodo 
} from './todoSlice'

describe('counter reducer', () => {
    const initialState: TodosSliceState = {
        todos: [{
            id: 0,
            text: '초기 데이타',
            done: false
        }]
    };
    it('should handle inital state', () => {
        expect(todoReducer(undefined, { type: 'unknown'})).toEqual({
            todos: []
        })
    })

    it('should handle addTodo', () => {
        const actual = todoReducer(initialState, addTodo('TEST'));
        expect(actual.todos[1].text).toEqual('TEST');
    })
})