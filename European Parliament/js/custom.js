document.addEventListener("DOMContentLoaded", function(event) {
	var map;
		
	map = new L.Map('map', { 
		center: [50,20],
		zoom: 4
		
		
		
	});



	var layerUrl = 'http://eumapper.cartodb.com/api/v2/viz/8ee393c2-0dc6-11e4-955e-0edbca4b5057/viz.json';
	
	

	L.tileLayer('http://{s}.api.cartocdn.com/base-light/{z}/{x}/{y}.png', {
		attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
	}).addTo(map);

	var sublayers = [];

	var LayerActions = {
		EVP: function(){
			
		
			
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp >= 0 AND epp <= 15.38)",
				cartocss: "#european_countries_export_merge[ epp <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});

			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp >= 0 AND epp <= 15.38)",
				cartocss: "#european_countries_export_merge[  epp <= 3]{polygon-opacity: 0.7; polygon-fill: #CADEF3;}"
			});
			
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp > 3 AND epp <= 15.38)",
				cartocss: "#european_countries_export_merge[   epp <= 6]{polygon-opacity: 0.7; polygon-fill: #A4CDF6;}"
			});
			
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp > 6 AND epp <= 15.38 )",
				cartocss: "#european_countries_export_merge[ epp <= 9]{polygon-opacity: 0.7; polygon-fill: #7EBBF9;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp > 9  AND epp <= 15.38)",
				cartocss: "#european_countries_export_merge[ epp <= 12]{polygon-opacity: 0.7; polygon-fill: #58AAFC;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (epp >= 12 AND epp <= 15.38)",
				cartocss: "#european_countries_export_merge[ epp > 12]{polygon-opacity: 0.7; polygon-fill: #3399FF;}"
			});
			return true;
		},
		
		
		
		SD: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d >= 0 AND s_d <= 16.23)",
				cartocss: "#european_countries_export_merge[ s_d <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d >= 0 AND s_d <= 16.23)",
				cartocss: "#european_countries_export_merge[  s_d <= 3.2]{polygon-opacity: 0.7; polygon-fill: #F2C2C2;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d > 3.2 AND s_d <= 16.23 )",
				cartocss: "#european_countries_export_merge[   s_d <= 6.5 ]{polygon-opacity: 0.7; polygon-fill: #F49494;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d > 6.5 AND s_d <= 16.23 )",
				cartocss: "#european_countries_export_merge[ s_d <= 9.7]{polygon-opacity: 0.7; polygon-fill: #F66666;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d > 9.7  AND s_d <= 16.23)",
				cartocss: "#european_countries_export_merge[ s_d <= 13]{polygon-opacity: 0.7; polygon-fill: #F83838;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (s_d >= 13 AND s_d <= 16.23 )",
				cartocss: "#european_countries_export_merge[ s_d > 13]{polygon-opacity: 0.7; polygon-fill: #FA0A0A;}"
			});
			return true;
		},
		
		
		
		ALDE: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde >= 0 AND alde <= 11.94)",
				cartocss: "#european_countries_export_merge[ alde <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde >= 0 AND alde <= 11.94)",
				cartocss: "#european_countries_export_merge[  alde <= 2.3]{polygon-opacity: 0.7; polygon-fill: #EAEABA;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde > 2.3 AND alde <= 11.94)",
				cartocss: "#european_countries_export_merge[   alde <= 4.8 ]{polygon-opacity: 0.7; polygon-fill: #EEEE8E;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde > 4.8 AND alde <= 11.94 )",
				cartocss: "#european_countries_export_merge[ alde <= 7.1]{polygon-opacity: 0.7; polygon-fill: #F2F262;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde > 7.1  AND alde <= 11.94)",
				cartocss: "#european_countries_export_merge[ alde <= 9.5]{polygon-opacity: 0.7; polygon-fill: #F6F636;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (alde > 9.5 AND alde <= 11.94)",
				cartocss: "#european_countries_export_merge[ alde > 9.5]{polygon-opacity: 0.7; polygon-fill: #FAFA0A;}"
			});
			return true;
		},
		
		
		GRUENEEFA: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa >= 0 AND greens_efa <= 26)",
				cartocss: "#european_countries_export_merge[ greens_efa <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa >= 0 AND greens_efa <= 26)",
				cartocss: "#european_countries_export_merge[  greens_efa <= 5.1]{polygon-opacity: 0.7; polygon-fill: #C2DEC2;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa > 5.1 AND greens_efa <= 26)",
				cartocss: "#european_countries_export_merge[   greens_efa <= 10.2 ]{polygon-opacity: 0.7; polygon-fill: #94CD94;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa > 10.2 AND greens_efa <= 26 )",
				cartocss: "#european_countries_export_merge[ greens_efa <= 15.3]{polygon-opacity: 0.7; polygon-fill: #66BB66;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa > 15.3  AND greens_efa <= 26)",
				cartocss: "#european_countries_export_merge[ greens_efa <= 20.8]{polygon-opacity: 0.7; polygon-fill: #38AA38;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (greens_efa > 20.8 AND greens_efa <= 26)",
				cartocss: "#european_countries_export_merge[ greens_efa > 20.8]{polygon-opacity: 0.7; polygon-fill: #0A990A;}"
			});
			return true;
		},
		
		
		
		ECR: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr >= 0 AND ecr <= 28.57)",
				cartocss: "#european_countries_export_merge[ ecr <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr >= 0 AND ecr <= 28.57)",
				cartocss: "#european_countries_export_merge[  ecr <= 5.7]{polygon-opacity: 0.7; polygon-fill: #C2C2F2;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr > 5.7 AND ecr <= 28.57)",
				cartocss: "#european_countries_export_merge[   ecr <= 11.4 ]{polygon-opacity: 0.7; polygon-fill: #9494F4;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr > 11.4 AND ecr <= 28.57 )",
				cartocss: "#european_countries_export_merge[ ecr <= 17.1 ]{polygon-opacity: 0.7; polygon-fill: #6666F6;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr > 17.1 AND ecr <= 28.57)",
				cartocss: "#european_countries_export_merge[ ecr <= 22.9]{polygon-opacity: 0.7; polygon-fill: #3838F8;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (ecr > 22.9 AND ecr <= 28.57)",
				cartocss: "#european_countries_export_merge[ ecr > 22.9]{polygon-opacity: 0.7; polygon-fill: #0A0AFA;}"
			});
			return true;
		},
		
		
		
		
		KVELNGL: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl >= 0 AND gue_ngl <= 21.15)",
				cartocss: "#european_countries_export_merge[ gue_ngl <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl >= 0 AND gue_ngl <= 21.15)",
				cartocss: "#european_countries_export_merge[  gue_ngl <= 4.3]{polygon-opacity: 0.7; polygon-fill: #DEC2C2;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl > 4.3 AND gue_ngl <= 21.15)",
				cartocss: "#european_countries_export_merge[   gue_ngl <= 8.5 ]{polygon-opacity: 0.7; polygon-fill: #CD9494;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl > 8.5 AND gue_ngl <= 21.15 )",
				cartocss: "#european_countries_export_merge[ gue_ngl <= 12.7 ]{polygon-opacity: 0.7; polygon-fill: #BB6666;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl > 12.7 AND gue_ngl <= 21.15)",
				cartocss: "#european_countries_export_merge[ gue_ngl <= 16.9]{polygon-opacity: 0.7; polygon-fill: #AA3838;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (gue_ngl > 16.2 AND gue_ngl <= 21.15)",
				cartocss: "#european_countries_export_merge[ gue_ngl > 16.2]{polygon-opacity: 0.7; polygon-fill: #990A0A;}"
			});
			return true;
		},
		
		
		
		
		EFD: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd >= 0 AND efdd  <= 50)",
				cartocss: "#european_countries_export_merge[ efdd  <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd  >= 0 AND efdd  <= 50)",
				cartocss: "#european_countries_export_merge[  efdd  <= 10]{polygon-opacity: 0.7; polygon-fill: #F3DEC2;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd  > 10 AND efdd  <= 50)",
				cartocss: "#european_countries_export_merge[   efdd  <= 20 ]{polygon-opacity: 0.7; polygon-fill: #F6CD94;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd > 20 AND efdd <= 50 )",
				cartocss: "#european_countries_export_merge[ efdd <= 30 ]{polygon-opacity: 0.7; polygon-fill: #F9BB66;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd > 30  AND efdd <= 50)",
				cartocss: "#european_countries_export_merge[ efdd <= 40]{polygon-opacity: 0.7; polygon-fill: #FCAA38;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (efdd > 40 AND efdd <= 50)",
				cartocss: "#european_countries_export_merge[ efdd > 40]{polygon-opacity: 0.7; polygon-fill: #FF990A;}"
			});
			return true;
		},
		
		
		NI: function(){
			sublayers[0].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na >= 0 AND na  <= 44.23)",
				cartocss: "#european_countries_export_merge[ na  <= 0]{polygon-opacity: 0.7; polygon-fill: #F0F0F0;}"
			});
			sublayers[1].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na  >= 0 AND na  <= 44.23)",
				cartocss: "#european_countries_export_merge[  na  <= 8.9]{polygon-opacity: 0.7; polygon-fill: #DEDEDE;}"
			});
			
			sublayers[2].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na  > 8.9 AND na  <= 44.23)",
				cartocss: "#european_countries_export_merge[   na  <= 17.7 ]{polygon-opacity: 0.7; polygon-fill: #CDCDCD;}"
			});
			
			sublayers[3].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na > 17.7 AND na <= 44.23 )",
				cartocss: "#european_countries_export_merge[ na <= 26.5 ]{polygon-opacity: 0.7; polygon-fill: #BBBBBB;}"
			});
			
			sublayers[4].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na > 26.5  AND na <= 44.23)",
				cartocss: "#european_countries_export_merge[ na <= 35.3]{polygon-opacity: 0.7; polygon-fill: #AAAAAA;}"
			});
			
			sublayers[5].set({
				sql: "SELECT * FROM european_countries_export_merge WHERE (na > 35.3 AND na <= 44.23)",
				cartocss: "#european_countries_export_merge[ na > 35.3]{polygon-opacity: 0.7; polygon-fill: #999999;}"
			});
		}
	}
	
	cartodb.createLayer(map, layerUrl)
	.addTo(map)
	.on('done', function(layer) {

		var subLayerOptions = {
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		}
		var sublayer = layer.getSubLayer(0);
				
		sublayer.set(subLayerOptions);
		sublayers.push(sublayer);
		
		/////////////////////////Hier sieht man wie ein neuer SubLayer erzeugt wird Anfang
		
		   //einfach Quellcode kopieren
		   //sublayerZahl umändern 
		   //!!!beim push Änderung nicht vergessen
		var sublayerTwo = layer.createSubLayer({
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		});
		
		sublayers.push(sublayerTwo);
		
		
		
		/////////////////////////Hier sieht man wie ein neuer SubLayer erzeugt wird Ende
		
		var sublayerTree = layer.createSubLayer({
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		});
		sublayers.push(sublayerTree);
		
		var sublayerFour = layer.createSubLayer({
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		});
		sublayers.push(sublayerFour);
		
		var sublayerFive = layer.createSubLayer({
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		});
		sublayers.push(sublayerFive);
		
		var sublayerSix = layer.createSubLayer({
			sql: "SELECT * FROM european_countries_export_merge",
			cartocss: "#european_countries_export_merge{polygon-opacity: 0.0; line-color: #333; line-width: 0; line-opacity: 1; polygon-fill: #A6CEE3;}"
		});
		sublayers.push(sublayerSix);
		
		
		
		
		 
	}).on('error', function() { 
		alert("Fehler");
	});
	
	// Function selection
	
	$('.button').click(function() {
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		LayerActions[$(this).attr('id')]();
	});
	
	// Function for Pie Chart ----------------------------------------------
	
	var dataChar = [
		{
			value: 221,
			color:"#3399FF",
			highlight: "#3399FF",
			label: "EVP"
		},
		{
			value: 191,
			color: "#FA0A0A",
			highlight: "#FA0A0A",
			label: "S&D"
		},
		{
			value: 70,
			color: "#0A0AFA",
			highlight: "#0A0AFA",
			label: "ECR"
		},
		{
			value: 67,
			color: "#FAFA0A",
			highlight: "#FAFA0A",
			label: "ALDE"
		},
		{
			value: 52,
			color: "#990A0A",
			highlight: "#990A0A",
			label: "GUE/NGL"
		},
		{
			value: 50,
			color: "#0A990A",
			highlight: "#0A990A",
			label: "GREENS/EFA"
		},
		{
			value: 48,
			color: "#FF990A",
			highlight: "#FF990A",
			label: "EFDD"
		},
		{
			value: 52,
			color: "#999999",
			highlight: "#999999",
			label: "NI"
		}
	]
	

	
	var context = document.getElementById("myChart").getContext("2d");
	
	var myPieChart = new Chart(context).Pie(dataChar);
	console.log(myPieChart);
	
	// Function for Pie Chart ends here ----------------------------------------------
	 
		

});