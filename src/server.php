<?php

if($_SERVER["REQUEST_METHOD"] == "GET") {
    if($_GET["currency"] == "now" AND $_GET["lang"] == "uk") {
        $data = file_get_contents("https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDUEvyG1oTLG9wJiVtBOZHjQ17zQWK46hw&place_id=ChIJEQNYIIIv2EARV3mQsxSUxJ8&language=uk&reviews_sort=newest");
        $data_raw = json_decode($data, TRUE);

        echo json_encode($data_raw);
    } elseif ($_GET["currency"] == "now" AND $_GET["lang"] == "ru") {
        $data = file_get_contents("https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDUEvyG1oTLG9wJiVtBOZHjQ17zQWK46hw&place_id=ChIJEQNYIIIv2EARV3mQsxSUxJ8&language=ru&reviews_sort=newest");
        $data_raw = json_decode($data, TRUE);

        echo json_encode($data_raw);
    }
}