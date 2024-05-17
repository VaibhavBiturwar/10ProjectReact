import React from "react";
import CustomModal from "./CustomModal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "Yup";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toast } from "react-toastify";

const INITIAL_VALUE = { name: "", email: "" };

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

export default function ContactForm({
  isShown,
  onSetHide,
  isUpdate = false,
  contact,
}) {
  const addContact = async (values) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, values);
      onSetHide();
      toast.dismiss();
      toast("Contact added successfully", { type: "success" });
    } catch (error) {
      console.log("🚀 / addContact / error:", error);
    }
  };

  const updateContact = async (values) => {
    try {
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, values);
      onSetHide();
      toast.dismiss();
      toast("Contact updated successfully", { type: "success" });
    } catch (error) {
      console.log("🚀 / updateContact / error:", error);
    }
  };

  return (
    <div className="bg-red-300 w-full h-full">
      <CustomModal isShown={isShown} onSetHide={onSetHide}>
        <Formik
          initialValues={isUpdate ? contact : INITIAL_VALUE}
          validationSchema={contactSchema}
          onSubmit={(val) => (isUpdate ? updateContact(val) : addContact(val))}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-md font-medium">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="text-lg font-bold bg-slate-200 px-2 py-1 rounded-md"
              />
              <ErrorMessage name="name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md font-medium">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="text-lg font-bold bg-slate-200 px-2 py-1 rounded-md"
              />
              <ErrorMessage name="email" />
            </div>

            <button
              type="submit"
              className="flex bg-yellowDark text-lg font-bold px-4 py-1 w-fit self-end rounded-lg"
            >
              {isUpdate ? "Edit " : "Add "}Contact
            </button>
          </Form>
        </Formik>
      </CustomModal>
    </div>
  );
}
