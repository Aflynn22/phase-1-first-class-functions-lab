const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}



const returnLastTwoDrivers = function () {
    return drivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (fareMultiplier){
    return function(x){
        return fareMultiplier * x;
    }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, function1) {
    return function1(drivers);}