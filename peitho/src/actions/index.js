import axios from "axios";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const SET_PAGINATION = "SET_PAGINATION";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER_ITEMS = "FILTER_ITEMS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export function getAllProducts(page, filter, valueFilter, valueFilter2) {
  if (!page) {
    page = 0;
  }
  // console.log(filter, valueFilter);
  // if (filter === "precio") {
  // 	return sortByPrice(page, valueFilter);
  // }
  // if (filter === "categoria") {
  // 	return categoryFilter(page, valueFilter);
  // }
  // if (!filter) {
  // return async (dispatch) => {
  // 	const res = await axios.get(
  // 		`/catalogo` ||
  // 			`http://localhost:3001/catalogo`
  // 	);
  // 	dispatch({ type: GET_PRODUCTS, payload: res.data });
  // };
  // }
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `/catalogo` || `http://localhost:3001/catalogo`
      );
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllCategories() {
  return async (dispatch) => {
    const res = await axios.get(
      `/categoryinfo` || `http://localhost:3001/categoryinfo`
    );
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  };
}

export function filtroCategoria(page, categoria) {
  if (!page) {
    page = 0;
  }
  return function (dispatch) {
    axios
      .get(
        `/catalogo?categoria=${categoria}` ||
          `http://localhost:3001/catalogo?categoria=${categoria}`
      )
      .then((res) => {
        dispatch({ type: GET_PRODUCTS, payload: res.data });
      });
  };
}
export function getProductDetail(id) {
  return async (dispatch) => {
    const res = await axios.get(
      `/catalogo/` + id || `http://localhost:3001/catalogo/` + id
    );
    dispatch({ type: PRODUCT_DETAIL, payload: res.data });
  };
}
export function clearProductDetail() {
  return {
    type: PRODUCT_DETAIL,
    payload: [],
  };
}

export function nextPage(page) {
  return {
    type: NEXT_PAGE,
    payload: page,
  };
}

export function prevPage(page) {
  return {
    type: PREVIOUS_PAGE,
    payload: page,
  };
}

export function setPagination(filter, valueFilter, valueFilter2) {
  return {
    type: SET_PAGINATION,
    payload: {
      filter,
      valueFilter,
      valueFilter2,
    },
  };
}

export function getFavorites(data) {
  return {
    type: GET_FAVORITES,
    payload: data,
  };
}

export function filterItems(data, array) {
  return async (dispatch) => {
    try {
      let res = await array.filter(
        (x) => x.categories.map((z) => z.name) == data
      );
      if (data === "all") {
        res = [];
      }
      console.log(res);
      dispatch({ type: FILTER_ITEMS, payload: [...res] });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProduct(input) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/catalogo` || `http://localhost:3001/catalogo`,
        input
      );
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
      console.log(err);
    }
  };
}

export function editProduct(input) {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `/catalogo/${input.id}`,
        input || `http://localhost:3001/catalogo/${input.id}`,
        input
      );
      console.log(res.data, "test");
      dispatch({ type: EDIT_PRODUCT, payload: res.data });
    } catch (err) {
      console.log(err);
      alert("khe -error en edit product-");
    }
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `/catalogo/` + id || `http://localhost:3001/catalogo/` + id
      );
      dispatch({ type: DELETE_PRODUCT, payload: res.data });
    } catch (err) {
      alert(err, "error en delete");
    }
  };
}

// export const filterItems = (data, array) => (dispatch) => {
// 	console.log(data);
// 	if(data) {
// 		const res = array.filter(x => x.category === data);
// 		dispatch({ type: FILTER_ITEMS, payload: [...res]})
// 	}
// }

//   export function editFavorites(productId, userId, remove = false) {
//     return async dispatch => {
//       try {
//         const res = await axios.post(
//           `/editFavorites/${userId}` ||
//             `http://localhost:3001/editFavorites/${userId}`,
//           { productId: productId, remove: remove }
//         );
//         dispatch({ type: EDIT_FAVORITES, payload: res.data });
//       } catch (error) {
//         alert("ERROR AL EDITAR PRODUCTOS FAVORITOS");
//       }
//     };
//   }

//   export function getFavorites(userId) {
//     return async dispatch => {
//       try {
//         const res = await axios.get(
//           `/getFavorites/${userId}` ||
//             `http://localhost:3001/getFavorites/${userId}`
//         );
//         dispatch({ type: GET_FAVORITES, payload: res.data });
//       } catch (error) {
//         alert("ERROR AL OBTENER PRODUCTOS FAVORITOS");
//       }
//     };
