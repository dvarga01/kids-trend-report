import ConversationStarters from '@/components/ConversationStarters';
import contentData from '@/data/content.json';

export default function ConversationStartersPage() {
  const activity = contentData.activities.find(a => a.id === 'conversation-starters');

  if (!activity || activity.type !== 'conversation-starter') {
    return <div>Activity not found</div>;
  }

  return <ConversationStarters prompts={activity.prompts} />;
}
