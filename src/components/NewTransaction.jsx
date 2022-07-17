import { useState } from 'react';
import { Typography, Box, TextField, Button, styled } from '@mui/material';
import Swal from 'sweetalert2'

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
    var flag1 = true , flag2 = true
    const newTransaction = e => {
        document.getElementById('am').innerText = ''
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        if (text === "" || text.match(/^\s+$/)) {
            Swal.fire({icon:'error',text:'يرجى ملئ هذا الحقل'})
            document.getElementById("text").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            flag1 = false
        }else{
            flag1 = true
            document.getElementById("text").style.backgroundColor = '#fff';
        }
        if(amount === '' || isNaN(amount) || amount.match(/^\s+$/)) {
            Swal.fire({icon:'error',text:'يرجى إدخال رقم '})
            document.getElementById("am").style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            flag2 = false
        } else {
            flag2 = true
            document.getElementById("am").style.backgroundColor = '#fff';
        }
        if(flag1 && flag2) {
            addTransaction(transaction);
        }
    }

    return (
        <Container>
            <Typography style={{ fontFamily: 'Kufam, sans-serif' }} variant="h5">معاملة جديدة</Typography>
            <TextField className='text' id='text' style={{ fontFamily: 'Kufam, sans-serif' }} value={text} label="...الراتب , بضائع , ضرائب الخ " onChange={(e) => setText(e.target.value)} requierd />
            <TextField className='am' id='am' style={{ fontFamily: 'Kufam, sans-serif' }} value={amount} label="..المبلغ" onChange={(e) => setAmount(e.target.value)} requierd />
            <StyledButton variant="contained" onClick={newTransaction}>إدخال المعاملة</StyledButton>
        </Container>
    )
}

export default NewTransaction;
