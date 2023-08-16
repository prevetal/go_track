<template>
    <div class="filter">
        <div class="status">
            <button class="btn" :class="{ active: activeStatus == 1 }" @click.prevent="activeStatus = 1">
                {{ $t('message.filter_status_all') }} <span>1240</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 2 }" @click.prevent="activeStatus = 2">
                <div class="circle red"></div>
                {{ $t('message.filter_status_urgently') }} <span>240</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 3 }" @click.prevent="activeStatus = 3">
                <div class="circle orange"></div>
                {{ $t('message.filter_status_soon') }} <span>129</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 4 }" @click.prevent="activeStatus = 4">
                <div class="circle green"></div>
                {{ $t('message.filter_status_no_need') }} <span>628</span>
            </button>
        </div>


        <div class="selects">
            <div class="field" ref="target">
                <div class="current" @click.prevent="showCategoryDropdown = !showCategoryDropdown">
                    <span v-if="!selectedCategories.length">{{ $t('message.filter_category_placeholder') }}</span>
                    <span v-else>{{ selectedCategories[0] }}</span>
                    <span v-if="selectedCategories.length > 1">+{{ selectedCategories.length - 1 }}</span>

                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown" v-show="showCategoryDropdown">
                    <button class="all_btn" @click.prevent="toggleCategory(['Одежда', 'Обувь', 'Сумки', 'Вибраторы', 'Футболки', 'Куртки', 'Кофты', 'Носки'])">
                        {{ $t('message.btn_select_all') }}
                    </button>

                    <div class="list">
                        <div>
                            <div class="checkbox" @click.prevent="toggleCategory('Одежда')" :class="{ selected: selectedCategories.includes('Одежда') }">
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>Одежда</div>
                            </div>

                            <div class="sub" v-show="selectedCategories.includes('Одежда')">
                                <div>
                                    <div class="checkbox" @click.prevent="toggleCategory('Футболки')" :class="{ selected: selectedCategories.includes('Футболки') }">
                                        <div class="check">
                                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                        </div>

                                        <div>Футболки</div>
                                    </div>
                                </div>

                                <div>
                                    <div class="checkbox" @click.prevent="toggleCategory('Куртки')" :class="{ selected: selectedCategories.includes('Куртки') }">
                                        <div class="check">
                                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                        </div>

                                        <div>Куртки</div>
                                    </div>
                                </div>

                                <div>
                                    <div class="checkbox" @click.prevent="toggleCategory('Кофты')" :class="{ selected: selectedCategories.includes('Кофты') }">
                                        <div class="check">
                                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                        </div>

                                        <div>Кофты</div>
                                    </div>
                                </div>

                                <div>
                                    <div class="checkbox" @click.prevent="toggleCategory('Носки')" :class="{ selected: selectedCategories.includes('Носки') }">
                                        <div class="check">
                                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                        </div>

                                        <div>Носки</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="checkbox" @click.prevent="toggleCategory('Обувь')" :class="{ selected: selectedCategories.includes('Обувь') }">
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>Обувь</div>
                            </div>
                        </div>

                        <div>
                            <div class="checkbox" @click.prevent="toggleCategory('Сумки')" :class="{ selected: selectedCategories.includes('Сумки') }">
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>Сумки</div>
                            </div>
                        </div>

                        <div>
                            <div class="checkbox" @click.prevent="toggleCategory('Вибраторы')" :class="{ selected: selectedCategories.includes('Вибраторы') }">
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>Вибраторы</div>
                            </div>
                        </div>
                    </div>

                    <button class="reset_btn" @click.prevent="selectedCategories.length = 0">
                        {{ $t('message.btn_reset') }}
                    </button>
                </div>
            </div>

            <div class="field" ref="target2">
                <div class="current" @click.prevent="showBrandDropdown = !showBrandDropdown">
                    <span v-if="!selectedBrands.length">{{ $t('message.filter_brand_placeholder') }}</span>
                    <span v-else>{{ selectedBrands.toString() }}</span>

                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown" v-show="showBrandDropdown">
                    <div class="list">
                        <div class="item" @click.prevent="toggleBrand('ТВОЁ')" :class="{ selected: selectedBrands.includes('ТВОЁ') }">
                            <span>ТВОЁ</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleBrand('Белорусский зайчик')" :class="{ selected: selectedBrands.includes('Белорусский зайчик') }">
                            <span>Белорусский зайчик</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleBrand('Zara')" :class="{ selected: selectedBrands.includes('Zara') }">
                            <span>Zara</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleBrand('Оренбургский трикотаж')" :class="{ selected: selectedBrands.includes('Оренбургский трикотаж') }">
                            <span>Оренбургский трикотаж</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleBrand('Счастливая семья')" :class="{ selected: selectedBrands.includes('Счастливая семья') }">
                            <span>Счастливая семья</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleBrand('Наш ответ Парижу')" :class="{ selected: selectedBrands.includes('Наш ответ Парижу') }">
                            <span>Наш ответ Парижу</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field" ref="target3">
                <div class="current" @click.prevent="showABCDropdown = !showABCDropdown">
                    <span v-if="!selectedABCs.length">{{ $t('message.filter_abc_placeholder') }}</span>
                    <span v-else>{{ selectedABCs.toString() }}</span>

                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown" v-show="showABCDropdown">
                    <div class="list">
                        <div class="item" @click.prevent="toggleABC('A')" :class="{ selected: selectedABCs.includes('A') }">
                            <span>A</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleABC('B')" :class="{ selected: selectedABCs.includes('B') }">
                            <span>B</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleABC('C')" :class="{ selected: selectedABCs.includes('C') }">
                            <span>C</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="field" ref="target4">
                <div class="current" @click.prevent="showDeliveryDropdown = !showDeliveryDropdown">
                    <span v-if="!selectedDeliverys.length">{{ $t('message.filter_supplies_placeholder') }}</span>
                    <span v-else>{{ selectedDeliverys.toString() }}</span>

                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown" v-show="showDeliveryDropdown">
                    <div class="list">
                        <div class="item" @click.prevent="toggleDelivery('Все')" :class="{ selected: selectedDeliverys.includes('Все') }">
                            <span>Все</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleDelivery('В поставке')" :class="{ selected: selectedDeliverys.includes('В поставке') }">
                            <span>В поставке</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleDelivery('Не в поставке')" :class="{ selected: selectedDeliverys.includes('Не в поставке') }">
                            <span>Не в поставке</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'

    const activeStatus = ref(1),
        showCategoryDropdown = ref(false),
        showBrandDropdown = ref(false),
        showABCDropdown = ref(false),
        showDeliveryDropdown = ref(false),
        target = ref(null),
        target2 = ref(null),
        target3 = ref(null),
        target4 = ref(null),
        selectedCategories = ref([]),
        selectedBrands = ref([]),
        selectedABCs = ref([]),
        selectedDeliverys = ref([])


    // Toggle category
    function toggleCategory(name) {
        if(typeof name == 'object') {
            // Select all
            selectedCategories.value = name
        } else {
            // Toggle single
            let index = selectedCategories.value.indexOf(name)

            selectedCategories.value.includes(name)
                ? selectedCategories.value.splice(index, 1)
                : selectedCategories.value.push(name)
        }
    }


    // Toggle brand
    function toggleBrand(name) {
        // Toggle single
        let index = selectedBrands.value.indexOf(name)

        selectedBrands.value.includes(name)
            ? selectedBrands.value.splice(index, 1)
            : selectedBrands.value.push(name)
    }


    // Toggle ABC
    function toggleABC(name) {
        // Toggle single
        let index = selectedABCs.value.indexOf(name)

        selectedABCs.value.includes(name)
            ? selectedABCs.value.splice(index, 1)
            : selectedABCs.value.push(name)
    }


    // Toggle delivery
    function toggleDelivery(name) {
        // Toggle single
        let index = selectedDeliverys.value.indexOf(name)

        selectedDeliverys.value.includes(name)
            ? selectedDeliverys.value.splice(index, 1)
            : selectedDeliverys.value.push(name)
    }


    // Сlick element outside
    onClickOutside(target, event => showCategoryDropdown.value = false)
    onClickOutside(target2, event => showBrandDropdown.value = false)
    onClickOutside(target3, event => showABCDropdown.value = false)
    onClickOutside(target4, event => showDeliveryDropdown.value = false)
