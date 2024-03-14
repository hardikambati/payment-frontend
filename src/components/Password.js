import React from "react";
import axios from "axios";
import BackHeaderBlank from './utils/BackHeaderBlank';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Password() {
    
    const navigate = useNavigate();

    const {state} = useLocation();
    const { amount, name } = state;
    const [pswd, setPswd] = React.useState('');

    
    function NumberButton({ value }) {
        return <button onClick={() => buildPassword(value)} className='p-btn'>{value}</button>;
    }


    function sendRequest() {
        const auth = {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }}

        const val = {
            'amount': amount,
            'name': name
        }

        axios
        .post(`${process.env.REACT_APP_BASE_URL}/transactions/create`, val, auth)
        .then(response => {
            setPswd('');

        })
        .catch(err => {
            alert('Error occured');
        })

        navigate(
            '/status'
        )
    }


    function buildPassword(value) {
        const newVal = pswd + value;
        setPswd(newVal);

        if (pswd.length >= 3) {
            sendRequest();
        }
    }


    return (
        <div>
            <BackHeaderBlank />

            <div id='p-container'>
                <div id='p-pswd'>
                    {pswd}
                </div>
                <div id='p-txt'>Enter your 4 digit passcode</div>
                <div id='p-btn-container'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <NumberButton value={1} />
                        <NumberButton value={2} />
                        <NumberButton value={3} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <NumberButton value={4} />
                        <NumberButton value={5} />
                        <NumberButton value={6} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <NumberButton value={7} />
                        <NumberButton value={8} />
                        <NumberButton value={9} />
                    </div>
                    </div>
                </div>
        </div>
    );
}
