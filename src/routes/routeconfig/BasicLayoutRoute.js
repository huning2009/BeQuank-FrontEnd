import React from "react";
import PageLoadable from "../../components/Loadable/PageLoadable";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { ALL_ROLE_TYPE } from "../../utils/authorization";

const Home = PageLoadable(() => import("../home/index"));
const AllStocks=PageLoadable(()=>import("../home/PageLogin/AllStocks"));
const Stock=PageLoadable(()=>import("../stock"));
const Course = PageLoadable(() => import("../course/index"));
const CourseDetail = PageLoadable(() => import("../course/detail/index"));
const Insight = PageLoadable(() => import("../insight/index"));
const Strategy = PageLoadable(() => import("../strategy/index"));
const StrategyResult=PageLoadable(()=>import("../strategy/result/index"));
const article = PageLoadable(() => import("../articleTest/index"));

const UserInfo = PageLoadable(() => import("../user/info/index"));
const GroupList = PageLoadable(() => import("../stockGroup/groupList/index"));

export default [
  <DefaultLayout path="/" exact component={Home} />,
  <DefaultLayout path="/stocks" exact component={AllStocks} />,
  <DefaultLayout path="/stocks/:stockId" exact component={Stock} />,
  <DefaultLayout path="/course" exact component={Course} />,
  <DefaultLayout path="/course/:tutorialId" component={CourseDetail} />,
  <DefaultLayout path="/insight" component={Insight} />,
  <DefaultLayout path="/strategy" exact component={Strategy} role={ALL_ROLE_TYPE} />,
  <DefaultLayout path="/strategy/result" component={StrategyResult} role={ALL_ROLE_TYPE} />,
  <DefaultLayout path="/articleTest" component={article} />,
    <DefaultLayout path="/userInfo" component={UserInfo}/>,
    <DefaultLayout path="/groupList" component={GroupList}/>
];
