import React from 'react'

import styles from './style.module.css';

const ContactForm = () => (
    <main className={styles.contactForm}>
        <section className={styles.contactInfo}>
            <h2 className={styles.title}>villa oliva verde</h2>
            <h3>address</h3>
            <address>
            2145 Inadia str, Wyndia
            </address>

            <h3>telephone number</h3>
            <p>+385 99 3245 570</p>

            <h3>email</h3>
            <p>example@email.com</p>

            <p>IBAN: HR08497593759385739574</p>
        </section>
        <section className={styles.form}>
            <h2 className={styles.title}>contact us</h2>
            <form>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="country" placeholder="Country">Country</label>
                    <input name="country" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input name="phone" type="tel" />
                </div>
                <div className={styles.message}>
                    <label htmlFor="message">Message</label>
                    <input name="message" type="text" />
                </div>
                <button>Send Message</button>
            </form>
        </section>
    </main>
)

export default ContactForm