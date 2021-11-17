const { ApolloServer } = require('apollo-server');
const { animals, mainCards, categories } = require('../server/db')
const typeDefs = require('./Schema')
const Animal = require('./resolvers/Animal')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Category = require('./resolvers/Category')

const server = new ApolloServer({
    typeDefs, resolvers: {
        Category, Query, Animal, Mutation
    },
    context: { animals, mainCards, categories }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});