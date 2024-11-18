import { useRouter } from 'next/router';
import ListTeamPlayers from './ListTeamPlayers';

const Page: React.FC = () => {
  const router = useRouter();
  
  // Get the 'team' query parameter from the URL
  const { team } = router.query;

  // If 'team' is not available, fallback to 'Unknown Team'
  const teamName = team || 'Unknown Team';

  return <ListTeamPlayers team={teamName as string} />;
};

export default Page;
