const { v4 } = require('uuid')
const Mutation = {
    addAnimal: (parent, {
        id,
        slug,
        image,
        title,
        rating,
        price,
        description,
        stock,
        onSale,
        category,
    }, { animals }) => {
        let newAnimal = {
            id: v4(),
            slug,
            image,
            title,
            rating,
            price,
            description,
            stock,
            onSale,
            category,
        }
        animals.push(newAnimal)
        return newAnimal
    },
    removeAnimal: (parent, { id }, { animals }) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id
        })
        animals.splice(index, 1)
        return true
    }
}

module.exports = Mutation