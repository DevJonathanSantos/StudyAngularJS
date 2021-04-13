//cria um modulo
angular.module("ListaTelefonica",[]);
//selecionar o modulo criado
angular.module("ListaTelefonica")
//cria um controller
.controller("Ctrl",function($scope,$http){
    $scope.contatos=[
    //     {nome:"Jonathan",telefone:5254555, cor:"blue"},
    //     {nome:"Miriane",telefone:5965875,cor:"lightcoral"},
    //     {nome:"Serena",telefone:5874585,cor:"blue"},
    //     {nome:"Pedro",telefone:5214554,cor:"lightcoral"}
    ];
    $scope.operadoras=[
        {nome:"Tim",codigo:14},
        {nome:"Oi",codigo:10},
        {nome:"Vivo",codigo:07}
    ]

    var carregarContatos=function(){
        $http.get("https://localhost:44326/devbook/teste").then(function(data,status){
            console.log(data.data);

            $scope.contatos=data.data;
        });
    };
    carregarContatos();
    var xx= "";
    console.log("Response: "+xx);

    $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
     };

     $scope.apagarContatos = function(contatos){
       $scope.contatos=  contatos.filter(function(contato){
     if(!contato.selecionado) return contato;
        });         
     };

     $scope.isContatoSelecionado = function(contatos){
         return contatos.some(function(contato){
             return contato.selecionado;
         });
        };
});

