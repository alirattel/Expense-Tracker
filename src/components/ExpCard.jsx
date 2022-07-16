import React from 'react'
import { Box, Card, CardContent, Typography, styled } from '@mui/material'
const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
    font-family: 'Kufam', sans-serif;

`

const ExpCard = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
    return (
        <Container>
            <Card>
                <CardContent >
                    <Typography style={{ color: 'green' , fontFamily:'Kufam, sans-serif'}}>الدخل</Typography>
                    <Typography style={{ color: 'green' , fontFamily:'Kufam, sans-serif'}}>{income} SP</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography style={{ color: 'red' , fontFamily:'Kufam, sans-serif'}}>مصاريف</Typography>
                    <Typography style={{ color: 'red' , fontFamily:'Kufam, sans-serif'}}>-{expense} SP</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpCard