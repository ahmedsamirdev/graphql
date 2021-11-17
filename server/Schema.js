const { gql } = require('apollo-server');

const typeDefs = gql`
  type mainCards {
    title: String
    image: String
  }
  
  type Animal {
    id:ID!
    slug:String!
    image: String!
    title: String!
    rating: Float
    price: String! #Shouldn't be Null
    description: [String!]! #Shouldn't be Null and have array of strings
    stock:Int!
    onSale: Boolean
    #animal have one category
    category: Category
  }
  type Category {
    id:ID!
    image: String!
    category: String!
    slug:String!
    #each category have multiple animals
    animals:[Animal!]
  }
  type Query {
      mainCards: [mainCards]
      #query get all animals
      animals: [Animal!]!
      #query by slug/animal name to get one animal
      animal(slug: String): Animal
      #query all categories of animals
      categories:[Category!]!
      #query by specific category returns single category with all its animals by category
      category(slug:String!): Category
  }

type Mutation {
  addAnimal(
    id:ID!
    slug:String!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]! 
    stock:Int!
    onSale: Boolean
    category: String  
): Animal 
    removeAnimal(id:ID!): Boolean!
}

`;

module.exports = typeDefs