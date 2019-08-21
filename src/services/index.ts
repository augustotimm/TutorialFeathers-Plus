
// Configure the Feathers services. (Can be re-generated.)
import { App } from '../app.interface';
import categoria from './categoria/categoria.service';
import produto from './produto/produto.service';
import transaction from './transaction/transaction.service';

// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-unused-variable
let moduleExports = function (app: App) {
  app.configure(categoria);
  app.configure(produto);
  app.configure(transaction);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
