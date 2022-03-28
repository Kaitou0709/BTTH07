jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z," "]+$/i.test(value);
},);
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
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
        formselect:
        {
            required:true,
        },
        exampleInputZip1:
        {
            required:true,
            number:true
        },
        exampleInputEmail1:
        {
            required:true,
            email:true
        },
        Sex:
        {
            required:true
        },
        Language:
        {
            required:true
        }
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
        formselect:
        {
            required:"Vui lòng chọn phương án"
        },
        exampleInputZip1:
        {
            required:"Vui lòng nhập ZIP Code",
            number: "Vui lòng nhập số"
        },
        exampleInputEmail1:
        {
            required:"Vui lòng nhập email",
            email: "Email không đúng vui lòng nhập lại"
        },
        Sex:
        {
            required:"Vui lòng nhập giới tính"
        },
        Language:
        {
            required:"Vui lòng nhập ngôn ngữ"
        }
    },
    errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo( element.parents('.container') );
            }
            else if ( element.is(":checkbox") ) 
            {
                error.appendTo( element.parents('.container2') );
            }
            else 
            { 
                error.insertAfter( element );
            }
         }
});
});
