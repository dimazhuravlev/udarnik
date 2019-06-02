import React from "react";
import "./titleBlock.css";

class TitleBlock extends React.Component {
  handleClick() {
    console.log("клик!");
  }

  render() {
    return (
      <div className="titleBlock" onClick={this.handleClick}>
        <p className="title">Ремонтируем</p>
        <p className="title leftspace">инструмент</p>
        <p className="title">технику</p>
        <p className="text">
          Ударник — это небольшая мастерская в Вологде. Мы ремонтируем
          электроинструмент и бензотехники. Бережно восстанавливаем, реанимируем
          все возможные виды инструментов: от недорогих бытовых до
          профессиональных моделей.
        </p>
      </div>
    );
  }
}

export default TitleBlock;
