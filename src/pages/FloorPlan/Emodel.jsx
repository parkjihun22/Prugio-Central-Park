// src/pages/FloorPlan/Emodel.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  // ① title 과 key 를 모두 정의해 줍니다.
  const menuContents = [
    { title: "47㎡", key: "47" },
    { title: "84A㎡", key: "84A" },
    { title: "118A㎡", key: "118A" },
  ];

  // ② menuContents 의 key 와 1:1 매핑되는 URL 객체
  const vrUrls = {
    "47": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",
    "84A": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",
    "118A": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",

  };

  // ③ 초기 selectedType 을 첫 번째 key 로 세팅
  const [selectedType, setSelectedType] = useState(menuContents[0].key);
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  // 페이지 이동 시 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 스타일 토글
  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* …생략… */}
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        원종 휴먼빌 – E-모델하우스
      </h1>

      {/* ─── 상단 탭 버튼 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 임베드 섹션 ─── */}
      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
