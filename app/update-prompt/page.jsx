import { Suspense } from 'react';
import EditPrompt from '@components/EditPrompt'; // Adjust the import path if necessary

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
}
