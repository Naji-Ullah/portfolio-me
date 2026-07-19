// The jagged geological contact between two strata. Fill color comes from
// the parent stratum's --s-bg, so each layer "tears into" the one above it.
const PATHS = [
  "M0,20 L48,12 L96,22 L150,9 L210,18 L262,8 L320,21 L382,12 L432,24 L500,10 L560,19 L622,7 L690,20 L750,13 L810,23 L870,10 L930,18 L990,9 L1050,21 L1110,12 L1160,19 L1200,14",
  "M0,14 L70,22 L128,10 L198,19 L250,26 L330,11 L400,20 L470,8 L540,17 L610,25 L680,12 L740,21 L820,9 L890,18 L960,24 L1030,11 L1100,19 L1160,13 L1200,20",
  "M0,22 L60,15 L110,24 L170,10 L240,20 L310,14 L360,25 L430,11 L510,22 L570,9 L640,18 L710,26 L780,13 L850,21 L910,10 L980,19 L1060,14 L1130,23 L1200,12",
  "M0,10 L55,20 L130,13 L190,24 L255,11 L325,19 L395,9 L455,22 L525,15 L595,25 L665,10 L735,18 L805,26 L875,12 L945,20 L1015,9 L1085,17 L1150,24 L1200,16",
];

export default function ContactLine({ variant = 0 }) {
  const d = PATHS[variant % PATHS.length];
  return (
    <svg
      className="contactline"
      viewBox="0 0 1200 32"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={`${d} L1200,32 L0,32 Z`} />
    </svg>
  );
}
