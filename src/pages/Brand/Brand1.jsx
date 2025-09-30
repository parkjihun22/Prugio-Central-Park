import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>관저 푸르지오 - 브랜드 소개</title>
        <meta
          name="description"
          content="대전 서구 관저동에 자리한 관저 푸르지오 임대의 브랜드 철학과 가치를 소개합니다. 고객의 일상에 집중한 설계, 믿을 수 있는 시공 품질, 지속 가능한 주거문화를 지향하는 브랜드 스토리를 확인하세요."
        />
        <meta
          name="keywords"
          content="관저 푸르지오, 관저 푸르지오 임대, 대전 관저동 임대아파트, 푸르지오 브랜드"
        />
        <link rel="canonical" href="https://www.abcya4.com/Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="관저 푸르지오 - 브랜드 소개" />
        <meta
          property="og:description"
          content="관저 푸르지오 임대의 브랜드 가치와 철학을 소개합니다. 일상에 밀착된 설계와 믿을 수 있는 품질로 프리미엄 주거문화를 완성합니다."
        />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
        <meta property="og:url" content="https://www.abcya4.com/Brand/intro" />
        <meta property="og:site_name" content="관저 푸르지오" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="관저 푸르지오 - 브랜드 소개" />
        <meta
          name="twitter:description"
          content="대전 관저 푸르지오 임대의 브랜드 스토리와 가치를 한눈에. 고객 중심 설계와 지속 가능한 주거문화를 지향합니다."
        />
        <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
        <meta name="twitter:url" content="https://www.abcya4.com/Brand/intro" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "관저 푸르지오 - 브랜드 소개",
              "description": "대전 서구 관저동 관저 푸르지오 임대의 브랜드 철학과 가치를 소개합니다. 고객 중심 설계와 신뢰할 수 있는 품질로 프리미엄 주거문화를 지향합니다.",
              "url": "https://www.abcya4.com/Brand/intro"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="관저 푸르지오" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        관저 푸르지오 - 브랜드소개
      </h1>
      <p className={styles.screenReaderOnly}>
        관저 푸르지오는 고객의 삶을 우선하는 설계와 검증된 품질로
        안심하고 거주할 수 있는 프리미엄 임대 주거 환경을 제공합니다.
        지속 가능한 가치와 혁신을 바탕으로 미래 지향적인 주거문화를 제시합니다.
      </p>

      <div className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}>
        <div>생활의 모든 것을 한걸음에</div>
        <div>관저 푸르지오, 관저의 중심에 서다</div>
      </div>


      <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="관저 푸르지오 배너이미지"
      />

      <Footer />
    </div>
  );
};

export default Brand1;
