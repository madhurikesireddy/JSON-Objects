// Code goes here
var app =  angular.module('app', []);
app.controller('mainCtrl', function($scope){
  
  $scope.data=[{"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"4400ISR",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"ASR1000",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"C3850",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"C4500",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"C4500X",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER",
  "company_name":"CISCO",
  "segment":"SERVICE PROVIDER",
  "product_family":"N1000",
  "contract_number":"90879497",
  "theater":"USA",
  "network_name":"CISCO IT",
  "default_flag":"Y"},
  {"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"90879497","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"90879497","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"90879497","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"90879497","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"90879497","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"4400ISR","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"ASR1000","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C3850","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500X","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N1000","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"90956658","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"4400ISR","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"ASR1000","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C3850","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500X","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N1000","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"91125270","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"4400ISR","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"ASR1000","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C3850","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500X","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N1000","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"92510906","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"4400ISR","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"ASR1000","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C3850","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500X","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N1000","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"92511831","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"4400ISR","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"ASR1000","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C3850","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"C4500X","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N1000","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N3000","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N5000","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"N7000","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSB","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"},{"vertical":"OTHER","company_name":"CISCO","segment":"SERVICE PROVIDER","product_family":"UCSC","contract_number":"92721310","theater":"USA","network_name":"CISCO IT","default_flag":"Y"}];
  

   $scope.dataSeparationMethod = function(d){
            	var formatedData =[];
            	//var data = mqipFQFilterService.getCQData();
            	_.each($scope.data, function(item) { 
            		var  obj = {'id':'', 'label':''};
            		obj.id = item[d];
            		obj.label = item[d];
            		formatedData.push(obj);
            	});
            	var data1 =  _.uniqBy(formatedData, 'id');
            	
            	return data1;
            	
  };
    
    
    $scope.countryName = $scope.dataSeparationMethod('company_name');
     $scope.networkName = $scope.dataSeparationMethod('network_name');
     $scope.segment = $scope.dataSeparationMethod('segment');
     $scope.product_family = $scope.dataSeparationMethod('product_family');
     $scope.contract_number = $scope.dataSeparationMethod('contract_number');
     $scope.theater = $scope.dataSeparationMethod('theater');
     $scope.default_flag = $scope.dataSeparationMethod('default_flag');
     
    
  });
