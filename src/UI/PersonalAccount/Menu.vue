<template>
    <div class="menu__main">
        <div class="menu__row">
            <div v-for="item, index in menu" :key="index" class="menu__item"
                :class="{ 'menu__item-active': chapterName == item.key }" @click="$emit('changeChapter', item.key)">
                <span :class="{ 'violet--medium': chapterName == item.key, 'dark--medium': chapterName != item.key }">{{
                    item.text
                }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        menu: [
            {
                text: "Данные",
                key: "Date"
            },
            {
                text: "Безопасность",
                key: "Security"
            },
            {
                text: "Тарифы",
                key: "Rates"
            },
            {
                text: "Поддержка",
                key: "Support"
            },
            {
                text: "Выбор оплаты",
                key: "Payment"
            }
        ]
    }),
    emits: [
        "changeChapter"
    ],
    props: {
        chapterName: String
    }
}
</script>

<style scoped>
.menu__main {
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.menu__main::-webkit-scrollbar {
    display: none;
}


.menu__row {
    padding-top: 40px;
    display: flex;
    align-items: center;
}

.menu__item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 33px;
}


.menu__item-active {
    background: #E2E2E2;
    border-radius: 5px;
}

@media (max-width: 1015px) {
    .menu__row {
        padding: 0 20px;
        padding-top: 20px;
        align-items: normal;
        width: fit-content;
    }

    .menu__main {
        padding-bottom: 25px;
        align-items: normal;
    }

    .menu__item {
        height: 40px;
    }

    .menu__item span {
        white-space: nowrap;
    }
}
</style>

