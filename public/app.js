// https://tarovlog.com/2021/03/10/react-uncaught-referenceerror-usestate-is-not-defined/
const { useEffect, useState } = React

function Body(props) {
  const [ state, setState ] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/people/1");
      const data = await res.json();
      setState(data);
    }
    fetchData();
  });
  
  return (
    <div>
      <p>{state.name}</p>
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
