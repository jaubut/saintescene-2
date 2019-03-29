<template>
  <div class="calendrier">
    <template v-for="item in itemsOrdered" v-show="item.fiels.Mois ===! ''" v-if="item.fields.Mois === thisMonth">
      <div :key="item.id" class="annonces">
        <p class="titre"><span class="jour">{{ item.fields.Jour }}</span>{{ item.fields.Titre }}</p>
        <p class="description">{{ item.fields.Description }}</p>
				<p class="description-month">{{ item.fields.Mois }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'calendrier',
  props: ['Month'],
  data() {
    return {
      items: [],
      thisMonth: this.Month
    }
  },
  computed: {
    itemsOrdered () {
      return this.items.sort((a, b) => new Date(a.fields.Date) - new Date(b.fields.Date))
    }
  },
  methods: {
    loadItems: function() {
      // Init variables
      var self = this
      var app_id = "appkbIaWleiR7gYtU";
      var app_key = "keyYpAgTFas9oMW80"; // Read Only Key! :D
      this.items = []
      axios.get(
        "https://api.airtable.com/v0/" + app_id + "/Annonces", {
          headers: {
            Authorization: "Bearer " + app_key
          }
        }
      ).then(function(response) {
        self.items = response.data.records
      }).catch(function(error) {
        console.log(error)
      })
    }
  },
  mounted () {
    this.loadItems()
  }
}
</script>

<style>
.calendrier {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  margin: 100px 50px;
}
.calendrier h3 {
  font-size: 3rem;
  padding-bottom: 25px;
}
.calendrier .annonces {
  display: flex;
	flex-flow: column nowrap;
	height: 35vh;
	width: 40vw;
  padding-left: 50px; 
}
.calendrier .titre {
  font-family: 'Barlow', sans-serif;
  font-size: 1.5rem;
  color: black;
  padding: 15px 0;
}
.calendrier .description {
  font-size: 0.95rem;
  padding-left: 15px;
  max-width: 850px;
}
.calendrier .description-month {
  font-size: 1rem;
  padding-left: 15px;
  max-width: 850px;
	font-weight: 800;
}
.calendrier .jour {
  font-family: 'Barlow', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  padding-right: 15px;
}
</style>

