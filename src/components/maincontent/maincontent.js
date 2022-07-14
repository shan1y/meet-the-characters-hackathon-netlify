import React, { Component } from "react";
import Intro from "../intro/intro";
import axios from "axios";
import myImage from "../../assets/heroimage.jpg";
import "./maincontent.scss";

class MainContent extends Component {
  state = {
    isSeriesVisible: false,
    seriesList: [],
  };

  seriesData = () => {
    axios
      .get("https://characters-hackathon-server.herokuapp.com/series")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((seriesData) => {
        this.setState({
          seriesList: seriesData,
          isSeriesVisible: true,
        });
      });
  };

  selectSeries = (serieID) => {
    window.location.href = `http://localhost:3000/series/${serieID}`;
  };

  render() {
    return (
      <div>
        <div className="content">
          <div className="left-container">
            <h1>Meet the Main Characters</h1>
            <p className="content__paragraph">
              Get to know the main characters of some of the most popular
              Netflix Series!
            </p>
            <button className="content__button" onClick={this.seriesData}>
              Get Started
            </button>
          </div>
          <div className="right-container">
            <img className="right-container__image" src={myImage} />
          </div>
        </div>
        {this.state.isSeriesVisible ? (
          <Intro
            seriesList={this.state.seriesList}
            selectSeries={this.selectSeries}
          />
        ) : null}
      </div>
    );
  }
}

export default MainContent;
