import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { users, loading, error, nextPage, prevPage, page } = useFetch();

  return (
    <div className="App">
      <div>
        <h1>User List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul className="UsersList">
          {users.map((user) => (
            <li key={user.login.uuid} className="UsersRow">
              <img className='UsersImage' src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
              <p className='UsersName'>{`${user.name.first} ${user.name.last}`}</p>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={prevPage} disabled={page === 1}>
            Previous
          </button>
          <button onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
