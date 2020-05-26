import React from 'react';
import NavigationBottom from './NavigationBottom';
import './index.scss';

function App() {

  // Spell your username
  // ////////////////////
  const profileLetters = "Felipe".split("");

  // Add your Portfolio filling this object.
  // ////////////////////
  const porfolioResults = [
    {
      url: "www.porfolioOne.com",
      title: "Portofolio-One",
      description: "Description of Portfolio-One"
    },
    {
      url: "www.porfolioTwo.com",
      title: "Portofolio-Two",
      description: "Description of Portfolio-Two"
    },
    {
      url: "www.porfolioThree.com",
      title: "Portofolio-Three",
      description: "Description of Portfolio-Three"
    },
    {
      url: "www.porfolioFour.com",
      title: "Portofolio-Four",
      description: "Description of Portfolio-Four"
    },
  ]

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

  // This function will load portfolio
  const renderPortfolio = () => {
    const portfolioGroup = porfolioResults.map((portfolio, index) => {
      return (
        <div className="portfolio__item" key={`${portfolio.title}-${index}`}>
          <p className="portfolio__item-url">{portfolio.url}</p>
          <h2 className="portfolio__item-title">{portfolio.title}</h2>
          <p className="portfolio__item-description">{portfolio.description}</p>
        </div>
      )
    });
    return portfolioGroup;
  }
  
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
          {renderPortfolio()}
        </div>
      </div>
    </div>
  );
}

export default App;
