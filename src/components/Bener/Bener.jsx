import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평촌 롯데캐슬 르씨엘 배너 이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '평촌 롯데캐슬 르씨엘' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도심 위, 스카이라인을 품은 안양의 새로운 중심
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          명문 학군과 프리미엄 라이프를 누리는 평촌 핵심 입지
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          롯데캐슬의 품격, 평촌 롯데캐슬 르씨엘에서 시작됩니다
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          안양의 스카이라인을 바꾸는 랜드마크 주거타워
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교육·교통·생활 인프라를 모두 갖춘 평촌 프리미엄 입지
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          아파트 이상의 가치, 주거형 오피스텔의 새로운 기준
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평촌 롯데캐슬 르씨엘
        </div>
      </>
    );
  } else if (text === '입지환경') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          트리플 역세권 예정, 미래가치 중심에 선 입지
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          학군·편의·녹지까지 완비된 안양 평촌 라이프의 정점
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          효율적인 공간 설계와 고품격 커뮤니티의 조화
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주의 판상형 구조로 채광과 개방감 극대화
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          프리미엄 주거기준, 평촌 롯데캐슬 르씨엘에서 완성됩니다
        </div>
      </>
    );
  }
}
