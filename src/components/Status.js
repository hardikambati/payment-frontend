import React from "react";
import BackHeaderBlank from "./utils/BackHeaderBlank";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Status() {

    const navigate = useNavigate();

    return (
        <div>
            <BackHeaderBlank />

            <div className="s-container">

                <img id='s-img' src='tick.png' />
                <div id='s-txt'>
                    Transaction Successful
                </div>

                <Button
                    id='s-button'
                    variant="outlined"
                    sx={{ width: '40%', height: '50px' }}
                    onClick={e => navigate('/transactions')}
                >All Transactions</Button>

            </div>
        </div>
    );
}