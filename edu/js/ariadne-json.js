//JSONP version
//we get a json array and manipulate it.
function getItemJSONP(urlTemp)
{
//alert(urlTemp);
jQuery.ajax(
{
    url: urlTemp,
    dataType: "jsonp",
    success: function(data)
    {
    
    var arrayWithJSONS = JSON.parse(data);
    console.log(arrayWithJSONS);

//-------------
    if(arrayWithJSONS[0].languageBlocks.length!==undefined && arrayWithJSONS[0].languageBlocks!==undefined )
    {
        for(var i = 0; i<arrayWithJSONS[0].languageBlocks.length; i++)//run all different languages version of this item
        {
        var language = Object.keys(arrayWithJSONS[0].languageBlocks[i]); //keys for different language versions of this item. (i.e en, gr, no,)
        
        languageBlock = arrayWithJSONS[0].languageBlocks[i][language[0]]; // We always get language[0] as key

        if(languageBlock.title!==undefined)
        {
	        var thisTitle = languageBlock.title;
	        if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
	        {
		        thisTitle = "<a target=\"_blank\" href=\""+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+"\">"+languageBlock.title+"</a>"
	        }
	        
		        document.getElementById('item_title').innerHTML =  thisTitle;
        }
        
        if(languageBlock.description!==undefined)
        {
	        document.getElementById('item_description').innerHTML = languageBlock.description;
        }
        
        if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
        {
	        jQuery('#itemAccess').append('<a target="_blank" href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" class="access  secondary">Access to the resource</a>');
        }
        
        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
        {
	        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/html'){
	        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
	        
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/xml'){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/xml.png" /> </a>');
	        
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("/pdf")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/pdf.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("excel")>=0){
		       jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/x-applix-spreadsheet.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("word")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/word.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("ppt")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/ppt.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("application")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/application.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("audio")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/audio.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("video")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/video.png" /> </a>');
	        }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("image")>=0){
		        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
	        
	        }
	        else
	        {
	        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
	        
	        }
	        
        }
        else
        {
	        jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
        
        }
        
        if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
        {
	        jQuery('#itemMediaFormat').append('<span class="forKomma last">'+arrayWithJSONS[0].expressions[0].manifestations[0].parameter+'</span>');
        
        }
        
        if(arrayWithJSONS[0].tokenBlock.ageRange!==undefined)
        {
	        jQuery('#ageRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
	        jQuery('#itemAgeRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
        }
        else
        {
	        jQuery('#itemAgeRange').append('-');
        }
        
        if(arrayWithJSONS[0].rights.url!==undefined)
        {
	        if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-sa")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-nd")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nd")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-sa")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by")>=0){
		        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by.png"></a></nav>');
	        
	        }
	        else
	        {
		        jQuery('#item_copyrights').append('<nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank">'+arrayWithJSONS[0].rights.url+'</a></nav>');
	        }
        
        }
        else if(arrayWithJSONS[0].rights.description!==undefined )
        {
	        if(arrayWithJSONS[0].rights.description['en']!==undefined )
	        {
		        jQuery('#item_copyrights').append('<span>Rights: </span><nav  class="itemRights">'+arrayWithJSONS[0].rights.description['en']+'</nav>');
	        }
        }
        else
        {
	        jQuery('#item_copyrights').append('-');
        }
        
        if(arrayWithJSONS[0].set!==undefined)
        {
	        jQuery('#itemCollection').append('<span class="forKomma last">'+arrayWithJSONS[0].set+'</span>');
        }
        
        if(arrayWithJSONS[0].expressions[0].language!==undefined)
        {
	        jQuery('#itemLanguage').append('<span class="flag '+arrayWithJSONS[0].expressions[0].language+'flag">'+arrayWithJSONS[0].expressions[0].language+'</span>');
        }
        
        
        if(arrayWithJSONS[0].tokenBlock.endUserRoles.length!==undefined)
        {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.endUserRoles.length;j++)
	        //*ARRAY of keywords in current version
	        {
		        if(j==arrayWithJSONS[0].tokenBlock.endUserRoles.length-1)
		        {
			        jQuery('#itemIntendedAudience').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
		        
		        }
		        else
		        {
			        jQuery('#itemIntendedAudience').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
		        
		        }
	        }
        }
         else
        {
	        jQuery('#itemIntendedAudience').append('-');
        }
        
        
        if(arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
        {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
	        {
		        if(j==arrayWithJSONS[0].tokenBlock.learningResourceTypes.length-1){
			        jQuery('#itemResourceType').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
		        }
		        else
		        {
			        jQuery('#itemResourceType').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
		        }
	        }
        }
        else
        {
	        jQuery('#itemResourceType').append('-');
        }
        
        if(arrayWithJSONS[0].tokenBlock.contexts!==undefined)
        {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
	        {
		        if(j==arrayWithJSONS[0].tokenBlock.contexts.length-1){
		        jQuery('#itemEducationalContext').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
		        }
		        else
		        {
			        jQuery('#itemEducationalContext').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
			    }
	        
	        }
        }
        else
        {
	        jQuery('#itemEducationalContext').append('-');
        }
        
        
        if(languageBlock.keywords.length!==undefined)
        {
	        for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
	        {
		        if(j==languageBlock.keywords.length-1)
		        {
		            jQuery('#item_keywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link last">'+languageBlock.keywords[j]+'</a>');
		        }
		        else
		        {
		            jQuery('#item_keywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link">'+languageBlock.keywords[j]+'</a>');
		        }
	        }
        }
        else
        {
            jQuery('#item_keywords').append('-');
        }
        
        }
    }
    
    
    
    
