import { GET_INITIAL_STATE, FILTER_All_PRODUCTS_BY_PRICE_CATEGORY, SEARCH, ADD_TO_CART, LOGIN_AS_ADMIN, LOG_OUT, CREATE_NEW_ACCOUNT, CHANGE_SIMPLE_ACCOUNT_INFO, CHANGE_ADMIN_ACCOUNT_INFO, DELETE_SIMPLE_ACCOUNT, DELETE_ADMIN_ACCOUNT, DELETE_TO_CARD, LOGIN_AS_SIMPLE_USER, COMMAND, VIEW_FULL_PRODUCT_LIST, DELETE_ONLY_ONE_PRODUCT, DELETE_ALL_PRODUCTS_OF_CATEGORY, ADD_NEW_PRODUCT } from "../Constants/Constants";

import InitialState from "./InitialState";



const RootReducer = ({ AllProducts, storage, AllCategories, AllAdminUsers, connectedUser, AllSimpleUsersAccount, isLoading, userIsLoggedIn, userIsAdmin, userCart, AllUserCart } = InitialState, { type, payload }) => {

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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],

            }

        case FILTER_All_PRODUCTS_BY_PRICE_CATEGORY:
            //retrieve array of categories then filter
            const categoriesTable = [...payload.categories].length > 0 ? [...payload.categories] : [...AllCategories]

            const result = [...storage].filter((product) => {
                
                const searchIdx = [...categoriesTable].findIndex((category) => category.toLowerCase() === product.category.name.toLowerCase())
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }
        case VIEW_FULL_PRODUCT_LIST:
            return {
                AllProducts: [...storage],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }


        case ADD_TO_CART:
            let newFinalUserCart
            // verification of the presence of the item added in the shopping cart
            const idx = [...userCart].findIndex((card) => card.product.id === payload.product.id)


            // if present then modification of quantity ordered in the shopping cart
            if (idx >= 0) {
                const newOrderedQuantity = [...userCart][idx].orderedQuantity + payload.orderedQuantity
                const newInitialUserCart = [...userCart].filter((cart) => cart.product.id !== payload.product.id)
                newFinalUserCart = [...newInitialUserCart, {
                    product: payload.product,
                    orderedQuantity: newOrderedQuantity
                }]
            } else
                newFinalUserCart = [...userCart, payload]

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
                userCart: [...newFinalUserCart],
                AllUserCart: [...AllUserCart],
            }

        case DELETE_TO_CARD:
            const newCart = [...userCart].filter((cart) => cart.product.id !== payload.id)
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
                userCart: [...newCart],
                AllUserCart: [...AllUserCart],
            }

        case LOGIN_AS_ADMIN:
            const adminUserInformation = [...AllAdminUsers][payload.idx]

            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [adminUserInformation],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],

            }

        case LOGIN_AS_SIMPLE_USER:
            const simpeUserInformation = [...AllSimpleUsersAccount][payload.idx]
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [simpeUserInformation],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }

        case DELETE_SIMPLE_ACCOUNT:
            const newAllSimpleUsersAccount = [...AllSimpleUsersAccount].filter((account) => account.id !== payload.id)
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [],
                AllSimpleUsersAccount: [...newAllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }

        case DELETE_ADMIN_ACCOUNT:
            const newAllAdminUsers = [...AllAdminUsers].filter((account) => account.id !== payload.id)
            return {
                AllProducts: [...AllProducts],
                storage: [...storage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...newAllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: !userIsLoggedIn,
                userIsAdmin: !userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }

        case COMMAND:
            let newAllUserCart
            // check if user presence on the list of commands
            const idxUserCard = [...AllUserCart].findIndex((userCart) => userCart.user.username === payload.user.username && userCart.user.email === payload.user.email)
            // if present then add new command with latest
            if (idxUserCard >= 0) {
                const partialAllUserCart = [...AllUserCart].filter((userCart) => userCart.user.username !== payload.user.username && userCart.user.email !== payload.user.email)

                newAllUserCart = [...partialAllUserCart, {
                    user: payload.user,
                    command: [...[...AllUserCart][idxUserCard].command, ...payload.command]
                }]

            } else {
                newAllUserCart = [...AllUserCart, payload]
            }
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
                userCart: [],
                AllUserCart: [...newAllUserCart],
            }

        case DELETE_ONLY_ONE_PRODUCT:
            const newStorage = [...storage].filter((product) => product.title.toLowerCase() !== payload.productTitle.toLowerCase() && product.category.name.toLowerCase() !== payload.productCategory.toLowerCase())
            return {
                AllProducts: [...newStorage],
                storage: [...newStorage],
                AllCategories: [...AllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }
        case DELETE_ALL_PRODUCTS_OF_CATEGORY:
            const newStorage2 = [...storage].filter((product) => product.category.name.toLowerCase() !== payload.categoryTitle.toLowerCase())
            const newAllCategories = [...AllCategories].filter((category) => category.name.toLowerCase() !== payload.categoryTitle.toLowerCase())
            return {
                AllProducts: [...newStorage2],
                storage: [...newStorage2],
                AllCategories: [...newAllCategories],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }
        case ADD_NEW_PRODUCT:
            const idxCategory = [...AllCategories].findIndex((category) => category.name.toLowerCase() === payload.newCategory.name.toLowerCase())
            const newAllCategories2 = idxCategory >= 0 ? [...AllCategories] : [...AllCategories, payload.newCategory]
            return {
                AllProducts: [...AllProducts, payload.newProduct],
                storage: [...storage],
                AllCategories: [...newAllCategories2],
                AllAdminUsers: [...AllAdminUsers],
                connectedUser: [...connectedUser],
                AllSimpleUsersAccount: [...AllSimpleUsersAccount],
                isLoading: isLoading,
                userIsLoggedIn: userIsLoggedIn,
                userIsAdmin: userIsAdmin,
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
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
                userCart: [...userCart],
                AllUserCart: [...AllUserCart],
            }
    }
};

export default RootReducer;