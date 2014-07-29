<?php

$obj_xml = simplexml_load_file("data_2014_all.xml");
$daten = fopen('daten.csv', 'a');


function calculate_fraction($current, $seats){
	$result = $current/$seats*100;
	return $result;
}



//$headerArray = array('iso');


//for ($p=0; $p<8;$p++){
//	$headerFromData = $obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[$p]->groupname[0];
//	echo $headerFromData;	
//	array_push($headerArray, $headerFromData);
//}

//fputcsv($daten, $headerArray);

$header = array('iso',
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[0]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[1]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[2]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[3]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[4]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[5]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[6]->groupname[0],
				$obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[7]->groupname[0]);
fputcsv($daten, $header);

$overall_seats = $obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[8]->seats[0];


for($i= 0; $i<30;$i++){

		$row_array =  array($obj_xml->countryresults[0]->country[$i]->countrycode[0],
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[0]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[0]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[1]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[1]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[2]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[2]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[3]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[3]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[4]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[4]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[5]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[5]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[6]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[6]->seats[0]),2,'.',''),
							number_format(calculate_fraction($obj_xml->countryresults[0]->country[$i]->countrygroup[0]->resultbygroup[7]->seats[0],$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[7]->seats[0]),2,'.',''));
								fputcsv($daten, $row_array);
}
	
	

	

	





echo $obj_xml->countryresults[0]->country[0]->countrygroup[0]->resultbygroup[0]->seats[0]/$obj_xml->europeresults[0]->europeanresults[0]->results[0]->resultbygroup[8]->seats[0]*100;

fclose($daten);


?>
