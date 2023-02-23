<?php 
    
// Prendi il database attuale
$topics = file_get_contents('database.json');

// Converti in php
$topicsDecoded = json_decode($topics, true);
var_dump($topicsDecoded);

// Salva in php la modifica del dato "done"
$singleTopic = [
    "topic" => 'topic',
    "done" => 'done'
];

// Modifica all'array attuale il dato done modificato
// ??? come faccio a non sovrascrivere miei dati precedenti?


// Qui non devo rimettere header('Content-Type: application/json'); ?
// Converti l'array a cui è stato aggiunto il nuovo elemento in json
header('Content-Type: application/json');

$topicsEncoded = json_encode($topicsDecoded);

echo $topicsEncoded;

?>