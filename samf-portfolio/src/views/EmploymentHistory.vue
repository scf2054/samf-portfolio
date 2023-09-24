<script lang="ts">
import { defineComponent, onMounted, toDisplayString } from 'vue';
import { useRoute, type RouteParamsRaw } from 'vue-router';
import * as DB from "../assets/db/db";
import router from '@/router';
import type { KeyWord } from '../assets/db/interfaces';

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

    const clickProject = (projectIndex: number): void => {
      router.push({ name: 'Projects', query: { projectIndex: projectIndex } });
    }

    const wordIsKeyWord = (word: string, keywords: KeyWord[]): boolean => {
      let bool: boolean = false;
      for (let keyword of keywords) {
        if (keyword.word == word) {
          bool = true;
          break;
        }
      }
      return bool;
    }

    const findKeyWord = (word: string, keywords: KeyWord[]): KeyWord => {
      let found: KeyWord = { word: '', route_name: '', params: {} };
      for (let keyword of keywords) {
        if (keyword.word == word) {
          found = keyword;
          break;
        }
      }
      return found;
    }

    const clickKeyWord = (word: string, keywords: KeyWord[] | undefined): void => {
      if (keywords && wordIsKeyWord(word, keywords)) {
        const keyword = findKeyWord(word, keywords);
        router.push({ name: keyword.route_name, query: keyword.params });
      }
    }

    onMounted(() => {
      autoScroll(expClickedIndex);
    });

    return {
      experiences: DB.EXPERIENCES,
      expClickedIndex,
      clickProject,
      wordIsKeyWord,
      clickKeyWord
    }
  }
})
</script>
<template>
  <div class="main-page experiences-main-page">
    <div class="column">
      <div class="panel" v-for="(exp, index) of experiences" :id="`exp-${index}`"
        :style="{ 'border-color': index == expClickedIndex ? '#c2e2ec' : 'white' }">
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
          <h3 class="duration">{{ exp.start_date.toDateString() }} - {{ exp.end_date ? exp.end_date.toDateString() :
            "Present" }}</h3>
        </div>
        <div class="body">
          <div class="description">
            <span v-for="word of exp.description.split(' ')" @click="clickKeyWord(word, exp.keywords)" :class="{'keyword': exp.keywords && wordIsKeyWord(word, exp.keywords)}">
              {{ word + " " }}
            </span>
          </div>
          <div class="projects-holder">
            <span class="project" @click="clickProject(index)" v-for="(project, index) of exp.projects">- {{ project
            }}</span>
          </div>
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
      border-style: solid;
      border-width: 3px;
      border-radius: 2px;

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

        .description {
          .keyword {
            text-decoration: underline;
            cursor: pointer;
          }

          .keyword:hover {
            transition: 0.1s;
            color: #43637088;
          }
        }
      }
    }
  }
}
</style>