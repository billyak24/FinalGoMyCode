
import React from 'react'
import Styles from './Subfooter.module.css'

const SubFooter = () => {
    return (
        <div>
            <div className={Styles.subFootercontainer}>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Bus Hire Cities In Algeria</h4>
                    <p>Bus Hire in Oran</p>
                    <p>Bus Hire in Constantine</p>
                    <p>Bus Hire in Laghouat</p>
                    <p>Bus Hire in Batna</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Bus Hire in Biskra</p>
                    <p>Bus Hire in Tébessa</p>
                    <p>Bus Hire in Tlemcen</p>
                    <p>Bus Hire in Tizi Ouzou</p>
                </div>
                <div className={Styles.subFootercontainer_eachSection}>
                    <h4>Tempo travellers in other cities</h4>
                    <p>Tempo travellers in Sétif</p>
                    <p>Tempo travellers in Oran </p>
                    <p>Tempo travellers in Batna</p>
                    <p>Tempo travellers in Tébessa</p>
                    <p>Tempo travellers in Sidi Bel Abbès</p>
                </div>
                <div className={Styles.subFootercontainer_alternateSection}>
                    <p>Tempo travellers in Djelfa</p>
                    <p>Tempo travellers in Jijel</p>
                    <p>Tempo travellers in Constantine</p>
                    <p>Tempo travellers in Tlemcen</p>
                    <p>Tempo travellers in Tizi Ouzou</p>
                </div>
            </div>
        </div>
    )
}

export default SubFooter
