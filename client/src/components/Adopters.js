import { useSelector } from "react-redux";

function Adopters() {
    const adoptersList = useSelector((state)=>{
        return state.adoptReducer.adopters
    })
  return (
    <div>
        <div id="adopted_pet_info">
            <h3>ADOPTED PET LIST Owner's Address</h3>
        </div>
        <div>            
            {
               adoptersList.map((list,index) => (
                list !== '0x0000000000000000000000000000000000000000' ?<div id="adopted_pet_info" key={index}>Index = {index} - {list}</div>:null
             ))
            }    
        </div>
    </div>
  );
}

export default Adopters;
