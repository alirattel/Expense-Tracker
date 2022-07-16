import React from 'react'
import { Box , Typography , styled } from '@mui/material'

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
    font-family: 'Kufam', sans-serif;
`

const Balance = ({ transactions }) => {
    
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    
    return (
        <Box>
            <BalanceText> {total} SP : الرصيد </BalanceText>
        </Box>
    )
}
export default Balance