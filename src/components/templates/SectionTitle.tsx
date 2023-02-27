type Props = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className = '' }: Props) {
  return <h1 className={`${className}`}>{title}</h1>;
}
