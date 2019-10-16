<?php
header('Content-Type: Application/json; charset=utf8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require './configs/defines.php';
require './configs/routes.php';
require './configs/database.php';

if($method === 'OPTIONS') exit;
if(isset($routes[$route][$method]))
{
    require $routes[$route][$method];
}
else 
{
    http_response_code(404);
    echo json_encode(['message' => 'Page not found.']);
}