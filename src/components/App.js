import "./App.scss";
import Main from './main/main';
import Nav from './nav/nav';

function App() {
  return (
    <div className="app d-flex">
      <Nav/>
      <Main/>
    </div>
  );
}

export default App;
