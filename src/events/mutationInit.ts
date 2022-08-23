import axios from 'axios'
import { Types } from 'mongoose'

export const mutationInit = (req, userId?:string, adminId?:string, username?:string) => {
  let client = req.headers['client'];
  let host = req.headers['host']
  if(!client) client = req.headers['origin'];
  if (req.body.query) {
    let query = req.body.query
    if (query.includes('mutation')) {
      let mutationName = query
        .split('{')[1]
        .split('(')[0]
        .trim();
      if(mutationName.includes('}')) mutationName = mutationName.split('}')[0].trim();
      let mutationDataId = new Types.ObjectId().toString();
      let arguements = { ...req.body.variables };
      delete arguements.password;
      axios.post(`http://log-srv/mutation/data`, {
        mutationDataId,
        mutationName,
        client,
        host,
        arguements,
        userId,
        adminId,
        username
      });
      console.log(`mutation - ${mutationName} - ${mutationDataId} - ${username}`);
      return mutationDataId;
    }
  }
  return null;
};
