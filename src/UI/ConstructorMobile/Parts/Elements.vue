<template>
    <div class="elements">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск шрифтов" />
        </div>
        <div class="elements-top">
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/elements/cubs.svg);">
                </div>
                <span class="dark--medium">Иконки</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/elements/graphics.svg);">
                </div>
                <span class="dark--medium">3д графика</span>
            </div>
            <div class="styles styles--active">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/elements/geometry.svg);">
                </div>
                <span class="dark--medium">Геометрия</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/elements/illustrations.svg);">
                </div>
                <span class="dark--medium">Иллюстрации</span>
            </div>
        </div>
        <div class="elements-top">
            <div class="trigonometry">
                <img class="rectangle" src="/images/constructor/sidebar_menu/elements/rectangle.svg">
                <span class="rectangle_size">Квадраты</span>
            </div>
            <div class="trigonometry">
                <img class="rectangle" src="/images/constructor/sidebar_menu/elements/triangle.svg">
                <span class="rectangle_size">Треугольники</span>
            </div>
            <div class="trigonometry">
                <img class="rectangle" src="/images/constructor/sidebar_menu/elements/circle.svg">
                <span class="rectangle_size">Круги</span>
            </div>
            <div class="trigonometry">
                <img class="rectangle" src="/images/constructor/sidebar_menu/elements/polygon.svg">
                <span class="rectangle_size">Многоугольники</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rectangle {
    width: 48px;
    height: 48px;
}

.rectangle_size {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    color: #303030;
}

.trigonometry>*+* {
    margin-left: 10px;
}

.trigonometry {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 87px;
    background: #FFFFFF;
    border-radius: 5px;
}

.trigonometry:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}


.geometry_dash {
    width: 90%;
    margin-top: 0 !important;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.geometry_dash>*+* {
    margin-left: 10px;
    margin-top: 20px;
}

.styles {
    flex-shrink: 0;
    cursor: pointer;
    width: 192px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    display: flex;
    align-items: center;
}

.styles__img {
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}

.styles:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.styles>*+* {
    margin-left: 15px;
}

.elements-top {
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    width: 100vw;
    overflow-x: auto;
}

.elements-top::-webkit-scrollbar {
    display: none;
}

.elements-top>*+* {
    margin-left: 10px;
}

.elements {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.elements>*+* {
    margin-top: 20px;
}

.search>*+* {
    margin-left: 13.18px;
}

.search {
    padding-left: 13px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 90%;
    background: #FFFFFF;
    border: 1.3px solid #3B0CFA;
    border-radius: 5px;
}

.search__font {
    width: 170px;
    height: 18px;
}

.search__font::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #878D94;
}
</style>