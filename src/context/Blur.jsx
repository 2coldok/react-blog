import { createContext, useContext, useState } from "react"

const BlurContext = createContext();

export function BlurProvider({ children }) {
  const [blur, setBlur] = useState(false);

  return (
    <BlurContext.Provider value={{blur, setBlur}}>
      { children }
    </BlurContext.Provider>
  )
}

export const useBlur = () => useContext(BlurContext);
