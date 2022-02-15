const CHANGE_SIZE = 'CHANGE_SIZE'
const CHANGE_DOUGH = 'CHANGE_DOUGH'
const ADD_TO_SHOP = 'ADD_TO_SHOP'
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
            // {
            //     id: 1,
            //     type: 'classic',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 380, price: 17, title: "27см" },
            //             { name: 'standart', weight: 620, price: 22.9, title: "30см" },
            //             { name: 'big', weight: 920, price: 25.6, title: "33см" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],

            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
            //     title: 'Карбонара',
            //     content: ['Лук', 'Бекон', 'Крем фреш', 'Ветчина', 'Шампиньоны', 'Сыр моцарелла',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 620,
            //     price: 22.9,
            //     amount: 1,
            // },
            // {
            //     id: 6,
            //     type: 'classic',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 350, price: 15, title: "27см" },
            //             { name: 'standart', weight: 585, price: 20.9, title: "30см" },
            //             { name: 'big', weight: 920, price: 25.6, title: "33см" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],

            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
            //     title: 'Фермерская',
            //     content: ['Огурцы', 'Ветчина', 'Соус ранч', 'Сыр моцарелла',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 585,
            //     price: 20.9,
            //     amount: 1,
            // },
            // {
            //     id: 7,
            //     type: 'classic',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 350, price: 15, title: "27см" },
            //             { name: 'standart', weight: 585, price: 20.7, title: "30см" },
            //             { name: 'big', weight: 920, price: 25.6, title: "33см" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],

            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: '	https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png',
            //     title: 'Пепперони Блюз',
            //     content: ['Голубой сыр', 'Пепперони', 'Соус ранч', 'Сыр моцарелла',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 585,
            //     price: 20.7,
            //     amount: 1,
            // },
            // {
            //     id: 8,
            //     type: 'classic',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 350, price: 15, title: "27см" },
            //             { name: 'standart', weight: 585, price: 20.7, title: "30см" },
            //             { name: 'big', weight: 920, price: 25.6, title: "33см" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],

            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/07/03/bavarchkaya_small.png',
            //     title: 'Баварская',
            //     content: ['Баварские колбаски', 'Сыр моцарелла', 'Пармезан', 'Халапеньо', 'Соус барбекю',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 585,
            //     price: 20.7,
            //     amount: 1,
            // },
            // {
            //     id: 2,
            //     type: 'legends',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 390, price: 18, title: "27см" },
            //             { name: 'standart', weight: 650, price: 23, title: "30см" },
            //             { name: 'big', weight: 950, price: 27, title: "35см" },
            //         ],
            //         defaultSize: 'big',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png',
            //     title: 'Мексиканская',
            //     content: ['Сыр моцарелла', 'Сладкий перец', 'Соус Бургер', 'Халапеньо', 'Курица', 'Кукуруза', 'Томаты',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 950,
            //     price: 27,
            //     amount: 1,
            // },
            // {
            //     id: 9,
            //     type: 'legends',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 390, price: 18, title: "27см" },
            //             { name: 'standart', weight: 650, price: 23, title: "30см" },
            //             { name: 'big', weight: 950, price: 27, title: "35см" },
            //         ],
            //         defaultSize: 'big',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/07/03/myunkhenskaya_small.png',
            //     title: 'Мюнхенская',
            //     content: ['Баварские колбаски', 'Томаты', 'Соус барбекю', 'Горчица', 'Сыр моцарелла', 'Ветчина', ' Мюнхенские колбаски',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 950,
            //     price: 27,
            //     amount: 1,
            // },
            // {
            //     id: 10,
            //     type: 'legends',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 390, price: 18, title: "27см" },
            //             { name: 'standart', weight: 650, price: 23, title: "30см" },
            //             { name: 'big', weight: 950, price: 27, title: "35см" },
            //         ],
            //         defaultSize: 'big',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/firmennaya.png',
            //     title: 'Доминос Фирменная',
            //     content: ['Пармезан', 'Курица', 'Сыр моцарелла', 'Лук', 'Томатный соус', 'Бекон', 'Сладкий перец', 'Томаты', 'Буженина', 'Телятина', 'Шампиньоны'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 950,
            //     price: 27,
            //     amount: 1,
            // },
            // {
            //     id: 11,
            //     type: 'legends',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 390, price: 18, title: "27см" },
            //             { name: 'standart', weight: 650, price: 23, title: "30см" },
            //             { name: 'big', weight: 950, price: 27, title: "35см" },
            //         ],
            //         defaultSize: 'big',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/mizza.png',
            //     title: 'МитZZа',
            //     content: ['Пармезан', 'Курица', 'Сыр моцарелла', 'Лук', 'Томатный соус', 'Бекон', 'Сладкий перец', 'Томаты',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 950,
            //     price: 27,
            //     amount: 1,
            // },
            // {
            //     id: 3,
            //     type: 'lovely',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 370, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 39, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png',
            //     title: '5 Сыров',
            //     content: ['Пармезан', 'Крем фреш', 'Чеддер', 'Голубой сыр', 'Фета', 'Сыр моцарелла',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 370,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 12,
            //     type: 'lovely',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 370, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 39, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/syitnaya_small.png',
            //     title: 'Сытная',
            //     content: ['Сыр моцарелла', 'Соус Бургер', 'Пепперони', 'Баварские колбаски',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 370,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 13,
            //     type: 'lovely',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 370, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 39, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/07/14/super_pepperoni_small-min.png',
            //     title: 'Супер Пепперони',
            //     content: ['Томатный соус Domino\'s', 'Сыр моцарелла', 'Пепперони'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 370,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 14,
            //     type: 'lovely',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 370, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 39, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/09/18/Hatnyaya_small.png',
            //     title: 'Хатняя',
            //     content: ['Картофельные дольки', 'Обжаренный лук', 'Курица', 'Баварские колбаски x 2', 'Соус Ранч', 'Сыр моцарелла', 'Огурцы',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 370,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 4,
            //     type: 'premium',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 375, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 40, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: '	https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png',
            //     title: 'Говядина BURGER',
            //     content: ['Сыр моцарелла', 'Шампиньоны', 'Телятина', 'Соус Бургер', 'Лук', 'Огурцы',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 375,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 15,
            //     type: 'premium',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 375, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 40, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: '	https://images.dominos.by/media/dominos/osg/api/2021/03/23/rivyera_small_mNcDSaS.png',
            //     title: 'Ривьера',
            //     content: ['Соус Ранч', 'Шпинат', 'Сыр моцарелла', 'Черри', 'Ветчина', 'Маслины',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 375,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 16,
            //     type: 'premium',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 375, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 40, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/toskana.png',
            //     title: 'Тоскана',
            //     content: ['Томаты', 'Фета', 'Курица', 'Сыр моцарелла', 'Соус Ранч', 'Шпинат',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 375,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 17,
            //     type: 'premium',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 375, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 40, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/krevetki_s_ananasom.png',
            //     title: 'Креветки с ананасами',
            //     content: ['Соус Ранч', 'Шампиньоны', 'Ананас', 'Креветки x 2', 'Сыр моцарелла',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 375,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 5,
            //     type: 'redPrice',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 399, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 29, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: '	https://images.dominos.by/media/dominos/osg/api/2021/08/05/kolbaski_i_opyata_small-min.png',
            //     title: 'Колбаски и опята',
            //     content: ['Баварские колбаски', 'Опята', 'Сыр моцарелла', 'Соус Чесночный', 'Горчица',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 399,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 18,
            //     type: 'redPrice',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 399, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 29, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/lesnaya_small.png',
            //     title: 'Лесная',
            //     content: ['Сыр моцарелла', 'Опята', 'Соус Ранч', 'Пармезан',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 399,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 19,
            //     type: 'redPrice',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 399, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 29, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/vetchina_i_griby.png',
            //     title: 'Ветчина и грибы',
            //     content: ['Шампиньоны', 'Ветчина', 'Сыр моцарелла', 'Томатный соус Domino\'s',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 399,
            //     price: 19,
            //     amount: 1,
            // },
            // {
            //     id: 20,
            //     type: 'redPrice',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 399, price: 19, title: "27см" },
            //             { name: 'standart', weight: 630, price: 33, title: "30см" },
            //             { name: 'big', weight: 970, price: 29, title: "35см" },
            //         ],
            //         defaultSize: 'small',
            //         dough: [
            //             { name: 'classic', weight: 0, price: 0, title: "Классическое" },
            //             { name: 'hotDog', weight: 100, price: 4, title: "Хот Дог борт" },
            //             { name: 'cheese', weight: 50, price: 2, title: "Сырный борт" },
            //             { name: 'thin', weight: -50, price: 0, title: "Тонкое" }
            //         ],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/margarita.png',
            //     title: 'Маргарита',
            //     content: ['Сыр моцарелла', 'Томатный соус Domino\'s',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 399,
            //     price: 19,
            //     amount: 1,
            // },
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
            // {
            //     id: 1,
            //     type: 'hot',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 300, price: 2, title: "0.3л" },
            //             { name: 'standart', weight: 400, price: 3, title: "0.4л" },
            //             { name: 'big', weight: 500, price: 4, title: "0.5л" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BA%D0%BB%D1%8E%D0%BA%D0%B2%D0%B0_%D1%81_%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D0%B5%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
            //     title: 'Чай Клюква с имбирем',
            //     content: ['На доставку: чай в индивидуальной упаковке + стакан',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },

            // {
            //     id: 2,
            //     type: 'hot',
            //     config: {
            //         size: [
            //             { name: 'small', weight: 300, price: 2, title: "0.3л" },
            //             { name: 'standart', weight: 400, price: 3, title: "0.4л" },
            //             { name: 'big', weight: 500, price: 4, title: "0.5л" },
            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B5%D0%BF%D0%B8%D1%85%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81_%D1%82%D0%B8%D0%BC%D1%8C%D1%8F%D0%BD%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
            //     title: 'Чай Облепиха с тимьяном',
            //     content: ['На доставку: чай в индивидуальной упаковке + стакан',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 4,
            //     type: 'hot',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%B8%D0%B7_%D1%81%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%8B_%D1%81_%D0%B1%D0%B0%D0%B7%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
            //     title: 'Чай Смородина с базиликом',
            //     content: ['На доставку: чай в индивидуальной упаковке + стакан',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 3,
            //     type: 'cold',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png',
            //     title: 'ФьюзТи чёрный чай Лесные ягоды-гибискус 0,5л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },

            // {
            //     id: 5,
            //     type: 'cold',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0_02.07.21.png',
            //     title: 'ФьюзТи зелёный чай Клубника и Малина 0,5л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 6,
            //     type: 'juice',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BE%D0%BA_%D0%A0%D1%87%D0%B8_%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_1%D0%BB.png',
            //     title: 'Rich сок апельсиновый 1л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 7,
            //     type: 'juice',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D1%80%D0%B8%D1%87_%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_1%D0%BB.png',
            //     title: 'Rich яблочный сок 1л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 8,
            //     type: 'juice',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BE%D0%BA_%D1%82%D0%BE%D0%BC%D0%B0%D1%82_1%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png',
            //     title: 'Rich Томатный Сок 1 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 9,
            //     type: 'juice',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%84%D1%80%D1%83%D1%82_1%D0%BB.png',
            //     title: 'Rich сок из смеси фруктов «Мультифрут» 1л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 10,
            //     type: 'water',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D1%81%D1%80_%D0%B3%D0%B0%D0%B705_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png',
            //     title: 'Бонаква Среднегазированая 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 11,
            //     type: 'water',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D0%B1%D0%B5%D0%B7_%D0%B3%D0%B0%D0%B7%D0%B005_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png',
            //     title: 'Бонаква Негазированная 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 12,
            //     type: 'carbonated',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/17/%D0%BA%D0%BE%D0%BB%D0%B005%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png',
            //     title: 'Кока-кола 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 13,
            //     type: 'carbonated',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D0%BA%D0%BE%D0%BB%D0%B0_05%D0%BB_%D0%B1%D0%B5%D0%B7_%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0_640%D1%85441_02.07.21.png',
            //     title: 'Кока-кола без сахара 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 14,
            //     type: 'carbonated',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D1%84%D0%B0%D0%BD%D1%82%D0%B0_%D0%B0%D0%BF_05_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png',
            //     title: 'Фанта Апельсин 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
            // {
            //     id: 15,
            //     type: 'carbonated',
            //     config: {
            //         size: [

            //         ],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',


            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/05/27/%D1%81%D0%BF%D1%80%D0%B0%D0%B9%D1%8205%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png',
            //     title: 'Спрайт 0,5 л',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     weight: 400,
            //     price: 3,
            //     amount: 1,
            // },
        ]
    },
    //курица
    {
        type: 'chicken',
        title: 'Курица',
        productsType: [],
        products: [
            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,

            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_ostryye_small.png',
            //     title: 'Крылышки острые',
            //     content: ['Сальса соус', 'Томатный соус 25г',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 275,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,

            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_s_gorchichnym_sousom_small.png',
            //     title: 'Куриные крылышки',
            //     content: ['Горчичный соус 25г',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 275,
            // },
            // {
            //     id: 3,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,

            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_barbekyu_small.png',
            //     title: 'Крылышки барбекю',
            //     content: ['Соус барбекю',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 275,
            // },
            // {
            //     id: 4,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,

            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kurinoye_file_small.png',
            //     title: 'Куриное филе',
            //     content: ['Соус сырный 25гр',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 275,
            // },
        ]
    },
    //картофель
    {
        type: 'potato',
        title: 'Картофель',
        productsType: [],
        products: [
            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
            //     title: 'Картофельные Дольки',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 4,
            //     amount: 1,
            //     weight: 250,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/09/18/kartofel_fri_small.png',
            //     title: 'Картофель фри',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 3.5,
            //     amount: 1,
            //     weight: 175,
            // },
            // {
            //     id: 3,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2020/09/18/draniki_small.png',
            //     title: 'Драники',
            //     content: ['4 шт',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 3.5,
            //     amount: 1,
            //     weight: 175,
            // },
        ]
    },
    //хлебцы
    {
        type: 'bread',
        title: 'Хлебцы',
        productsType: [],
        products: [
            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png',
            //     title: 'Хлебец с сырной начинкой',
            //     content: ['Сыр моцарелла', 'Чеддер'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8,
            //     amount: 1,
            //     weight: 150,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D1%85%D0%B0%D0%BB%D0%B0%D0%BF%D0%B5%D0%BD%D1%8C%D0%BE.png',
            //     title: 'Хлебец с беконом и халапеньо',
            //     content: ['Сыр моцарелла', 'Чеддер', 'Бекон', 'Халапеньо'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8,
            //     amount: 1,
            //     weight: 150,
            // },
            // {
            //     id: 3,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81%D0%BE_%D1%88%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D0%BC_%D0%B8_%D1%84%D0%B5%D1%82%D0%BE%D0%B9.png',
            //     title: 'Хлебец со шпинатом и фетой',
            //     content: ['Чеддер', 'Фета', 'Сыр моцарелла', 'Шпинат'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8,
            //     amount: 1,
            //     weight: 150,
            // },
            // {
            //     id: 4,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81%D0%BE_%D1%88%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D0%BC_%D0%B8_%D1%84%D0%B5%D1%82%D0%BE%D0%B9.png',
            //     title: 'Пармезан байтс',
            //     content: ['Пармезан', ],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8,
            //     amount: 1,
            //     weight: 150,
            // },
        ]
    },
    //салаты
    {
        type: 'salad',
        title: 'Салаты',
        productsType: [],
        products: [
            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png',
            //     title: 'Салат Греческий',
            //     content: ['Оливковое масло',],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 250,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Caesar_small.png',
            //     title: 'Салат Цезарь',
            //     content: ['Курица', 'Пармезан', 'Соус цезарь 25гр'],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 9,
            //     amount: 1,
            //     weight: 250,
            // },
        ]
    },
    //десерты
    {
        type: 'desserts',
        title: 'Десерты',
        productsType: [],
        products: [
            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/06/26/dzhem_rolly_small.png',
            //     title: 'Джем-роллы с грушей',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 7,
            //     amount: 1,
            //     weight: 200,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/cream_rolly_small.png',
            //     title: 'Крем-роллы',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8.99,
            //     amount: 1,
            //     weight: 300,
            // },
            // {
            //     id: 3,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/shoko_rolly_small.png',
            //     title: 'Шоко-роллы',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8.99,
            //     amount: 1,
            //     weight: 300,
            // },
            // {
            //     id: 4,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BB%D0%B0%D0%B2%D0%B0_%D0%BA%D0%B5%D0%B9%D0%BA.png',
            //     title: 'Лава кейк',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 8.99,
            //     amount: 1,
            //     weight: 300,
            // },
        ]
    },
    //соусы
    {
        type: 'sauses',
        title: 'Соусы',
        productsType: [],
        products: [

            // {
            //     id: 1,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_BBQ.png',
            //     title: 'Соус Барбекю',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 2,
            //     amount: 1,
            //     weight: 50,
            // },
            // {
            //     id: 2,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png',
            //     title: 'Соус Чесночный',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 2,
            //     amount: 1,
            //     weight: 50,
            // },
            // {
            //     id: 3,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%9A%D0%B8%D1%81%D0%BB%D0%BE-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BD%D0%B3.png',
            //     title: 'Соус Кисло-сладкий',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 2,
            //     amount: 1,
            //     weight: 50,
            // },
            // {
            //     id: 4,
            //     type: null,
            //     config: {
            //         size: [],
            //         defaultSize: 'standart',
            //         dough: [],
            //         defaulDough: 'classic',
            //         topping: 0,
            //         toppingWeight: 30,
            //     },
            //     img: 'https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A1%D1%8B%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png',
            //     title: 'Соус Сырный',
            //     content: [],

            //     addedPrice: 0,
            //     addedWeight: 0,
            //     price: 2,
            //     amount: 1,
            //     weight: 50,
            // },
        ]
    },
]
const itemReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_SIZE: {
            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            let findItem = stateCopy[ind].products.findIndex(i => i.id === action.value.id)
            stateCopy[ind].products[findItem] = { ...stateCopy[ind].products[findItem] }
            let findInfo = stateCopy[ind].products[findItem].config.size.find(i => i.name === action.product)
            stateCopy[ind].products[findItem].config.defaultSize=findInfo.name
            stateCopy[ind].products[findItem].price = findInfo.price
            stateCopy[ind].products[findItem].priceName = findInfo.title
            stateCopy[ind].products[findItem].weight = findInfo.weight


            return stateCopy
        }
        case CHANGE_DOUGH: {

            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            let findItem = stateCopy[ind].products.findIndex(i => i.id === action.value.id)
            stateCopy[ind].products[findItem] = { ...stateCopy[ind].products[findItem] }
            let findInfo = stateCopy[ind].products[findItem].config.dough.find(i => i.name === action.product)
              
              stateCopy[ind].products[findItem].config.defaulDough=findInfo.name 
              console.log( stateCopy[ind].products[findItem].config.defaulDough)
            stateCopy[ind].products[findItem].addedPrice = findInfo.price
            stateCopy[ind].products[findItem].addedDoughName = findInfo.title
            stateCopy[ind].products[findItem].addedWeight = findInfo.weight
            // console.log(action.value)

            return stateCopy
        }
        case ADD_TO_SHOP: {


            let stateCopy = [...state]
            let ind = stateCopy.findIndex(i => i.type === action.selectedType)
            stateCopy[ind].products = [...stateCopy[ind].products]
            stateCopy[ind].products = action.value
            // console.log(stateCopy[ind].products)
            return stateCopy
        }
        default:
            return state

    }

}
export const selectSize = (id, type, info) => {
    // console.log(id,type,info)
    return { type: CHANGE_SIZE, product: id, selectedType: type, value: info }
}
export const selectDough = (id, type, info) => {
    return { type: CHANGE_DOUGH, product: id, selectedType: type, value: info }
}
export const addToShop = (type, info) => {
    return { type: ADD_TO_SHOP, selectedType: type, value: info }
}
export default itemReducer