<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script setup lang="ts">
    import { onMounted, ref, watch} from 'vue'
    import type { Ref } from 'vue' 
    // import axios from 'axios'
    // import SelectOptions from 'src/components/common/select-options.vue'

    interface IHeadings {
        label: string,
        field: string,
        disableSort?: boolean,
        customSlotName?: string,
        class?: string
    }

    interface IHeadingGroups {
        label: string,
        colspan?: string,
        customSlotName?: string,
        class?: string
    }
    
    interface IOptionObject {
        value: string,
        text: string,
    }

    const props = defineProps({
        headings: {
            type: Array<IHeadings>,
            default: [],
            required: true
        },
        headingGroups:{
            type: Array<IHeadingGroups>,
            default: [],
            required: false
        },
        url: {
            type: String,
            default: "",
            required: false
        },
        customFilterData: {
            type: Object,
            default() {},
            required: false
        },
        showPaginatorSelect: {
            type: Boolean,
            default: false,
            required: false
        }
    })

    const searchDelay = 600
    const searchTerm = ref(null)
    const orderBy = ref("")
    const loaded = ref(false)
    const lastSearchUpdate = ref(0)
    const pendingSearchTimeout: any = ref(null)
    const headingState: any = ref([])
    const maxButtons = ref(5)
    const page = ref(1)
    const totalPages = ref(1)
    const startPage = ref(1)
    const endPage = ref(1)
    const entriesStart = ref(1)
    const entriesEnd = ref(1)
    const entriesTotal = ref(1)
    const emit = defineEmits(['response'])
     
    const selectPaginatorOptions: Ref<Array<IOptionObject>> = ref([
        {
            value: "10",
            text: "10"
        },
        {
            value: "20",
            text: "20"
        },
        {
            value: "50",
            text: "50"                  
        },
        {
            value: "100",
            text: "100"
        }
    ])
    const numberOfRowsPerPage = ref(selectPaginatorOptions.value[0].value)

    watch (searchTerm, ()=>{
        // If we updated search term recently, delay this
        const nowTime = Date.now();
        const diff = nowTime - lastSearchUpdate.value;
        page.value = 1
        if (diff - searchDelay < 0) {

            if (pendingSearchTimeout.value !== null) {
                clearTimeout(pendingSearchTimeout.value)
            }

            const delay = searchDelay - diff;
            lastSearchUpdate.value = Date.now();
            pendingSearchTimeout.value = setTimeout(refreshTable, delay);

        } else {
            // Send update immediately
            lastSearchUpdate.value = Date.now();
            pendingSearchTimeout.value = null;
            refreshTable();
        }
    })

    watch(page, ()=>{
        if (pendingSearchTimeout.value === null) {
            refreshTable();
        }
    })

    watch(numberOfRowsPerPage, ()=>{
        page.value =  1
        // if (pendingSearchTimeout.value === null) {
        refreshTable();
        // }
    })

    watch(orderBy, ()=>{
        refreshTable();
    })

    const updatePaginator = () => {
        if(totalPages.value <= maxButtons.value){
            startPage.value = 1
            endPage.value = totalPages.value
        }else{
            const MAX_PAGE_BEFORE_CURRENT = 2
            const MAX_PAGE_AFTER_CURRENT = 2

            if(page.value <= MAX_PAGE_BEFORE_CURRENT + 1){
                startPage.value = 1
                endPage.value = maxButtons.value
            }else if(MAX_PAGE_AFTER_CURRENT + page.value >= totalPages.value){
                startPage.value = totalPages.value - maxButtons.value + 1
                endPage.value = totalPages.value
            }else{
                startPage.value = page.value - MAX_PAGE_BEFORE_CURRENT
                endPage.value = page.value + MAX_PAGE_AFTER_CURRENT
            }
        }
    }

    const refreshTable = () => {
        loaded.value = false

        const data = {
            params:{
                q: searchTerm.value,
                o: orderBy.value,
                page: page.value,
                json: true,
                rowsPerPage: props.showPaginatorSelect ? parseInt(numberOfRowsPerPage.value) : null,
                ...props.customFilterData
            }
        }
        axios
            .get(props.url, data)
            .then(response=>{
                entriesStart.value = response.data.entries_start
                entriesEnd.value = response.data.entries_end
                entriesTotal.value = response.data.entries_total

                totalPages.value = response.data.numPages
                updatePaginator()
                pendingSearchTimeout.value = null;

                emit("response", response);
            })
            .finally(()=>{
                loaded.value = true
            })
        }

    const initHeadingState = () => {

        headingState.value = props.headings

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        headingState.value.forEach((heading: any)=>{
            heading.state = 0
        })
    }

    const transitionOrderByField = (field:string) =>{

        if(orderBy.value === ""){
            orderBy.value = field
            return
        }

        const splitString = orderBy.value.split("-")

        if(splitString.length > 1){ // is descending

            if(splitString[1] !== field){ // not the same field
                orderBy.value = field
            }else{
            	orderBy.value = ''
            }

        }else{ // either ascending or no order by

            if (orderBy.value === field)
                orderBy.value = `-${field}`
            else {
                orderBy.value = field
            }

        }
    }

    const getOrderByState = (index:number) =>{

        const field = props.headings[index].field

        if(orderBy.value === null){
            return 0
        }

        const splitString = orderBy.value.split("-")

        if(splitString.length > 1){ // is descending
            
            
            if(splitString[1] === field){ // not the same field
                return 2 // descending order
            }else{
                return 0 // not ordered by this field
            }


        }

        if(field === orderBy.value){
            return 1 //ascending order
        }else{
            return 0 // not filtered by this field
        }
    }

    const resetPageNumber = () => {
        page.value = 1
    }

    const order = (index: number) => {
        if (props.headings[index].disableSort) return

        const field = props.headings[index].field
        if(!field){
            return
        }
        transitionOrderByField(field)
    }
    onMounted(()=>{
        refreshTable()
        initHeadingState()
    })

    defineExpose({
        refreshTable,
        order,
        getOrderByState,
        resetPageNumber
    })

