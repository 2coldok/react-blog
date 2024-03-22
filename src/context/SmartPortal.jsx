import { createContext, useContext, useState } from "react"

const SmartPortalContext = createContext();

export function SmartPortalProvider({ children }) {
  const [portalData, setPortalData] = useState({head: ['home.png', '/'], middle:['', ''], tail: ['', '']});
  const [smartPortal, setSmartPortal] = useState(['highlight', 'hide', 'hide']);
  
  const setPortalState = (position, img, path) => {
    if (position === 'head') {
      setSmartPortal(['highlight', 'hide', 'hide']);
      setPortalData((prev) => ({...prev, head: [img, path]}));
    }

    if (position === 'middle') {
      setSmartPortal(['reveal', 'highlight', 'hide']);
      setPortalData((prev) => ({...prev, middle: [img, path]}));
    }

    if (position === 'tail') {
      setSmartPortal(['reveal', 'reveal', 'highlight']);
      setPortalData((prev) => ({...prev, tail: [img, path]}));
    }
  }

  const getPortalState = (position) => {
    if (position === 'head') {
      return smartPortal[0];
    }
    
    if (position === 'middle') {
      return smartPortal[1];
    }

    if (position === 'tail') {
      return smartPortal[2];
    }
  }
  
  return (
    <SmartPortalContext.Provider value={{ getPortalState, portalData, setPortalState }}>
      {children}
    </SmartPortalContext.Provider>
  );
}

export const usePortal = () => useContext(SmartPortalContext);

// 사용시
// import { usePortal } from ~~
// const { setPortalState, getPortalState } = usePortal();
