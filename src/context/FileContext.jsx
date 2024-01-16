import { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const useFileContext = () => {
  return useContext(FileContext);
};

export const FileProvider = ({ children }) => {
  const [file, setFile] = useState(null);

  const setFileAndUpdate = (newFile) => {
    setFile(newFile);
  };

  return (
    <FileContext.Provider value={{ file, setFile: setFileAndUpdate }}>
      {children}
    </FileContext.Provider>
  );
};