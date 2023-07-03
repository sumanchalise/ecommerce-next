import clsx from "clsx";

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
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-lightgray py-8">
      <div className="font-JosefinSans text-5xl font-medium">{title}</div>
      <div
        className={clsx("max-w-5xl px-2 text-center font-Mulish text-lg", {
          hidden: desc === "",
        })}
      >
        {desc}
      </div>
      <div
        className={clsx("text-center font-Mulish text-lg", {
          hidden: path === "",
        })}
      >
        {path}
      </div>
    </div>
  );
};
