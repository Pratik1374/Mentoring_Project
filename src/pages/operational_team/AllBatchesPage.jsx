import React, { useState, useEffect } from "react";
import axios from "axios";
import studentsBatchImage from "../../assets/studentsBatch.png";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const AllBatchesPage = () => {
  const [batchData, setBatchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('your-api-endpoint-url/getAllBatch');
    //     setBatchData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchData();

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
  }, []);

  return (
    <div className="h-screen">
        <Navbar/>
    <div className="container mx-auto mt-[70px] mb-8">  
      <h1 className="text-3xl font-bold mb-6 text-center">All Batches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 overflow-hidden">
        {batchData.map((batch) => (
          <div
            key={`batch_${batch.batchId}`}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer "
            onClick={() => navigate(`/operationalteam/batch/${batch.batchId}`)}
          >
            <div className="flex flex-row">
              <div className="w-[40px] h-[40px] bg-white rounded-full p-1">
                <img
                  src={studentsBatchImage}
                  alt=""
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col pl-2">
                <p className="text-cyan-200 text-2xl">{batch.name}</p>
                <p className="font-semibold text-blue-500 -mt-1">
                  Batch ID: {batch.batchId}
                </p>
              </div>
            </div>

            <div className="w-full flex justify-between">
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
    </div>
    </div>
  );
};

export default AllBatchesPage;
