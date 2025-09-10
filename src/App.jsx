import './App.css'

function getTitle(title) {
  return title
}

const numbers = [1,2,3,4]

const exponentialNumbers = numbers.map(function (number) {
  return number * number
})

console.log(exponentialNumbers);


function App() {

  return (
    <div>
      <h1>{getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />            
    </div>
  )
}

export default App
