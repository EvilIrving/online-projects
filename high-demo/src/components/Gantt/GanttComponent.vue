<template>
  <div ref="ganttContainer"></div>
</template>

<script>
import { gantt } from 'dhtmlx-gantt';
export default {
  name: 'GanttComponent',
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] }
      }
    }
  },
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    gantt.config.date_format = "%Y-%m-%d";

    gantt.init(this.$refs.ganttContainer);
    gantt.parse(this.$props.tasks);

    gantt.createDataProcessor((entity, action, data, id) => {
      this.$emit(`${entity}-updated`, id, action, data)
    })
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
.gantt-selected-info {
  // border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  height: 50%;
  line-height: 28px;
  padding: 10px;

  h2 {
    // border-bottom: 1px solid #ccc;
  }
  .select-task-prompt h2 {
    // color: #d9d9d9;
  }
}
</style>
