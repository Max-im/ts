import { User } from "./models/User";


const user = new User({name: 'record', age: 3});
// user.fetch();
// user.set({'name': 'newnewname', age: 888});
user.save();
