// questions.js

// Objet de questions contenant les questions pour le quiz, séparées par langue et niveau de difficulté
const questions = {
    "fr": {
        "Facile": [
            // Questions existantes
            {"question": "Quel est le personnage principal de Super Mario?", "choices": ["Luigi", "Mario", "Peach"], "answer": 1},
            {"question": "En quelle année le jeu Pac-Man est-il sorti?", "choices": ["1980", "1985", "1990"], "answer": 0},
            {"question": "Quelle console a été créée par Nintendo?", "choices": ["PlayStation", "Xbox", "NES"], "answer": 2},
            {"question": "Comment s'appelle le héros de Zelda?", "choices": ["Link", "Zelda", "Ganondorf"], "answer": 0},
            {"question": "Quel est le nom du frère de Mario?", "choices": ["Toad", "Luigi", "Bowser"], "answer": 1},
            // Nouvelles questions ajoutées
            {"question": "Dans quel jeu doit-on capturer des monstres appelés Pokémon?", "choices": ["Digimon", "Monster Hunter", "Pokémon"], "answer": 2},
            {"question": "Quel est le nom de l’architecte de la série des Sims?", "choices": ["Maxis", "EA", "Blizzard"], "answer": 0},
            {"question": "Qui est le créateur de Mario?", "choices": ["Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri"], "answer": 0},
            {"question": "Dans quel jeu joue-t-on un plombier qui sauve une princesse?", "choices": ["Mario Kart", "Super Mario", "Donkey Kong"], "answer": 1},
            {"question": "Quel personnage est un célèbre hérisson bleu?", "choices": ["Sonic", "Tails", "Shadow"], "answer": 0}
        ],
        "Moyen": [
            // Questions existantes pour le niveau "Moyen"
            {"question": "Sur quelle console est sorti le jeu Sonic the Hedgehog?", "choices": ["NES", "SNES", "Sega Genesis"], "answer": 2},
            {"question": "Combien de lignes faut-il effacer pour faire un Tetris?", "choices": ["2", "3", "4"], "answer": 2},
            {"question": "Dans quel jeu trouve-t-on le personnage de 'Master Chief'?", "choices": ["Call of Duty", "Halo", "Half-Life"], "answer": 1},
            {"question": "Quelle série de jeux met en scène des personnages appelés 'Pikachu' et 'Evoli'?", "choices": ["Pokemon", "Digimon", "Yu-Gi-Oh"], "answer": 0},
            {"question": "Dans Street Fighter, quel personnage utilise le mouvement 'Hadouken'?", "choices": ["Chun-Li", "Ken", "Ryu"], "answer": 2},
            // Nouvelles questions ajoutées
            {"question": "Quel est le premier jeu à avoir utilisé des graphismes 3D?", "choices": ["Wolfenstein 3D", "Doom", "Quake"], "answer": 0},
            {"question": "Dans quel jeu le personnage de Kratos est-il le protagoniste?", "choices": ["God of War", "Assassin's Creed", "Dark Souls"], "answer": 0},
            {"question": "Quel est le nom de la plateforme de jeux en ligne de Valve?", "choices": ["Battle.net", "Steam", "Epic Games"], "answer": 1},
            {"question": "Quel personnage de jeu est un chasseur de démons avec un bras robotique?", "choices": ["Bayonetta", "Dante", "Nero"], "answer": 1},
            {"question": "Dans quel jeu d'horreur doit-on survivre à des monstres dans un manoir?", "choices": ["Resident Evil", "Silent Hill", "Outlast"], "answer": 0}
        ],
        "Difficile": [
            // Questions existantes pour le niveau "Difficile"
            {"question": "Quel est le boss final du jeu 'The Legend of Zelda: Ocarina of Time'?", "choices": ["Ganon", "Ganondorf", "Zant"], "answer": 1},
            {"question": "Dans quel jeu apparaît le personnage de 'M. Bison'?", "choices": ["Street Fighter", "Mortal Kombat", "Tekken"], "answer": 0},
            {"question": "Quel est le nom complet du jeu RPG 'FF7'?", "choices": ["Final Fantasy VII", "Fable VII", "Far Fantasy VII"], "answer": 0},
            {"question": "Dans Metal Gear Solid, comment s'appelle le protagoniste principal?", "choices": ["Sam Fisher", "Solid Snake", "Agent 47"], "answer": 1},
            {"question": "Dans quel jeu trouve-t-on l'arme 'BFG 9000'?", "choices": ["Doom", "Quake", "Half-Life"], "answer": 0},
            // Nouvelles questions ajoutées
            {"question": "Quel jeu a été développé par Bethesda et se déroule en Tamriel?", "choices": ["The Witcher", "Skyrim", "Dark Souls"], "answer": 1},
            {"question": "Quel est le nom du personnage principal dans 'The Witcher'?", "choices": ["Geralt", "Yennefer", "Ciri"], "answer": 0},
            {"question": "Quel studio a développé 'The Last of Us'?", "choices": ["Naughty Dog", "Rockstar", "Ubisoft"], "answer": 0},
            {"question": "Quel est le nom de l'ennemi principal dans 'Final Fantasy VII'?", "choices": ["Sephiroth", "Cloud", "Zack"], "answer": 0},
            {"question": "Dans quel jeu le joueur doit-il élever des créatures appelées 'Digimon'?", "choices": ["Pokémon", "Digimon", "Monster Hunter"], "answer": 1}
        ]
    },
    "en": {
        "Easy": [
            // Questions existantes en anglais pour le niveau "Easy"
            {"question": "Who is the main character in Super Mario?", "choices": ["Luigi", "Mario", "Peach"], "answer": 1},
            {"question": "In what year was Pac-Man released?", "choices": ["1980", "1985", "1990"], "answer": 0},
            {"question": "Which console was created by Nintendo?", "choices": ["PlayStation", "Xbox", "NES"], "answer": 2},
            {"question": "What is the name of the hero in Zelda?", "choices": ["Link", "Zelda", "Ganondorf"], "answer": 0},
            {"question": "Who is Mario's brother?", "choices": ["Toad", "Luigi", "Bowser"], "answer": 1},
            // Nouvelles questions ajoutées
            {"question": "In which game do you capture creatures called Pokémon?", "choices": ["Digimon", "Monster Hunter", "Pokémon"], "answer": 2},
            {"question": "What is the name of the architect behind The Sims series?", "choices": ["Maxis", "EA", "Blizzard"], "answer": 0},
            {"question": "Who created Mario?", "choices": ["Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri"], "answer": 0},
            {"question": "In which game do you play a plumber who saves a princess?", "choices": ["Mario Kart", "Super Mario", "Donkey Kong"], "answer": 1},
            {"question": "Which character is a famous blue hedgehog?", "choices": ["Sonic", "Tails", "Shadow"], "answer": 0}
        ],
        "Medium": [
            // Questions existantes en anglais pour le niveau "Medium"
            {"question": "On which console was Sonic the Hedgehog released?", "choices": ["NES", "SNES", "Sega Genesis"], "answer": 2},
            {"question": "How many lines do you need to clear to get a Tetris?", "choices": ["2", "3", "4"], "answer": 2},
            {"question": "In which game do you play as 'Master Chief'?", "choices": ["Call of Duty", "Halo", "Half-Life"], "answer": 1},
            {"question": "Which game series features characters named 'Pikachu' and 'Eevee'?", "choices": ["Pokemon", "Digimon", "Yu-Gi-Oh"], "answer": 0},
            {"question": "In Street Fighter, which character uses the move 'Hadouken'?", "choices": ["Chun-Li", "Ken", "Ryu"], "answer": 2},
            // Nouvelles questions ajoutées
            {"question": "What was the first game to use 3D graphics?", "choices": ["Wolfenstein 3D", "Doom", "Quake"], "answer": 0},
            {"question": "In which game is Kratos the protagonist?", "choices": ["God of War", "Assassin's Creed", "Dark Souls"], "answer": 0},
            {"question": "What is the name of Valve's online gaming platform?", "choices": ["Battle.net", "Steam", "Epic Games"], "answer": 1},
            {"question": "Which game features a demon hunter with a robotic arm?", "choices": ["Bayonetta", "Dante", "Nero"], "answer": 1},
            {"question": "In which horror game do you survive monsters in a mansion?", "choices": ["Resident Evil", "Silent Hill", "Outlast"], "answer": 0}
        ],
        "Hard": [
            // Questions existantes en anglais pour le niveau "Hard"
            {"question": "Who is the final boss in 'The Legend of Zelda: Ocarina of Time'?", "choices": ["Ganon", "Ganondorf", "Zant"], "answer": 1},
            {"question": "In which game does 'M. Bison' appear?", "choices": ["Street Fighter", "Mortal Kombat", "Tekken"], "answer": 0},
            {"question": "What is the full name of the RPG 'FF7'?", "choices": ["Final Fantasy VII", "Fable VII", "Far Fantasy VII"], "answer": 0},
            {"question": "In Metal Gear Solid, who is the main protagonist?", "choices": ["Sam Fisher", "Solid Snake", "Agent 47"], "answer": 1},
            {"question": "In which game can you find the 'BFG 9000' weapon?", "choices": ["Doom", "Quake", "Half-Life"], "answer": 0},
            // Nouvelles questions ajoutées
            {"question": "Which game was developed by Bethesda and takes place in Tamriel?", "choices": ["The Witcher", "Skyrim", "Dark Souls"], "answer": 1},
            {"question": "What is the main character's name in 'The Witcher'?", "choices": ["Geralt", "Yennefer", "Ciri"], "answer": 0},
            {"question": "Which studio developed 'The Last of Us'?", "choices": ["Naughty Dog", "Rockstar", "Ubisoft"], "answer": 0},
            {"question": "What is the name of the main enemy in 'Final Fantasy VII'?", "choices": ["Sephiroth", "Cloud", "Zack"], "answer": 0},
            {"question": "In which game does the player raise creatures called 'Digimon'?", "choices": ["Pokémon", "Digimon", "Monster Hunter"], "answer": 1}
        ]
    },
    // Ajout d'un tableau pour les questions prédéfinies pour la génération automatique
    predefined: [
        // Liste de questions supplémentaires à utiliser pour la génération automatique
        {"question": "Quel est le meilleur jeu de tous les temps selon Metacritic?", "choices": ["The Legend of Zelda: Ocarina of Time", "Super Mario Bros.", "Tetris"], "answer": 0},
        {"question": "Quel jeu a le plus de ventes dans l'histoire?", "choices": ["Minecraft", "Tetris", "Grand Theft Auto V"], "answer": 0},
        {"question": "Quel personnage est connu sous le nom de 'The Blue Blur'?", "choices": ["Sonic", "Mario", "Kirby"], "answer": 0},
        {"question": "Dans quel jeu trouve-t-on le personnage de 'Lara Croft'?", "choices": ["Tomb Raider", "Assassin's Creed", "Uncharted"], "answer": 0},
        {"question": "Quel jeu a été développé par Valve et a popularisé le genre FPS?", "choices": ["Doom", "Half-Life", "Counter-Strike"], "answer": 1},
        // Ajoutez d'autres questions ici si nécessaire
    ]
};

