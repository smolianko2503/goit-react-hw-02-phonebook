import { FilterInput} from './Filter.styled'

export const Filter = ({filter, onSearch}) => {
    return (
        <div>
            <label>Find Contacts by name</label>
            <FilterInput
                type="text"
                value={filter}
                onChange={onSearch} />
    </div>
    )
    
    
}