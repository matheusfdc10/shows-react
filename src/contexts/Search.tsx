import { ReactNode, createContext, useState } from "react";

type MyContextProps = {
    Search: string;
    SetSearch: React.Dispatch<React.SetStateAction<string>>;
};

type MyProviderProps = {
    children: ReactNode;
};

export const SearchContext = createContext({} as MyContextProps);


const SearchProvider = ({children}: MyProviderProps) => {
    const [Search, SetSearch] = useState('')

    return (
        <SearchContext.Provider
            value={{
                Search,
                SetSearch
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;