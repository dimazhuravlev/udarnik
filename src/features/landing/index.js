import React from "react";
import styles from "./landing.module.css";
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
                <img src="/img/map.jpg" className={styles.img} alt="карта" />
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
              <img src="/img/drill.jpg" className={styles.img} alt="дрель" />
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
              <img src="img/tester.jpg" className={styles.img} alt="тестер" />
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
              defaultSize="17%"
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
                      <img
                        src="/img/details.jpg"
                        className={styles.img}
                        alt="details"
                      />
                    </SplitPane>

                    <div className={styles.block} />
                  </SplitPane>

                  <SplitPane
                    split="horizontal"
                    defaultSize="35%"
                    resizerStyle={{
                      backgroundColor: "black",
                      height: "2px",
                      cursor: "row-resize",
                      zIndex: 1
                    }}
                  >
                    <Email />
                    <img
                      src="/img/grinder.jpg"
                      className={styles.img}
                      alt="ротор"
                    />
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
                    <img
                      src="/img/motors.jpg"
                      className={styles.img}
                      alt="запчасти"
                    />
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
