from django.shortcuts import render

ELENCO = [
    {
        'numero': 1,
        'nome': 'Marc-André ter Stegen',
        'posicao': 'Goleiro',
        'idade': 23,
        'nascimento': 'Mönchengladbach, Alemanha',
        'foto': 'app/assets/img/ter.webp',
    },
    {
        'numero': 2,
        'nome': 'Dani Alves',
        'posicao': 'Lateral Direito',
        'idade': 32,
        'nascimento': 'Juazeiro, Brasil',
        'foto': 'app/assets/img/dani.webp',
    },
    {
        'numero': 3,
        'nome': 'Gerard Piqué',
        'posicao': 'Zagueiro',
        'idade': 28,
        'nascimento': 'Barcelona, Espanha',
        'foto': 'app/assets/img/pique.jpg',
    },
    {
        'numero': 14,
        'nome': 'Javier Mascherano',
        'posicao': 'Zagueiro / Volante',
        'idade': 31,
        'nascimento': 'San Lorenzo, Argentina',
        'foto': 'app/assets/img/Javier.jpg',
    },
    {
        'numero': 18,
        'nome': 'Jordi Alba',
        'posicao': 'Lateral Esquerdo',
        'idade': 26,
        'nascimento': "L'Hospitalet, Espanha",
        'foto': 'app/assets/img/jordi.jpg',
    },
    {
        'numero': 4,
        'nome': 'Ivan Rakitić',
        'posicao': 'Meia Central',
        'idade': 27,
        'nascimento': 'Möhlin, Suíça',
        'foto': 'app/assets/img/ivan.jpg',
    },
    {
        'numero': 5,
        'nome': 'Sergio Busquets',
        'posicao': 'Volante',
        'idade': 26,
        'nascimento': 'Sabadell, Espanha',
        'foto': 'app/assets/img/busquets.jpg',
    },
    {
        'numero': 6,
        'nome': 'Andrés Iniesta',
        'posicao': 'Meia Armador',
        'idade': 31,
        'nascimento': 'Fuentealbilla, Espanha',
        'foto': 'app/assets/img/iniesta.webp',
    },
    {
        'numero': 11,
        'nome': 'Neymar Jr.',
        'posicao': 'Ponta Esquerda',
        'idade': 23,
        'nascimento': 'Mogi das Cruzes, Brasil',
        'foto': 'app/assets/img/neymar.jpg',
    },
    {
        'numero': 10,
        'nome': 'Lionel Messi',
        'posicao': 'Ponta Direita',
        'idade': 27,
        'nascimento': 'Rosário, Argentina',
        'foto': 'app/assets/img/messi.webp',
    },
    {
        'numero': 9,
        'nome': 'Luis Suárez',
        'posicao': 'Centroavante',
        'idade': 28,
        'nascimento': 'Salto, Uruguai',
        'foto': 'app/assets/img/suarez.webp',
    },
]

SOBRE = {
    'titulo_site': 'FC Barcelona 2015',
    'descricao': (
        'Site desenvolvido como projeto acadêmico da disciplina de '
        'Programação de Aplicação Web, com foco em Django e templates.'
    ),
    'tema': 'FC Barcelona — Temporada 2014–15',
    'paginas': ['Início', 'Elenco', 'Sobre'],
    'jogadores': '11 titulares da Final da UCL',
    'ano': 2026,
    'disciplina': 'Programação de Aplicação Web',
    'tecnologias': ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
    'autores': [
        {
            'nome': 'Julio',
            'inicial': 'J',
            'cor_inicio': '#004d98',
            'cor_fim': '#a50044',
            'papel': 'Desenvolvimento Back-End',
            'descricao': 'Construção da lógica de servidor com Python e Django.',
            'tags': ['Pesquisa', 'Conteúdo', 'Python', 'Django'],
        },
        {
            'nome': 'Ayhan',
            'inicial': 'A',
            'cor_inicio': '#a50044',
            'cor_fim': '#edbb00',
            'papel': 'Desenvolvimento Front-End',
            'descricao': (
                'Responsável pela arquitetura do site, estilização CSS '
                'e estrutura das três páginas.'
            ),
            'tags': ['Pesquisa', 'Conteúdo', 'HTML', 'CSS', 'JavaScript'],
        },
    ],
}

def index(request):
    return render(request, 'app/index.html')

def elenco(request):
    return render(request, 'app/elenco.html', {'elenco': ELENCO})

def sobre(request):
    return render(request, 'app/sobre.html', {'sobre': SOBRE})
