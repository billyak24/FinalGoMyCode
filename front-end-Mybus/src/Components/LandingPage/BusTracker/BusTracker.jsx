import React from "react";
import styles from "./BusTracker.module.css";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
const data = [
  {
    type: "Buses",
    number: "20,000",
    details: "Total buses currently being tracked",
  },
  {
    type: "Routes",
    number: "30,000",
    details: "Total routes covered by live tracking",
  },
  {
    type: "Users",
    number: "20,000",
    details: "Total users using Track MyBus feature",
  },
];

const BusTracker = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperFlexContainer}>
        <div className={styles.imgBox}>
          <img
            src="https://images.unsplash.com/photo-1625217527288-93919c99650a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80"
            alt="tracker"
          />
        </div>
        <div className={styles.writingBox}>
          <h2>TRACK MYBUS - Smarter Way To Travel</h2>
          <p>
            Track your bus with our ‘Track MyBus’ feature and know the exact
            location in real-time.Stay informed and keep your family informed!
          </p>
          <Button variant="outlined" color="primary">
            know more
          </Button>
        </div>
      </div>

      <hr />
      <div className={styles.flexContainer}>
        {data.map((item) => {
          return (
            <div key={uuidv4()} className={styles.flexItems}>
              <p>{item.type}</p>
              <h1>{item.number}</h1>
              <p>{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusTracker;
