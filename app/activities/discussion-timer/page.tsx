import DiscussionTimer from '@/components/DiscussionTimer';
import contentData from '@/data/content.json';

export default function DiscussionTimerPage() {
  const activity = contentData.activities.find(a => a.id === 'discussion-timer');

  if (!activity || activity.type !== 'timer') {
    return <div>Activity not found</div>;
  }

  return (
    <DiscussionTimer
      duration={activity.duration}
      prompts={activity.prompts}
      instructions={activity.instructions}
    />
  );
}
