<?php 
    
    // Ritorna i dati Json in array php
    $topics = file_get_contents('database.json');

    // Con file_get_contents restituisce una stringa
    // var_dump($topics);

    $topics = json_decode($topics, true);

    // Con json-decode restituisce di nuovo un array php
    // var_dump($topics);

    // Aggiungi dati all'array php e rimanda a Json
    $response = [
        'success'=> true,
        'message' => 'Ok',
        'code' => 200,
        'data' => $topics
    ];

    $jsonResponse = json_encode($response);

    header('Content-Type: application/json');

    echo $jsonResponse;
   
?>