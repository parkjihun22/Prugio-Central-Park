import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SubscriptionGuide/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "인터넷 청약", url: "/SalesInfo/guide" },
    { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
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
          <title>관저 푸르지오 - 체크포인트</title>
          <meta
            name="description"
            content="관저 푸르지오 체크포인트: 모집공고·인터넷청약 전 확인사항, 자격 요건, 제출 서류, 일정 등 꼭 살펴봐야 할 핵심 체크리스트를 제공합니다."
          />
          <meta
            name="keywords"
            content="관저 푸르지오, 관저 푸르지오 임대, 체크포인트, 청약 체크리스트, 제출 서류, 일정"
          />
          <link rel="canonical" href="https://www.abcya4.com/SalesInfo/SubscriptionGuide" />

          {/* Open Graph */}
          <meta property="og:site_name" content="관저 푸르지오" />
          <meta property="og:title" content="관저 푸르지오 - 체크포인트" />
          <meta
            property="og:description"
            content="관저 푸르지오 임대 청약 전 꼭 확인해야 할 체크리스트: 자격·서류·일정 안내."
          />
          <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
          <meta property="og:url" content="https://www.abcya4.com/SalesInfo/SubscriptionGuide" />

          {/* JSON-LD */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "관저 푸르지오 - 체크포인트",
                "description": "관저 푸르지오 임대 청약 전 확인사항(자격, 제출 서류, 일정)을 정리한 체크리스트 페이지입니다.",
                "url": "https://www.abcya4.com/SalesInfo/SubscriptionGuide"
              }
            `}
          </script>
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="체크포인트" />

        <MenuBar contents={menuContents} />

        {/* 접근성 텍스트 */}
        <h1 className={styles.screenReaderOnly}>관저 푸르지오 - 체크포인트</h1>
        <p className={styles.screenReaderOnly}>
          관저 푸르지오 임대 청약을 준비하는 분들을 위한 체크포인트입니다.
          자격 요건, 준비 서류, 주요 일정 등을 한눈에 확인하고 실수 없이 준비하세요.
        </p>

        <div className={styles.textBox}>
          <div>청약 전, 꼭 확인해야 할 것들</div>
          <div>관저 푸르지오 체크포인트</div>
        </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="관저 푸르지오청약체크포인트-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
