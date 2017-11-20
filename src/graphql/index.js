import {

    GraphQLObjectType,
    GraphQLSchema

} from 'graphql';

import analyticsMutation from "./mutation";
import queries from "./queries";

export default new GraphQLObjectType({
      query: new GraphQLObjectType ({
        name:"Query",
        fields:queries
      }),
      name: "Mutation",
      fields: analyticsMutation

});
