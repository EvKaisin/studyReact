import { useEffect, useState } from 'react';
import './app.css'

function App() {
  const [value, setValue] = useState(Math.floor(Math.random() * 100))
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=United+States')
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 10)))

  })
  return (
    <>
      <div className="center">
        <input type="number" value={value} />
        <button onClick={() => { setValue(value * 2) }}>Multi</button>
        <button onClick={() => { setValue(value / 2) }}>Divide</button>
        <button onClick={() => { setValue(Math.floor(Math.random() * 100)) }}>UPD</button>
      </div>
      <div>
        <ol>
          <button onClick={() => { setCount(count + 1) }}>Click</button>
          {data.map((el, i) => {
            if (i <= count) {
              return <div key={i} className='universe'>{i + 1} {el.name}{'   '}{el.web_pages[0]}</div>
            }
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
