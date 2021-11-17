const Category = {
    // resolve the animal if it has same id with category id
    animals: (parent, args, { animals }) => {
        return animals.filter(animal => {
            return animal.category === parent.id
        })
    }
}

module.exports = Category