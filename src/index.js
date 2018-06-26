import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'react-rangeslider/lib/index.css';


var img;
var myStorage = window.localStorage;

var URL_BASE = "https://hardy-scarab-200218.appspot.com"

class RegWorker extends React.Component  {
    register(){
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmation = document.getElementById("confirmation").value;
        var code = document.getElementById("workerCode").value;


        if (password === confirmation) {
            if (email.indexOf("@") > -1) {
                if (password.toString().length > 5) {
                    fetch(URL_BASE + '/api/register/worker', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            worker_username: username,
                            worker_password: password,
                            worker_email: email,
                            worker_code: code
                        })
                    })
                    ReactDOM.render(<LogIn/> , document.getElementById("root"));
                }
                else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Password demasiado pequena.
                    Tente novamente</p></div>, document.getElementById("error"));

            } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Email incorrecto. Tente
                novamente</p></div>, document.getElementById("error"));

        } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Password e Confirmação diferentes.
            Tente novamente</p></div>, document.getElementById("error"));

    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light"
                         id="mainNav">
                        <div className="container">
                            <div className = "navbar-brand pointer-finger" onClick={init}> Ignes </div>
                        </div>
                    </nav>
                </div>

                <section id="signup1">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-10 mx-auto">
                                <br/> <br/>
                                <div className="row" >
                                    <h2 className="section-headinges" >Junte-se a nós</h2>

                                </div>

                                <form name="sentMessage" id="signupForm">

                                    <div className="form-group floating-label-form-group controls">
                                        <label>Username </label> <input type="text" className="form-control"
                                                                        placeholder="Username (*)" id="username" required
                                                                        data-validation-required-message="Please enter your name."/>

                                    </div>


                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email </label> <input type="email"
                                                                     className="form-control" placeholder="Email (*)" id="email"
                                                                     required
                                                                     data-validation-required-message="Please enter your email address."/>

                                    </div>

                                    <div className="form-group floating-label-form-group controls">
                                        <label>Password</label> <input type="password"
                                                                       className="form-control" placeholder="Password (*)" id="password"
                                                                       required
                                                                       data-validation-required-message="Please enter your password."/>


                                    </div>



                                    <div className="form-group floating-label-form-group controls">
                                        <label>Confirmar Password </label> <input type="password"
                                                                                  className="form-control" placeholder="Confirmar Password (*)"
                                                                                  id="confirmation" required
                                                                                  data-validation-required-message="Please confirm your password."/>


                                    </div>

                                    <div className="form-group floating-label-form-group controls">
                                        <label>Código Trabalhador </label> <input type="text"
                                                                                  className="form-control" placeholder="Código Trabalhador (*)"
                                                                                  id="workerCode" required
                                                                                  data-validation-required-message="Please enter your code."/>


                                    </div>

                                    <br/>
                                    <p className="help-block text-danger" id ="error"> (*) Campos obrigatórios </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto text-center">
                        <button type="submit" className="btn-light" id="signup" onClick={this.register}>
                            <img src="images/7.svg" alt="Registo"/>
                            <p className="textbtn">Resgistar </p>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

class RegUser extends React.Component {
    register() {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmation = document.getElementById("confirmation").value;


        if (password === confirmation) {
            if (email.indexOf("@") > -1) {
                if (password.toString().length > 5) {
                    fetch(URL_BASE + '/api/register/user', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_username: username,
                            user_password: password,
                            user_email: email
                        })
                    }).then(function (response) {

                        if (response.status === 200) ReactDOM.render(<LogIn/>, document.getElementById("root"));


                        else ReactDOM.render(<div class="row col-lg-8"><p className="help-block"> Username já existe.
                            Tente novamente</p></div>, document.getElementById("error"));

                    })

                } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Password demasiado pequena.
                    Tente novamente</p></div>, document.getElementById("error"));

            } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Email incorrecto. Tente
                novamente</p></div>, document.getElementById("error"));

        } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Password e Confirmação diferentes.
            Tente novamente</p></div>, document.getElementById("error"));
    }
    render(){
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light"
                         id="mainNav">
                        <div className="container">
                            <div className = "navbar-brand pointer-finger" onClick={init}> Ignes </div>
                        </div>
                    </nav>
                </div>

                <section id="signup1">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="row" >
                                    <h2 className="section-heading" >Junte-se a nós</h2>

                                </div>

                                <form name="sentMessage" id="signupForm">

                                    <div className="form-group floating-label-form-group controls">
                                        <label>Username </label> <input type="text" className="form-control"
                                                                        placeholder="Username (*)" id="username" required
                                                                        data-validation-required-message="Please enter your name."/>

                                    </div>


                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email </label> <input type="email"
                                                                     className="form-control" placeholder="Email (*)" id="email"
                                                                     required
                                                                     data-validation-required-message="Please enter your email address."/>

                                    </div>

                                    <div className="form-group floating-label-form-group controls">
                                        <label>Password</label> <input type="password"
                                                                       className="form-control" placeholder="Password (*)" id="password"
                                                                       required
                                                                       data-validation-required-message="Please enter your password."/>


                                    </div>



                                    <div className="form-group floating-label-form-group controls">
                                        <label>Confirmar Password </label> <input type="password"
                                                                                  className="form-control" placeholder="Confirmar Password (*)"
                                                                                  id="confirmation" required
                                                                                  data-validation-required-message="Please confirm your password."/>


                                    </div>

                                    <br/>
                                    <p className="help-block text-danger" id ="error"> (*) Campos obrigatórios </p>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto text-center">
                        <button type="submit" className="btn-light" id="signup" onClick={this.register}>
                            <img src="images/7.svg" alt="Registo"/>
                            <p className="textbtn">Resgistar </p>
                        </button>

                    </div>

                </div>


            </div>
        );
    }
}

