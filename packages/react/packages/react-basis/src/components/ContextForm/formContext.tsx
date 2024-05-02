import { createContext } from 'react'
const ctx = createContext(null)
export const { Provider, Consumer } = ctx;
export default ctx