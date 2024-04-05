import { Card } from '@/components/ui/card';

type Props = {
  available: boolean;
  description: string;
};

export default function AvailibilityStatus({ available, description }: Props) {
  const renderStatusDot = (): React.ReactNode => {
    return (
      <i
        className={`h-3 w-3 rounded-full ${
          available ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
    );
  };
  return (
    <Card className="w-fit inline-flex gap-3 items-center bg-muted px-3 py-2 text-sm font-medium ">
      {renderStatusDot()}
      <div>Actuellement {available ? 'disponible' : 'indisponible'}</div>
    </Card>
  );
}
