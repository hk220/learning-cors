// https://tarovlog.com/2021/03/10/react-uncaught-referenceerror-usestate-is-not-defined/
const { useEffect, useState } = React

function Body(props) {
  const [ state, setState ] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.text();
    setState({message: data});
  }
  
  return (
    <div>
      <button onClick={fetchData}>Click</button>
      <p>{state.message}</p>
    </div>
  );
}

function MyApp() {
  return (
    <div>
     <h1>Hello, world!</h1>
     <Body />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
