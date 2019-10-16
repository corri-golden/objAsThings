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
    purrs: function (something) {
        window.alert(`Dori purrs 'meoww' when ${something} gets home.`)
    }
}


myPet.purrs('me')
myPet.purrs('Lina')
myPet.purrs('strangers')
// console.log(myPet)