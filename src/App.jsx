

const App = () => {
  const onClickHandler = (event) => {
    console.log('clicked', event);
  }
  const onChangeHandler = (event) => {
    console.log('onC hange', event.target.value);
  }
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      console.log('submitted', event);

    }}>
      test
     <input type={'text'} onChange={onChangeHandler}/>
      <button type={'submit'} onClick={onClickHandler}>button</button >
    </form>
  )
}

export default App;
