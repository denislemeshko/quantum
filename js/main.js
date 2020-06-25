//Нашли контейнер с селектом
const selectElement = document.querySelector("[data-select]");
//Нашли реальный селект
const selectReal = document.querySelector("#selectReal");

//Прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener("click",function(event){
//Проверка где произошел клик
//event.target -показывает на каком теге произошел клик
	if(event.target.hasAttribute("data-select-item")){
		console.log("Click on ITEM!");
		const itemTitle = event.target.getAttribute("data-select-item");
		event.target.closest("[data-select").querySelector("[data-select-title").textContent = itemTitle;
		event.target.closest("[data-select").querySelector(".header-select__dropdown").classList.toggle("hidden");
		selectReal.value = itemTitle
	} else {
		console.log("Click on TITLE and Around!");
		this.querySelector(".header-select__dropdown").classList.toggle("hidden");
	}
});