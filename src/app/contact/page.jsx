import React from 'react';
import styles from './contact.module.css';
import ImageContainer from '@/components/imageContainer/ImageContainer';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name And Surname' className={styles.input}/>
          <input type="email" placeholder='Email Address' className={styles.input}/>
          <input type="text" placeholder='Phone Number (Optional)' className={styles.input}/>
          <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder='Message'
            className={styles.textArea}
          > 
          </textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
      <ImageContainer src={'/contact.png'} alt={'Contact Image'}/>    
    </div>
  )
}

export default ContactPage;
