<?php
# auf Callback-Parameter prüfen
//if (isset($_GET["callback"]) && !empty($_GET["callback"])) {
  $callback = (!empty($_GET["callback"]))?$_GET["callback"]:"callback";
# IP-Adresse ermitteln
  $ip = $_SERVER['REMOTE_ADDR'];

$areaTimers = array();
$areaTimers[] = array(
	'id'=>1,
	'name'=>'Bereich Vorne',
	'isEnabled'=> true,
	'startTime'=> '15:35',
    'delay'=>30,
    'item1_duration'=>45,
    'item1_status'=>false,
    'item2_duration'=>50,
    'item2_status'=>true
);
$areaTimers[] = array(
	'id'=>2,
	'name'=>'Bereich Hinten',
	'isEnabled'=> true,
	'startTime'=> '16:45',
    'delay'=>30,
    'item1_duration'=>45,
    'item1_status'=>false,
    'item2_duration'=>50,
    'item2_status'=>true
);



# Rückmeldung zusammenbauen
  $nachricht = "Ihre IP-Adresse lautet:<br />"
               .$ip."<br />"
               ."Abgefragt am:<br /> "
               .date("d.m.Y") . " um " . date("H:i:s")
               ." Uhr (Serverzeit).";
# Header für ein JavaScript
  header("Content-Type: application/javascript");
# Rückmeldung senden
  //echo $callback."('".json_encode(array('sportCats'=>$sportCats))."')";
switch($_GET['action']){
	case 'create':
		die('create');
		break;
	case 'read':
		echo json_encode(array('success'=>true,'dataRoot'=>$areaTimers));
	
		break;
	case 'update':
		die('update');
		break;
	case 'delete':
		die('delete');
		break;
}

//}
?>