import React from "react";
import styles from "./ContactUs.module.css";
import homeIcon from "../../images/icons/home.png";
import PagesHeader from "../Reuseables/PagesHeader";
const ContactUs = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <PagesHeader className={styles.header}>
        <h1>Contact Us</h1>
        <div>
          <img src={homeIcon} />
          <p>
            <span>/</span> contact us
          </p>
        </div>
      </PagesHeader>
      <div className={styles.map}></div>
      <div className={styles.form}>
        <form className={styles.input_form}>
          <h1>Tell Us Your Project</h1>
          <input htmlFor="text" placeholder="Name" className={styles.name} />
          <div className={styles.box}>
            <input
              htmlFor="email"
              placeholder="Email"
              className={styles.email}
            />
            <input
              htmlFor="text"
              placeholder="Subject"
              className={styles.subject}
            />
          </div>
          <textarea />
          <button className={styles.submit_btn}>Send Message</button>
        </form>
        <div className={styles.address}>
          <h1>Contact Us</h1>
          <p>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram anteposuerit litterarum formas human.
          </p>
          <address>Address : No 40 Baria Sreet 133/2 NewYork City</address>
          <p>E-mail: info@yourdomain.com</p>
          <p>+88013245657</p>
          <p className={styles.w_h}>Working Hours</p>
          <p>Monday - Saturday: 8AM - 22PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
