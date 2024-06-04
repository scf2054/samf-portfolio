<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import * as DB from '../assets/db/db';

export default defineComponent({
  name: 'education',
  setup() {
    const route = useRoute();
    const query = route.query;
    const courseClickedIndex = query.courseIndex as unknown as number;

    const autoScroll = (courseIndex: number): void => {
      if (courseIndex) {
        const element = document.getElementById(`course-${courseIndex}`);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onMounted(() => {
      autoScroll(courseClickedIndex);
    });

    return {
      courses: DB.COURSES,
      courseClickedIndex
    }
  }
})
</script>
<template>
  <div class="main-page education-main-page">
    <div class="column">
      <div class="panel" v-for="(course, index) of courses" :id="`course-${index}`"
        :style="{ 'border-color': index == courseClickedIndex ? '#c2e2ec' : 'white' }">
        <div class="header">
          <h2 class="title">
            <span class="title-text">
              {{ course.fullName }}
            </span>
            <h5 class="course-code">
              {{ course.code }}
            </h5>
          </h2>
          <h5 class="in-progress" v-if="course.in_progress">*In Progress</h5>
        </div>
        <div class="body">
          <h3 class="semester">{{ course.semester }}</h3>
          <div class="description-holder">
            <div class="description" :style="{ 'width': course.img ? '60%' : '100%' }">{{ course.description }}</div>
            <img class="course-img" v-if="course.img" :src="course.img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.education-main-page {
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
        align-items: baseline;

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
          }

          .course-code {
            color: gray;
            margin-left: 15px;
          }
        }

        .in-progress {
          color: var(--color-2-dark);
          font-weight: 700;
        }
      }

      .body {
        margin-top: 10px;
        font-weight: 600;
        color: #436370;

        .semester {
          margin-bottom: 5px;
        }

        .description-holder {
          display: flex;
          justify-content: space-between;

          .course-img {
            width: 38%;
            height: min-content;
            border-style: solid;
            border-width: 2px;
            border-color: rgb(196, 224, 250);
            box-shadow: 0px 0px 20px 0px #0000001c;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1163px) {
  .education-main-page {
    .column {
      .panel {
        .body {
          .description-holder {
            flex-direction: column;

            .description {
              width: 100% !important;
              margin-bottom: 15px;
            }

            .course-img {
              width: 50%;
              min-width: 275px;
            }
          }
        }
      }
    }
  }
}
</style>