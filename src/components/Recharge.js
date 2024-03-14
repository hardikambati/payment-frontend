import React from "react";
import axios from "axios";
import BackButtonHeader from './utils/BackButtonHeader';
import { TextField, InputAdornment, Button } from "@mui/material";


export default function Recharge() {

    const [amount, setAmount] = React.useState(0);
    const [available, setAvailable] = React.useState(0);
    const [used, setUsed] = React.useState(0);
    const [load, setLoad] = React.useState(false);
    const [trigger, setTrigger] = React.useState(false);


    React.useEffect(() => {
        const auth = {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }}

        axios
        .get(`${process.env.REACT_APP_BASE_URL}/transactions/summary`, auth)
        .then(response => {
            if (response.status === 200) {
                setAvailable(response.data.data.available);
                setUsed(response.data.data.used);
            }
        })
        .catch(err => {
            alert('Error occured');
        })

    }, [trigger])


    function submitRecharge(e) {
        e.preventDefault();

        if (!amount || amount <= 0) {
            return;
        }

        setLoad(true);

        const auth = {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }}

        const val = {
            'amount': amount
        }

        axios
        .post(`${process.env.REACT_APP_BASE_URL}/wallet/recharge`, val, auth)
        .then(response => {
            setAmount(0);
            setTrigger(!trigger);
            alert('Hurray! Funds added');
        })
        .catch(err => {
            alert('Error occured');
        })

        setLoad(false);
    }

    
    return (
        <div>
            <BackButtonHeader />

            <div className="r-input-container">
                <TextField 
                    id='r-input'
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                    }}
                    sx={{ width: '50%' }}
                    value = {amount}
                    onChange = {e => setAmount(e.target.value)}
                />
            </div>
            
            <div className="r-button-container">
                <Button
                    id='r-button'
                    variant="outlined"
                    sx={{ width: '40%', height: '50px' }}
                    onClick={e => submitRecharge(e)}
                    disabled={load === true}
                >Recharge</Button>

                <Button
                    id='r-button'
                    variant="outlined"
                    sx={{ width: '40%', height: '50px' }}
                >Withdraw</Button>
            </div>
            
            <div className="r-info">
                <div className="r-info-one">
                    <div className="r-info-tag">Available Cash</div>
                    <div className="r-info-val-av">₹ {available}</div>
                </div>
                <div className="r-info-one">
                    <div className="r-info-tag">Funds Used</div>
                    <div className="r-info-val">₹ {used}</div>
                </div>
            </div>

            <div className="r-info-two">
                <div className="r-info-two-name">Ledger Details</div>
                <div>
                    <div className="r-info-one">
                        <div className="r-info-tag">Ledger History</div>
                        <div className="r-info-val-icon">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}