import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/tableGrid';

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4001/home").then(function (response) {
      if (response.data) {
        setData(response.data)
      }
    })
  }, [])

  return (
    <DataTable data={data} />
  )
}

export default App;
