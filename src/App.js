import React, { useState, useEffect } from 'react';
import NavigationBottom from './NavigationBottom';
import './index.scss';

function App() {

  const [renderData, setRenderData] = useState([]);

  // Spell your username
  // ////////////////////
  const profileLetters = "Felipe".split("");

  // This function will load your username
  // Also will change letter color from Username
  const profileName = () => {
    const colorPattern = ["username__letter--blue","username__letter--red","username__letter--yellow","username__letter--green"];

    let starterIndex = 0;
    const renderName = profileLetters.map((letter, index) => {

      if (starterIndex < 4) {
        let classSetup = colorPattern[starterIndex];
        starterIndex = starterIndex + 1;
  
      return <span className={classSetup} key={`${letter}-${index}`}>{letter}</span>
      } else {
        starterIndex = 0;
        let classSetup = colorPattern[starterIndex];
  
        return <span className={classSetup} key={`${letter}-${index}`}>{letter}</span>
      }

    })

    return renderName;
  }

  useEffect(() => {
    const username = "cristianfelipe94";
    const githubURL = `https://api.github.com/users/${username}/repos`;
  
    const result = async () => {
      await fetch(githubURL)
      .then((response) => (response.json()))
      .then((data) => {
        console.log("Remember to return Data: ", data);
        setRenderData(data);
      })
      .catch((err) => {
        console.log("Response error: ", err);
      });
    }
    result();
  }, []);

  return (
      <div className="App">
        <div className="navigation">
          <div className="navigation__top">
            <p className="username">{profileName()}</p>

            <div className="searchbar">
              <input className="searchbar__input" placeholder="Search for a portfolio or project"></input>
              <span className="icon icon--x"></span>
              <hr className="separator separator--vertical"></hr>
              <span className="icon icon--voice"></span>
              <span className="icon icon--search"></span>
            </div>

            <div className="profile">
              <span className="icon icon--account"></span>
            </div>
          </div>

          <div className="navigation__bottom">
            <div className="navigation__bottom--left">
              <NavigationBottom/>
            </div>

            <div className="navigation__bottom--right">
                <p className="navigation__bottom_label">Settings</p>
                <p className="navigation__bottom_label">Tools</p>
            </div>
          </div>
        </div>

        <hr className="separator separator--horizontal"/>

        <div className="content">
          <div className="content__intro">
            <p>About 26 years old and full of goals.</p>
          </div>

          <div className="content__portfolio">
            { renderData.length > 0 ? 
              renderData.map((element, index) => {
                return (
                  <div className="portfolio__item" key={`${element.name}-${index}`}>
                    {element.clone_url ? <p className="portfolio__item-url">{element.clone_url}</p> : ""}
                    {element.name ? <a className="portfolio__item-title" href={element.svn_url} target="_blank" rel="noopener noreferrer">{element.name}</a> : ""}
                    {element.description ? <p className="portfolio__item-description">{element.description}</p> : ""}
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
      </div>
  );
}

export default App;
