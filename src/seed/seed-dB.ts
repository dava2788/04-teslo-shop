import prisma from '../lib/prisma';
import { initialData } from './seed';




async function main() {

  // 1. Borrar registros previos
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  //  Categorias
  const categoriesData = categories.map((category) => ({ name: category }));
  //console.log(categoriesData)

  await prisma.category.createMany({
    data: categoriesData
  });


  // Categorias en la Base de datos
  const categoriesDB = await prisma.category.findMany();
  // console.log(categoriesDB);

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>

  //console.log(categoriesMap);

  // Productos

  products.forEach(async (product) => {

    // ..rest significa el Resto de las propiedades no estructuradas
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryID: categoriesMap[type]
      }
    })


    // Images
    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });

  });

  // console.log(initialData);
  console.log('Seed ejecutado correctamente');
}


(() => {

  if (process.env.NODE_ENV === 'production') return;
  main();

})();