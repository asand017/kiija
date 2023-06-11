import React from 'react';
import '../styles/global.css';
import TopicNavigator from './TopicNavigator';

const Home = (props) => {
    const header = props?.title || "Are You Ready to Become a Math God?";

    return (
      <>
        <div className="Home-container">
          <h1 className="Title">{header}</h1>
          <h1>Pick a topic</h1>
          <TopicNavigator/>
        </div>
      </>
    );
}

export default Home;