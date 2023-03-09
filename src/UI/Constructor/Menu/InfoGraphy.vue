<template>
    <div class="elements">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск графики" />
        </div>
        <div class="category">
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/graphics/tables.svg);">
                </div>
                <span class="dark--medium">Таблицы</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/graphics/charts.svg);">
                </div>
                <span class="dark--medium">Графики</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/graphics/funnel.svg);">
                </div>
                <span class="dark--medium">Воронка</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/graphics/roadmap.svg);">
                </div>
                <span class="dark--medium">Roadmap</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.category>*+* {
    margin-top: 10px;
}

.styles {
    cursor: pointer;
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

.styles:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.styles>*+* {
    margin-left: 15px;
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
}</style>