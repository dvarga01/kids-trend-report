import Link from 'next/link';
import contentData from '@/data/content.json';

export default function ActivitiesPage() {
  const { activities } = contentData;

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'would-you-rather':
        return '🤔';
      case 'conversation-starter':
        return '💬';
      case 'timer':
        return '⏱️';
      default:
        return '✨';
    }
  };

  const getActivityPath = (id: string) => {
    return `/activities/${id}`;
  };

  return (
    <div className="h-full flex items-center justify-center bg-white p-4 md:p-8">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-3">
            This Week's Activities
          </h1>
          <p className="text-base text-[var(--gray-600)] max-w-xl mx-auto">
            Choose an activity to start a meaningful conversation with your kid
          </p>
        </div>

        {/* Activities grid */}
        <div className="space-y-4 mb-8">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={getActivityPath(activity.id)}
              className="group block"
            >
              <div className="bg-white rounded-xl border-2 border-[var(--gray-200)] p-6
                            hover:border-[var(--accent)] hover:shadow-md
                            transition-all active:scale-[0.99]">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 text-3xl">
                    {getActivityIcon(activity.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[var(--gray-900)] mb-1
                                   group-hover:text-[var(--accent)] transition-colors">
                      {activity.title}
                    </h2>
                    <p className="text-sm text-[var(--gray-600)] mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-[var(--gray-100)] text-[var(--gray-700)] rounded-full font-medium">
                        {activity.estimatedTime}
                      </span>
                      <span className="text-[var(--accent)] font-medium group-hover:underline">
                        Start →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to report link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium
                       text-[var(--gray-700)] border-2 border-[var(--gray-300)]
                       hover:bg-[var(--gray-50)] hover:border-[var(--gray-400)]
                       active:scale-95 transition-all"
          >
            ← Back to Report
          </Link>
        </div>
      </div>
    </div>
  );
}
