const Restos = [
    {
        "name":"Bronco",
        "address":"39 Rue des Petites Écuries, 75010 Paris",
        "lat":48.8737815,
        "long":2.3501649,
        "ratings":[
            {
                "stars":4,
                "comment":"Un excellent restaurant, j'y reviendrai ! Par contre il vaut mieux aimer la viande."
            },
            {
                "stars":5,
                "comment":"Tout simplement mon restaurant préféré !"
            }
        ]
    },
    {
        "name":"Les Résistants",
        "address":"16-18 Rue du Château d'Eau, 75010 Paris",
        "lat":48.870020,
        "long":2.360668,
        "ratings":[
            {
                "stars":5,
                "comment":"Belle découverte que ce restaurant à 2 pas de République ! Tout est TOP: le cadre, l'accueil, la table."
            },
            {
                "stars":4,
                "comment":"Un lieu très chaleureux, le service hyper accueillant à partir de la première seconde dans le restaurant, une belle histoire autour des produits et l’approche choisie. Un seul bémol - les plats n’étaient pas aux attentes car le bœuf un peu sec et la poulpe pas très tendre."
            }
        ]
    },
    {
        "name":"Street Bangkok",
        "address":"3 Rue Eugène Varlin, 75010 Paris",
        "lat":48.877871,
        "long":2.365153,
        "ratings":[
            {
                "stars":4,
                "comment":"Très belle découverte, la nourriture est typique et super bonne, bien servi et rapidement, citronnade maison offerte, bon rapport qualité/prix et décoration super jolie. Néanmoins les places assises sont très limitées."
            },
            {
                "stars":5,
                "comment":"Ah l'agneau mijoté aux saveurs multiples et subtiles ! Si copieux qu'il me fait plusieurs repas. J'amortis bien les 14 euros."
            }
        ]
    },
    {
        "name":"IMA Cantine",
        "address":"39 quai de Valmy, 75010 Paris",
        "lat":48.870148,
        "long":2.366189,
        "ratings":[
            {
                "stars":5,
                "comment":"C'était vraiment super bon, tout végétarien et très copieux. L'assiette du jour est parfaite quand on ne sais pas quoi choisir :)"
            },
            {
                "stars":4,
                "comment":"Produits très frais, salades et déserts proposés visibles dès le comptoir, cuisine végétarienne recherchée, une réussite !"
            }
        ]
    },
    {
        "name":"Le Bichat",
        "address":"11 rue Bichat, 75010 Paris",
        "lat":48.870435,
        "long":2.368654,
        "ratings":[
            {
                "stars":2,
                "comment":"Très déçu par le plat intitulé «  viande » qui est à 11€ Tout de même  et qui manque cruellement de saveur."
            },
            {
                "stars":4,
                "comment":"Super restaurant bio que je recommande pour la simplicité, le concept, l'ambiance et le prix. J'enlève juste une étoile pour le dessert car la gateau banane chocolat sans gluten était un peu sec pour son prix. "
            },
            {
                "stars":5,
                "comment":"Très chouette restaurant. J'apprécie beaucoup les recettes végétariennes surtout les salades l'été."
            }
        ]
    },
    {
        "name":"Au Pavillon",
        "address":"65 Boulevard de Sébastopol, 75001 Paris",
        "lat":48.863478,
        "long":2.350521,
        "ratings":[
            {
                "stars":1,
                "comment":"2h a courir après les serveurs pour passer commande ou passer à la suite, une honte. "
            },
            {
                "stars":4,
                "comment":"Bonne ambiance, menu sympa, original, varié. Coktails proposés goûteux, orignaux !"
            },
            {
                "stars":4,
                "comment":"Un peu bruyant mais carte originale et plats de bonne qualité. Bémol sur l'attente, malgré un service très sympa et des serveurs souriants."
            }
        ]
    },
    {
        "name":"Soya",
        "address":"20 Rue de la Pierre Levée, 75011 Paris",
        "lat":48.868164,
        "long":2.370198,
        "ratings":[
            {
                "stars":5,
                "comment":"Sans conteste un des tous meilleurs resto végétarien à Paris. Les plats ont énormément de goûts et sont originaux."
            },
            {
                "stars":4,
                "comment":"Produits de qualité, cadre et service agréable. Excellent velouté, en revanche un peu déçu par le mezze et le carrot cake."
            }
        ]
    },
    {
        "name":"Le Petit Cambodge",
        "address":"20 Rue Alibert, 75010 Paris",
        "lat":48.871742,
        "long":2.368106,
        "ratings":[
            {
                "stars":3,
                "comment":"Déçus de notre soirée au Petit Cambodge. Les plats sont appétissants certes, mais le goût et les saveurs n’y sont pas."
            },
            {
                "stars":4,
                "comment":"Plats typiques et bons. Carte variée. Service souriant et efficace."
            }
        ]
    },
    {
        "name":"Frenchie",
        "address":"5 Rue du Nil, 75002 Paris",
        "lat":48.867785,
        "long":2.347893,
        "ratings":[
            {
                "stars":5,
                "comment":"On avait adoré le frenchie bar à vin et on a été bluffé par le restaurant! Le service est impeccable, attentionné, rapide et discret!"
            },
            {
                "stars":4,
                "comment":"Service agréable et souriant. Le restaurant s’est adapté aux allergies communiquées. Nous avons passé un bon moment et avons apprécié les différents services."
            }
        ]
    },
    {
        "name":"Popolare",
        "address":"111 Rue Réaumur, 75002 Paris",
        "lat":48.868162,
        "long":2.343293,
        "ratings":[
            {
                "stars":2,
                "comment":"Phénomène de mode ni plus ni moins. Nous avons Attendu 1h30 dehors pour des pizzas qui arrivent finalement froides et caoutchouteuses. J'ai mis deux étoiles juste parce que le serveur était sympa."
            },
            {
                "stars":4,
                "comment":"C’est bon, j’ai pris une quatre fromages et j’étais satisfaite par le service. Les serveurs sont cool!"
            }
        ]
    },
    {
        "name":"Chez Papa",
        "address":"153 Rue Montmartre, 75002 Paris",
        "lat":48.870601,
        "long":2.342593,
        "ratings":[
            {
                "stars":4,
                "comment":"J'aime cet endroit. On te sert rapidement et la nourriture est relativement bonne. Le seul beug c'est au niveau des desserts."
            },
            {
                "stars":4,
                "comment":"Du sud ouest généreux dans tous les sens du terme: par l'ambiance, par le service et par les plats !"
            },
            {
                "stars":2,
                "comment":"Acceptable mais décevant, un manque d'authenticité flagrant en cuisine, produits d'origine lambda, le magret séché est sans saveur et tranché à la machine."
            }
        ]
    },
    {
        "name":"La Maison Bleue",
        "address":"7 Place Franz Liszt, 75010 Paris",
        "lat":48.878105,
        "long":2.351111,
        "ratings":[
            {
                "stars":1,
                "comment":"Le brunch était pas mal, mais le service a tout gâché!!"
            },
            {
                "stars":5,
                "comment":"Très bon restaurant au cœur de Paris. Du service à l'assiette tout y est de qualité. Des plats travaillés avec des  produits de qualités pour un prix raisonnable. Une bonne adresse pour les amateurs de produit frais."
            }
        ]
    },
    {
        "name":"Mamagoto",
        "address":"5 Rue des Petits Hôtels, 75010 Paris",
        "lat":48.877267,
        "long":2.354457,
        "ratings":[
            {
                "stars":5,
                "comment":"Un petit restaurant original, une découverte et un régal à la clé !"
            },
            {
                "stars":3,
                "comment":"C'était bon, l'endroit était plutôt calme et cosy mais j'ai été un peu déçu par le service"
            }
        ]
    },
    {
        "name":"Auciel",
        "address":"19 Boulevard Saint-Martin, 75003 Paris",
        "lat":48.868148,
        "long":2.359874,
        "ratings":[
            {
                "stars":2,
                "comment":"bon mais un peu trop épicé. Donc si vous aimez pimenté, c'est pour vous !"
            },
            {
                "stars":5,
                "comment":"Meilleure fondue chinoise à Paris avec la carte buffet à volonté! Tous frais et service impeccable!"
            }
        ]
    },
    {
        "name":"BigLove",
        "address":"30 Rue Debelleyme, 75003 Paris",
        "lat":48.862087,
        "long":2.363534,
        "ratings":[
            {
                "stars":3,
                "comment":"La nourriture est bonne. Le seul inconvénient est que les tables bougent beaucoup ou encore sont à la même hauteur que les chaises ce qui est pas dérangeant pour prendre un verre mais pas arrangeant pour manger un repas."
            },
            {
                "stars":2,
                "comment":"Lieu sympa, bon produits, bière pas chère avant 20h, mais avec leur système de monnaie locale, on a vite fait de se laisser aller et dépenser plus que prévu ..."
            }
        ]
    },
    {
        "name":"La Cantine de Belleville",
        "address":"108 Boulevard de Belleville, 75020 Paris",
        "lat":48.870838,
        "long":2.378729,
        "ratings":[
            {
                "stars":1,
                "comment":"Repas froid, service aléatoire et désordonné,  attente interminable pour un passage en caisse glacial et obligé de se fâcher pour obtenir un justificatif de paiement"
            },
            {
                "stars":2,
                "comment":"Restaurant qui ne casse pas trois pattes à un canard. Les plats sont très basiques, et le goût n’est pas forcément au rendez-vous, les pommes de terre étaient surgelés."
            }
        ]
    }
];

export {Restos};