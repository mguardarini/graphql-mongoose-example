import {

  GraphQLNonNull,
  GraphQLID

}from "graphql";

import {analyticsType} from '../../types/analytics';
import {analitycs} from '../../../database/analytics';


export default {

    type:analyticsType,
    args:{
      _id:{
        name:"_id",
        type: new GraphQLNonNull(GraphQLID)
      }
    },
  resolve(root,params){
    const removedCompany =  analitycs.findByIdAndRemove(params._id);
    if(!removedCompany){
      throw new Error('erros');
    }
    return removedCompany;
  }

}