//if languageBlocks has ONLY one value => not array
    if(arrayWithJSONS[0].languageBlocks.length==undefined && arrayWithJSONS[0].languageBlocks!==undefined )
    {
	    var language = Object.keys(arrayWithJSONS[0].languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
	    /////get always language "en" else the first one
	    if(arrayWithJSONS[0].languageBlocks['en']==undefined)
	    {
		    languageBlock = arrayWithJSONS[0].languageBlocks[language[0]]; // We always get language[0] as key
	    }
	    else
	    {
		    languageBlock = arrayWithJSONS[0].languageBlocks['en']; // We always get language['en'] as key
	    }
	    
	    if(languageBlock.title!==undefined)
	    {
		    var thisTitle = languageBlock.title;
			if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
		    {
			    thisTitle = "<a target=\"_blank\" href=\""+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+"\">"+languageBlock.title+"</a>"
		    }
		    document.getElementById('item_title').innerHTML = thisTitle ;
	    }
	    
	    
	    if(languageBlock.description!==undefined)
	    {
		    document.getElementById('item_description').innerHTML = languageBlock.description;
	    }
	    
	    
	    if(arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url!==undefined)
	    {
		    jQuery('#itemAccess').append('<a target="_blank" href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" class="access  secondary">Access to the resource</a>');
	    }
	    
	    if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
	    {
		    if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/html')
		    {
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter=='text/xml'){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/xml.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("/pdf")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/pdf.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("excel")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/x-applix-spreadsheet.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("word")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/word.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("ppt")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/ppt.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("application")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/application.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("audio")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/audio.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("video")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img  src="images/icons/video.png" /> </a>');
		    }else if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter.search("image")>=0){
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'" /> </a>');
		    
		    
		    }else{
			    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
		    
		    }
		    
	    }
	    else
	    {
		    jQuery('#itemThumb').append('<a href="'+arrayWithJSONS[0].expressions[0].manifestations[0].items[0].url+'"><img class="itemsMedia" src="images/no-image.gif" /> </a>');
	    }
	    
	    if(arrayWithJSONS[0].expressions[0].manifestations[0].parameter!==undefined)
	    {
	    jQuery('#itemMediaFormat').append('<span class="forKomma last">'+arrayWithJSONS[0].expressions[0].manifestations[0].parameter+'</span>');
	    
	    }
	    
	    if(arrayWithJSONS[0].tokenBlock.ageRange!==undefined)
	    {
	        jQuery('#ageRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
	        jQuery('#itemAgeRange').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.ageRange+'</span>');
	    }
	    else
        {
	        jQuery('#itemAgeRange').append('-');
        }
	    
	    if(arrayWithJSONS[0].rights.url!==undefined)
	    {
	        if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-sa")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc-nd")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nd")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nd.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-sa")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-sa.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by-nc")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by-nc.png"></a></nav>');
	        }else if(arrayWithJSONS[0].rights.url.search("licenses/by")>=0){
	        jQuery('#item_copyrights').append(' <nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank"><img style="display:inline;" src="images/cc/cc-by.png"></a></nav>');
	        
	        }
	        else
	        {
	            jQuery('#item_copyrights').append('<span>Rights: </span><nav  class="itemRights"><a href="'+arrayWithJSONS[0].rights.url+'" class="secondary" target="_blank">'+arrayWithJSONS[0].rights.url+'</a></nav>');
	        }
	        
	    }
	    else if(arrayWithJSONS[0].rights.description!==undefined )
	    {
	        if(arrayWithJSONS[0].rights.description['en']!==undefined ){
	        jQuery('#item_copyrights').append('<span>Rights: </span><nav  class="itemRights">'+arrayWithJSONS[0].rights.description['en']+'</nav>');
	        }
	    }
	    else
        {
	        jQuery('#item_copyrights').append('-');
        }
	    
	    
	    
	    if(arrayWithJSONS[0].set!==undefined){
	    jQuery('#itemCollection').append('<span class="forKomma last">'+arrayWithJSONS[0].set+'</span>');
	    }
	    if(arrayWithJSONS[0].expressions[0].language!==undefined)
	    {
	    jQuery('#itemLanguage').append('<span class="flag '+arrayWithJSONS[0].expressions[0].language+'flag">'+arrayWithJSONS[0].expressions[0].language+'</span>');
	    
	    }
	    
	    
	    if(arrayWithJSONS[0].tokenBlock.endUserRoles!=undefined && arrayWithJSONS[0].tokenBlock.endUserRoles.length!==undefined)
	    {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.endUserRoles.length;j++)//*ARRAY of keywords in current version
	        {
	        if(j==arrayWithJSONS[0].tokenBlock.endUserRoles.length-1){
	        jQuery('#itemIntendedAudience').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
	        
	        }else{
	        jQuery('#itemIntendedAudience').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.endUserRoles[j]+'<span>');
	        
	        }
	        }
	    }
	    else
        {
	        jQuery('#itemIntendedAudience').append('-');
        }
	    
	    
	    
	    if(arrayWithJSONS[0].tokenBlock.learningResourceTypes!==undefined && arrayWithJSONS[0].tokenBlock.learningResourceTypes.length!==undefined)
	    {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.learningResourceTypes.length;j++)//*ARRAY of keywords in current version
	        {
	        if(j==arrayWithJSONS[0].tokenBlock.learningResourceTypes.length-1){
	            jQuery('#itemResourceType').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
	        }
	        else
	        {
	            jQuery('#itemResourceType').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.learningResourceTypes[j]+'<span>');
	        }
	        
	        }
	    }
	    else
        {
	        jQuery('#itemResourceType').append('-');
        }
	    
	    
	    if(arrayWithJSONS[0].tokenBlock.contexts!==undefined)
	    {
	        for(var j=0; j<arrayWithJSONS[0].tokenBlock.contexts.length;j++)//*ARRAY of keywords in current version
	        {
	        if(j==arrayWithJSONS[0].tokenBlock.contexts.length-1){
	        jQuery('#itemEducationalContext').append('<span class="forKomma last">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
	        
	        }else{
	        jQuery('#itemEducationalContext').append('<span class="forKomma">'+arrayWithJSONS[0].tokenBlock.contexts[j]+'<span>');
	        
	        }
	        
	        }
	    }
	    else
        {
	        jQuery('#itemEducationalContext').append('-');
        }
	    
	    
	    if(languageBlock.keywords!==undefined && languageBlock.keywords.length!==undefined)
	    {
	        for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
	        {
	            if(j==languageBlock.keywords.length-1)
	            {
	                jQuery('#item_keywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link last">'+languageBlock.keywords[j]+'</a>');
	            }
	            else
	            {
	                jQuery('#item_keywords').append('<a  href="listing.html?query='+languageBlock.keywords[j]+'" class="forKomma link">'+languageBlock.keywords[j]+'</a>');
	            }
	            
	        }
	    }
	    else
	    {
	        jQuery('#item_keywords').append('-');
	    }
	    
    }
    

    
    
            
    
//end of -success- of getItemJSONP
}})}

