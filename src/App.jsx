import UserName from './components/UserName.jsx';


const USERS = [
  {id: 1, name: 'Alex', surname: 'Burn', age: 32, passport: 2902},
  // {id: 2, name: 'Alex', surname: 'Turn', age: 44, passport: 2332},
  // {id: 3, name: 'Berlin', surname: 'Lugan', age: 62, passport: 2350},
  // {id: 4, name: 'Crimson', surname: 'Crimson', age: 12, passport: 7842},
];


const App = () => {
  return (
    <div>
      {USERS.map((user) => (
        <div key={(user.id)}>
          <UserName
            test = {user.name}
            test2 = {user.passport}
            test3 = {4332}
            test4 = {'sass'}
            test5 = {[user.passport, user.age]}
            test6 = {[444,'999', [true], {hello: 'world'}]}
            test7 = {false}
            test8 = {() =>{}}
            test9 = 'tron'
          />

        </div>
       ))}
    </div>
  )
}

export default App;
