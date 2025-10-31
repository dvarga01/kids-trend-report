interface DigestCardProps {
  title: string;
  content: string;
  whyItMatters: string;
  stat?: string | null;
  cardNumber: number;
  totalCards: number;
}

export default function DigestCard({
  title,
  content,
  whyItMatters,
  stat,
  cardNumber,
  totalCards
}: DigestCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-[var(--gray-200)] p-6 md:p-8 overflow-y-auto">
      {/* Card number indicator */}
      <div className="text-sm text-[var(--gray-500)] mb-4 font-medium">
        {cardNumber} of {totalCards}
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--gray-900)] mb-4 leading-tight">
        {title}
      </h2>

      {/* Main content */}
      <p className="text-base md:text-lg text-[var(--gray-700)] mb-4 leading-relaxed">
        {content}
      </p>

      {/* Stat callout if present */}
      {stat && (
        <div className="bg-[var(--accent)]/5 border-l-4 border-[var(--accent)] p-4 mb-4 rounded">
          <p className="text-xl font-bold text-[var(--accent)]">{stat}</p>
        </div>
      )}

      {/* Why it matters section */}
      <div className="mt-auto pt-4 border-t border-[var(--gray-200)]">
        <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
          Why It Matters
        </h3>
        <p className="text-sm md:text-base text-[var(--gray-600)] leading-relaxed">
          {whyItMatters}
        </p>
      </div>
    </div>
  );
}
