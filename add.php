<?php 
    
// Prendi dati attuali del database
$topics = file_get_contents('database.json');

// Convertili in php
$topicsDecoded = json_decode($topics, true);



// Salva in php il nuovo topic inserito dall'utente
$newTopic = [
    "topic" => $_POST['topic']['topic'],
    "done" => false
];

// Aggiungi all'array attuale topicsDecoded il nuovo topic 
$topicsDecoded[] = $newTopic;
var_dump($topicsDecoded);

// Qui non devo rimettere header('Content-Type: application/json'); ?
// Converti l'array a cui è stato aggiunto il nuovo elemento in json
header('Content-Type: application/json');

$topicsEncoded = json_encode($topicsDecoded);

echo $topicsEncoded;

?>