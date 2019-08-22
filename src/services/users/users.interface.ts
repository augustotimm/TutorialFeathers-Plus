
// Define TypeScript interface for service `users`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-empty-interface
export interface UserBase {
  // !<DEFAULT> code: interface
  id: unknown;
  nome: string;
  email: string;
  password: string;
  // !end
}

// tslint:disable-next-line:no-empty-interface
export interface User extends UserBase {
  // !<DEFAULT> code: more
  id: any; // change if needed
  // !end
}

// !code: funcs // !end
// !code: end // !end
