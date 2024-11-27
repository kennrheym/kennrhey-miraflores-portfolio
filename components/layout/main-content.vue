<script setup lang="ts">
import Carrousel from '../ui/custom/carrousel/carrousel.vue';

const activeCardIndex = ref(0)
const cardTitle =  ref("Work Experience")
const dataCount = ref(4)

interface ICardData {
    title: String,
    description: String,
    company: String,
    date: String,
    tech: String
}

const cardData: Ref<Array<ICardData>> = ref([
    {
        title: "Full-stack Developer",
        company: "Daelibs Workforce Guidance (Australia - remote)",
        date: "(Nov. 2022 - Oct. 2024)",
        description: "Designed and implemented front and backend features/pages for IoT Web App",
        tech: "VueJS, JQuery, Django and PostgreSQL"
    },
    {
        title: "Full-stack Developer",
        company: "Acamp via Miller Development",
        date: "",
        description: "",
        tech: "VueJS, JQuery, Django and PostgreSQL"
    },
    {
        title: "Full-stack Developer",
        company: "Pharmaceutical Product Development",
        date: "",
        description: "",
        tech: "VueJS, JQuery, Django and PostgreSQL"
    },
])
</script>

<template>
    <div id="main-content-container">
        <div style="margin-left: 6px;">
            <div style="font-size: 48px;">
                <div>Hi, my</div>
                <div>name is <span style="color: #ace5cb">Kennrhey</span></div>
            </div>
            <div style="margin-top: 22px;" >
                <div style="font-size: 20px;">
                    I'm a full-stack web developer
                </div>
                <div style="font-size: 13px; margin-top: 5px;">
                    <div>
                        And I'm really passionate with...
                    </div>
                    <div>
                        Creating front-end components, and implementing business logic
                    </div>   
                </div>
            </div>
        </div>
        <div style="margin-left: 100px;">
            <carrousel v-model:active-card-index="activeCardIndex" v-model:card-title="cardTitle" v-model:data-count="dataCount">
                <template #card>
                    <div class="carrousel-card">
                        <div> {{ cardData[activeCardIndex].title }} </div>
                        <div> {{ cardData[activeCardIndex].company }} </div>
                        <div> {{ cardData[activeCardIndex].date }} </div>
                        <!-- <div style="margin-top: 20px; font-weight: 400;"> 
                            <div> {{ cardData[activeCardIndex].description }} </div>
                            <div style="margin-top: 5px; font-weight: 400;"> Tech used: {{ `${cardData[activeCardIndex].tech}` }}</div>
                        </div> -->
                    </div>
                </template>
            </carrousel>
        </div>
    </div>

</template>

<style lang="scss">
    #main-content-container {
        @include main.flex--all-centered;
        display: flex;
        flex-direction: row;
    }

    .carrousel-card {
        @include main.flex--all-centered;
        padding-inline: 20px;
        text-align: center;
        flex-direction: column;
        border-radius: 10px;
        height: 200px;
        width: 400px;
        background-color: #c3f1dc;
        opacity: 1;
        font-size: 14px;
        & * {
            color: #545459;
            // font-weight: 600;
        }
    }

</style>