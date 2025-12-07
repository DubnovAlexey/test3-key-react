const App = () => {
  const onClickHandler = () => {
    console.log('clicked');
  }
  return (
    <div >
      <button onClick={onClickHandler}>Click Me!</button>
      test
    </div>
  )
}

export default App;
