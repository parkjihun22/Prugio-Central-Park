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
          <span>관저 푸르지오 장기임대</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            대전광역시 서구 관저동 일원 (계백지구 A1BL·A2BL) <br />
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            지하 2~3층 / 지상 최고 25층, 8개동
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            전용 84㎡ (A/B/C 타입)
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
            총 660세대 (임대 132세대 포함)
          </span>
        </li>
        <li>
          <strong>시행/시공</strong>
          <span>
            시행: 신한자산신탁㈜ / 시공: ㈜대우건설
          </span>
        </li>
        <li>
          <strong>입주예정</strong>
          <span>
            2026년 11월
          </span>
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
            관저 중심 생활을 누리는<br />
            NO.1 브랜드 장기임대 아파트
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
      title: "확정된 개발호재와 광역 접근성",
      desc: `충청권 광역철도 1단계(예정)와 대전 도시철도 2호선 트램(예정)으로 <br />
대전 전역은 물론 세종·충청권 주요 거점으로 빠른 이동이 가능합니다. <br />
서대전IC, 서대전JC, 계백로 등 편리한 도로망도 가까워 교통 프리미엄을 누립니다.`
    },
    {
      img: slide2,
      title: "푸르지오 특화설계와 쾌적한 단지",
      desc: `세련된 외관 디자인과 함께 채광·통풍을 고려한 단지 배치, <br /> 팬트리·광폭 드레스룸 등 다양한 수납 특화 설계가 적용되었습니다. <br /> 주거의 품격을 높이는 커뮤니티 시설과 조경까지 더해집니다.`
    },
    {
      img: slide3,
      title: "대전 시내·광역을 더 빠르게",
      desc: `계백로와 도안대로 확장으로 시내 접근이 용이하며, <br /> 충청권 광역철도와 트램 개통 시 대전 전역·세종·오송 등으로 <br /> 출퇴근과 생활 이동이 더욱 빨라질 예정입니다.`
    },
    {
      img: slide4,
      title: "교육·쇼핑·의료, 가까운 생활 인프라",
      desc: `느리울초, 가수원초, 느리울중 등 우수한 학군과 학원가 인접, <br /> 건양대병원, 대형마트, 문화·편의시설까지 모두 가까워 <br /> 온 가족이 만족하는 원스톱 생활 인프라를 누릴 수 있습니다.`
    },
    {
      img: slide5,
      title: "품격 있는 주거공간 프리미엄",
      desc: `전용 84㎡ A/B/C 타입 구성으로 3Room·2Bath 구조, <br /> 드레스룸·발코니 확장 등 실속 있는 공간 활용이 가능합니다. <br /> 쾌적하고 효율적인 주거 환경을 제공합니다.`
    },
    {
      img: slide6,
      title: "안정적인 장기임대의 합리성",
      desc: `최장 10년 거주가 보장되는 장기임대 형태로 안정적인 주거가 가능하며, <br /> 임대료 인상률은 2년마다 5% 이내로 제한됩니다. <br /> HUG 전세보증보험 가입으로 보증금까지 안전하게 보호됩니다.`
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
        <div className={styles.preTitle}>Humanville BUSINESS</div>
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
