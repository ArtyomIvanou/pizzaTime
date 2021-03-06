import React from 'react'
import './content.css';
import Carousel from './carousel';
import Products from './products';

var shop = [
    //пицца
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
                defaultPrice: 22.9,
                price: 22.9
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
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png',
                title: 'Мексиканская',
                content: ['Сыр моцарелла', 'Сладкий перец', 'Соус Бургер', 'Халапеньо', 'Курица', 'Кукуруза', 'Томаты',],
                // weight: [380, 620, 920],
                defaultPrice: 23,
                price: 23,
            },
            {
                id: 3,
                type: 'lovely',
                config: {
                    size: [
                        { name: 'small', weight: 3700, price: 19, title: "27см" },
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
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png',
                title: '5 Сыров',
                content: ['Пармезан', 'Крем фреш', 'Чеддер', 'Голубой сыр', 'Фета', 'Сыр моцарелла',],
                // weight: [380, 620, 920],
                defaultPrice: 33,
                price: 33,
            },
            {
                id: 4,
                type: 'premium',
                config: {
                    size: [
                        { name: 'small', weight: 3700, price: 19, title: "27см" },
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
                img: '	https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png',
                title: 'Говядина BURGER',
                content: ['Сыр моцарелла', 'Шампиньоны', 'Телятина', 'Соус Бургер', 'Лук', 'Огурцы',],
                // weight: [380, 620, 920],
                defaultPrice: 33,
                price: 33,
            },
            {
                id: 5,
                type: 'redPrice',
                config: {
                    size: [
                        { name: 'small', weight: 3700, price: 19, title: "27см" },
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
                defaultPrice: 33,
                price: 33,
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
                        { name: 'small', weight: 300, price: 2, },
                        { name: 'standart', weight: 400, price: 3, },
                        { name: 'big', weight: 500, price: 4, },
                    ],
                    defaultSize: 'standart',

                    defaulDough: 'classic',

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
                title: 'Чай Клюква с имбирем',
                content: ['dfgdfg', 'dfgfdg', 'dfgfdgfd', 'dfgdfgfd', 'dfgdfgfffff', 'ggggggg',],
                // weight: [380, 620, 920],
                defaultPrice: 3,
                price: 3
            }
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
                title: 'Крылышки острые',
                content: ['Сальса соус', 'Томатный соус 25г',],
                // weight: [380, 620, 920],
                defaultPrice: 9,
                price: 9
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
                    defaultSize: [],

                    defaulDough: [],

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
                title: 'Картофельные Дольки',
                content: [],
                // weight: [380, 620, 920],
                defaultPrice: 4,
                price: 4,
            }
        ]
    },
    //хлебцы
    {
        type: 'bread',
        title: 'Хлебцы',
        productsType: false,
        products: [
            {
                id: 1,
                type: 'hot',
                config: {
                    size: false,
                    defaultSize: false,

                    defaulDough: false,

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
                title: 'Хлебец с сырной начинкой',
                content: ['Сыр моцарелла', 'Чеддер'],
                // weight: [380, 620, 920],
                defaultPrice: 8,
                price: 8,
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
                    defaultSize: [],

                    defaulDough: [],

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png',
                title: 'Салат Греческий',
                content: ['Оливковое масло',],
                // weight: [380, 620, 920],
                defaultPrice: 7.5,
                price: 7.5,
            }
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
                type: 'hot',
                config: {
                    size: [],
                    defaultSize: [],

                    defaulDough: [],

                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png',
                title: 'Джем-роллы с грушей',
                content: [],
                // weight: [380, 620, 920],
                defaultPrice: 7.5,
                price: 7.5,
            }
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
                defaultPrice: 1,
                price: 1,
            }
        ]
    },
]
const Content = () => {
    let selectedPizza = shop.map((a, i) => {
        if (a.type === 'pizza') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })
    let selectedChicken = shop.map((a, i) => {
        if (a.type === 'chicken') {
            return <Products key={i} content={a} type={a.type}></Products>
        }
        else { return null }
    })
    return (
        <div className={'content'}>
            <Carousel ></Carousel>
            {selectedPizza}
            {selectedChicken}


        </div>
    );

}
/*<Router  path={'/chicken'}>{selectedChicken}</Router>*/
/*class Content extends React.Component {
    render() {
        let selectedProducts = shop.map((a, i) => {
            if (a.type === 'pizza') {
                return <Products key={i} title={a.title} productsType={a.productsType} products={a.products}></Products>
            }
            else { return null }
        })
        return (
            <div className={'content'}>
                <Carousel ></Carousel>
                {selectedProducts}
            </div>
        );
    }
}*/
export default Content