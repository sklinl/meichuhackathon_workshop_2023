import React, { useState } from 'react';
import { Modal, Upload, Button, Spin, message } from 'antd';
import { Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Layouts from '../components/Layouts';
import TypingEffect from '../utils/typingEffect';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function AnalysisResult() {

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const [showResult, setShowResult] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );


  const handleUpload = () => {
    const backendServiceUrl = process.env.REACT_APP_BACKEND_SERVICE_URL;

    if (fileList.length === 0) {
      message.warning('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', fileList[0].originFileObj);

    fetch(`${backendServiceUrl}/upload`, {
      method: 'POST',
      body: formData,
    }).then((response) => {
        if (response.status === 200) {
          setShowResult(true);
          message.success('Image uploaded successfully.');
        } else {
          message.error('Failed to upload image.');
        }
        return response.text()
      }).then((text)=>{
        console.log(text);
        setResponseText(text);
      }).catch((error) => {
        message.error('An error occurred while uploading the image.');
        console.log(error);
      });

  };

  return (
    <Layouts>
      <div>
        <h1>Image Upload and Display</h1>
        <Row>
          <Col span={24}>
            <div className="space-align-block">

              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal>

              <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length < 1}
              >
                分析
              </Button>

              {showResult &&
                (<div>

                  <TypingEffect
                    text={responseText}
                    speed={100}
                    onTypingComplete={handleTypingComplete}
                  />
                </div>)
              }

            </div>
          </Col>
        </Row>

      </div>
    </Layouts>

  );
}

export default AnalysisResult;
