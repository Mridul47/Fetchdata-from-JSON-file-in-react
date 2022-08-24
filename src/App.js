import './App.css';
import Europeanglorys from './records.json';

function App() {
  return (
    <div className="App">
      <strong>...European Success</strong>
      <br/>
      {
        Europeanglorys && Europeanglorys.map(record =>{
          return(
            <div className='box' key={record.id}>
              <strong>{record.Name}</strong><br/>
              {record.content} <br/>

              {record.UCL && record.UCL.map(data=>{
                return(
                  <div key={record.id}>
                    {data.titles}
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
