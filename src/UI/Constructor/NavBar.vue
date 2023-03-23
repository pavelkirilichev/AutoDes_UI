<template>
	<div class="navbar">
		<div class="navbar__container">
			<img src="/images/constructor/navbar/burger.svg" alt="" />
			<div class="logo__block">
				<img src="/images/logo.svg" alt="" class="logo-main" />
				<span class="item__text text__logo">Autodesigner</span>
			</div>
			<div :class="NavType == 0 ? 'change-save' : 'change-save change-save--line'">
				<img src="/images/constructor/navbar/cloud.svg" alt="" />
				<span class="dark--medium">Изменения сохранены</span>
			</div>
			<div class="hide-section" v-if="HideStatus == 1">
				<div class="font-select name">
					<span class="black--medium">Montserrat</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>Times New Roman</span>
							</div>
							<div class="menu__slide__item">
								<span>Montserrat</span>
							</div>
							<div class="menu__slide__item">
								<span>HeadlandOne</span>
							</div>
							<div class="menu__slide__item">
								<span>Gilroy</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select count">
					<span class="black--medium">24</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide menu__slide--size">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>10</span>
							</div>
							<div class="menu__slide__item">
								<span>12</span>
							</div>
							<div class="menu__slide__item">
								<span>14</span>
							</div>
							<div class="menu__slide__item">
								<span>16</span>
							</div>
							<div class="menu__slide__item">
								<span>20</span>
							</div>
							<div class="menu__slide__item">
								<span>24</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select name">
					<span class="black--medium">Montserrat</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>Times New Roman</span>
							</div>
							<div class="menu__slide__item">
								<span>Montserrat</span>
							</div>
							<div class="menu__slide__item">
								<span>HeadlandOne</span>
							</div>
							<div class="menu__slide__item">
								<span>Gilroy</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select count">
					<span class="black--medium">24</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide menu__slide--size">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>10</span>
							</div>
							<div class="menu__slide__item">
								<span>12</span>
							</div>
							<div class="menu__slide__item">
								<span>14</span>
							</div>
							<div class="menu__slide__item">
								<span>16</span>
							</div>
							<div class="menu__slide__item">
								<span>20</span>
							</div>
							<div class="menu__slide__item">
								<span>24</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-color" style="background: #9e73ee"></div>
				<div class="font-options">
					<span class="font__option-text">B</span>
				</div>
				<div class="font-options">
					<span class="font__option-text">/</span>
				</div>
				<div class="font-options">
					<span class="font__option-text underline">U</span>
				</div>
				<div class="font-options">
					<img src="/images/constructor/navbar/font_align.svg" alt="" />
				</div>
			</div>
			<div class="font-menu" v-if="NavType == 0">

				<div class="font-select name">
					<span class="black--medium">Montserrat</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>Times New Roman</span>
							</div>
							<div class="menu__slide__item">
								<span>Montserrat</span>
							</div>
							<div class="menu__slide__item">
								<span>HeadlandOne</span>
							</div>
							<div class="menu__slide__item">
								<span>Gilroy</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select count">
					<span class="black--medium">24</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide menu__slide--size">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>10</span>
							</div>
							<div class="menu__slide__item">
								<span>12</span>
							</div>
							<div class="menu__slide__item">
								<span>14</span>
							</div>
							<div class="menu__slide__item">
								<span>16</span>
							</div>
							<div class="menu__slide__item">
								<span>20</span>
							</div>
							<div class="menu__slide__item">
								<span>24</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select name">
					<span class="black--medium">Montserrat</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>Times New Roman</span>
							</div>
							<div class="menu__slide__item">
								<span>Montserrat</span>
							</div>
							<div class="menu__slide__item">
								<span>HeadlandOne</span>
							</div>
							<div class="menu__slide__item">
								<span>Gilroy</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-select count">
					<span class="black--medium">24</span>
					<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
					<div class="menu__slide menu__slide--size">
						<div class="menu__slide__inner">
							<div class="menu__slide__item">
								<span>10</span>
							</div>
							<div class="menu__slide__item">
								<span>12</span>
							</div>
							<div class="menu__slide__item">
								<span>14</span>
							</div>
							<div class="menu__slide__item">
								<span>16</span>
							</div>
							<div class="menu__slide__item">
								<span>20</span>
							</div>
							<div class="menu__slide__item">
								<span>24</span>
							</div>
						</div>
					</div>
				</div>
				<div class="font-color" style="background: #9e73ee"></div>
				<div class="font-options">
					<span class="font__option-text">B</span>
				</div>
				<div class="font-options">
					<span class="font__option-text">/</span>
				</div>
				<div class="font-options">
					<span class="font__option-text underline">U</span>
				</div>
				<div class="font-options">
					<img src="/images/constructor/navbar/font_align.svg" alt="" />
				</div>

			</div>
			<div class="font-options" id="hide-icon" v-if="NavType == 0" @click="hideStatusChange()">
				<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
			</div>
			<GraphPart v-if="NavType == 2" />
			<div class="arrows" v-if="NavType == 1">
				<img src="/images/constructor/navbar/arrow_left.svg" alt="" />
				<img src="/images/constructor/navbar/arrow_right.svg" alt="" />
			</div>
		</div>
		<div class="navbar__container project-name" v-if="NavType == 1">
			<span class="dark--medium">Название проекта</span>
			<img src="/images/constructor/navbar/arrow_down.svg" alt="" />
		</div>
		<div class="navbar__container">
			<button class="share">
				<img src="/images/constructor/navbar/share.svg" alt="" />
				<span class="violet--medium">Поделиться</span>
			</button>
			<button class="upload">
				<span class="white--medium">Загрузить</span>
			</button>
			<button class="projects">
				<img src="/images/constructor/navbar/folder.svg" alt="" />
				<span class="white--medium">Мои проекты</span>
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import GraphPart from "./NavParts/Graph.vue"

