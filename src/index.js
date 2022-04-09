import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <BrowserRouter >
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </WalletProvider>,
    document.getElementById('root')
  );
})