class RegCompany extends React.Component {
    register(){
        var name = document.getElementById("name").value;
        var nif = document.getElementById("nif").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmation = document.getElementById("confirmation").value;
        var phone = document.getElementById("phone").value;
        var services = document.getElementById("services").value;
        var address = document.getElementById("address").value;
        var locality = document.getElementById("locality").value;
        var zip = document.getElementById("zip").value;
        var isFireStation = document.getElementById("fireStation").checked;

        console.log(isFireStation);

        if(password === confirmation && email.indexOf("@") > -1) {
            fetch(URL_BASE + '/api/register/org', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    org_name: name,
                    org_nif: nif,
                    org_password: password,
                    org_email: email,
                    org_phone: phone,
                    org_services: services,
                    org_address: address,
                    org_locality: locality,
                    org_zip: zip,
                    org_isfirestation: isFireStation
                })
            })
            ReactDOM.render(<LogIn/> , document.getElementById("root"));
        }
        else
            alert("One or more fields don't meet the required standards.")

    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light"
                         id="mainNav">
                        <div className="container">
                            <div className = "navbar-brand pointer-finger" onClick={init}> Ignes </div>
                        </div>
                    </nav>
                </div>

                <section id="signup1">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-8 mx-auto">
                                <br/> <br/>
                                <div className="row" >
                                    <h2 className="section-headinges" >Junte-se a nós</h2>
                                </div>

                                <form name="sentMessage" id="signupForm">
                                    <div className=" col-lg-12">
                                        <div className = "row" >
                                            <div className="col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Nome </label> <input type="text" className="form-control"
                                                                                placeholder="Nome (*)" id="name" REQUIRED
                                                                                data-validation-required-message="Insira o nome da organização."/>

                                                </div></div>
                                            <div className="col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Nif </label> <input type="text"
                                                                               className="form-control" placeholder="Nif (*)" id="nif"
                                                                               required
                                                                               data-validation-required-message="Insira o Nif da organização."/>

                                                </div></div></div></div>
                                    <div className=" col-lg-12">
                                        <div className = "row" >
                                            <div className="col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Password</label> <input type="password"
                                                                                   className="form-control" placeholder="Password (*)" id="password"
                                                                                   required
                                                                                   data-validation-required-message="Insira uma password."/>


                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Confirmar Password </label> <input type="password"
                                                                                              className="form-control" placeholder="Confirmar Password (*)"
                                                                                              id="confirmation" required
                                                                                              data-validation-required-message="Confirme a password."/>


                                                </div></div></div></div>
                                    <div className=" col-lg-12">
                                        <div className = "row" >
                                            <div className=" col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Email </label> <input type="email"
                                                                                 className="form-control" placeholder="Email (*)" id="email"
                                                                                 required
                                                                                 data-validation-required-message="Insira o email da organização."/>

                                                </div></div>
                                            <div className=" col-lg-6">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Número de Telefone </label> <input type="text"
                                                                                              className="form-control" placeholder="Número de Telefone (*)" id="phone"
                                                                                              required
                                                                                              data-validation-required-message="Insira o número de telefone da organização."/>

                                                </div></div></div></div>

                                    <div className=" col-lg-12">
                                        <div className = "row" >
                                            <div className=" col-lg-4">

                                                <div className="form-group floating-label-form-group controls">

                                                    <label>Morada </label> <input type="text"
                                                                                  className="form-control" placeholder="Morada (*)" id="address"
                                                                                  required
                                                                                  data-validation-required-message="Insira a morada da organização."/>

                                                </div></div>
                                            <div className=" col-lg-4">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Localidade </label> <input type="text"
                                                                                      className="form-control" placeholder="Localidade (*)" id="locality"
                                                                                      required
                                                                                      data-validation-required-message="Insira a localidade da organização."/>

                                                </div></div>
                                            <div className=" col-lg-4">
                                                <div className="form-group floating-label-form-group controls">
                                                    <label>Código Postal </label> <input type="text"
                                                                                         className="form-control" placeholder="Código-Postal (*)" id="zip"
                                                                                         required
                                                                                         data-validation-required-message="Insira o código postal da organização."/>

                                                </div></div></div></div>

                                    <div className="col-lg-12">
                                        <div className="form-group floating-label-form-group controls">
                                            <label>Serviços </label> <input type="text"
                                                                            className="form-control" placeholder="Serviços (*)" id="services"
                                                                            required
                                                                            data-validation-required-message="Que serviços disponibiliza?"/>

                                        </div></div>
                                    <div className= "col-lg-12">
                                        <div className="row">

                                            <input type = "checkbox" id = "fireStation" className="checkboxtitle" defaultChecked={false}  />
                                            <p id="firestation"> É Quartel de Bombeiros?</p>

                                        </div></div>
                                    <p className="help-block text-danger" id="error"> (*) Campos obrigatórios </p>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto text-center">
                        <button type="submit" className="btn-light" id="signup" onClick={this.register}>
                            <img src="images/7.svg" alt="Registo"/>
                            <p className="textbtn">Resgistar </p>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

