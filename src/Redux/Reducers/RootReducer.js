import { GET_INITIAL_STATE, FILTER_All_PRODUCTS_BY_PRICE_CATEGORY, SEARCH, ADD_TO_CART, LOGIN_AS_ADMIN, LOG_OUT, CREATE_NEW_ACCOUNT, CHANGE_SIMPLE_ACCOUNT_INFO, CHANGE_ADMIN_ACCOUNT_INFO } from "../Constants/Constants";


const initialState = {
    AllProducts: [],
    storage: [],
    AllCategories: [],
    AllAdminUsers: [{
        id: 1,
        firstName: "Babacar",
        lastName: "Diop",
        gender: "man",
        email: "admin@admin.com",
        username: "admin",
        password: "admin1234",
        birthDate: "15/09/2000",
        address: "Keur Massar ,cité Penitence",

    }],
    connectedUser: [],
    AllSimpleUsersAccount: [],
    isLoading: true,
    userIsLoggedIn: false,
    userIsAdmin: false,
    userCart: [],


}


const RootReducer = ({ AllProducts, storage, AllCategories, AllAdminUsers, connectedUser, AllSimpleUsersAccount, isLoading, userIsLoggedIn, userIsAdmin, userCart } = initialState, { type, payload }) => {

    switch (type) {
        case GET_INITIAL_STATE:
            return {
                AllProducts: [...payload.AllProducts],
                storage: [...payload.AllProducts],
                AllCategories: [...payload.AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: payload.isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart]

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
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart]
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
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart]
            }


        case ADD_TO_CART:


            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart, payload]
            }

        case LOGIN_AS_ADMIN:
            const userInformation = [...AllAdminUsers][payload.idx]

            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [userInformation],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart]

            }

        case LOG_OUT:
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart]
            }

        case CREATE_NEW_ACCOUNT:
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [payload],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount, payload],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart]
            }

        case CHANGE_SIMPLE_ACCOUNT_INFO:
            const filterAllSimpleUsersAccount = [...AllSimpleUsersAccount].filter((account) => account.id !== payload.id)
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [],
                AllSimpleUsersAccount: [...filterAllSimpleUsersAccount, payload],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart]
            }

        case CHANGE_ADMIN_ACCOUNT_INFO:

            const filterAllAdminUsers = [...AllAdminUsers].filter((account) => account.id !== payload.id)

            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...filterAllAdminUsers, payload],
                connectedUser: [],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart]
            }

        default:
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart]
            }
    }
};

export default RootReducer;