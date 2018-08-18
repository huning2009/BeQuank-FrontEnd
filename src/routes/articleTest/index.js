import React, { PureComponent } from "react";
import styles from "./index.module.less";

import Title from "../../components/Article/Title";
import Body from "../../components/Article/Body";
import Profile from "../../components/Article/Profile"

export default class Article extends PureComponent {
    render() {
        let profilePictureURL = "http://5b0988e595225.cdn.sohucs.com/images/20171216/a72351d45dee4e6fa270985fb5394f1e.jpeg";
        let profileContent = {
            authorName: "Daumantas Banys",
            introduction: "The 19-year-old designer, who got into digital design five years ago,\n" +
                "                    has been following the UI and UX streams on Adobe Live for a while,\n" +
                "                    and his entries to the weekly UI kit design challenges have not only won\n" +
                "                    him a Creative Cloud subscription, but also a MacBook Pro recently.\n" +
                "                    He was inspired to create his own UI kit to say thank you to the Adobe XD\n" +
                "                    team and to give back to the community",
        };
        let articleContent =
            '# 4.组合视角\n' +
            '\n' +
            '## 4.1 开发包图\n' +
            '\n' +
            '进销存系统的最终开发包设计如下表所示。\n' +
            '\n' +
            '\n' +
            '| 开发（物理包）| 依赖的其他开发包 |\n' +
            '| --- | --- |\n' +
            '| UserUI |  \n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '# 4.2 运行时进程\n' +
            '\n' +
            '在进销存系统中，会有多个客户端进程和一个服务器端进程，其进程图如下图所示。结合部署图，客户端进程是在客户端机器上运行，服务器端进程是在服务器端机器上运行。\n' +
            '\n' +
            '\n' +
            '# 4.3 物理部署\n' +
            '\n' +
            '进销存系统中客户端构件是放在客户端机器上，服务器端构件是放在服务器端机器上。在客户端节点上，还要部署RMIStub构件。由于Java RMI构件属于JDK的一部分。所以，在系统JDK环境已经设置好的情况下，不需要再独立部署。部署图如下图所示。';

        return (
            <div className={styles.article}>
                <Title TitleContent="TitleContent"
                       Date="8012/1/2 11:45:14"
                       AuthorName="AuthorName"
                />
                <Body articleContent={articleContent}/>
                <Profile profilePictureURL={profilePictureURL}
                         profileContent = {profileContent}
                />
            </div>
        );
    }
}