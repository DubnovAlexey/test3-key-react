import UserName from './components/UserName.jsx';
import Button from './components/Button.js';
import Description from './components/Description.js';

let USERS = [
  {id: 1, name: 'Alex', surname: 'Burn', age: 32, passport: 2902},
  {id: 2, name: 'Alex', surname: 'Turn', age: 44, passport: 2332},
  {id: 3, name: 'Berlin', surname: 'Lugan', age: 62, passport: 2350},
  {id: 4, name: 'Crimson', surname: 'Crimson', age: 12, passport: 7842},
];


const App = () => {
  const changeName = (id, newName) => {
    USERS = USERS.map((user) => {
      if(user.id === id) {
        return {...user, name: newName};

      }
      return user;
    })

  };
  return (
    <div>
      {USERS.map((user) => (
        <div key={(user.id)}>
          <UserName
            userName = {user.name}
            userSurname = {user.surname}
            UserAge = {user.age}
            UserPassport={user.passport}
            changeName = {changeName}

          />

        </div>
       ))}
    </div>
  )
}

export default App;
