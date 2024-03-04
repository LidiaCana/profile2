import { list } from "postcss";

interface Props {
  title: string;
  list: string[];
}
export default function Card({ title, list }: Props) {
  return (
    <div className="bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-lg p-6 h-96">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <div className="mt-4">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}
