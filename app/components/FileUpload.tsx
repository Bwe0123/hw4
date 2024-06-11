const FileUpload: React.FC = () => {
    const [showFileUpload, setShowFileUpload] = useState(false);
  
    const handleUploadClick = () => {
      setShowFileUpload(true);
    };
  
    return (
      <div>
        <button onClick={handleUploadClick}>Загрузить файл</button>
        {showFileUpload && <FileUploadWindow setShowFileUpload={setShowFileUpload} />}
      </div>
    );
  };
  

