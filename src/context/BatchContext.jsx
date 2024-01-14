import { createContext, useContext, useState } from 'react';

const BatchContext = createContext();

export const useBatchContext = () => {
  return useContext(BatchContext);
};

export const BatchProvider = ({ children }) => {
  const [selectedBatch, setSelectedBatch] = useState(null);

  const setSelectedBatchAndUpdate = (batch) => {
    setSelectedBatch(batch);
  };

  return (
    <BatchContext.Provider value={{ selectedBatch, setSelectedBatch: setSelectedBatchAndUpdate }}>
      {children}
    </BatchContext.Provider>
  );
};
