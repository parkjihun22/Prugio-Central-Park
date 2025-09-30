import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

const ComplexGuide3 = () => {
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
        <title>관저 푸르지오 - 커뮤니티</title>

        {/* 기본 SEO */}
        <meta
          name="description"
          content="관저 푸르지오 커뮤니티: 피트니스, 독서실, 골프연습장, 어린이놀이터 등 단지 내 다양한 커뮤니티 시설을 소개합니다. 입주민의 삶의 질을 높이는 편의와 교류의 공간을 만나보세요."
        />
        <meta
          name="keywords"
          content="관저 푸르지오, 관저 푸르지오 임대, 커뮤니티, 피트니스, 독서실, 골프연습장, 어린이놀이터"
        />
        <link rel="canonical" href="https://www.abcya4.com/ComplexGuide/community" />

        {/* Open Graph (핵심만) */}
        <meta property="og:site_name" content="관저 푸르지오" />
        <meta property="og:title" content="관저 푸르지오 - 커뮤니티" />
        <meta
          property="og:description"
          content="관저 푸르지오 단지 내 커뮤니티 시설 안내. 일상에 즐거움을 더하는 다양한 편의시설을 확인하세요."
        />
        <meta property="og:url" content="https://www.abcya4.com/ComplexGuide/community" />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />

        {/* JSON-LD (간단 버전) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "관저 푸르지오 - 커뮤니티",
              "description": "관저 푸르지오 커뮤니티 시설(피트니스, 독서실, 골프연습장, 어린이놀이터 등)을 소개합니다.",
              "url": "https://www.abcya4.com/ComplexGuide/community"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="커뮤니티" />
      <MenuBar contents={menuContents} />

      {/* 접근성 텍스트 */}
      <h1 className={styles.screenReaderOnly}>관저 푸르지오 - 커뮤니티</h1>
      <p className={styles.screenReaderOnly}>
        관저 푸르지오 커뮤니티 페이지입니다. 단지 내 피트니스, 독서실, 골프연습장,
        어린이놀이터 등 다양한 시설을 통해 편리하고 즐거운 일상을 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>함께 누리는 커뮤니티 라이프</div>
        <div>관저 푸르지오, 일상에 즐거움을 더하다</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="관저 푸르지오 커뮤니티안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
