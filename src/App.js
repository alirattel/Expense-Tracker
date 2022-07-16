import { useState } from 'react';
import './App.css';
import { Typography, styled, Box } from '@mui/material'
import Balance from './components/Balance';
import ExpCard from './components/ExpCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import Swal from 'sweetalert2'

const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 36px;
  color: rgb(52, 52, 150);
  font-family: 'Kufam', sans-serif;

`

const Component = styled(Box)`
font-family: 'Kufam', sans-serif;
background: #FFF;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`
Swal.fire('لإدخال المصاريف يرجى وضع اشارة ناقص - قبل الرقم المدخل')
function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'بضائع', amount: -50000 },
    { id: 2, text: 'الراتب', amount: 130000 },
    { id: 3, text: 'ضرائب', amount: -10000 },
  ]);
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  }
  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
  }
  
  return (
    
    <div className="App">
      <Header>مدير المال</Header>
      <Component>
        <Box>
          <Balance style={{ fontFamily:'Kufam, sans-serif'}} transactions={transactions} />
          <ExpCard style={{ fontFamily:'Kufam, sans-serif'}} transactions={transactions} />
          <NewTransaction style={{ fontFamily:'Kufam, sans-serif'}} addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions style={{ fontFamily:'Kufam, sans-serif'}} transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Component>
      <footer>made by AliRatel 2022</footer>
      </div>
      );
}

      export default App;
