import React from 'react';
import {AiFillQuestionCircle}from "react-icons/ai";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import "./Head.css";

const Uploadfile = () => {
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
    return (
      <div className="Box">
      <p className="attachment">Attachment<AiFillQuestionCircle/></p>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    </div>
    )
  }
  export default Uploadfile;
