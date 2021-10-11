<template>
  <div>
    <iframe
      :src="url"
      width="100%"
      height="700px"
      style="border: none"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'PDFViewer',
  props: {
    url: String,
    header: Boolean
  },

  mounted () {}
}
</script>
