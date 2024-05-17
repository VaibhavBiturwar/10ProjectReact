import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ContactCard from "./components/ContactCard";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebaseConfig.js";
import { useVisibility } from "./hooks/useVisibility.js";
import ContactForm from "./components/ContactForm.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [list, setList] = useState([]);
  const { isShown, onSetHide, onSetShow } = useVisibility();

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setList(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadContacts();
  }, []);

  const onSearchChange = (e) => {
    const val = e.target.value;
    try {
      const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setList(
          contactList.filter((contact) =>
            contact.name.toLowerCase().includes(val.toLowerCase())
          )
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-[375px] flex mx-auto flex-col min-h-[100vh] py-4">
        <Navbar />
        <Search onSetShow={onSetShow} onChange={onSearchChange} />
        <ContactCard data={list} />
        <ContactForm
          isShown={isShown}
          onSetHide={onSetHide}
          onSetShow={onSetShow}
        />
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
}

export default App;
