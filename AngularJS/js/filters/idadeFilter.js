angular.module("Nuvem3").filter("idade",function(){
    return function(input,id,propriedade){
if(input==undefined||id==undefined){
    return

}
        var obj = input.find(f=>f.id==id)
        console.log(obj)
        console.log(id)
        console.log(propriedade)
        // console.log($scope.valoresAprovados)
    return obj ;
    };
});