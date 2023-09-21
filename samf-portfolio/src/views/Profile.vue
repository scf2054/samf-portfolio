<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import { COURSES } from "../assets/db/db";

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
    const skills: Ref<string[]> = ref([
      "Javascript", "Typescript", "Version Control", "Git", "Angular", "Vue", "Java", "Python", "npm", "SQL", "Sequelize", "Node.js", "C"
    ]);

    return {
      links,
      skills,
      COURSES
    }
  }
})
</script>

<template>
  <div class="main-page">
    <div class="row">
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
            <span class="skill" v-for="(skill, index) of skills" :style="{'font-weight': index < 5 ? 700 : 500}">{{ skill }}</span>
          </div>
        </div>
        <div class="panel classes-panel">
          <h2>Classes:</h2>

        </div>
        <div class="panel experience-panel">
          <h2>Experience:</h2>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  margin-right: 15px;
  .panel {
    width: 100%;
    margin-bottom: 15px;
  }
}
.col-1 {
  width: 400px;
}

.col-2 {
  width: 650px;
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

.personal-panel {
  font-size: 1.2rem;
  font-weight: 600 !important;
  margin-bottom: 15px;

  .row {
    justify-content: space-between;
  }

  span {
    white-space: nowrap;
    text-align: right;
  }
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

.school {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .tiger-img {
    width: 40px;
    margin-left: 5px;
  }
}

.light-color-value {
  font-weight: 700;
  color: #7caec3;
}

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

.skills-panel {
  .skills-holder {
    display: flex;
    flex-wrap: wrap;

    .skill {
      font-size: 20px;
      color: #7caec3;
      margin-right: 20px;
    }
  }
}

h2 {
  margin-bottom: 20px;
}
</style>