function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    return meter;
}
var meter = kilometerToMeter(7);
console.log(meter);

var watch = 50;
var phone = 100;
var laptop = 500;
function budgetCalculator(){
    var result = phone + watch + laptop;
    return result;
}
var total = budgetCalculator();
console.log("Total cost : ",total);


function hotelCost(night){
    var cost=0;
    if(night<=10){
        cost=night*100;
    }
    else if(night<=20){
        var fast10 = 10*100;
        var extra = night-10;
        var sec10 = extra*80;
        cost = fast10+sec10;
    }else{
        var fast10 = 10*100;
        var sec10 = 10*80;
        var extra = night-20;
        var others = extra*50;
        cost = fast10+sec10+others;
    }
    return cost;
}
var hotelbill = hotelCost(71);
console.log(hotelbill);


var friend = ["Tusher","Mahadi","Ratul","hamid","gazi","sakil"];
function megaFriend(){
    var maxname=0;
    for(i=0; i<friend.length; i++){
        if(friend[i].length>maxname){
            maxname=friend[i].length;
            namfriend = friend[i];
        }
    }
    return [maxname,namfriend];
}

var values= megaFriend();
var getLength=values[0];
var getName=values[1];

console.log(getLength);
console.log(getName);