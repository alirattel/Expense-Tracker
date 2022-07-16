import { ListItemText, ListItem, styled, ListItemIcon , Chip } from '@mui/material';
const List = styled(ListItem)`
    display: flex;
    marginTop: 10px;
    border: 1px solid #F6F6F6;
    font-family: 'Kufam', sans-serif;

`;

const Transaction = ({transaction, deleteTransaction}) => {
    
    const sign = transaction.amount >= 0 ? ' SP ' : ' SP ';
    const amount =  Math.abs(transaction.amount) + sign;
    const color = transaction.amount >=0 ? 'rgb(108, 203, 247)' : 'rgb(172, 126, 189)';
     

    return (
        <List style={{background: `${color}`, color: '#fff'}}>
            <ListItemIcon>
                <Chip  label="X" onClick={() => deleteTransaction(transaction.id)} 
                 style ={{fontWeight: 800 , background: '#fff' , color:'red' , maring: '10px'}}
                />
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </List>
    )
}

export default Transaction;