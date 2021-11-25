export type Action =
    | { type: 'ADD_DIGIT', payload: { digit: string } }
    | { type: 'CLEAR' }
    | { type: 'OPERATOR', payload: { operator: string } }
    | { type: 'GET_RESULT' }
    | { type: 'DELETE_DIGIT' }

export interface State {
    current: string
    previous: string
    operator: string
    reset?: boolean
}

export const initialState: State = {
    current: '',
    previous: '',
    operator: '',
}

const result = ({ current, previous, operator }: State) => {
    const previousFloat = parseFloat(previous)
    const currentFloat = parseFloat(current)
    if (!current || !previous) return ''
    let returnedResult: number | string
    switch (operator) {
        case '+':
            returnedResult = previousFloat + currentFloat
            break
        case '-':
            returnedResult = previousFloat - currentFloat
            break
        case '÷':
            returnedResult = previousFloat / currentFloat
            break
        case 'x':
            returnedResult = previousFloat * currentFloat
            break
        default:
            returnedResult = ''
    }
    return returnedResult.toString()
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD_DIGIT':
            if (state.reset) {
                return {
                    ...state,
                    current: action.payload!.digit,
                    reset: false
                }
            }
            if (action.payload!.digit === '0' && state.current === '0') return state
            if (action.payload!.digit === '.' && state.current.includes('.')) return state
            return {
                ...state,
                current: `${state.current}${action.payload!.digit}`
            }
        case 'CLEAR':
            return initialState
        case 'OPERATOR':
            if (!state.current && !state.previous) return state
            if (!state.previous) {
                return {
                    ...state,
                    operator: action.payload!.operator,
                    previous: state.current,
                    current: ''
                }
            }
            if (!state.current) {
                return {
                    ...state,
                    operator: action.payload!.operator
                }
            }
            return {
                ...state,
                previous: result(state),
                operator: action.payload!.operator,
                current: ''
            }
        case 'GET_RESULT':
            if (!state.current || !state.previous || !state.operator) return state
            return {
                ...state,
                operator: '',
                previous: '',
                current: result(state),
                reset: true
            }
        case 'DELETE_DIGIT':
            if (state.reset) {
                return {
                    ...state,
                    reset: false,
                    current: ''
                }
            }
            if (!state.current) return state
            return {
                ...state,
                current: state.current.slice(0, -1)
            }
        default:
            return state
    }
}

export default reducer



