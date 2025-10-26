import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },

  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

      // 이미지가 화면에 보이는지 체크 (예시)
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
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
  <title>평촌 롯데캐슬 르씨엘 - 분양일정</title>
  <meta
    name="description"
    content="경기도 안양시 동안구 평촌동에 위치한 평촌 롯데캐슬 르씨엘의 분양(임대) 일정을 한눈에 확인하세요. 모집공고, 청약접수, 서류 제출, 당첨자 발표 등 주요 일정을 안내합니다."
  />
  <meta
    name="keywords"
    content="평촌 롯데캐슬 르씨엘, 롯데캐슬 평촌, 안양 신축 아파트, 평촌 르씨엘 분양일정, 청약일정, 모집공고"
  />
  <link rel="canonical" href="https://www.abcya4.com/BusinessGuide/plan" />

  {/* Open Graph - 소셜 미디어 공유 최적화 */}
  <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 분양일정" />
  <meta
    property="og:description"
    content="평촌 롯데캐슬 르씨엘의 분양(임대) 일정을 확인하세요. 모집공고부터 청약접수, 당첨자 발표까지 한눈에 볼 수 있습니다."
  />
  <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
  <meta property="og:url" content="https://www.abcya4.com/BusinessGuide/plan" />
  <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />

  {/* Twitter 카드 설정 */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="평촌 롯데캐슬 르씨엘 - 분양일정" />
  <meta
    name="twitter:description"
    content="경기도 안양 평촌 롯데캐슬 르씨엘의 분양(임대) 일정을 한눈에 확인하세요. 모집공고 및 당첨자 발표 정보를 안내합니다."
  />
  <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
  <meta name="twitter:url" content="https://www.abcya4.com/BusinessGuide/plan" />

  {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "평촌 롯데캐슬 르씨엘 - 분양일정",
        "description": "경기도 안양 평촌 롯데캐슬 르씨엘의 분양(임대) 일정과 모집공고, 청약, 당첨자 발표 등 주요 일정을 안내합니다.",
        "url": "https://www.abcya4.com/BusinessGuide/plan"
      }
    `}
  </script>
</Helmet>


        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="분양일정" />

        <MenuBar contents={menuContents} />
        {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
        <h1 className={styles.screenReaderOnly}>
          평촌 롯데캐슬 르씨엘 - 분양일정
        </h1>
        <p className={styles.screenReaderOnly}>
          평촌 롯데캐슬 르씨엘의 분양(임대) 일정 안내 페이지입니다.
          모집공고 게시, 청약 접수, 서류 제출, 당첨자 발표 등
          핵심 일정을 확인하시고 준비에 도움이 되는 안내를 제공합니다.
        </p>

        <div className={styles.textBox}>
          <div>평촌 중심의 프리미엄 라이프</div>
          <div>평촌 롯데캐슬 르씨엘, 중요한 일정부터 꼼꼼히 챙기세요</div>
        </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      {/* <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="평촌 롯데캐슬 르씨엘분양일정안내-image1"
      /> */}
      <Ready/>

      <Footer />
    </div>
  );
};

export default BusinessGuide2;
