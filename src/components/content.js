import React from 'react'
import './content.css';
import Carousel from './carousel';
const Content=()=>{
  
   
    return (
        <div className={'content'}>
        <Carousel></Carousel>
        <div className={'content-description'}>
          <div className={'content-name'}>Пицца</div>
          <div className={'content-sort'}>
            <ul>
              <li>Классические</li>
              <li>Любимые</li>
              <li>Премиум</li>
              <li>Легенды</li>
              <li>Красная цена</li>
            </ul>
          </div>
        </div>

        <div className={'products'}>
          <div className={'product'}>
            <div className={'product-logo'}>
              <img src={"https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png"} alt={"Карбонара"}></img>
            </div>
            <div className={'product-name'}>Карбонара</div>
            <div className={'product-description'}>Лук, Бекон, Крем фреш, Ветчина, Шампиньоны, Сыр моцарелла</div>
            <div className={'product-customize'}>
              <div className={'product-modification'}><select>
                <option>30см</option>
              </select>
                <select>
                  <option>Хот-дог борт</option>
                </select></div>
            </div>
            <div className={'product-modification-control'}>
              <div className={"topping-counter__actions"}><button type={"button"} ><svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
            </div>
            <div className={'product-result'}>

              <div className={"product-card__modification-info"}><p className={"product-card__modification-info-price"}>22.99 руб.</p><p className={"product-card__modification-info-weight"}>585 гр</p></div>
              <div className={"product-card__actions"}><button title={"В корзину"} type={"button"} ><span ><span ><span >В корзину</span></span></span></button></div>
            </div>
          </div>
          <div className={'product'}>
            <div className={'product-logo'}>
              <img src={"	https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png"} alt={"Мексиканская"}></img>
            </div>
            <div className={'product-name'}>Мексиканская</div>
            <div className={'product-description'}>Сыр моцарелла, Сладкий перец, Соус Бургер, Халапеньо, Курица, Кукуруза, Томаты</div>
            <div className={'product-customize'}>
              <div className={'product-modification'}><select>
                <option>30см</option>
              </select>
                <select>
                  <option>Хот-дог борт</option>
                </select></div>
            </div>
            <div className={'product-modification-control'}>
              <div className={"topping-counter__actions"}><button type={"button"} ><svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
            </div>
            <div className={'product-result'}>

              <div className={"product-card__modification-info"}><p className={"product-card__modification-info-price"}>22.99 руб.</p><p className={"product-card__modification-info-weight"}>585 гр</p></div>
              <div className={"product-card__actions"}><button title={"В корзину"} type={"button"} ><span ><span ><span >В корзину</span></span></span></button></div>
            </div>
          </div>
          <div className={'product'}>
            <div className={'product-logo'}>
              <img src={"	https://images.dominos.by/media/dominos/osg/api/2018/09/12/provence.png"} alt={"Прованс"}></img>
            </div>
            <div className={'product-name'}>Прованс</div>
            <div className={'product-description'}>Голубой сыр, Томаты, Сыр моцарелла, Пепперони, Ветчина, Крем фреш</div>
            <div className={'product-customize'}>
              <div className={'product-modification'}><select>
                <option>30см</option>
              </select>
                <select>
                  <option>Хот-дог борт</option>
                </select></div>
            </div>
            <div className={'product-modification-control'}>
              <div className={"topping-counter__actions"}><button type={"button"} ><svg width={"26"} height={"26"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"} fill={"rgb(0,121,174)"}><g><path d={"M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"}></path></g></svg></button>Моцарелла-мини</div>
            </div>
            <div className={'product-result'}>

              <div className={"product-card__modification-info"}><p className={"product-card__modification-info-price"}>22.99 руб.</p><p className={"product-card__modification-info-weight"}>585 гр</p></div>
              <div className={"product-card__actions"}><button title={"В корзину"} type={"button"} ><span ><span ><span >В корзину</span></span></span></button></div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  export default Content