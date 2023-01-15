import { GET_INITIAL_STATE, FILTER_All_PRODUCTS_BY_PRICE_CATEGORY, SEARCH, ADD_TO_CART, LOGIN_AS_ADMIN, LOG_OUT, CREATE_NEW_ACCOUNT, CHANGE_SIMPLE_ACCOUNT_INFO, CHANGE_ADMIN_ACCOUNT_INFO, DELETE_SIMPLE_ACCOUNT, DELETE_ADMIN_ACCOUNT, DELETE_TO_CARD, LOGIN_AS_SIMPLE_USER, COMMAND, VIEW_FULL_PRODUCT_LIST, DELETE_ONLY_ONE_PRODUCT, DELETE_ALL_PRODUCTS_OF_CATEGORY, ADD_NEW_PRODUCT } from "../Constants/Constants";


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
    AllUserCart: [
        {
            user: {
                id: 2,
                firstName: 'Aida',
                lastName: 'Ndiaye',
                gender: 'woman',
                email: 'aida@gmail.com',
                username: 'aidaDada',
                password: 'aidaaida',
                birthDate: '15/09/2000',
                address: 'Keur Madiabele'
            },
            command: [
                {
                    products: [
                        {
                            product: {
                                id: 10,
                                title: 'Modern Soft Mouse',
                                price: 402,
                                description: 'The Football Is Good For Training And Recreational Purposes',
                                images: [
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=9290',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=2785',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=2940'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 4,
                                    name: 'Shoes',
                                    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=6709',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 5
                        },
                        {
                            product: {
                                id: 9,
                                title: 'Rustic Plastic Gloves',
                                price: 231,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=3025',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=3080',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=5933'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 6
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 2241430
                },
                {
                    products: [
                        {
                            product: {
                                id: 25,
                                title: 'Elegant Plastic Shoes',
                                price: 905,
                                description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
                                images: [
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=7216',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=5239',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=4079'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 4,
                                    name: 'Shoes',
                                    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=6709',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 10
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 5943250
                },
                {
                    products: [
                        {
                            product: {
                                id: 19,
                                title: 'Fantastic Frozen Mouse',
                                price: 927,
                                description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=6487',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=7460',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=9379'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 11
                        },
                        {
                            product: {
                                id: 12,
                                title: 'Handmade Rubber Keyboard',
                                price: 429,
                                description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=7972',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=7888',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=9440'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 4
                        },
                        {
                            product: {
                                id: 29,
                                title: 'Gorgeous Plastic Gloves',
                                price: 790,
                                description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=2114',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=4337',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=6332'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 8
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 11978265
                },
                {
                    products: [
                        {
                            product: {
                                id: 36,
                                title: 'Intelligent Frozen Bacon',
                                price: 133,
                                description: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=9124',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=8107',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=3818'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 5
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 443325
                },
                {
                    products: [
                        {
                            product: {
                                id: 39,
                                title: 'Elegant Metal Fish',
                                price: 738,
                                description: 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
                                images: [
                                    'https://api.lorem.space/image?w=640&h=480&r=1037',
                                    'https://api.lorem.space/image?w=640&h=480&r=6667',
                                    'https://api.lorem.space/image?w=640&h=480&r=9650'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 5,
                                    name: 'Others',
                                    image: 'https://api.lorem.space/image?w=640&h=480&r=5961',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 6
                        },
                        {
                            product: {
                                id: 38,
                                title: 'Elegant Concrete Hat',
                                price: 810,
                                description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
                                images: [
                                    'https://api.lorem.space/image/furniture?w=640&h=480&r=1734',
                                    'https://api.lorem.space/image/furniture?w=640&h=480&r=4045',
                                    'https://api.lorem.space/image/furniture?w=640&h=480&r=7636'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 3,
                                    name: 'Furniture',
                                    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=5820',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 7
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 6634340
                }
            ]
        },
        {
            user: {
                id: 3,
                firstName: 'Abdoulaye',
                lastName: 'Seck',
                gender: 'man',
                email: 'abdoulaye@gmail.com',
                username: 'abdouSeck',
                password: 'abdouSeck',
                birthDate: '12/07/2003',
                address: 'Grand Dakar ,cité Je ne sais pas'
            },
            command: [
                {
                    products: [
                        {
                            product: {
                                id: 68,
                                title: 'Tasty Fresh Pants',
                                price: 60,
                                description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
                                images: [
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=4587',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=4530',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=1931'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 1,
                                    name: 'Man\'s SHOES',
                                    image: 'https://placeimg.com/640/480/any',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:37:25.000Z'
                                }
                            },
                            orderedQuantity: 15
                        },
                        {
                            product: {
                                id: 6,
                                title: 'Rustic Steel Pants',
                                price: 79,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=8976',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=6080',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=5840'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 4,
                                    name: 'Shoes',
                                    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=6709',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 9
                        },
                        {
                            product: {
                                id: 35,
                                title: 'Handcrafted Steel Chicken',
                                price: 807,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=7620',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=7226',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=5269'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 1,
                                    name: 'Man\'s SHOES',
                                    image: 'https://placeimg.com/640/480/any',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:37:25.000Z'
                                }
                            },
                            orderedQuantity: 5
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 3743080
                },
                {
                    products: [
                        {
                            product: {
                                id: 35,
                                title: 'Handcrafted Steel Chicken',
                                price: 807,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=7620',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=7226',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=5269'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 1,
                                    name: 'Man\'s SHOES',
                                    image: 'https://placeimg.com/640/480/any',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:37:25.000Z'
                                }
                            },
                            orderedQuantity: 6
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 3180810
                },
                {
                    products: [
                        {
                            product: {
                                id: 23,
                                title: 'Practical Steel Soap',
                                price: 497,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image?w=640&h=480&r=1379',
                                    'https://api.lorem.space/image?w=640&h=480&r=5485',
                                    'https://api.lorem.space/image?w=640&h=480&r=6454'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 5,
                                    name: 'Others',
                                    image: 'https://api.lorem.space/image?w=640&h=480&r=5961',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 9
                        },
                        {
                            product: {
                                id: 12,
                                title: 'Handmade Rubber Keyboard',
                                price: 429,
                                description: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
                                images: [
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=7972',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=7888',
                                    'https://api.lorem.space/image/watch?w=640&h=480&r=9440'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 2,
                                    name: 'Electronics',
                                    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3372',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 5
                        },
                        {
                            product: {
                                id: 41,
                                title: 'Licensed Bronze Car',
                                price: 862,
                                description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
                                images: [
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=9035',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=2838',
                                    'https://api.lorem.space/image/fashion?w=640&h=480&r=2451'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 1,
                                    name: 'Man\'s SHOES',
                                    image: 'https://placeimg.com/640/480/any',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:37:25.000Z'
                                }
                            },
                            orderedQuantity: 5
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 7187290
                },
                {
                    products: [
                        {
                            product: {
                                id: 102,
                                title: 'Awesome Granite Pizza',
                                price: 390,
                                description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
                                images: [
                                    'https://api.lorem.space/image?w=640&h=480&r=846',
                                    'https://api.lorem.space/image?w=640&h=480&r=1335',
                                    'https://api.lorem.space/image?w=640&h=480&r=8196'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 5,
                                    name: 'Others',
                                    image: 'https://api.lorem.space/image?w=640&h=480&r=5961',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 4
                        },
                        {
                            product: {
                                id: 28,
                                title: 'Handcrafted Concrete Tuna',
                                price: 138,
                                description: 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
                                images: [
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=4412',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=9681',
                                    'https://api.lorem.space/image/shoes?w=640&h=480&r=362'
                                ],
                                creationAt: '2023-01-15T02:17:37.000Z',
                                updatedAt: '2023-01-15T02:17:37.000Z',
                                category: {
                                    id: 4,
                                    name: 'Shoes',
                                    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=6709',
                                    creationAt: '2023-01-15T02:17:37.000Z',
                                    updatedAt: '2023-01-15T02:17:37.000Z'
                                }
                            },
                            orderedQuantity: 4
                        }
                    ],
                    date: 'Sun Jan 15 2023',
                    total: 1395760
                }
            ]
        }
    ]


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