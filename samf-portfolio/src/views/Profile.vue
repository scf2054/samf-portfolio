<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import * as DB from "../assets/db/db";
import router from '@/router';

interface Link {
  image: string,
  link: string,
  overwrite?: string
}

export default defineComponent({
  name: 'profile',
  setup() {
    const links: Ref<Link[]> = ref([
      {
        image: 'src/assets/images/Gmail.png',
        link: 'mailto:frosts1125@gmail.com',
        overwrite: 'frosts1125@gmail.com'
      }, {
        image: 'src/assets/images/GitHub.png',
        link: 'https://github.com/scf2054'
      }, {
        image: 'src/assets/images/LinkedIn.png',
        link: 'https://www.linkedin.com/in/samuel-frost-b681531b4/',
        overwrite: 'https://www.linkedin.com/sam-frost'
      }
    ]);
    const clickCourse = (courseIndex: number) => {
      router.push({ name: 'Education', query: { courseIndex: courseIndex } });
    }
    const clickExperience = (expIndex: number) => {
      router.push({ name: "Employment History", query: { expIndex: expIndex } });
    }

    return {
      links,
      skills: DB.SKILLS,
      courses: DB.COURSES,
      experiences: DB.EXPERIENCES,
      clickCourse,
      clickExperience
    }
  }
})
</script>

<template>
  <div class="main-page">
    <div class="row main-page-row">
      <div class="column col-1">
        <div class="panel personal-panel">
          <div class="column">
            <img class="profile-img" src="src/assets/images/me_square.png">
            <span class="name">Samuel (Sam) C. Frost <span class="pronouns">(He/Him)</span></span>
            <span class="school">Rochester Institute of Technology <img class="tiger-img"
                src="src/assets/images/rit_tiger.png"></span>
            <div class="row">
              <span class="major">B.S. Software Engineering</span>
              <span class="year light-color-value">4th Year</span>
            </div>
            <div class="row">
              <span class="expected-graduation-title">Expected Graduation:</span>
              <span class="expected-graduation light-color-value">May 2025</span>
            </div>
            <div class="row">
              <span class="gpa-title">GPA:</span>
              <span class="gpa light-color-value">3.5</span>
            </div>
            <div class="row">
              <span class="available-title">Available:</span>
              <span class="available light-color-value">January - August 2024</span>
            </div>
          </div>
        </div>
        <div class="panel links-panel">
          <h2>Links</h2>
          <div class="row link" v-for="link of links">
            <img :src="link.image" class="link-img">
            <a :href="link.link" class="link-hyperlink">{{ link.overwrite || link.link }}</a>
          </div>
        </div>
      </div>
      <div class="column col-2">
        <div class="panel skills-panel">
          <h2>Skills:</h2>
          <div class="skills-holder">
            <span class="skill" v-for="(skill, index) of skills" :style="{ 'font-weight': index < 5 ? 700 : 500 }">{{
              skill
            }}</span>
          </div>
        </div>
        <div class="panel courses-panel">
          <h2>Courses Taken:</h2>
          <div class="blocks-holder">
            <div class="block" v-for="(course, index) of courses" @click="clickCourse(index)">
              <div class="header">
                <h4 class="title">
                  <span class="course-title title-text">{{ course.fullName }}</span>
                  <span class="course-code">{{ course.code }}</span>
                </h4>
                <div class="in-progress" v-if="course.in_progress">*In Progress</div>
              </div>
              <div class="body">
                {{ course.brief }}
              </div>
            </div>
          </div>
        </div>
        <div class="panel experience-panel">
          <h2>Experience:</h2>
          <div class="blocks-holder">
            <div class="block" v-for="(exp, index) of experiences" @click="clickExperience(index)">
              <div class="header">
                <h4 class="title">
                  <span class="exp-title title-text" style="width: 50%">{{ exp.title }}</span>
                  <span class="exp-company">{{ exp.company }}</span>
                </h4>
                <div class="in-progress" v-if="!exp.end_date">*In Progress</div>
              </div>
              <div class="body">
                {{ exp.brief }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page-row {
  height: 100%;
  justify-content: space-around;
}

.col-1 {
  width: 400px;
}

.col-2 {
  width: 650px;
}

.column {
  height: 100%;
  justify-content: space-between;

  .panel {
    width: 100%;

    .blocks-holder {
      max-height: 250px;
      overflow: hidden;
      overflow-y: scroll;

      .block {
        background-color: white;
        width: 100%;
        margin-bottom: 15px;
        padding: 0.5rem;
        border-style: solid;
        border-color: #e7e7e7;
        border-radius: 2px;
        box-shadow: 0px 0px 10px 0px #0000001c;
        transition: 0.2s;

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
          }

          .in-progress {
            color: var(--color-2-dark);
            font-weight: 700;
            font-size: 0.7rem;
          }
        }

        .body {
          margin-top: 10px;
          font-weight: 600;
          color: #436370;
        }
      }

      .block:hover {
        cursor: pointer;
        background-color: #f1f1f1;
        transition: 0.2s;
      }
    }
  }
}

.personal-panel {
  font-size: 1.2rem;
  font-weight: 600 !important;

  .column {
    .school {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .tiger-img {
        width: 40px;
        margin-left: 5px;
      }
    }

    .profile-img {
      width: 250px;
      align-self: center;
      border-style: solid;
      border-width: 3px;
      border-color: #b0d7f3;
      border-radius: 50%;
      margin-bottom: 50px;
    }

    .row {
      justify-content: space-between;

      .light-color-value {
        font-weight: 700;
        color: #7caec3;
      }
    }

    span {
      white-space: nowrap;
      text-align: right;
    }

    .name {
      font-weight: 800;

      .pronouns {
        color: var(--color-1-light);
        font-size: 1rem;
        font-weight: 500;
        margin-left: 5px;
      }
    }
  }
}

.links-panel {
  .row {
    margin-bottom: 5px;
  }

  .link {
    margin-bottom: 15px;
    justify-content: space-between;
  }

  .link-img {
    width: 30px;
    height: initial;
  }

  .link-hyperlink {
    font-weight: 700;
  }
}

.skills-panel {
  background-color: rgb(245, 251, 253);

  .skills-holder {
    display: flex;
    flex-wrap: wrap;

    .skill {
      font-size: 20px;
      color: #50717b;
      margin-right: 20px;
    }
  }
}

.courses-panel {
  background-color: rgb(245, 251, 253);

  .course-title {
    width: 75%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    display: block;
  }

  .course-code {
    color: gray;
    font-size: 0.7rem;
    margin-left: 15px;
  }
}

.experience-panel {
  background-color: rgb(245, 251, 253);

  .blocks-holder {
    .block {
      .header {
        .title {
          .title-text {
            width: 50%
          }

          .exp-company {
            color: gray;
            margin-left: 15px;
          }
        }
      }
    }
  }
}

h2 {
  margin-bottom: 20px;
}
</style>