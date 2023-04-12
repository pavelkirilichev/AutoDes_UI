<template>
    <div class="navbar" :class="hideMenu == 0 ? 'navbar--high' : ''" @click="changeHideNavbar($event)">
        <div class="navbar__row" :class="longRow">
            <img src="/images/constructor/navbar/burger_mob.svg" alt="">
            <div class="font-menu">
                <div class="color-select">
                    <img src="/images/constructor/navbar/fill.svg" alt="" />
                    <div class="color-select__choise" style="background-color: #9e73ee"></div>
                </div>
                <div class="color-select">
                    <img src="/images/constructor/navbar/edit_color.svg" alt="" />
                    <div class="color-select__choise" style="background-color: #ff0099"></div>
                </div>
                <div class="graph-select" @click="changeHide(0)">
                    <img src="/images/constructor/navbar/fat.svg" alt="">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="">
                    <div class="select-menu select-menu--fat">
                        <div class="select-menu__inner select-menu__inner--fat">
                            <span class="dark--medium">Выберите жирность обводки</span>
                            <vue-slider class="slider" v-model="value" min="6" max="96" dotSize="18" height="3px"
                                tooltip="none" :railStyle="{
                                    background: '#878D94'
                                }" :processStyle="{
    background: '#3B0CFA'
}" :dotStyle="{
    background: '#C1C1C1'
}" :dotOptions="{
    disabled: false,
    focusStyle: {
        boxShadow: 'none'
    }
}" />
                            <div class="slider__value">
                                <span class="dark--medium">{{ value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="graph-select" @click="changeHide(0)">
                    <img src="/images/constructor/navbar/line_type.svg" alt="">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="">
                    <div class="select-menu select-menu--dotted">
                        <div class="select-menu__inner select-menu__inner--dotted">
                            <div class="item--dotted">
                                <img src="/images/constructor/navbar/dotted/line.svg" alt="">
                            </div>
                            <div class="item--dotted">
                                <img src="/images/constructor/navbar/dotted/dotted_small.svg" alt="">
                            </div>
                            <div class="item--dotted">
                                <img src="/images/constructor/navbar/dotted/dotted_medium.svg" alt="">
                            </div>
                            <div class="item--dotted">
                                <img src="/images/constructor/navbar/dotted/dotted_large.svg" alt="">
                            </div>
                            <div class="item--dotted">
                                <img src="/images/constructor/navbar/dotted/dotted_xl.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="graph-select" @click="changeHide(1)">
                    <img src="/images/constructor/navbar/rotate_orientation.svg" alt="">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="">
                    <div class="select-menu select-menu--rotate">
                        <div class="select-menu__inner select-menu__inner--rotate">
                            <div class="item--rotate">
                                <img src="/images/constructor/navbar/rotate/vertical.svg" alt="">
                                <span class="dark--medium">Отразить по вертикали</span>
                            </div>
                            <div class="item--rotate">
                                <img src="/images/constructor/navbar/rotate/horizontal.svg" alt="">
                                <span class="dark--medium">Отразить по горизонтали</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="graph-select" @click="changeHide(2)">
                    <img src="/images/constructor/navbar/rotate_gradus.svg" alt="">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="">
                    <div class="select-menu select-menu--rotate">
                        <div class="select-menu__inner select-menu__inner--rotate">
                            <div class="item--rotate">
                                <img src="/images/constructor/navbar/rotate/right_90.svg" alt="">
                                <span class="dark--medium">Повернуть вправо на 90°</span>
                            </div>
                            <div class="item--rotate">
                                <img src="/images/constructor/navbar/rotate/left_90.svg" alt="">
                                <span class="dark--medium">Повернуть влево на 90°</span>
                            </div>
                            <div class="item--rotate">
                                <img src="/images/constructor/navbar/rotate/rotate_180.svg" alt="">
                                <span class="dark--medium">Повернуть на 180°</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hide-icon">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
const value = ref(6)
const hideMenu = ref(1)
const longRow = ref("")

function changeHideNavbar(e) {
    if (e.currentTarget === e.target) {
        hideMenu.value = 1
        longRow.value = ""
    }

}
function changeHide(is_long) {
    if (is_long == 1) {
        longRow.value = "navbar__row--long"
    }
    if (is_long == 2) {
        longRow.value = "navbar__row--longer"
    }
    hideMenu.value = 0

}
</script>

<style scoped>
.navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100px;
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    background-color: rgba(0, 0, 0, 0);
}


.navbar--high {
    height: 100vh;
}

.navbar::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.navbar__row {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    padding: 15px 15px 0 15px;
    height: 96px;
    background: #EAEAFF;
    padding-right: 15px;
    width: fit-content;
    min-width: 100vw;
    display: flex;
    align-items: center;
}

.navbar__row--long {
    min-width: calc(100vw + 130px);
}

.navbar__row--longer {
    min-width: calc(100vw + 205px);
}

.hide-icon {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border-radius: 5px;
    display: none;
}

.hide-icon img {
    margin-top: 4px;
    width: 13px;
}

.select-menu--fat {
    right: calc(50% - 123.5px);
}

.select-menu__inner--fat {
    padding: 10px 6px;
    width: 247px;
    height: 97px;
}

.select-menu--dotted {
    right: calc(50% - 32px);
}


.select-menu__inner--dotted {
    display: flex;
    flex-direction: column;
    padding: 5px 3px;
    width: 62px;
}

.select-menu--rotate {
    right: calc(50% - 123.5px);
}

.select-menu__inner--rotate {
    padding: 5px;
    width: 247px;
}

.item--dotted {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 56px;
    height: 18px;
    border-radius: 5px;
}

.item--dotted:hover {
    background: #ECE9E9;
}

.item--rotate {
    padding-left: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 237px;
    height: 30px;
    border-radius: 5px;
}

.item--rotate:hover {
    background: #ECE9E9;
}

.item--rotate>*+* {
    margin-left: 10px;
}



.slider__value {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
    margin-left: 6px;
    width: 48px;
    height: 31px;

    background: #EAEAFF;
    border-radius: 4px;
}

.vue-slider-dot-tooltip-inner {
    display: none !important;
}


.navbar--high .graph-select:hover .select-menu {
    display: flex;
}

.select-menu:hover {
    display: flex;
}

.select-menu {
    cursor: default;
    padding-top: 10px;
    display: none;
    position: absolute;
    z-index: 10;
    top: 32px;
}


.select-menu__inner {
    background: #FFFFFF;
    border-radius: 5px;
}

.slider {
    margin-top: 12px;
}

.font-menu {
    margin-left: 20px;
    display: flex;
    align-items: center;
}

.font-menu>*+* {
    margin-left: 10px;
}

.graph-select {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 62px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 5px;
}

.graph-select>*+* {
    margin-left: 10px;
}

.color-select__choise {
    width: 32px;
    height: 6px;
    border-radius: 0px 0px 5px 5px;
}

.color-select {
    cursor: pointer;
    padding-top: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #ffffff;
    border-radius: 5px;
}

.color-select img {
    width: 19px;
    height: 19px;
}

@media (min-width: 370px) {

    .navbar__row--long {
        min-width: 130vw;
    }

    .navbar__row--longer {
        min-width: 150vw;
    }
}

@media (min-width: 420px) {

    .navbar__row--long {
        min-width: 115vw;
    }

    .navbar__row--longer {
        min-width: 130vw;
    }
}

@media (min-width: 550px) {
    .font-menu>*+* {
        margin-left: 15px;
    }

    .navbar__row--long {
        min-width: 100vw;
    }

    .navbar__row--longer {
        min-width: 100vw;
    }
}
</style>