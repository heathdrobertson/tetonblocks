import React, { useEffect, useState }from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import Loading from './components/loading/Loading.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Footer from './components/footer/Footer.js';

import './assets/styles/App.scss';

function App() {
        const [load, setLoad] = useState('false')

        useEffect(() => {
                //const timer = setTimeout(() => console.log("Hello, World!"), 3000);
                const timer = setTimeout(() => setLoad('true'), 1200);
                return () => clearTimeout(timer);
        })
        return (
        <>
        <div className="top-block">
                {load === 'true' ? <Dashboard /> : <Loading /> }
        </div>
        <Footer />
        </>
        );
}

export default App;
