<template>
  <div class="Wakatime">

    <figure v-if="!isInteractive">
      <embed
        src="https://wakatime.com/share/@emmsdan/5461d632-90b2-4620-b6ca-fb78b5ddf68a.svg"
      />
    </figure>
    <div v-else id="myCanvasContainer">
      <div style="display: flex">
      <div>
      <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
          <li v-for="stack in listStacks" :key="stack.name">
            <a :href="`#${stack.name}`" :style="`color: ${stack.color}`">{{ stack.name}} </a>
          </li>
        </div>
      </div>
        <div style="flex: 1; margin-top: -100px">
          <canvas width="600" height="600" id="myCanvas">
            <p>
              Anything in here will be replaced on browsers that support the canvas
              element
            </p>
          </canvas>
        </div>
      </div>
      <div id="tags">
        <ul>
          <li v-for="stack in listStacks" :key="stack.name" :style="`color: ${stack.color}`">
            <a :href="`#${stack.name}`" :style="`color: ${stack.color}; background-color: ${(stack.color || '').split('').reverse().join('')}`">{{ stack.name}} </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TagCanvas from '@/utils/TagCanvas'
import { computed, onBeforeMount, ref } from '@vue/composition-api'
import { fetchWakaTimeList } from '../../../services/request'
export default {
  name: 'Wakatime',
  setup (_props, { root }) {
    const darkMode = computed(() => root.$store.getters.getDarkMode)
    const listStacks = ref([])
    onBeforeMount(async () => {
      const stack = await fetchWakaTimeList()
      listStacks.value = (await stack.json() || {}).data
    })

    return { isInteractive: true, darkMode, listStacks }
  },
  watch: {
    darkMode () {
      this.DrawCanvas()
    },
    listStacks () {
      this.DrawCanvas()
    }
  },
  methods: {
    DrawCanvas () {
      try {
        if (this.listStacks && this.listStacks.length >= 2) {
          setTimeout(() => {
            TagCanvas.Start('myCanvas', 'tags', {
              // textColour: this.darkMode ? '#fff' : 'rgba(8, 71, 132, 1)',
              // outlineColour: this.darkMode ? '#fff' : 'rgba(0, 29, 66, 1) ',
              textColour: null,
              outlineColour: !this.darkMode ? '#ecf4fe' : 'rgba(0, 29, 66, 1) ',
              reverse: true,
              depth: 0.01,
              maxSpeed: 0.02
            })
          }, 2000)
        }
      } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none'
      }
    }
  },
  mounted () {
    this.DrawCanvas()
  }
}
</script>
<style lang="scss">
 #myCanvasContainer {
   ul {
     display: none;
   }
 }
</style>
