<script lang="ts">
import { defineComponent } from 'vue';
import type { ProjectImage } from '@/assets/db/interfaces';

export default defineComponent({
  name: 'leadership-experience',
  setup() {
    const images: ProjectImage[] = [
      {
        source: "src/assets/images/projects/kevin_guest_house/Ceiling Tile With Pipes.png",
        caption: "Ceiling tiles were installed with cut out parts because of pipes going into ceiling."
      }, {
        source: "src/assets/images/projects/kevin_guest_house/New Flooring.png",
        caption: "Flooring installed with base floor poking out."
      }, {
        source: "src/assets/images/projects/kevin_guest_house/Walls Painted Around Fire Extinguisher.png",
        caption: "Walls painted around fire extinguisher as to not get in the way."
      }, {
        source: "src/assets/images/projects/kevin_guest_house/Walls Painted With Closet Door.png",
        caption: "Walls painted around cabinet door."
      }
    ];
    return {
      images
    }
  }
})
</script>
<template>
  <div class="main-page leadership-main-page">
    <div class="column">
      <div class="row top-row">
        <div class="panel" style="width: 65%; margin-right: 20px;">
          <h2>Eagle Scout Project</h2>
          <h3 style="color: gray">Refurbishing Laundry Room</h3>
          <div class="description">
            I planned out a project to refurbish a laundry room inside a "Ronald McDonald" house at Roswell Park called
            "Kevin Guest House". I filled out paperwork, presented the idea to both my Boy Scout troop as well as Roswell
            Park to get their approval to move forward and purchase equipment. I spoke with home-renovation stores about
            having floor tiles, ceiling tiles and paint donated. During rennovations, I led a group of younger scouts and
            adults with putting in new flooring, new ceiling tiles, and repainting the walls which took 2 days to
            complete. I have since gotten recognized from the building owners and won an award for my service to the
            hospital.
          </div>
        </div>
        <div class="panel column" style="width: 35%; justify-content: space-between;">
          <h2>May 2019 - October 2019</h2>
          <h3 style="color: gray">Roswell Park, Buffalo, NY</h3>
          <span>- Placed new floor tiles</span>
          <span>- Replaced ceiling tiles</span>
          <span>- Painted walls</span>
        </div>
      </div>
      <div class="panel image-panel">
        <div class="image-holder" v-for="(image, index) of images">
          <span class="caption" v-if="index % 2 == 1" style="text-align: right; margin-left: auto">{{ image.caption
          }}</span>
          <img class="image" :src="image.source">
          <span class="caption" v-if="index % 2 == 0" style="margin-right: auto">{{ image.caption }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style posted>
.leadership-main-page {
  .column {
    .panel {
      height: auto;

      .description {
        margin-top: 10px;
        font-weight: 600;
        font-size: 1em;
        color: var(--color-1-dark)
      }

      .image-holder {
        margin-bottom: 20px;
        display: flex;

        .image {
          width: 60%;
          border-style: solid;
          border-width: 3px;
          border-color: #bed3e7;
          border-radius: 2px;
          box-shadow: 0px 0px 20px 0px #0000001c;
        }

        .caption {
          width: 22%;
          margin: 15px;
          font-size: 0.9em;
          color: gray;
          font-weight: 700;
        }
      }
    }

    .image-panel {
      width: 100%;
      max-width: 800px;
      margin: 20px auto 0 auto;
    }
  }
}
</style>