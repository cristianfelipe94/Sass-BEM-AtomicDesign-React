import React from 'react';
import './index.scss';

function App() {

  // Spell your username
  // ////////////////////
  const profileLetters = ["g","o","o","g","l","e"];

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
    const renderName = profileLetters.map((letter) => {

      if (starterIndex < 4) {
        let classSetup = colorPattern[starterIndex];
        starterIndex = starterIndex + 1;
  
        return <span className={classSetup}>{letter}</span>
      } else {
        starterIndex = 0;
        let classSetup = colorPattern[starterIndex];
  
        return <span className={classSetup}>{letter}</span>
      }

    })

    return renderName;
  }

  // This function will load portfolio
  const renderPortfolio = () => {
    const portfolioGroup = porfolioResults.map((portfolio) => {
      return (
        <div className="content__portfolio_item">
          <p>{portfolio.url}</p>
          <h2>{portfolio.title}</h2>
          <p>{portfolio.description}</p>
        </div>
      )
    });
    return portfolioGroup;
  }
  
  return (
    <div className="App">
      <div className="navigation">
        <div className="navigation__top">
          <div className="username">
            <p>{profileName()}</p>
          </div>

          <div className="searchbar">
            <input placeholder="Search Google or type a URL"></input>
            <div className="icon icon--x">Clean</div>
            <hr className="separator separator--vertical"></hr>
            <div className="icon icon--voice">Voice</div>
            <div className="icon icon--search">Search</div>
          </div>

          <div className="profile">
            <div class="icon icon--menu">Menu</div>
            <div class="icon icon--account">Account</div>
          </div>
        </div>

        <div className="navigation__bottom">
          <div className="navigation__bottom--left">
            <div>
              <p><span>Icon</span>All</p>
            </div>
            <div>
              <p><span>Icon</span>Images</p>
            </div>
            <div>
              <p><span>Icon</span>Videos</p>
            </div>
            <div>
              <p><span>Icon</span>News</p>
            </div>
            <div>
              <p><span>Icon</span>Books</p>
            </div>
            <div>
              <p><span>Icon</span>More</p>
            </div>
          </div>

          <div className="navigation__bottom--right">
              <p><span>Icon</span>Settings</p>
              <p><span>Icon</span>Tools</p>
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
