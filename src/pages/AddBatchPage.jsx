import React, { useState } from "react";
import { useFileContext } from "../context/FileContext";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const AddBatchPage = () => {
  const { setFile } = useFileContext();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [file, setSelectedFile] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const fileId = file.name.replace(/\.[^/.]+$/, ""); // Remove file extension
      alert("File Uploaded Successfully");
      closeModal();
      navigate(`/${fileId}/mentors`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={openModal}
        className="bg-cyan-300 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded"
      >
        Add New Batch
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span className="inline-block h-screen align-middle"></span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Upload Excel File
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    type="file"
                    accept=".xlsx"
                    onChange={handleFileChange}
                    className="py-2 px-4 border border-gray-900 rounded w-full text-black"
                  />
                </div>

                <div className="mt-4">
                  <button
                    onClick={handleUpload}
                    className="bg-cyan-300 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddBatchPage;

