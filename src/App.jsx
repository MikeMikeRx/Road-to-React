import './App.css'

const list = [
  {
    title: 'React',
    url: 'http://react.dev',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'http://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]


function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <ul>
        {list.map(item => {
          return <li key={item.objectID}>{item.title}</li>
        })}
      </ul>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />            
    </div>
  )
}

export default App
