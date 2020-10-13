class RestController{
    contructor(){
        
    }
    Get(url_d, punt_controller){
        $.ajax({
               url: url_d,
               method: 'GET',
               success: function(risposta2){
                   var array=Object.values(risposta2);
                   console.log(array);
                   punt_controller.init_Posts(array);     
               },
               error: function(){
                console.log("errore");
           }
        });
    }
    Post(url_d, post2post){
            $.ajax({
                url: url_d,
                method: 'POST',
                dataType: 'json',
                data: post2post,
                success: function(){
                    console.log(post2post);   
                },
                error: function(){
                    console.log("errore");
                }    
            })
    }
    Delete(url_d, id_n){
        var id=id_n;
        $.ajax({
                url: url_d+'/'+id,
                method: 'DELETE',
                contentType:'application/json',
                success: function(){
                    console.log("ole");  
                },
                error: function(){
                    console.log("errore");
                }    
            })
    }
    Put(url_d, path_part, values){
        $.ajax({
                url: url_d+'/'+path_part+'.json',
                method: 'PUT',
                contentType:'application/json',
                data:JSON.stringify(values),
                success: function(){
                    console.log("ole");    
                },
                error: function(){
                    console.log("errore");
                }    
            }) 
    }
    Patch(url_d, id_post, field, value){
        var stre="[{"+field+": "+value+"}]";
        var obj=eval(stre);
        console.log(obj[0]);
        $.ajax({
            url: url_d+"/"+id_post,
            method: 'PATCH',
            dataType: 'json',
            data: obj[0],
            success: function(){
                console.log("patch successfully completed");
            },
            error: function(){
                console.log("error");
            }
        })
    }
}