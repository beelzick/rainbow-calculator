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

interface ThemeContextType {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
    setTheme: () => { }
})

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
    const [theme, setTheme] = useState<string>('linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)')

    return (
        <DarkContext.Provider value={{ isDark, setIsDark }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Layout>
                    <AppContext.Provider value={{ state, dispatch }}>
                        <Body>
                            <Screen />
                            <Buttons />
                        </Body>
                    </AppContext.Provider>
                </Layout>
            </ThemeContext.Provider>
        </DarkContext.Provider>
    )
}

export default App