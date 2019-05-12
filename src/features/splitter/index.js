import React from "react";
import "./splitter.css";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

const Splitter = () => (
  <div className="wrapper">
    <SplitterLayout vertical secondaryInitialSize={900}>
      <SplitterLayout secondaryInitialSize={900} className="main">
        <SplitterLayout vertical secondaryInitialSize={200} primaryIndex={1}>
          <div className="block header">РЕМОНТИРУЕМ ИНСТРУМЕНТ И ТЕХНИКУ</div>
          <SplitterLayout vertical secondaryInitialSize={450}>
            <div className="block">Карта</div>
            <div className="block">
              Вологда, улица Можайского, 44 <br />
              Вход с торца, лесница вниз на цокольный этаж
            </div>
          </SplitterLayout>
        </SplitterLayout>

        <SplitterLayout vertical secondaryInitialSize={600}>
          <SplitterLayout secondaryInitialSize={200} vertical>
            <SplitterLayout secondaryInitialSize={200}>
              <div className="block">
                Небольшая мастерская по ремонту электроинструмента и
                бензотехники. Мы бережно восстанавливаем, реанимируем все
                возможные виды инструментов: от недорогих бытовых до
                профессиональных моделей.
              </div>
              <div className="block">Пустота</div>
            </SplitterLayout>
            <div className="block header">
              8 (8172)
              <br />
              346-12-07
            </div>
          </SplitterLayout>
          <div className="block">картинка дрели</div>
        </SplitterLayout>
      </SplitterLayout>

      <SplitterLayout vertical secondaryInitialSize={300} primaryIndex={1}>
        <SplitterLayout>
          <div className="block">картинка тестера</div>
          <SplitterLayout secondaryInitialSize={200}>
            <div className="block">
              Небольшая мастерская по ремонту электроинструмента и бензотехники.
              Мы бережно восстанавливаем, реанимируем все возможные виды
              инструментов: от недорогих бытовых до профессиональных моделей. Мы
              бережно восстанавливаем, реанимируем все возможные виды
              инструментов: от недорогих бытовых до профессиональных моделей.
              Небольшая мастерская по ремонту электроинструмента и бензотехники.
            </div>
            <div className="block">пустота</div>
          </SplitterLayout>
        </SplitterLayout>

        <SplitterLayout vertical secondaryInitialSize={150} primaryIndex={1}>
          <div className="block header feedback">
            отзывы отзывы отзывы отзывы отзывы отзывы
          </div>

          <SplitterLayout secondaryInitialSize={500}>
            <SplitterLayout vertical secondaryInitialSize={150}>
              <SplitterLayout secondaryInitialSize={400}>
                <div className="block">пустота</div>
                <div className="block">картинка1</div>
              </SplitterLayout>

              <div className="block">картинка2</div>
            </SplitterLayout>

            <SplitterLayout vertical secondaryInitialSize={250}>
              <div className="block">верхняя пустота</div>
              <div className="block">нижняя пустота</div>
            </SplitterLayout>
          </SplitterLayout>
        </SplitterLayout>
      </SplitterLayout>
    </SplitterLayout>
  </div>
);

export default Splitter;
