(()=>{
	var lid = location.search.split("=")[1];
	ajax({
		type:'get',
		url:'data/routes/products/getProductById.php',
		data:'lid='+lid
	}).then(data=>{
		console.log(data);

	});
})();