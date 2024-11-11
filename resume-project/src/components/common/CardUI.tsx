// components/SocialCard.tsx
import { defineComponent, PropType } from "vue";
import { CardProps } from "@/types/card";

export default defineComponent({
  name: "SocialCard",
  props: {
    data: {
      type: Object as PropType<CardProps>,
      required: true,
    },
  },
  setup(props) {
    const renderHeader = () => (
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-2">
          {props.data.avatar && (
            <img src={props.data.avatar} class="w-8 h-8 rounded-full" />
          )}
          <div>
            <h3 class="font-medium">{props.data.title}</h3>
            <p class="text-sm text-gray-500">@{props.data.username}</p>
          </div>
        </div>
        <button class="px-4 py-1 rounded-full bg-primary text-white">
          {props.data.actionText || "关注"}
        </button>
      </div>
    );

    const renderContent = () => {
      switch (props.data.type) {
        case "weibo":
          return (
            <div class="p-4">
              {props.data.quote && (
                <div class="mb-3 text-gray-500 italic">
                  "{props.data.quote}"
                </div>
              )}
              <p>{props.data.content}</p>
            </div>
          );
        case "music":
          return (
            <div class="p-4">
              <img src={props.data.coverImage} class="w-full rounded-lg mb-2" />
              <p class="font-medium">{props.data.songName}</p>
            </div>
          );
        case "podcast":
          return (
            <div class="p-4">
              <img src={props.data.coverImage} class="w-full rounded-lg mb-2" />
              <p class="text-sm text-gray-600">{props.data.description}</p>
            </div>
          );
        case "website":
          return (
            <div class="p-4">
              <p class="text-sm text-gray-600 mb-2">{props.data.description}</p>
              <a href={props.data.url} class="text-blue-500 text-sm">
                {props.data.url}
              </a>
              {props.data.screenshots && (
                <div class="grid grid-cols-2 gap-2 mt-2">
                  {props.data.screenshots.map((img) => (
                    <img src={img} class="w-full rounded-lg" />
                  ))}
                </div>
              )}
            </div>
          );
      }
    };

    return () => (
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {renderHeader()}
        {renderContent()}
      </div>
    );
  },
});
