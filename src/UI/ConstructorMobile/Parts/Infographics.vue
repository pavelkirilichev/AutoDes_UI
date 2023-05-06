<template>
    <div class="infographics">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск шрифтов" />
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

.styles>*+* {
    margin-left: 13.01px;
}

.styles:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.styles__img {
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
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

.infographics {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.category::-webkit-scrollbar {
    display: none;
}


.category {
    margin-top: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    width: 100vw;
    overflow-x: auto;
}

.category>*+* {
    margin-left: 10px;
}
</style>