class LogIn extends React.Component {
    logInFunc(){
        var logUsername = document.getElementById("username").value;
        var logPassword = document.getElementById("password").value;

        if(logPassword !== "" && logUsername !== "") {

            fetch(URL_BASE + '/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: logUsername,
                    password: logPassword
                })
            }).then(function (response) {

                    if (response.status === 200) {
                        var auth = response.headers.get('Authorization');
                        var level = response.headers.get('Level');

                        myStorage.setItem('token', auth);
                        myStorage.setItem('ignes_username',logUsername);

                        console.log(response.headers.get('Level'));

                        if(level === "LEVEL1")  window.location.href = "../Dashboards/Dashboard.html";
                        else if(level === "LEVEL2") window.location.href = "../Dashboards/Dashboard.html";
                        else if(level === "LEVEL3") window.location.href = "../Dashboards/Dashboard.html";
                        else if(level === "ORG") {
                            localStorage.setItem("ignes_org_name", response.headers.get("Org"));
                            console.log(response.headers.get("NIF"));
                            localStorage.setItem("ignes_org_nif", response.headers.get("NIF"));
                            window.location.href = "../Dashboards/DashboardOrganizations.html";
                        }
                        else if(level === "WORKER") window.location.href = "../Dashboards/DashboardAdmin.html";
                        else if(level === "ADMIN") window.location.href = "../Dashboards/DashboardAdmin.html";

                    }
                    else  ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Username ou Password incorrectos.
                    </p></div>, document.getElementById("error"));

                }
            )
                .catch(function (err) {
                    console.log('Fetch Error', err);
                });

        } else ReactDOM.render(<div class="row col-lg-8"><p className="help-block">Campos incompletos.</p></div>, document.getElementById("error"));

    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                        <div className="container">
                            <div className = "navbar-brand pointer-finger" onClick={init}> Ignes </div>
                        </div>
                    </nav>
                </div>

                <section className ="login">
                    <div className="container lg">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <br/> <br/>
                                <div className="row" >
                                    <h2 className="section-heading" >Iniciar Sessão</h2>
                                </div>

                                <form name="sentMessage" id="singupForm">
                                    <div className="form-group floating-label-form-group controls">
                                        <label className="register">Username </label> <input type="text" className="form-control"
                                                                                             placeholder="Username (*)" id="username" required
                                                                                             data-validation-required-message="Please enter your name."/>

                                    </div>
                                    <div className="form-group floating-label-form-group controls">
                                        <label className="register">Password</label> <input type="password"
                                                                                            className="form-control" placeholder="Password (*)" id="password"
                                                                                            required
                                                                                            data-validation-required-message="Please enter your password."/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 mx-auto text-center">
                            <p className="help-block text-danger" id ="error"> </p>
                    </div>
                </div>
                </div>
                <div className="row">

                    <div className="col-lg-12 col-md-12 mx-auto text-center">

                        <button type="submit" className="btn " id="signup" onClick={this.logInFunc}>
                            <img className="imgbtn" src="images/7.svg" alt={"Botao Log In"}/> <p className="textbtn">Entrar </p>
                        </button>

                    </div>
                </div>

                <div id="footermargin">

                    <div>
                        <div className="container">
                            <div className = "row">
                                <div className="col-lg-12 mr-auto text-center">
                                    <p className = "footer"> Não tem uma conta? <a className = "classfooter" href=""> CRIE UMA NOVA</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className = "row">
                                <div className="col-lg-12 mr-auto text-center">
                                    <a className = "footerblack" href="">Continuar sem conta></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }

}

