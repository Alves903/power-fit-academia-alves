$(document).ready(function () {

    // Modo escuro
    $("#darkModeBtn").click(function () {
        $("body").toggleClass("dark-mode");
    });

    // Mostrar/Ocultar cards
    $("#toggleCards").click(function () {
        $("#listaModalidades").toggle();
    });

    // Contador automático
    let totalCards = $(".modalidade-card").length;
    $("#contador").text(totalCards);

    // Pesquisa
    $("#pesquisa").keyup(function () {

        let valor = $(this).val().toLowerCase();

        $(".modalidade-card").each(function () {

            let texto = $(this).find("h5").text().toLowerCase();

            if (texto.includes(valor)) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }

        });

    });

    // Formulário
    $("#formContato").submit(function (e) {

        e.preventDefault();

        alert("Obrigado por entrar em contato!");

        this.reset();

    });

    // FadeIn
    $(".modalidade-card").addClass("fade-in");

    // Voltar ao topo
    $("#topoBtn").click(function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Relógio
    function atualizarRelogio() {

        let agora = new Date();

        let hora = agora.toLocaleTimeString();

        $("#relogio").text(hora);

    }

    setInterval(atualizarRelogio, 1000);

    atualizarRelogio();

    // Data atual
    let hoje = new Date();

    $("#dataAtual").text(
        hoje.toLocaleDateString("pt-BR")
    );

});