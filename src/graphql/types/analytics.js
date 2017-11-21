import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLID
} from 'graphql';

import AnalyticsModel from "../../database/analytics.js";

export const analyticsType = new GraphQLObjectType({

    name:'Analytics',
    description:'Analytics Structure',

    fields:()=>({

          _id:{
            type:new GraphQLNonNull(GraphQLID)
          },
          hardwareId:{
            type:GraphQLString
          },
          employer:{
            type:GraphQLString
          },
          people:{
            type:GraphQLInt
          }
    })
});

export const AnalyticsInput = new GraphQLInputObjectType({

      name:"AnalyticsInput",
      description:"Insert data",
      fields: ()=> ({

        hardwareId:{
          type:GraphQLString
        },
        employer:{
          type:GraphQLString
        },
        people:{
          type:GraphQLInt
        }

      })

});
