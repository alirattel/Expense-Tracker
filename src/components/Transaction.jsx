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
    const color = transaction.amount >=0 ? 'rgb(108, 203, 247)' : 'rgb(255, 112, 112)';
     

    return (
        <List style={{fontFamily: 'Kufam, sans-serif' ,background: `${color}`, color: '#fff'}}>
            <ListItemIcon>
                <Chip   label="X" onClick={() => deleteTransaction(transaction.id)} style ={{fontFamily: 'Sigmar One, cursive' , fontWeight: 800 , background: '#fff' , color:'rgb(255, 93, 93)' , maring: '10px'}}/>
            </ListItemIcon>
            <ListItemText  primary={amount} />
            <ListItemText  primary={transaction.text} />
        </List>
    )
}

export default Transaction;
