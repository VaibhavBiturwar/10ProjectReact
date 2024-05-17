import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { db } from "../config/firebaseConfig";
import { useVisibility } from "../hooks/useVisibility";
import ContactForm from "./ContactForm";
import { toast } from "react-toastify";

export default function ContactCard({ data }) {
  const { isShown, onSetHide, onSetShow } = useVisibility();

  const onDeleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.dismiss();
      toast("Contact deleted successfully", {
        type: "error",
      });
    } catch (error) {
      console.log("🚀 / onDeleteContact / error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col ">
        {!data?.length && (
          <div className="flex w-full h-full justify-center items-center py-10 flex-col gap-4">
            <img src="/empty.png" />
            <h2 className="text-white font-bold text-2xl">No contacts found</h2>
          </div>
        )}

        {data.map((info) => (
          <div key={info.id}>
            <div className="flex rounded bg-yellowDark m-3 justify-between px-2 items-center">
              <div className="flex flex-row gap-2 items-center">
                <FaRegUserCircle className="text-3xl" />
                <div className="flex flex-col ">
                  <p className="text-lg font-medium">{info.name}</p>
                  <p className="text-sm font-mono">{info.email}</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 align-middle">
                <FaEdit className="text-2xl" onClick={onSetShow} />
                <MdDeleteForever
                  className="text-2xl"
                  onClick={() => onDeleteContact(info.id)}
                />
              </div>
            </div>
            <ContactForm
              isShown={isShown}
              onSetHide={onSetHide}
              onSetShow={onSetShow}
              isUpdate
              contact={info}
            />
          </div>
        ))}
      </div>
    </>
  );
}
