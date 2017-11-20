import {

  GraphQLNonNull,
  GraphQLID

}from "graphql";

import {analyticsType,AnalyticsInput} from '../../types/analytics';
import {analitycs} from '../../../database/analytics';

export default{

  type: analyticsType,
  args:{
    _id:{
      name:'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data:{
      name:'data',
      type: new GraphQLNonNull(AnalyticsInput)
    }
  },
  resolve(root,params){
    return analitycs.findByIdAndUpdate(
      params._id,params.data)
                    .then(data=>analitycs.findById(params._id).exec())
                    .catch(err=> new Error("Error "));
  }

}