const NavType = ref(0);
const HideStatus = ref(0)

function hideStatusChange() {
	if (HideStatus.value == 0) {
		HideStatus.value = 1
	}
	else {
		HideStatus.value = 0
	}
}
</script>

<style scoped>
.hide-section {
	padding: 9px;
	display: flex;
	align-items: center;
	position: absolute;
	top: 82px;
	left: 0;
	height: 60px;
	background: #eaeaff;
	border-radius: 5px;
}

.hide-section>*+* {
	margin-left: 10px;
}

#hide-icon {
	display: none;
}

.hide-icon img {
	margin-top: 4px;
	width: 13px;
}

.graph-select {
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

.project-name {
	cursor: pointer;
}

.project-name>*+* {
	margin-left: 17px;
}

.change-save--line {
	width: auto !important;
	margin-left: 37px !important;
}

.arrows {
	margin-left: 21px;
	display: flex;
	align-items: center;
}

.arrows img {
	cursor: pointer;
}

.arrows>*+* {
	margin-left: 18px;
}

.navbar {
	z-index: 2;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 38px 0 28px;
	width: 100%;
	height: 75px;
	background: #eaeaff;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.navbar__container {
	display: flex;
	align-items: center;
}

.logo__block {
	margin-left: 12px;
	display: flex;
	align-items: center;
}

.logo__block>*+* {
	margin-left: 5px;
}

.logo__block img {
	cursor: pointer;
}

.change-save {
	margin-left: 37px;
	display: flex;
	align-items: center;
}

.change-save>*+* {
	margin-left: 11px;
}

.menu__slide {
	display: none;
	position: absolute;
	top: 28px;
	left: 0;
	margin-left: 0 !important;
	width: 100%;
}

.menu__slide__inner {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 5px;
	background: #fff;
	border-radius: 0 0 5px 5px;
}

.menu__slide:hover {
	display: flex;
}

.menu__slide--size {
	width: 100%;
}

.menu__slide__item {
	cursor: pointer;
	padding: 0 5px;
	display: flex;
	align-items: center;
	width: 100%;
	height: 30px;
	background: #fff;
	border-radius: 5px;
}

.menu__slide__item span {
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 15px;
	line-height: 17px;

	color: #000000;
}

.menu__slide__item:hover {
	background: #ece9e9;
}

.font-menu {
	margin-left: 9px;
	display: flex;
	align-items: center;
}

.font-menu>*+* {
	margin-left: 10px;
}

.font-select {
	position: relative;
	cursor: pointer;
	padding: 8px 13px 6px 10px;
	display: flex;
	align-items: center;
	background: #ffffff;
	border-radius: 5px;
}

.font-select:hover .menu__slide {
	display: flex;
}

.name>*+* {
	margin-left: 50px;
}

.count>*+* {
	margin-left: 17px;
}

.font-color {
	cursor: pointer;
	width: 32px;
	height: 32px;
	border-radius: 5px;
}

.font-options {
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	background: #ffffff;
	border-radius: 5px;
}

.font__option-text {
	margin-top: 2px;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	color: #878d94;
}

.underline {
	text-decoration-line: underline;
}

.share {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 156px;
	height: 34px;
	background: #e8e2ff;
	border: 1px dashed #3b0cfa;
	border-radius: 10px;
}

.share>*+* {
	margin-left: 9px;
}

.upload {
	margin-left: 13px;
	width: 111px;
	height: 34px;
	background: #fa0c54;
	border-radius: 10px;
}

.projects {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 13px;
	width: 186px;
	height: 34px;
	background: #3b0cfa;
	border-radius: 10px;
}

.projects>*+* {
	margin-left: 10px;
}

.hide-section .font-select {
	display: none;
}

.hide-section .font-color {
	display: none;
}

.hide-section .font-options {
	display: none;
}

@media (max-width: 1720px) {

	.font-color,
	.font-options {
		display: none;
	}

	#hide-icon {
		display: flex;
		margin-left: 9px;
	}

	.hide-section .font-color {
		display: flex;
	}

	.hide-section .font-options {
		display: flex;
	}
}

@media (max-width: 1560px) {

	.font-select:nth-child(4) {
		display: none;
	}

	.hide-section .font-select:nth-child(4) {
		display: flex;
	}
}

@media (max-width: 1480px) {
	.font-select:nth-child(3) {
		display: none;
	}

	.hide-section .font-select:nth-child(3) {
		display: flex;
	}
}

@media (max-width: 1240px) {
	.font-select:nth-child(2) {
		display: none;
	}

	.hide-section .font-select:nth-child(2) {
		display: flex;
	}
}

@media (max-width: 1170px) {
	.font-select:nth-child(1) {
		display: none;
	}

	.hide-section .font-select:nth-child(1) {
		display: flex;
	}

	.navbar {
		padding: 0 10px;
	}
}


@media (max-width: 1335px) {
	.change-save>*+* {
		margin-left: 7px;
	}

	.count>*+* {
		margin-left: 8px;
	}

	.projects {
		width: 164px;
	}

	.share {
		width: 146px;
	}

	.upload {
		width: 100px;
	}
}
</style>
