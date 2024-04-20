import './app.css'

function App() {
  const obj = {
    name :'Alex',
    nickName : 'Chupik',
    age: 24,
    city: 'Kirov'
  }
  return (
    <div className='parent'>
      {
        obj.age
      }
    </div>

  );
}

export default App;
