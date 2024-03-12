interface CardDetailsProps {
  title: string;
  img: string;
  description: string;
}
export default function CardDetails({
  title,
  img,
  description,
}: CardDetailsProps) {
  console.log("img", img);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-32 rounded-lg">
        <img
          src={img}
          className="w-full h-full object-cover rounded-lg"
          alt={title}
        />
      </div>
      <div className="rounded-lg lg:col-span-2">
        <h1>{title}</h1>
        {<p className="">{description}</p>}
      </div>
    </div>
  );
}
