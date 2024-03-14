import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Scan from './Scan';
import Recharge from './Recharge';
import Transactions from './Transactions';
import Password from './Password';
import Status from './Status';


const RoutePath = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/recharge" element={<Recharge />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/password" element={<Password />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </div>
    );
}
 
export default RoutePath;