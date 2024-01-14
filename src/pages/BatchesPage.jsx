import React, { useEffect, useState } from 'react';
import { useMentorContext } from '../context/MentorContext';
import { useFileContext } from '../context/FileContext';
import * as XLSX from 'xlsx';
import { useBatchContext } from '../context/BatchContext';
import { useLocation, useNavigate } from 'react-router-dom';

const BatchesPage = () => {
  const { selectedMentor } = useMentorContext();
  const { file } = useFileContext();
  const { setSelectedBatch } = useBatchContext();
  const [uniqueBatches, setUniqueBatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (file) {
      readExcelFile(file);
    }
  }, [file]);

  const readExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const mentorsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const uniqueMentorBatches = removeDuplicates(
        mentorsData.map((mentor) => ({
          name: mentor['Mentor Name'],
          subject: mentor.Subject,
          batch: mentor.Batch,
        }))
      );

      setUniqueBatches(uniqueMentorBatches);
    };

    reader.readAsArrayBuffer(file);
  };

  const removeDuplicates = (arr) => {
    const uniqueItems = [];
    const map = new Map();

    for (const item of arr) {
      const key = item.name + item.subject + item.batch;
      console.log(item.name, ' ', item.subject, ' ', item.batch);
      if (
        !map.has(key) &&
        item.name === selectedMentor.name &&
        item.subject === selectedMentor.subject
      ) {
        map.set(key, true);
        uniqueItems.push(item.batch);
      }
    }

    return uniqueItems;
  };

  const handleBatchClick = (batch) => {
    setSelectedBatch(batch);
    navigate(`${batch}`);
  };

  return (
    <div className="container mx-auto mt-8 p-4 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4 text-center">Batches</h1>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold mb-4 text-center">
          Mentor Name: <span className="font-semibold text-xl">{selectedMentor?.name}</span>
        </h2>
        <h2 className="text-xl font-bold mb-4 text-center">
          Subject: <span className="font-semibold text-xl">{selectedMentor?.subject}</span>
        </h2>
      </div>
      <div className="flex w-[90vw] flex-col justify-center items-center">
        {uniqueBatches.length > 0 ? (
          <div className="flex items-center justify-center p-4 my-2 flex-col w-[80vw] lg:w-[30vw] bg-gray-900 rounded-lg shadow-md shadow-cyan-900">
            {uniqueBatches.map((batch, index) => (
              <div
                key={index}
                onClick={() => handleBatchClick(batch)}
                className="bg-blue-900 text-center py-2 my-2 w-full rounded-2xl cursor-pointer"
              >
                {batch}
              </div>
            ))}
          </div>
        ) : (
          <p>No batches found for the selected mentor.</p>
        )}
      </div>
    </div>
  );
};

export default BatchesPage;
