<template>
    <div class="elements">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск элементов" />
        </div>
        <div class="category">
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/elements/cubs.svg);">
                </div>
                <span class="dark--medium">Иконки</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/elements/cubs.svg);">
                </div>
                <span class="dark--medium">3д графика</span>
            </div>
            <div class="styles styles--active">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/elements/cubs.svg);">
                </div>
                <span class="dark--medium">Геометрия</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/elements/cubs.svg);">
                </div>
                <span class="dark--medium">Иллюстрации</span>
            </div>
        </div>
        <div class="geometry_dash">
            <div class="trigonometry trigonometry--active">
                <img class=" rectangle" src="/images/constructor/sidebar_menu/elements/rectangle.svg">
                <span class="rectangle_size">Квадраты</span>
            </div>
            <div class="trigonometry">
                <img class=" rectangle" src="/images/constructor/sidebar_menu/elements/triangle.svg">
                <span class="rectangle_size">Треугольники</span>
            </div>
            <div class="trigonometry">
                <img class=" rectangle" src="/images/constructor/sidebar_menu/elements/circle.svg">
                <span class="rectangle_size">Круги</span>
            </div>
            <div class="trigonometry">
                <img class=" rectangle" src="/images/constructor/sidebar_menu/elements/polygon.svg">
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
    margin-top: 10px;
}

.trigonometry {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 87px;
    background: #FFFFFF;
    border-radius: 5px;
}

.trigonometry--active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.trigonometry:nth-child(3) {
    margin-left: 0;
    margin-right: 0;
}

.trigonometry:nth-child(1) {
    margin-top: 20px;
}

.geometry_dash {
    margin-top: 0 !important;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.geometry_dash>*+* {
    margin-left: 10px;
    margin-top: 20px;
}



.category>*+* {
    margin-top: 10px;
}

.styles {
    width: 234px;
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

.styles--active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.styles>*+* {
    margin-left: 15px;
}

.search__font {
    height: 18px;
}

.search__font::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #878D94;
}

.elements>*+* {
    margin-top: 20px;
}

.elements {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.search>*+* {
    margin-left: 13.18px;
}

.search {
    padding-left: 13px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 100%;
    background: #FFFFFF;
    border: 1.3px solid #3B0CFA;
    border-radius: 5px;
}
</style>