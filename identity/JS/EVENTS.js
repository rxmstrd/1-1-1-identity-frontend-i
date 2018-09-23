const EVENTS={
	init: () => {
		CONFIG.initial.forEach( (item) => {
			console.log(item);
			switch(item.typo){
				case 0:
					document.getElementsByClassName(item.string)[0].classList.add("novisible");
					break;
				case 1:
					document.getElementById(item.string).classList.add("novisible");
					break;
			}
		});
	},
	identifyTag: (el) => {
		switch(el.target.tagName.toUpperCase()){
			case "BUTTON":
				EVENTS.clickButton(el.target);
				break;
		}
	},
	clickButton: (el) => {
		switch(parseInt(el.getAttribute("action"))){
			case 1:
				EVENTS.newRegister();
				break;
			case 2:
				alert("BUSQUEDA");
				break;
			case 3:
				alert("IDENTIFICACION");
				break;		
			case 4:
				alert("CAMERA");
				break;	
			default:
				alert("ACCION NO RECONOCIDA");	
		}
	},
	newRegister: () => {
		let OPTIONS = {flujo:1};
		EVENTS.interactionAction(OPTIONS);
	}

};