</script>

<template>
    <slot name="custom-filter">
        <div>
            <div class="input-title" >
                <slot name="search-title">
                    Search
                </slot>
            </div>
            <div style="display: flex; flex-direction: row; width: 350px">
                <input class="search-input" type="text" placeholder="" v-model="searchTerm">
                <div class="search-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M1.68455 14.8152L4.90601 11.5942" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.09068 13.3342C5.81863 13.3342 3.1661 10.6817 3.1661 7.40967C3.1661 4.13762 5.81863 1.48511 9.09068 1.48511C12.3627 1.48511 15.0153 4.13762 15.0153 7.40967C15.0153 10.6817 12.3627 13.3342 9.09068 13.3342Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </slot>
    <table id="paginated-table" class="common-table" style="margin-top:30px; margin-bottom:32px; background-color: transparent" cellpadding="0" cellspacing="0">
        <thead>
            <!-- <tr v-if="props.headingGroups.length > 0">
                <th v-for="heading in props.headingGroups" :key="heading.label" :colspan="heading.colspan">
                <slot :name="heading.customSlotName">
                    {{ heading.label }}
                </slot>
                </th>
            </tr> -->
          <slot name="thead">
            <tr style="background-color: #F8F8F8;">
                <th v-for="heading, index in props.headings" :key="heading.label" @click="order(index)">

                    <slot :name="heading.customSlotName">
                        {{ heading.label }}
                        <span v-if="heading.disableSort != true" style="vertical-align:middle;margin-left:12px">
                            <svg width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: fit-content;">
                                <path d="M4 0.5L8 7.5L-3.0598e-07 7.5L4 0.5Z" :fill="getOrderByState(index) === 1 ? '#5A5A5A' : '#C4C4C4'"/>
                                <path d="M4 18.5L1.70857e-07 11.5L8 11.5L4 18.5Z" :fill="getOrderByState(index) === 2 ? '#5A5A5A' : '#C4C4C4'"/>
                            </svg>
                        </span>
                    </slot>

                </th>
            </tr>
          </slot>
        </thead>
        <tbody>
            <slot v-if="loaded" name="tbody">
                <tr>
                    <td :colspan="headings.length">No entries found</td>
                </tr>
            </slot>
            <template v-else>
                <tr>
                    <td :colspan="headings.length">Loading...</td>
                </tr>
            </template>
        </tbody>
    </table>
    <div style="display: flex; justify-content: space-between;">
        <div style="display: flex;"> 
            <div v-if="entriesTotal" style="display:inline; line-height:32px; font-size: 12px">
                Showing {{entriesStart}} to {{entriesEnd}} of {{entriesTotal}} entries
            </div>
            <div v-if="props.showPaginatorSelect && entriesTotal" style="display: flex; align-items: center; margin-left: 20px; font-size: 14px; line-height: 32px;">
                Show
                <div style="width: 100px;">
                    <SelectOptions
                        :options="selectPaginatorOptions"
                        v-model:selected-option="numberOfRowsPerPage"
                        style="margin: auto 8px; min-width: 80px !important;"
                    >
                    </SelectOptions>
                </div>

                entries
            </div>
        </div>
        <div class="paginator-container" v-if="totalPages >= 1">
            <div class="paginator">

                <div class="flex--all-centered"
                    :class="page == 1 ? 'paginator-nav-inactive':'paginator-nav'"
                    @click="page > 1 ? page -= 1 : page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none" style="padding-right: 10px; line-height: 32px;">
                        <path d="M6 0.5L1 6L6 11.5" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Previous
                </div>

                <div
                    v-for="(_, index) in (endPage - startPage) + 1"
                    :key="index"
                    class="flex--all-centered"
                    :class="page == index + startPage ? 'paginator-page-inactive':'paginator-page'"
                    @click="page = index + startPage"
                    >{{ index+startPage }}</div>

                <div class="flex--all-centered"
                    :class="page == totalPages ? 'paginator-nav-inactive':'paginator-nav'"
                    @click="page < totalPages ? page += 1 : page">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none" style="padding-left: 10px; line-height: 32px;">
                        <path d="M1 11.5L6 6L1 0.5" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
