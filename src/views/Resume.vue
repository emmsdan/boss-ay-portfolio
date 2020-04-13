<template>
  <div id="resume">
    <Loader timeout="5"/>
      <a :href="url" class="button is-primary">DOWNLOAD CV</a>
    <PDFViewer
      v-bind="{url}"
      @document-rendered="onDocumentRendered"
      @document-errored="onDocumentErrored"
      />
      <a :href="url" class="button is-primary">DOWNLOAD CV</a>
  </div>
</template>

<script>
import PDFViewer from '@/modules/PDFViewer/PDFViewer.vue'
import Loader from '@/components/TheLoader.vue'
export default {
  name: 'Resume',

  components: {
    PDFViewer, Loader
  },

  data () {
    return {
      url: process.env.BASE_URL + 'emmauel-daniel-resume.pdf',
      documentError: undefined,
      enableUploader: false
    }
  },

  methods: {
    urlUpdated (url) {
      this.documentError = undefined
      this.url = url
    },
    onDocumentErrored (e) {
      this.documentError = e.text
    }
  }

}
</script>

<style>
#resume {
  max-width: 98%;
  margin: auto;
  margin-bottom: 20px;
}
#resume a {
  margin: 20px 10px;
}
</style>
