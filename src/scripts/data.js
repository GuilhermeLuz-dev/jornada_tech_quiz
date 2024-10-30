// Cada pergunta é um objeto com uma imagem, a pergunta e as alternativas
const data = {
    questions: [
        {
            question: 'O que faz os desenvolvedores Web?',
            answers: ['Criam sites', 'Criam apps para celulares', 'Cuidam da segurança da rede', 'Trabalham com redes sociais'],
            correctAnswer: 'Criam sites'
        },
        {
            question: 'Qual curso de graduação seria mais indicado para alguém interessado em construir aplicações robustas e seguras para a internet?',
            answers: ['Engenharia de Software', 'Sistemas de Informação', 'Ciência da Computação', 'Redes de Computadores'],
            correctAnswer: 'Engenharia de Software'
        },
        {
            question: 'Em qual dessas profissões um profissional é mais provavelmente responsável por proteger dados sensíveis de ataques cibernéticos?',
            answers: ['Engenheiro de Dados', 'Arquiteto de Software', 'Administrador de Redes', 'Especialista em Segurança da Informação'],
            correctAnswer: 'Especialista em Segurança da Informação'
        },
        {
            question: 'Qual dessas áreas é mais relacionada com a criação e gestão de bancos de dados complexos?',
            answers: ['Engenharia de Computação', 'Ciência de Dados', 'Análise de Sistemas', 'Administração de Banco de Dados'],
            correctAnswer: 'Administração de Banco de Dados'
        },
        {
            question: 'Qual curso de especialização seria ideal para quem deseja trabalhar com aprendizagem de máquina e algoritmos inteligentes?',
            answers: ['Desenvolvimento Mobile', 'Redes de Computadores', 'Inteligência Artificial', 'Engenharia de Software'],
            correctAnswer: 'Inteligência Artificial'
        },
        {
            question: 'O que faz um Analista de Suporte?',
            answers: ['Desenvolve novos softwares', 'Resolve problemas técnicos e oferece suporte aos usuários', 'Gerencia redes sociais da empresa', 'Elabora planos de marketing'],
            correctAnswer: 'Resolve problemas técnicos e oferece suporte aos usuários'
        },
        {
            question: 'Qual a principal habilidade de um Desenvolvedor Full Stack?',
            answers: ['Trabalhar com o front-end e o back-end de uma aplicação', 'Criar interfaces gráficas para aplicativos', 'Configurar redes e servidores', 'Garantir a segurança dos sistemas'],
            correctAnswer: 'Trabalhar com o front-end e o back-end de uma aplicação'
        },
        {
            question: 'O que significa a sigla “DevOps”?',
            answers: ['Desenvolvimento e Operações', 'Desenvolvimento de Softwares Corporativos', 'Desenvolvimento Orientado a Processos', 'Design e Operações'],
            correctAnswer: 'Desenvolvimento e Operações'
        },
        {
            question: 'O que é um estágio em TI?',
            answers: ['Um emprego temporário para ganhar experiência prática', 'Uma certificação técnica em tecnologia', 'Um curso de curta duração em informática', 'Uma atividade recreativa em empresas de tecnologia'],
            correctAnswer: 'Um emprego temporário para ganhar experiência prática'
        },
        {
            question: 'Qual é a função de um recrutador técnico?',
            answers: ['Avaliar apenas o comportamento dos candidatos', 'Identificar e contratar profissionais com habilidades específicas de TI', 'Gerenciar a equipe de desenvolvimento de software', 'Realizar treinamentos técnicos para a equipe de TI'],
            correctAnswer: 'Identificar e contratar profissionais com habilidades específicas de TI'
        },
        {
            question: 'Qual área é responsável por desenvolver a interface visual de um site?',
            answers: ['Back-end', 'Front-end', 'Banco de Dados', 'DevOps'],
            correctAnswer: 'Front-end'
        },
        {
            question: 'O que um Analista de Dados faz?',
            answers: ['Analisa e interpreta dados para decisões estratégicas', 'Trabalha com redes de computadores', 'Desenvolve jogos', 'Escreve código para sistemas operacionais'],
            correctAnswer: 'Analisa e interpreta dados para decisões estratégicas'
        },
        {
            question: 'Qual curso é ideal para quem quer trabalhar com redes de computadores?',
            answers: ['Engenharia de Software', 'Sistemas de Informação', 'Ciência de Dados', 'Redes de Computadores'],
            correctAnswer: 'Redes de Computadores'
        },
        {
            question: 'Qual das áreas a seguir é mais focada na criação de apps para celulares?',
            answers: ['Cibersegurança', 'Desenvolvimento Mobile', 'Análise de Dados', 'Engenharia de Dados'],
            correctAnswer: 'Desenvolvimento Mobile'
        },
        {
            question: 'Qual profissão se dedica a proteger sistemas contra ataques cibernéticos?',
            answers: ['Desenvolvedor Front-end', 'Cientista de Dados', 'Administrador de Redes', 'Especialista em Cibersegurança'],
            correctAnswer: 'Especialista em Cibersegurança'
        },
        {
            question: 'Qual linguagem é muito usada para desenvolvimento de sites?',
            answers: ['Python', 'JavaScript', 'Java', 'SQL'],
            correctAnswer: 'JavaScript'
        },
        {
            question: 'Qual curso é mais focado em desenvolvimento de sistemas e software?',
            answers: ['Engenharia de Software', 'Engenharia Civil', 'Ciência de Dados', 'Psicologia'],
            correctAnswer: 'Engenharia de Software'
        },
        {
            question: 'Qual área é responsável pela análise e visualização de grandes volumes de dados?',
            answers: ['Engenharia de Software', 'Desenvolvimento Back-end', 'Data Science', 'Redes de Computadores'],
            correctAnswer: 'Data Science'
        },
        {
            question: 'Quem desenvolve e gerencia sistemas de bancos de dados?',
            answers: ['Desenvolvedor Front-end', 'Administrador de Banco de Dados', 'Engenheiro de Software', 'Especialista em DevOps'],
            correctAnswer: 'Administrador de Banco de Dados'
        },
        {
            question: 'Qual curso seria recomendado para quem deseja trabalhar com Inteligência Artificial?',
            answers: ['Engenharia de Produção', 'Ciência da Computação', 'Publicidade e Propaganda', 'Administração'],
            correctAnswer: 'Ciência da Computação'
        },
        {
            question: 'O que faz um programador?',
            answers: ['Conserta computadores','Cria e escreve código para aplicativos e sistemas','Desenha layouts para sites','Gerencia redes de computadores'],
            correctAnswer: 'Cria e escreve código para aplicativos e sistemas'
        },
        {
            question: 'Qual das áreas abaixo lida com a criação de conteúdo visual para sites e aplicativos?',
            answers: ['Desenvolvimento Back-end','Web Design','DevOps','Administração de Redes'],
            correctAnswer: 'Web Design'
        },
        
        
    ],
    confirmationMessages: [
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