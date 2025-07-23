import "./FileUploaderStyle.css";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

function FileUploader() {
  const navigate = useNavigate();

  let handleBack = () => navigate(-1);

  return (
    <>
      <button className="link-container" onClick={handleBack}>
        ← Go back
      </button>
      <Dropzone onDrop={(acceptedFile) => console.log(acceptedFile)}>
        {({ getRootProps, getInputProps, isDragActive }) => (
            <div className="uploader-body" {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here... </p>
              ) : (
                <p>Drag 'n' drop some file here, or click on select files</p>
              )}
            </div>
        )}
      </Dropzone>
    </>
  );
}

export default FileUploader;
