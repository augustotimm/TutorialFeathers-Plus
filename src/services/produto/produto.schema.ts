
// Define the Feathers schema for service `produto`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Produto',
  description: 'Produto database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'name', 'quantity', 'active', 'category'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique
    'name'
    // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    id: {type: 'ID'},
    name: {type: 'string'},
    quantity: {type: 'integer'},
    active: {type: 'boolean'},
    category: {type: 'ID'}
    // !end
  },
  // !code: schema_more // !end
};

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'Produto',
    service: {
      sort: { id: 1 },
    },
    // sql: {
    //   sqlTable: 'Produto',
    //   uniqueKey: 'id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: 'id' } },
      categoria: {type: 'Categoria', args: true, relation: {ourTable: 'category', otherTable: 'id'}}

      // !end
    },
    // !code: graphql_more // !end
  },
};

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
