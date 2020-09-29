import React from 'react'

import styles from './style.module.css'

const InquiryBlock = () => (
    <section className={styles.inquiryBlock}>
        <div className={styles.dateBoxContainer}>
            <span>Arrival date</span>
            <div className={styles.dateBox}>
                <img src="https://github.com/n00ne1mportant/PublicFilesRepo/blob/master/appvd-calendar-2.png?raw=true" />
                <span>{`${(new Date()).getDate()}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`}</span>
            </div>
        </div>
        <div className={styles.dateBoxContainer}>
            <span>Departure date</span>
            <div className={styles.dateBox}>
                <img src="https://github.com/n00ne1mportant/PublicFilesRepo/blob/master/appvd-calendar-2.png?raw=true" />
                <span>{`${(new Date()).getDate() + 1}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`}</span>
            </div>
        </div>
        <button>Send inquiry</button>
    </section>
)

export default InquiryBlock