import { Context, helpers } from "../../deps.ts";
import logger from "../middlewares/logger.ts";
import { Producto } from "../types/producto.types.ts";
//import { User } from "../types/producto.types.ts";

const DB_PRODUCTOS: Producto[] = [];

export const findAll = async (ctx: Context) => {
  try {
    ctx.response.status = 200;
    logger.debug(`status: ${ctx.response.status} method: findAll handler`);

    ctx.response.body = await { code: "00", data: DB_PRODUCTOS };
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};

export const findProduct = async (ctx: Context) => {
  try {
    const { productId } = helpers.getQuery(ctx, { mergeParams: true });
    
    const product = await DB_PRODUCTOS.find((u) => u.uuid == productId);

    if (product) {
      ctx.response.body = await { code: "00", data: product };
    } else {
      ctx.response.body = await {
        code: "01",
        msg: `Producto con id ${productId} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};

export const createProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 201;
    logger.debug(`status: ${ctx.response.status} method: createProduct handler`);

    const { nombre,descripcion,precio } = await ctx.request.body().value;
    let newProd=0
    if(DB_PRODUCTOS.length>0)
    {
      newProd = Number(DB_PRODUCTOS[DB_PRODUCTOS.length - 1].uuid) + 1;}
    else{
      newProd=1

    }
    const product: Producto = {
      uuid: newProd.toString(),
      nombre: nombre,
      descripcion: descripcion,
      precio:precio
    };
    DB_PRODUCTOS.push(product);

    ctx.response.body = await { code: "00", data: product };
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { code: "99", msg: error };
  }
};

export const updateProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 202;
    logger.debug(`status: ${ctx.response.status} method: updateProduct handler`);

    const { productId } = helpers.getQuery(ctx, { mergeParams: true });
    const productIndex = await DB_PRODUCTOS.findIndex((u) => u.uuid == productId);
    console.log ("productId",productId)
    console.log ("productIndex",productIndex)

    if (productIndex>-1) {
      const { nombre, descripcion,precio } = await ctx.request.body().value;
      DB_PRODUCTOS.splice(productIndex, 1, {
        uuid: productId,
        nombre,
        descripcion,
        precio
      });

      ctx.response.body = {
        code: "00",
        data: { uuid: productId, descripcion, precio },
      };
    } else {
      ctx.response.body = {
        code: "01",
        msg: `Producto con id ${productId} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { msg: error };
  }
};

export const deleteProduct = async (ctx: Context) => {
  try {
    ctx.response.status = 200;
    logger.debug(`status: ${ctx.response.status} method: deleteProduct handler`);

    const { productId } = helpers.getQuery(ctx, { mergeParams: true });
    console.log("productId",productId)
    const productIndex = await DB_PRODUCTOS.findIndex((u) => u.uuid == productId);
    console.log("productIndex",productIndex)
    if (productIndex>-1) {
      DB_PRODUCTOS.splice(productIndex, 1);

      ctx.response.body = {
        code: "00",
        msg: `Producto con id ${productId} eliminado`,
      };
    } else {
      ctx.response.body = {
        code: "01",
        msg: `Producto con id ${productId} no encontrado.`,
      };
    }
  } catch (error) {
    ctx.response.status = 500;

    logger.error(`status: ${ctx.response.status} ${error}`);
    ctx.response.body = { msg: error };
  }
};
