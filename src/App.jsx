import './App.css';
import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  //Create state for holding the details from the input box
  const [amount, setAmount] = useState(0)
  const [year, setYear] = useState(0)
  const [rate, setRate] = useState(0)
  const [interest, setInterest] = useState(0)

  console.log(amount, year, rate);

  const handleCalculate = (e => {
    const output = amount * year * rate / 100
    setInterest(output)
  })

  function reset() {
    setInterest(0)
    setAmount(0)
    setYear(0)
    setRate(0)
  }


  return (
    <div className="App">
      <MDBRow>
        <MDBCol md='4'>

        </MDBCol>
        <MDBCol md='4' id='maindiv' className='mt-5'>
          <div className="header">
            <h3 className='text-center mt-5'>Simple Interest Calculator</h3>
            <p className='text-center'>Calculate your simple interest with us ❤️</p>
          </div>
          <div className="total m-5">
            <h5 className='text-center'>&#8377;{interest}</h5>
            <h5 className='text-center'>Your Total Interest</h5>
          </div>
          <div className="form text-center">
            <div className="input">
              <TextField id="standard-basic" label="Amount" variant="standard" className='m-1' sx={{ width: '80%' }} value={amount || ""} onChange={(e) => setAmount(e.target.value)} />
              <TextField id="standard-basic" label="Year" variant="standard" className='m-1' sx={{ width: '80%' }} value={year || ""} onChange={(e) => setYear(e.target.value)} />
              <TextField id="standard-basic" label="Rate" variant="standard" className='m-1' sx={{ width: '80%' }} value={rate || ""} onChange={(e) => setRate(e.target.value)} />
            </div>
          </div>
          <div className="button m-2 mt-4 text-center">
            <Button variant="contained" className='mx-3' onClick={e => handleCalculate(e)}>Calculate</Button>
            <Button variant="outlined" className='mx-3' onClick={reset}>Reset</Button>
          </div>
        </MDBCol>
        <MDBCol md='4'>

        </MDBCol>
      </MDBRow>
    </div>

  );
}

export default App;
