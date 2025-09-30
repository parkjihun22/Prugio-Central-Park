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
                alt="관저 푸르지오 배너 이미지"
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
      text === '관저 푸르지오' ||
      text === '홍보영상' ||
      text === '체크포인트' ||
      text === '당첨자서류안내'
    ) {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            하루의 끝, 본연으로 돌아오는 품격 있는 임대 프리미엄.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            대전 서구 관저동 핵심 주거 라이프
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            NO.1 브랜드, 관저 푸르지오와 함께하세요.
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
            관저동이 선택한 새로운 주거 기준
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            도안 생활권과 풍부한 인프라가 만든 직주근접 프리미엄
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            안정적인 장기임대로 시작하는 합리적인 라이프
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            관저 푸르지오 임대
          </div>
        </>
      );
    } else if (text === '입지환경') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            도안 생활권, 대전 서남권 중심에서 누리는 일상
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            교육·쇼핑·공원까지 한 번에, 관저 푸르지오에서 완성됩니다
          </div>
        </>
      );
    } else if (text === '단지안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            주거의 품격을 높이는 특화 설계
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            일상에 딱 맞춘 효율적인 공간 계획
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            가치의 기준, 관저 푸르지오 임대에서 경험하세요
          </div>
        </>
      );
    }
}