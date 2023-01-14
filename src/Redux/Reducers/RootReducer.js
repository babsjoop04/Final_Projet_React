import { GET_INITIAL_STATE, FILTER_All_PRODUCTS_BY_PRICE_CATEGORY, SEARCH, ADD_TO_CART, LOGIN_AS_ADMIN, LOG_OUT, CREATE_NEW_ACCOUNT, CHANGE_SIMPLE_ACCOUNT_INFO, CHANGE_ADMIN_ACCOUNT_INFO, DELETE_SIMPLE_ACCOUNT, DELETE_ADMIN_ACCOUNT, DELETE_TO_CARD, LOGIN_AS_SIMPLE_USER, COMMAND } from "../Constants/Constants";


const initialState = {
    AllProducts: [],
    storage: [],
    AllCategories: [],
    AllAdminUsers: [{
        id: 1,
        firstName: "Philippe",
        lastName: "Ndiaye",
        gender: "man",
        email: "philippe@admin.com",
        username: "philippeAdmin",
        password: "admin1234",
        birthDate: "15/09/2000",
        address: "Keur Massar ,cité Penitence",

    }],
    connectedUser: [],
    AllSimpleUsersAccount: [{
        id: 2,
        firstName: "Aida",
        lastName: "Ndiaye",
        gender: "woman",
        email: "aida@gmail.com",
        username: "aidaDada",
        password: "aidaaida",
        birthDate: "15/09/2000",
        address: "Keur Madiabele",

    },
    {
        id: 3,
        firstName: "Abdoulaye",
        lastName: "Seck",
        gender: "man",
        email: "abdoulaye@gmail.com",
        username: "abdouSeck",
        password: "abdouSeck",
        birthDate: "12/07/2003",
        address: "Grand Dakar ,cité Je ne sais pas",

    }],
    isLoading: true,
    userIsLoggedIn: false,
    userIsAdmin: false,
    userCart: [],
    AllUserCart: []


}


const RootReducer = ({ AllProducts, storage, AllCategories, AllAdminUsers, connectedUser, AllSimpleUsersAccount, isLoading, userIsLoggedIn, userIsAdmin, userCart, AllUserCart } = initialState, { type, payload }) => {

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


        case ADD_TO_CART:
            let newFinalUserCart
            const idx = [...userCart].findIndex((card) => card.product.id === payload.product.id)
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
            const idxUserCard = [...AllUserCart].findIndex((userCart) => userCart.user.username === payload.user.username && userCart.user.email === payload.user.email)
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