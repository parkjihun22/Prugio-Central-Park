import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "주거 선호 1위, 평촌 핵심 입지<br />생활 인프라 집약 지역",
    contentText:
      "롯데백화점·이마트·한림대병원 도보권<br />편의·의료·문화시설이 가까운 원스톱 생활",
  },
  {
    img: section2Image2,
    titleText: "4호선 더블 역세권<br />GTX-C 예정 노선 수혜지",
    contentText:
      "평촌역·범계역 도보권<br />GTX-C(예정)·인덕원~동탄선 신설 수혜",
  },
  {
    img: section2Image3,
    titleText: "평촌 학원가 도보권<br />우수한 교육 인프라 집중",
    contentText:
      "초·중·고 명문 학군 인접<br />수도권 대표 교육특구 평촌 중심",
  },
  {
    img: section2Image4,
    titleText: "900세대 대단지 프리미엄<br />브랜드가 만든 스카이 랜드마크",
    contentText:
      "지상 48층, 고층 설계와 롯데캐슬 프리미엄<br />중대형 중심, 희소가치 높은 고급 상품 구성",
  },
  {
    img: section2Image5,
    titleText: "특화 커뮤니티 & 설계 혁신",
    contentText:
      "스카이라운지·피트니스·골프연습장 등 커뮤니티<br />4Bay 구조와 팬트리·드레스룸 특화 설계",
  },
  {
    img: section2Image6,
    titleText: "중앙공원·범계공원 인접<br />쾌적한 자연과 함께하는 일상",
    contentText:
      "단지 내 녹지 설계 + 주변 공원 연계<br />산책·여가를 누리는 힐링 라이프",
  },
];



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
  <title>평촌 롯데캐슬 르씨엘 - 입지안내</title>
  <meta
    name="description"
    content="평촌 롯데캐슬 르씨엘 입지 안내: 평촌 중심의 생활 인프라, 쾌적한 녹지 환경, 편리한 광역 교통과 주변 편의시설을 한눈에 확인하세요."
  />
  <meta
    name="keywords"
    content="평촌 롯데캐슬 르씨엘, 롯데캐슬 평촌, 평촌 르씨엘 입지, 교통, 생활 인프라, 녹지, 주변 편의시설"
  />
  <link rel="canonical" href="https://www.abcya4.com/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:site_name" content="평촌 롯데캐슬 르씨엘" />
  <meta property="og:title" content="평촌 롯데캐슬 르씨엘 - 입지안내" />
  <meta
    property="og:description"
    content="평촌 중심의 생활 인프라, 광역 교통, 녹지 환경을 갖춘 평촌 롯데캐슬 르씨엘의 입지 정보를 확인하세요."
  />
  <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
  <meta property="og:url" content="https://www.abcya4.com/LocationEnvironment/intro" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="평촌 롯데캐슬 르씨엘 - 입지안내" />
  <meta
    name="twitter:description"
    content="평촌 롯데캐슬 르씨엘의 교통·생활·녹지 인프라를 한눈에 확인하세요."
  />
  <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
  <meta name="twitter:url" content="https://www.abcya4.com/LocationEnvironment/intro" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "평촌 롯데캐슬 르씨엘 - 입지안내",
        "description": "평촌 롯데캐슬 르씨엘의 교통, 생활 인프라, 녹지 환경 등 주요 입지 정보를 제공합니다.",
        "url": "https://www.abcya4.com/LocationEnvironment/intro"
      }
    `}
  </script>
</Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* 접근성 텍스트 */}
      <h1 className={styles.screenReaderOnly}>평촌 롯데캐슬 르씨엘 - 입지안내</h1>
      <p className={styles.screenReaderOnly}>
        평촌 롯데캐슬 르씨엘의 위치와 주변 인프라를 종합적으로 안내합니다. 교통, 교육,
        상업·문화시설, 공원과 녹지 등 일상에 필요한 요소를 가까이에서 누릴 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>평촌 중심의 프리미엄 라이프</div>
        <div>살수록 높아지는 가치, 평촌 롯데캐슬 르씨엘</div>
        <div>일상과 자연, 모두 가까운 입지</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="평촌 롯데캐슬 르씨엘 입지안내 이미지"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      {/* <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※평택 브레인시티 개발계획 관련내용은 '경기도 고시 제2022-283호' 및
          '평택도시공사 브레인시티 토지 이용 계획'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※아주대학교 평택병원 및 카이스트 평택캠퍼스 관련 내용은 '평택시청'
          2024년 주요업무계획을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※평택동부고속화도로 관련 내용은 '평택시 고지 제 2023-407호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨
          교통분야 3대 혁신 전략'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※신설도로 관련내용은 '경기도 평택시 고시 제2023-316호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계
          기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을
          알려드립니다
        </div>
        <div className={styles.notice}>
          ※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경,
          허가관청 및 국가시책에 따라 변경될 수 있습니다.
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
