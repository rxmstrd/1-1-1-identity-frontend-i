const CONFIG={
	initial:[
		{string:"identificacion",typo:0},
		{string:"registro",typo:0},
		{string:"busqueda",typo:0},
		{string:"back",typo:1}
	],
	flujos: (OPTIONS) => {
		switch(OPTIONS.flujo){
			case 1:
				//flujo de identificacion
				
				break;
			default:
				alert("Flujo no registrado");		
		}
	}
};