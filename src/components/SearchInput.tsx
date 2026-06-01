import { Input, InputGroup, Kbd } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuSearch } from "react-icons/lu"


export interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = () => {

    const ref = useRef<HTMLInputElement>(null)
    return (
        <form style={{ width: '100%' }} onSubmit={(e) => {
            e.preventDefault();
            console.log(ref.current?.value) }
        }>
            <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
                <Input ref={ref} borderRadius={20} placeholder='Search Games...' />
            </InputGroup>
        </form>

    )
}

export default SearchInput
