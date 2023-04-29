
import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  function handleClick() {
    setListTarefa((old) => [...old, { id: Date.now(), title: textTarefa }]);
    setTextTarefa("");
  }
  function resetList() {
    setListTarefa([])
  }

  function handleDeleteTask(idtask){
    setListTarefa(listTarefa.filter( el=> el.id !== idtask))

  }

  
  return (
    <div className="mae">


      <form className="form-container">
        <TextField
          value={textTarefa}
          id="standard-basic"
          label="Standard"
          variant="standard"
          placeholder="Digite aqui"
          onChange={({ target }) => setTextTarefa(target.value)} />

        <Button variant="contained" onClick={handleClick}>Add</Button>
        <Button variant="contained" color="secondary" onClick={resetList}>delete</Button>


      </form>
      <div className="meio">
        {
          listTarefa.map((tarefa) => (
            <div key={tarefa.id}>



              <div className="task-single">

                <div>
                  {tarefa.title}
                </div>


                <HighlightOffIcon onClick={() => handleDeleteTask(tarefa.id)}/>
              </div>


            </div>


          ))

        }
      </div>
    </div>

  )
}

export default App

//<div className="diogo"></div>