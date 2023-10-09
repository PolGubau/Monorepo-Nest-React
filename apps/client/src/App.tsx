function App() {
  const fetchBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <button onClick={fetchBackend}>
      <span>Click me</span>
    </button>
  );
}

export default App;
