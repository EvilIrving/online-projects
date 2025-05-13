import { useState, useEffect, useRef } from "react";
import { Image as AcroImage, Tag, Space } from "@arco-design/web-react";

export default function Project({ project, setIsLoading }) {
  const { techs, name, description, images } = project;
  const [processedImages, setProcessedImages] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
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
          currentImages.map(async (imageUrl, index) => {
            try {
              const img = new Image();
              img.src = imageUrl;

              await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = (err) => {
                  console.error(`Failed to load image: ${imageUrl}`, err);
                  resolve({ url: imageUrl, name: `Image ${index + 1} (Error)`, isError: true });
                };
              });

              if (img.isError || img.height === 0 || img.width === 0) {
                return {
                  url: imageUrl,
                  w: 180, // Default for error/placeholder
                  h: 180,
                  name: `Image ${index + 1} (Load Error)`,
                  isError: true,
                };
              }

              const targetHeight = 180;
              const calculatedWidth = (targetHeight / img.height) * img.width;

              return {
                url: imageUrl,
                w: calculatedWidth,
                h: targetHeight,
                name: `Image ${index + 1}`,
              };
            } catch (mapError) {
              console.error(`Error processing individual image ${imageUrl}:`, mapError);
              return { url: imageUrl, name: `Image ${index + 1} (Processing Error)`, isError: true };
            }
          })
        );
        setProcessedImages(results.filter(img => !img.isError));
      } catch (error) {
        console.error("Error processing images array:", error);
        setProcessedImages([]);
      } finally {
        if (setIsLoading) {
          setIsLoading(false);
        }
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
