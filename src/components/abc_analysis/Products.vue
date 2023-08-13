<template>
    <div class="products">
        <div class="titles">
            <div class="col_count">
                {{ $t('message.products_titles_col_products_count', { count: 1240 }) }}
            </div>

            <div class="col_sku_apt">
                {{ $t('message.products_titles_col_sku_apt') }}
            </div>

            <div class="col_abc">
                {{ $t('message.products_titles_col_abc') }}
            </div>

            <div class="col_sales">
                {{ $t('message.products_titles_col_sales') }}
            </div>

            <div class="col_revenue">
                {{ $t('message.products_titles_col_revenue') }}
            </div>

            <div class="col_profit">
                {{ $t('message.products_titles_col_profit') }}
            </div>

            <div class="col_margin">
                {{ $t('message.products_titles_col_margin') }}
            </div>

            <div class="col_ransom">
                {{ $t('message.products_titles_col_ransom') }}
            </div>

            <div class="col_return">
                {{ $t('message.products_titles_col_return') }}
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

            <div class="col_status">
                {{ $t('message.products_titles_col_status') }}
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
                <span class="yellow">B</span>
            </div>

            <div class="col_sales">
                <div>2 538 шт</div>
            </div>

            <div class="col_revenue">
                <div>22 765 000 р</div>
            </div>

            <div class="col_profit">
                <div>12 765 000 р</div>
            </div>

            <div class="col_margin">
                <div>49,78%</div>
            </div>

            <div class="col_ransom">
                <div>75%</div>
            </div>

            <div class="col_return">
                <div>0,96%</div>
            </div>

            <div class="col_remainder">
                <div>568 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>1,4 шт/день</div>
                <div class="grey">44 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Закончился</div>
                <div class="grey">с 20.05.2023</div>
            </div>

            <div class="col_lost_profit">
                <div>12 034 р</div>
                <div class="grey">за 8 дней</div>
            </div>

            <div class="col_status">
                <div class="status">
                    <div class="circle red"></div>
                    <span>Срочно поставить</span>
                </div>

                <a href="/" class="in_delivery_link">
                    <span>В поставке</span>
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_link"></use></svg>
                </a>

                <button class="remove_btn" @click.prevent="emitter.emit('openRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>

                <div class="delivery_date">Поставка от 22 марта 2023</div>
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

            <div class="col_sales">
                <div>2 538 шт</div>
            </div>

            <div class="col_revenue">
                <div>22 765 000 р</div>
            </div>

            <div class="col_profit">
                <div>12 765 000 р</div>
            </div>

            <div class="col_margin">
                <div>49,78%</div>
            </div>

            <div class="col_ransom">
                <div>75%</div>
            </div>

            <div class="col_return">
                <div>0,96%</div>
            </div>

            <div class="col_remainder">
                <div>568 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>1,4 шт/день</div>
                <div class="grey">44 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Закончился</div>
                <div class="grey">с 20.05.2023</div>
            </div>

            <div class="col_lost_profit">
                <div>12 034 р</div>
                <div class="grey">за 8 дней</div>
            </div>

            <div class="col_status">
                <div class="status">
                    <div class="circle orange"></div>
                    <span>Скоро поставить</span>
                </div>

                <button class="add_in_delivery_btn" @click.prevent="emitter.emit('openAddingToDeliveryModal')">
                    {{ $t('message.btn_add_to_delivery') }}
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
                <span class="red">C</span>
            </div>

            <div class="col_sales">
                <div>2 538 шт</div>
            </div>

            <div class="col_revenue">
                <div>22 765 000 р</div>
            </div>

            <div class="col_profit">
                <div>12 765 000 р</div>
            </div>

            <div class="col_margin">
                <div>49,78%</div>
            </div>

            <div class="col_ransom">
                <div>75%</div>
            </div>

            <div class="col_return">
                <div>0,96%</div>
            </div>

            <div class="col_remainder">
                <div>568 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>1,4 шт/день</div>
                <div class="grey">44 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Закончился</div>
                <div class="grey">с 20.05.2023</div>
            </div>

            <div class="col_lost_profit">
                <div>12 034 р</div>
                <div class="grey">за 8 дней</div>
            </div>

            <div class="col_status">
                <div class="status">
                    <div class="circle green"></div>
                    <span>Не требуется</span>
                </div>

                <button class="add_in_delivery_btn" @click.prevent="emitter.emit('openAddingToDeliveryModal')">
                    {{ $t('message.btn_add_to_delivery') }}
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

            <div class="col_sales">
                <div>2 538 шт</div>
            </div>

            <div class="col_revenue">
                <div>22 765 000 р</div>
            </div>

            <div class="col_profit">
                <div>12 765 000 р</div>
            </div>

            <div class="col_margin">
                <div>49,78%</div>
            </div>

            <div class="col_ransom">
                <div>75%</div>
            </div>

            <div class="col_return">
                <div>0,96%</div>
            </div>

            <div class="col_remainder">
                <div>568 шт</div>
            </div>

            <div class="col_sales_speed">
                <div>1,4 шт/день</div>
                <div class="grey">44 шт/месяц</div>
            </div>

            <div class="col_will_end">
                <div>Закончился</div>
                <div class="grey">с 20.05.2023</div>
            </div>

            <div class="col_lost_profit">
                <div>12 034 р</div>
                <div class="grey">за 8 дней</div>
            </div>

            <div class="col_status">
                <div class="status">
                    <div class="circle orange"></div>
                    <span>Скоро поставить</span>
                </div>

                <button class="add_in_delivery_btn" @click.prevent="emitter.emit('openAddingToDeliveryModal')">
                    {{ $t('message.btn_add_to_delivery') }}
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>


