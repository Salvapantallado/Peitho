import {
	GET_CATEGORIES,
	GET_PRODUCTS,
	PRODUCT_DETAIL,
	NEXT_PAGE,
	PREVIOUS_PAGE,
	SET_PAGINATION,
	GET_FAVORITES,
	FILTER_ITEMS,
	DELETE_PRODUCT,
	EDIT_PRODUCT,
	GET_STORIES,
	DELETE_STORIES,
	POST_STORIES
} from "../actions/index.js";

const initialState = {
	productCategories: [],
	allProducts: [],
	productDetail: [],
	page: 1,
	setPagination: {
		filter: "",
		valueFilter: "",
		valueFilter2: "",
	},
	favoriteProducts: [],
	filteredProducts: [],
	allStories: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS: {
			return {
				...state,
				allProducts: action.payload,
			};
		}
		case GET_STORIES: {
			return {
				...state,
				allStories: action.payload,
			};
		}
		case GET_CATEGORIES: {
			return {
				...state,
				productCategories: action.payload,
			};
		}
		case PRODUCT_DETAIL: {
			return {
				...state,
				productDetail: action.payload,
			};
		}
		case NEXT_PAGE: {
			return {
				...state,
				page: action.payload,
			};
		}
		case PREVIOUS_PAGE: {
			return {
				...state,
				page: action.payload,
			};
		}
		case SET_PAGINATION: {
			return {
				...state,
				setPagination: action.payload,
			};
		}
		case GET_FAVORITES: {
			return {
				...state,
				favoriteProducts: action.payload
			};
		}
		case FILTER_ITEMS: {
			return {
				...state,
				filteredProducts: action.payload
			}
		}
		case DELETE_PRODUCT: {
			return {
			  ...state
			};
		}
		case DELETE_STORIES: {
			return {
				...state,
			};
		}
		// case EDIT_PRODUCT: {
		// 	const updateItem = state.allProducts.map(item => item.id === action.payload.id ? [...state, action.payload] : item);
		// 	// state = updateItem;
		// 	return updateItem
		// }
		default: {
			return state;
		}
	}
};

export default rootReducer;
