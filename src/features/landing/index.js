import React from "react";
import styles from "./landing.module.css";
import drill from "./../../img/drill.jpg";
import tester from "./../../img/tester.jpg";
import master from "./../../img/master.jpg";
import grinder from "./../../img/grinder.jpg";
import map from "./../../img/map.jpg";
import motors from "./../../img/motors.jpg";
import Feedback from "../feedback";
import TitleBlock from "../titleBlock";
import Phone from "../phone";
import Address from "../address";
import SplitPane from "react-split-pane";
import Email from "../email";
import "./splitterStyles.css?CSSModulesDisable";

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
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
                <img src={map} className={styles.img} alt="карта" />
                <div className={styles.block}>
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
                  <div className={styles.block}>
                    Небольшая мастерская по ремонту электроинструмента и
                    бензотехники. Мы бережно восстанавливаем, реанимируем все
                    возможные виды инструментов: от недорогих бытовых до
                    профессиональных моделей.
                  </div>
                  <div className={styles.block} />
                </SplitPane>
                <Phone />
              </SplitPane>
              <img src={drill} className={styles.img} alt="дрель" />
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
              <img src={tester} className={styles.img} alt="тестер" />
              <SplitPane
                defaultSize="60%"
                resizerStyle={{
                  backgroundColor: "black",
                  width: "2px",
                  cursor: "col-resize",
                  zIndex: 1
                }}
              >
                <div className={styles.block}>
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
                <div className={styles.block} />
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
                      <div className={styles.block} />
                      <img src={master} className={styles.img} alt="мастер" />
                    </SplitPane>

                    <div className={styles.block} />
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
                    <Email />
                    <img src={grinder} className={styles.img} alt="ротор" />
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
                  <div className={styles.block} />

                  <SplitPane
                    defaultSize="70%"
                    resizerStyle={{
                      backgroundColor: "black",
                      width: "2px",
                      cursor: "col-resize",
                      zIndex: 1
                    }}
                  >
                    <img src={motors} className={styles.img} alt="запчасти" />
                    <div className={styles.block} />
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
