import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from "./redux/store";
import NotFound from './containers/NotFound';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import ProductDeails from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element ={<App/>}>
      <Route path='' element ={<ProductListing/>} />
      <Route path ='product/:productId' element={<ProductDeails/>}/>
      <Route path ='*' element={<NotFound />} />
      </Route>
    

        
    </Routes>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


