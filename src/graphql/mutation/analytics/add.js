import {

  GraphQLNonNull,
  GraphQLString

}from "graphql";

import {analyticsType,AnalyticsInput} from '../../types/analytics';
import {analitycs} from '../../../database/analytics';

export default {

  type:analyticsType,
  description:"Insert data",
  args:{
      data:{
        name:"data",
        type:new GraphQLNonNull(AnalyticsInput)
      }
  },
  resolve(root,params){
    const uModel = new analitycs(params.data);
    const newData = uModel.save();
    if(!newData){
      throw new Error('erros');
    }
    return newData;
  }
}
