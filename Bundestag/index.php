<?php

$f3 = require('fatfree/lib/base.php');


$f3->set('DEBUG',1);
if ((float)PCRE_VERSION<7.9)
	trigger_error('PCRE version is out of date');

$f3->config('config.ini');
include 'zugangsdaten.php';

class index {
    function display($f3) {
        $f3->set('content','welcome.htm');
		$db=new DB\SQL(
		    'pgsql:host=DBHOST;port=5432;dbname=DB-Name',
		    'USERNAME',
		    'PASSWORD'
		);
		$f3->set('abstimmungen',$db->exec('SELECT id, thema, CAST(thema AS CHAR(80)) as shortThema, CAST(datum AS CHAR(10)) FROM abstimmung order by datum desc Limit 5;'));

		$f3->set('person_single',$db->exec('SELECT * FROM person
		 WHERE ID=185'));
		echo Template::instance()->render('index.htm');
    }
}
$f3->route('GET /','Index->display');

$f3->route('GET /abstimmung',
    function(){
        echo 'abstimmung';
    }
);

$f3->route('GET /brew/@count',
    function($f3,$params) {
        echo $params['count'].' bottles of beer on the wall.';
    }
);

$f3->run();
?>