import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    QrCodeScanner, 
    FormatListBulleted, 
    AccountBalanceWalletOutlined,
} from '@mui/icons-material';

import BackHeaderBlank from './utils/BackHeaderBlank';


function Home() {
    const navigate = useNavigate();

    return (
            <div className='container'>
                <BackHeaderBlank />
                <div className='h-tag-container'>

                    <div className='h-container-v'>
                        <div className='h-item-v'>
                            <div className='h-item-v-container2'>
                                <div>
                                    <QrCodeScanner 
                                        className='h-icon-v' 
                                        fontSize='medium'
                                        onClick={() => navigate('/scan')}
                                    />
                                </div>
                                <div className='h-item-name-v'>
                                    Scan & Pay
                                </div>
                            </div>
                        </div>
                        <div className='h-item-v'>
                            <div>
                                <AccountBalanceWalletOutlined
                                    className='h-icon-v' 
                                    fontSize='medium'
                                    onClick={() => navigate('/recharge')}
                                />
                            </div>
                            <div className='h-item-name-v'>
                                Recharge Wallet
                            </div>
                        </div>
                    </div>

                    <div className='h-item-h'
                        onClick={() => navigate('/transactions')}
                    >
                        <div>
                            <FormatListBulleted
                                className='h-icon-v' 
                                fontSize='medium'
                            />
                        </div>
                        <div className='h-item-name-h'>
                            Transactions
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Home;
