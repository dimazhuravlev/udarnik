import React from "react";
import "./address.css";

const Address = () => (
  <div className="address">
    <p>Вологда, улица Можайского, 44</p>
    <a className="linkSmall" href="tel:8(8172)743063">
      8 (8172)74-30-63
    </a>
    <br />
    <a className="linkSmall" href="mailto:instrum35@mail.ru">
      instrum35@mail.ru
    </a>
    <br />
    <br />
    <p>Вход с торца здания, лесница вниз на цокольный этаж</p>
    <a
      className="btnAddress"
      href="https://goo.gl/maps/K7g6mJ3W1L3zFiWV8"
      target="_blank"
      rel="noopener noreferrer"
    >
      Смотреть на карте
    </a>
  </div>
);

export default Address;
