import { Hook } from '@feathersjs/feathers';



export default function (): Hook {
  return async (context) => {
    const sequelize = context.app.get('sequelizeClient');
    const {produto} = sequelize.models;
    let queryResult: any;
    if (context.data.id !== undefined) {
      queryResult = await produto.find({
        where: {
          id: context.data.id
        }
      });
      context.data.produto = queryResult;
    }
    return context;

  };
}
