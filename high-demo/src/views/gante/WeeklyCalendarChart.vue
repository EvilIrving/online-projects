<template>
  <div ref="gante" id="container">
    <!-- <tag-tab></tag-tab> -->
    <gantt-component :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate"></gantt-component>
  </div>
</template>

<script>
import GanttComponent from 'comp/Gantt/GanttComponent.vue';

export default {
  name: 'WeeklyCalendarChart',
  props: {

  },
  components: {
    GanttComponent,
  },
  data() {
    return {
      tasks: {
        data: [
          { id: 1, text: '1', start_date: '2020-01-17', duration: 3, progress: 0.6 },
          { id: 2, text: '#2', start_date: '2020-01-20', duration: 3, progress: 0.4 }
        ],
        links: [
          { id: 1, source: 1, target: 2, type: '0' }
        ]
      },
      messages: []
    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    gantt.attachEvent('onTaskSelected', (id) => {
      let task = gantt.getTask(id);
      console.log(task);
      this.$emit('task-selected', task);
    });

    gantt.attachEvent('onTaskIdChange', (id, new_id) => {
      if (gantt.getSelectedId() == new_id) {
        let task = gantt.getTask(new_id);
      console.log(task);
        this.$emit('task-selected', task);
      }
    });
  },
  methods: {
    addMessage(message) {
      this.messages.unshift(message)
      if (this.messages.length > 40) {
        this.messages.pop()
      }
    },

    logTaskUpdate(id, mode, task) {
      let text = (task && task.text ? ` (${task.text})` : '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },

    logLinkUpdate(id, mode, link) {
      let message = `Link ${mode}: ${id}`
      if (link) {
        message += ` ( source: ${link.source}, target: ${link.target} )`
      }
      this.addMessage(message)
    }
  },
};
</script>

<style scoped lang="scss">
#container {
  height: 900px;
  & > div {
    width: 100%;
    height: 100%;
  }
}
</style>
