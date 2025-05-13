import { useState, useEffect, useRef } from "react";
import { Image as AcroImage, Tag, Space, Spin } from "@arco-design/web-react";

export default function Project({ project, setIsLoading }) {
  const { techs, name, description } = project;
  const [processedImages, setProcessedImages] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    console.log("Project component mounted");
    const { images: currentImages } = project || { images: [] };

    const processAllImages = async () => {
      try {
        setProcessedImages([]); // Clear previous images immediately

        if (!currentImages || currentImages.length === 0) {
          if (setIsLoading) {
            setIsLoading(false);
          }
          return;
        }

        const results = await Promise.all(
          currentImages.map((imageUrl, index) => {
            return new Promise((resolve) => {
              const img = new window.Image();

              img.onload = () => {
                const targetHeight = 180;
                const calculatedWidth = (targetHeight / img.height) * img.width;
                resolve({
                  url: imageUrl,
                  w: calculatedWidth,
                  h: targetHeight,
                  name: `Image ${index + 1}`,
                });
              };

              img.onerror = (err) => {
                console.error(`Failed to load image: ${imageUrl}`, err);
                resolve({
                  url: imageUrl,
                  w: 180,
                  h: 180,
                  name: `Image ${index + 1} (Load Error)`,
                  isError: true,
                });
              };

              img.src = imageUrl; // 直接设置src开始加载图片
            });
          })
        );
        console.log("----------", results);

        if (setIsLoading) setIsLoading(false);
        setProcessedImages(results); // Keep all results, including those with isError: true
      } catch (error) {
        console.error("Error processing images array:", error);
        setProcessedImages([]);
        if (setIsLoading) setIsLoading(false);
      }
    };

    processAllImages();
  }, [project, setIsLoading]);

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
        {processedImages.length === 0 &&
        project.images &&
        project.images.length > 0
          ? // 显示图片加载中的占位符网格
            Array.from({ length: project.images.length }).map((_, index) => (
              <div key={`placeholder-${index}`} className="relative">
                <div className="w-full h-[180px] bg-gray-50 flex flex-col items-center justify-center rounded-md text-center p-2 border border-dashed border-gray-200">
                  <Spin className="mb-2" />
                  <p className="text-xs text-gray-400 font-medium">加载中...</p>
                </div>
              </div>
            ))
          : // 显示已处理的图片
            processedImages.map((item, index) => (
              <div key={index} className="relative cursor-pointer group">
                {item.isError ? (
                  <div className="w-full h-[180px] bg-gray-100 flex flex-col items-center justify-center rounded-md text-center p-2 border border-dashed border-gray-300">
                    <svg
                      className="w-10 h-10 text-gray-400 mb-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.158 0a.225.225 0 0 1 .225.225V8.7a.225.225 0 0 1-.45 0V8.475a.225.225 0 0 1 .225-.225Z"
                      />
                    </svg>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.name || "图片加载错误"}
                    </p>
                  </div>
                ) : (
                  <AcroImage
                    className="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105"
                    src={item.url}
                    loader={true}
                    alt={item.name}
                  />
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
