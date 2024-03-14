import React from "react";
import axios from "axios";

import BackButtonHeader from './utils/BackButtonHeader';


export default function Transactions() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const auth = {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        }}

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/transactions/all`, auth)
            .then(response => {
                console.log(response);
                setData(response.data.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function toDateTime(dateString) {
        let date = new Date(dateString);

        // Extract day, month, and year
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'long' });
        let year = date.getFullYear();
        
        // Extract time
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        return `${day} ${month} ${year}, ${hours}:${minutes}`;
    }

    return (
        <div>
            <BackButtonHeader />
            
            <div className="txn-container">
                <div className="txn-list">
                    
                    {data.map(value => 

                        <div className="txn-list-item">
                            <div className="txn-item-one">
                                <div>{value.name}</div>
                                <div className="txn-item-cost">-{value.amount}</div>
                            </div>
                            
                            <div className="txn-item-set-two">
                                <div className="txn-item-two">
                                    {toDateTime(value.created_at)}
                                </div>
                                <div className="txn-item-tag">{value.metadata?.tag === null ? '' : value.metadata?.tag}</div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}