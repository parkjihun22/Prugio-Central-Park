import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { pathname } = useLocation(); // 현재 경로를 가져옴

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
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>관저 푸르지오 - 홍보영상</title>
        <meta
          name="description"
          content="대전 서구 관저동 관저 푸르지오 임대의 핵심 가치와 특장점을 담은 공식 홍보영상입니다. 단지 설계, 입지, 생활 인프라, 커뮤니티 시설 등 다양한 매력을 영상으로 확인해 보세요."
        />
        <meta
          name="keywords"
          content="관저 푸르지오, 관저 푸르지오 임대, 대전 관저동 임대아파트, 푸르지오 홍보영상, 장기임대, 전용 84㎡"
        />
        <link rel="canonical" href="https://www.abcya4.com/Brand/video" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="관저 푸르지오 - 홍보영상" />
        <meta
          property="og:description"
          content="관저 푸르지오 임대의 설계·입지·인프라를 한눈에 담은 공식 홍보영상. 프리미엄 생활의 기준을 영상으로 만나보세요."
        />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
        <meta property="og:url" content="https://www.abcya4.com/Brand/video" />
        <meta property="og:site_name" content="관저 푸르지오" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="관저 푸르지오 - 홍보영상" />
        <meta
          name="twitter:description"
          content="대전 관저 푸르지오 임대의 강점을 담은 공식 홍보영상. 단지와 생활환경의 가치를 생생하게 확인하세요."
        />
        <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
        <meta name="twitter:url" content="https://www.abcya4.com/Brand/video" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "관저 푸르지오 - 홍보영상",
              "description": "관저 푸르지오 임대의 설계, 입지, 생활 인프라 등 핵심 가치를 담은 공식 홍보영상 페이지입니다.",
              "url": "https://www.abcya4.com/Brand/video"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        관저 푸르지오 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>
        관저 푸르지오 임대의 공식 홍보영상은 단지 설계와 공간 특화,
        관저 중심의 생활 인프라, 향후 교통 호재 등 핵심 장점을
        명확하고 직관적으로 전달합니다. 영상을 통해 프리미엄
        주거가치를 자세히 확인해 보세요.
      </p>

      <div className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}>
        <div>관저의 일상을 바꾸는 프리미엄</div>
        <div>관저 푸르지오, 영상으로 먼저 만나보세요</div>
      </div>


      <div className={styles.videoContainer}>
        <YouTube
          videoId="8DActrg3Np8"
          opts={{
            width: isMobile ? "400" : "1300",
            height: isMobile ? "300" : "500",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 비디오 종료 시 정지
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brand2;