#paginated-table {
    width: 100%;
    & tbody tr {
        cursor: pointer;
        height: 49px;
        &:hover td {
            background-color: #F8F8F8;
        }
    }
    & tbody tr td {
        padding-inline: 15px;
        background-color: #FFF;
        line-height: 49px;
        & div {
            white-space: nowrap;
        }
        border-bottom: 1px solid #F6F6F6;
    }
    & tbody tr:last-child {
        & td:first-child {
            border-bottom-left-radius: 6px;
        }
        & td:last-child {
            border-bottom-right-radius: 6px;
        }
    }
    & th, & td , & {
        border: none;
        border-collapse: collapse;
    }
}
</style>

<style scoped>

.flex--all-centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
.paginator-nav-inactive {
    color: #C4C4C4;
    text-align: center;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-inline: 8px;
    pointer-events: none;

}

.paginator-nav {
    color: #363636;
    text-align: center;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-inline: 8px;
    & svg path {
        stroke: #363636
    }
    cursor: pointer;
    &:hover {
        color: #7F67BE;
        & svg path {
            stroke: #7F67BE
        }
    }
}

.paginator {
    display: flex;
    align-items: center;
}

.paginator-page-inactive {
    height: 32px;
    width: 32px;
    border-radius: 6px;
    margin-inline: 4px;
    pointer-events: none;
    background-color: #7F67BE;
    color: #FFF
}

.paginator-page {
    height: 32px;
    width: 32px;
    border-radius: 6px;
    background-color: #F0F0F0;
    margin-inline: 4px;
    cursor: pointer;
    &:hover {
        background-color: #7F67BE;
        color: #FFF
    }

}

.search-icon-container {
    height: 34px;
    width: 41px;
    border-radius: 6px;
    background-color: #B8B2CC;
    margin-top: 8px;
    margin-left: -41px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.input-title {
    color: #363636;
    /* H3-Heading 3 */
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.search-input {
    border: 1px solid #C4C4C4;
    height: 32px;
    width: 216px;
    border-radius: 6px;
    padding-inline: 15px 50px;
    margin-top: 8px;

    &:focus-visible {
        outline: none;
    }
}

table.common-table {
    font-size: 14px;
    background-color: #FFF;
    & > tbody > tr > td  {
        padding-inline: 15px !important;
    }
    & thead tr th {
        height: 49px; 
        padding-inline: 15px; 
        white-space: nowrap; 
        background-color: #F8F8F8; 
        text-align: left;
    }

    & thead tr {
        & th:first-child {
            border-top-left-radius: 6px;
        }
        & th:last-child {
            border-top-right-radius: 6px;
        }
    }
}

</style>