import React, { useState } from 'react';
import styles from './Contacts.module.css';
import snapchatLogo from '../../assets/snapchat.svg';
import facebookLogo from '../../assets/facebook.svg';
import TwitterLogo from '../../assets/x.svg';

const Contacts = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Сообщение отправлено!');
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <div className={styles.container}>
      {/* Основной блок контактов */}
      <div className={styles.contactsSection}>
        <h1 className={styles.title}>Контакты</h1>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Телефон:</span>
            <span className={styles.contactValue}>8 800 000 00 00</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <span className={styles.contactValue}>example@email.com</span>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Введите сообщение"
            className={styles.formTextarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <div className={styles.socialBlock}>
            <p className={styles.socialTitle}>Найдите нас:</p>
            <div className={styles.socialIcons}>
              <img src={snapchatLogo} alt="Snapchat" className={styles.socialIcon} />
              <img src={facebookLogo} alt="Facebook" className={styles.socialIcon} />
              <img src={TwitterLogo} alt="Twiter" className={styles.socialIcon} />
            </div>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>


      <footer className={styles.footer}>
        <div className={styles.footerContacts}>
          <h3 className={styles.footerTitle}>Контакты</h3>
          <p>8 800 000 00 00</p>
          <p>email: example@email.com</p>
        </div>
        <div className={styles.footerCopyright}>
          <p>© 2026 Спикер-магазин. Все права защищены</p>
        </div>
        <div className={styles.footerEmail}>
          <p>Введите свой email:</p>
          <input type="email" placeholder="Email" className={styles.footerInput} />
        </div>
      </footer>
    </div>
  );
};

export default Contacts;