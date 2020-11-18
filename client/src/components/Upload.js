import React from 'react';
import Dropzone from './FileDropzone'

const Upload = () => (
  <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <Dropzone onFilesAdded={console.log('hey')} />
          <div />
          <div className="Files" />
        </div>
        <div className="Actions" />
      </div>
)

export default Upload;
