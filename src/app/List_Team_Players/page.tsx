import React, { Suspense, lazy } from 'react';

const ListTeamPlayers = lazy(() => import('./ListTeamPlayers'));

const CreateTeam = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListTeamPlayers />
    </Suspense>
  );
};

export default CreateTeam;
