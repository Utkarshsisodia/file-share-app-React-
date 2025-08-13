import "./FileUploaderStyle.css";
import { useNavigate } from "react-router-dom";
import Dropzone, { useDropzone } from "react-dropzone";
import { useCallback, useState} from "react";

function FileUploader() {
  
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop : useCallback(acceptedFiles => {
    // console.log(acceptedFiles)
    setState(acceptedFiles);
  }, [])})

  let handleBack = () => navigate(-1);

  return (
    <>
      <button className="link-container" onClick={handleBack}>
        ← Go back
      </button>

      {/* Hook approach */}

      <div className="uploader-body" {...getRootProps()} >
        <input {...getInputProps()} />
        { isDragActive ? <p>Drop the files here...</p> : <p>Drag 'n' drop files here or click on select files</p> }
      </div>
      
      <div className="file-name">
        {
        state && state.length && state.map((c, i) =>{
          return <img key={i} src={URL.createObjectURL(c)} width={200} height={200} alt="" />
        })
        }
      </div>



      {/* Wrapper component aproach */}

      {/* <Dropzone onDrop={(acceptedFile) => console.log(acceptedFile)}>
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
      </Dropzone> */}
    </>
  );
}

export default FileUploader;
