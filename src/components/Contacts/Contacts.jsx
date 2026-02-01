import React, { useState } from 'react';
import styles from './Contacts.module.css';

// Импорт логотипов 
import snapchatLogo from '../../assets/snapchat.svg';
import facebookLogo from '../../assets/facebook.svg';
import xLogo from '../../assets/x.svg';

const Contacts = () => {
  // Состояние для формы
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных 
    console.log('Форма отправлена:', formData);
    alert(`Сообщение отправлено!\nИмя: ${formData.name}\nEmail: ${formData.email}`);
    
    // Сброс формы
    setFormData({ 
      email: '', 
      name: '', 
      message: '' 
    });
  };

  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.contactsContent}>
          <h1 className={styles.title}>Контакты</h1>
          
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactLabel}>Телефон:</span>
              <span className={styles.contactValue}>+7 (999) 123-45-67</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <span className={styles.contactValue}>info@example.com</span>
            </li>
          </ul>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              className={`${styles.formInput} ${styles.textarea}`}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>

        <div className={styles.socialSection}>
          <p className={styles.socialTitle}>Найдите нас на:</p>
          <div className={styles.socialLinks}>
            <a 
              href="https://snapchat.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img 
                src={snapchatLogo} 
                alt="Snapchat" 
                className={styles.socialLogo}
              />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img 
                src={facebookLogo} 
                alt="Facebook" 
                className={styles.socialLogo}
              />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img 
                src={xLogo} 
                alt="X (Twitter)" 
                className={styles.socialLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;