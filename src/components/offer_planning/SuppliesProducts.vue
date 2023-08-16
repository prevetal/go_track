<template>
    <div class="products">
        <div class="titles">
            <div class="col_info">
                {{ $t('message.products_titles_col_products') }}
            </div>

            <div class="col_sku_apt">
                {{ $t('message.products_titles_col_sku_apt') }}
            </div>

            <div class="col_abc">
                {{ $t('message.products_titles_col_abc') }}
            </div>

            <div class="col_remainder">
                {{ $t('message.products_titles_col_remainder') }}
            </div>

            <div class="col_sales_speed">
                {{ $t('message.products_titles_col_sales_speed') }}
            </div>

            <div class="col_will_end">
                {{ $t('message.products_titles_col_will_end') }}
            </div>

            <div class="col_lost_profit">
                {{ $t('message.products_titles_col_lost_profit') }}
            </div>

            <div class="col_count">
                {{ $t('message.products_titles_col_count') }}
            </div>

            <div class="col_remove"></div>
        </div>


        <div class="product">
            <div class="col_info">
                <div class="thumb">
                    <img src="@/assets/product_thumb.jpg" alt="">
                </div>

                <div>
                    <div class="name">Рубашка мужская хлопок...</div>

                    <div class="feature">Размер: М</div>
                    <div class="feature">Бренд: Zara</div>
                </div>
            </div>

            <div class="col_sku_apt">
                <div>SKU: <span>AKSFUO1093</span></div>
                <div>Арт: <u>104912093</u></div>
            </div>

            <div class="col_abc">
                <span class="green">A</span>
            </div>

            <div class="col_remainder">
                <div>58 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>3,6 шт/день</div>
                <div class="grey">172 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Через 4 дня</div>
                <div class="grey">27 мая 2023</div>
            </div>

            <div class="col_lost_profit">
                <div>17 640 р</div>
                <div class="grey">на день поставки</div>

                <div class="tooltip">
                    <div>Розничная цена: 2 450 р.</div>
                    <div>Средняя скорость продаж в день: 3,6 шт.</div>
                    <div>Средняя выручка в день: 8 820 р.</div>
                    <div>Отсутствие товара на день поставки: 2 дня</div>
                    <div>Потерянная выручка за 2 дня: 17 640 р.</div>

                    <div class="green">По возможности поставьте товар 27 мая</div>
                </div>
            </div>

            <div class="col_count">
                <input type="number" name="" value="0" class="input">
                <div class="grey">товар не требует поставки</div>
            </div>

            <div class="col_remove">
                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>
        </div>


        <div class="product">
            <div class="col_info">
                <div class="thumb">
                    <img src="@/assets/product_thumb.jpg" alt="">
                </div>

                <div>
                    <div class="name">Рубашка мужская хлопок...</div>

                    <div class="feature">Размер: М</div>
                    <div class="feature">Бренд: Zara</div>
                </div>
            </div>

            <div class="col_sku_apt">
                <div>SKU: <span>AKSFUO1093</span></div>
                <div>Арт: <u>104912093</u></div>
            </div>

            <div class="col_abc">
                <span class="green">A</span>
            </div>

            <div class="col_remainder">
                <div>58 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>3,6 шт/день</div>
                <div class="grey">172 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Через 4 дня</div>
                <div class="grey">27 мая 2023</div>
            </div>

            <div class="col_lost_profit">
                <div>17 640 р</div>
                <div class="grey">на день поставки</div>

                <div class="tooltip">
                    <div>Розничная цена: 2 450 р.</div>
                    <div>Средняя скорость продаж в день: 3,6 шт.</div>
                    <div>Средняя выручка в день: 8 820 р.</div>
                    <div>Отсутствие товара на день поставки: 2 дня</div>
                    <div>Потерянная выручка за 2 дня: 17 640 р.</div>

                    <div class="green">По возможности поставьте товар 27 мая</div>
                </div>
            </div>

            <div class="col_count">
                <input type="number" name="" value="0" class="input">
                <div class="grey">товар не требует поставки</div>
            </div>

            <div class="col_remove">
                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>
        </div>


        <div class="product">
            <div class="col_info">
                <div class="thumb">
                    <img src="@/assets/product_thumb.jpg" alt="">
                </div>

                <div>
                    <div class="name">Рубашка мужская хлопок...</div>

                    <div class="feature">Размер: М</div>
                    <div class="feature">Бренд: Zara</div>
                </div>
            </div>

            <div class="col_sku_apt">
                <div>SKU: <span>AKSFUO1093</span></div>
                <div>Арт: <u>104912093</u></div>
            </div>

            <div class="col_abc">
                <span class="green">A</span>
            </div>

            <div class="col_remainder">
                <div>58 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>3,6 шт/день</div>
                <div class="grey">172 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Через 4 дня</div>
                <div class="grey">27 мая 2023</div>
            </div>

            <div class="col_lost_profit">
                <div>17 640 р</div>
                <div class="grey">на день поставки</div>

                <div class="tooltip">
                    <div>Розничная цена: 2 450 р.</div>
                    <div>Средняя скорость продаж в день: 3,6 шт.</div>
                    <div>Средняя выручка в день: 8 820 р.</div>
                    <div>Отсутствие товара на день поставки: 2 дня</div>
                    <div>Потерянная выручка за 2 дня: 17 640 р.</div>

                    <div class="green">По возможности поставьте товар 27 мая</div>
                </div>
            </div>

            <div class="col_count">
                <input type="number" name="" value="0" class="input">
                <div class="grey">товар не требует поставки</div>
            </div>

            <div class="col_remove">
                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>
        </div>


        <div class="product">
            <div class="col_info">
                <div class="thumb">
                    <img src="@/assets/product_thumb.jpg" alt="">
                </div>

                <div>
                    <div class="name">Рубашка мужская хлопок...</div>

                    <div class="feature">Размер: М</div>
                    <div class="feature">Бренд: Zara</div>
                </div>
            </div>

            <div class="col_sku_apt">
                <div>SKU: <span>AKSFUO1093</span></div>
                <div>Арт: <u>104912093</u></div>
            </div>

            <div class="col_abc">
                <span class="green">A</span>
            </div>

            <div class="col_remainder">
                <div>58 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>3,6 шт/день</div>
                <div class="grey">172 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Через 4 дня</div>
                <div class="grey">27 мая 2023</div>
            </div>

            <div class="col_lost_profit">
                <div>17 640 р</div>
                <div class="grey">на день поставки</div>

                <div class="tooltip">
                    <div>Розничная цена: 2 450 р.</div>
                    <div>Средняя скорость продаж в день: 3,6 шт.</div>
                    <div>Средняя выручка в день: 8 820 р.</div>
                    <div>Отсутствие товара на день поставки: 2 дня</div>
                    <div>Потерянная выручка за 2 дня: 17 640 р.</div>

                    <div class="green">По возможности поставьте товар 27 мая</div>
                </div>
            </div>

            <div class="col_count">
                <input type="number" name="" value="0" class="input">
                <div class="grey">товар не требует поставки</div>
            </div>

            <div class="col_remove">
                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>
        </div>


        <div class="product">
            <div class="col_info">
                <div class="thumb">
                    <img src="@/assets/product_thumb.jpg" alt="">
                </div>

                <div>
                    <div class="name">Рубашка мужская хлопок...</div>

                    <div class="feature">Размер: М</div>
                    <div class="feature">Бренд: Zara</div>
                </div>
            </div>

            <div class="col_sku_apt">
                <div>SKU: <span>AKSFUO1093</span></div>
                <div>Арт: <u>104912093</u></div>
            </div>

            <div class="col_abc">
                <span class="green">A</span>
            </div>

            <div class="col_remainder">
                <div>58 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>3,6 шт/день</div>
                <div class="grey">172 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Через 4 дня</div>
                <div class="grey">27 мая 2023</div>
            </div>

            <div class="col_lost_profit">
                <div>17 640 р</div>
                <div class="grey">на день поставки</div>

                <div class="tooltip">
                    <div>Розничная цена: 2 450 р.</div>
                    <div>Средняя скорость продаж в день: 3,6 шт.</div>
                    <div>Средняя выручка в день: 8 820 р.</div>
                    <div>Отсутствие товара на день поставки: 2 дня</div>
                    <div>Потерянная выручка за 2 дня: 17 640 р.</div>

                    <div class="green">По возможности поставьте товар 27 мая</div>
                </div>
            </div>

            <div class="col_count">
                <input type="number" name="" value="0" class="input">
                <div class="grey">товар не требует поставки</div>
            </div>

            <div class="col_remove">
                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>
        </div>


        <button class="all_btn">
            {{ $t('message.btn_all_delivery_products') }}
        </button>
    </div>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>


