const App = () => {
  const onClickHandler = () => {
    console.log('clicked');
  }
  return (
    <div onClick={onClickHandler}>
      test
    </div>
  )
}

export default App;
