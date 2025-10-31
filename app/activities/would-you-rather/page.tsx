import WouldYouRather from '@/components/WouldYouRather';
import contentData from '@/data/content.json';

export default function WouldYouRatherPage() {
  const activity = contentData.activities.find(a => a.id === 'would-you-rather');

  if (!activity || activity.type !== 'would-you-rather') {
    return <div>Activity not found</div>;
  }

  return <WouldYouRather prompts={activity.prompts} />;
}
