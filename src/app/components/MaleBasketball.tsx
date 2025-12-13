import TableComponent from "./Table";
import { StandingRow } from "./Table";

const standings1: StandingRow[] = [
    { id: "A", rank: 1, starred: true, team: "CU", matchScore: "0 - 0",  },
    { id: "B", rank: 2, starred: true, team: "KU", matchScore: "0 - 0",  },
    { id: "C", rank: 3, starred: false, team: "KMITL", matchScore: "0 - 0",  },
    { id: "D", rank: 4, starred: false, team: "KMUTT", matchScore: "0 - 0", },
];

// Function to parse matchScore "wins - losses"
const parseMatchScore = (score: string) => {
    const [wins, losses] = score.split(' - ').map(Number);
    return { wins, losses };
};

// Sort standings by matchScore: higher wins first, then lower losses
const sortedStandings = [...standings1].sort((a, b) => {
    const aScore = parseMatchScore(a.matchScore);
    const bScore = parseMatchScore(b.matchScore);
    if (aScore.wins !== bScore.wins) {
        return bScore.wins - aScore.wins; // Descending wins
    }
    return aScore.losses - bScore.losses; // Ascending losses
});

// Assign ranks and starred based on new order
const updatedStandings = sortedStandings.map((standing, index) => ({
    ...standing,
    rank: index + 1,
    starred: index < 2, // Top 2 starred
}));

const maleBasketballTeams = updatedStandings.length;

export default function MaleBasketball() {
    const dates1: string = "12 ธันวาคม 2025 14.00 น. - 18.00 น.";
    const groupA = "บาสเกตบอลชาย";

    return (
        
            <div className="flex w-full min-[1200px]:flex-row flex-col gap-5 items-center justify-center">
                <TableComponent standings={updatedStandings} dates={dates1} group={groupA} />
            </div>
        
    );
}

export { maleBasketballTeams };