class InitPage extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            var scroll_start = 0;
            var startchange = $('#mainNav');
            var offset = startchange.offset();
            if (startchange.length) {
                $(document).scroll(function () {
                    scroll_start = $(this).scrollTop();
                    if (scroll_start > offset.top) {
                        $(".navbar").css('background-color', '#9e9e9e');
                    } else {
                        $('.navbar').css('background-color', 'transparent');
                    }
                });
            }
        });

        /*var navbarCollapse = function() {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);*/
    }


    render() {
        return (
            <div id="page-top">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top"
                     id="mainNav">
                    <div className="container">
                        <a className = "navbar-brand js-scroll-trigger" href="#page-top"> Ignes </a>


                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#quemsomos">Quem Somos</a>
                                </li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#oquefazemos">O Que fazemos?</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#junte">Junte-se</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#footer">Contactos</a></li>
                                <li className="nav-item pointer-finger"><a className="nav-link js-scroll-trigger" onClick={logIn}>Iniciar Sessão</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead">
                    <div className="container">
                        <div className="row" id="titulo">
                            <div className ="col-lg- col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1> Observar o hoje,</h1>
                                    <hr/>
                                    <h1> proteger o amanhã</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="quemsomos"></div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="text-center" >

                    <br/><br/>

                    <div className = "col-lg-4 col-sm-4 mx-auto" >
                        <p  id="qs"> Quem somos </p>

                    </div>
                    <br/>
                    <div className="row" >

                        <div className="col-lg-2 mx-auto text-center"></div>
                        <div className="col-lg-8 mx-auto text-center">
                            <p className= "text"> A Ignes é uma nova aplicação que irá facilitar
                                a gestão de zonas com potêncial risco de incêndio. Foi desenvolvida pela WokeSolution,
                                um grupo constituido por 5 estudantes de Engenharia Informática da FCT.</p>
                        </div>
                        <div className="col-lg-2 mx-auto text-center"></div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-sm-3 col-lg-3 mx-auto ">

                        </div>

                        <div className="col-sm-3 col-lg-3 mx-auto ">
                            <img src="images/avatar.png" className="foto" alt="Icone de Gonçalo"/>
                            <p id="nos"> Gonçalo Roxo</p>
                        </div>

                        <div className="col-lg-3 col-sm-3 mx-auto">
                            <img src="images/avatar.png" className="foto" alt="Icone de Francesco"/>
                            <p id="nos">Francesco Lupo</p>
                        </div>

                        <div className="col-sm-3 col-lg-3 mx-auto ">

                        </div>

                    </div>
                    <div className="row">

                        <div className="col-lg-2 col-sm-2 mx-auto text-center ">
                        </div>
                        <div className="col-lg-2 col-sm-2 mx-auto text-center ">
                            <img src="images/avatar.png" className="foto" alt="Icone de Catarina"/>
                            <p id="nos">Catarina Matos</p>
                        </div>

                        <div className="col-lg-4 col-sm-4 mx-auto text-center ">
                            <img src="images/avatar.png" className="foto" alt="Icone de Maria"/>
                            <p id="nos"> Maria Lobo da Silva</p>
                        </div>

                        <div className="col-lg-2 col-sm-2 mx-auto text-center ">
                            <img src="images/avatar.png" className="foto" alt="Icone de Filipe"/>
                            <p id="nos"> Filipe Medeiros</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 mx-auto text-center ">
                        </div>


                    </div>
                </div>
                <br/>
                <div id="oquefazemos"></div>
                <hr className="divisoria" />
                <br/>
                <br/>
                <br/>

                <div className = "col-12 mx-auto text-center">
                    <p id="qs"> O que fazemos? </p>
                </div>

                <div className="row">
                    <div className = "col-lg-3 col-sm-3 mx-auto text-center">
                        <img src="images/1.svg"  alt="Observamos"/>
                        <p className="texticon">Observamos</p>
                        <p className = "text"> A nossa comunidade de utilizadores está sempre
                            atenta a tudo o que os rodeia, e que pareça uma ameaça</p>

                    </div>
                    <div className = "col-lg-3 col-sm-3 mx-auto text-center ">
                        <img src="images/2.svg" alt="Reportamos"/>
                        <p className="texticon">Reportamos</p>
                        <p className = "text"> Temos a aplicação para computador e telemóvel para reportar
                            qualquer situação anómala e manter a comunidade segura e
                            as autoridades atualizadas</p>

                    </div>
                    <div className = "col-lg-3 col-sm-3 mx-auto text-center">
                        <img src="images/3.svg" alt="Prevenimos"/>
                        <p className="texticon">Prevenimos</p>
                        <p className = "text"> Desta maneira, conseguimos prevenir que incêndios
                            ocorram assim como muitos outros desastres que iriam prejudicar
                            a vida de muitas pessoas</p>

                    </div>
                </div>

                <div id="junte"> </div>

                <br/>
                <hr className="divisoria"/>
                <div className = "col-12 mx-auto text-center">
                    <p id="junte"> Junte-se </p>
                </div>
                <div className ="row">
                    <div className = "col-lg-2 col-sm-3 mx-auto text-center"></div>

                    <div className = "col-lg-8 col-sm-3 mx-auto text-center">
                        <button className ="btn btn-light flame" id="button_flame" onClick={regAccountCom}>
                            <img src="images/8.svg" className="img-flame" alt="Empresa"/>
                        </button>
                        <p className="texticon">Empresa</p>
                        <p className="text">Caso seja uma Autoridade Competente</p>
                    </div>

                    <div className = "col-lg-2 col-sm-3 mx-auto text-center"></div>

                </div>

                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p id="qs"> Contactos </p>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mr-auto text-center">
                                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" ></i>

                                <a  className= "email" href="mailto:wolkesolutions@gmail.com"><p className="text">wolkesolutions@gmail.com</p></a>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-12 mr-auto text-center">
                                <ul className="list-inline banner-social-buttons">
                                    <li className="list-inline-item"><a
                                        href="https://github.com/BlackrockDigital/startbootstrap"
                                        className="btn btn-default btn-lg"> <i
                                        className="fa fa-facebook-f fa-fwindex"></i> <span className="text">Facebook</span>
                                    </a></li>
                                    <li className="list-inline-item"><a
                                        href="https://plus.google.com/+WokeSolutions/posts"
                                        className="btn btn-default btn-lg"> <i
                                        className="fa fa-instagram fa-fwindex"></i> <span className="text">Instagram</span>
                                    </a></li>
                                    <li className="list-inline-item"><a
                                        href="https://plus.google.com/+WokeSolutions/posts"
                                        className="btn btn-default btn-lg"> <i
                                        className="fa fa-android fa-fwindex"></i> <span className="texticon" >Ignes</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }

}


