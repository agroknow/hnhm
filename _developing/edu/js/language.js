// Get the parameters of the url
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value) {
                                             vars[key] = value;
                                             });
	return vars;
}


//change language
function changeLanguage(lang) 
			{
				var urlLang = getUrlVars()["lang"];
            	console.log("lang:"+lang);
            	
            	if(urlLang!=undefined)
            	{
        			console.log("selected language : "+lang);
        			/*redirect to new language*/
        			if(window.location.href.indexOf('?')== -1) //no parameters defined
        			{
            			window.location.href = window.location.href.replace("#", "")+"?lang="+lang;
        			}
        			else // defined parameters
        			{
	        			var url = window.location.href.split("lang=")[0];
	        			window.location.href = url + "lang="+lang;      			
	        		}
	        		
            	}
            	else
            	{
            		console.log(lang);

					/*redirect to new language*/
					window.location.href.indexOf('?')== -1 ? window.location.href = window.location.href+"?lang="+lang : window.location.href = window.location.href.split("lang=")[0]+"&lang="+lang;
	            	
            	}

			}

/* call language files */
function language()
{            	

	var lang = getUrlVars()["lang"];
	console.log("l@ng:"+lang);
	            	
	if(lang!=undefined)
	{
		jQuery.ajax({
		url: "http://greenlearningnetwork.com/finders_files/hnhm_translations/"+lang.replace("#", "")+".json",
		dataType: 'json',
		/* jsonp: 'callback', */
		/* jsonpCallback: 'jsonCallback', */
		success: function(item)
		{
/* 			console.log(item); */
			// fixed translations
			var translations = item.elements;
			if (translations instanceof Array) 
			{	
				jQuery.each( translations, function(rk,translation)
				{
					if (translation.id) 
					{
						if (translation.hu) 
						{
							//$("#"+translation.id).text(translation.english_translation);
							jQuery('*[data_translation="'+translation.id+'"]').text(translation.hu);
						} 
					}				
				});
				
			}
			
			/* after get translations, change all links to current language */
			$("a").attr('href', function(i, h) 
		   {
			   if(h!=undefined)
			   {
				   return h + (h.indexOf('?') != -1 ? "&lang="+lang : "?lang="+lang);
			   }
			   else
			   {
				   return h;
			   }
		   });
		  
		   
		  }});
		

     	
	}
}