</script>


<style scoped>
    .filter > * + *
    {
        margin-top: 20px;
    }



    .status
    {
        display: flex;

        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .status > *
    {
        margin-bottom: 10px;
        margin-left: 10px;
    }


    .status .btn
    {
        display: flex;

        padding: 7px 9px 8px;

        transition: .2s linear;

        border: 1px solid transparent;
        border-radius: 4px;
        background: #f6f7f8;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .status .btn .circle
    {
        width: 14px;
        height: 14px;
        margin-right: 8px;

        transition: border-color .2s linear;

        border: 1px solid transparent;
        border-radius: 50%;
    }

    .status .btn .circle.red
    {
        background: #c75d57;
    }

    .status .btn .circle.orange
    {
        background: #e69f47;
    }

    .status .btn .circle.green
    {
        background: #49aa4f;
    }


    .status .btn span
    {
        margin-left: 4px;
    }


    .status .btn:hover
    {
        border-color: #49aa4f;
    }

    .status .btn.active
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }


    .status .btn.active .circle.green
    {
        border-color: #fff;
    }



    .selects
    {
        display: flex;

        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .selects > *
    {
        margin-bottom: 10px;
        margin-left: 10px;
    }


    .selects .field
    {
        position: relative;
    }


    .selects .current
    {
        display: flex;

        width: 160px;
        padding: 7px 15px 8px;

        cursor: pointer;
        transition: border-color .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 100px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }


    .selects .current span
    {
        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .selects .current span + span
    {
        margin-left: 4px;
    }


    .selects .current .arr
    {
        display: block;

        width: 14px;
        height: 8px;
        margin-left: auto;
    }


    .selects .current:hover,
    .selects .current.open
    {
        border-color: #49aa4f;
    }


    .selects .dropdown
    {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;

        width: 220px;
        margin-top: 5px;
        padding: 5px 0;

        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 10px 0 rgba(20, 20, 20, .10);
    }


    .selects .all_btn
    {
        position: relative;

        display: block;

        width: 100%;
        margin-bottom: 5%;
        padding: 10px 15px;

        text-align: left;

        background: #f1f8f1;
    }


    .selects .reset_btn
    {
        color: #49aa4f;

        display: block;

        margin-top: 20px;
        margin-right: 15px;
        margin-bottom: 10px;
        margin-left: auto;
    }


    .selects .list
    {
        overflow: auto;

        max-height: 224px;

        scrollbar-color: #49aa4f #dbe0e4;
        scrollbar-width: thin;
    }

    .selects .list::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;

        border-radius: 5px;
        background-color: #dbe0e4;
    }

    .selects .list::-webkit-scrollbar-thumb
    {
        border-radius: 5px;
        background-color: var(--text_color);
    }


    .selects .list .sub
    {
        padding-left: 50px;
    }


    .selects .list .checkbox
    {
        position: relative;

        display: flex;

        padding: 5px 15px;

        cursor: pointer;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .selects .list .checkbox .arr
    {
        display: block;

        width: 12px;
        height: 7px;
        margin-right: 8px;

        transition: transform .2s linear;
        transform: rotate(-90deg);
    }


    .selects .list .checkbox .check
    {
        color: #fff;

        display: flex;

        width: 18px;
        height: 18px;
        margin-right: 10px;

        transition: .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .selects .list .checkbox .check svg
    {
        display: block;

        width: 10px;
        height: 8px;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .selects .list .checkbox .check + *
    {
        width: calc(100% - 28px);
    }

    .selects .list .checkbox .arr + .check + *
    {
        width: calc(100% - 50px);
    }


    .selects .list .checkbox.selected .arr
    {
        transform: rotate(0);
    }


    .selects .list .checkbox:hover .check
    {
        border-color: #49aa4f;
    }


    .selects .list .checkbox.selected .check
    {
        border-color: #49aa4f;
        background: #49aa4f;
    }

    .selects .list .checkbox.selected .check svg
    {
        opacity: 1;
    }


    .selects .list .item
    {
        position: relative;

        padding: 10px 40px 10px 15px;

        cursor: pointer;
        transition: background .2s linear;
    }

    .selects .list .item .icon
    {
        position: absolute;
        top: 0;
        right: 15px;
        bottom: 0;

        display: block;

        width: 15px;
        height: 12px;
        margin: auto;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .selects .list .item:hover,
    .selects .list .item.selected
    {
        background: #f1f8f1;
    }

    .selects .list .item.selected .icon
    {
        opacity: 1;
    }

</style>