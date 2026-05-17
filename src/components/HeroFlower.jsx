// A vintage botanical rose — line-engraving style, drawn with the ink colour
// so it lives in both themes. Purely decorative.
export default function HeroFlower() {
  return (
    <svg
      className="hero__flower"
      viewBox="0 0 240 440"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <g className="hero__flower-bloom">
        {/* outer petals */}
        <path d="M150 36c26 4 44 24 45 49 18 6 30 24 27 44 14 13 17 34 7 51 4 19-6 39-24 47-6 19-26 31-46 28-15 12-37 12-52-1-20 1-39-13-44-32-18-7-28-27-24-46-11-16-9-38 5-52-3-21 10-41 30-48 6-19 25-32 45-30 9-7 21-11 26-11z" />
        {/* second ring */}
        <path d="M148 64c19 3 33 18 34 37 14 5 22 19 19 33 10 11 11 27 2 39-1 15-13 27-28 29-9 11-25 14-37 6-15 4-31-3-38-17-15-3-25-17-23-32-9-12-7-28 4-38-1-16 9-30 24-34 5-14 19-23 34-22 4-5 8-8 9-8z" />
        {/* inner furl */}
        <path d="M140 92c13 1 23 11 25 24 10 4 15 15 11 25 5 9 2 21-7 26-3 11-15 17-26 13-10 5-23 0-27-11-11-2-17-14-12-24-3-11 4-22 15-25 3-9 12-15 21-13z" />
        {/* the coil at the heart */}
        <path d="M138 118c8-2 15 5 14 13s-9 12-15 9-7-12-2-16 13-2 13 6-6 12-12 11" />
        {/* petal folds */}
        <path d="M150 36c-6 14-3 28 7 39" opacity="0.7" />
        <path d="M86 81c12 7 20 19 21 33" opacity="0.7" />
        <path d="M67 178c14-2 28 4 36 16" opacity="0.7" />
        <path d="M126 235c2-15 12-27 26-32" opacity="0.7" />
        <path d="M198 178c-13 3-27-2-36-14" opacity="0.7" />
      </g>

      {/* sepals where the bloom meets the stem */}
      <path d="M118 232c-6 14-18 22-33 24M132 236c2 15-3 30-14 40M150 230c9 11 22 16 36 14" />

      {/* stem, with a romantic curve */}
      <path d="M128 236c-4 28 8 52 2 80-7 32-26 56-22 96 3 24-1 36-4 48" />

      {/* lower leaf */}
      <path d="M108 350c-26-2-44-16-52-39 24-6 46 2 60 22" />
      <path d="M70 322c14 6 27 16 36 30" opacity="0.7" />

      {/* upper leaf */}
      <path d="M120 300c24-6 45 0 60 21-23 12-46 9-64-7" />
      <path d="M180 322c-16 3-31 11-42 24" opacity="0.7" />

      {/* a small bud, because roses rarely travel alone */}
      <path d="M104 432c-3-16 1-31 12-41 12 8 17 23 12 39M104 432l16-2M110 415c5 3 9 8 10 14" />

      {/* a thorn or two */}
      <path d="M115 392c-7 1-12-2-15-9M133 358c7 0 12 4 14 11" opacity="0.7" />
    </svg>
  );
}
