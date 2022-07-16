import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
    font-family: 'Kufam', sans-serif;

`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
    font-family: 'Kufam', sans-serif;

`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }
    
    return (
        <Container>
            <Typography style={{ fontFamily:'Kufam, sans-serif'}} variant="h5">معاملة جديدة</Typography>
            <TextField style={{ fontFamily:'Kufam, sans-serif'}} value={text} label="...الراتب , بضائع , ضرائب الخ " onChange = {(e) => setText(e.target.value)} />
            <TextField style={{ fontFamily:'Kufam, sans-serif'}} value={amount} label="..المبلغ" onChange = {(e) => setAmount(e.target.value)}  />
            <StyledButton variant="contained" onClick={newTransaction}>إدخال المعاملة</StyledButton>
        </Container>
    )
}

export default NewTransaction;