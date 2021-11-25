import { Dispatch, MouseEventHandler } from 'react'
import { Action } from './reducer'

interface ButtonContent {
    buttonType: 'operator' | 'digit'
    variant?: 'double'
    operator?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    digit?: string
}

const buttonsContent = (dispatch: Dispatch<Action>): Array<ButtonContent> => {
    return [
        {
            buttonType: 'operator',
            variant: 'double',
            operator: 'AC',
            onClick: () => dispatch({ type: 'CLEAR' })
        },
        {
            buttonType: 'operator',
            operator: 'DEL',
            onClick: () => dispatch({ type: 'DELETE_DIGIT' })
        },
        {
            buttonType: 'operator',
            operator: '÷'
        },
        {
            buttonType: 'digit',
            digit: '1'
        },
        {
            buttonType: 'digit',
            digit: '2'
        },
        {
            buttonType: 'digit',
            digit: '3'
        },
        {
            buttonType: 'operator',
            operator: 'x'
        },
        {
            buttonType: 'digit',
            digit: '4'
        },
        {
            buttonType: 'digit',
            digit: '5'
        },
        {
            buttonType: 'digit',
            digit: '6'
        },
        {
            buttonType: 'operator',
            operator: '+'
        },
        {
            buttonType: 'digit',
            digit: '7'
        },
        {
            buttonType: 'digit',
            digit: '8'
        },
        {
            buttonType: 'digit',
            digit: '9'
        },
        {
            buttonType: 'operator',
            operator: '-'
        },
        {
            buttonType: 'digit',
            digit: '.'
        },
        {
            buttonType: 'digit',
            digit: '0'
        },
        {
            buttonType: 'operator',
            variant: 'double',
            operator: '=',
            onClick: () => dispatch({ type: 'GET_RESULT' })
        }
    ]
}

export default buttonsContent