// Cada pergunta é um objeto com uma imagem, a pergunta e as alternativas
const data = {
    questions: [
        {
            image: '../Imagens_PP/alanturing.jpg',
            question: 'O que faz os desenvolvedores Web?',
            answers: ['Criam Sites', 'Criam apps para celulares', 'Cuidam da segurança da rede', 'Trabalham com redes sociais'],
            correctAnswer: 'Criam sites'
        },
        {
            image: '../Imagens_PP/billgates.jpg',
            question: 'Quem criou o Sistema Operacional Windows?',
            answers: ['Linus Torvalds', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
            correctAnswer: 'Bill Gates'
        },
        {
            image: '../Imagens_PP/amd.jpg',
            question: 'O que significa AMD?',
            answers: ['American Micro Devices', 'Advanced Micro Devices', 'All Modern Devices', 'Association of Micro Devices'],
            correctAnswer: 'Advanced Micro Devices'
        },
        {
            image: '../Imagens_PP/cpu.jpg',
            question: 'O que significa CPU?',
            answers: ['Central Processing Unit', 'Computer Peripheral Unit', 'Central Power Unit', 'Computer Programming Utility'],
            correctAnswer: 'Central Processing Unit'
        },
        {
            image: '../Imagens_PP/placadevideo.jpg',
            question: 'O que significa GPU?',
            answers: [' General Purpose Unit', 'Graphics Processing Unit', 'Global Positioning Unit', 'General Product Utilization'],
            correctAnswer: 'Graphics Processing Unit'
        },
        {
            image: '../Imagens_PP/boolean-pog.jpg',
            question: 'Qual lógica foi criada por George Boole?',
            answers: ['Lógica de Aristóteles', 'Lógica Binária', 'Lógica Difusa', 'Lógica Booleana'],
            correctAnswer: 'Lógica Booleana'
        },
        {
            image: '../Imagens_PP/primeiragpu.jpg',
            question: 'Quando foi lançada a primeira GPU?',
            answers: ['1980', '1995', '2005', '1972'],
            correctAnswer: '1972'
        },
        {
            image: '../Imagens_PP/valesilicio.jpg',
            question: 'Onde fica o maior polo de tecnologia do mundo?',
            answers: ['Vale do Silício, Califórnia', 'Tóquio, Japão', 'Londres, Reino Unido', 'Nova Iorque, EUA'],
            correctAnswer: 'Vale do Silício, Califórnia'
        },
        {
            image: '../Imagens_PP/fugaku.jpg',
            question: 'Qual o computador mais potente do mundo?',
            answers: ['Apple MacBook Air', 'IBM PC XT', 'Supercomputador Fugaku', 'Compaq Presario'],
            correctAnswer: 'Supercomputador Fugaku'
        },
        {
            image: '../Imagens_PP/patinhofeio.jpg',
            question: 'Qual o nome do primeiro computador totalmente brasileiro?',
            answers: [' CCE-7100', 'Patinho Feio', 'Sempron 64', 'O Pinguim'],
            correctAnswer: 'Patinho Feio'
        },
        {
            image: '../Imagens_PP/cooler.jpg',
            question: 'Para que serve o Cooler?',
            answers: ['Para aquecer o computador', 'Para aumentar a luminosidade do monitor', 'Para resfriar componentes, como o processador', 'Para refrigerar bebidas'],
            correctAnswer: 'Para resfriar componentes, como o processador'
        },
        {
            image: '../Imagens_PP/html.jpg',
            question: 'O que significa a sigla HTML?',
            answers: ['HyperText Markup Language', 'High-Tech Multimedia Language', 'Human Technology Management Language', ' Hardware and Tools Markup Language'],
            correctAnswer: 'HyperText Markup Language'
        },
        {
            image: '../Imagens_PP/android.jpg',
            question: 'Qual empresa é conhecida por desenvolver o sistema operacional Android?',
            answers: ['Apple', 'Google', 'Microsoft', 'Samsung'],
            correctAnswer: 'Google'
        },
        {
            image: '../Imagens_PP/url.jpg',
            question: 'O que significa URL?',
            answers: ['Uniform Resource Locator', 'Universal Remote Link', 'User Registration Language', 'Ultra Rapid Loading'],
            correctAnswer: 'Uniform Resource Locator'
        },
        {
            image: '../Imagens_PP/js.jpg',
            question: 'Qual é a linguagem de programação mais usada para desenvolvimento de websites?',
            answers: ['C++', 'JavaScript', 'Excel', 'Python'],
            correctAnswer: 'JavaScript'
        },
        {
            image: '../Imagens_PP/bluetooth.jpg',
            question: 'O que é Bluetooth?',
            answers: ['Uma marca de refrigerantes', 'Uma tecnologia de conexão sem fio', 'Um tipo de música', 'Uma rede social'],
            correctAnswer: 'Uma tecnologia de conexão sem fio'
        },
        {
            image: '../Imagens_PP/email.jpg',
            question: 'O que é um e-mail?',
            answers: ['Um animal de estimação', 'Uma caixa de correspondências', 'Uma mensagem eletrônica enviada pela internet', 'Um prato de comida'],
            correctAnswer: 'Uma mensagem eletrônica enviada pela internet'
        },
        {
            image: '../Imagens_PP/placamae.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['Processador', 'Placa Pai', 'Placa Mãe', 'Chipset'],
            correctAnswer: 'Placa Mãe'
        },
        {
            image: '../Imagens_PP/processador.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['Memória RAM', 'Processador', 'Placa Mãe', 'Chipset'],
            correctAnswer: 'Processador'
        },
        {
            image: '../Imagens_PP/ram.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['Memória RAM', 'Placa de Video', 'SSD', 'VRM'],
            correctAnswer: 'Memória RAM'
        },
        {
            image: '../Imagens_PP/gabinete.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['CPU', 'Gabinete', 'Box', 'PC'],
            correctAnswer: 'Gabinete'
        },
        {
            image: '../Imagens_PP/fan.png',
            question: 'Identifique a imagem abaixo:',
            answers: ['Fan', 'Cooler', 'Ventilador', 'Hélice'],
            correctAnswer: 'Fan'
        },
        {
            image: '../Imagens_PP/fonteatx.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['Fonte ATX', 'Estabilizador', 'Condutor elétrico', 'Chipset'],
            correctAnswer: 'Fonte ATX'
        },
        {
            image: '../Imagens_PP/SSD.jpg',
            question: 'O que significa SSD?',
            answers: ['Solid State Driver', 'Sistema de Segurança Digital', 'Serviço de Streaming de Dados', 'Super Sistema de Download'],
            correctAnswer: 'Solid State Driver'
        },
        {
            image: '../Imagens_PP/watercooler.jpg',
            question: 'Identifique a imagem abaixo:',
            answers: ['Processador', 'Air Cooler', 'Water Cooler', 'Cano de Resfriamento'],
            correctAnswer: 'Water Cooler'
        },
        {
            image: '../Imagens_PP/firewall.jpg',
            question: 'O que é firewall?',
            answers: ['Proteção de rede', 'Programa de edição', 'Dispositivo de cozinha', 'Estilo de dança'],
            correctAnswer: 'Proteção de rede'
        },
        {
            image: '../Imagens_PP/rammemory.jpg',
            question: 'O que é RAM?',
            answers: ['Memória de acesso aleatório', 'Rádio AM', 'Refrigerante', 'Moda'],
            correctAnswer: 'Memória de acesso aleatório'
        },
        {
            image: '../Imagens_PP/BjarneStroustrup.jpg',
            question: 'Qual é o criador da linguagem de programação C++?',
            answers: ['Dennis Ritchie', 'Bjarne Stroustrup', 'Guido van Rossum', 'James Gosling'],
            correctAnswer: 'Bjarne Stroustrup'
        },
        {
            image: '../Imagens_PP/linux.jpg',
            question: 'Quem é o criador do kernel do Linux?',
            answers: ['Linus Torvalds', 'Richard Stallman', 'Andrew Tanenbaum', 'Mark Shuttleworth'],
            correctAnswer: 'Linus Torvalds'
        },
        {
            image: '../Imagens_PP/github.jpg',
            question: 'Qual é a plataforma mais popular para hospedar projetos de código aberto?',
            answers: ['GitLab', 'Bitbucket', 'SourceForge', 'GitHub'],
            correctAnswer: 'GitHub'
        },
        {
            image: '../Imagens_PP/python.jpg',
            question: 'Qual é a filosofia principal por trás da linguagem de programação Python?',
            answers: ['Zen do Python', 'Princípios de Python', 'Doutrina Pythonista', 'Código Pythonico'],
            correctAnswer: 'Zen do Python'
        },
        {
            image: '../Imagens_PP/bitcoin.jpg',
            question: 'O que é Bitcoin?',
            answers: ['Uma rede social', 'Uma criptomoeda', 'Um tipo de malware', 'Um sistema operacional'],
            correctAnswer: 'Uma criptomoeda'
        },
        {
            image: '../Imagens_PP/sql.jpg',
            question: 'Qual é a finalidade do SQL?',
            answers: ['Linguagem de programação', 'Sistema operacional', 'Gestão de banco de dados', 'Editor de texto'],
            correctAnswer: 'Gestão de banco de dados'
        }
    ],
    confirmationMessages : [
        'Correto!',
        'Impressionante!',
        'Excelente!',
        'Você está arrasando!',
        'Uau, essa foi genial!',
        'Dessa vez você caprichou!',
        'Baita QI!',
        'Na mosca!',
        'Exato!',
        'Dev é você?',
        'Você não erra uma!',
        'Impressionante Calabreso!',
        'Ta dando um show Ludmilo!'
    ],
    errorMessages: [
        'Não foi dessa vez!',
        'Errou, essa estava difícil',
        'Tente novamente na próxima!',
        'Você quase acertou!',
        'Não desanime, continue tentando!',
        'Nem o dev sabia essa!',
        'Errado!',
        'Resposta E... Errada!',
        'Passou perto!'
    ]
};


export { data };