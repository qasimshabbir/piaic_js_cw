pragma solidity ^0.7.1;

contract HelloWorld{

    string public first = "Hello World";
    uint8 public age = 127;
    bool public isGood = true;
    address public thisContract = address(this);
    enum Gender {male,female}
    struct Student{
        uint rollNo;
        string Name;
        uint8 age;
        Gender gender;
    }
    Student public piaicChamps;
    //event declare
    event ageRead(string, uint8);
    
    function doSomething() external returns(uint,string memory,uint8){
        piaicChamps = Student(10,"Rehan",25,Gender.male);
        emit ageRead(piaicChamps.Name,piaicChamps.age);
        piaicChamps = Student(11,"Lubna",25,Gender.female);
        
        return (piaicChamps.rollNo,piaicChamps.Name,piaicChamps.age);
    }
    
    function doSomething1() external payable returns(bool){
        isGood = false;
        return isGood;
    }
    
    function doSomething2() public view returns(bool){
        return isGood;
    }
    
    function doSomething3() public pure returns(uint){
        return 2+2;        
    }
    
}
