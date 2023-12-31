<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as DB from "../assets/db/db";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'projects',
  setup() {
    const route = useRoute();
    const query = route.query;
    const projectClickedIndex = query.projectIndex as unknown as number;

    const autoScroll = (projectIndex: number): void => {
      if (projectIndex) {
        const element = document.getElementById(`project-${projectIndex}`);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(() => {
      autoScroll(projectClickedIndex);
    })

    return {
      projects: DB.PROJECTS,
      companies: DB.EXPERIENCES,
      projectClickedIndex
    }
  }
})
</script>
<template>
  <div class="main-page projects-main-page">
    <div class="column">
      <div class="panel" v-for="(project, project_index) of projects" :id="`project-${project_index}`"
        :style="{ 'border-color': project_index == projectClickedIndex ? '#c2e2ec' : 'white' }">
        <div class="header">
          <h2 class="title">
            <span class="title-text">
              {{ project.name }}
            </span>
          </h2>
          <img class="company-logo" :src="companies[project.company].logo">
        </div>
        <div class="subheader">
          <span style="margin-right: 20px">Tools:</span><span class="tool" v-for="tool of project.tools">{{ tool }}</span>
        </div>
        <div class="body">
          {{ project.description }}
          <div class="images">
            <h3>What I Worked On:</h3>
            <div class="image-holder" v-for="(image, image_index) of project.images"
              :class="{ 'wrap': image_index % 2 == 1, 'wrap-reverse': image_index % 2 == 0 }">
              <span class="caption" v-if="image_index % 2 == 1">{{ image.caption }}</span>
              <img class="image" :src="image.source">
              <span class="caption" v-if="image_index % 2 == 0">{{ image.caption }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style posted>
.projects-main-page {
  padding: 1rem 2rem 1rem 2rem;

  .column {
    width: 100%;

    .panel {
      width: 100%;
      margin-bottom: 30px;
      border-width: 3px;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          display: flex;
          align-items: baseline;
          width: 85%;

          .title-text {
            width: 75%;
            overflow-x: hidden;
            text-overflow: ellipsis;
            text-wrap: nowrap;
            display: block;
            color: var(--color-2-dark)
          }
        }

        .company-logo {
          height: 60px;
        }
      }

      .subheader {
        display: flex;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 15px;
        flex-wrap: wrap;

        .tool {
          margin-right: 20px;
          color: gray;
        }
      }

      .body {
        margin-top: 10px;
        font-weight: 600;
        color: #436370;

        .images {
          margin-top: 15px;

          .image-holder {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;

            .image {
              width: 75%;
              border-style: solid;
              border-width: 3px;
              border-color: #bed3e7;
              border-radius: 2px;
              box-shadow: 0px 0px 20px 0px #0000001c;
            }

            .caption {
              width: 22%;
              margin-top: 15px;
              font-size: 0.9em;
              color: gray;
            }
          }
        }
      }
    }
  }

  .wrap {
    flex-wrap: wrap;

    .caption {
      text-align: left !important;
    }
  }

  .wrap-reverse {
    flex-wrap: wrap-reverse;

    .caption {
      text-align: right !important;
    }
  }
}

@media screen and (max-width: 814px) {
  .projects-main-page {
    .column {
      .panel {
        .header {
          flex-direction: column;
          align-items: flex-start;
        }

        .body {
          .images {
            .image-holder {
              flex-direction: column;

              .image {
                width: 100%;
              }

              .caption {
                width: 70%;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .projects-main-page {
    .column {
      .panel {
        .header {
          .company-logo {
            height: auto;
            width: 100%;
          }
        }
      }
    }
  }
}</style>