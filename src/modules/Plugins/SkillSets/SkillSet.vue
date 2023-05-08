<template>
  <div class="SkillSet" id="myCanvasContainer">

      <div style="max-height: 300px; overflow: hidden; overflow-y: scroll">
          <div v-for="stack in listStacks" :key="stack.name">
            <a :href="`#${stack.name}`" :style="`color: ${stack.color}`">{{ stack.name}} </a>
          </div>
        </div>
        <div>
          <canvas width="400" height="400" id="myCanvas">
            <p>
              Anything in here will be replaced on browsers that support the canvas
              element
            </p>
          </canvas>
        </div>
      <div id="tags">
        <ul>
          <li v-for="stack in listStacksTags" :key="stack.name" :style="`color: ${stack.color}`">
            <a :href="`#${stack.name}`" :style="`color: ${stack.color}; background-color: ${stack.color}`">{{ stack.name}} </a>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
import TagCanvas from '@/utils/TagCanvas'
import { computed, onBeforeMount, ref } from '@vue/composition-api'
import { fetchSkillsList } from '../../../services/request'
export default {
  name: 'SkillSet',
  setup (_props, { root }) {
    const darkMode = computed(() => root.$store.getters.getDarkMode)
    const listStacks = ref([])
    const listStacksTags = ref([])
    onBeforeMount(async () => {
      const stack = await fetchSkillsList()
      listStacks.value = (await stack.json() || {}).data
      const fn = (arr) => arr.sort((a, b) => a.name.localeCompare(b.name))
      let ui = fn(listStacks.value)
      // multiple listStacksTags 4 times
      ui = [...fn(listStacks.value), ...ui, fn(listStacks.value), ...ui]
      listStacksTags.value = ui.map((stack, index) => {
        const num1 = Math.floor(Math.random() * 255)
        const num2 = Math.floor(Math.random() * 255)
        const num3 = Math.floor(Math.random() * 255)
        return {
          ...stack,
          color: `rgba(${num1}, ${num2}, ${num3}, 1)`
        }
      })

      // eslint-disable-next-line no-console
      console.log(ui.map((stack, index) => {
        stack.color = index % 2 === 0 ? ui[index - 2].color : stack.color
        return stack
      }))
    })

    return { isInteractive: true, darkMode, listStacks, listStacksTags }
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
              textColour: null,
              outlineColour: !this.darkMode ? '#ecf4fe' : 'rgba(0, 29, 66, 1) ',
              reverse: false,
              depth: 1,
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
   display: flex;
   width: 90%;
   justify-content: space-around;
   ul {
     display: none;
   }
   canva {
     margin-top: -5rem;
   }
 }
</style>
