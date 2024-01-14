import React, { useEffect, useState } from 'react';
import { useFileContext } from '../context/FileContext';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import { useMentorContext } from '../context/MentorContext';

const MentorsPage = () => {
  const { file } = useFileContext();
  const { setSelectedMentor } = useMentorContext();
  const [uniqueMentorsWithSubjects, setUniqueMentorsWithSubjects] = useState([]);

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

      const uniqueMentorSubjectPairs = removeDuplicates(
        mentorsData.map((mentor) => ({
          name: mentor['Mentor Name'],
          subject: mentor.Subject,
        }))
      );

      setUniqueMentorsWithSubjects(uniqueMentorSubjectPairs);
    };

    reader.readAsArrayBuffer(file);
  };

  const removeDuplicates = (arr) => {
    const uniqueItems = [];
    const map = new Map();

    for (const item of arr) {
      const key = item.name + item.subject;
      if (!map.has(key)) {
        map.set(key, true);
        uniqueItems.push(item);
      }
    }

    return uniqueItems;
  };

  const handleViewBatchesClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Mentors</h1>
      <div className="overflow-x-auto flex justify-center items-center">
        <table className="min-w-[80vw] bg-gray-900 border border-cyan-300 rounded shadow-lg text-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-2 bg-gray-400 text-black">Sr No</th>
              <th className="py-2 px-4 border-2 bg-gray-400 text-black">Mentor Name</th>
              <th className="py-2 px-4 border-2 bg-gray-400 text-black">Subject</th>
              <th className="py-2 px-4 border-2 bg-gray-400 text-black">View Batches</th>
            </tr>
          </thead>
          <tbody>
            {uniqueMentorsWithSubjects.map((pair, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-2 text-center">{index + 1}</td>
                <td className="py-2 px-4 border-2 text-center">{pair.name}</td>
                <td className="py-2 px-4 border-2 text-center">{pair.subject}</td>
                <td className="py-3 px-4 border-2 text-center">
                  <Link
                    to={`${pair.name}/batches`}
                    onClick={() => handleViewBatchesClick(pair)}
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                  >
                    View Batches
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MentorsPage;
