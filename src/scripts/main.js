console.log("Dale! ponele media pilas")

// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const myPet = {
    name: "Dori",
    species: "cat",
    nicknames: ["dorita", "dd", "socks"],
    age: 7,
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("fuzzy")){
        this.favoriteToys.push(toy)
    }
}
}
myPet.play('box')
myPet.play('fuzzy mouse')
myPet.play('fuzzy slipper')
console.log(myPet.favoriteToys)
// myPet.purrs('me')
// myPet.purrs('Lina')
// myPet.purrs('strangers')
// // console.log(myPet)

// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.
const car = {
    type: "Ford Mustang",
    year: 2015,
    color: "red",
}
console.log(car, "car")

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
console.log(animals, "animals")

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
familyMembers = [
    {
        name: "Karen",
        relationship: "Mother",
        age: 66
    },
    {
        name: "Darrell",
        relationship: "Brother",
        age: 45
    },
    {
        name: "Angela",
        relationship: "Sister",
        age: 43
    },
    {
        name: "Rickey",
        relationship: "Uncle",
        age: 62
    }
]
console.log(familyMembers, "fm")

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`The wardrobe is manufactured by ${wardrobe.manufacturer}. It includes ${wardrobe.contents}.  Its measurements are ${wardrobe.height} x ${wardrobe.width} x ${wardrobe.depth}.`)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(`The Empire State Building is ${empireStateBuilding.height} tall and has ${empireStateBuilding.stories} stories`)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const addresskey = "address"
console.log("Address", empireStateBuilding[addresskey])
console.log(`It is located at ${empireStateBuilding[addresskey]}`)

const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

const kennelAnimals = kennel.currentAnimals
    for(let i = 0; i < kennelAnimals.length; i++){
        console.log(kennelAnimals[i]) 
    }


const nashvilleSoftwareSchool = {
        founded: 2012,
        director: "John Wark",
        instructors: {
            fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
            partTime: ["Zoe", "Nathan"]
        },
        address: "500 Interstate Blvd. S"
    }
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

const part = nashvilleSoftwareSchool.instructors.partTime
console.log(part)
    
// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.  He was born in ${beatles.members[1].birth}.  He contributed heavily to the ${beatles.albums[3]}`)


