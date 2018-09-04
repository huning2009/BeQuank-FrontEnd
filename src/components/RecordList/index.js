import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import Tip from "./Tip/index";
import SmallPoint from "../SmallPoint";

class RecordList extends Component {
    render() {
        const { params } = this.props;

        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    <div className={styles.pp}>
                        <div className={styles.point}><SmallPoint/></div>
                        <div className={styles.text}>我的自选股组</div>
                    </div>
                </div>
                <div className={styles["tip-content"]}>
                    {
                        params.map((item, index)=>{
                            return <Tip title={item.recordName} time={item.recordTime}></Tip>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default RecordList;