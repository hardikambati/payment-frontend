import React from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import BackButtonHeader from './utils/BackButtonHeader';


export default function Scan() {

    const navigate = useNavigate();

    const [data, setData] = React.useState('No result');
    const [read, setRead] = React.useState(true);


    function passwordStep(result) {
        setRead(false);

        if (result?.text === null) {
            alert('Invalid QR code');
        }

        const data = JSON.parse(result.text);

        navigate(
            '/password',
            {
                state: {
                    amount: data.amount,
                    name: data.bank_name,
                }
            }
        )
    }


    return (
        <div>
            <BackButtonHeader />

            <div>

                {read ? 
                    <QrReader
                        onResult={(result, error) => {
                        if (!!result) {
                                passwordStep(result);
                            }
                            
                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        scanDelay={500}
                        style={{ width: '100%' }}
                        constraints={{facingMode: 'environment'}}
                        />
                    :
                    <div></div>
                }

                <div id='scan-txt'>
                    Scan QR Code
                </div>


            </div>
        </div>
    );
}