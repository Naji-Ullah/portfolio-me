// A little engraved monogram seal — a sign-off at the foot of the page.
// Echoes the rose: same ink, same hand-drawn draw-in. Decorative.
export default function Monogram() {
  return (
    <svg
      className="seal"
      viewBox="0 0 168 168"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <g
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="seal__ink"
      >
        {/* twin rings */}
        <circle cx="84" cy="84" r="70" />
        <circle cx="84" cy="84" r="62" opacity="0.55" />

        {/* leaf sprigs on the band */}
        <path d="M84 14c-5 5-5 13 0 18 5-5 5-13 0-18Z" />
        <path d="M84 154c-5-5-5-13 0-18 5 5 5 13 0 18Z" />
        <path d="M22 70c6 2 12-1 15-7-6-2-12 1-15 7ZM146 70c-6 2-12-1-15-7 6-2 12 1 15 7Z" opacity="0.7" />
      </g>

      {/* the initials, set in the display serif */}
      <text
        x="84"
        y="84"
        className="seal__letters"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="500"
        fontSize="60"
        letterSpacing="-2"
        fill="currentColor"
        stroke="none"
      >
        NU
      </text>

      <text
        x="84"
        y="132"
        className="seal__year"
        textAnchor="middle"
        fontFamily="Newsreader, Georgia, serif"
        fontSize="11"
        letterSpacing="3"
        fill="currentColor"
        stroke="none"
      >
        MMXXVI
      </text>
    </svg>
  );
}
