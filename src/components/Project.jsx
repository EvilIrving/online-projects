import { useState, useEffect, useRef } from "react";
import { Image as AcroImage, Tag, Space  } from "@arco-design/web-react";
 

export default function Project({ project }) {
  const { techs, name, description, images } = project;
  const [processedImages, setProcessedImages] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const processImages = async () => {
      const results = await Promise.all(
        images.map(async (image) => {
          const img = new Image();
          img.src = image;

          await new Promise((resolve) => {
            img.onload = resolve;
          });

          const targetHeight = 180;
          const width = (targetHeight / img.height) * img.width;

          return {
            url: image,
            w: width,
            h: targetHeight,
            name: `Image ${images.indexOf(image) + 1}`,
            show: false,
          };
        })
      );

      setProcessedImages(results);
    };

    processImages();
  }, [images]);

  const COLORS = [
    "red",
    "orangered",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "arcoblue",
    "purple",
    "pinkpurple",
    "magenta",
    "gray",
  ];
  return (
    <div className="w-full max-w-[1056px] pt-2 mx-16 my-auto">
      {/* 新增 sticky 标题栏 */}
      <div className="min-h-[82px] sticky top-[58px]   z-[210] md:top-0 md:px-0">
        <div className="h-0 md:h-6 bg-white"></div>
        <div className="w-1/2 mx-auto bg-blue-500 bg-[length:700px_200px] text-white grid grid-cols-[1fr_min-content] gap-x-4 gap-y-1 p-4 overflow-hidden relative md:bg-cover md:rounded-xl md:gap-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-white text-base font-bold leading-6  m-0">
              {name}
            </h1>
          </div>
          <span className="text-white text-xl font-bold leading-6 whitespace-normal break-words md:text-2xl md:leading-7"></span>
          <div className="flex items-center gap-1 justify-self-end">
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/path/5b531828e59ae83aadb3d88e6b3a98a8.svg"
              className="w-6 h-6 opacity-70"
            />
            <span className="text-white text-sm">示例</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <section>
          <p className="text-xl my-6 text-gray-700">{description}</p>
        </section>
        <section>
          <Space wrap>
            {techs.map((tech, i) => (
              <Tag key={i} color={COLORS[i]} bordered>
                {tech}
              </Tag>
            ))}
          </Space>
        </section>
      </div>

      <div
        ref={wrapperRef}
        className="grid grid-cols-3 gap-4 w-5/6 min-h-screen mx-auto"
      >
        {processedImages.map((item, index) => (
          <div key={index} className="relative cursor-pointer">
            <AcroImage
              className="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105"
              src={item.url}
              loader={true}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
