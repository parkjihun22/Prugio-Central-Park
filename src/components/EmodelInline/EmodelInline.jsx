import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  { title: "47", key: "47" },
  { title: "84A", key: "84A" },
  { title: "118A", key: "118A" },

];

const vrUrls = {
  "47": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",
  "84A": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",
  "118A": "https://xn--2n1bt8goway3y56cg4aw15a02cyxq.com/vr/tour.html",


};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("47");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
