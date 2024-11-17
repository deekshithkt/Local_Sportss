import React, { Suspense } from 'react';
import ListTeamPlayers from './ListTeamPlayers';
const CreateTeam = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListTeamPlayers />
    </Suspense>
  );
};

export default CreateTeam;
