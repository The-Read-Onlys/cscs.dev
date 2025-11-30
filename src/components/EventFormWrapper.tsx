import { useEffect, useState } from 'react';
import EventForm from './EventForm';

export default function EventFormWrapper() {
  const [eventId, setEventId] = useState<string | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Read the edit ID from URL on client side
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('edit');

    console.log('EventFormWrapper: editId from URL:', editId);

    if (editId) {
      setEventId(editId);
    }
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          {eventId ? 'Edit Event' : 'Create Event'}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {eventId ? 'Update event details' : 'Add a new event to the schedule'}
        </p>
      </div>

      <div className="max-w-2xl">
        <EventForm eventId={eventId} />
      </div>
    </div>
  );
}
