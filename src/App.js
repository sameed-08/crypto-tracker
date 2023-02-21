import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from "./Pages/Homepage";
import Header from './components/Header';
import CoinPage from "./Pages/CoinPage";
import {makeStyles} from "@material-ui/core/styles";
import Alert  from './components/Alert';
// import Alert from "./components/Alert";


const useStyles = makeStyles({
  App:{
    backgroundColor: 'black',
    color: "white",
    minHeight: "100vh",
  },
});

function App() {

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className = {classes.App}>
        <Header/>
        <Routes> 
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} /> 
        </Routes>
      </div>
      <Alert/>
      
    </BrowserRouter>
  );
}

export default App;
