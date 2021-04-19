import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import PetList from './components/PetList';
import { initWeb3, loadAdopters } from './store/adoptSlice';


function App() {

  const dispatch = useDispatch() ;

  // const web3 = useSelector((state) => {
  //     return state.adoptReducer.web3 ;
  // });

  const adopters = useSelector((state) => {
    return state.adoptReducer.adopters ;
  });

  useEffect(()=>{
    dispatch(initWeb3()) ;
  },[]) 

  
  useEffect(() => {
    dispatch(loadAdopters()) ;
  },[adopters])

  return (
    <div>
        <PetList/>
    </div>
  );
}

export default App;