<style scoped>
    .products
    {
        overflow: auto;

        width: 100%;
        padding-bottom: 8px;
    }


    .titles
    {
        color: #808080;
        font-size: 10px;
        font-weight: 600;
        line-height: 22px;

        display: flex;

        width: 1940px;
        padding: 10px 0;

        text-align: center;
        white-space: nowrap;
        letter-spacing: 1px;
        text-transform: uppercase;

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

        width: 1940px;
        padding: 20px 0;

        border-bottom: 1px solid #dbe0e4;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .product > *
    {
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


    .product .col_sales,
    .product .col_revenue,
    .product .col_profit,
    .product .col_margin,
    .product .col_ransom,
    .product .col_return
    {
        line-height: 30px;

        text-align: center;
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


    .product .status
    {
        font-size: 12px;

        display: flex;

        padding: 5px 5px 6px;

        border-radius: 2px;
        background: #f6f7f8;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .product .status .circle
    {
        width: 14px;
        height: 14px;
        margin-right: 8px;

        border-radius: 50%;
    }

    .product .status .circle.red
    {
        background: #c75d57;
    }

    .product .status .circle.orange
    {
        background: #e69f47;
    }

    .product .status .circle.green
    {
        background: #49aa4f;
    }


    .product .col_status
    {
        display: flex;

        padding-right: 0;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }


    .product .add_in_delivery_btn
    {
        color: #49aa4f;
        font-size: 14px;
        font-weight: 600;

        display: block;

        width: 100%;
        margin-top: 10px;
        padding: 6px 14px 7px;

        transition: .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }

    .product .add_in_delivery_btn:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }


    .product .in_delivery_link
    {
        color: #fff;
        font-weight: 600;

        display: flex;

        width: calc(100% - 32px);
        height: 32px;
        margin-top: 10px;

        text-align: center;
        text-decoration: none;

        border-radius: 4px;
        background: #49aa4f;

        align-self: center;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .product .in_delivery_link .icon
    {
        display: block;

        width: 12px;
        height: 12px;
        margin-left: 8px;
    }


    .product .remove_btn
    {
        color: #808080;

        display: flex;

        width: 21px;
        height: 21px;
        margin-top: 10px;
        margin-left: auto;

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


    .product .delivery_date
    {
        color: #808080;
        font-size: 12px;

        width: 100%;
        margin-top: 10px;
    }



    .col_count,
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

    .col_sales,
    .col_margin,
    .col_ransom,
    .col_return,
    .col_remainder
    {
        width: 100px;
        min-width: 100px;
    }

    .col_revenue,
    .col_profit,
    .col_will_end
    {
        width: 128px;
        min-width: 128px;
    }

    .col_sales_speed,
    .col_lost_profit
    {
        width: 170px;
        min-width: 170px;
    }

    .col_status
    {
        width: 200px;
        min-width: 200px;
    }

</style>