import { createContext } from "react";
import { useStoreData, UseStoreDataReturnType } from "./hooks/store-data";

export const StoreContext = createContext<UseStoreDataReturnType | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
}
