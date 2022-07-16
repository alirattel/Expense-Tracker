import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
    font-family: 'Kufam', sans-serif;
    padding: 20px;

`;

const Transactions = ({ transactions, deleteTransaction }) => {
    
    return (
        <Component>
            <Typography style={{ fontFamily:'Kufam, sans-serif'}} variant="h5">المعاملات المالية</Typography>
            <Divider  style={{width: '100%'}} />
            <List >
                {
                    transactions.map(transaction => {
                        return <Transaction  transaction={transaction} deleteTransaction={deleteTransaction} key={transaction.id} />
                    })
                }
            </List>
        </Component>
    )
}

export default Transactions;