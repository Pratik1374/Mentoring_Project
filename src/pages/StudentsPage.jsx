import React, { useEffect, useState } from "react";
import { useMentorContext } from "../context/MentorContext";
import { useFileContext } from "../context/FileContext";
import * as XLSX from "xlsx";
import { useBatchContext } from "../context/BatchContext";
import profileImg from "../assets/profile_icon.jpg";

const StudentsPage = () => {
  const { selectedMentor } = useMentorContext();
  const { file } = useFileContext();
  const { selectedBatch } = useBatchContext();
  const [uniqueStudents, setUniqueStudents] = useState([]);

  useEffect(() => {
    if (file) {
      readExcelFile(file);
    }
  }, [file]);

  const readExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const mentorsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const uniqueStudents = removeDuplicates(
        mentorsData.map((mentor) => ({
          name: mentor["Mentor Name"],
          subject: mentor.Subject,
          batch: mentor.Batch,
          student: mentor["Student Name"],
          email: mentor.Email,
        }))
      );
      setUniqueStudents(uniqueStudents);
    };

    reader.readAsArrayBuffer(file);
  };

  const removeDuplicates = (arr) => {
    const uniqueItems = [];
    const map = new Map();

    for (const item of arr) {
      const key = item.name + item.subject + item.batch + item.student;
      console.log(item.name, " ", item.subject, " ", item.batch, item.student);
      if (
        !map.has(key) &&
        item.name === selectedMentor.name &&
        item.subject === selectedMentor.subject &&
        item.batch === selectedBatch
      ) {
        map.set(key, true);
        uniqueItems.push({
          student_name: item.student,
          student_email: item.email,
        });
      }
    }

    return uniqueItems;
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="container mx-auto mt-8 p-4 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4 text-center">Students</h1>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold mb-4 text-center">
          Mentor Name:{" "}
          <span className="font-semibold text-xl">{selectedMentor?.name}</span>
        </h2>
        <h2 className="text-xl font-bold mb-4 text-center">
          Subject:{" "}
          <span className="font-semibold text-xl">
            {selectedMentor?.subject}
          </span>
        </h2>
        <h2 className="text-xl font-bold mb-4 text-center">
          Batch: <span className="font-semibold text-xl">{selectedBatch}</span>
        </h2>
      </div>
      <div className="flex w-[90vw] flex-col justify-center items-center">
        {uniqueStudents.length > 0 ? (
          <div className="flex items-center justify-center my-2 flex-col w-[80vw] lg:w-[40vw] bg-gray-900 rounded-lg box-shadow p-2">
            {uniqueStudents.map((student, index) => (
              <div
                className="flex flex-row justify-center items-center gap-2 w-[80%] bg-blue-900 my-2 p-2 rounded-xl"
                onClick={() => handleStudentClick(student.student_name)}
              >
                <div className="h-[40px] w-[40px]">
                  <img src={profileImg} alt="" className="rounded-full object-contain" />
                </div>

                <div className="flex flex-col  w-[80%]">
                  <h3 key={index}><span className="font-bold text-gray-200">Name : </span>{student.student_name}</h3>
                  <h3 key={index}><span className="font-bold text-gray-200">Email : </span>{student.student_email}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No students found in this batch.</p>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
