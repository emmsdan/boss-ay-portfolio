<template>
  <div id="resume">
    <Loader timeout="10" />
    <a :href="url" class="button is-info d-none">DOWNLOAD CV</a>
    <PDFViewer :url="url" />
    <a :href="url" class="button is-info">DOWNLOAD CV</a>
  </div>
</template>

<script>
import PDFViewer from '@/modules/PDFViewer/PDFViewer.vue'
import Loader from '@/components/TheLoader.vue'

export default {
  name: 'Resume',
  metaInfo: {
    title: 'My resume || Ayotunde Ayoola'
  },

  components: {
    PDFViewer,
    Loader
  },

  data () {
    return {
      url: process.env.BASE_URL + 'Ayotunde-AYOOLA-CV.pdf',
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
