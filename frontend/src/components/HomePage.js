import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const personalClick = () => {
    navigate("/personal");
  };
  const friendsClick = () => {
    navigate("/friends");
  };
  const groupsClick = () => {
    navigate("/groups");
  };
  return (
    <div>
      <div className="Header">
        <img
          className="BackgroundImg"
          alt=""
          src="https://image.slidesdocs.com/responsive-images/background/money-financial-coin-chart-finance-powerpoint-background_4005685bce__960_540.jpg"
        />
        <div className="container">
          <h1 className="Heading">Monitor Expenses</h1>
          <h2 className="Sub Heading">Start Saving</h2>
          <p className="HomeText">
            Finance Manager keep tracks of your daily expenses So that you can
            monitor
            <br />
            your weekly, monthly or yearly expenses.{" "}
            <a className="Join" href="/">
              Join us
            </a>{" "}
            today to save more
            <br />
          </p>
        </div>
      </div>
      <div className="Cards">
        <div className="Elements">
          <img
            src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c3RhaW5hYmxlJTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="ElementImage"
          />
          <h2 className="CardsHeading">Personal</h2>
          <p className="CardsText">
            Manage your personal Finances keep detailed track on your daily
            expenses and start saving.
          </p>
          <div className="btns">
            <button onClick={personalClick} className="Homebtn">
              Personal
            </button>
          </div>
        </div>
        <div className="Elements">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/82/27/94/1000_F_182279482_ILUncHjOcLdaJpEkH7VeIs3QrkNQccTk.jpg"
            alt=""
            className="ElementImage"
          />
          <h2 className="CardsHeading">Friends</h2>
          <p className="CardsText">
            Check and monitor your friends spending get idea of how your peers
            are managing their finances.
          </p>
          <div className="btns">
            <button onClick={friendsClick} className="Homebtn">
              Friends
            </button>
          </div>
        </div>
        <div className="Elements">
          <img
            src="https://fox56news.com/wp-content/uploads/sites/24/2023/04/GettyImages-1366342725.jpg?strip=1"
            alt=""
            className="ElementImage"
          />
          <h2 className="CardsHeading">Groups</h2>
          <p className="CardsText">
            Manage Finances of family or group of friends keep detailed track of
            daily expenses and start saving.
          </p>
          <div className="btns">
            <button onClick={groupsClick} className="Homebtn">
              Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
