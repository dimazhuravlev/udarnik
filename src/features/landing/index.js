import React from "react";
import "./landing.css";
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
import SplitPane from "react-split-pane";

class Landing extends React.Component {
  randomNumber() {
    // return 20 + Math.floor(Math.random() * (80 + 1 - 20));
    return 20;
  }

  render() {
    return (
      <div className="wrapper">
        <SplitPane
          split="horizontal"
          defaultSize="37%"
          resizerStyle={{
            backgroundColor: "black",
            height: "2px",
            cursor: "row-resize",
            zIndex: 1
          }}
        >
          <SplitPane
            defaultSize="40%"
            resizerStyle={{
              backgroundColor: "black",
              width: "2px",
              cursor: "col-resize",
              zIndex: 1
            }}
          >
            <SplitPane
              split="horizontal"
              defaultSize="43%"
              resizerStyle={{
                backgroundColor: "black",
                height: "2px",
                cursor: "row-resize",
                zIndex: 1
              }}
            >
              <TitleBlock />
              <SplitPane
                split="horizontal"
                defaultSize="60%"
                resizerStyle={{
                  backgroundColor: "black",
                  height: "2px",
                  cursor: "row-resize",
                  zIndex: 1
                }}
              >
                <img src={map} className="img" alt="карта" />
                <div className="block">
                  <Address />
                </div>
              </SplitPane>
            </SplitPane>

            <SplitPane
              split="horizontal"
              defaultSize="43%"
              resizerStyle={{
                backgroundColor: "black",
                height: "2px",
                cursor: "row-resize",
                zIndex: 1
              }}
            >
              <SplitPane
                split="horizontal"
                defaultSize="50%"
                resizerStyle={{
                  backgroundColor: "black",
                  height: "2px",
                  cursor: "row-resize",
                  zIndex: 1
                }}
              >
                <SplitPane
                  defaultSize="43%"
                  resizerStyle={{
                    backgroundColor: "black",
                    width: "2px",
                    cursor: "col-resize",
                    zIndex: 1
                  }}
                >
                  <div className="block">
                    Небольшая мастерская по ремонту электроинструмента и
                    бензотехники. Мы бережно восстанавливаем, реанимируем все
                    возможные виды инструментов: от недорогих бытовых до
                    профессиональных моделей.
                  </div>
                  <div className="block" />
                </SplitPane>
                <Phone />
              </SplitPane>
              <img src={drill} className="img" alt="дрель" />
            </SplitPane>
          </SplitPane>

          <SplitPane
            split="horizontal"
            defaultSize="25%"
            resizerStyle={{
              backgroundColor: "black",
              height: "2px",
              cursor: "row-resize",
              zIndex: 1
            }}
          >
            <SplitPane
              defaultSize="50%"
              resizerStyle={{
                backgroundColor: "black",
                width: "2px",
                cursor: "col-resize",
                zIndex: 1
              }}
            >
              <img src={tester} className="img" alt="тестер" />
              <SplitPane
                defaultSize="60%"
                resizerStyle={{
                  backgroundColor: "black",
                  width: "2px",
                  cursor: "col-resize",
                  zIndex: 1
                }}
              >
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
              </SplitPane>
            </SplitPane>

            <SplitPane
              split="horizontal"
              defaultSize="13%"
              resizerStyle={{
                backgroundColor: "black",
                height: "2px",
                cursor: "row-resize",
                zIndex: 1
              }}
            >
              <Feedback />
              <SplitPane
                split="horizontal"
                defaultSize="63%"
                resizerStyle={{
                  backgroundColor: "black",
                  height: "2px",
                  cursor: "row-resize",
                  zIndex: 1
                }}
              >
                <SplitPane
                  defaultSize="63%"
                  resizerStyle={{
                    backgroundColor: "black",
                    width: "2px",
                    cursor: "col-resize",
                    zIndex: 1
                  }}
                >
                  <SplitPane
                    split="horizontal"
                    defaultSize="74%"
                    resizerStyle={{
                      backgroundColor: "black",
                      height: "2px",
                      cursor: "row-resize",
                      zIndex: 1
                    }}
                  >
                    <SplitPane
                      defaultSize="35%"
                      resizerStyle={{
                        backgroundColor: "black",
                        width: "2px",
                        cursor: "col-resize",
                        zIndex: 1
                      }}
                    >
                      <div className="block" />
                      <img src={master} className="img" alt="мастер" />
                    </SplitPane>

                    <div className="block" />
                  </SplitPane>

                  <SplitPane
                    split="horizontal"
                    defaultSize="34%"
                    resizerStyle={{
                      backgroundColor: "black",
                      height: "2px",
                      cursor: "row-resize",
                      zIndex: 1
                    }}
                  >
                    <div className="block header title">
                      UDARNIK35
                      <br />
                      @YANDEX
                      <br />
                      .RU
                    </div>
                    <img src={grinder} className="img" alt="ротор" />
                  </SplitPane>
                </SplitPane>

                <SplitPane
                  defaultSize="30%"
                  resizerStyle={{
                    backgroundColor: "black",
                    width: "2px",
                    cursor: "col-resize",
                    zIndex: 1
                  }}
                >
                  <div className="block" />

                  <SplitPane
                    defaultSize="70%"
                    resizerStyle={{
                      backgroundColor: "black",
                      width: "2px",
                      cursor: "col-resize",
                      zIndex: 1
                    }}
                  >
                    <img src={motors} className="img" alt="запчасти" />
                    <div className="block" />
                  </SplitPane>
                </SplitPane>
              </SplitPane>
            </SplitPane>
          </SplitPane>
        </SplitPane>
      </div>
    );
  }
}

export default Landing;
