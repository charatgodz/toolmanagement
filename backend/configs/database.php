<?php
$host       = '127.0.0.1';
$user       = 'root';
$password   = '1234';
$dbname     = 'tool_db';
$database   = mysqli_connect($host, $user, $password, $dbname);

if(!$database)
{
    http_response_code(500);
    echo json_encode([
        'message'   => 'Database connect error.',
        'error'     => mysqli_connect_error()
    ]);
    exit;
}