<script setup lang="ts">
import Carrousel from '../ui/custom/carrousel/carrousel.vue';
import WorkExperienceCardModal from './main-content/work-experience-card-modal.vue';

const activeCardIndex = ref(0)
const cardTitle =  ref("Work Experience")
const isCardModalVisible = ref(false)

export interface ICardData {
    title: String,
    description: String,
    company: String,
    date: String,
    tech: Array<String>
    contribution: Array<String>
}

const cardData: Ref<Array<ICardData>> = ref([
    {
        title: "Full-stack Web Developer",
        company: "Daelibs Workforce Guidance (Australia - remote)",
        date: "(Nov. 2022 - Oct. 2024)",
        description: "Designed and implemented front and backend features/pages for IoT Web App",
        contribution: [
            "CSV and PDF Exports using ReportLab",
            "Implemented Maps Javascript API for Features",
            "Transition JQuery pages to Vue 3 + Typescript",
            "Created global components using Vue 3 + Typescript",
            "APIs for mobile app",
            "Wrote unit test and coverage for methods and APIs",
            "Wrote documentations for pages/features and components",
            "Created website for new clients",
            "Designed and implemented backend and database (procedures, triggers, etc.) for old/new features",
        ],
        tech: ["JQuery, Vue 3, Typescript", "Django, Python", "PostgreSQL","ReportLab", "Maps for Javascript", "Figma", "Jira", "Gitlab"]
    },
    {
        title: "Full-stack Mobile Developer",
        company: "Acamp via Miller Development (Sweden - remote)",
        date: "(Jul. 2021 - Nov. 2022)",
        description: "Implemented features for Acamp and Stellplatz Android Apps",
        contribution: [
            "Custom advertisement feature",
            "Used firebase to monitor engagement metrics",
            "Implemented map features for kotlin-android app (Acamp)",
            "Fixes/transition features for transition mobile app (Stellplatz)",
            "App Review/Rating features",
            "Backend fixes for stellplatz app"
        ],
        tech: ["Kotlin", "PHP", "PostgreSQL", "Firebase", "Jira", "Figma", "Github"],
    },
    {
        title: "Junior Web Developer",
        company: "Pharmaceutical Product Development (US - remote)",
        date: "(Jan. 2020 - Jul. 2021)",
        description: "Developed features for internal web app",
        tech: ["JQuery, ReactJS", "PHP, Laravel", "MySQL", "Docker", "Github"],
        contribution: [
            "Database management, outliers fixes",
            "APIs for internal app",
            "Email editor for internal app",
            "Designed and implemented backend and database schema (procedures, triggers, etc.) for features"
        ],
    },
])

const carrouselDataCount = ref(cardData.value.length)

const openCardModal = () => {
    isCardModalVisible.value = true
}

const selectedWorkExperienceData = computed( () => {
    return cardData.value[activeCardIndex.value]
})

</script>

<template>
    <div id="main-content-container">
        <div style="padding-bottom: 10px;">
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
        <div>
            <carrousel v-model:active-card-index="activeCardIndex" v-model:card-title="cardTitle" v-model:data-count="carrouselDataCount">
                <template #card>
                    <div class="carrousel-card clickable">
                        <div> {{ cardData[activeCardIndex].title }} </div>
                        <div> {{ cardData[activeCardIndex].company }} </div>
                        <div> {{ cardData[activeCardIndex].date }} </div>
                        <div class="details-icon" style="margin-top: 14px;" @click="openCardModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="7" y1="9" x2="17" y2="9"/>
                                <line x1="7" y1="13" x2="17" y2="13"/>
                                <line x1="7" y1="17" x2="17" y2="17"/>
                            </svg>
                        </div>
                    </div>
                </template>
            </carrousel>
            <work-experience-card-modal v-model:is-card-modal-visible="isCardModalVisible" v-model:card-data="selectedWorkExperienceData">
            </work-experience-card-modal>
        </div>

    </div>

</template>

<style lang="scss">

    @media only screen and (max-width: 1100px) {
        #main-content-container {
            flex-direction: column !important;
            & > div {
                margin-bottom: 50px
            }
        }
    }

    .details-icon {
        @include main.flex--all-centered;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background-color: aliceblue;
        transition: background-color 0.3s;
        &:hover {
            background-color: main.$app--color--light-blue;
            & svg {
                stroke: #FFF;
                transition: stroke 0.4s;
            }
        }
    }

    #main-content-container {
        @include main.flex--all-centered;
        display: flex;
        flex-direction: row;
        width: 1100px;
        justify-content: space-between
    }

    .carrousel-card {
        @include main.flex--all-centered;
        padding-inline: 20px;
        text-align: center;
        flex-direction: column;
        border-radius: 10px;
        height: 200px;
        width: 400px;
        background-color: main.$app--color--light-green;
        opacity: 1;
        font-size: 14px;
        font-weight: 600;
        & * {
            color: #545459;
        }
    }

</style>