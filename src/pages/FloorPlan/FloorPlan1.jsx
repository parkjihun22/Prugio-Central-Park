import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg";

const FloorPlan1 = () => {
  const menuContents = [
    { title: "84A", url: "/FloorPlan/59A" },
		{ title: "84B", url: "/FloorPlan/59B" },
		{ title: "84C", url: "/FloorPlan/84A" },
    // { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
		// { title: "세대안내영상", url: "/FloorPlan/videos" }, // 세대안내영상 링크
	
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

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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
  <title>관저 푸르지오 - 평면도</title>

  {/* 기본 SEO */}
  <meta
    name="description"
    content="관저 푸르지오 평면도 안내: 방·욕실 배치와 수납 등 세부 구조를 확인하고, 생활 스타일에 맞는 공간을 선택해 보세요."
  />
  <meta
    name="keywords"
    content="관저 푸르지오, 관저 푸르지오 임대,, 평면도, 세대안내"
  />
  <link rel="canonical" href="https://www.abcya4.com/FloorPlan/59A" />

  {/* Open Graph (핵심) */}
  <meta property="og:site_name" content="관저 푸르지오" />
  <meta property="og:title" content="관저 푸르지오 - 평면도" />
  <meta
    property="og:description"
    content="관저 푸르지오 평면과 주요 특장점을 확인하세요."
  />
  <meta property="og:url" content="https://www.abcya4.com/FloorPlan/59A" />
  <meta property="og:image" content="https://www.abcya4.com/Main1.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="관저 푸르지오 - 평면도" />
  <meta
    name="twitter:description"
    content="관저 푸르지오 평면과 공간 구성을 한눈에."
  />
  <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
  <meta name="twitter:url" content="https://www.abcya4.com/FloorPlan/59A" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "관저 푸르지오 - 평면도",
        "description": "관저 푸르지오 평면도와 구조 정보를 제공합니다.",
        "url": "https://www.abcya4.com/FloorPlan/59A"
      }
    `}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="세대안내" />

<MenuBar contents={menuContents} />

{/* 접근성 텍스트 */}
<h1 className={styles.screenReaderOnly}>관저 푸르지오 - 평면도</h1>
<p className={styles.screenReaderOnly}>
  관저 푸르지오 평면 안내 페이지입니다. 세대의 방·욕실 배치와
  수납, 동선 등 구조를 확인하여 생활 스타일에 맞는 평형을 선택할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>내 생활에 맞춘 실속 공간</div>
  <div>관저 푸르지오 평면을 확인하세요</div>
</div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="관저 푸르지오 평면이미지1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan1;
