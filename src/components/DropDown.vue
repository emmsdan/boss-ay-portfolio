<template>
  <div>
    <div
      class="dropdown"
      :class="open ? 'is-active' : ''"
      @click="open = true"
      @mouseleave="open = false"
    >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          v-if="!noLabelButton"
        >
          <span>{{ label }}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
        <div v-else>{{ label }}</div>
      </div>
      <div class="dropdown-menu" role="menu" style="margin-top: -5px">
        <div class="dropdown-content">
          <template v-for="item in items">
            <div
              :key="item.text"
              class="dropdown-item"
              :class="item.isActive"
              @click="onSelectItem(item)"
            >
              <div v-if="noAction">
                {{ item.text }}
              </div>
              <a :href="item.url" v-else-if="item.external">
                {{ item.text }}
              </a>
              <router-link v-else :to="item.url"> {{ item.text }} </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DropDown',
  props: {
    label: {
      type: String,
      default: 'Dropdown'
    },
    noLabelButton: {
      type: Boolean,
      default: false
    },
    noAction: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default () {
        return [
          {
            text: 'No item',
            url: 'om'
          }
        ]
      }
    }
  },
  data: () => {
    return {
      open: false,
      dropdownItem: null
    }
  },
  computed: {
    items: {
      // getter
      get: function () {
        return this.dropdownItem || this.options
      },
      // setter
      set: function (newValue) {
        this.dropdownItem = this.options.map((option) => {
          if (option.text === newValue.text) {
            return { ...option, ...newValue }
          }
          return {
            ...option,
            isActive: false
          }
        })
      }
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    toggleActive (active) {
      this.active = active
    },
    onSelectItem (item) {
      this.items = {
        ...item,
        isActive: 'is-active'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.dropdown {
  @extend .dropdown;
  z-index: 4;
}
</style>
