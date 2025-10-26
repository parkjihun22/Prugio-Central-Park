import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <title>평촌 롯데캐슬 르씨엘 - 단지배치도</title>

  {/* 기본 SEO */}
  <meta
    name="description"
    content="평촌 롯데캐슬 르씨엘 단지배치도 페이지입니다. 동·라인 구성, 커뮤니티 시설, 주차 및 보행 동선 등 단지 전체 구성을 한눈에 확인하세요."
  />
  <link rel="canonical" href="https://www.abcya4.com/ComplexGuide/intro" />

  {/* Open Graph (SNS 공유 핵심) */}
  <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />
  <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 단지배치도" />
  <meta
    property="og:description"
    content="평촌 롯데캐슬 르씨엘의 단지배치도와 커뮤니티 시설 구성을 확인하세요."
  />
  <meta property="og:url" content="https://www.abcya4.com/ComplexGuide/intro" />
  <meta property="og:image" content="https://www.abcya4.com/Main1.png" />

  {/* JSON-LD (간단 버전) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "평촌 롯데캐슬 르씨엘 - 단지배치도",
        "description": "평촌 롯데캐슬 르씨엘 단지배치도: 동별 배치, 커뮤니티, 공용시설, 주차 동선 등 단지 전반 구성을 제공합니다.",
        "url": "https://www.abcya4.com/ComplexGuide/intro"
      }
    `}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="단지배치도" />

<MenuBar contents={menuContents} />

{/* 접근성 텍스트 */}
<h1 className={styles.screenReaderOnly}>평촌 롯데캐슬 르씨엘 - 단지배치도</h1>
<p className={styles.screenReaderOnly}>
  평촌 롯데캐슬 르씨엘 단지배치도 페이지입니다. 세대 및 동 배치, 커뮤니티 공간, 공용시설, 주차와 보행 동선을 시각적으로 안내합니다.
</p>

<div className={styles.textBox}>
  <div>한눈에 보는 단지 구성</div>
  <div>평촌 롯데캐슬 르씨엘의 배치와 동선을 확인하세요</div>
</div>



      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="평촌 롯데캐슬 르씨엘단지배치도-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 각 동 출입구 근처/지상부에는 환기창의 돌출물 및 그릴이 각동 지상층에
          설치될 예정으로 있으며, 이로 인해 냄새 및 소음, 분진등이 발생할 수
          있으므로 사전에 분양 홍보물을 참조하여 확인하시기 바라며, 일부 위치 및
          형태는 실제 시공시 변경될 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 어린이놀이터, 주민운동시설, 휴게시설물, 수경시설의 배치와
          디자인은 향후 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 단지 외부의 건물,녹지,도로 등은 현재 상황 및 계획을 보여주는 것으로
          당사의 시공범위가 아니며,CG 및 모형은 소비자의 이해를 돕기 위해 작성된
          것으로 실제 조성시 상이할 수 있으며 이에 대한 이의를 제기할 수
          없습니다.
        </div>
        <div className={styles.notice}>
          ※ 인접 지역 개발 등으로 향후 일조 및 조망과 관련한 변경 사항이 있을 수
          있으며, 이에 따른 사업주체 및 시공사의 귀책사유는 없으므로,사전에
          사업부지 현장을 방문하여 확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
