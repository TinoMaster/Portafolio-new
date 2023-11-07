import { createContext, useState } from "react";

export interface AppContextType {
  menuMovile: boolean;
  handlerMenuMovile: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menuMovile, setMenuMovile] = useState(false);

  const handlerMenuMovile = () => {
    setMenuMovile(!menuMovile);
  };

  const value = { menuMovile, handlerMenuMovile };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
