import { List, ButtonDelete } from './ContactItem.styled'

export const ContactItem = ({ item: { name, number, id }, onDelete }) => {

    return (
        <div>
             <List>
                {name}: {number}
                <ButtonDelete type="button" onClick={() => onDelete(id)}>Delete</ButtonDelete>
            </List>
            
        
        </div>

       
        
    )

   
}