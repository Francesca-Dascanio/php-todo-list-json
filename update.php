<?php 
    
// Prendi il database attuale
$topics = file_get_contents('database.json');

// Converti in php
$topicsDecoded = json_decode($topics, true);


// Salva in php il topic modificato
$updatedTopic = [
    "topic" => $_POST['topic'],
    "done" => $_POST['done']
];


// Sostituisci all'array attuale il topic modificato senza far scomparire tutto il resto del database
if (isset($topicsDecoded[$_POST['index']])) {
    $topicsDecoded[$_POST['index']] = $updatedTopic;
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