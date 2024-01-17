// OperationalTeamHomePage.js

import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

Modal.setAppElement("#root");

const OperationalTeamHomePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [batchData, setBatchData] = useState({
    batchId: "",
    name: "",
    smeEmployeeId: "",
    startDate: "",
    endDate: "",
    careerTrack: "",
    subTrack: "",
    familyRole: "",
    role: "",
  });
  const [file, setFile] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatchData({ ...batchData, [name]: value });

    const isDisabled = Object.values(batchData).some((field) => !field);
    setIsSubmitDisabled(isDisabled);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const addBatch = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/batch/addBatch`,
        batchData
      );

      console.log("Batch added successfully:", response.data);
      localStorage.setItem("batchId", batchData.batchId);
    } catch (error) {
      console.error("Error adding batch:", error);
    }
  };

  const uploadFile = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/candidate/upload/${batchData.batchId}`,
        file,
        {
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Adjust content type based on your API requirements
          },
        }
      );

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async () => {
    // await addBatch();
    // await uploadFile();

    alert("Batch added successfully");
    closeForm();
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-auto h-screen">
      <Navbar/>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={openForm}
      >
        Add New Batch
      </button>
      <Link to="all-batches" className="bg-green-500 text-white px-4 py-2 rounded mb-4">
        All Batches
      </Link>
      
      <Modal
        isOpen={isFormOpen}
        onRequestClose={closeForm}
        contentLabel="Add New Batch"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 bg-white p-4  shadow-lg text-left w-[90vw] lg:max-w-md max-h-[85vh] overflow-auto text-black rounded">
          <h2 className="text-2xl font-semibold mb-4">Add New Batch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="batchId">Batch ID</label>
              <input
                type="text"
                id="batchId"
                name="batchId"
                value={batchData.batchId}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={batchData.name}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="smeEmployeeId">SME Employee ID</label>
              <input
                type="text"
                id="smeEmployeeId"
                name="smeEmployeeId"
                value={batchData.smeEmployeeId}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={batchData.startDate}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={batchData.endDate}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="careerTrack">Career Track</label>
              <input
                type="text"
                id="careerTrack"
                name="careerTrack"
                value={batchData.careerTrack}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subTrack">Sub Track</label>
              <input
                type="text"
                id="subTrack"
                name="subTrack"
                value={batchData.subTrack}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="familyRole">Family Role</label>
              <input
                type="text"
                id="familyRole"
                name="familyRole"
                value={batchData.familyRole}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={batchData.role}
                onChange={handleChange}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="file">Upload Excel File</label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                required
                className="border rounded w-full p-2"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${
                isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
          <button
            className="absolute top-4 right-2 text-gray-700 font-semibold border-2 px-1 rounded hover:bg-gray-300 bg-gray-200"
            onClick={closeForm}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OperationalTeamHomePage;
