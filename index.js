
var insta = document.getElementById("projeto1");
var inicio = document.getElementById("inicio");
var trd = document.getElementById("linha");
var pitch3 = document.getElementById("projeto2");
var pitch4 = document.getElementById("projeto3");
var labmeta = document.getElementById("projeto4");
var primavera = document.getElementById("projeto5");
var labgem = document.getElementById("projeto6");
var cards = document.querySelectorAll(".mais");
var texto = document.getElementById("sobremim");
var cards = document.querySelectorAll(".card");

var titulo = document.getElementById("titulo")
var sub = document.getElementById("sub")
var acesse = document.getElementById("acesse")
var fft = document.getElementById("fft");
var coluna = document.getElementById("cards");

var instagram = document.querySelector('.instagram');
var site = document.querySelector('.site');


cards.forEach((card) => {
    card.addEventListener("click", () => {
        trd.style.right = "100vw"
        trd.style.height="100vh"

        fft.classList.add("active");

        const classes = Array.from(card.classList);

        switch (classes[1]) {
            case "card1":
                fft.style.background = " var(--azule, linear-gradient(179deg, #3DBFC3 29.73%, rgba(106, 172, 174, 0.81) 89.4%))"
                titulo.innerText = "InSTAUFPR"
                sub.innerHTML = "<p class = 'descricao'>Atualmente trabalho no Insituto de Soluções Aplicadas da UFPR. Sou social media, mas sempre ajudo com site dos professores e eventos que todos do setor de tecnologia da UFPR querem criar. Fiz muitos amigos e conexões aqui, além de ter dado um jeito no site deles!</p>"
                instagram.style.display="flex";
                instagram.href = "https://www.instagram.com/insta.ufpr/"
                site.href = "https://insta.ufpr.br/"
                break;
            case "card2":
                fft.style.background = " linear-gradient(260deg, #5D009B -72.57%, #350059 -24.61%, #8C00EB 96.8%)"
                titulo.innerText = "PitchDay 2023"
                sub.innerHTML = "<p class = 'descricao'>Meu primeiro projeto, tive o prazer de trabalhar com minha amiga Sofia Simões, que fez o design e me ensinou um milhão de coisas.<br>O Pitch aconteceu em parceria com a cervejaria Bodebrown, e foi um sucesso para startups e comunidade.</p>"
                instagram.style.display="none";
                site.href = "https://ap-leo.github.io/pitchday/"
                break;
            case "card3":
                fft.style.background = "black";
                titulo.innerText = "LabMeta"
                sub.innerHTML = "<p class = 'descricao'>Eu e meu amigo Jun Sasaki estamos desenvolvendo o site para o Laboratório de Metaverso da UFPR. Ele conta um um código muito bom para manutenção sem necessidade de códigos extras!</p>"
                instagram.style.display="none";
                site.href="https://ap-leo.github.io/LabMETA/"
                break;
            case "card4":
                fft.style.background = "linear-gradient(225deg, #F6971D 0.58%, #3DBFC3 74.43%)"
                titulo.innerText = "PitchDay 2024"
                sub.innerHTML = "<p class = 'descricao'>Criei o design para o evento, mas infelizmente não foi aceito. Possui uma contagem regressiva muito interessante.</p>"
                instagram.style.display="none";
                site.href="https://ap-leo.github.io/pitch24k/"
                break;
            case "card5":
                fft.style.background = "var(--roxo, linear-gradient(180deg, #AF61C3 27.83%, #352339 114.35%))"
                titulo.innerText = "Gbio"
                sub.innerHTML = "<p class = 'descricao'>Realizo a manutenção do site no padrão UFPR.</p>"
                instagram.style.display="none";
                site.href="https://demec.ufpr.br/gbio/"
                break;
            case "card6":
                fft.style.background = "linear-gradient(158deg, #218CEE 14.41%, #E7F5FF 114.33%)"
                titulo.innerText = "Primavera em Ação 2024"
                sub.innerHTML = "<p class = 'descricao'>Um projeto criado por duas professoras. Eu e Jun demos vida a ele, desde a linda logo feita pelo meu amigo, até a divulgação e desenvolvimento do projeto feita por mim</p>"
                instagram.style.display="flex";
                instagram.href="https://www.instagram.com/primaveraemacao_ufpr/"
                site.href="https://insta.ufpr.br/primaveraemacao/"
                break;
            case "card7":
                fft.style.background = "linear-gradient(158deg, #124E59 14.41%, #24A0B7 114.33%)"
                titulo.innerText = "Aceleradora de Talentos UFPR"
                sub.innerHTML = "<p class = 'descricao'>Um projeto do Setor de Tecnologia. Tive a oportunidade de criar a marca e partipar dos eventos.</p>"
                instagram.style.display="flex";
                instagram.href="https://www.instagram.com/aceleradora.ufpr/"
                site.style.display = "none";
                break;
            default:
                console.log('Classe não reconhecida');
                break;
        }

    })
})

inicio.addEventListener("click", () => {
  trd.style.right = "0vw";
  trd.style.height = "auto";
  fft.classList.remove("active");
});


window.addEventListener('scroll', () => {
    const distanciaParaMudar = window.innerHeight * 2.5;

    if (window.scrollY < distanciaParaMudar && window.scrollY < window.innerHeight * 4) {
        texto.innerHTML = "Olá! Sou estudante de <strong>Ciência da Computação na UFPR</strong>. Comecei a me aventurar no <strong>design</strong> e <strong>programação</strong> em 2022, quando entrei no curso e no projeto de extenção Ciência para Todos (CPT).";
    } else if (window.scrollY < window.innerHeight * 3.5) {
        texto.innerHTML = "Tenho <strong>23 anos</strong>, amo organizar e dar um 'tchan' em projetos que façam sentido, mas também amo passar um bom tempo com amigos.";
    } else {
        texto.innerHTML = "A maioria dos meus projetos foram voltados à eventos entre a <strong>comunidade interna e externa da UFPR</strong>, como você vai ver a seguir :)";
    }
});

const target = document.getElementById('meio');
const sumir = document.getElementById('sumir');
const favs = document.getElementById('favs');
const favo = document.getElementById('favo');


let alreadyExecuted = false;

window.addEventListener('scroll', () => {
    if (alreadyExecuted) return;

    const rect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const isCenter = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;

    if (isCenter) {
        sumir.style.opacity = '0';
        setTimeout(() => {
            sumir.style.display = 'none';
            favs.style.display = 'flex';
            favs.style.height = "100vh";

            alreadyExecuted = true;
        }, 3000);
    }
});
