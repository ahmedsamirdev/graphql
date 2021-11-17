const Query = {
    mainCards: (parent, args, { mainCards }) => mainCards,
    //Return All animals
    animals: (parent, args, { animals }) => animals,
    //Return only One animal
    animal: (parent, args, { animals }) => {
        let animal = animals.find((animal) => {
            return animal.slug === args.slug
        })
        return animal
    },
    categories: (parent, args, { categories }) => categories,
    //Return only One category with its content (based on category relationship)
    category: (parent, args, { categories }) => {
        let category = categories.find((category) => {
            return category.slug === args.slug
        });
        return category;
    },
}

module.exports = Query