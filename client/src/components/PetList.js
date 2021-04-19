import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import petListJson from '../pets.json' ;
import { adopt, adoptPet, removeAdopt,loadAdopters } from "../store/adoptSlice";
import Adopters from "./Adopters";

import '../App.css';

function PetList(){


    const address = useSelector((state) => {
            return state.adoptReducer.address ;
    }) ;
    const contract = useSelector((state) => {
        return state.adoptReducer.contract ;
    });

    const adoptersList = useSelector((state)=>{
        return state.adoptReducer.adopters
      })

      useEffect(() => {
          setTimeout(function(){

          
        dispatch(loadAdopters({
            contract: contract,
            address:address
        })) ;
    },2000)
    },[adoptersList])

    const {adoptInProgress, adoptError, adoptErrorMessage} = useSelector((state) => {
        return state.adoptReducer ;
    })

    const dispatch = useDispatch() ;

    return(
        <div id="pet_list">
            <div ID="account_info">
               Account Address :: {address}
             </div>
         <Adopters />
         {
                adoptInProgress?
                <div className="plzWait">              
                <img src="images/progress.gif" id="loading"/>
                </div> : null
            }
            {
                adoptError?
                <div>
                <p style={{color: "red"}}>{adoptErrorMessage}</p>
                </div> : null
            }
            <br />
            {
                petListJson.map((item) =>{
                   return <div key={item.id} style={{border: "2px solid black",display:"inline-block", width: "250px", padding:"20px",margin:"10px"}}>
                            <h1>{item.name}</h1>
                            <img alt="140x140" src={item.picture}  style={{width: "200px"}}/>

                            <br/><br/>
                            <div id="pet_info">
                            <strong>Breed</strong>: <span>{item.breed}</span><br/>
                            <strong>Age</strong>: <span>{item.age}</span><br/>
                            <strong>Location</strong>: <span>{item.location}</span><br/><br/>
                            </div>
                            {/* <div> {adoptersList[item.id]}  </div> */}
                            {
                            adoptersList[item.id] == "0x0000000000000000000000000000000000000000" ? 
                            <button type="button" onClick={async () => {
                                console.log("id = ",item.id) ;
                                dispatch(adoptPet(item.id)) ;

                                /*
                                const result = await contract.methods.adopt(item.id).send({from: address}) ;
                                 console.log(result) ;
                                 */

                            }}>Adopt</button>:<button type="button" onClick={ async() => {
                                    dispatch(removeAdopt(item.id)) ;
                            }}>Remove Adopt</button>
                            //<div>Already Adopted</div>
                            }
                   </div>
                })
            }
        </div>
    );
}

export default PetList ;