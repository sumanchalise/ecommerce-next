import { Typography } from "./Typography";

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
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-lightgray py-8">
      <Typography varient="heading1">{title}</Typography>
      <Typography
        varient="body1"
        center
        hidden={desc === ""}
        className="max-w-5xl px-2"
      >
        {desc}
      </Typography>
      <Typography varient="body1" center hidden={path === ""}>
        {path}
      </Typography>
    </div>
  );
};
