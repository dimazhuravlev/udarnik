import React from "react";
import "./splitter.css";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import drill from "./drill.jpg";
import tester from "./tester.jpg";
import master from "./master.jpg";
import grinder from "./grinder.jpg";
import motors from "./motors.jpg";
import Feedback from "../feedback";

const Splitter = () => (
  <div className="wrapper">
    <SplitterLayout percentage vertical secondaryInitialSize={67}>
      <SplitterLayout percentage secondaryInitialSize={60}>
        <SplitterLayout percentage vertical secondaryInitialSize={57}>
          <div className="block header">РЕМОНТИРУЕМ ИНСТРУМЕНТЫ И ТЕХНИКУ</div>
          <SplitterLayout percentage vertical secondaryInitialSize={40}>
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

        <SplitterLayout percentage vertical secondaryInitialSize={57}>
          <SplitterLayout percentage vertical secondaryInitialSize={50}>
            <SplitterLayout
              percentage
              secondaryInitialSize={44}
              primaryIndex={1}
            >
              <div className="block">
                Небольшая мастерская по ремонту электроинструмента и
                бензотехники. Мы бережно восстанавливаем, реанимируем все
                возможные виды инструментов: от недорогих бытовых до
                профессиональных моделей.
              </div>
              <div className="block" />
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

      <SplitterLayout
        percentage
        vertical
        secondaryInitialSize={25}
        primaryIndex={1}
      >
        <SplitterLayout percentage primaryIndex={1}>
          <img src={tester} className="img" alt="тестер" />
          <SplitterLayout percentage secondaryInitialSize={40}>
            <div className="block">
              Небольшая мастерская по ремонту электроинструмента и бензотехники.
              Мы бережно восстанавливаем, реанимируем все возможные виды
              инструментов: от недорогих бытовых до профессиональных моделей. Мы
              бережно восстанавливаем, реанимируем все возможные виды
              инструментов: от недорогих бытовых до профессиональных моделей.
              Небольшая мастерская по ремонту электроинструмента и бензотехники.
            </div>
            <div className="block" />
          </SplitterLayout>
        </SplitterLayout>

        <SplitterLayout
          percentage
          vertical
          secondaryInitialSize={13}
          primaryIndex={1}
        >
          <div className="block">
            <Feedback />
          </div>

          <SplitterLayout percentage vertical secondaryInitialSize={33}>
            <SplitterLayout percentage secondaryInitialSize={37}>
              <SplitterLayout percentage vertical secondaryInitialSize={36}>
                <SplitterLayout percentage secondaryInitialSize={65}>
                  <div className="block" />
                  <img src={master} className="img" alt="мастер" />
                </SplitterLayout>

                <div className="block" />
              </SplitterLayout>

              <SplitterLayout percentage vertical secondaryInitialSize={36}>
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

            <SplitterLayout percentage secondaryInitialSize={70}>
              <div className="block" />

              <SplitterLayout
                percentage
                secondaryInitialSize={70}
                primaryIndex={1}
              >
                <img src={motors} className="img" alt="запчасти" />
                <div className="block" />
              </SplitterLayout>
            </SplitterLayout>
          </SplitterLayout>
        </SplitterLayout>
      </SplitterLayout>
    </SplitterLayout>
  </div>
);

export default Splitter;
