pragma solidity ^0.5.0;

contract Adoption {
    address[16] public adopters;
    address myaddress;


    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
        require(petId >= 0 && petId <= 15);
    //"0x0000000000000000000000000000000000000000"
        if(adopters[petId] != myaddress){
            revert("This pet is Already Adopted!") ;
        }
        adopters[petId] = msg.sender;

        return petId;
    }    

    //Removing a pet
    function removeAdopt(uint petId) public returns(uint){

    //require(adopters[petId] == msg.sender,"You are not the owner of the Adopted Pet!") ;

    if(adopters[petId] != msg.sender){
        revert("You are not the owner of the Adopted Pet!") ;
        return petId ;
    }else{
        adopters[petId] = myaddress ;

        return petId ;
        
    }
        
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}