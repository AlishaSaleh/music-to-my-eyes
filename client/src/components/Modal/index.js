import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import { SaveButton } from "../UserSettingsForm";
import ProfilePic from "../ProfilePic";

export default function Modal() {
    const [showPreview, setShowPreview] = useState(false);
    const [showModal, setShowModal] = useState(false);
   //Cloudinary Info
   const [image, setImage ] = useState("");
   const [ url, setUrl ] = useState("");
   const uploadImage = () => {
   const data = new FormData()
   data.append("file", image)
   data.append("upload_preset", "profile")
   data.append("cloud_name","kvtemadden")
   fetch("  	https://api.cloudinary.com/v1_1/kvtemadden/image/upload",{
   method:"post",
   body: data
   })
   .then(resp => resp.json())
   .then(data => {
   setUrl(data.url)
   console.log(data);
   })
   .catch(err => console.log(err))
   }

    // Save Button    
   function handleSubmit(e) {
    e.preventDefault();
    setIsButtonLoading(true);
    setShowModal(false);
  }

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    if (isButtonLoading) {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, 1000 / 1);
    }
  });

  function openTheModal() {
    uploadImage();
    setShowPreview(true);
  }

  function closeTheModal() {
    setShowModal(false);
    setShowPreview(false);
  }
  return (
    <>
      <button
                      id="upload_widget"
                        type="button"
                        className="cloudinary-button change-pp hover:btn-hov btn py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setShowModal(true)}
                        >
                        Change
                      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
       <div class="modal-overlay absolute w-full h-full bg-black opacity-50"></div>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Your Profile Picture
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
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  <input type="file" onChange= {(e)=> setImage(e.target.files[0])}
                      id="upload_widget"
                      />
                      {showPreview ?
                      <ProfilePic src={url}/> : null}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={openTheModal}
                  >
                    Preview
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeTheModal}
                  >
                    Close
                  </button>
                  <SaveButton isLoading={isButtonLoading} onClick={handleSubmit} onSubmit={handleSubmit}>Save Profile</SaveButton>
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