
// Class for the custom service `transaction` on path `/transaction`. (Can be re-generated.)
/* tslint:disable no-unused-variable */

import { App } from '../../app.interface';
import { Id, NullableId, Paginated, Params, ServiceMethods, SetupMethod } from '@feathersjs/feathers';
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: interface
// tslint:disable-next-line:no-empty-interface
interface ServiceOptions {}
// !end

export class Service implements Partial<ServiceMethods<any>>, SetupMethod {
  // !<DEFAULT> code: properties
  public app!: App;
  // !end

  constructor (private options: ServiceOptions = {}) {
    // !code: constructor1 // !end
  }

  // !code: setup
  public setup (app: any, path: string): void {
    this.app = app;
  }
  // !end

  // !<DEFAULT> code: find
  public async find(params?: Params): Promise<any[] | Paginated<any>> {
    return [];
  }
  // !end

  // !<DEFAULT> code: get
  public async get (id: Id, params?: Params): Promise<any> {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }
  // !end

  // !code: create
  public async create (data: Partial<any> | Array<Partial<any>>, params: Params): Promise<any> {

    let productService: any = this.app.service('/produto');
    let produto: any = params.produto;
    if (data.hasOwnProperty('quantity')) {

      if (produto !== undefined && (data as any).quantity >= 0) {
        let availableQuantity = produto.quantity - (data as any).quantity;
        produto.quantity = availableQuantity;
        let patchResult = await productService.patch(null, produto);
        return patchResult;
      } else {
        throw new Error('Quantity must be greater than 0');
      }
    }
    return '';
  }
  // !end

  // !<DEFAULT> code: update
  public async update (id: NullableId, data: any, params?: Params): Promise<any> {
    return data;
  }
  // !end

  // !<DEFAULT> code: patch
  public async patch (id: NullableId, data: Partial<any>, params?: Params): Promise<any> {
    return data;
  }
  // !end

  // !<DEFAULT> code: remove
  public async remove (id: NullableId, params?: Params): Promise<any> {
    return { id };
  }
  // !end
  // !code: more // !end
}

export default function (options: ServiceOptions) {
  return new Service(options);
}

// !code: funcs // !end
// !code: end // !end
