<!DOCTYPE html>
<html>
	<head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width; initial-scale=1"/>
            <title> SuperClean - Orden de Trabajo</title> 
            <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
            <link rel="icon" href="images/favicon.ico" type="image/x-icon">
            <link rel="stylesheet" href="css/bootstrap.css">
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <link rel="stylesheet" href="node_modules/open-iconic/font/css/open-iconic-bootstrap.min.css">
			<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            <script src="js/js.js"></script>

            
	</head>
    <body style="background-color: lightgoldenrodyellow;">
        <form action="" method="post" target="_blank">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light" id="navbar1">
                <a class="navbar-brand" href="#"><img id="logoImg" src="images/logo2.png"> SuperClean</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sucursales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Productos</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="Evaluacion1-OrdenDeTrabajo.html">Orden de Trabajo</a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div class="row justify-content-center" id="titulo">
                <h1>Orden de Trabajo</h1>
            </div>
            <br>


            <div class="row offset-sm-2">
                <h3>Datos del Cliente:</h3>
            </div>

            <br>
            <div class="offset-sm-2">
                <div class="row">
                    <div class="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2">RUT</div>
                    <div class="col-9 col-sm-4 col-md-4 col-lg-5">
                        <input type="number" onKeyPress="if(this.value.length==8) return false;" name="numRut" class="form-control" placeholder="Ej: 15.555.000 " pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,8}$" title="Por favor, ingrese RUT" required>
                    </div>
                    <div class="col-3 col-sm-2 col-md-2 col-lg-1">
                        <select name="cmbDigitoVerificador" class="form-control"> 
                            <option value="Digito0">0</option>
                            <option value="Digito1">1</option>
                            <option value="Digito2">2</option>
                            <option value="Digito3">3</option>
                            <option value="Digito4">4</option>
                            <option value="Digito5">4</option>
                            <option value="Digito6">6</option>
                            <option value="Digito7">7</option>
                            <option value="Digito8">8</option>
                            <option value="Digito9">9</option>
                            <option value="DigitoK">K</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Nombre(s)</div>
                    <div class="col-12 col-sm-6">
                        <input type="text " name="txtNombre " class="form-control" maxlength="50" placeholder="Ej: Juan Ignacio" pattern="^([^\s][A-z0-9À-ž\s]+){1,50}$" title="Por favor, ingrese nombre" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Apellido(s)</div>
                    <div class="col-12 col-sm-6">
                        <input type="text " name="txtApellido " class="form-control" maxlength="50" placeholder="Ej: González Narea" pattern="^([^\s][A-z0-9À-ž\s]+){1,50}$" title="Por favor, ingrese apellido" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Dirección</div>
                    <div class="col-12 col-sm-6">
                        <input type="text " name="txtDirección" class="form-control" maxlength="100" placeholder="Ej: MelchiorStrasse 111" pattern="^([^\s][A-z0-9À-ž\s]+){1,100}$" title="Por favor, ingrese dirección" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Región</div>
                    <div class="col-12 col-sm-6">
                        <select id="regiones" class="form-control"></select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Comuna</div>
                    <div class="col-12 col-sm-6">
                        <select id="comunas" class="form-control"></select>
                    </div>
                </div>
                <br>
            </div>

            <div class="row offset-sm-2">
                <h3>Datos del vehículo:</h3>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Tipo de Vehículo</div>
                <div class="col-12 col-sm-6">
                    <form>
                        <input type="radio" id="furgon" name="rdoTipoVehiculo" value="furgon">
                        <label for="furgon">Furgón</label><br>
                        <input type="radio" id="automovil" name="rdoTipoVehiculo" value="automovil">
                        <label for="automovil">Automóvil</label><br>
                        <input type="radio" id="camion" name="rdoTipoVehiculo" value="camion">
                        <label for="camion">Camión</label><br>
                        <input type="radio" id="camioneta" name="rdoTipoVehiculo" value="camioneta">
                        <label for="camioneta">Camioneta</label><br>
                        <input type="radio" id="motocicleta" name="rdoTipoVehiculo" value="motocicleta">
                        <label for="motocicleta">Motocicleta</label><br>
                        <input type="radio" id="otro" name="rdoTipoVehiculo" value="Otro">
                        <label for="otro">Otro</label><br>
                    </form>                        
                </div>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Marca</div>
                <div class="col-12 col-sm-6">
                    <input type="text " name="txtMarca" class="form-control" maxlength="20" placeholder="Ej: Mercedes Benz" pattern="^([^\s][A-z0-9À-ž\s]+){1,20}$" title="Por favor, ingrese la marca del vehículo" required>
            </div>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Modelo</div>
                <div class="col-12 col-sm-6">
                    <input type="text " name="txtModelo" class="form-control" maxlength="20" placeholder="Ej: GL-550" pattern="^([^\s][A-z0-9À-ž\s]+){1,20}$" title="Por favor, ingrese el modelo del vehículo" required>

            </div>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Año</div>
                <div class="col-12 col-sm-6">
                <input type="number" minlength="1900" max="2020" onKeyPress="if(this.value.length==4) return false;" name="numRut" class="form-control" placeholder="Ej: 2020 " pattern="^{1,4}$" title="Por favor, ingrese año del vehículo" required />
            </div>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Revisión Técnica</div>
                <div class="col-12 col-sm-6">
                    <form>
                        <input type="radio" id="furgon" name="rdoRevisionTecnica" value="alDia">
                        <label for="alDia">Al día</label><br>
                        <input type="radio" id="automovil" name="rdoRevisionTecnica" value="atrasada">
                        <label for="atrasada">Atrasada</label><br>
                    </form>                        
                </div>
            </div>
            <br>
            <div class="row offset-sm-2">
                <h3>Servicio(s) Realizado(s):</h3>
            </div>
            <br>

            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2"></div>
                <form name=form1 method=post action=check.php>
                    <table>
                    <tr><td style="padding-right: 70px; padding-left: 15px;"><input type=checkbox name=ckb value=5000 onclick='chkcontrol(0)';> Lavado Exterior <br> Valor: $5.000 (NETO)</td>
                        <td><input type=checkbox name=ckb value=8000 onclick='chkcontrol(1)';> Lavado Motor <br> Valor: $8.000 (NETO) </td></tr>
                    </table></form>
                    <br><br>
            </div>
            <div class="row row offset-sm-2">
                <div id=msg style="padding-left: 13rem; padding-top: 1rem;"></div>  
            </div>

            <br>
            <div class="row offset-sm-2">
                <h3>Encargado de servicio:</h3>
            </div>
            <br>
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Encargado</div>
                <div class="col-12 col-sm-6">
                <select name="cmbPrestadordeServicio" class="form-control"> 
                    <option value="0">Prestador de Servicio</option>
                    <option value="Prestador1">Prestador 1</option>
                    <option value="Prestador2">Prestador 2</option>
                    <option value="Prestador3">Prestador 3</option>
                    <option value="Prestador4">Prestador 4</option>
                </select>
            </div>
            </div>
            <br>
            
            <div class="row row offset-sm-2">
                <div class="col-12 col-sm-2 col-lg-2 col-xl-2">Fecha y Hora de término</div>
                <div class="col-12 col-sm-6">
                    <form >
                        <input type="datetime-local" class="form-control">
                    </form>                        
                </div>   
            </div>
            <br>

            <div class="d-grid mb-2 offset-sm-8">
                    <div id=msg style="padding-left: 13rem; padding-top: 1rem;"></div> <input type="submit" class="btn btn-info btn-lg" name="btnEnviar" value="Enviar">
                
            </div>

        </div>
    </form>
            <footer>
            <div class="row align-items-center">
                <div class="col-sm-4 d-flex flex-column align-items-start">
                    <a href="http://www.facebook.com"><img src="images/facebook.svg" alt="" width="21" height="21"> Facebook</a>
                    <a href="http://www.twitter.com"><img src="images/twitter.svg" alt="" width="21" height="21"> Twitter</a>
                    <a href="http://www.instagram.com"><img src="images/instagram.svg" alt="" width="21" height="21"> Instagram</a>
                </div>
                <div class="col-sm-4 justify-content-center">
                    <address>

                        <h3>Oficina central</h3>
                            <p><span></span> <img src="images/home.svg" alt="" width="15" height="15"> MelchiorStrasse 34, Santiago de Chile
                            </br><span></span> <img src="images/telephone.svg" alt="" width="15" height="15"> +560895577990
                            </br><span></span> <img src="images/correo.svg" alt="" width="15" height="15"> contacto@SuperClean.com</p>
                    </address>
            </div>

            <div class="col-sm-4 d-flex flex-column align-items-end">
                <a href="#">Inicio</a>
                <a href="#">Sucursales</a>
                <a href="#">Productos</a>
                <a href="index.html">Orden de Trabajo</a>
            </div>
            </div>
        

                </footer>
            </div>

</body>  

</html>