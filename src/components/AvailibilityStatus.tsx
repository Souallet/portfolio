type Props = {
  available: boolean;
  description: string;
};

export default function AvailibilityStatus({ available, description }: Props) {
  const renderStatusDot = (): React.ReactNode => {
    return (
      <i
        className={`h-5 w-5 rounded-full ${
          available ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
    );
  };
  return (
    <div className="py-3 px-5 flex items-center gap-4 rounded-full">
      {renderStatusDot()}
      <div>Actuellement {available ? 'disponible' : 'indisponible'}</div>
    </div>
  );
}
