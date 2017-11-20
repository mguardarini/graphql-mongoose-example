import {

  GraphQLNonNull,
  GraphQLString

}from "graphql";

import {analyticsType,AnalyticsInput} from '../../types/analytics.js';
import {analitycs} from '../../../database/analytics';

export default {

    type:analyticsType,
    args:{
      data:{
        name:"hardware_id",
        hardwareId:{ type:new GraphQLNonNull(AnalyticsInput)}
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
