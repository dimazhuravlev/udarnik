import React from "react";
import "./splitter.css";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import drill from "./drill.jpg";
import tester from "./tester.jpg";
import master from "./master.jpg";
import grinder from "./grinder.jpg";
import motors from "./motors.jpg";

const Splitter = () => (
  <div className="wrapper">
    <SplitterLayout vertical secondaryInitialSize={1400}>
      <SplitterLayout secondaryInitialSize={900}>
        <SplitterLayout vertical secondaryInitialSize={200} primaryIndex={1}>
          <div className="block header">РЕМОНТИРУЕМ ИНСТРУМЕНТЫ И ТЕХНИКУ</div>
          <SplitterLayout vertical secondaryInitialSize={450}>
            <div className="block">Карта</div>
            <div className="block">
              Вологда, улица Можайского, 44 <br />
              Вход с торца, лесница вниз на цокольный этаж
              <br />
              <br />
              Понедельник-пятница: 9:00 – 18:00
              <br />
              Суббота: 10:00 – 18:00
              <br />
              Воскресенье: выходной
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
          <img src={drill} className="img" alt="дрель" />
        </SplitterLayout>
      </SplitterLayout>

      <SplitterLayout vertical secondaryInitialSize={300} primaryIndex={1}>
        <SplitterLayout>
          <img src={tester} className="img" alt="тестер" />
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

          <SplitterLayout vertical secondaryInitialSize={400}>
            <SplitterLayout secondaryInitialSize={500}>
              <SplitterLayout vertical secondaryInitialSize={150}>
                <SplitterLayout secondaryInitialSize={400}>
                  <div className="block">пустота</div>
                  <img src={master} className="img" alt="мастер" />
                </SplitterLayout>

                <div className="block">пустота</div>
              </SplitterLayout>

              <SplitterLayout vertical secondaryInitialSize={250}>
                <div className="block header">
                  UDARNIK35
                  <br />
                  @YANDEX
                  <br />
                  .RU
                </div>
                <img src={grinder} className="img" alt="ротор" />
              </SplitterLayout>
            </SplitterLayout>

            <SplitterLayout secondaryInitialSize={1000}>
              <div className="block">пустота</div>

              <SplitterLayout secondaryInitialSize={400} primaryIndex={1}>
                <img src={motors} className="img" alt="запчасти" />
                <div className="block">пустота</div>
              </SplitterLayout>
            </SplitterLayout>
          </SplitterLayout>
        </SplitterLayout>
      </SplitterLayout>
    </SplitterLayout>
  </div>
);

export default Splitter;
