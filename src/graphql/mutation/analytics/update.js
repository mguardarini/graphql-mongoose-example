import {

  GraphQLNonNull,
  GraphQLID

}from "graphql";

import {AnalyticsType,analyticsInputType} from '../../types/analytics';
import {analitycs} from '../../../database/analytics';

export default function update(){

  type: AnalyticsType,
  args:{
    id:{
      hardwareId:'data',
      type: new GraphQLNonNull(GraphQLID)
    },
    data:{
      hardwareId:'data',
      type: new GraphQLNonNull(AnalyticsType)
    }
  },
  resolve(root,params){
    return analitycs.findByIdAndUpdate(params.args.id,params.args.data)
                    .then(data=>analitycs.findById(data.id).exec())
                    .catch(err=> new Error("Error "));
  }

}
