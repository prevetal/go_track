<template>
    <div class="groups">
        <div class="row">
            <div class="group">
                <div class="name green">Группа A</div>

                <div class="percents green">80%</div>

                <div class="features">
                    <div>
                        <div class="label">Количество товара</div>
                        <div class="val">876 шт</div>
                    </div>

                    <div>
                        <div class="label">Продано</div>
                        <div class="val">10 136 шт</div>
                    </div>

                    <div>
                        <div class="label">Общая выручка</div>
                        <div class="val">8 354 000 р</div>
                    </div>

                    <div>
                        <div class="label">Общая прибыль</div>
                        <div class="val">3 243 000 р</div>
                    </div>
                </div>
            </div>

            <div class="group">
                <div class="name yellow">Группа B</div>

                <div class="percents yellow">15%</div>

                <div class="features">
                    <div>
                        <div class="label">Количество товара</div>
                        <div class="val">876 шт</div>
                    </div>

                    <div>
                        <div class="label">Продано</div>
                        <div class="val">10 136 шт</div>
                    </div>

                    <div>
                        <div class="label">Общая выручка</div>
                        <div class="val">8 354 000 р</div>
                    </div>

                    <div>
                        <div class="label">Общая прибыль</div>
                        <div class="val">3 243 000 р</div>
                    </div>
                </div>
            </div>

            <div class="group">
                <div class="name red">Группа C</div>

                <div class="percents red">5%</div>

                <div class="features">
                    <div>
                        <div class="label">Количество товара</div>
                        <div class="val">876 шт</div>
                    </div>

                    <div>
                        <div class="label">Продано</div>
                        <div class="val">10 136 шт</div>
                    </div>

                    <div>
                        <div class="label">Общая выручка</div>
                        <div class="val">8 354 000 р</div>
                    </div>

                    <div>
                        <div class="label">Общая прибыль</div>
                        <div class="val">3 243 000 р</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
    .groups
    {
        margin-bottom: 30px;
    }


    .groups .row
    {
        margin-bottom: -20px;
        margin-left: -20px;

        align-items: stretch;
        align-content: stretch;
    }

    .groups .row > *
    {
        width: calc(33.333% - 20px);
        margin-bottom: 20px;
        margin-left: 20px;
    }


    .groups .group
    {
        display: flex;

        padding: 30px;

        transition: box-shadow .2s linear;

        border-radius: 8px;
        background: #f6f7f8;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .groups .group .name
    {
        font-size: 24px;
        font-weight: 600;
    }

    .groups .group .name.green
    {
        color: #49aa4f;
    }

    .groups .group .name.yellow
    {
        color: #e69f47;
    }

    .groups .group .name.red
    {
        color: #c75d57;
    }


    .groups .group .percents
    {
        font-size: 24px;
        font-weight: 600;

        margin-left: auto;
    }

    .groups .group .percents.green
    {
        color: #49aa4f;
    }

    .groups .group .percents.yellow
    {
        color: #e69f47;
    }

    .groups .group .percents.red
    {
        color: #c75d57;
    }


    .groups .group .features
    {
        width: 100%;
        margin-top: 20px;
    }


    .groups .group .features > *
    {
        display: flex;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .groups .group .features > * + *
    {
        margin-top: 10px;
    }


    .groups .group .features .label
    {
        color: #808080;
    }


    .groups .group:hover,
    .groups .group.active
    {
        box-shadow: inset 0 0 0 1px #49aa4f;
    }

</style>