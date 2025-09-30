import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

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
        {/* 기본 메타 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO */}
        <title>관저 푸르지오 - 프리미엄</title>
        <meta
          name="description"
          content="관저 푸르지오 프리미엄: 특화 설계, 고급 마감, 스마트홈, 풍부한 커뮤니티와 조경, 친환경 설비까지 일상을 업그레이드하는 차별화 가치를 소개합니다."
        />
        <meta
          name="keywords"
          content="관저 푸르지오, 관저 푸르지오 임대, 프리미엄, 특화 설계, 스마트홈, 커뮤니티"
        />
        <link rel="canonical" href="https://www.abcya4.com/LocationEnvironment/primium" />

        {/* Open Graph */}
        <meta property="og:site_name" content="관저 푸르지오" />
        <meta property="og:title" content="관저 푸르지오 - 프리미엄" />
        <meta
          property="og:description"
          content="관저 푸르지오의 특화 설계와 커뮤니티, 스마트 편의와 친환경 설비 등 프리미엄 요소를 확인하세요."
        />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
        <meta property="og:url" content="https://www.abcya4.com/LocationEnvironment/primium" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "관저 푸르지오 - 프리미엄",
              "description": "관저 푸르지오의 특화 설계, 커뮤니티, 스마트홈, 친환경 설비 등 프리미엄 요소를 소개합니다.",
              "url": "https://www.abcya4.com/LocationEnvironment/primium"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* 접근성 텍스트 */}
      <h1 className={styles.screenReaderOnly}>관저 푸르지오 - 프리미엄</h1>
      <p className={styles.screenReaderOnly}>
        관저 푸르지오 프리미엄 페이지입니다. 특화 설계와 고급 마감, 스마트홈,
        커뮤니티와 조경, 친환경 설비 등 차별화된 가치를 자세히 안내합니다.
      </p>

      <div className={styles.textBox}>
        <div>일상에 프리미엄을 더하다</div>
        <div>관저 푸르지오, 디테일로 완성된 가치</div>
      </div>


      <img
        src={page1}
        className={styles.image3}
        alt="관저 푸르지오 프리미엄설명 이미지"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
