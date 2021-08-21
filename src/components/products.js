import React, { Fragment } from 'react'
import './content.css';
import ProductUnit from './productUnit';

const Products = (props) => {
    let productsSort = props.content.productsType.map((a,i) => { return <li key={i}>{a.title}</li> })
    let allProducts=props.content.products.map((a,i) => { return <ProductUnit key={a.id} content={a}></ProductUnit> })
    //console.log(props.content.title)
    return (
        <Fragment>
            <div className={'content_description'}>
                <div className={'content_name'}>{props.content.title}</div>
                <div className={'content_sort'}>
                    <ul>
                        {productsSort}
                    </ul>
                </div>
            </div>

            <div className={'products'}>
                {allProducts}
                
                
            </div>
        </Fragment>


    );

}
export default Products
/*<div className={'product'}>
                    <div className={'product_logo'}>
                        <img src={"	https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png"} alt={"Мексиканская"}></img>
                    </div>
                    <div className={'product_name'}>Мексиканская</div>
                    <div className={'product_description'}>Сыр моцарелла, Сладкий перец, Соус Бургер, Халапеньо, Курица, Кукуруза, Томаты</div>
                    <div className={'product_customize'}>
                        <div className={'product_modification'}><select>
                            <option>30см</option>
                        </select>
                            <select>
                                <option>Хот-дог борт</option>
                            </select></div>
                    </div>
                    <div className={'product_modification-control'}>
                        <div className={"topping-counter__actions"}><button type={"button"} ><svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
                    </div>
                    <div className={'product-result'}>

                        <div className={"product-card__modification-info"}><p className={"product-card__modification-info-price"}>22.99 руб.</p><p className={"product-card__modification-info-weight"}>585 гр</p></div>
                        <div className={"product-card__actions"}><button title={"В корзину"} type={"button"} ><span ><span ><span >В корзину</span></span></span></button></div>
                    </div>
                </div>
                <div className={'product'}>
                    <div className={'product_logo'}>
                        <img src={"	https://images.dominos.by/media/dominos/osg/api/2018/09/12/provence.png"} alt={"Прованс"}></img>
                    </div>
                    <div className={'product_name'}>Прованс</div>
                    <div className={'product_description'}>Голубой сыр, Томаты, Сыр моцарелла, Пепперони, Ветчина, Крем фреш</div>
                    <div className={'product_customize'}>
                        <div className={'product_modification'}><select>
                            <option>30см</option>
                        </select>
                            <select>
                                <option>Хот-дог борт</option>
                            </select></div>
                    </div>
                    <div className={'product-modification-control'}>
                        <div className={"topping-counter__actions"}><button type={"button"} ><svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
                    </div>
                    <div className={'product_result'}>

                        <div className={"product-card__modification-info"}><p className={"product-card__modification-info-price"}>22.99 руб.</p><p className={"product-card__modification-info-weight"}>585 гр</p></div>
                        <div className={"product-card__actions"}><button title={"В корзину"} type={"button"} ><span ><span ><span >В корзину</span></span></span></button></div>
                    </div>
                </div>*/