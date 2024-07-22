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
          src="https://img.freepik.com/premium-photo/blue-money-business-graph-finance-chart-diagram-economy-3d-coin-background-with-growth-financial-data-concept-investment-market-profit-bar-success-market-stock-technology-currency-report_79161-2359.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph"
        />
        <div className="container">
          <h1 className="Heading">Monitor Expenses</h1>
          <h2 className="Sub-Heading">Start Saving</h2>
          <p className="HomeText">
          Take Control of Your Finances, Track Expenses with Ease Stop Feeling Lost!
          <br />
          Gain Clarity on Your Spending.
            {" "}
            <a className="Join" href="/">
              Join us
            </a>{" "}
            today to save more
            
          </p>
        </div>
      </div>
      <div className="Cards">
        <div className="elements">
          <img
          src="https://media.istockphoto.com/id/1449224970/photo/abstract-financial-graph-with-up-trend-line-candlestick-chart-in-stock-market-on-neon-light.webp?b=1&s=170667a&w=0&k=20&c=Mrs34QbkHhutPP7z9CNq5ubwiX5cJHylEdWTNduHSCA="
          alt=""
          className="ElementImage"
          />
          <div className="right-elements">
          <h2 className="CardsHeading"> Personal Finance Management</h2>
          <p className="CardsText">
          Track Every Penny: Effortlessly record daily expenses with our user-friendly interface. No more scrambling through receipts!
          <br/>
          Gain Powerful Insights: Understand your spending patterns like never before. See where your money goes, week by month, year.
          <br/>
          Uncover Hidden Savings: Identify areas where you can cut back and free up cash for your financial goals.
          <br/>
          Plan for the Future: With a clear picture of your income and expenses, set realistic goals and build a strong financial foundation.
          <br/>
          Take Control: Make informed financial decisions with confidence. Our tools put you in the driver's seat.
          </p>
          <div className="btns">
            <button onClick={personalClick} className="Homebtn">
              Personal
            </button>
          </div>
          </div>
        </div>
        <div className="elements">
          <img
            src="https://media.istockphoto.com/id/1324845377/photo/business-arrow-increase-of-success-graph-and-growth-stock-market-earnings-financial-on-profit.webp?b=1&s=170667a&w=0&k=20&c=sjCaOsOjl-_9EtSCK0ihkTc_4Z2r2wdeyy_VwCd0hBA="
            alt=""
            className="ElementImage"
          />
          <div className="left-elements">
            <h2 className="CardsHeading">Friends</h2>
            <p className="CardsText">
            "Not sure where your money's going? This feature can help you identify areas to improve and get inspired by your financially savvy friends."
            <br/>
            Get budgeting buddies: Find inspiration and motivation from friends who are crushing their financial goals.
            <br/>
            Benchmark your spending: Curious how your financial habits stack up? See where you stand compared to friends with anonymized spending data.
            <br/>
            Learn new money hacks: Discover tips and tricks for saving and spending from the people you know and trust.
            <br/>
            "Remember, everyone's financial journey is unique. Use this as a tool to learn and grow, not to compare or compete."
            </p>
            <div className="btns">
              <button onClick={friendsClick} className="Homebtn">
                Friends
              </button>
            </div>
          </div>
        </div>
        <div className="elements">
          <img
            src="https://img.freepik.com/free-vector/digital-rupee-concept-background-with-rupee-symbol_1017-36812.jpg?w=1380&t=st=1721645544~exp=1721646144~hmac=b30fb12448f86ff4b7871dcfcdc093ffb97980611b17a0bc515421ea88d0315d"     
            alt=""
            className="ElementImage"
          />
          <div className="right-elements">
            <h2 className="CardsHeading">Groups</h2>
            <p className="CardsText">
            Effortless expense tracking: Say goodbye to spreadsheets and IOUs! Everyone can add expenses in real-time, keeping your group finances organized.
            <br/>
            Split bills fairly: No more arguments about who owes what. Split expenses evenly, proportionally, or by custom percentages.\
            <br/>
            Stay on budget: Set shared spending goals and track progress together. See where your group money is going and make informed decisions.
            <br/>
            Transparency and accountability: Full transparency keeps everyone informed and accountable. See where everyone's spending stands.
            <br/>
            Multiple currencies supported: Planning a group trip abroad? No problem! Track expenses in different currencies with ease.
            </p>
            <div className="btns">
              <button onClick={groupsClick} className="Homebtn">
                Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
