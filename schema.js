import { buildSchema } from "graphql"

const schema = buildSchema(
    `
    type Query {
        getProduct (id: ID): Product
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        stores: [Store]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        name: String
    }

    input StoreInput {
        name: String
    }

    input ProductInput {
        name: String
        description: String
        price: Float
        soldout: Soldout
        stores: [StoreInput]!
    }

    
    `
)


export default schema