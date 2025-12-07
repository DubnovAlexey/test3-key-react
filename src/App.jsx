const USERS = [
  {id: 1, name: 'Alex', surname: 'Burn', age: 32, passport: 2902},
  {id: 2, name: 'Alex', surname: 'Turn', age: 44, passport: 2332},
  {id: 3, name: 'Berlin', surname: 'Lugan', age: 62, passport: 2350},
  {id: 4, name: 'Crimson', surname: 'Crimson', age: 12, passport: 7842},
];


const App = () => {
  return (
    <div>
      {USERS.map((user) => (
        <p key={user.id}>{user.name} {user.surname}</p>
      ))}


      {USERS.map((user) => (
        <div key={user.id}>
        <p>{user.name} {user.surname}</p>
        </div>
       ))}
    </div>
  )
}

export default App;
