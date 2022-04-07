// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers];
const createFareMultiplier = function(number){
    return function(fare){
        return number * fare;
    }
}
const fareDoubler = function createFareMultiplier(number){
   return  number * 2;
}
const fareTripler = function createFareMultiplier(number) {
    return number * 3;
}
const selectDifferentDrivers = function(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}


