import React from 'react'

import styles from "./footer.module.css"


const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>

                <p>
                    <span>React + TS</span> @2023
                </p>

            </footer>
        </div>
    )
}

export default Footer