import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnalysisResult from './pages/AnalysisResult';
import reportWebVitals from './reportWebVitals';

import {Card, Row, Col} from 'antd';

import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const NoMatchPage = () => {
  return (
    <Row style={{marginTop: '20%'}}>
      <Col xs={{span: 12, offset: 6}}>
        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/">back to APP</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<AnalysisResult />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
