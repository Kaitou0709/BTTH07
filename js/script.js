jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z," "]+$/i.test(value);
},); 
$(document).ready(function(){
    $("#Registrantion-Form").validate
({
    rules:
    {
        exampleUserId1:
        {
            required:true,
            rangelength: [5, 12]
        },
        exampleInputPassword:
        {
            required:true,
            rangelength: [7, 12]
        },
        exampleInputName1:
        {
            required:true,
            lettersonly: true
        },
    },
    messages:
    {
        exampleUserId1:
        {
            required: "Vui lòng nhập ID",
            rangelength: "Vui lòng nhập ID có độ dài từ 5 đến 12"
        },
        exampleInputPassword:
        {
            required:"Vui lòng nhập password",
            rangelength: "Vui lòng nhập password có độ dài từ 7 đến 12"
        },
        exampleInputName1:
        {
            required: "Vui lòng nhập tên",
            lettersonly: "Vui lòng nhập đúng tên"
        },
    }
});
});
