import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} from 'graphql';

import AnalyticsModel from "../../database/analytics.js";

export const analyticsType = new GraphQLObjectType({

    name:'Analytics',
    description:'Analytics Structure',

    fields:()=>({

          id:{
            type:GraphQLInt
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

//
// //Root query
// export const rootQuery = new GraphQLObjectType ({
//
//     name:"Query",
//
//     fields:()=>({
//
//       analytics:{
//         type:AnalyticsType,
//
//         args:{
//           id:{type:GraphQLString}
//         }
//       },
//       _analytics:{
//         type: new GraphQLList(analyticsType),
//         resolve(values){
//           const {_id} = values;
//           AnalyticsModel.find({
//
//               uid:_id
//
//           }).exec();
//             //Options
//         }
//       }
//     })
// })


export const AnalyticsInput = new GraphQLInputObjectType({

      name:"AnalyticsInput",
      description:"Insert data",
      fields: ()=> ({

        id:{
          type:GraphQLInt
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