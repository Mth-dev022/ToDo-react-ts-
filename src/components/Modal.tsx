import React from 'react'
import styles from "./modal.module.css"

interface Props {
    children: React.ReactNode
}

const Modal = ({children}:Props) => {

    const closeModal = (e: React.MouseEvent):void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }

  return (

    <div className="hide" id='modal'>
        
        <div onClick={closeModal} className={styles.fade}></div>
        
        <div className={styles.modal}>
            <h2>Texto</h2>
            {children}
        </div>
           
    </div>
  )
}

export default Modal