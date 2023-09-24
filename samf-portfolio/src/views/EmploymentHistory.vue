<script lang="ts">
import { defineComponent, onMounted, toDisplayString } from 'vue';
import { useRoute } from 'vue-router';
import * as DB from "../assets/db/db";

export default defineComponent({
  name: 'employment-history',
  setup() {
    const route = useRoute();
    const query = route.query;
    const expClickedIndex = query.expIndex as unknown as number;

    const autoScroll = (expIndex: number): void => {
      if (expIndex) {
        const element = document.getElementById(`exp-${expIndex}`);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(() => {
      autoScroll(expClickedIndex);
    });

    return {
      experiences: DB.EXPERIENCES,
      expClickedIndex
    }
  }
})
</script>
<template>
  <div class="main-page experiences-main-page">
    <div class="column">
      <div class="panel" v-for="(exp, index) of experiences" :id="`exp-${index}`"
        :style="{ 'background-color': index == expClickedIndex ? '#F5FBFD' : 'white' }">
        <div class="header">
          <h2 class="title">
            <span class="title-text">
              {{ exp.title }}
            </span>
          </h2>
          <img class="logo" :src="exp.logo" alt="">
        </div>
        <div class="subheader">
          <h3 class="website"><a :href="exp.website">{{ exp.website }}</a></h3>
          <h3 class="location">{{ exp.location }}</h3>
          <h3 class="duration">{{ exp.start_date.toDateString() }} - {{ exp.end_date ? exp.end_date.toDateString() : "Present" }}</h3>
        </div>
        <div class="body">
          <div class="description">{{ exp.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style posted>
.experiences-main-page {
  padding: 1rem 2rem 1rem 2rem;

  .column {
    width: 100%;

    .panel {
      width: 100%;
      margin-bottom: 30px;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          display: flex;
          align-items: center;
          width: 85%;
          height: 75px;

          .title-text {
            max-width: 75%;
            overflow-x: hidden;
            text-overflow: ellipsis;
            text-wrap: nowrap;
            display: block;
          }
        }

        .logo {
          height: 60px;
        }
      }

      .subheader {
        display: flex;

        .website {
          width: 265px;
          margin-right: 15px;
        }

        .location {
          width: 135px;
          margin-right: 15px;
          color: gray;
        }
      }

      .body {
        margin-top: 10px;
        font-weight: 600;
        color: #436370;
      }
    }
  }
}
</style>