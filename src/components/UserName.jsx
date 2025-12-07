
const UserName = (props) => {
  console.log(props);
  return (

    props.userName >= 20 ? (
      <p className='oops'>
        {props.userName}
        <button>Изменить имя</button>
      </p>
  ):
  (
    <p className='oops'>{props.userName} {props.userSurname}</p>
  )
  )
}



  export default UserName;