import React from 'react'
// import props.styles from '../cartButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const CartListUnit = (props) => {

  return (
    <div className={props.styles.list_unit}>
      <div className={props.styles.item_header}>
        <span>{props.content.title}</span>
        <span className={props.styles.delete_item} onClick={() => props.deleteItem(props.position)}><FontAwesomeIcon icon={faXmarkSquare} /></span>
      </div>
      <div>
        <div className={props.styles.item_content}>
          <span>{props.content.addedDoughName}</span> <span>{props.priceName}</span>
          <span>{props.content.price + props.content.addedPrice + 'р'}</span>
        </div>
        {props.addAmount && <div >
          <div className={props.styles.amount_wrapper}>
            <div className={props.styles.amount} onClick={() => props.addAmount(props.position)}><span><FontAwesomeIcon icon={faPlus} /></span></div>
            <div className={props.styles.amount} onClick={() => props.reduceAmount(props.position)}><span><FontAwesomeIcon icon={faMinus} /></span></div>
          </div>

          <span>{props.content.amount + ' шт.'}</span>
        </div>}

      </div>
    </div>

  );

}
export default CartListUnit