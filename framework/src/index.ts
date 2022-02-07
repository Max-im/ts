// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";

// const user = User.buildUser({name: 'Name', age: 88});
// const root = document.getElementById('root');

// if (!root) throw new Error('root element not found'); 

// const userEdit = new UserEdit(root, user);
// userEdit.render();



import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from "./models/User";

const users = new Collection('http://localhost:3000/users', (json: UserProps) => User.buildUser(json));

users.on('change', () => {
    const root = document.getElementById('root');
    
    if (!root) throw new Error('root element not found');
    new UserList(root, users).render();
});

users.fetch();