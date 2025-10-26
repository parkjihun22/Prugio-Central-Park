import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/SalesInfo/guide/page1.jpg";


import Ready from "../../components/Ready/Ready";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },

  ];



  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 메타 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO */}
        <title>평촌 롯데캐슬 르씨엘 - 인터넷청약</title>
        <meta
          name="description"
          content="평촌 롯데캐슬 르씨엘 인터넷청약 안내: 신청 전 확인사항, 접수 절차, 자격 요건, 제출 서류 등 핵심 정보를 한눈에 확인하세요."
        />
        <meta
          name="keywords"
          content="평촌 롯데캐슬 르씨엘, 평촌 롯데캐슬 르씨엘, 인터넷청약, 청약안내, 온라인 접수"
        />
        <link rel="canonical" href="https://www.abcya4.com/SalesInfo/guide" />

        {/* Open Graph */}
        <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />
        <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 인터넷청약" />
        <meta
          property="og:description"
          content="평촌 롯데캐슬 르씨엘 인터넷청약 절차와 자격, 제출 서류를 확인하세요."
        />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
        <meta property="og:url" content="https://www.abcya4.com/SalesInfo/guide" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="평촌 롯데캐슬 르씨엘 - 인터넷청약" />
        <meta
          name="twitter:description"
          content="평촌 롯데캐슬 르씨엘 인터넷청약 가이드: 접수 절차·자격·서류 안내."
        />
        <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
        <meta name="twitter:url" content="https://www.abcya4.com/SalesInfo/guide" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평촌 롯데캐슬 르씨엘 - 인터넷청약",
              "description": "평촌 롯데캐슬 르씨엘 인터넷청약 절차, 자격 요건, 제출 서류 안내.",
              "url": "https://www.abcya4.com/SalesInfo/guide"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* 접근성 텍스트 */}
      <h1 className={styles.screenReaderOnly}>평촌 롯데캐슬 르씨엘 - 인터넷청약</h1>
      <p className={styles.screenReaderOnly}>
        평촌 롯데캐슬 르씨엘 인터넷청약 안내 페이지입니다. 신청 전 확인사항, 접수 절차,
        자격 요건과 제출 서류를 확인하고 온라인으로 간편하게 신청하세요.
      </p>

      <div className={styles.textBox}>
        <div>온라인으로 간편하게 신청하세요</div>
        <div>평촌 롯데캐슬 르씨엘 인터넷청약 가이드</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="평촌 롯데캐슬 르씨엘청약안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      /> */}
      <Ready/>

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