/*
function readFile(){
    img = document.getElementById('imagem').files[0];
    var reader = new FileReader();
    array = reader.readAsArrayBuffer(img);

}

*/

function regAccountCom(){
    ReactDOM.render(<RegCompany/> , document.getElementById("root"));
}

function regAccountUser(){
    ReactDOM.render(<RegUser/> , document.getElementById("root"));
}

function logIn(){
    ReactDOM.render(<LogIn/> , document.getElementById("root"));
}

function regAccountWorker(){
    ReactDOM.render(<RegWorker/> , document.getElementById("root"));
}

function init(){
    fetch(URL_BASE + '/api/verifytoken', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }).then(function(response) {

            if (response.status === 200) {
                var level = response.headers.get('Level');

                if(level === "LEVEL1")  window.location.href = "../Dashboards/Dashboard.html";
                else if(level === "LEVEL2") window.location.href = "../Dashboards/Dashboard.html";
                else if(level === "LEVEL3") window.location.href = "../Dashboards/Dashboard.html";
                else if(level === "ORG") window.location.href = "../Dashboards/DashboardOrganizations.html";
                else if(level === "WORKER") window.location.href = "../Dashboards/DashboardAdmin.html";
                else if(level === "ADMIN") window.location.href = "../Dashboards/DashboardAdmin.html";

            }else if(response.status === 403){
                console.log("403 (no token)");
                ReactDOM.render(
                    <InitPage />, document.getElementById("root")
                );
            }else{
                console.log("Error 417 (formatacao)");
                ReactDOM.render(
                    <InitPage />, document.getElementById("root")
                );
            }


        }
    )
        .catch(function(err) {
            console.log('Fetch Error', err);
        });
}

// ========================================

init();