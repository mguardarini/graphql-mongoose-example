import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';


//AnalyticsType
const AnalyticsType = new GraphQLObjectType({

    name:'Analytics',
    fields:()=>({

          id:{type:GraphQLInt},
          hardwareId:{type:GraphQLString},
          employer:{type:GraphQLString},
          people:{type:GraphQLInt},
    })
});

//Root query
const RootQuery = new GraphQLObjectType ({

    name:"RootQueryType",
    fields:{
      analytics:{
        type:AnalyticsType,
        args:{
          id:{type:GraphQLString}
        },
        resolve(parentValue,args){
            //Options
        }
      },
      analytics:{
        type: new GraphQLList(AnalyticsType),
        resolve(parentValue,args){
            //Options
        }
      }
    }
});

//Mutations #Mutations
const mutation = new GraphQLObjectType({
  name:"Mutation",
  fields:{

        addAnalytics:{
          type:AnalyticsType,
          args:{
            hardwareId:{  type:new GraphQLNonNull(GraphQLString)},
            employer:{ type:new GraphQLNonNull(GraphQLString)},
            people:{ type:new GraphQLNonNull(GraphQLInt)},
          },
          resolve(parentValue, args){
              //Options...
            }
        },
        editAnalytics:{
          type:AnalyticsType,
          args:{
            id:{type:new GraphQLNonNull(GraphQLInt)},
            hardwareId:{type:GraphQLString},
            employer:{type:GraphQLString},
            people:{type:GraphQLInt},
          },
          resolve(parentValue, args){
              //Options ...
            }
        },
        deleteAnalytics:{
          type:AnalyticsType,
          args:{
            id:{type:new GraphQLNonNull(GraphQLInt)}
          },
          resolve(parentValue, args){
              //Options....
          }
        }
  }
});

export default new GraphQLSchema({
      query:RootQuery,
      mutation
});
