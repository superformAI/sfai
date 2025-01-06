// dotlottie-player.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src: string;
          background?: string;
          speed?: string;
          loop?: boolean;
          autoplay?: boolean;
          style?: React.CSSProperties;
        },
        HTMLElement
      >;
    }
  }
  