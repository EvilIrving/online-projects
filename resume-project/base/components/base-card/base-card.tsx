// base-card.tsx
import { defineComponent, PropType, defineProps } from "vue";

type Layout = "square-s" | "row" | "vertical" | "horizontal" | "square-l";

interface LayoutSize {
  width: string;
  height: string;
  class: string;
}

const layoutSizes: Record<Layout, LayoutSize> = {
  "square-s": {
    width: "70px",
    height: "70px",
    class: "w-[70px] h-[70px]",
  },
  row: {
    width: "160px",
    height: "40px",
    class: "w-[160px] h-[40px]",
  },
  vertical: {
    width: "70px",
    height: "160px",
    class: "w-[70px] h-[160px]",
  },
  horizontal: {
    width: "160px",
    height: "70px",
    class: "w-[160px] h-[70px]",
  },
  "square-l": {
    width: "160px",
    height: "160px",
    class: "w-[160px] h-[160px]",
  },
};

const props = defineProps({
  layout: {
    type: String as PropType<Layout>,
    default: "square-s",
    validator: (value: string): boolean => {
      return ["square-s", "row", "vertical", "horizontal", "square-l"].includes(
        value
      );
    },
  },
  backgroundColor: {
    type: String,
    default: "#ffffff",
  },
  borderRadius: {
    type: [String, Number],
    default: "4px",
  },
  borderColor: {
    type: String,
    default: "#e4e4e4",
  },
  borderWidth: {
    type: [String, Number],
    default: "1px",
  },
  shadow: {
    type: String,
    default: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
});
export const BaseCard = defineComponent({
  name: "BaseCard",
  props,
  setup(props, { slots }) {
    const getStyles = () => {
      return {
        backgroundColor: props.backgroundColor,
        borderRadius:
          typeof props.borderRadius === "number"
            ? `${props.borderRadius}px`
            : props.borderRadius,
        borderColor: props.borderColor,
        borderWidth:
          typeof props.borderWidth === "number"
            ? `${props.borderWidth}px`
            : props.borderWidth,
        boxShadow: props.shadow,
      };
    };

    return () => (
      <div
        class={`
          
          overflow-hidden
          border-solid
          transition-all
          duration-300
          ease-in-out
        `}
        style={getStyles()}
      >
        {slots.default?.()}
      </div>
    );
  },

  methods: {
    setLayout(layout: Layout) {
      if (this.$props.layout !== layout) {
        this.$props.layout = layout;
      }
    },
  },
});
