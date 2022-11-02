# CRUD-App-express-postgreSQL

Cet excercice vous montre comment créer une application CRUD( Create, read, Update et Delete ou encore Créer, lire, mise à jour et suppression de données). Qu'est-ce que signifie le code ? Pas de panoque, je vous l'explique ligne après ligne.

1. Le dossier config :

Le dossier config contient le fichier database.js qui contient la configuration et la connexion avec notre base de données postgreSQL. Pour ce faire, il faudrait installer le package 'pg' ou node-postgre enfin d'avoir acces au client postgres qui contient comme un objet le username, le host, le nom du base de données, le password et le numero du port. En fin, il faudrait exporter le client pour qu'il soit reutilisable.

2. Le dossier queries

Le dossier contient un fichier queries.js qui contient le script SQL qui vont permettre d'excecuter les differntes operations.
