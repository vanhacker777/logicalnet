interface SectionDividerProps {
  image: string;
  alt: string;
  height?: string;
  overlay?: boolean;
}

export default function SectionDivider({ image, alt, height = 'h-64', overlay = true }: SectionDividerProps) {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80" />
      )}
    </div>
  );
}
