// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>평촌 롯데캐슬 르씨엘</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 안양시 동안구 평촌동 934번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 5층 ~ 지상 48층, 총 4개 동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 47㎡, 84㎡, 96㎡, 118㎡, 119㎡ 중심의 중대형 평면 구성</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 900세대 (주거형 오피스텔)</span>
        </li>
      </ul>
    ),
  },

  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
          평촌 핵심 입지와 롯데캐슬의 가치가 만나는<br />
          르씨엘만의 프리미엄 라이프
          </p>
        </div>

        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "지하철 4호선·신설역 더블 역세권",
      desc:
        "평촌역과 범계역 인접<br/>인덕원~동탄선(예정) 수혜 입지로 뛰어난 접근성",
    },
    {
      img: slide2,
      title: "우수한 학군과 사교육 인프라",
      desc:
        "도보 통학 가능한 명문 초·중·고<br/>평촌 학원가 중심의 교육 특화 환경",
    },
    {
      img: slide3,
      title: "900세대 대규모 프리미엄 단지",
      desc:
        "총 900세대 규모의 중대형 중심 설계<br/>롯데캐슬 브랜드의 품격과 상징성",
    },
    {
      img: slide4,
      title: "풍부한 생활 인프라와 원스톱 라이프",
      desc:
        "롯데백화점·이마트·한림대병원 등 인접<br/>모든 생활이 가까운 중심 입지",
    },
    {
      img: slide5,
      title: "자연과 함께하는 친환경 단지",
      desc:
        "녹지 중심의 특화 조경 설계<br/>중앙공원·자유공원과 어우러진 쾌적한 주거환경",
    },
    {
      img: slide6,
      title: "스마트 커뮤니티와 미래가치",
      desc:
        "피트니스·스카이라운지·도서관 등 고품격 커뮤니티<br/>GTX-C·신설역 등 교통 확장에 따른 미래 가치 상승",
    },
  ];
  // ...이하 슬라이더 렌더링 로직 그대로

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
