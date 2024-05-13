import { useState } from "react";
import styles from "./ContactForm.module.css";
import ActionBtn from "../ActionBtn/ActionBtn";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function ContactForm() {
  const [values, setValues] = useState({});
  const onSubmitForm = (e) => {
    e.preventDefault();

    setValues({
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    });
  };

  return (
    <>
      <div className={`${styles.contactCtr} container `}>
        <section className={styles.dataCtr}>
          <div className={styles.btnRow}>
            <ActionBtn
              label={"VIA SUPPORT CHAT"}
              onPress={() => console.log("Message")}
              icon={<MdMessage size={20} />}
            />
            <ActionBtn
              label={"VIA CALL"}
              onPress={() => console.log("Call")}
              icon={<FaPhoneAlt size={20} />}
            />
          </div>
          <ActionBtn
            isOutline={true}
            label={"VIA EMAIL FORM"}
            onPress={() => console.log("Email")}
            icon={<MdMail size={20} />}
          />
          <br />
          <form className={styles.formCtr} onSubmit={onSubmitForm}>
            <section className={styles.inputCtr}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </section>
            <section className={styles.inputCtr}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </section>
            <section className={styles.inputCtr}>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={8} style={{ padding: 10 }} />
            </section>

            <section className={styles.submitCtr}>
              <ActionBtn label={"Submit"} />
            </section>
          </form>
        </section>
        <section className={styles.graphicCtr}>
          <img src="/service.png" alt="graphic" />
        </section>
      </div>
      <p>{JSON.stringify(values)}</p>
    </>
  );
}
