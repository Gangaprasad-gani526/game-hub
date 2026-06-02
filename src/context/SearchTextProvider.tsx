import { createContext, useState, type ReactNode} from "react";

const defaultState ={
    data: '',
    setDataSearch : (_data:string)=>{}
};

export const SearchContext = createContext(
  defaultState
);

type MyProviderProps = {
  children: ReactNode;
};

export function SearchTextProvider({ children }: MyProviderProps) {
  const [data, setDataSearch] = useState('');
console.log("Provider:", data);
  return (
    <SearchContext.Provider value={{ data, setDataSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
