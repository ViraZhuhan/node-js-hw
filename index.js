const contacts = require('./db/contacts.js')

const argv = require('yargs').argv;
// const { error } = require('console');
// const fs = require('fs/promises')

// global.foo = 3;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);