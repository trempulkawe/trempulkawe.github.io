


function chkcontrol(j) {
	var sum=0;
	for(var i=0; i < document.form1.ckb.length; i++){
	
	if(document.form1.ckb[i].checked){
	sum = sum + parseInt(document.form1.ckb[i].value) * 1.19;
	}
	document.getElementById("msg").innerHTML="Total Servicio(s) : "+ sum + " IVA incluido";
	
	document.getElementById("msg").innerHTML="Total Servicio(s) : $"+ sum + " IVA incluido";
	}
	}

/*
//profe
$(".btnEnviar").click(function() {
	if ($.trim($('.txtNombre').val()).length == 0) {
		alert('Falta nombre');


	}

	if ($('.cmbTipoAuto').val() == "0") {


	}

	if (!$('.chkLavadoE').is(':checked') && !$('.chkLavadoM').is(':checked')) {

	}

	if (1 == 1 && (2 == 2 || 3 == 3)) {
		alert('ok');
	}
})
*/