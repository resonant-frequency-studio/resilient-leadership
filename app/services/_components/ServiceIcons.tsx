// Abstract icon/glyph components for services

export const ExecutiveIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M24 16 L24 12 M24 32 L24 36 M16 24 L12 24 M32 24 L36 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Executive360Icon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 20 Q8 20 8 26 Q8 32 14 32 L18 36 L18 32 Q24 32 24 26 Q24 20 18 20 Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M34 20 Q40 20 40 26 Q40 32 34 32 L30 36 L30 32 Q24 32 24 26 Q24 20 30 20 Z"
      stroke="currentColor"
      strokeWidth="2"
      transform="scale(-1, 1) translate(-48, 0)"
    />
  </svg>
)

export const TeamIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="16"
      width="12"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="20"
      y="12"
      width="12"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="32"
      y="18"
      width="8"
      height="14"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 16 L20 12 M26 12 L32 18 M36 18 L40 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
  </svg>
)

export const ChangeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16 L20 24 L12 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16 L28 24 L20 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    <path
      d="M28 16 L36 24 L28 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
)

export const SurveyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 32 L12 28 L16 30 L20 24 L24 26 L28 20 L32 22 L40 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="28" r="2" fill="currentColor" />
    <circle cx="16" cy="30" r="2" fill="currentColor" />
    <circle cx="20" cy="24" r="2" fill="currentColor" />
    <circle cx="24" cy="26" r="2" fill="currentColor" />
    <circle cx="28" cy="20" r="2" fill="currentColor" />
    <circle cx="32" cy="22" r="2" fill="currentColor" />
    <circle cx="40" cy="18" r="2" fill="currentColor" />
  </svg>
)

export const CustomIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="12"
      width="12"
      height="12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="24"
      y="12"
      width="12"
      height="12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="12"
      y="24"
      width="12"
      height="12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M24 18 L30 24 L24 30 L18 24 Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)
