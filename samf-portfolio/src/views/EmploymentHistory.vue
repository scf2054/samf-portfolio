<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import * as DB from "../assets/db/db";
import router from '@/router';
import type { KeyWord } from '../assets/db/interfaces';
import Projects from './Projects.vue';

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

    const expHasProjects = (expIndex: number): boolean => {
      let bool = false;
      for (let project of DB.PROJECTS) {
        if (project.company == expIndex) {
          bool = true;
          break;
        }
      }
      return bool;
    }

    onMounted(() => {
      autoScroll(expClickedIndex);
    });

    return {
      experiences: DB.EXPERIENCES,
      projects: DB.PROJECTS,
      expClickedIndex,
      clickProject,
      wordIsKeyWord,
      clickKeyWord,
      expHasProjects
    }
  }
})
</script>
<template>
  <div class="main-page experiences-main-page">
    <div class="column">
      <div class="panel" v-for="(exp, exp_index) of experiences" :id="`exp-${exp_index}`"
        :style="{ 'border-color': exp_index == expClickedIndex ? '#c2e2ec' : 'white' }">
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
            <span v-for="word of exp.description.split(' ')" @click="clickKeyWord(word, exp.keywords)"
              :class="{ 'keyword': exp.keywords && wordIsKeyWord(word, exp.keywords) }">
              {{ word + " " }}
            </span>
          </div>
          <div class="projects-holder column" v-if="expHasProjects(exp_index)">
            <h3>Projects:</h3>
            <span class="project-holder" @click="clickProject(project_index)"
              v-for="(exp_project, project_index) of projects">
              <span class="project" v-if="exp_project.company == exp_index">- {{ exp_project.name }}</span>
            </span>
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

        .projects-holder {
          margin-top: 15px;
          width: max-content;
          font-size: 1.4em;

          .project-holder {
            .project {
              text-decoration: underline;
            }
          }

          .project-holder:hover {
            cursor: pointer;
            color: #43637091;
            transition: 0.2s;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 707px) {
  .experiences-main-page {
    .column {
      .panel {
        .header {
          flex-direction: column;
          align-items: flex-start;

          .title {
            height: initial;
            width: 100%;

            .title-text {
              width: 100%;
              text-wrap: wrap;
            }

            .logo {
              margin-bottom: 15px;
              width: 100%;
              height: auto;
            }
          }
        }

        .subheader {
          flex-direction: column;

          :is(h3) {
            margin: 0 0 6px 0;
          }
        }
      }
    }
  }
}
</style>