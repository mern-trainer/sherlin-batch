import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { CounterProvider } from './Providers/CounterProvider';
import { TodoProvider } from './Providers/TodoProvider';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './Providers/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CounterProvider>
        <TodoProvider>
            <CartProvider>
                <App />
            </CartProvider>
            <Toaster position='top-right' />
        </TodoProvider>
    </CounterProvider>
);
