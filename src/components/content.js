import React from 'react'
import './content.css';
import Carousel from './carousel';
import Products from './products';
var shop = [
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
                        { name: 'small', weight: 380, price: 17,title:"27см" },
                        { name: 'standart', weight: 620, price: 22.9,title:"30см" },
                        { name: 'big', weight: 920, price: 25.6,title:"33см" },
                    ],
                    defaultSize: 'standart',
                    dough: [
                        { name: 'classic', weight: 0, price: 0,title:"Классическое" },
                        { name: 'hotDog', weight: 100, price: 4,title:"Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2,title:"Сырный борт" },
                        { name: 'thin', weight: -50, price: 0,title:"Тонкое" }
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
                        { name: 'small', weight: 390, price: 18,title:"27см" },
                        { name: 'standart', weight: 650, price: 23,title:"30см" },
                        { name: 'big', weight: 950, price: 27,title:"35см" },
                    ],
                    defaultSize: 'small',
                    dough: [
                        { name: 'classic', weight: 0, price: 0,title:"Классическое" },
                        { name: 'hotDog', weight: 100, price: 4,title:"Хот Дог борт" },
                        { name: 'cheese', weight: 50, price: 2,title:"Сырный борт" },
                        { name: 'thin', weight: -50, price: 0,title:"Тонкое" }
                    ],
                    defaulDough: 'classic',
                    topping: 0,
                    toppingWeight: 30,
                },
                img: 'https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png',
                title: 'Мексиканская',
                content: ['Сыр моцарелла', 'Сладкий перец', 'Соус Бургер', 'Халапеньо', 'Курица', 'Кукуруза','Томаты',],
                // weight: [380, 620, 920],
                defaultPrice: 23,
                price: 23,
            }
        ]
    },
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
    }
]
const Content = () => {
    let selectedProducts = shop.map((a, i) => {
        if (a.type === 'pizza') {
            return <Products key={i} content={a}></Products>
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