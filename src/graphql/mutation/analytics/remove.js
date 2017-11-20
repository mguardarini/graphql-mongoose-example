import {

  GraphQLNonNull,
  GraphQLID

}from "graphql";

import {AnalyticsType} from '../../types/analytics';
import {analitycs} from '../../../database/analytics';


export default {
  deleteAnalytics:{
    type:AnalyticsType,
    args:{
        hardwareId:{type:new GraphQLNonNull(GraphQLID)}
    },
  },
  // type: AnalyticsType,
  // args:{
  //   data:{
  //     hardwareId:'data',
  //     type: new GraphQLNonNull(GraphQLID)
  //   }
  // },
  resolve(root,params){
    const removedCompany =  analitycs.findByIdAndRemove(params.hardwareId);
    if(!removedCompany){
      throw new Error('erros');

    }
    return removedCompany;
  }

}
