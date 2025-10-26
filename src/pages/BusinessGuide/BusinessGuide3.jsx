import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";





const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 표시 여부를 변경하는 로직 추가 (예시)
  useEffect(() => {
    const handleImageVisibility = () => {
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려갔을 때
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleImageVisibility);

    return () => {
      window.removeEventListener("scroll", handleImageVisibility);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <title>평촌 롯데캐슬 르씨엘 - 분양일정</title>

  {/* 기본 SEO */}
  <meta
    name="description"
    content="평촌 롯데캐슬 르씨엘의 분양 일정을 한눈에 확인하세요. 모집공고, 청약접수, 서류 제출, 당첨자 발표 등 주요 일정을 안내해 드립니다."
  />
  <link rel="canonical" href="https://www.abcya4.com/BusinessGuide/plan" />

  {/* Open Graph (SNS 공유 핵심만) */}
  <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />
  <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 분양일정" />
  <meta
    property="og:description"
    content="평촌 롯데캐슬 르씨엘의 분양 일정을 확인하세요. 모집공고부터 청약, 당첨자 발표까지 핵심 일정을 한눈에 볼 수 있습니다."
  />
  <meta property="og:url" content="https://www.abcya4.com/BusinessGuide/plan" />
  <meta property="og:image" content="https://www.abcya4.com/Main1.png" />

  {/* JSON-LD (간단 버전) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "평촌 롯데캐슬 르씨엘 - 분양일정",
        "description": "평촌 롯데캐슬 르씨엘의 분양 일정과 모집공고, 청약접수, 당첨자 발표 등 주요 일정을 안내합니다.",
        "url": "https://www.abcya4.com/BusinessGuide/plan"
      }
    `}
  </script>
</Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="장기민간임대란" />
      <MenuBar contents={menuContents} />

      {/* 접근성 텍스트 */}
      <h1 className={styles.screenReaderOnly}>평촌 롯데캐슬 르씨엘 - 장기민간임대란</h1>
      <p className={styles.screenReaderOnly}>
        평촌 롯데캐슬 르씨엘 장기민간임대란 페이지입니다. 분양(임대) 계약 체결에 필요한 서류 목록과
        제출 기한, 준비 방법을 정확히 안내하여 혼동 없이 준비할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>계약 준비, 헷갈리지 않게</div>
        <div>평촌 롯데캐슬 르씨엘 계약서류를 한눈에 확인하세요</div>
      </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="평촌 롯데캐슬 르씨엘장기민간임대란-image1"
      />


      <Footer />
    </div>
  );
};

export default BusinessGuide2;
