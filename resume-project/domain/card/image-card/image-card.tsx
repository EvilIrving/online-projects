import { defineComponent, defineProps, PropType } from "vue";
import BaseCard from "@/components/base-card/index";

const props = defineProps({
  image: {
    type: Object as PropType<HTMLImageElement>,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
export const ImageCard = defineComponent({
  name: "ImageCard",
  props,

  setup(props) {
    const handleClick = () => {
      if (props.link) {
        window.open(props.link, "_blank");
      }
    };

    console.log(props);

    return () => (
      <BaseCard
        class={`relative ${props.link ? "cursor-pointer" : ""}`}
        onClick={handleClick}
      >
        <div class="relative w-full h-full">
          <img
            src={props.image}
            alt={props.desc}
            class="w-full h-full object-cover"
          />
          {props.desc && (
            <div
              class="
              absolute 
              bottom-0 
              left-0 
              right-0 
              bg-black/50 
              text-white 
              px-2 
              py-1 
              text-xs 
              truncate
            "
            >
              {props.desc}
            </div>
          )}
        </div>
      </BaseCard>
    );
  },
});
