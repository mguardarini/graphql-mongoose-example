import {
  GraphQLList
} from 'graphql'

import {analyticsType} from "../../types/analytics.js";
import analytics from "../../../database/analytics.js";

export default {
  type: new GraphQLList(analyticsType),
  resolve(){
    const data = analytics.find().exec();
    if(!data){
      throw new Error("error while fetching data..")
    }
    return data;
  }
}
