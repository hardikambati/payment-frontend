import React from "react";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


export default function BackButtonHeader() {

    const navigate = useNavigate();

    return (
        <div id="bb-arrow-back">
            <ArrowBack 
                onClick={() => navigate('/')}
            />
        </div>
    );
}