const CHANGE_SIZE = 'CHANGE_SIZE'
const CHANGE_DOUGH = 'CHANGE_DOUGH'
let initialState = [  //пицца
    {
        type: 'pizza',
        title: 'Пицца',
        productsType: [
            { type: 'classic', title: 'Классические' },
            { type: 'lovely', title: 'Любимые' },
            { type: 'premium', title: 'Премиум' },
            { type: 'legends', title: 'Легенды' },
            { type: 'redPrice', title: 'Красная цена' }
        ],
        products: [
            {
                id: 1,
                type: 'classic',
                config: {
                    size: [
                        { name: 'small', weight: 380, price: 17, title: "27см" },
                        { name: 'standart', weight: 620, price: 22.9, title: "30см" },
                        { name: 'big', weight: 920, price: 25.6, title: "33см" },
                    ],
                    defaultSize: 'standart',
                    dough: [
                        { name: 'classic', weight: 0, price: 0, title: "Классическое" },
                        { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
                        { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
                    ],

                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
                title: 'Карбонара',
                content: ['Лук', 'Бекон', 'Крем фреш', 'Ветчина', 'Шампиньоны', 'Сыр моцарелла',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 620,
                price: 22.9,
                amount: 1,
            },
            {
                id: 2,
                type: 'legends',
                config: {
                    size: [
                        { name: 'small', weight: 390, price: 18, title: "27см" },
                        { name: 'standart', weight: 650, price: 23, title: "30см" },
                        { name: 'big', weight: 950, price: 27, title: "35см" },
                    ],
                    defaultSize: 'big',
                    dough: [
                        { name: 'classic', weight: 0, price: 0, title: "Классическое" },
                        { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
                        { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
                    ],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png',
                title: 'Мексиканская',
                content: ['Сыр моцарелла', 'Сладкий перец', 'Соус Бургер', 'Халапеньо', 'Курица', 'Кукуруза', 'Томаты',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 950,
                price: 27,
                amount: 1,
            },
            {
                id: 3,
                type: 'lovely',
                config: {
                    size: [
                        { name: 'small', weight: 370, price: 19, title: "27см" },
                        { name: 'standart', weight: 630, price: 33, title: "30см" },
                        { name: 'big', weight: 970, price: 39, title: "35см" },
                    ],
                    defaultSize: 'small',
                    dough: [
                        { name: 'classic', weight: 0, price: 0, title: "Классическое" },
                        { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
                        { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
                    ],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png',
                title: '5 Сыров',
                content: ['Пармезан', 'Крем фреш', 'Чеддер', 'Голубой сыр', 'Фета', 'Сыр моцарелла',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 370,
                price: 19,
                amount: 1,
            },
            {
                id: 4,
                type: 'premium',
                config: {
                    size: [
                        { name: 'small', weight: 375, price: 19, title: "27см" },
                        { name: 'standart', weight: 630, price: 33, title: "30см" },
                        { name: 'big', weight: 970, price: 40, title: "35см" },
                    ],
                    defaultSize: 'small',
                    dough: [
                        { name: 'classic', weight: 0, price: 0, title: "Классическое" },
                        { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
                        { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
                    ],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: '	https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png',
                title: 'Говядина BURGER',
                content: ['Сыр моцарелла', 'Шампиньоны', 'Телятина', 'Соус Бургер', 'Лук', 'Огурцы',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 375,
                price: 19,
                amount: 1,
            },
            {
                id: 5,
                type: 'redPrice',
                config: {
                    size: [
                        { name: 'small', weight: 399, price: 19, title: "27см" },
                        { name: 'standart', weight: 630, price: 33, title: "30см" },
                        { name: 'big', weight: 970, price: 29, title: "35см" },
                    ],
                    defaultSize: 'small',
                    dough: [
                        { name: 'classic', weight: 0, price: 0, title: "Классическое" },
                        { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
                        { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
                    ],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: '	https://images.dominos.by/media/dominos/osg/api/2021/08/05/kolbaski_i_opyata_small-min.png',
                title: 'Колбаски и опята',
                content: ['Баварские колбаски', 'Опята', 'Сыр моцарелла', 'Соус Чесночный', 'Горчица',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 399,
                price: 19,
                amount: 1,
            },
        ]
    },
    //напитки
    {
        type: 'drinks',
        title: 'Напитки',
        productsType: [
            { type: 'hot', title: 'Горячие напитки' },
            { type: 'cold', title: 'Холодные напитки' },
            { type: 'juice', title: 'Соки' },
            { type: 'water', title: 'Вода' },
            { type: 'carbonated', title: 'Газированные напитки' }
        ],
        products: [
            {
                id: 1,
                type: 'hot',
                config: {
                    size: [
                        { name: 'small', weight: 300, price: 2,title: "0.3л"  },
                        { name: 'standart', weight: 400, price: 3,title: "0.4л"  },
                        { name: 'big', weight: 500, price: 4,title: "0.5л"  },
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                 

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BA%D0%BB%D1%8E%D0%BA%D0%B2%D0%B0_%D1%81_%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D0%B5%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
                title: 'Чай Клюква с имбирем',
                content: ['На доставку: чай в индивидуальной упаковке + стакан',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            },
          
            {
                id: 2,
                type: 'hot',
                config: {
                    size: [
                        { name: 'small', weight: 300, price: 2,title: "0.3л"  },
                        { name: 'standart', weight: 400, price: 3,title: "0.4л"  },
                        { name: 'big', weight: 500, price: 4,title: "0.5л"  },
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B5%D0%BF%D0%B8%D1%85%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81_%D1%82%D0%B8%D0%BC%D1%8C%D1%8F%D0%BD%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
                title: 'Чай Облепиха с тимьяном',
                content: ['На доставку: чай в индивидуальной упаковке + стакан',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            }, 
            {
                id: 3,
                type: 'cold',
                config: {
                    size: [
                      
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png',
                title: 'ФьюзТи чёрный чай Лесные ягоды-гибискус 0,5л',
                content: ['aaaaaaaaaaaaaa',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            }, 
            {
                id: 4,
                type: 'hot',
                config: {
                    size: [
                      
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png',
                title: 'sdgsdgsdgsdgsdgsdbsbsbfb',
                content: ['sdgsdgsdgsdgsdgsdbsbsbfb',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            }, 
            {
                id: 5,
                type: 'hot',
                config: {
                    size: [
                      
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png',
                title: 'ggggggggggggg',
                content: ['ggggggggggggg',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            },
            {
                id: 6,
                type: 'hot',
                config: {
                    size: [
                      
                    ],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png',
                title: 'ssssssssssssss',
                content: ['ssssssssssssss',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                weight: 400,
                price: 3,
                amount: 1,
            },  
        ]
    },
    //курица
    {
        type: 'chicken',
        title: 'Курица',
        productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_ostryye_small.png',
                title: 'Крылышки острые',
                content: ['Сальса соус', 'Томатный соус 25г',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 9,
                amount: 1,
                weight: 275,
            },
            {
                id: 2,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_s_gorchichnym_sousom_small.png',
                title: 'Куриные крылышки',
                content: [ 'Горчичный соус 25г',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 9,
                amount: 1,
                weight: 275,
            }
        ]
    },
    //картофель
    {
        type: 'potato',
        title: 'Картофель',
        productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
                title: 'Картофельные Дольки',
                content: [],
                // weight: [380, 620, 920],
                // defaultPrice: 4,
                addedPrice: 0,
                addedWeight: 0,
                price: 4,
                amount: 1,
                weight: 250,
            },
            {
                id: 2,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2020/09/18/kartofel_fri_small.png',
                title: 'Картофель фри',
                content: [],
                // weight: [380, 620, 920],
                // defaultPrice: 4,
                addedPrice: 0,
                addedWeight: 0,
                price: 3.5,
                amount: 1,
                weight: 175,
            }
        ]
    },
    //хлебцы
    {
        type: 'bread',
        title: 'Хлебцы',
        productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png',
                title: 'Хлебец с сырной начинкой',
                content: ['Сыр моцарелла', 'Чеддер'],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 8,
                amount: 1,
                weight: 150,
            },
            {
                id: 2,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D1%85%D0%B0%D0%BB%D0%B0%D0%BF%D0%B5%D0%BD%D1%8C%D0%BE.png',
                title: 'Хлебец с беконом и халапеньо',
                content: ['Сыр моцарелла', 'Чеддер','Бекон','Халапеньо'],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 8,
                amount: 1,
                weight: 150,
            }
        ]
    },
    //салаты
    {
        type: 'salad',
        title: 'Салаты',
         productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png',
                title: 'Салат Греческий',
                content: ['Оливковое масло',],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 9,
                amount: 1,
                weight: 250,
            },
            {
                id: 2,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Caesar_small.png',
                title: 'Салат Цезарь',
                content: ['Курица','Пармезан','Соус цезарь 25гр'],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 9,
                amount: 1,
                weight: 250,
            },
        ]
    },
    //десерты
    {
        type: 'desserts',
        title: 'Десерты',
        productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/06/26/dzhem_rolly_small.png',
                title: 'Джем-роллы с грушей',
                content: [],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 7,
                amount: 1,
                weight: 200,
            },
            {
                id: 2,
                type: null,
                config: {
                    size: [],
                    defaultSize: 'standart',
                    dough: [],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/cream_rolly_small.png',
                title: 'Крем-роллы',
                content: [],
                // weight: [380, 620, 920],
                addedPrice: 0,
                addedWeight: 0,
                price: 8.99,
                amount: 1,
                weight: 300,
            },
        ]
    },
    //соусы
    {
        type: 'sauses',
        title: 'Соусы',
        productsType: [],
        products: [
            {
                id: 1,
                type: null,
                config: {
                    size: [],
                    defaultSize: [],

                    defaulDough: [],

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
                title: 'Соус Барбекю',
                content: [],
                // weight: [380, 620, 920],
                addedPrice: 0,
                price: 1,
                amount: 1,
            }
        ]
    },]
const itemReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_SIZE: {
            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)

            stateCopy[ind].products[action.product - 1] = { ...stateCopy[ind].products[action.product - 1] }
            stateCopy[ind].products[action.product - 1].price = action.value.price
            stateCopy[ind].products[action.product - 1].weight = action.value.weight


            return stateCopy
        }
        case CHANGE_DOUGH: {

            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)

            stateCopy[ind].products[action.product - 1] = { ...stateCopy[ind].products[action.product - 1] }
            stateCopy[ind].products[action.product - 1].addedPrice = action.value.price
            stateCopy[ind].products[action.product - 1].addedWeight = action.value.weight
            // console.log(action.value)

            return stateCopy
        }

        default:
            return state

    }

}
export const selectSizeActionCreator = (id, type, info) => {
    return { type: CHANGE_SIZE, product: id, selectedType: type, value: info }
}
export const selectDoughActionCreator = (id, type, info) => {
    return { type: CHANGE_DOUGH, product: id, selectedType: type, value: info }
}
export default itemReducer