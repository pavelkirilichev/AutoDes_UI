<template>
	<div class="main">
		<NavBar />
		<div class="main__center">
			<Main />
		</div>
		<div class="modal__section">
			<div class="modal">
				<span class="title">
					Действительно хотите приобрести <br />
					тариф «Презентации»?
				</span>
				<span class="dark--medium">Выберите количество месяцев</span>
				<div class="menu">
					<div class="menu__item-active">
						<span class="white--medium">1 мес</span>
					</div>
					<div class="menu__item">
						<span class="dark--medium">3 мес</span>
					</div>
					<div class="menu__item">
						<span class="dark--medium">6 мес</span>
					</div>
					<div class="menu__item">
						<span class="dark--medium">12 мес</span>
					</div>
				</div>
				<div class="price">
					<span class="dark--medium">Стоимость составит:</span>
					<span class="violet--semibold">449 ₽</span>
				</div>
				<div class="btn-div">
					<Button color="pink-transparent">Отмена</Button>
					<Button color="blue">Оплатить</Button>
				</div>
			</div>
			<div class="modal">
				<span class="title">
					Действительно хотите приобрести <br />
					тариф «Презентации»?
				</span>
				<span class="dark--medium align--center">Вы можете попробовать использовать данный тариф <br />
					7 дней бесплатно</span>
				<Button color="pink">Попробовать бесплатно</Button>

				<div class="price">
					<span class="dark--medium">Стоимость составит:</span>
					<span class="violet--semibold">0 ₽</span>
				</div>
				<span class="grey--medium no-sale">А после составит 399 ₽/мес </span>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import Button from "@/UI/Buttons/Button.vue";
import Footer from "../UI/Footer.vue";
import NavBar from "../UI/NavBar.vue";
import Main from "../UI/PersonalAccount/Main.vue";
</script>

<style scoped>
.modal__section {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: -100px;
	width: 100vw;
	height: calc(100vh + 157px);
	background: rgba(0, 0, 0, 0.31);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
}

.modal__section>*+* {
	margin-top: 50px;
}

.modal {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	width: 623px;
	height: 270px;
	background: #f5f5f7;
	border-radius: 10px;
}

.modal>*+* {
	margin-top: 20px;
}

.title {
	font-family: "Montserrat";
	font-weight: 600;
	font-size: 25px;
	line-height: 30px;
	text-align: center;

	color: #000000;
}

.menu {
	display: flex;
}

.menu>*+* {
	margin-left: 20px;
}

.menu__item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 73px;
	height: 40px;
	background: #e6e6e6;
	border-radius: 5px;
}

.menu__item-active {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 73px;
	height: 40px;
	background: #3b0cfa;
	border-radius: 5px;
}

.price {
	display: flex;
}

.price>*+* {
	margin-left: 5px;
}

.btn-div {
	display: flex;
}

.btn-div>*+* {
	margin-left: 15px;
}

.btn-div button {
	border-radius: 10px !important;
}
</style>
