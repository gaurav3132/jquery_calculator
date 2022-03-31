 /*
 $('#add').click(function(){
    let data1=$('#num1').val();
    let data2=$('#num2').val();
    let sum= (~~data1) + (~~data2);
    $('#output').html(sum);

})




$('#sub').click(function(){
    let data1=$('#num1').val();
    let data2=$('#num2').val();
    let diff= data1 - data2;
    $('#output').html(diff);

})

$('#mul').click(function(){
    let data1=$('#num1').val();
    let data2=$('#num2').val();
    let mul= data1 * data2;
    $('#output').html(mul);

})

$('#div').click(function(){
    let data1=$('#num1').val();
    let data2=$('#num2').val();
    let div= data1 / data2;
    $('#output').html(div);

})
*/
$(function(){
    $('.operation').click(function(){
        let operation =$(this).attr('id');
        let num1=$('#num1').val();
        let num2=$('#num2').val();
    
        let result;
    
        switch(operation){
            case 'add':
                result=parseFloat(num1)+parseFloat(num2);
                break;
            
            case 'sub':
                result=num1 - num2;
                break;
    
            case 'mul':
                result=num1 * num2;
                 break;
                 
            case 'div':
                result=num1 / num2;
                break;
        }
    
        $('#output').html(result);
    })
})



