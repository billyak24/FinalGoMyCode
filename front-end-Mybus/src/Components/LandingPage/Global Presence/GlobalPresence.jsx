
import React from 'react'
import Styles from './GlobalPresence.module.css'

const GlobalPresence = () => {
    return (
        <div>
            <div style = {{backgroundColor : "#f1f1f1"}}>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>OUR GLOBAL PRESENCE</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.sitesworld.com/common/x/i/img/big_flags/Tunisia_Flag.jpg" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>Tunisia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.sitesworld.com/common/x/i/img/big_flags/Morocco_Flag.jpg" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>Morocco</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.fotw.info/images/l/ly.gif" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>Libya</div>
                </div>
            </div>
            <div style = {{display : "flex" , justifyContent : "space-evenly" , marginTop : "60px",marginBottom : "80px"}}>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.sitesworld.com/common/x/i/img/big_flags/France_Flag.jpg" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>France</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.sitesworld.com/common/x/i/img/big_flags/Saudi_Arabia_Flag.jpg"alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>Saudi arabia</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column"}}>
                    <div>
                        <img src = "https://www.sitesworld.com/common/x/i/img/big_flags/Niger_Flag.jpg" alt = "" height = "100px"/>
                    </div>
                        <div className = {Styles.countryName}>Niger</div>
                </div>
            </div>
            </div>
            </div>
            <div className = {Styles.globalPresenceContainer}>
            <div className = {Styles.globalPresenceHeading}>THE NUMBERS ARE GROWING</div>
            <div style = {{display : "flex" , justifyContent : "space-evenly", marginTop : "60px"}}>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>customers</div>
                    <div className = {Styles.numbers}>45 M</div>
                    <div className = {Styles.para}>MyBus is trusted by over 45 million happy customers globally</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center"}}>
                    <div className = {Styles.countryName}>OPERATORS</div>
                    <div className = {Styles.numbers}>3000</div>
                    <div className = {Styles.para}>network of over 3000 bus operators worldwide</div>
                </div>
                <div style = {{display : "flex" , flexDirection : "column", alignItems : "center", paddingBottom : "40px"}}>
                    <div className = {Styles.countryName}>BUS TICKETS</div>
                    <div className = {Styles.numbers}>200+ M</div>
                    <div className = {Styles.para}>Over 200 million trips booked using MyBus</div>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default GlobalPresence
// 
