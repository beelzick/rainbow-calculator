import Layout from './components/Layout/Layout'
import Body from './components/Calculator/Body/Body'
import Screen from './components/Calculator/Screen/Screen'
import Buttons from './components/Calculator/Buttons/Buttons'
import { createContext, Dispatch, SetStateAction, useReducer, useState } from 'react'
import reducer, { State, initialState, Action } from './helpers/reducer'

export interface AppContextType {
    state: State
    dispatch: Dispatch<Action>
}

interface DarkContextType {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => null
})

export const DarkContext = createContext<DarkContextType>({
    isDark: false,
    setIsDark: () => { }
})

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isDark, setIsDark] = useState<boolean>(false)
    return (
        <DarkContext.Provider value={{ isDark, setIsDark }}>
            <Layout>
                <AppContext.Provider value={{ state, dispatch }}>
                    <Body>
                        <Screen />
                        <Buttons />
                    </Body>
                </AppContext.Provider>
            </Layout>
        </DarkContext.Provider>
    )
}

export default App