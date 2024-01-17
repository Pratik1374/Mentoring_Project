import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import EmployeeIconImage from "../../assets/EmployeeIcon.png";

const BatchDetailsPage = () => {
  const { batchId } = useParams();
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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [candidatesList, setCandidateList] = useState([]);
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

    const dummyData = {
      batchId: 1,
      name: "Batch A",
      smeEmployeeId: 123,
      startDate: "2000-01-01",
      endDate: "2000-12-12",
      careerTrack: "sfdf",
      subTrack: "fdf",
      familyRole: "dd",
      role: "fff",
    };

    setBatchData(dummyData);

    const dummyCandidates = [
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },

      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
      {
        employeeId: 1,
        employeeName: "John Doe",
        employeeEmail: "john.doe@example.com",
        contactNo: 1234567890,
        globalGrade: "A",
        localGrade: "B",
        category: "Category1",
        BU: "Business Unit 1",
        location: "Location 1",
        practice: "Practice 1",
        subPractice: "Sub Practice 1",
        type: "Type 1",
        exitStatus: "Exit Status 1",
        accountName: "Account 1",
        bUContactPerson: "Contact Person 1",
        billableDate: "2022-01-01",
        week1: {},
        week2: {},
        week3: {},
        week4: {},
        records: {},
      },
    ];

    setCandidateList(dummyCandidates);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatchData({ ...batchData, [name]: value });

    setIsSubmitDisabled(false);
  };

  const handleUpdate = async () => {
    alert("Batch updated successfully");
  };

  return (
    <>
      <Navbar />
      <div className="pt-[75px] flex flex-wrap justify-around">
        <div className="flex w-[90vw] lg:w-1/3 bg-gray-600 p-5 mb-2 rounded">
          <form className="font-bold">
            <div className="mb-4">
              <label htmlFor="batchId">Batch ID</label>
              <input
                type="text"
                id="batchId"
                name="batchId"
                value={batchData.batchId}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={batchData.name}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="smeEmployeeId">SME Employee ID</label>
              <input
                type="text"
                id="smeEmployeeId"
                name="smeEmployeeId"
                value={batchData.smeEmployeeId}
                required
                disabled
                className="border rounded w-full p-2 text-black"
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
                className="border rounded w-full p-2 text-black"
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
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="careerTrack">Career Track</label>
              <input
                type="text"
                id="careerTrack"
                name="careerTrack"
                value={batchData.careerTrack}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subTrack">Sub Track</label>
              <input
                type="text"
                id="subTrack"
                name="subTrack"
                value={batchData.subTrack}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="familyRole">Family Role</label>
              <input
                type="text"
                id="familyRole"
                name="familyRole"
                value={batchData.familyRole}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={batchData.role}
                required
                disabled
                className="border rounded w-full p-2 text-black"
              />
            </div>

            <button
              type="button"
              onClick={handleUpdate}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${
                isSubmitDisabled ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitDisabled}
            >
              Update
            </button>
          </form>
        </div>

        <div className="lg:w-[55%] flex flex-col">
          <h2 className="text-center mb-10 pt-10 lg:pt-3 text-xl font-semibold">
            Candidates List
          </h2>
          <div className="flex flex-wrap gap-3 lg:gap-x-8 p-1 overflow-auto w-full items-center justify-center">
            {candidatesList.map((candidate, index) => (
              <div
                key={`candidate_${index}`}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer w-[80%] lg:w-[40%]"
                onClick={() =>
                  navigate(`/operationalteam/candidate/${candidate.employeeId}`)
                }
              >
                <div className="flex flex-row w-full overflow-hidden">
                  <div className="w-[40px] h-[40px] bg-white rounded-full p-1">
                    <img
                      src={EmployeeIconImage}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col pl-2 truncate">
                    <p className="text-cyan-200 ">{candidate.employeeName}</p>
                    <p className="font-light text-blue-500 -mt-1 ">
                      {candidate.employeeEmail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchDetailsPage;
