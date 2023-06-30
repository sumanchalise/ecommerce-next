export const BreadCrumb = ({
  title,
  desc,
  path,
}: {
  title: string;
  desc: string;
  path: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-cream py-8">
      <div className="font-JosefinSans text-5xl font-medium">{title}</div>
      <div className="max-w-5xl text-center font-Mulish text-lg">{desc}</div>
      <div className="text-center font-Mulish text-lg">{path}</div>
    </div>
  );
};
