import React, {useState} from "react";
import Navbar from "../../components/Navbar";

const AddNewBatch = () => {
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
    setBatchData({
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
      setFile(null);
      setIsSubmitDisabled(true);
  };

  return (
    <div className="flex h-screen overflow-auto flex-col lg:flex-row">
      <Navbar />
      <div className="flex overflow-auto w-full flex-col p-2 items-center">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-200">Add New Batch</h2>
        <div className="w-[80%] lg:w-[50%]"> 
        <form className="p-2 rounded bg-gray-900">
          <div className="mb-4">
            <label htmlFor="batchId">Batch ID</label>
            <input
              type="text"
              id="batchId"
              name="batchId"
              value={batchData.batchId}
              onChange={handleChange}
              required
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
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
              className="border rounded w-full p-2 bg-gray-600"
            />
          </div>

        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className={`bg-blue-800 text-white px-4 py-2 rounded ${
              isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBatch;
