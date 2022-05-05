import './ThanhToan.css'
import { QuantityPicker } from 'react-qty-picker';
function Order(props) {
  // const plusQuantity= () =>{
  //   const plus = document.querySelectorAll("#plus");
  //   for (let i = 0; i < plus.length; i++) {
  //     plus[i].addEventListener('click', () => {
  //         let targetElem = plus[i].previousElementSibling;
  //         let number = Number(targetElem.value);
  //         targetElem.value = number + 1;
  //     })
  // };
  // }
  // const minusQuantity =()=>{
  //   const minus = document.querySelectorAll("#minus");
  //   for (let i = 0; i < minus.length; i++) {
  //     minus[i].addEventListener('click', () => {
  //         let targetElem = minus[i].nextElementSibling;
  //         let number = Number(targetElem.value);
  //         if (number > 1) { targetElem.value = number - 1;}
          
  //     })
  // };
  // }
  return (
      
   <div className="col-lg-5">
  <div className="order-wrapper">
    <div className="table">
      <a href=" ">Chọn bàn</a>
      <i className="fas fa-solid fa-angle-right" />
    </div>
    <hr />
    <div className="order">
    <ul>
      <li key={1}>

      </li>
    </ul>
      
      <div className="order-item">
        <span className="item-number">1.</span>
        <span>
          <span className="item-name">Gà rán</span>
          <p className="item-price">20.000đ</p>
        </span>
        <span className="item-quantity">
          <button className="change-quantity" id="minus">-</button>
          <input className="quantity" type="text" name="quantity" min={1} defaultValue={1} />
          <button className="change-quantity" id="plus">+</button>
        </span>
        <span className="item-total">40.000đ</span>
        <span> <button className="btn-clearfood">X</button></span>
      </div>
    </div>
    <div className="purchase">
      <span>Thành tiền:</span>
      <span id="total">80.000đ</span>
      <div style={{display: 'flex'}}>
        <button className="btn-purchase" id="save">LƯU</button>
        <button className="btn-purchase" id="done">THANH TOÁN</button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Order;
