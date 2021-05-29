import React, { useState, useEffect } from "react";
import { Card } from "antd";
import swal from "sweetalert";

import axios from "axios";
import "./ProgramPage.css";
import { FaStar } from "react-icons/fa";
const ProgramPage = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const [Program, setProgram] = useState({});
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  localStorage.setItem("user_id", "60aec9d4194c734e2c5c050e");

  useEffect(() => {
    console.log("hello !");

    axios
      .get(`http://localhost:3000/api/programs/${id}`)
      .then((res) => {
        console.log(res);
        setProgram(res.data);
        setHover(Math.round(res.data.rating));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const followProgram = () => {
    const user = localStorage.getItem("user_id");
    axios
      .post(`http://localhost:3000/api/programs/follow/${id}`, {
        user_id: user,
      })
      .then((res) => {
        swal({
          title: "Done!",
          text: "Now you are member of this program ! ",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeRating = (ratingValue) => {
    setRating(ratingValue);
    const user = localStorage.getItem("user_id");

    console.log("user ");
    axios
      .post(`http://localhost:3000/api/programs/rating/${id}`, {
        user_id: user,
        rate: ratingValue,
      })
      .then((res) => {
        console.log(res);
        setProgram(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <header className="program-header">
        <a
          href="#suivre"
          className="main-button-slider"
          onClick={followProgram}
        >
          Follow program{" "}
        </a>
      </header>
      <section className="program-details">
        <div className="program-description">
          <h2>{Program.programName}</h2>
          <div>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    defaultValue={Program.rating}
                    style={{ visibility: "hidden" }}
                    onClick={() => changeRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    size={40}
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <h2>{Program.rating}</h2>
          {Program.notes && <h3>{Program.notes.length} notes </h3>}
          <Card
            style={{
              borderRadius: 8,
              borderColor: "white",
              backgroundColor: "#FCFCFD",
              width: "80%",
            }}
          >
            This 3-day beginner muscle building plan includes a full body
            workout over the course of a week of training. An experienced weight
            lifter may have trouble adding muscle using this program but not a
            novice.
          </Card>{" "}
        </div>
        <Card
          className="site-card-wrapper"
          style={{
            borderRadius: 8,
            borderColor: "white",

            width: "50%",
          }}
        >
          <Card
            type="inner"
            title={<span style={{ fontSize: 21 }}>Periode</span>}
            style={{
              borderRadius: 8,
              marginBottom: 10,
              width: "70%",
              fontSize: 20,
            }}
          >
            {Program.period}
          </Card>
          <Card
            type="inner"
            title={<span style={{ fontSize: 21 }}>Frequence</span>}
            style={{
              borderRadius: 8,
              marginBottom: 10,
              width: "70%",
              fontSize: 20,
            }}
          >
            {Program.frequence}
          </Card>
          <Card
            type="inner"
            title={
              <span style={{ fontSize: 21 }}>Number of subscriptions </span>
            }
            style={{
              borderRadius: 8,
              marginBottom: 10,
              width: "70%",
              fontSize: 20,
            }}
          >
            {Program.numberSubscriptions}
          </Card>
        </Card>
      </section>
    </React.Fragment>
  );
};
export default ProgramPage;
