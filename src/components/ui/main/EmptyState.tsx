import { CheckCircle } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../empty";

export default function EmptyState() {
  return (
    <Empty className="border border-border bg-card py-16">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CheckCircle className="size-14" />
        </EmptyMedia>
        <EmptyTitle className="text-primary-heading text-xl md:text-2xl font-semibold">
          No todos yet
        </EmptyTitle>
        <EmptyDescription className="text-base">
          Start by adding your first task above. Stay organized and get things
          done!
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
