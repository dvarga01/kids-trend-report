import CardStack from '@/components/CardStack';
import CountdownTimer from '@/components/CountdownTimer';
import contentData from '@/data/content.json';

export default function Home() {
  const { edition, cards } = contentData;
  const isPublished = edition.published;

  return (
    <div className="min-h-[calc(100vh-80px)]">
      {isPublished ? (
        <CardStack cards={cards} />
      ) : (
        <CountdownTimer
          publishDate={edition.publishDate}
          nextEditionDays={edition.nextEditionDays}
        />
      )}
    </div>
  );
}
