import type { AwardEntry } from "../content/resume";
import { AwardsBlock } from "./Awards";

type Props = {
  competition: AwardEntry[];
  ecosystem: AwardEntry[];
  competitionTitle: string;
  ecosystemTitle: string;
};

export function AwardsSection({
  competition,
  ecosystem,
  competitionTitle,
  ecosystemTitle,
}: Props) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {competitionTitle}
      </h3>
      <AwardsBlock entries={competition} />
      <h3 className="mb-4 mt-12 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {ecosystemTitle}
      </h3>
      <AwardsBlock entries={ecosystem} />
    </div>
  );
}
