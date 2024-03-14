import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { socket } from './components/Socket';


function App() {

  const [isConnected, setIsConnected] = React.useState(socket.connected);
  const [message, setMessage] = React.useState('');

  // React.useEffect(() => {

  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

    
  //   socket.on('connect', onConnect);
  //   socket.on('disconnect', onDisconnect);
    
  //   socket.on('connectStatus', (msg) => {
  //     console.log(msg);
  //     setMessage(msg);
  //   });

  //   return () => {
  //     socket.off('connect', onConnect);
  //     socket.off('disconnect', onDisconnect);
  //   }
  // }, [])

  function connect() {
    socket.connect();
    console.log('connected');
  }

  function disConnect() {
    socket.disconnect();
    console.log('disconnected');
  }

  socket.on('transactionStatus', (msg) => {
    console.log(msg)
    setMessage(msg);
  })

  return (
    <div style={{marginTop: '100px', marginLeft: '100px'}}>

      Connection State : {isConnected}

      <br/><br/><br/><br/>

      <button onClick={connect}>Connect</button>
      
      <br/><br/>
     
      <button onClick={disConnect}>Disconnect</button>
      
      <br/><br/>

      Event Msg : {message}

      {/* <Nav /> */}
    </div>
  );
}

export default App;
