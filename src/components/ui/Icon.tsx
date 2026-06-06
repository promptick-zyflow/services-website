type IconProps = { name: string; className?: string; size?: number };

// Shared line-icon set used across landing pages.
export function Icon({ name, className, size = 20 }: IconProps) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "doc":
      return (
        <svg {...p}>
          <path d="M14 3v4a1 1 0 001 1h4" />
          <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
          <path d="M9 9h1M9 13h6M9 17h6" />
        </svg>
      );
    case "search":
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "layers":
      return (
        <svg {...p}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...p}>
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 3 3 4-5" />
        </svg>
      );
    case "board":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 4v16M15 4v16" />
        </svg>
      );
    case "flag":
      return (
        <svg {...p}>
          <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...p}>
          <path d="M4 19a8 8 0 1116 0" />
          <path d="M12 19l4-6" />
        </svg>
      );
    case "link":
      return (
        <svg {...p}>
          <path d="M9 12h6" />
          <path d="M10 7H7a5 5 0 000 10h3M14 7h3a5 5 0 010 10h-3" />
        </svg>
      );
    case "bell":
      return (
        <svg {...p}>
          <path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" />
          <path d="M10 20a2 2 0 004 0" />
        </svg>
      );
    case "pen":
      return (
        <svg {...p}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M3 9h18M8 2v4M16 2v4" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...p}>
          <path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z" />
          <path d="M15 8a4 4 0 010 8M11 6l8-3v18l-8-3" />
        </svg>
      );
    case "palette":
      return (
        <svg {...p}>
          <path d="M12 3a9 9 0 100 18c1 0 2-1 2-2s-1-2 0-3 3 0 4-2a7 7 0 00-8-9z" />
          <circle cx="7.5" cy="11.5" r="1" />
          <circle cx="10.5" cy="7.5" r="1" />
          <circle cx="15" cy="8" r="1" />
        </svg>
      );
    case "loop":
      return (
        <svg {...p}>
          <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5" />
          <path d="M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" />
        </svg>
      );
    case "users":
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0112 0M16 5a3 3 0 010 6M21 20a6 6 0 00-4-5.6" />
        </svg>
      );
    case "code":
      return (
        <svg {...p}>
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...p}>
          <path d="M5 14c-1.5 1-2 5-2 5s4-.5 5-2M14 4c4 0 6 2 6 6 0 5-5 8-8 9l-3-3c1-3 4-8 9-8" />
          <circle cx="14" cy="10" r="1.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <path d="M4 12l5 5L20 6" />
        </svg>
      );
    case "plug":
      return (
        <svg {...p}>
          <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 01-10 0V8zM12 16v6" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...p}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
        </svg>
      );
    case "target":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case "film":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h4M3 15h4M17 9h4M17 15h4M7 4v16M17 4v16" />
        </svg>
      );
    case "list":
      return (
        <svg {...p}>
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      );
    default:
      return null;
  }
}
