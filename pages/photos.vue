<template>
  <div id="photos">
    <div class="photo-container" v-for="photo in photos" :key="photo.fields.title">
        <img v-img:group :src="photo.fields.file.url + '?w=800&h=800'" class="photo">
    </div>
  </div>
</template>

<script>
import {createClient} from '@/plugins/contentful'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return Promise.all([
      client.getAssets({
        order: '-sys.createdAt'
      })
    ]).then(([response]) => {
      return {
        photos: response.items
      }
    }).catch(console.error)
  }
}
</script>

<style scoped>
#photos {
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
.photo-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 25vh;
}
.photo {
    min-height: 100%;
    max-height: auto;
    min-width: auto;
    max-width: 100%;
}
</style>
