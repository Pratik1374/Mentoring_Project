import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { FaFileDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import studentsBatchImage from "../../assets/studentsBatch.png";
import RatingGraph from "../../components/RatingGraph";

const OperationalTeamDashboard = () => {
  const [batchData, setBatchData] = useState([]);
  const navigate = useNavigate();
  const [ratings, setRatings] = useState([3, 4, 2, 4]);
  const [batchIdInput, setBatchIdInput] = useState("");
  const [employeeIdInput, setEmployeeIdInput] = useState("");

  const handleGetRatings = async () => {
    if (!batchIdInput || !employeeIdInput) {
      alert("Please enter both Batch ID and Employee ID.");
      return;
    }

    try {
      // const response = await axios.get(`${import.meta.env.VITE_API_URL}/getRatings`, { params: { batchId, employeeId } });
      const dummyResponse = [4, 2, 3, 2];
      setRatings(dummyResponse);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    const dummyData = [
      {
        batchId: 1,
        name: "Batch A",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 2,
        name: "Batch B",
        startDate: "2022-02-01",
        endDate: "2022-03-01",
      },
      {
        batchId: 3,
        name: "Batch C",
        startDate: "2022-03-01",
        endDate: "2022-04-01",
      },
      {
        batchId: 4,
        name: "Batch D",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 5,
        name: "Batch E",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 6,
        name: "Batch F",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 7,
        name: "Batch G",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 8,
        name: "Batch H",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 9,
        name: "Batch I",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
      {
        batchId: 10,
        name: "Bach J",
        startDate: "2022-01-01",
        endDate: "2022-02-01",
      },
    ];
    setBatchData(dummyData);
    console.log("dashboard called");
  }, [ratings]);

  return (
    <div className="flex h-screen overflow-auto flex-col lg:flex-row">
      <Navbar />
      <div className="flex h-screen overflow-auto w-full flex-col">
        <div className="w-full flex h-14 mt-2">
          <div className="flex justify-center items-center w-[80%]">
            <h1 className="text-center p-2 font-semibold text-2xl text-cyan-300">
              Welcome to Dashboard
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2 flex-row p-2 bg-purple-200 m-2 text-black rounded">
            <FaFileDownload />
            <p>Download Reports</p>
          </div>
        </div>
        <div className="flex p-3 pt-8 justify-evenly flex-wrap gap-2">
          <div className="w-[150px] h-[150px] border-2 border-cyan-200 rounded-full flex items-center justify-center flex-col p-2">
            <p className="p-2 font-bold text-2xl">230</p>
            <p className="font-semibold text-purple-400">Total Candidates</p>
          </div>
          <div className="w-[150px] h-[150px] border-2 border-cyan-200 rounded-full flex items-center justify-center flex-col p-2">
            <p className="p-2 font-bold text-2xl">20</p>
            <p className="font-semibold text-purple-400">Total Batches</p>
          </div>
          <div className="w-[150px] h-[150px] border-2 border-cyan-200 rounded-full flex items-center justify-center flex-col p-2">
            <p className="p-2 font-bold text-2xl">92</p>
            <p className="font-semibold text-purple-400">L1 Score</p>
          </div>
          <div className="w-[150px] h-[150px] border-2 border-cyan-200 rounded-full flex items-center justify-center flex-col p-2">
            <p className="p-2 font-bold text-2xl">90</p>
            <p className="font-semibold text-purple-400">L2 Score</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col p-2 ">
            {batchData.map((batch) => (
              <div
                key={`batch_${batch.batchId}`}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg cursor-pointer w-[300px] h-[110px] mt-2 p-2"
                onClick={() =>
                  navigate(`/operationalteam/batch/${batch.batchId}`)
                }
              >
                <div className="flex flex-row">
                  <div className="w-[30px] h-[30px] bg-white rounded-full p-1">
                    <img
                      src={studentsBatchImage}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col pl-2">
                    <p className="text-cyan-200 text-xl">{batch.name}</p>
                    <p className="font-semibold text-blue-500 -mt-1">
                      Batch ID: {batch.batchId}
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between">
                  <p className="text-gray-500">
                    Start Date: {new Date(batch.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500">
                    End Date: {new Date(batch.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 w-full text-black mt-4">
            <div className="flex w-full items-center gap-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter Batch Id"
                  className="w-[200px] p-2 rounded bg-gray-500"
                  value={batchIdInput}
                  onChange={(e) => setBatchIdInput(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Employee Id"
                  className="w-[200px] p-2 rounded bg-gray-500"
                  value={employeeIdInput}
                  onChange={(e) => setEmployeeIdInput(e.target.value)}
                />
              </div>
              <button
                className="p-1 w-[100px] h-[40px] rounded bg-cyan-300"
                onClick={handleGetRatings}
              >
                Get Ratings
              </button>
            </div>
            <div className="w-[95%] p-2 bg-gray-800 h-[300px] flex items-center justify-center flex-col rounded">
              {/* <canvas ref={chartRef}></canvas> */}
              <RatingGraph ratings={ratings} />
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default OperationalTeamDashboard;
