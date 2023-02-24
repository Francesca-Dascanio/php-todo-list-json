<?php 
    
// Prendi il database attuale
$topics = file_get_contents('database.json');

// Converti in php
$topicsDecoded = json_decode($topics, true);


// Cancella indice selezionato
if (isset($topicsDecoded[$_POST['index']])) {
    unset($topicsDecoded[$_POST['index']]);
    // var_dump($topicsDecoded);
}
else {
    // Non fare nulla
}

var_dump($topicsDecoded);

// Converti l'array a cui è stato aggiunto il nuovo elemento in json
$topicsEncoded = json_encode($topicsDecoded);

// Salva in file database.json
file_put_contents('database.json', $topicsEncoded);

header('Content-Type: application/json');


echo $topicsEncoded;

?>