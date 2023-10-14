import React, { useState } from 'react';
import { Modal, Upload, Button, Spin, message } from 'antd';
import { Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Layouts from '../components/Layouts';
import TypingEffect from '../utils/typingEffect';



function AnalysisResult() {


  return (
    <Layouts>
      <div>
        <h1>Image Upload and Display</h1>
        <Row>
          <Col span={24}>
            <div className="space-align-block">

              <p> coding...</p>

            </div>
          </Col>
        </Row>

      </div>
    </Layouts>

  );
}

export default AnalysisResult;
