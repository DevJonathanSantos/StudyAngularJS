angular.module("Nuvem3").controller("Nuvem3Ctrl", function($scope,$http,$filter){
    $scope.valoresAprovados = [
        { id: 1,valorEntrada:800001,valorFinanciamento:11000,}
    ];

    $scope.bancos = [
        { id: 1, nome: "Bradesco" },
        { id: 2, nome: "Santander" },
        { id: 3, nome: "Itau" },
        { id: 4, nome: "Next" },
        { id: 5, nome: "Nubank" }
    ];

    $scope.adicionarValores = function () {
        $scope.valoresAprovados.push({});
    };

    $scope.apagarValores = function () {
        $scope.valoresAprovados = []
    };

});