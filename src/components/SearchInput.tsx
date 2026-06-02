import { SearchContext } from '@/context/SearchTextProvider'
import { Input, InputGroup, Kbd } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { LuSearch } from "react-icons/lu"


export interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = () => {

    const ref = useRef<HTMLInputElement>(null)
    const { data, setDataSearch } = useContext(SearchContext);
    console.log(data)
    
    return (
        <form style={{ width: '100%' }} onSubmit={(e) => {
            e.preventDefault();
            console.log(ref.current?.value);

            setDataSearch(ref?.current?.value ?? "");
        
        }

        }>
            <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
                <Input ref={ref} borderRadius={20} placeholder='Search Games...' />
            </InputGroup>
        </form>

    )
}

export default SearchInput
