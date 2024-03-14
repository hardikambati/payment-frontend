import { io } from "socket.io-client";

const SOCKET_URL = 'http://localhost:8000';

export const socket = io(SOCKET_URL, {
    autoConnect: false,
    query: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFmYWMzOGFjZmRmMTM3OTY5MzVhZiIsImlhdCI6MTcwOTk3NzEyMCwiZXhwIjoxNzEwNTgxOTIwfQ.Y7koT1e_xoXesOEFDk50kPh2Yz8vdhD_Xw9xvHyY-vI'
    }
});