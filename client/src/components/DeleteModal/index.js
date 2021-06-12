import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { SaveButton } from "../UserSettingsForm";
import API from "../../utils/API";

export default function DeleteModal() {
  const [showModal, setShowModal] = useState(false);

  function handleDelete(e) {
    e.preventDefault();
    API.deleteUser(userLocal.id);
    window.location.replace("/");
  }
  
  const userLocal = JSON.parse(localStorage.getItem('user'));

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    if (isButtonLoading) {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, 1000 / 1);
    }
  });

  function closeTheModal() {
    setShowModal(false);
  }
  return (
    <>
  <div className="col-span-12 md:col-span-9 xl:col-span-9">
  <button type="button" onClick={() => setShowModal(true)} className="form-label block text-sm font-medium text-gray-700 color-red">Delete my account</button>
  </div>
  {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="modal-overlay absolute w-full h-full bg-black opacity-50"></div>
            <div className="relative w-full md:w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="exit" onClick={closeTheModal}>x</div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  WARNING!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
               <p>Are you sure you want to delete your account? You will not be able to undo this action.</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeTheModal}
                  >
                    Cancel
                  </button>
                  <SaveButton isLoading={isButtonLoading} onClick={(e) => handleDelete(e)} onSubmit={(e) => handleDelete(e)}>Delete my account</SaveButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );

  }