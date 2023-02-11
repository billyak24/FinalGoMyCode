import React from "react";
import Styles from "./TripTypeContainer.module.css";
import { useSelector } from "react-redux";

const TripTypeContainer = ({ handleClick }) => {
  const customerName = useSelector(
    (state) => state.authReducer.currentCustomer
  );

  const checkLogin = () => {
    if (customerName === null) {
      alert("Please Login, To Book Seats in Mybus");
    } else {
      handleClick();
    }
  };

  const handleLocalAndAirport = () => {
    alert(
      "Currently we are only providing Outstation service, so please select Outstation"
    );
  };

  return (
    <div>
      <div className={Styles.tripTypecontainer}>
        <div className={Styles.hireVehicleHeading}> Get a Vehicle</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: " #e6f2ff",
            padding: "20px",
          }}
        >
          <div
            style={{ color: "#3e3e52", fontWeight: "700", fontSize: "19px" }}
          >
            click on the journey type
          </div>
          <div className={Styles.journeyTypeDiv} onClick={checkLogin}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Outstation</div>
              <div className={Styles.journeySubText}>Anywhere outside</div>
              <div className={Styles.journeySubText}>your City</div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531419859879-934d18f6c42d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                height="90px"
              />
            </div>
          </div>
          <div
            className={Styles.journeyTypeDiv}
            onClick={handleLocalAndAirport}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Local</div>
              <div className={Styles.journeySubText}>Anywhere within</div>
              <div className={Styles.journeySubText}>your City</div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80"
                alt=""
                height="90px"
              />
            </div>
          </div>
          <div
            className={Styles.journeyTypeDiv}
            onClick={handleLocalAndAirport}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={Styles.journeyText}>Airport</div>
              <div className={Styles.journeySubText}>Pickup and drop to</div>
              <div className={Styles.journeySubText}>Airport</div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                height="90px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripTypeContainer;
