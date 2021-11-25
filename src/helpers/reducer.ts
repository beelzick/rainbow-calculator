interface Payload {
    digit?: string
    operator?: string
}


export interface Action {
    type: string
    payload?: Payload
}

export interface State {
    current: string
    previous: string
    operator: string
    reset?: boolean
}

export const initialState: State = {
    current: '',
    previous: '',
    operator: ''
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

const reducer = (state: State, { type, payload }: Action) => {
    switch (type) {
        case 'ADD_DIGIT':
            if (state.reset) {
                return {
                    ...state,
                    current: payload!.digit,
                    reset: false
                }
            }
            if (payload!.digit === '0' && state.current === '0') return state
            if (payload!.digit === '.' && state.current.includes('.')) return state
            return {
                ...state,
                current: `${state.current}${payload!.digit}`
            }
        case 'CLEAR':
            return initialState
        case 'OPERATOR':
            if (!state.current && !state.previous) return state
            if (!state.previous) {
                return {
                    ...state,
                    operator: payload!.operator,
                    previous: state.current,
                    current: ''
                }
            }
            if (!state.current) {
                return {
                    ...state,
                    operator: payload!.operator
                }
            }
            return {
                ...state,
                previous: result(state),
                operator: payload!.operator,
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



