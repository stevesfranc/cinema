#!/bin/bash

# Vérifier si le paramètre a été fourni
if [ -z "$1" ]; then
    echo "Veuillez fournir un nom de module en tant que paramètre."
    exit 1
fi

name="$1"
echo "Creation du module : $name"

#create doc
mkdir $name

# Accéder au répertoire créé
cd $name


file_tables=('contollers' 'modules' 'services' 'middlewares' 'interfaces' 'dto' 'entities' 'utils')

for item in "${file_tables[@]}"
do

# Créer le répertoire avec le nom spécifié
mkdir "$item"

# Accéder au répertoire créé
cd $item

# Créer un sous-répertoire avec le même nom
touch "$name"".$item.ts"

# Revenir au répertoire parent
cd ..


done

