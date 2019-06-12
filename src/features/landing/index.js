import React from "react";
import "./landing.css";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import drill from "./drill.jpg";
import tester from "./tester.jpg";
import master from "./master.jpg";
import grinder from "./grinder.jpg";
import map from "./map.jpg";
import motors from "./motors.jpg";
import Feedback from "../feedback";
import TitleBlock from "../titleBlock";
import Phone from "../phone";
import Address from "../address";

class Landing extends React.Component {
  randomNumber() {
    return 20 + Math.floor(Math.random() * (80 + 1 - 20));
  }

  render() {
    return (
      <div className="wrapper">
        <SplitterLayout percentage vertical secondaryInitialSize={63}>
          <SplitterLayout percentage secondaryInitialSize={60}>
            <SplitterLayout percentage vertical secondaryInitialSize={57}>
              <TitleBlock />
              <SplitterLayout percentage vertical secondaryInitialSize={40}>
                <img src={map} className="img" alt="карта" />
                <div className="block">
                  <Address />
                </div>
              </SplitterLayout>
            </SplitterLayout>

            <SplitterLayout percentage vertical secondaryInitialSize={57}>
              <SplitterLayout percentage vertical secondaryInitialSize={50}>
                <SplitterLayout
                  percentage
                  secondaryInitialSize={43}
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
                <Phone />
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
                  Понедельник-пятница:
                  <br />
                  09:00 – 18:00
                  <br />
                  <br />
                  Суббота:
                  <br />
                  10:00 – 16:00
                  <br />
                  <br />
                  Воскресенье:
                  <br />
                  выходной
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
              <Feedback />
              <SplitterLayout percentage vertical secondaryInitialSize={36}>
                <SplitterLayout percentage secondaryInitialSize={37}>
                  <SplitterLayout percentage vertical secondaryInitialSize={26}>
                    <SplitterLayout percentage secondaryInitialSize={65}>
                      <div className="block" />
                      <img src={master} className="img" alt="мастер" />
                    </SplitterLayout>

                    <div className="block" />
                  </SplitterLayout>

                  <SplitterLayout percentage vertical secondaryInitialSize={66}>
                    <div className="block header title">
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
  }
}

export default Landing;
