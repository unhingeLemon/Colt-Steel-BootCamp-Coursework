$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    e.stopPropagation();
});

$("input[type = 'text']").keypress(function(e){
    if(e.which === 13){
        var text = $(this).val();
        if($(this).val() !== ""){
            $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+text+"</li>");
        }
        $(this).val("");
    }
})

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})