<style scoped>
    .titles
    {
        color: #808080;
        font-size: 10px;
        font-weight: 600;
        line-height: 22px;

        display: flex;

        padding: 10px 0;

        text-align: center;
        white-space: nowrap;
        letter-spacing: 1px;
        text-transform: uppercase;

        border-top: 1px solid #dbe0e4;
        border-bottom: 1px solid #dbe0e4;
        background: #f6f7f8;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .titles > *
    {
        padding-right: 19px;
        padding-left: 19px;
    }

    .titles > * + *
    {
        padding-left: 18px;

        border-left: 1px solid #dbe0e4;
    }



    .product
    {
        display: flex;

        padding: 20px 0;

        border-bottom: 1px solid #dbe0e4;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .product > *
    {
        position: relative;

        padding-right: 19px;
        padding-left: 19px;
    }


    .product .thumb
    {
        position: relative;

        overflow: hidden;

        width: 50px;
        height: 65px;

        border-radius: 4px;
        background: #ddd;
    }

    .product .thumb img
    {
        position: absolute;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        border-radius: 4px;

        object-fit: cover;
    }

    .product .col_info
    {
        display: flex;

        padding-left: 0;

        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .product .thumb + *
    {
        width: calc(100% - 65px);

        align-self: center;
    }


    .product .name
    {
        line-height: 130%;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .product .feature
    {
        color: #808080;

        margin-top: 5px;
    }


    .product .col_sku_apt > * + *
    {
        margin-top: 5px;
    }


    .product .col_abc span
    {
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;

        display: block;

        width: 30px;
        height: 30px;
        margin: auto;

        text-align: center;

        border-radius: 4px;
        background: #f6f7f8;
    }

    .product .col_abc span.green
    {
        color: #49aa4f;
    }

    .product .col_abc span.yellow
    {
        color: #e69f47;
    }

    .product .col_abc span.red
    {
        color: #c75d57;
    }


    .product .col_remainder
    {
        text-align: center;
    }

    .product .col_remainder .grey
    {
        color: #808080;

        margin-top: 5px;
    }


    .product .col_sales_speed
    {
        font-weight: 500;

        text-align: center;
    }

    .product .col_sales_speed .grey
    {
        color: #808080;
        font-weight: 400;

        margin-top: 5px;
    }


    .product .col_will_end
    {
        text-align: center;
    }

    .product .col_will_end .grey
    {
        color: #808080;

        margin-top: 5px;
    }


    .product .col_lost_profit
    {
        text-align: center;
    }

    .product .col_lost_profit .grey
    {
        color: #808080;

        margin-top: 5px;
    }


    .product .col_count
    {
        text-align: center;
    }


    .product .col_count .input
    {
        font-family: var(--font_family);
        font-size: var(--font_size);

        display: block;

        width: 60px;
        height: 33px;
        margin: 0 auto;

        text-align: center;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }


    .product .col_count .grey
    {
        color: #808080;

        margin-top: 5px;
    }


    .product .remove_btn
    {
        color: #808080;

        display: flex;

        width: 21px;
        height: 33px;
        margin: auto;

        transition: color .2s linear;

        align-self: center;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .product .remove_btn .icon
    {
        display: block;

        width: 21px;
        height: 21px;
    }

    .product .remove_btn:hover
    {
        color: #49aa4f;
    }


    .product .col_remove
    {
        padding: 0;
    }


    .product .tooltip
    {
        color: #fff;
        font-size: 12px;

        position: absolute;
        z-index: 3;
        top: 30px;
        left: 50%;

        display: none;

        width: 310px;
        margin-left: -155px;
        padding: 20px;

        text-align: left;

        background: #1e2c3a;
        box-shadow: 0 4px 10px rgba(30, 44, 58, .15);
    }

    .product .tooltip::before
    {
        position: absolute;
        right: 0;
        bottom: 100%;
        left: 0;

        display: block;

        width: 20px;
        height: 14px;
        margin: 0 auto;

        content: '';

        border-right: 10px solid transparent;
        border-bottom: 14px solid #1e2c3a;
        border-left: 10px solid transparent;
    }

    .product .tooltip > * + *
    {
        margin-top: 7px;
    }

    .product .tooltip .green
    {
        color: #49aa4f;
        font-weight: 600;

        margin-top: 15px;
    }

    .product > *:hover .tooltip
    {
        display: block;
    }



    .col_info
    {
        width: 100%;
    }

    .col_sku_apt
    {
        width: 164px;
        min-width: 164px;
    }

    .col_abc
    {
        width: 80px;
        min-width: 80px;
    }

    .col_remainder
    {
        width: 120px;
        min-width: 120px;
    }

    .col_sales_speed
    {
        width: 180px;
        min-width: 180px;
    }

    .col_will_end
    {
        width: 140px;
        min-width: 140px;
    }

    .col_lost_profit
    {
        width: 180px;
        min-width: 180px;
    }

    .col_count
    {
        width: 160px;
        min-width: 160px;
    }


    .col_remove
    {
        width: 40px;
        min-width: 40px;
    }



    .products .all_btn
    {
        color: #49aa4f;
        font-weight: 600;

        display: block;

        width: 100%;
        margin-top: -1px;
        padding: 13px 19px 14px;

        transition: background .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }

    .products .all_btn:hover
    {
        background: #F6F7F8;
    }

</style>