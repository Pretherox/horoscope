function main() {
/*This is a list with all the months.
Each month has asigned a fantasy month (ex: Sproutsurge), a season timeline (ex: Early Spring) a constelation/horoscope name (ex: Satyr)
with the name of a monster and an element that represents its personality, all in that order.
It has been done this way so the process can rely a bit less on ifs.*/

let january = ["Sproutsurge","Early Spring","Satyr","fire"];  //january[0] = fantasy month / january[1] = season timeline / january[2] = horoscope name / january[3] = personality element
let february = ["Dewfall","Mid Spring","Minotaur","earth"];
let march = ["Windfellow","Late Spring","Ettin","air"];
let april = ["Lumis","Early Summer","Chuul","water"];
let may = ["Highsun","Mid Summer","Manticore","fire"];
let june = ["Califact","Late Summer","Dryad","earth"];
let july = ["Bountime","Early Fall","Zelekhut","air"];
let august = ["Harvest","Mid Fall","Wyvern","water"];
let september = ["Frondfall","Late Fall","Centaur","fire"];
let october = ["Snowfell","Early Winter","Hyppocampus","earth"];
let november = ["Highfrost","Mid Winter","Mermaid","air"];
let december = ["Chillthaw","Late Winter","Aboleth","water"];

/*The user must write here his month to know his fantasy (D&D) horoscope.
It is important that the month is written exactly as the above months variables.
Once is done, the program will treat the variable "month" as if it was the choosed month
(ex: "month = january" will mean that "month[0]" will be like "january[0]")*/
let month = september; // <== ///CHANGE THIS TO THE MONTH YOU WANT THE HOROSCOPE FOR///

//A list of items where one will be selected at random to asociate with the user as his lucky charm:
let lucky_item = ["mailcoat","black opal","antidote","candle","crossbow",        //lucky_item[0]/[4]
                  "axe","chalk","dagger","dice","flute","holy symbol",           //lucky_item[5]/[10]
                  "garnet","greataxe","hammer","plate armor","holy water",       //lucky_item[11]/[15]
                  "ink","insect repellent-incese","javelin","bow","oil lamp",    //lucky_item[16]/[20]
                  "leather","lock","lute","torch","healing potion","oil flask"]; //lucky_item[21]/[26]

//A list of monsters, items and places that will be asociated to the user as to be avoided:
let avoid = ["goblins","forests","dungeons","deep water","bards","axes","tieflings",   //avoid[0]/[6]
             "kobolds","rogues","acid","demons","old ruins","bones","un-dead",         //avoid[7]/[13]
             "zircon","warhammers","wagons","horses","wolfs","orcs","sand"];           //avoid[14]/[20]

//Depending of the choosed month, the program will print a text acording to the asigned parameters along with the random choices from "lucky_item" and "avoid"
console.log(`You where born during the ${month[0]} month, at ${month[1]}, witch means you are ${month[2]}.`);
console.log(`Your lucky item is ${lucky_item[random_int(0,26)]}.`);
console.log(`You need to avoid ${avoid[random_int(0,20)]}.`);
console.log("\n");
console.log(`As ${month[2]} you have some aligment towards ${month[3]}`);
//Depending on what a characters alignment is, there are stereotypical personalities that a majority of those characters may have.
  if (month[3] == "air") {
    console.log("People that are aligned with this element tend to be more cerefree and easy going.");
    console.log("Air's have difficulty getting along with Earth's.");
    console.log("Air's get along well with Water's.");
  }
  else if (month[3] == "earth") {
    console.log("People that are aligned with this element tend to be stubborn, traditional, and dependable.");
    console.log("Earth's have difficulty getting along with Water's.");
    console.log("Earth's get along well with other Earth's.");
  }
  else if (month[3] == "water") {
    console.log("People that are aligned with this element tend to be calm and adaptable.");
    console.log("Water's get along well with other Water's.");
  }
  else {
    console.log("People that are aligned with this element tend to be hot blooded, emotional, and passionate.");
    console.log("Fire's have difficulty getting along with other Fire's, Earth's, and Water's.");
    console.log("Fire's get along well with Air's.");
  }

console.log("\n"); //small space to separate the output

/*As a final part of the horoscope, a d20 roll will be made to specify how much "luck" the usser will have.
Depending on how low or high the number is between 1 and 20, the usser will be gibben a prospect of his future*/

let luck = random_int(1,20);  //This part is in charge of asigning the "luck" of the usser

  if (luck >= 19){  //Great good luck
    console.log("The gods are smiling toward you. They'll try to bring fortune towards you.");
  }
  else if (luck >= 15 && luck <= 18){  //Good luck
    console.log("The gods are in a good mood. You may have some extra luck today");
  }
  else if (luck >= 6 && luck <= 14 && luck != 10){  //Neutral
    console.log("The gods are feeling neutral today. The day is on your hands.");
  }
  else if (luck == 10){  //True Neutral
    console.log("Strange. The goods feel totaly neutral today.");
  }
  else if (luck >= 7 && luck <= 9){  //Bad Luck
    console.log("The gods are unpleased. Luck will not be on your side today.");
  }
  else{  //Very bad luck
    console.log("The gods are angry. Everithing that could go wrong today, will go wrong.");
  }
}

function random_int(min,max) {
  return Math.floor(Math.random() * max) + min; //"Min" only works as intended with 1 or 0, since it will add this value to the "max" variable
}
main();