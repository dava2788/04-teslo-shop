//[1,2,3,4,...,50]
export function generatePaginationNumbers(currentPage: number, totalPage: number) {
    //SI el Page number es 7 o menos 
    //vamos a mostrar todas las paginas sin ..

    if (totalPage <= 7) {
        return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    //Si CurrentPage esta entre las primeras 3 paginas
    //Mostrar las primeras 3,  puntos suspensivos, y las ultimas 2
    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPage - 1, totalPage];//[1,2,3,...,49,50]
    }

    //Si currentPAge esta entre las ultimas 3 paginas
    //Mostrar las primeras 2,  puntos suspensivos, y las ultimas 3
    if (currentPage >= totalPage - 2) {
        return [1, 2, '...', totalPage - 2, totalPage - 1, totalPage];
    }

    //Si current Page esta en otro lugar medio
    //Mostrar 1 pagina, puntos suspensivos, pagina actual y vecinos
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage];

}