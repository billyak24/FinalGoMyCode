
import React from 'react'
import Styles from './busHireFooter.module.css'

const BusHireFooter = () => {
    return (
        <div>
            <div className={Styles.busHire_Footer}>
                <div className={Styles.busHireFooterTextSection}>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Book</h3>
                        <p>Bus Ticket</p>
                        <p>Bus hire</p>
                        <p>Tempo Travellers</p>
                        <p>Car Rentals</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Info</h3>
                        <p>T & C</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>FAQ</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Global Sites</h3>
                        <p>Tunisia</p>
                        <p>Morocco</p>
                        <p>Libya</p>
                     
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Our Partners</h3>
                        <p>Yassir </p>
                        <p>Coursa </p>
                    </div>
                </div>
                <div className={Styles.busHireFooterimageSection}>
                    
                    <div className={Styles.copyRightText}>Ⓒ 2023 All rights reserved </div>

                </div>
            </div>
        </div>
    )
}

export default BusHireFooter
