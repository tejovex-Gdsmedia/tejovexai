"use client";
import React from "react";
import styles from "./hero-grid.module.css";

export const HeroGrid = () => {
  // Generate 1600 tiles (40x40)
  const tiles = Array.from({ length: 1600 }).map((_, i) => (
    <div key={i} className={styles.tile} />
  ));

  return (
    <div className={styles.gridContainer}>
      <div className={styles.mainGrid}>
        {tiles}
      </div>
    </div>
  );
};
