import { GET_INITIAL_STATE, FILTER_All_PRODUCTS_BY_PRICE_CATEGORY, SEARCH, ADD_TO_CARD } from "../Constants/Constants";


const initialState = {
    AllProducts: [],
    storage: [],
    AllCategories: [],
    AllAdminUsers: [],
    isLoading: true,
    userIsLoggedIn: false,
    userIsAdmin: false,
    userCard: []


}


const RootReducer = ({ AllProducts, storage, AllCategories, AllAdminUsers, userIsLoggedIn, userIsAdmin, isLoading, userCard } = initialState, { type, payload }) => {

    switch (type) {
        case GET_INITIAL_STATE:
            return {
                AllProducts: [...payload.AllProducts],
                storage: [...payload.AllProducts],
                AllCategories: [...payload.AllCategories],
                AllAdminUsers: [...payload.AllAdminUsers],
                isLoading: payload.isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCard: [...userCard]

            }

        case FILTER_All_PRODUCTS_BY_PRICE_CATEGORY:
            const categoriesTable = [...payload.categories].length > 0 ? [...payload.categories] : [...AllCategories]
            const result = [...storage].filter((product) => {
                const searchIdx = [...categoriesTable].findIndex((category) => category === product.category.name || category.name === product.category.name)
                if (searchIdx >= 0) {
                    return product.price >= payload.minPrice && product.price <= payload.maxPrice
                } else
                    return false
            })
            return {
                AllProducts: [...result],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCard: [...userCard]
            }


        case SEARCH:
            const result2 = [...storage].filter((product) => {
                return product.title.toLowerCase().includes(payload.searchInputValue.toLowerCase()) || product.category.name.toLowerCase().includes(payload.searchInputValue.toLowerCase())
            })

            return {
                AllProducts: [...result2],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCard: [...userCard]
            }


        case ADD_TO_CARD:


            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCard: [...userCard, payload]
            }



        default:
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCard: [...userCard]
            }
    }
};

export default RootReducer;