
// Define TypeScript interface for service `produto`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-empty-interface
export interface ProdutoBase {
  // !<DEFAULT> code: interface
  id: unknown;
  name: string;
  quantity: number;
  active: boolean;
  // !end
}

// tslint:disable-next-line:no-empty-interface
export interface Produto extends ProdutoBase {
  // !<DEFAULT> code: more
  id: any; // change if needed
  // !end
}

// !code: funcs // !end
// !code: end // !end
