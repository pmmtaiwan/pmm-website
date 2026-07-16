type SocialKind = "facebook" | "instagram" | "line" | "youtube";

type SocialChannel = {
  href: string;
  kind: SocialKind;
  label: string;
};

type SocialIconLinksProps = {
  channels: SocialChannel[];
  size?: "regular" | "large";
};

const iconClass = {
  regular: "h-11 w-11",
  large: "h-16 w-16"
};

function SocialIcon({ kind }: { kind: SocialKind }) {
  if (kind === "facebook") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
        <rect width="48" height="48" rx="6" fill="#3b5998" />
        <path
          d="M29.6 48V29.4h6.2l.9-7.2h-7.1v-4.6c0-2.1.6-3.5 3.6-3.5H37V7.7c-.7-.1-3-.3-5.7-.3-5.7 0-9.6 3.5-9.6 9.8v5h-6.4v7.2h6.4V48h7.9Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
        <defs>
          <linearGradient id="instagram-gradient" x1="8" x2="40" y1="42" y2="6">
            <stop offset="0" stopColor="#ffd600" />
            <stop offset=".35" stopColor="#ff0069" />
            <stop offset=".7" stopColor="#d300c5" />
            <stop offset="1" stopColor="#7638fa" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#instagram-gradient)" />
        <rect x="12" y="12" width="24" height="24" rx="8" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="4" />
        <circle cx="32.5" cy="15.5" r="2.4" fill="#fff" />
      </svg>
    );
  }

  if (kind === "line") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
        <rect width="48" height="48" rx="6" fill="#06c755" />
        <path
          d="M38 22.7c0-7.1-6.3-12.8-14-12.8S10 15.6 10 22.7c0 6.3 5 11.6 11.8 12.6.5.1 1.1.3 1.2.7.1.4.1.9 0 1.3l-.2 1.3c-.1.4-.3 1.5 1.2.8 1.4-.7 7.8-4.6 10.7-7.9 2-2.2 3.3-5.2 3.3-8.8Z"
          fill="#fff"
        />
        <path
          d="M17.5 19.1h1.9v6.2h3.3v1.8h-5.2v-8Zm6.3 0h1.9v8h-1.9v-8Zm3.4 0h1.8l3.1 4.7v-4.7H34v8h-1.8L29 22.4v4.7h-1.8v-8Zm8.1 0h5.1v1.7h-3.2v1.4h2.8v1.7h-2.8v1.5h3.2v1.7h-5.1v-8Z"
          fill="#06c755"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 72 48" aria-hidden="true" className="h-full w-full">
      <path
        d="M70.5 7.5A9 9 0 0 0 64.2 1C58.6 0 36 0 36 0S13.4 0 7.8 1A9 9 0 0 0 1.5 7.5C.5 13.1.5 24 .5 24s0 10.9 1 16.5A9 9 0 0 0 7.8 47C13.4 48 36 48 36 48s22.6 0 28.2-1a9 9 0 0 0 6.3-6.5c1-5.6 1-16.5 1-16.5s0-10.9-1-16.5Z"
        fill="#ff0000"
      />
      <path d="M29 34.3V13.7L47 24 29 34.3Z" fill="#fff" />
    </svg>
  );
}

export function SocialIconLinks({ channels, size = "regular" }: SocialIconLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {channels.map((channel) => (
        <a
          key={channel.href}
          href={channel.href}
          target="_blank"
          rel="noreferrer"
          aria-label={channel.label}
          title={channel.label}
          className={`${iconClass[size]} block transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-4 focus:ring-offset-charcoal`}
        >
          <SocialIcon kind={channel.kind} />
        </a>
      ))}
    </div>
  );
}
