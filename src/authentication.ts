
// Configure authentication. (Can be re-generated.)
import authentication from '@feathersjs/authentication';
import jwt from '@feathersjs/authentication-jwt';
import local from '@feathersjs/authentication-local';

import { App } from './app.interface';
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app: App) {
  const config = app.get('authentication');
  // !code: func_init // !end

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());
  // !code: loc_1 // !end

  // !code: loc_2
  const authenticationService: any = app.service('authentication');
  // !end

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  authenticationService.hooks({
    before: {
      create: [
        // !<DEFAULT> code: before_create
        authentication.hooks.authenticate(config.strategies),
        // !end
      ],
      remove: [
        // !<DEFAULT> code: before_remove
        authentication.hooks.authenticate('jwt'),
        // !end
      ],
      // !code: before // !end
    },
    // !code: after // !end
  });
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
