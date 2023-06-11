import '../styles/global.css';

const Home = (props) => {
    const header = props.title;

    return (
      <>
        <div className="Home-container">
          <h1 className="Title">{header}</h1>
          <h1>Pick a topic</h1>
        </div>
      </>
    )
}

export default Home;