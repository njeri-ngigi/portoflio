import { DownloadResumeIcon, GitHub, LinkedIn } from "../../components";

export function Actions() {
  return (
    <div className="h-[350px] flex flex-col justify-center">
      <div className="text-3xl">
        I love working with amazing <br /> people to build intuitive <br />
        products
      </div>
      <div className="flex flex-row w-[200px] justify-between mt-8">
        <LinkedIn />
        <GitHub />
        <DownloadResumeIcon />
      </div>
    </div>
  );
}
